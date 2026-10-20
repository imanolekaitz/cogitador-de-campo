/**
 * MÓDULO: VALIDADOR DE REGLAS DE LISTA (WARHAMMER 40,000 11ª EDICIÓN / REQUISITOS WTC)
 * Reglas auditadas:
 * 1. Señor de la Guerra (Warlord): Exactamente 1 personaje debe ser Warlord.
 * 2. Héroes Épicos únicos: Máximo 1 copia de cada Héroe Épico (Lion El'Jonson, Azrael, Belial, etc.).
 * 3. Límite de Datasheets duplicadas:
 *    - Línea de Batalla (Battleline) / Transportes asignados: Máximo 6 unidades.
 *    - Resto de hojas de datos: Máximo 3 unidades (Regla de 3).
 * 4. Mejoras (Enhancements):
 *    - Máximo 3 mejoras por lista de ejército.
 *    - Máximo 1 mejora por personaje.
 *    - No se pueden asignar a Héroes Épicos.
 *    - Solo se pueden asignar a miniaturas con la palabra clave PERSONAJE (CHARACTER).
 *    - No se puede repetir la misma mejora dos veces.
 * 5. Puntos totales: No superar el límite de puntos elegido.
 * 6. Puntos de Destacamento (PD): No superar el presupuesto de PD del formato.
 * 7. Líderes unidos a escoltas válidas: El líder debe tener en su 'leaderOf' el nombre de la unidad escolta.
 */

