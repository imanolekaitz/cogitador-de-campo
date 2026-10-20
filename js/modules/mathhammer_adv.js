/**
 * MÓDULO: MATHHAMMER AVANZADO (11ª / 10ª EDICIÓN WARHAMMER 40K)
 * Soporta tiradas variables de ataques y daño (D6, D3, 2D6, D6+1, etc.),
 * armas seleccionables del códex y perfiles enemigos preconfigurados (MEQ, TEQ, Tanque, etc.),
 * y todas las reglas especiales de armas:
 * - Golpes Letales (Lethal Hits)
 * - Impactos Sostenidos 1 / 2 / D3 (Sustained Hits)
 * - Heridas Devastadoras (Devastating Wounds)
 * - Torrente (Torrent / Auto-hit)
 * - Acoplada (Twin-linked / Re-roll wounds)
 * - Fusión X (Melta X)
 * - Anti-X (Anti-Vehicle, Anti-Infantry, etc.)
 * - Ignora Cobertura / Cobertura Benéfica (+1 Sv)
 * - No Hay Dolor (Feel No Pain 4+++, 5+++, 6+++)
 * - Repetición de 1s a impactar / herir y repetición completa (Oath of Moment)
 * - Modelado de pérdida de daño sobrante por miniatura y probabilidad de eliminar miniaturas.
 */

