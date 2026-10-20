/**
 * MÓDULO: MAZO OFICIAL DE MISIONES Y COMPETICIÓN PARIAH NEXUS (2024-2026/2027)
 * Incluye:
 * - Misiones Primarias (Take and Hold, Purge the Foe, Scorched Earth, Burden of Trust, Terraform, etc.)
 * - Despliegues Oficiales (Hammer and Anvil, Crucible of Battle, Search and Destroy, Sweeping Engagement, Dawn of War, Tipping Point)
 * - Reglas de Misión / Giros de Batalla (Prepared Positions, Swift Action, Hidden Supplies, Smoke and Mirrors, etc.)
 * - Misiones Secundarias (Tácticas y Fijas) completas en Castellano e Inglés con puntos y condiciones
 * - Misiones Secretas (Secret Missions: Command Insertion, Unbroken Wall, Shatter Cohesion, War of Attrition)
 * - Sistema de robo, puntuación ronda por ronda y descarte por 1 CP.
 */

const PariahNexusDeck = (function() {

  const DEPLOYMENTS = [
    { id: "dep_hammer_anvil", name: "Martillo y Yunque (Hammer and Anvil)", desc: "Despliegue a lo largo de los bordes cortos de la mesa (24\" de separación)." },
    { id: "dep_search_destroy", name: "Buscar y Destruir (Search and Destroy)", desc: "Despliegue en cuadrantes opuestos con un círculo central de 9\" neutral." },
    { id: "dep_sweeping", name: "Enfrentamiento Arrollador (Sweeping Engagement)", desc: "Despliegue a lo largo de los bordes largos (profundidad 12\", separación 24\")." },
    { id: "dep_crucible", name: "Crisol de Batalla (Crucible of Battle)", desc: "Zonas de despliegue triangulares opuestas hacia el centro de la mesa." },
    { id: "dep_dawn_war", name: "Amanecer de la Guerra (Dawn of War)", desc: "Despliegue frontal clásico a lo largo de los bordes largos de la mesa." },
    { id: "dep_tipping_point", name: "Punto de Inflexión (Tipping Point)", desc: "Despliegue asimétrico con zonas escalonadas de penetración táctica." }
  ];

  const PRIMARY_MISSIONS = [
    {
      id: "prim_take_hold",
      name: "Tomar y Mantener (Take and Hold)",
      desc: "Al final de tu fase de mando (de la ronda 2 en adelante): Obtén 5 VP por cada marcador de objetivo que controles (hasta un máximo de 15 VP por ronda).",
      maxVP: 50
    },
    {
      id: "prim_purge_foe",
      name: "Purgar al Enemigo (Purge the Foe)",
      desc: "Obtén 4 VP si destruyes 1+ unidades enemigas. Obtén 4 VP adicionales si destruyes más unidades enemigas que las tuyas perdidas. Puntuación por control de objetivos habitual (4 VP por 1+, 4 VP por más que el rival).",
      maxVP: 50
    },
    {
      id: "prim_scorched_earth",
      name: "Tierra Quemada (Scorched Earth)",
      desc: "Obtén 5 VP por controlar 1+ y 5 VP por controlar más objetivos. Además, tus unidades de infantería pueden realizar la acción de 'Quemar Objetivo' en tierra de nadie para ganar 5 VP o en la zona enemiga para ganar 10 VP y retirarlo.",
      maxVP: 50
    },
    {
      id: "prim_burden_trust",
      name: "Carga de Confianza (Burden of Trust)",
      desc: "Al inicio de cada ronda, los marcadores en tierra de nadie adquieren valor creciente según qué bando asuma el riesgo de mantenerlos bajo fuego cruzado.",
      maxVP: 50
    },
    {
      id: "prim_terraform",
      name: "Terraformación (Terraform)",
      desc: "Tus unidades pueden realizar una acción al final de su fase de movimiento para terraformar un objetivo bajo tu control, aumentando su valor defensivo y su puntuación de VP en rondas posteriores.",
      maxVP: 50
    },
    {
      id: "prim_linchpin",
      name: "Eje Central (Linchpin)",
      desc: "El objetivo de tu propia zona de despliegue vale más puntos a menos que el rival lo capture o neutralice los marcadores adyacentes.",
      maxVP: 50
    }
  ];

  const MISSION_RULES = [
    { id: "rule_swift_action", name: "Acción Rápida (Swift Action)", desc: "Las unidades que hayan avanzado pueden seguir realizando acciones tácticas de objetivos siempre que sean Infantería elegible." },
    { id: "rule_prepared_pos", name: "Posiciones Preparadas (Prepared Positions)", desc: "En la primera ronda de batalla, las unidades en su zona de despliegue tienen beneficio de cobertura frente a ataques a más de 18\"." },
    { id: "rule_smoke_mirrors", name: "Humo y Espejos (Smoke and Mirrors)", desc: "Al final de la primera ronda, puedes devolver una unidad de infantería en reserva estratégica." },
    { id: "rule_hidden_supplies", name: "Suministros Ocultos (Hidden Supplies)", desc: "Se añade un marcador de objetivo adicional en el centro exacto de la mesa." },
    { id: "rule_stalwarts", name: "Inquebrantables (Stalwarts)", desc: "Las unidades de Línea de Batalla (Battleline) obtienen +1 al Control de Objetivo (OC) en tierra de nadie." }
  ];

  const SECONDARY_MISSIONS = [
    {
      id: "sec_assassination",
      name: "Asesinato (Assassination)",
      fixedAllowed: true,
      desc: "Cada vez que una miniatura PERSONAJE enemiga sea destruida, obtén 4 VP (o 5 VP si era el Señor de la Guerra).",
      vp: 4
    },
    {
      id: "sec_bring_it_down",
      name: "Derribadlo (Bring It Down)",
      fixedAllowed: true,
      desc: "Obtén 2 VP por cada MONSTRUO o VEHÍCULO enemigo destruido con 9 o menos heridas; 3 VP si tiene 10-14 heridas; 4 VP si tiene 15-19 heridas; y 5 VP si tiene 20+ heridas.",
      vp: 2
    },
    {
      id: "sec_cleanse",
      name: "Purificación (Cleanse)",
      fixedAllowed: true,
      desc: "Al final de tu turno, realiza la acción de Purificar en 1 o más marcadores de objetivo en tierra de nadie que controles. Obtén 2 VP por cada marcador purificado (o 4 VP en táctica si purificas 2+).",
      vp: 4
    },
    {
      id: "sec_behind_enemy_lines",
      name: "Tras las Líneas Enemigas (Behind Enemy Lines)",
      fixedAllowed: true,
      desc: "Al final de tu turno: Obtén 3 VP si 1 unidad de tu ejército está totalmente dentro de la zona de despliegue enemiga; u obtén 4 VP (5 VP en tácticas) si 2 o más unidades están en ella.",
      vp: 4
    },
    {
      id: "sec_area_denial",
      name: "Denegación de Área (Area Denial)",
      fixedAllowed: false,
      desc: "Al final de tu turno: Obtén 3 VP si controlas el centro de la mesa (a 6\" del centro). Si no hay unidades enemigas a 6\" del centro, obtén 5 VP en su lugar.",
      vp: 5
    },
    {
      id: "sec_engage_all_fronts",
      name: "Acosar en Todos los Frentes (Engage on All Fronts)",
      fixedAllowed: true,
      desc: "Al final de tu turno: Obtén 2 VP si tienes unidades elegibles en 3 cuadrantes de la mesa a más de 6\" del centro; obtén 4 VP si estás en los 4 cuadrantes.",
      vp: 4
    },
    {
      id: "sec_establish_locus",
      name: "Establecer Locus (Establish Locus)",
      fixedAllowed: true,
      desc: "Acción en tierra de nadie o zona enemiga. Una unidad con OC > 0 completa la acción al final del turno para plantar una baliza de datos y puntuar 4 VP.",
      vp: 4
    },
    {
      id: "sec_recover_assets",
      name: "Recuperar Activos (Recover Assets)",
      fixedAllowed: false,
      desc: "Acción en dos cuadrantes diferentes de la mesa. Al final del turno obtén 3 VP por cuadrante asegurado (hasta 6 VP si aseguras ambos).",
      vp: 6
    },
    {
      id: "sec_sabotage",
      name: "Sabotaje (Sabotage)",
      fixedAllowed: false,
      desc: "Realiza una acción en un elemento de terreno de la mitad del campo del rival. Si se completa con éxito al final del turno enemigo, obtén 4 VP.",
      vp: 4
    },
    {
      id: "sec_storm_hostile",
      name: "Asaltar Objetivo Hostil (Storm Hostile Objective)",
      fixedAllowed: true,
      desc: "Al final de tu turno: Obtén 4 VP si controlas al menos un marcador de objetivo que tu oponente controlaba al inicio de tu turno.",
      vp: 4
    },
    {
      id: "sec_cull_the_horde",
      name: "Diezmar la Horda (Cull the Horde)",
      fixedAllowed: true,
      desc: "Obtén 4 VP cada vez que destruyas una unidad enemiga que constaba de 20 o más miniaturas al inicio de la batalla.",
      vp: 4
    },
    {
      id: "sec_marked_for_death",
      name: "Marcados para Morir (Marked for Death)",
      fixedAllowed: false,
      desc: "El rival elige 3 de sus unidades. Por cada una de ellas destruida durante el transcurso del combate, obtén 3 VP (hasta un máximo de 9 VP).",
      vp: 9
    }
  ];

  const SECRET_MISSIONS = [
    {
      id: "sec_comm_insertion",
      name: "👑 Inserción del Mando (Command Insertion)",
      desc: "Tu SEÑOR DE LA GUERRA (Warlord) está con vida y dentro del rango de 1 o más marcadores de objetivo en la zona de despliegue enemiga que tú controlas al final de la batalla. (20 VP)",
      points: 20
    },
    {
      id: "sec_unbroken_wall",
      name: "🛡️ Muro Inquebrantable (Unbroken Wall)",
      desc: "Controlas tres o más marcadores de objetivo que no estén dentro de tu zona de despliegue al final de la batalla. (20 VP)",
      points: 20
    },
    {
      id: "sec_shatter_cohesion",
      name: "💀 Quebrar Cohesión (Shatter Cohesion)",
      desc: "No queda ninguna unidad del ejército enemigo viva sobre el campo de batalla al final de la partida. (20 VP)",
      points: 20
    },
    {
      id: "sec_war_attrition",
      name: "⚔️ Guerra de Desgaste (War of Attrition)",
      desc: "Tu ejército conserva vivas más unidades en la mesa que el ejército enemigo y has destruido al menos el 75% de las unidades rivales al final de la batalla. (20 VP)",
      points: 20
    }
  ];

  // Estado activo del mazo en la partida
  let currentMission = {
    deployment: DEPLOYMENTS[0],
    primary: PRIMARY_MISSIONS[0],
    rule: MISSION_RULES[0],
    secondaryMode: "tactical", // "tactical" | "fixed"
    activeSecondaries: [],     // Objetivos secundarios activos en mesa (máximo 2 a la vez)
    scoredSecondaries: [],     // Historial de secundarias puntuadas
    secretMission: null,       // Misión secreta elegida si se activa en Ronda 3
    isSecretRevealed: false
  };

  function initDeckState(savedData) {
    if (savedData) {
      currentMission = Object.assign(currentMission, savedData);
    }
  }

  function getDeckState() {
    return currentMission;
  }

  function drawRandomTournamentMission() {
    currentMission.deployment = DEPLOYMENTS[Math.floor(Math.random() * DEPLOYMENTS.length)];
    currentMission.primary = PRIMARY_MISSIONS[Math.floor(Math.random() * PRIMARY_MISSIONS.length)];
    currentMission.rule = MISSION_RULES[Math.floor(Math.random() * MISSION_RULES.length)];
    return currentMission;
  }

  function setSecondaryMode(mode) {
    currentMission.secondaryMode = mode;
    currentMission.activeSecondaries = [];
  }

  function drawTacticalCard() {
    if (currentMission.activeSecondaries.length >= 2) return null;
    
    // Tarjetas no activas ni puntuadas
    const usedIds = new Set([
      ...currentMission.activeSecondaries.map(s => s.id),
      ...currentMission.scoredSecondaries.map(s => s.id)
    ]);
    const available = SECONDARY_MISSIONS.filter(s => !usedIds.has(s.id));
    
    if (available.length === 0) return null;
    const drawn = available[Math.floor(Math.random() * available.length)];
    currentMission.activeSecondaries.push(drawn);
    return drawn;
  }

  function discardTacticalCard(cardId, gainCP = true) {
    currentMission.activeSecondaries = currentMission.activeSecondaries.filter(s => s.id !== cardId);
    if (gainCP && typeof AppState !== "undefined" && AppState.battle) {
      AppState.battle.commandPoints = (AppState.battle.commandPoints || 0) + 1;
      if (typeof showBattleToast === "function") {
        showBattleToast("Misión descartada al final del turno. ¡Ganas +1 CP de Mando!");
      }
    }
  }

  function scoreSecondaryCard(cardId, points) {
    const card = SECONDARY_MISSIONS.find(s => s.id === cardId);
    if (!card) return;

    const earnedVP = parseInt(points) || card.vp || 4;
    currentMission.scoredSecondaries.push({ card, earnedVP, timestamp: Date.now() });
    
    // Si era táctica, se retira de activas
    if (currentMission.secondaryMode === "tactical") {
      currentMission.activeSecondaries = currentMission.activeSecondaries.filter(s => s.id !== cardId);
    }

    // Sumar a los VP secundarios del jugador
    if (typeof AppState !== "undefined" && AppState.battle) {
      AppState.battle.playerVPSecondary = Math.min(40, (AppState.battle.playerVPSecondary || 0) + earnedVP);
      if (typeof saveToStorage === "function") saveToStorage();
      if (typeof renderBattleTracker === "function") renderBattleTracker();
      if (typeof showBattleToast === "function") {
        showBattleToast(`¡Secundaria cumplida! +${earnedVP} VP (Secundarios)`);
      }
    }
  }

  function selectSecretMission(secretId) {
    const sec = SECRET_MISSIONS.find(s => s.id === secretId);
    if (sec) {
      currentMission.secretMission = sec;
      currentMission.isSecretRevealed = false;
      if (typeof showBattleToast === "function") {
        showBattleToast(`Misión Secreta fijada en secreto: ${sec.name}`);
      }
    }
  }

  return {
    DEPLOYMENTS,
    PRIMARY_MISSIONS,
    MISSION_RULES,
    SECONDARY_MISSIONS,
    SECRET_MISSIONS,
    initDeckState,
    getDeckState,
    drawRandomTournamentMission,
    setSecondaryMode,
    drawTacticalCard,
    discardTacticalCard,
    scoreSecondaryCard,
    selectSecretMission
  };

})();

// Exportar
if (typeof module !== "undefined" && module.exports) {
  module.exports = PariahNexusDeck;
}
if (typeof window !== "undefined") {
  window.PariahNexusDeck = PariahNexusDeck;
}