const ArmyValidator = (function() {

  function validateList(list, datasheets, detachments) {
    const issues = []; // { type: 'error' | 'warning' | 'info', message: string, unitId?: string }

    if (!list) {
      return { isValid: false, issues: [{ type: "error", message: "No hay ninguna lista activa seleccionada." }] };
    }

    const units = list.units || [];
    const pointsLimit = list.pointsLimit || 2000;

    // 1. PUNTOS TOTALES
    let currentPoints = 0;
    units.forEach(u => {
      const ds = datasheets.find(d => d.id === u.datasheetId);
      if (!ds) return;
      const opt = (ds.pointsOptions || []).find(p => p.models === u.modelsCount) || (ds.pointsOptions || [])[0];
      let pts = opt ? opt.points : 0;

      if (u.enhancementId) {
        // Buscar coste de la mejora
        for (const det of detachments) {
          const enh = (det.enhancements || []).find(e => e.id === u.enhancementId);
          if (enh) {
            pts += enh.points;
            break;
          }
        }
      }
      currentPoints += pts;
    });

    if (currentPoints > pointsLimit) {
      issues.push({
        type: "error",
        code: "POINTS_EXCEEDED",
        message: `Puntos excedidos: ${currentPoints} pts / ${pointsLimit} pts permitidos (+${currentPoints - pointsLimit} pts sobrantes).`
      });
    }

    // 2. SEÑOR DE LA GUERRA (WARLORD)
    const warlords = units.filter(u => u.isWarlord);
    if (warlords.length === 0) {
      issues.push({
        type: "error",
        code: "NO_WARLORD",
        message: "Tu ejército requiere exactamente un Señor de la Guerra (Warlord). Pulsa 'Designar Warlord' en uno de tus Personajes."
      });
    } else if (warlords.length > 1) {
      issues.push({
        type: "error",
        code: "MULTIPLE_WARLORDS",
        message: `Tienes ${warlords.length} Señores de la Guerra seleccionados. Solo puede haber uno.`
      });
    } else {
      // Comprobar que el Warlord sea un Personaje
      const warlordDs = datasheets.find(d => d.id === warlords[0].datasheetId);
      if (warlordDs && !(warlordDs.keywords || []).some(k => /PERSONAJE|CHARACTER/.test(k))) {
        issues.push({
          type: "warning",
          code: "WARLORD_NOT_CHARACTER",
          message: `El Señor de la Guerra (${warlordDs.name}) no posee la clave PERSONAJE.`
        });
      }
    }

    // 3. HÉROES ÉPICOS ÚNICOS
    const epicHeroCounts = {};
    units.forEach(u => {
      const ds = datasheets.find(d => d.id === u.datasheetId);
      if (ds && ds.isEpicHero) {
        epicHeroCounts[ds.name] = (epicHeroCounts[ds.name] || 0) + 1;
      }
    });

    Object.entries(epicHeroCounts).forEach(([name, count]) => {
      if (count > 1) {
        issues.push({
          type: "error",
          code: "DUPLICATE_EPIC_HERO",
          message: `El Héroe Épico '${name}' está incluido ${count} veces. Cada Héroe Épico es único (máximo 1).`
        });
      }
    });

    // 4. REGLA DE 3 (O 6 EN BATTLELINE Y TRANSPORTES ASIGNADOS)
    const dsCounts = {};
    units.forEach(u => {
      dsCounts[u.datasheetId] = (dsCounts[u.datasheetId] || 0) + 1;
    });

    Object.entries(dsCounts).forEach(([dsId, count]) => {
      const ds = datasheets.find(d => d.id === dsId);
      if (!ds) return;

      const isBattleline = (ds.keywords || []).some(k => /L[IÍ]NEA|BATTLELINE/.test(k));
      const isDedicatedTransport = (ds.keywords || []).some(k => /TRANSPORTE ASIGNADO|DEDICATED TRANSPORT/.test(k));
      const maxAllowed = (isBattleline || isDedicatedTransport) ? 6 : 3;

      if (count > maxAllowed) {
        issues.push({
          type: "error",
          code: "DATASHEET_LIMIT_EXCEEDED",
          message: `Superado el límite de hojas de datos para '${ds.name}': tienes ${count} unidades (máximo ${maxAllowed} permitidas en formato estándar).`
        });
      }
    });

    // 5. REGLAS DE MEJORAS (ENHANCEMENTS)
    const assignedEnhancements = [];
    units.forEach(u => {
      if (!u.enhancementId) return;
      const ds = datasheets.find(d => d.id === u.datasheetId);
      if (!ds) return;

      assignedEnhancements.push({ enhId: u.enhancementId, unitName: ds.name, isEpic: ds.isEpicHero, isChar: (ds.keywords || []).some(k => /PERSONAJE|CHARACTER/.test(k)) });

      if (ds.isEpicHero) {
        issues.push({
          type: "error",
          code: "ENHANCEMENT_ON_EPIC",
          message: `La unidad '${ds.name}' es un Héroe Épico y las reglas prohíben equiparles Mejoras de Destacamento.`
        });
      }

      if (!ds.isEpicHero && !(ds.keywords || []).some(k => /PERSONAJE|CHARACTER/.test(k))) {
        issues.push({
          type: "error",
          code: "ENHANCEMENT_NOT_CHARACTER",
          message: `La unidad '${ds.name}' tiene una Mejora asignada pero no es un PERSONAJE.`
        });
      }
    });

    if (assignedEnhancements.length > 3) {
      issues.push({
        type: "error",
        code: "TOO_MANY_ENHANCEMENTS",
        message: `Tienes ${assignedEnhancements.length} mejoras asignadas en tu lista. El reglamento permite un máximo de 3 mejoras por ejército.`
      });
    }

    // Duplicadas
    const enhCounts = {};
    assignedEnhancements.forEach(e => {
      enhCounts[e.enhId] = (enhCounts[e.enhId] || 0) + 1;
    });
    Object.entries(enhCounts).forEach(([enhId, count]) => {
      if (count > 1) {
        // Encontrar nombre de la mejora
        let enhName = enhId;
        for (const det of detachments) {
          const found = (det.enhancements || []).find(x => x.id === enhId);
          if (found) { enhName = found.name; break; }
        }
        issues.push({
          type: "error",
          code: "DUPLICATE_ENHANCEMENT",
          message: `La mejora '${enhName}' está asignada ${count} veces. Cada mejora es única y no se puede repetir en el ejército.`
        });
      }
    });

    // 6. ASIGNACIÓN DE LÍDERES A ESCOLTAS VÁLIDAS
    units.forEach(u => {
      if (!u.attachedToUnitInstanceId) return;
      const leaderDs = datasheets.find(d => d.id === u.datasheetId);
      const escortUnit = units.find(x => x.instanceId === u.attachedToUnitInstanceId);
      if (!leaderDs || !escortUnit) return;
      const escortDs = datasheets.find(d => d.id === escortUnit.datasheetId);
      if (!escortDs) return;

      const allowedNames = leaderDs.leaderOf || [];
      const isAllowed = allowedNames.some(allowed => {
        const cleanAllowed = allowed.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
        const cleanName = escortDs.name.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
        const cleanOrig = (escortDs.originalName || "").toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
        return cleanAllowed.includes(cleanName) || cleanName.includes(cleanAllowed) || (cleanOrig && cleanAllowed.includes(cleanOrig));
      });

      if (!isAllowed) {
        issues.push({
          type: "warning",
          code: "INVALID_LEADER_ATTACHMENT",
          message: `'${leaderDs.name}' está asignado como líder a '${escortDs.name}', pero según su hoja de datos oficial solo puede liderar: ${allowedNames.slice(0, 3).join(", ")}...`
        });
      }
    });

    const errorsCount = issues.filter(i => i.type === "error").length;
    const warningsCount = issues.filter(i => i.type === "warning").length;

    return {
      isValid: errorsCount === 0,
      errorsCount,
      warningsCount,
      issues
    };
  }

  return {
    validateList
  };

})();

// Exportar al ámbito global para navegadores y Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = ArmyValidator;
}
if (typeof window !== "undefined") {
  window.ArmyValidator = ArmyValidator;
}