const MathhammerAdv = (function() {

  // Perfiles defensivos preconfigurados comunes en 40K
  const PRESET_TARGETS = [
    { id: "custom", name: "⚙️ Personalizado (Definir valores abajo)", t: 4, sv: 3, inv: 0, w: 2, fnp: 0 },
    { id: "geq", name: "Guarda Imperial / Cultista (GEQ - R3, Sv5+, 1H)", t: 3, sv: 5, inv: 0, w: 1, fnp: 0 },
    { id: "meq", name: "Marine Intercesor Estándar (MEQ - R4, Sv3+, 2H)", t: 4, sv: 3, inv: 0, w: 2, fnp: 0 },
    { id: "teq", name: "Exterminador / Terminator (TEQ - R5, Sv2+, 4++, 3H)", t: 5, sv: 2, inv: 4, w: 3, fnp: 0 },
    { id: "gravis", name: "Marine Gravis / Erradicador (R6, Sv3+, 3H)", t: 6, sv: 3, inv: 0, w: 3, fnp: 0 },
    { id: "dw_knights", name: "Caballeros Ala de Muerte (R6, Sv2+, 4++, 4H)", t: 6, sv: 2, inv: 4, w: 4, fnp: 0 },
    { id: "custodes", name: "Guardia Custode (R6, Sv2+, 4++, 3H)", t: 6, sv: 2, inv: 4, w: 3, fnp: 0 },
    { id: "light_vehicle", name: "Rhino / Transporte Ligero (R9, Sv3+, 10H)", t: 9, sv: 3, inv: 0, w: 10, fnp: 0 },
    { id: "dreadnought", name: "Redemptor Dreadnought (R10, Sv2+, 12H)", t: 10, sv: 2, inv: 0, w: 12, fnp: 0 },
    { id: "land_raider", name: "Land Raider / Tanque Pesado (R12, Sv2+, 16H)", t: 12, sv: 2, inv: 0, w: 16, fnp: 0 },
    { id: "monstrous_ctan", name: "C'tan / Primarca Monstruo (R11, Sv2+, 4++, 5+++ FnP)", t: 11, sv: 2, inv: 4, w: 12, fnp: 5 },
    { id: "knight", name: "Imperial Knight Questoris (R12, Sv3+, 5++, 22H)", t: 12, sv: 3, inv: 5, w: 22, fnp: 0 }
  ];

  // Evalúa expresiones de dados: ej. "D6", "2D6+2", "D3+1", "12", etc.
  function parseDiceExpectedValue(val) {
    if (typeof val === "number") return val;
    if (!val) return 0;
    const str = val.toString().trim().toUpperCase();
    
    // Si es un número directo
    const numDirect = parseFloat(str);
    if (!isNaN(numDirect) && str === numDirect.toString()) {
      return numDirect;
    }

    // Patrón NdX + M
    // Ej: "D6", "2D6", "D3+3", "2D6+1"
    let total = 0;
    const parts = str.split("+").map(p => p.trim());
    
    for (const part of parts) {
      if (part.includes("D6")) {
        const count = parseInt(part.replace("D6", "")) || 1;
        total += count * 3.5;
      } else if (part.includes("D3")) {
        const count = parseInt(part.replace("D3", "")) || 1;
        total += count * 2.0;
      } else {
        const n = parseFloat(part);
        if (!isNaN(n)) total += n;
      }
    }
    return total > 0 ? total : (parseFloat(str) || 0);
  }

  // Calcula probabilidad de herir según F vs R
  function getWoundThreshold(strength, toughness) {
    if (strength >= toughness * 2) return 2;
    if (strength > toughness) return 3;
    if (strength === toughness) return 4;
    if (strength <= toughness / 2) return 6;
    return 5;
  }

  /**
   * Cálculo analítico detallado de Mathhammer
   */
  function calculate(params) {
    const attacks = parseDiceExpectedValue(params.attacks);
    const bsWs = parseInt(params.bsWs) || 3;
    const strength = parseInt(params.strength) || 4;
    const ap = Math.abs(parseInt(params.ap) || 0); // Guardamos AP como positivo para restar
    const damage = parseDiceExpectedValue(params.damage);

    // Reglas ofensivas
    const isTorrent = !!params.isTorrent;
    const lethalHits = !!params.lethalHits;
    const sustainedHitsVal = parseInt(params.sustainedHits) || 0; // 0, 1, 2...
    const devastatingWounds = !!params.devastatingWounds;
    const twinLinked = !!params.twinLinked;
    const antiThreshold = parseInt(params.antiThreshold) || 0; // ej: 2, 3, 4 (0 = inactivo)
    const meltaBonus = parseInt(params.meltaBonus) || 0; // Daño extra a mitad de alcance

    // Repeticiones ofensivas
    const hitReroll = params.hitReroll || "none"; // "none", "ones", "all" (Oath of Moment)
    const woundReroll = params.woundReroll || "none"; // "none", "ones", "all"

    // Modificadores (+1/-1 to hit, to wound)
    const hitModifier = Math.max(-1, Math.min(1, parseInt(params.hitModifier) || 0));
    const woundModifier = Math.max(-1, Math.min(1, parseInt(params.woundModifier) || 0));

    // Defensor
    const targetT = parseInt(params.targetT) || 4;
    const targetSv = parseInt(params.targetSv) || 3;
    const targetInv = parseInt(params.targetInv) || 0;
    const targetWoundsPerModel = parseInt(params.targetW) || 2;
    const targetFnp = parseInt(params.targetFnp) || 0; // 4, 5, 6 (0 = sin FnP)
    const targetHasCover = !!params.hasCover;
    const ignoresCover = !!params.ignoresCover;
    const damageReduction = parseInt(params.damageReduction) || 0; // ej: -1 al daño (Círculo Interior)

    // ----------------------------------------------------
    // 1. FASE DE IMPACTOS
    // ----------------------------------------------------
    let expectedHits = 0;
    let criticalHits = 0;
    let normalHits = 0;

    if (isTorrent) {
      // Impacto automático (Torrente)
      expectedHits = attacks;
      normalHits = attacks;
      criticalHits = 0;
    } else {
      // Umbral natural de impacto modificado (un 1 siempre falla, un 6 siempre impacta)
      let effectiveHitReq = bsWs - hitModifier;
      effectiveHitReq = Math.max(2, Math.min(6, effectiveHitReq));

      // Probabilidad básica de 1 a 6
      // 6 siempre es crítico
      let pCrit = 1 / 6;
      let pHitNormal = Math.max(0, (6 - effectiveHitReq) / 6);
      let pMiss = 1 - (pCrit + pHitNormal);

      if (hitReroll === "ones") {
        // Repite 1s
        const pRerollCrit = (1 / 6) * (1 / 6);
        const pRerollHitNormal = (1 / 6) * Math.max(0, (6 - effectiveHitReq) / 6);
        pCrit += pRerollCrit;
        pHitNormal += pRerollHitNormal;
      } else if (hitReroll === "all") {
        // Repite todos los fallos
        pCrit += pMiss * (1 / 6);
        pHitNormal += pMiss * Math.max(0, (6 - effectiveHitReq) / 6);
      }

      criticalHits = attacks * pCrit;
      normalHits = attacks * pHitNormal;
      expectedHits = criticalHits + normalHits;

      // Sustained Hits: añade impactos extras por cada crítico
      if (sustainedHitsVal > 0) {
        const sustainedExtra = criticalHits * sustainedHitsVal;
        normalHits += sustainedExtra;
        expectedHits += sustainedExtra;
      }
    }

    // ----------------------------------------------------
    // 2. FASE DE HERIDAS
    // ----------------------------------------------------
    // Con Lethal Hits, los críticos pasan directo a salvación sin tirar para herir
    let autoWounds = lethalHits ? criticalHits : 0;
    let hitsToRoll = lethalHits ? normalHits : expectedHits;

    let baseWoundReq = getWoundThreshold(strength, targetT);
    let effectiveWoundReq = baseWoundReq - woundModifier;
    effectiveWoundReq = Math.max(2, Math.min(6, effectiveWoundReq));

    // Si tiene Anti-X (ej: Anti-Infantería 4+), el crítico es ese valor
    let critThreshold = antiThreshold > 0 ? antiThreshold : 6;
    critThreshold = Math.max(2, Math.min(6, critThreshold));

    // Fracciones en D6 para herir
    // Caras que son críticas: [critThreshold..6]
    const numCritFaces = Math.max(0, 7 - critThreshold);
    let pWoundCrit = numCritFaces / 6;

    // Caras que hieren normalmente: [effectiveWoundReq..6] menos las críticas
    let numWoundFaces = Math.max(0, 7 - effectiveWoundReq);
    let numNormalWoundFaces = Math.max(0, numWoundFaces - numCritFaces);
    let pWoundNormal = numNormalWoundFaces / 6;
    let pWoundMiss = 1 - (pWoundCrit + pWoundNormal);

    // Repeticiones de herir (Twin-linked o selector)
    const effectiveWoundReroll = twinLinked ? "all" : woundReroll;
    if (effectiveWoundReroll === "ones") {
      pWoundCrit += (1 / 6) * (numCritFaces / 6);
      pWoundNormal += (1 / 6) * (numNormalWoundFaces / 6);
    } else if (effectiveWoundReroll === "all") {
      pWoundCrit += pWoundMiss * (numCritFaces / 6);
      pWoundNormal += pWoundMiss * (numNormalWoundFaces / 6);
    }

    let criticalWounds = hitsToRoll * pWoundCrit;
    let normalWounds = hitsToRoll * pWoundNormal;

    // Con Devastating Wounds, las heridas críticas causan heridas mortales/devastadoras sin salvación
    let devWounds = devastatingWounds ? criticalWounds : 0;
    let woundsFacingSave = autoWounds + normalWounds + (devastatingWounds ? 0 : criticalWounds);
    let totalWoundsInflicted = autoWounds + normalWounds + criticalWounds;

    // ----------------------------------------------------
    // 3. FASE DE SALVACIONES
    // ----------------------------------------------------
    let effectiveSv = targetSv + ap; // el AP empeora la salvación (ej: 3+ con AP -2 necesita 5+)
    
    // Beneficio de cobertura (+1 Sv si Sv base es 3+ y ap > 0, o si Sv es 4+)
    if (targetHasCover && !ignoresCover) {
      if (targetSv >= 4 || ap > 0) {
        effectiveSv = Math.max(2, effectiveSv - 1);
      }
    }

    // Invulnerable no empeora por AP
    if (targetInv > 0 && targetInv < effectiveSv) {
      effectiveSv = targetInv;
    }

    // Probabilidad de fallar salvación (tirada menor que effectiveSv, o nunca mejor que 1 que siempre falla)
    // En 40k una salvación de 1 siempre falla (mínimo 1/6 de fallo)
    let pSaveSuccess = 0;
    if (effectiveSv <= 6) {
      pSaveSuccess = Math.max(0, Math.min(5 / 6, (7 - effectiveSv) / 6));
    }
    let pSaveFail = 1 - pSaveSuccess;

    let unsavedWoundsFromArmour = woundsFacingSave * pSaveFail;
    let totalUnsavedWounds = unsavedWoundsFromArmour + devWounds;

    // ----------------------------------------------------
    // 4. DAÑO Y NO HAY DOLOR (FEEL NO PAIN)
    // ----------------------------------------------------
    let effectiveDamagePerAttack = Math.max(1, damage + meltaBonus - damageReduction);
    
    // No Hay Dolor (FnP)
    let fnpDamageMultiplier = 1;
    if (targetFnp >= 2 && targetFnp <= 6) {
      const pFnpPass = (7 - targetFnp) / 6;
      fnpDamageMultiplier = 1 - pFnpPass;
    }

    const rawTotalDamage = totalUnsavedWounds * effectiveDamagePerAttack * fnpDamageMultiplier;

    // ----------------------------------------------------
    // 5. ESTIMACIÓN DE MINIATURAS ELIMINADAS (Damage Spillage)
    // En 40K, el daño sobrante de un ataque que mata una miniatura se pierde.
    // ----------------------------------------------------
    let expectedKills = 0;
    if (targetWoundsPerModel > 0) {
      const damagePerUnsavedPostFnp = effectiveDamagePerAttack * fnpDamageMultiplier;
      if (damagePerUnsavedPostFnp >= targetWoundsPerModel) {
        // Cada salvación fallada elimina una miniatura entera
        expectedKills = totalUnsavedWounds;
      } else {
        // Necesitamos varios impactos no salvados para matar una miniatura
        expectedKills = rawTotalDamage / targetWoundsPerModel;
      }
    }

    return {
      attacks,
      expectedHits,
      criticalHits,
      expectedWounds: totalWoundsInflicted,
      criticalWounds,
      autoWounds,
      devWounds,
      woundsFacingSave,
      unsavedWounds: totalUnsavedWounds,
      rawTotalDamage,
      effectiveDamagePerAttack,
      expectedKills,
      targetWoundsPerModel,
      pSaveFail,
      effectiveSv
    };
  }

  return {
    PRESET_TARGETS,
    parseDiceExpectedValue,
    getWoundThreshold,
    calculate
  };

})();

// Exportar al ámbito global para navegadores y Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = MathhammerAdv;
}
if (typeof window !== "undefined") {
  window.MathhammerAdv = MathhammerAdv;
}
