/**
 * COGITADOR DE CAMPO: LA ROCA (DARK ANGELS APPLICATION CONTROLLER)
 * Lógica modular para Catálogo, Colección, Creador de Listas y Cogitador de Batalla.
 */

// FUNCIÓN AUXILIAR DE NORMALIZACIÓN DE TEXTO (IGNORA TILDES, DIACRÍTICOS Y MAYÚSCULAS)
function normalizeText(str) {
  if (!str) return "";
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// ESTADO GLOBAL DE LA APLICACIÓN
const AppState = {
  currentLanguage: "es", // "es" (Castellano, predefinido) | "en" (English)
  activeTab: "codex",
  searchQuery: "",
  wingFilter: "all",
  roleFilter: "all",
  keywordFilter: "all",
  sortBy: "name_asc",
  
  // Estado de Destacamentos y Comparador Táctico
  detachmentSearch: "",
  detachmentFilter: "all", // "all", "exclusive", "astartes", "dp1", "dp2", "dp3"
  comparatorSlotA: "inner_circle",
  comparatorSlotB: "gladius",
  isComparatorVisible: true,

  // Estado de Estratagemas (Wahapedia 11ª Ed)
  stratagemSearch: "",
  stratagemPhaseFilter: "all", // "all", "command", "movement", "shooting", "charge", "fight", "any"
  stratagemTurnFilter: "all", // "all", "your_turn", "opponent_turn", "either_turn"
  stratagemDetachmentFilter: "all", // "all", "core", or detachmentId

  // Estado de Comparador de Unidades del Códex
  unitComparatorSlotA: "da_deathwing_knights",
  unitComparatorSlotB: "da_inner_circle_companions",
  isUnitComparatorVisible: false,

  collectionWingFilter: "all",
  collectionStatusFilter: "all",
  
  // Colección del usuario
  collection: [],
  
  // Listas de ejército
  armyLists: [],
  activeListId: null,
  
  // Estado de la partida en vivo
  battle: {
    round: 1,
    turn: "player", // "player" (Mi Turno) | "opponent" (Turno Enemigo)
    phase: "command", // "command" | "movement" | "shooting" | "charge" | "fight"
    commandPoints: 1,
    playerVPPrimary: 0,
    playerVPSecondary: 0,
    opponentVPPrimary: 0,
    opponentVPSecondary: 0,
    oathTarget: "No designado",
    unitStates: {}, // instanceId -> { modelsAlive, currentModelWounds, isBattleShocked }
    stratagemScopeOnlyArmy: true // Si true, filtra solo básicas + destacamento de tu lista en combate
  }
};

// ==========================================================================
// DICCIONARIO BILINGÜE (CASTELLANO / ENGLISH)
// ==========================================================================
const WH40K_I18N = {
  es: {
    tabCodex: "📜 Códex & Datasheets",
    tabDetachments: "🦅 Destacamentos (11ª Ed)",
    tabStratagems: "⚡ Estratagemas",
    tabCollection: "🛡️ Mi Colección (Armería)",
    tabArmy: "⚔️ Forja de Listas",
    tabBattle: "🎯 Cogitador de Batalla",
    tabMathhammer: "🎲 Mathhammer",
    headerTitle: "Cogitador de Campo",
    headerSubtitle: "Fortaleza-Monasterio La Roca • Ángeles Oscuros",
    statModels: "Miniaturas",
    statPoints: "Valor en Puntos (MFM)",
    statPainting: "Pintadas (Battle Ready)",
    stratBannerTitle: "⚡ Compendio Táctico de Estratagemas (11ª Edición)",
    stratBannerDesc: "Base de datos completa de estratagemas oficiales según <strong>Wahapedia</strong>. Incluye las <strong>11 Estratagemas del Reglamento Básico</strong>, las <strong>24 Estratagemas exclusivas de los Ángeles Oscuros</strong> y las <strong>34 Estratagemas de Destacamentos Marines Espaciales</strong>. Clasificadas y filtrables por <strong>fase exacta</strong> (Mando, Movimiento, Disparo, Carga, Combate o Cualquier Fase), <strong>turno</strong> y <strong>destacamento</strong>.",
    kpiStratTotal: "Estratagemas",
    kpiCoreRules: "Reglas Básicas",
    kpiDA: "Ángeles Oscuros",
    kpiSM: "Marines Astartes",
    stratSearchPlaceholder: "🔍 Buscar estratagema (nombre, regla, efecto...)...",
    detachmentLabel: "Destacamento:",
    clearFilters: "✕ Limpiar",
    tacticalPhase: "Fase Táctica:",
    turnOfUse: "Turno de Uso:",
    allTurns: "Todos los Turnos",
    turnPlayer: "🔵 Tu Turno (28)",
    turnOpponent: "🔴 Turno Oponente (20)",
    turnEither: "⚪ Cualquier Turno (21)",
    showingStrats: (count, total) => `Mostrando ${count} de ${total} estratagemas`,
    editStratBtn: "✏️ Editar",
    revertStratBtn: "🔄 Restaurar",
    newStratBtn: "Nueva Estratagema",
    resetAllStratsBtn: "Restaurar Wahapedia",
    customBadge: "Personalizada",
    editedBadge: "Modificada",
    restrictionsLabel: "RESTRICCIONES:",
    noStratsFound: "No se encontraron estratagemas",
    noStratsDesc: "Prueba a cambiar el criterio de búsqueda, fase seleccionada o destacamento.",
    resetAllFilters: "↺ Restablecer Todos los Filtros",
    coreBadge: "Reglamento",
    whenLabel: "CUÁNDO:",
    targetLabel: "OBJETIVO:",
    effectLabel: "EFECTO:",
    phaseAll: "Todas",
    phaseCommand: "👑 Mando",
    phaseMovement: "🏃 Movimiento",
    phaseShooting: "🎯 Disparo",
    phaseCharge: "⚡ Carga",
    phaseFight: "⚔️ Combate",
    phaseAny: "🔄 Reacción / Cualquier Fase",
    battleOnlyArmy: "Solo mi Destacamento + Básicas",
    battleAvailable: "✓ Disponible",
    battleRequires: (cp, userCp) => `Requiere ${cp} CP (Tienes ${userCp})`,
    battleUseBtn: (cp) => `⚡ Usar (-${cp} CP)`,
    battleNoStratsForPhase: (phase, turn) => `No hay estratagemas disponibles específicamente en la <strong>${phase}</strong> durante el <strong>${turn}</strong> con el filtro de destacamento actual.`,
    battleViewAllForPhase: "Ver todas las del compendio para esta fase",
    battleToastActivated: (name, cp) => `⚡ ¡Estratagema activada: "${name}" (-${cp} CP)!`,
    battleToastNoCp: (name, cp, userCp) => `⚠️ Puntos de Mando insuficientes.\n\nTienes ${userCp} CP y "${name}" cuesta ${cp} CP.`
  },
  en: {
    tabCodex: "📜 Codex & Datasheets",
    tabDetachments: "🦅 Detachments (11th Ed)",
    tabStratagems: "⚡ Stratagems",
    tabCollection: "🛡️ My Collection (Armoury)",
    tabArmy: "⚔️ Roster Forge",
    tabBattle: "🎯 Battle Cogitator",
    tabMathhammer: "🎲 Mathhammer",
    headerTitle: "Field Cogitator",
    headerSubtitle: "Fortress-Monastery The Rock • Dark Angels",
    statModels: "Miniatures",
    statPoints: "Points Value (MFM)",
    statPainting: "Painted (Battle Ready)",
    stratBannerTitle: "⚡ Tactical Compendium of Stratagems (11th Edition)",
    stratBannerDesc: "Comprehensive database of official stratagems according to <strong>Wahapedia</strong>. Includes the <strong>11 Core Rules Stratagems</strong>, the <strong>24 Dark Angels exclusive Stratagems</strong> and the <strong>34 Space Marines Detachment Stratagems</strong>. Categorized and filterable by <strong>exact phase</strong> (Command, Movement, Shooting, Charge, Fight, or Any Phase), <strong>turn</strong> and <strong>detachment</strong>.",
    kpiStratTotal: "Stratagems",
    kpiCoreRules: "Core Rules",
    kpiDA: "Dark Angels",
    kpiSM: "Adeptus Astartes",
    stratSearchPlaceholder: "🔍 Search stratagem (name, rule, effect...)...",
    detachmentLabel: "Detachment:",
    clearFilters: "✕ Clear",
    tacticalPhase: "Tactical Phase:",
    turnOfUse: "Turn of Use:",
    allTurns: "All Turns",
    turnPlayer: "🔵 Your Turn (28)",
    turnOpponent: "🔴 Opponent Turn (20)",
    turnEither: "⚪ Any Turn (21)",
    showingStrats: (count, total) => `Showing ${count} of ${total} stratagems`,
    editStratBtn: "✏️ Edit",
    revertStratBtn: "🔄 Revert",
    newStratBtn: "New Stratagem",
    resetAllStratsBtn: "Reset Wahapedia",
    customBadge: "Custom",
    editedBadge: "Edited",
    restrictionsLabel: "RESTRICTIONS:",
    noStratsFound: "No stratagems found",
    noStratsDesc: "Try changing your search terms, selected phase, or detachment filter.",
    resetAllFilters: "↺ Reset All Filters",
    coreBadge: "Core Rules",
    whenLabel: "WHEN:",
    targetLabel: "TARGET:",
    effectLabel: "EFFECT:",
    phaseAll: "All",
    phaseCommand: "👑 Command",
    phaseMovement: "🏃 Movement",
    phaseShooting: "🎯 Shooting",
    phaseCharge: "⚡ Charge",
    phaseFight: "⚔️ Fight",
    phaseAny: "🔄 Reaction / Any Phase",
    battleOnlyArmy: "Only my Detachment + Core",
    battleAvailable: "✓ Available",
    battleRequires: (cp, userCp) => `Requires ${cp} CP (You have ${userCp})`,
    battleUseBtn: (cp) => `⚡ Use (-${cp} CP)`,
    battleNoStratsForPhase: (phase, turn) => `No stratagems available specifically in the <strong>${phase}</strong> during <strong>${turn}</strong> with current detachment filter.`,
    battleViewAllForPhase: "View all compendium stratagems for this phase",
    battleToastActivated: (name, cp) => `⚡ Stratagem activated: "${name}" (-${cp} CP)!`,
    battleToastNoCp: (name, cp, userCp) => `⚠️ Insufficient Command Points.\n\nYou have ${userCp} CP and "${name}" costs ${cp} CP.`
  }
};

/**
 * Obtiene los textos de una estratagema según el idioma activo ("es" o "en").
 */
function getStratagemText(s, lang) {
  if (!s) return {};
  const currentLang = lang || AppState.currentLanguage || "es";
  const isEn = currentLang === "en";
  const sub = isEn && s.en ? s.en : (s.es || s);

  const phaseLabelsEs = {
    command: "Fase de Mando",
    movement: "Fase de Movimiento",
    shooting: "Fase de Disparo",
    charge: "Fase de Carga",
    fight: "Fase de Combate",
    any: "Cualquier Fase"
  };
  const phaseLabelsEn = {
    command: "Command Phase",
    movement: "Movement Phase",
    shooting: "Shooting Phase",
    charge: "Charge Phase",
    fight: "Fight Phase",
    any: "Any Phase"
  };

  const turnLabelsEs = {
    your_turn: "Tu Turno",
    opponent_turn: "Turno Enemigo",
    either_turn: "Cualquier Turno"
  };
  const turnLabelsEn = {
    your_turn: "Your Turn",
    opponent_turn: "Opponent's Turn",
    either_turn: "Either Player's Turn"
  };

  const defaultPhaseLabel = isEn ? (phaseLabelsEn[s.phase] || s.phase) : (phaseLabelsEs[s.phase] || s.phase);
  const defaultTurnLabel = isEn ? (turnLabelsEn[s.turn] || s.turn) : (turnLabelsEs[s.turn] || s.turn);

  return {
    name: sub.name || s.name,
    originalName: isEn ? (s.originalName || s.name) : (s.originalName || ""),
    cp: s.cp,
    detachment: sub.detachment || s.detachment,
    detachmentId: s.detachmentId,
    phase: s.phase,
    phases: s.phases || [s.phase],
    phaseLabel: sub.phaseLabel || defaultPhaseLabel,
    turn: s.turn,
    turnLabel: sub.turnLabel || defaultTurnLabel,
    type: sub.type || s.type,
    when: sub.when || s.when,
    target: sub.target || s.target,
    effect: sub.effect || s.effect,
    restrictions: sub.restrictions || s.restrictions || "",
    fluff: sub.fluff || s.fluff,
    isCustom: !!s.isCustom,
    isEdited: !!s.isEdited
  };
}

/**
 * Actualiza los textos de la interfaz según el idioma actual.
 */
function updateAppTranslations() {
  const currentLang = AppState.currentLanguage || "es";
  const isEn = currentLang === "en";
  const t = WH40K_I18N[currentLang] || WH40K_I18N.es;

  // Botones de selección de idioma
  const btnEs = document.getElementById("lang-btn-es");
  const btnEn = document.getElementById("lang-btn-en");
  if (btnEs) btnEs.classList.toggle("active", !isEn);
  if (btnEn) btnEn.classList.toggle("active", isEn);

  // Cabecera
  const headTitle = document.getElementById("header-title");
  if (headTitle) headTitle.textContent = t.headerTitle;
  const headSub = document.getElementById("header-subtitle");
  if (headSub) headSub.textContent = t.headerSubtitle;
  const lblModels = document.getElementById("header-lbl-models");
  if (lblModels) lblModels.textContent = t.statModels;
  const lblPoints = document.getElementById("header-lbl-points");
  if (lblPoints) lblPoints.textContent = t.statPoints;
  const lblPainting = document.getElementById("header-lbl-painting");
  if (lblPainting) lblPainting.textContent = t.statPainting;

  // Pestañas de Navegación
  const tabCodex = document.getElementById("nav-text-codex");
  if (tabCodex) tabCodex.textContent = t.tabCodex;
  const tabDet = document.getElementById("nav-text-detachments");
  if (tabDet) tabDet.textContent = t.tabDetachments;
  const tabStrat = document.getElementById("nav-text-stratagems");
  if (tabStrat) tabStrat.textContent = t.tabStratagems;
  const tabCol = document.getElementById("nav-text-collection");
  if (tabCol) tabCol.textContent = t.tabCollection;
  const tabArmy = document.getElementById("nav-text-army");
  if (tabArmy) tabArmy.textContent = t.tabArmy;
  const tabBattle = document.getElementById("nav-text-battle");
  if (tabBattle) tabBattle.textContent = t.tabBattle;
  const tabMath = document.getElementById("nav-text-mathhammer");
  if (tabMath) tabMath.textContent = t.tabMathhammer;

  // Banner del Compendio de Estratagemas
  const bannerTitle = document.getElementById("stratagems-banner-title");
  if (bannerTitle) bannerTitle.textContent = t.stratBannerTitle;
  const bannerDesc = document.getElementById("stratagems-banner-desc");
  if (bannerDesc) bannerDesc.innerHTML = t.stratBannerDesc;

  // KPIs de Estratagemas
  const lblKpiTotal = document.getElementById("kpi-lbl-strat-total");
  if (lblKpiTotal) lblKpiTotal.textContent = t.kpiStratTotal;
  const lblKpiCore = document.getElementById("kpi-lbl-strat-core");
  if (lblKpiCore) lblKpiCore.textContent = t.kpiCoreRules;
  const lblKpiDa = document.getElementById("kpi-lbl-strat-da");
  if (lblKpiDa) lblKpiDa.textContent = t.kpiDA;
  const lblKpiSm = document.getElementById("kpi-lbl-strat-sm");
  if (lblKpiSm) lblKpiSm.textContent = t.kpiSM;

  // Barra de Búsqueda
  const searchInput = document.getElementById("stratagem-search-input");
  if (searchInput) searchInput.placeholder = t.stratSearchPlaceholder;

  // Desplegable de Destacamento
  const lblDet = document.getElementById("lbl-strat-detachment");
  if (lblDet) lblDet.textContent = t.detachmentLabel;
  updateStratagemDetachmentDropdown(currentLang);

  const btnClear = document.getElementById("btn-clear-strat-filters");
  if (btnClear) btnClear.textContent = t.clearFilters;

  // Filtros de Fase
  const lblPhase = document.getElementById("lbl-strat-phase");
  if (lblPhase) lblPhase.textContent = t.tacticalPhase;
  const txtPhaseAll = document.getElementById("txt-phase-all");
  if (txtPhaseAll) txtPhaseAll.textContent = t.phaseAll;
  const txtPhaseCmd = document.getElementById("txt-phase-command");
  if (txtPhaseCmd) txtPhaseCmd.textContent = t.phaseCommand;
  const txtPhaseMov = document.getElementById("txt-phase-movement");
  if (txtPhaseMov) txtPhaseMov.textContent = t.phaseMovement;
  const txtPhaseShoot = document.getElementById("txt-phase-shooting");
  if (txtPhaseShoot) txtPhaseShoot.textContent = t.phaseShooting;
  const txtPhaseCharge = document.getElementById("txt-phase-charge");
  if (txtPhaseCharge) txtPhaseCharge.textContent = t.phaseCharge;
  const txtPhaseFight = document.getElementById("txt-phase-fight");
  if (txtPhaseFight) txtPhaseFight.textContent = t.phaseFight;
  const txtPhaseAny = document.getElementById("txt-phase-any");
  if (txtPhaseAny) txtPhaseAny.textContent = t.phaseAny;

  // Filtros de Turno
  const lblTurn = document.getElementById("lbl-strat-turn");
  if (lblTurn) lblTurn.textContent = t.turnOfUse;
  const pillTurnAll = document.getElementById("pill-turn-all");
  if (pillTurnAll) pillTurnAll.textContent = t.allTurns;
  const pillTurnPlayer = document.getElementById("pill-turn-player");
  if (pillTurnPlayer) pillTurnPlayer.textContent = t.turnPlayer;
  const pillTurnOpponent = document.getElementById("pill-turn-opponent");
  if (pillTurnOpponent) pillTurnOpponent.textContent = t.turnOpponent;
  const pillTurnEither = document.getElementById("pill-turn-either");
  if (pillTurnEither) pillTurnEither.textContent = t.turnEither;

  // HUD de Combate
  const hudStratTitle = document.getElementById("hud-stratagems-title-text");
  if (hudStratTitle) hudStratTitle.textContent = isEn ? "⚡ Stratagems Available Right Now" : "⚡ Estratagemas Disponibles en este Momento";
  const lblBattleScope = document.getElementById("lbl-battle-stratagems-scope");
  if (lblBattleScope) lblBattleScope.textContent = t.battleOnlyArmy;
}

/**
 * Regenera las opciones del selector de destacamento en el compendio de estratagemas.
 */
function updateStratagemDetachmentDropdown(lang) {
  const select = document.getElementById("stratagem-detachment-select");
  if (!select) return;
  const isEn = lang === "en";

  const prev = select.value;

  const optgroups = isEn ? {
    all: "All Detachments (69)",
    core: "Core Rules (11)",
    daLabel: "Dark Angels (Exclusive)",
    smLabel: "Space Marines (Compatible)",
    darkflight_pursuit: "Darkflight Pursuit (3)",
    inner_circle: "Inner Circle Task Force (3)",
    wrath_of_the_rock: "Wrath of the Rock (6)",
    gladius: "Gladius Strike Force (6)",
    ironstorm: "Ironstorm Spearhead (3)",
    stormlance: "Stormlance Task Force (3)",
    ceramite_sentinels: "Ceramite Sentinels (6)",
    boarding_strike: "Boarding Strike (4)",
    terminator_assault: "Terminator Assault Force (4)",
    shield_of_void: "Shield of the Void (4)",
    pilum_strike: "Pilum Strike Team (4)",
    tactical_brethren: "Tactical Brethren (3)",
    assault_brethren: "Assault Brethren (3)",
    devastator_brethren: "Devastator Brethren (3)",
    phobos_shadow: "Phobos Strike Force (3)"
  } : {
    all: "Todos los Destacamentos (69)",
    core: "Reglamento (Básicas del Core) (11)",
    daLabel: "Ángeles Oscuros (Exclusivos)",
    smLabel: "Marines Espaciales (Compatibles)",
    darkflight_pursuit: "Persecución del Vuelo Oscuro (3)",
    inner_circle: "Contingente del Círculo Interior (3)",
    wrath_of_the_rock: "Ira de la Roca (6)",
    gladius: "Contingente Gladius (6)",
    ironstorm: "Punta de Lanza Ferrotormenta (3)",
    stormlance: "Contingente Lanzatormenta (3)",
    ceramite_sentinels: "Centinelas de Ceramita (6)",
    boarding_strike: "Golpe de Abordaje (4)",
    terminator_assault: "Asalto de Exterminadores (4)",
    shield_of_void: "Escudo del Vacío (4)",
    pilum_strike: "Equipo de Asalto Pilum (4)",
    tactical_brethren: "Hermandad Táctica (3)",
    assault_brethren: "Hermandad de Asalto (3)",
    devastator_brethren: "Hermandad Devastadora (3)",
    phobos_shadow: "Fuerza de Sombras Phobos (3)"
  };

  select.innerHTML = `
    <option value="all">${optgroups.all}</option>
    <option value="core">${optgroups.core}</option>
    <optgroup label="${optgroups.daLabel}">
      <option value="darkflight_pursuit">${optgroups.darkflight_pursuit}</option>
      <option value="inner_circle">${optgroups.inner_circle}</option>
      <option value="wrath_of_the_rock">${optgroups.wrath_of_the_rock}</option>
    </optgroup>
    <optgroup label="${optgroups.smLabel}">
      <option value="gladius">${optgroups.gladius}</option>
      <option value="ironstorm">${optgroups.ironstorm}</option>
      <option value="stormlance">${optgroups.stormlance}</option>
      <option value="ceramite_sentinels">${optgroups.ceramite_sentinels}</option>
      <option value="boarding_strike">${optgroups.boarding_strike}</option>
      <option value="terminator_assault">${optgroups.terminator_assault}</option>
      <option value="shield_of_void">${optgroups.shield_of_void}</option>
      <option value="pilum_strike">${optgroups.pilum_strike}</option>
      <option value="tactical_brethren">${optgroups.tactical_brethren}</option>
      <option value="assault_brethren">${optgroups.assault_brethren}</option>
      <option value="devastator_brethren">${optgroups.devastator_brethren}</option>
      <option value="phobos_shadow">${optgroups.phobos_shadow}</option>
    </optgroup>
  `;
  select.value = prev || "all";
}

/**
 * Cambia el idioma de la aplicación y actualiza toda la interfaz.
 */
function setAppLanguage(lang) {
  if (lang !== "es" && lang !== "en") lang = "es";
  AppState.currentLanguage = lang;
  localStorage.setItem("cogitator_language", lang);

  updateAppTranslations();
  renderStratagems();
  renderBattleStratagems();
  updateStratagemPhaseBadges();
}
window.setAppLanguage = setAppLanguage;

// ==========================================================================
// INICIALIZACIÓN Y PERSISTENCIA (LOCALSTORAGE)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadFromStorage();
  initDefaultCollectionIfEmpty();
  initDefaultArmyListIfEmpty();
  
  initTabNavigation();
  initCodexFilters();
  initUnitComparator();
  initDetachments();
  initStratagems();
  initCollectionActions();
  initArmyBuilder();
  initBattleTracker();
  initMathhammer();
  
  updateAppTranslations();
  renderCodex();
  renderUnitComparator();
  renderDetachments();
  renderStratagems();
  renderCollection();
  renderArmyBuilder();
  updateHeaderStats();

  // Gestión global de cierre de modales (clic en fondo oscuro y tecla Escape)
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("active");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.active").forEach(m => m.classList.remove("active"));
    }
  });

  // Detección automática y carga de lista de ejército compartida por URL (?army=...)
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const sharedArmyParam = urlParams.get("army");
    if (sharedArmyParam && typeof ArmyListImporter !== "undefined" && ArmyListImporter.decodeShareableUrl) {
      const decodedList = ArmyListImporter.decodeShareableUrl(sharedArmyParam);
      if (decodedList && decodedList.name && Array.isArray(decodedList.units)) {
        decodedList.id = `list_shared_${Date.now()}`;
        AppState.armyLists.push(decodedList);
        AppState.activeListId = decodedList.id;
        saveToStorage();
        switchTab("army");
        if (typeof showTacticalNotification === "function") {
          showTacticalNotification(`📥 Lista compartida "${decodedList.name}" cargada con éxito`);
        } else if (typeof showBattleToast === "function") {
          showBattleToast(`📥 Lista compartida "${decodedList.name}" cargada con éxito`);
        }
        // Limpiar parámetro sin refrescar la página
        if (window.history && window.history.replaceState) {
          const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
          window.history.replaceState({ path: cleanUrl }, '', cleanUrl);
        }
      }
    }
  } catch (urlErr) {
    console.warn("No se pudo cargar la lista compartida desde la URL:", urlErr);
  }
});

function saveToStorage() {
  localStorage.setItem("cogitator_collection", JSON.stringify(AppState.collection));
  localStorage.setItem("cogitator_armyLists", JSON.stringify(AppState.armyLists));
  localStorage.setItem("cogitator_activeListId", AppState.activeListId);
  localStorage.setItem("cogitator_battle", JSON.stringify(AppState.battle));
  updateHeaderStats();
}

function loadFromStorage() {
  try {
    const savedCustomDS = localStorage.getItem("cogitator_custom_datasheets");
    if (savedCustomDS) {
      const parsedDS = JSON.parse(savedCustomDS);
      if (Array.isArray(parsedDS)) {
        // Auto-saneamiento de caché: Si la caché antigua guardaba menos de 110 hojas de datos,
        // la purgamos para asegurar el catálogo íntegro oficial de 113 datasheets de 11ª Edición.
        if (parsedDS.length < 110) {
          console.info("Cogitador: Actualizando caché local al catálogo oficial completo de 113 datasheets...");
          localStorage.removeItem("cogitator_custom_datasheets");
        } else {
          // Si el usuario tenía datasheets personalizadas (isCustom), preservarlas
          parsedDS.forEach(savedItem => {
            if (savedItem.isCustom && !WH40K_DATA.datasheets.some(d => d.id === savedItem.id)) {
              WH40K_DATA.datasheets.push(savedItem);
            }
          });
        }
      }
    }

    // Inicialización defensiva de arrays para prevenir excepciones en render
    if (Array.isArray(WH40K_DATA.datasheets)) {
      WH40K_DATA.datasheets.forEach(ds => {
        if (!ds.rangedWeapons) ds.rangedWeapons = [];
        if (!ds.meleeWeapons) ds.meleeWeapons = [];
        if (!ds.keywords) ds.keywords = [];
        if (!ds.abilities) ds.abilities = [];
        if (!ds.pointsOptions || ds.pointsOptions.length === 0) ds.pointsOptions = [{ models: 1, points: 0 }];
      });
    }

    const savedCol = localStorage.getItem("cogitator_collection");
    if (savedCol) AppState.collection = JSON.parse(savedCol);
    
    const savedLists = localStorage.getItem("cogitator_armyLists");
    if (savedLists) AppState.armyLists = JSON.parse(savedLists);
    
    const savedActiveList = localStorage.getItem("cogitator_activeListId");
    if (savedActiveList) AppState.activeListId = savedActiveList;
    
    const savedBattle = localStorage.getItem("cogitator_battle");
    if (savedBattle) {
      AppState.battle = JSON.parse(savedBattle);
      if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
      if (!AppState.battle.turn) AppState.battle.turn = "player";
      if (!AppState.battle.phase) AppState.battle.phase = "command";
      if (AppState.battle.stratagemScopeOnlyArmy === undefined) AppState.battle.stratagemScopeOnlyArmy = true;
    }

    const savedLang = localStorage.getItem("cogitator_language");
    if (savedLang === "es" || savedLang === "en") {
      AppState.currentLanguage = savedLang;
    } else {
      AppState.currentLanguage = "es";
    }
  } catch (err) {
    console.error("Error cargando datos de LocalStorage:", err);
  }
}

// Inicializa una colección modelo si está vacía para que el usuario no empiece de cero
function initDefaultCollectionIfEmpty() {
  if (AppState.collection.length === 0) {
    AppState.collection = [
      {
        id: "col_1",
        datasheetId: "da_azrael",
        alias: "Comandante Supremo Azrael",
        customName: "Comandante Supremo Azrael",
        wing: "Ala de Muerte",
        count: 1,
        status: "parade", // Nivel desfile
        selectedWeapons: ["Arma de Fuego Artesanal – Damnatus", "La Espada de los Secretos (The Sword of Secrets)"],
        loadoutNotes: "Ira del León, Espada de Secretos, Yelmo del León",
        isMagnetized: false,
        addedDate: "2026-01-10"
      },
      {
        id: "col_2",
        datasheetId: "da_deathwing_knights",
        alias: "Escuadra I - Martillos de Caliban",
        customName: "Escuadra I - Martillos de Caliban",
        wing: "Ala de Muerte",
        count: 5,
        status: "battle", // Listo para combate
        selectedWeapons: ["Maza de Absolución (Mace of Absolution)", "Gran Arma de los No Perdonados"],
        loadoutNotes: "Maza de expiación x4, Gran Arma de los No Perdonados x1",
        isMagnetized: true,
        addedDate: "2026-02-14"
      },
      {
        id: "col_3",
        datasheetId: "da_inner_circle_companions",
        alias: "Custodios del Círculo Interior",
        customName: "Custodios del Círculo Interior",
        wing: "Ala de Muerte",
        count: 6,
        status: "base", // Color base
        selectedWeapons: ["Mandoble Calibanita – Golpe (Strike)", "Mandoble Calibanita – Barrido (Sweep)"],
        loadoutNotes: "Mandobles de Caliban",
        isMagnetized: false,
        addedDate: "2026-03-01"
      },
      {
        id: "col_4",
        datasheetId: "sm_hellblasters",
        alias: "Escuadra Fuego Solar",
        customName: "Escuadra Fuego Solar",
        wing: "Compañía Verde",
        count: 10,
        status: "built", // Montado
        selectedWeapons: ["Incinerador de Plasma – Estándar", "Incinerador de Plasma – Sobrecarga", "Pistola Bólter (Bolt Pistol)"],
        loadoutNotes: "Incineradores de plasma",
        isMagnetized: false,
        addedDate: "2026-03-15"
      },
      {
        id: "col_5",
        datasheetId: "da_ravenwing_black_knights",
        alias: "Lanzas de la Medianoche",
        customName: "Lanzas de la Medianoche",
        wing: "Ala de Cuervo",
        count: 3,
        status: "box", // En caja / matriz
        selectedWeapons: ["Garras de Plasma – Estándar (Plasma Talon)", "Martillos Corvus (Corvus Hammers)"],
        loadoutNotes: "Garras de plasma y Martillos Corvus",
        isMagnetized: true,
        addedDate: "2026-04-01"
      },
      {
        id: "col_6",
        datasheetId: "sm_redemptor_dreadnought",
        alias: "Venganza de Caliban",
        customName: "Venganza de Caliban",
        wing: "Ala de Muerte",
        count: 1,
        status: "battle",
        selectedWeapons: ["Macroincinerador de Plasma – Estándar", "Cañón Gatling Onslaught (Onslaught Gatling)", "Puño Redemptor (Redemptor Fist)"],
        loadoutNotes: "Macroincinerador de Plasma, Cañón Gatling Onslaught, Puño Redemptor",
        isMagnetized: true,
        addedDate: "2026-02-20"
      }
    ];
    saveToStorage();
  }
}

function initDefaultArmyListIfEmpty() {
  if (AppState.armyLists.length === 0) {
    const listId = "list_default_1";
    AppState.armyLists = [
      {
        id: listId,
        name: "Fuerza de Asedio de la Primera Legión",
        pointsLimit: 2000,
        detachmentId: "inner_circle",
        detachmentIds: ["inner_circle"],
        units: [
          {
            instanceId: "u_1",
            datasheetId: "da_azrael",
            modelsCount: 1,
            isWarlord: true,
            enhancementId: null,
            attachedToUnitInstanceId: "u_3"
          },
          {
            instanceId: "u_2",
            datasheetId: "da_deathwing_knights",
            modelsCount: 5,
            isWarlord: false,
            enhancementId: null,
            attachedToUnitInstanceId: null
          },
          {
            instanceId: "u_3",
            datasheetId: "da_inner_circle_companions",
            modelsCount: 6,
            isWarlord: false,
            enhancementId: null,
            attachedToUnitInstanceId: null
          },
          {
            instanceId: "u_4",
            datasheetId: "sm_hellblasters",
            modelsCount: 10,
            isWarlord: false,
            enhancementId: null,
            attachedToUnitInstanceId: null
          },
          {
            instanceId: "u_5",
            datasheetId: "sm_redemptor_dreadnought",
            modelsCount: 1,
            isWarlord: false,
            enhancementId: null,
            attachedToUnitInstanceId: null
          }
        ]
      }
    ];
    AppState.activeListId = listId;
    saveToStorage();
  }
}

// ==========================================================================
// CONTROL DE NAVEGACIÓN ENTRE PESTAÑAS
// ==========================================================================
function initTabNavigation() {
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;
  
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });
  
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === `pane-${tabId}`);
  });
  
  if (tabId === "codex") renderCodex();
  if (tabId === "detachments") renderDetachments();
  if (tabId === "stratagems") renderStratagems();
  if (tabId === "collection") renderCollection();
  if (tabId === "army") renderArmyBuilder();
  if (tabId === "battle") renderBattleTracker();
}

function updateHeaderStats() {
  // Puntos totales de la colección
  let totalCollectionPoints = 0;
  let totalModels = 0;
  let battleReadyCount = 0;
  
  AppState.collection.forEach(item => {
    const ds = WH40K_DATA.datasheets.find(d => d.id === item.datasheetId);
    if (ds) {
      const opt = ds.pointsOptions[0];
      const basePoints = opt ? opt.points : 0;
      totalCollectionPoints += basePoints;
    }
    totalModels += item.count;
    if (item.status === "battle" || item.status === "parade") {
      battleReadyCount += item.count;
    }
  });
  
  const totalModelsEl = document.getElementById("header-total-models");
  const totalPointsEl = document.getElementById("header-total-points");
  const paintingRatioEl = document.getElementById("header-painting-ratio");
  
  if (totalModelsEl) totalModelsEl.textContent = totalModels;
  if (totalPointsEl) totalPointsEl.textContent = `${totalCollectionPoints} pts`;
  
  const ratio = totalModels > 0 ? Math.round((battleReadyCount / totalModels) * 100) : 0;
  if (paintingRatioEl) paintingRatioEl.textContent = `${ratio}%`;
}

// ==========================================================================
// ==========================================================================
// MÓDULO 1: CATÁLOGO DEL CÓDEX (DATASHEETS Y FILTROS AVANZADOS)
// ==========================================================================
function setWingFilter(wing) {
  AppState.wingFilter = wing || "all";
  document.querySelectorAll(".wing-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-wing") === AppState.wingFilter);
  });
  renderCodex();
}
if (typeof window !== "undefined") {
  window.setWingFilter = setWingFilter;
}

function initCodexFilters() {
  const searchInput = document.getElementById("codex-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value;
      renderCodex();
    });
  }
  
  const wingBtns = document.querySelectorAll(".wing-filter-btn");
  wingBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetWing = btn.getAttribute("data-wing") || "all";
      setWingFilter(targetWing);
    });
  });

  const roleFilterSelect = document.getElementById("codex-role-filter");
  if (roleFilterSelect) {
    roleFilterSelect.addEventListener("change", (e) => {
      AppState.roleFilter = e.target.value;
      renderCodex();
    });
  }

  const keywordFilterSelect = document.getElementById("codex-keyword-filter");
  if (keywordFilterSelect) {
    // Poblar desplegable de palabras clave desde WH40K_DATA.keywords y datasheets
    const keywordSet = new Set();
    if (WH40K_DATA.keywords && typeof WH40K_DATA.keywords === "object") {
      Object.keys(WH40K_DATA.keywords).forEach(k => keywordSet.add(k));
    }
    if (Array.isArray(WH40K_DATA.datasheets)) {
      WH40K_DATA.datasheets.forEach(ds => {
        if (Array.isArray(ds.keywords)) {
          ds.keywords.forEach(k => keywordSet.add(k.toUpperCase().trim()));
        }
      });
    }

    const sortedKeywords = Array.from(keywordSet).sort((a, b) => a.localeCompare(b, 'es'));
    keywordFilterSelect.innerHTML = `
      <option value="all">Todas las Keywords (${sortedKeywords.length})</option>
      ${sortedKeywords.map(kw => `<option value="${kw}">${kw}</option>`).join('')}
    `;

    keywordFilterSelect.addEventListener("change", (e) => {
      AppState.keywordFilter = e.target.value;
      renderCodex();
    });
  }

  const sortSelect = document.getElementById("codex-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortBy = e.target.value;
      renderCodex();
    });
  }

  const clearBtn = document.getElementById("btn-clear-codex-filters");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => clearCodexFilters());
  }
}

function clearCodexFilters() {
  AppState.searchQuery = "";
  AppState.roleFilter = "all";
  AppState.keywordFilter = "all";
  AppState.sortBy = "name_asc";

  const searchInput = document.getElementById("codex-search");
  if (searchInput) searchInput.value = "";

  const roleSelect = document.getElementById("codex-role-filter");
  if (roleSelect) roleSelect.value = "all";

  const kwSelect = document.getElementById("codex-keyword-filter");
  if (kwSelect) kwSelect.value = "all";

  const sortSelect = document.getElementById("codex-sort-select");
  if (sortSelect) sortSelect.value = "name_asc";

  setWingFilter("all");
}

function filterCodexBySynergy(unitName) {
  AppState.searchQuery = unitName;
  const searchInput = document.getElementById("codex-search");
  if (searchInput) searchInput.value = unitName;
  
  switchTab("codex");
  renderCodex();
  
  const pane = document.getElementById("pane-codex");
  if (pane) pane.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCodex() {
  const container = document.getElementById("codex-cards-container");
  if (!container) return;
  
  const qNorm = normalizeText(AppState.searchQuery);
  
  const filtered = WH40K_DATA.datasheets.filter(ds => {
    // 1. Filtro de búsqueda textual normalizada
    if (qNorm) {
      const matchName = normalizeText(ds.name).includes(qNorm);
      const matchOrig = ds.originalName && normalizeText(ds.originalName).includes(qNorm);
      const matchAliases = ds.aliases && ds.aliases.some(a => normalizeText(a).includes(qNorm));
      const matchRole = normalizeText(ds.role).includes(qNorm);
      const matchKeywords = ds.keywords && ds.keywords.some(k => normalizeText(k).includes(qNorm));
      const matchAbilities = ds.abilities && ds.abilities.some(ab => normalizeText(ab).includes(qNorm));
      const matchRanged = ds.rangedWeapons && ds.rangedWeapons.some(w => normalizeText(w.name).includes(qNorm));
      const matchMelee = ds.meleeWeapons && ds.meleeWeapons.some(w => normalizeText(w.name).includes(qNorm));
      
      if (!matchName && !matchOrig && !matchAliases && !matchRole && !matchKeywords && !matchAbilities && !matchRanged && !matchMelee) {
        return false;
      }
    }

    // 2. Filtro de Ala (Con inclusión de palabras clave oficiales de 11ª Edición)
    if (AppState.wingFilter !== "all") {
      const normWing = normalizeText(ds.wing);
      const hasDeathwingKw = ds.keywords && ds.keywords.some(k => {
        const nk = normalizeText(k);
        return nk.includes("deathwing") || nk.includes("ala de muerte");
      });
      const hasRavenwingKw = ds.keywords && ds.keywords.some(k => {
        const nk = normalizeText(k);
        return nk.includes("ravenwing") || nk.includes("ala de cuervo");
      });

      if (AppState.wingFilter === "deathwing") {
        if (normWing !== "ala de muerte" && !hasDeathwingKw) return false;
      } else if (AppState.wingFilter === "ravenwing") {
        if (normWing !== "ala de cuervo" && !hasRavenwingKw) return false;
      } else if (AppState.wingFilter === "green") {
        if (normWing !== "compania verde" && (hasDeathwingKw || hasRavenwingKw)) return false;
      }
    }

    // 3. Filtro de Rol Táctico
    if (AppState.roleFilter !== "all") {
      const normRole = normalizeText(ds.role);
      const normKeywords = ds.keywords ? ds.keywords.map(k => normalizeText(k)) : [];
      
      if (AppState.roleFilter === "character") {
        const isChar = normRole.includes("personaje") || normRole.includes("character") || normRole.includes("lider") || normRole.includes("leader") || normRole.includes("epico") || normKeywords.includes("character") || normKeywords.includes("personaje");
        if (!isChar) return false;
      } else if (AppState.roleFilter === "battleline") {
        const isBattleline = normRole.includes("linea") || normRole.includes("battleline") || normKeywords.includes("linea de batalla") || normKeywords.includes("battleline");
        if (!isBattleline) return false;
      } else if (AppState.roleFilter === "infantry") {
        const isInfantry = normRole.includes("infanteria") || normKeywords.includes("infanteria") || normKeywords.includes("infantry");
        if (!isInfantry) return false;
      } else if (AppState.roleFilter === "elite") {
        const isElite = normRole.includes("elite") || normRole.includes("veteran") || normRole.includes("exterminador") || normRole.includes("camarada");
        if (!isElite) return false;
      } else if (AppState.roleFilter === "mounted") {
        const isMounted = normRole.includes("montad") || normRole.includes("bipede") || normKeywords.includes("montada") || normKeywords.includes("mounted") || normKeywords.includes("motocicleta") || normKeywords.includes("biker");
        if (!isMounted) return false;
      } else if (AppState.roleFilter === "vehicle") {
        const isVehicle = normRole.includes("vehiculo") || normRole.includes("vehicle") || normRole.includes("tanque") || normRole.includes("walker") || normRole.includes("dreadnought") || normKeywords.includes("vehiculo") || normKeywords.includes("vehicle");
        if (!isVehicle) return false;
      } else if (AppState.roleFilter === "transport") {
        const isTransport = normRole.includes("transporte") || normRole.includes("transport") || normKeywords.includes("transporte") || normKeywords.includes("transport");
        if (!isTransport) return false;
      } else if (AppState.roleFilter === "aircraft") {
        const isAircraft = normRole.includes("aeronave") || normRole.includes("aircraft") || normKeywords.includes("aeronave") || normKeywords.includes("aircraft");
        if (!isAircraft) return false;
      }
    }

    // 4. Filtro de Palabra Clave (Keyword)
    if (AppState.keywordFilter !== "all") {
      const targetKw = normalizeText(AppState.keywordFilter);
      const hasKw = ds.keywords && ds.keywords.some(k => normalizeText(k) === targetKw || normalizeText(k).includes(targetKw));
      if (!hasKw) return false;
    }

    return true;
  });

  // Ordenación de resultados
  filtered.sort((a, b) => {
    if (AppState.sortBy === "name_asc") {
      return a.name.localeCompare(b.name, 'es');
    } else if (AppState.sortBy === "name_desc") {
      return b.name.localeCompare(a.name, 'es');
    } else if (AppState.sortBy === "points_asc") {
      const ptsA = a.pointsOptions[0]?.points || 0;
      const ptsB = b.pointsOptions[0]?.points || 0;
      return ptsA - ptsB;
    } else if (AppState.sortBy === "points_desc") {
      const ptsA = a.pointsOptions[0]?.points || 0;
      const ptsB = b.pointsOptions[0]?.points || 0;
      return ptsB - ptsA;
    } else if (AppState.sortBy === "t_desc") {
      return (parseInt(b.stats.r) || 0) - (parseInt(a.stats.r) || 0);
    } else if (AppState.sortBy === "sv_asc") {
      const parseSv = (s) => parseInt(String(s).replace('+', '')) || 9;
      return parseSv(a.stats.sv) - parseSv(b.stats.sv);
    } else if (AppState.sortBy === "w_desc") {
      return (parseInt(b.stats.h) || 0) - (parseInt(a.stats.h) || 0);
    }
    return 0;
  });

  // Actualizar contador de resultados en la cabecera
  const countEl = document.getElementById("codex-results-count");
  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} de ${WH40K_DATA.datasheets.length} hojas`;
  }
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px 24px; color: var(--text-muted); background: var(--bg-surface); border: 1px dashed var(--border-bright); border-radius: var(--radius-md);">
        <p style="font-size: 1.1rem; color: var(--deathwing-bone); margin-bottom: 8px;">⚔️ No se encontraron hojas de datos con los filtros seleccionados.</p>
        <p style="font-size: 0.9rem; margin-bottom: 16px;">Prueba a modificar el término de búsqueda o limpia los filtros activos.</p>
        <button class="btn-gothic" onclick="clearCodexFilters()">↺ Restablecer Todos los Filtros</button>
      </div>`;
    return;
  }
  
  container.innerHTML = filtered.map(ds => {
    const wingClass = ds.wing === "Ala de Muerte" ? "deathwing" : (ds.wing === "Ala de Cuervo" ? "ravenwing" : "green");
    const pointsOptions = Array.isArray(ds.pointsOptions) && ds.pointsOptions.length > 0 ? ds.pointsOptions : [{ models: 1, points: 0 }];
    const pointsStr = pointsOptions.map(p => `${p.models} mini${p.models > 1 ? 's' : ''}: ${p.points} pts`).join(' | ');
    const firstPoints = pointsOptions[0]?.points ?? 0;
    
    // Tabla de armas a distancia
    const rangedRows = (ds.rangedWeapons || []).map(w => `
      <tr>
        <td class="w-name">${w.name || '-'}<span class="w-keywords">${(w.keywords || []).join(', ') || '-'}</span></td>
        <td>${w.range || '-'}</td>
        <td>${w.a ?? '-'}</td>
        <td>${w.bs || '-'}</td>
        <td>${w.f ?? '-'}</td>
        <td>${w.ap ?? '-'}</td>
        <td>${w.d ?? '-'}</td>
      </tr>
    `).join('');
    
    // Tabla de armas de combate cuerpo a cuerpo
    const meleeRows = (ds.meleeWeapons || []).map(w => `
      <tr>
        <td class="w-name">${w.name || '-'}<span class="w-keywords">${(w.keywords || []).join(', ') || '-'}</span></td>
        <td>${w.range || 'Combate'}</td>
        <td>${w.a ?? '-'}</td>
        <td>${w.ws || '-'}</td>
        <td>${w.f ?? '-'}</td>
        <td>${w.ap ?? '-'}</td>
        <td>${w.d ?? '-'}</td>
      </tr>
    `).join('');
    
    const stats = ds.stats || { m: "-", r: "-", sv: "-", inv: "-", h: "-", l: "-", co: "-" };
    
    return `
      <div class="datasheet-card wing-${wingClass}">
        <div class="card-header-da">
          <div class="card-title-group">
            <h3>${ds.name}</h3>
            <div class="card-subtitle">
              <span class="wing-badge ${wingClass}">${ds.wing}</span>
              <span>• ${ds.role}</span>
              ${ds.isCustom ? '<span class="wing-badge" style="background: rgba(217, 119, 6, 0.25); border: 1px solid #d97706; color: #fbbf24; margin-left: 6px;">Personalizada</span>' : ''}
            </div>
          </div>
          <div class="points-badge">${firstPoints} pts</div>
        </div>
        
        <!-- ATRIBUTOS OFICIALES DE 11ª EDICIÓN -->
        <div class="statline-container">
          <div class="stat-box">
            <span class="stat-label">M</span>
            <span class="stat-val">${stats.m}</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">R</span>
            <span class="stat-val">${stats.r}</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">SV</span>
            <span class="stat-val">${stats.sv}</span>
          </div>
          <div class="stat-box stat-inv">
            <span class="stat-label">INV</span>
            <span class="stat-val">${stats.inv}</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">H</span>
            <span class="stat-val">${stats.h}</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">L</span>
            <span class="stat-val">${stats.l}</span>
          </div>
          <div class="stat-box stat-co">
            <span class="stat-label">CO</span>
            <span class="stat-val">${stats.co}</span>
          </div>
        </div>
        
        <!-- RESUMEN DE ARMAS -->
        <div>
          <table class="weapons-summary-table">
            <thead>
              <tr>
                <th>Arma</th>
                <th>Alc</th>
                <th>A</th>
                <th>HP/HA</th>
                <th>F</th>
                <th>FP</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              ${rangedRows}
              ${meleeRows}
            </tbody>
          </table>
        </div>
        
        <!-- HABILIDADES -->
        <div class="abilities-list">
          ${(ds.abilities || []).map(ab => `<div class="ability-tag">${ab}</div>`).join('')}
        </div>
        
        <div class="card-actions-row">
          <span style="font-size: 0.8rem; color: var(--gold-primary); align-self: center;">${pointsStr}</span>
          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
            <button class="btn-gothic-secondary" onclick="sendUnitToComparator('${ds.id}')" style="font-size: 0.8rem; padding: 6px 10px; border-color: #38bdf8; color: #38bdf8;" title="Comparar frente a otra unidad">
              ⚖️ Comparar
            </button>
            <button class="btn-gothic-secondary" onclick="openEditDatasheetModal('${ds.id}')" style="font-size: 0.8rem; padding: 6px 10px;" title="Editar parámetros de esta hoja de datos">
              ✏️ Editar
            </button>
            <button class="btn-gothic" onclick="addDatasheetToCollection('${ds.id}')" style="font-size: 0.8rem; padding: 6px 12px;">
              + A mi Colección
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// MÓDULO: COMPARADOR TÁCTICO DE UNIDADES (CARA A CARA - 11ª EDICIÓN)
// ==========================================================================
function initUnitComparator() {
  const selectA = document.getElementById("unit-comparator-select-a");
  const selectB = document.getElementById("unit-comparator-select-b");
  if (!selectA || !selectB) return;

  const datasheets = Array.isArray(WH40K_DATA.datasheets) ? WH40K_DATA.datasheets : [];
  const deathwing = datasheets.filter(d => d.wing === "Ala de Muerte");
  const ravenwing = datasheets.filter(d => d.wing === "Ala de Cuervo");
  const green = datasheets.filter(d => d.wing === "Compañía Verde" || (!deathwing.includes(d) && !ravenwing.includes(d)));

  const makeOptgroup = (label, list) => `
    <optgroup label="${label} (${list.length})">
      ${list.map(d => `<option value="${d.id}">${d.name} [${d.pointsOptions?.[0]?.points || 0} pts]</option>`).join('')}
    </optgroup>
  `;

  const optionsHtml = `
    ${makeOptgroup("🗡️ Ala de Muerte (Deathwing)", deathwing)}
    ${makeOptgroup("🦅 Ala de Cuervo (Ravenwing)", ravenwing)}
    ${makeOptgroup("⚔️ Compañía Verde / Astartes", green)}
  `;

  selectA.innerHTML = optionsHtml;
  selectB.innerHTML = optionsHtml;

  if (AppState.unitComparatorSlotA) selectA.value = AppState.unitComparatorSlotA;
  if (AppState.unitComparatorSlotB) selectB.value = AppState.unitComparatorSlotB;

  selectA.addEventListener("change", (e) => {
    AppState.unitComparatorSlotA = e.target.value;
    renderUnitComparator();
  });

  selectB.addEventListener("change", (e) => {
    AppState.unitComparatorSlotB = e.target.value;
    renderUnitComparator();
  });
}

function toggleUnitComparator() {
  AppState.isUnitComparatorVisible = !AppState.isUnitComparatorVisible;
  const section = document.getElementById("unit-comparator-section");
  const toggleBtn = document.getElementById("btn-toggle-unit-comparator");
  
  if (section) {
    if (AppState.isUnitComparatorVisible) {
      section.style.display = "block";
      if (toggleBtn) {
        toggleBtn.style.boxShadow = "0 0 15px rgba(56, 189, 248, 0.6)";
      }
      renderUnitComparator();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      section.style.display = "none";
      if (toggleBtn) {
        toggleBtn.style.boxShadow = "none";
      }
    }
  }
}

function swapUnitComparator() {
  const tmp = AppState.unitComparatorSlotA;
  AppState.unitComparatorSlotA = AppState.unitComparatorSlotB;
  AppState.unitComparatorSlotB = tmp;

  const selectA = document.getElementById("unit-comparator-select-a");
  const selectB = document.getElementById("unit-comparator-select-b");
  if (selectA) selectA.value = AppState.unitComparatorSlotA;
  if (selectB) selectB.value = AppState.unitComparatorSlotB;

  renderUnitComparator();
}

function sendUnitToComparator(unitId) {
  if (!unitId) return;

  if (AppState.unitComparatorSlotA === unitId) {
    if (AppState.unitComparatorSlotB === unitId) {
      const other = (WH40K_DATA.datasheets || []).find(d => d.id !== unitId);
      if (other) AppState.unitComparatorSlotB = other.id;
    }
  } else if (!AppState.unitComparatorSlotA || AppState.unitComparatorSlotA === AppState.unitComparatorSlotB) {
    AppState.unitComparatorSlotA = unitId;
  } else {
    AppState.unitComparatorSlotB = unitId;
  }

  AppState.isUnitComparatorVisible = true;
  const section = document.getElementById("unit-comparator-section");
  const toggleBtn = document.getElementById("btn-toggle-unit-comparator");
  if (section) {
    section.style.display = "block";
    if (toggleBtn) toggleBtn.style.boxShadow = "0 0 15px rgba(56, 189, 248, 0.6)";
  }

  const selectA = document.getElementById("unit-comparator-select-a");
  const selectB = document.getElementById("unit-comparator-select-b");
  if (selectA) selectA.value = AppState.unitComparatorSlotA;
  if (selectB) selectB.value = AppState.unitComparatorSlotB;

  renderUnitComparator();

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderUnitComparator() {
  const container = document.getElementById("unit-comparator-content-grid");
  if (!container) return;

  const datasheets = Array.isArray(WH40K_DATA.datasheets) ? WH40K_DATA.datasheets : [];
  const dsA = datasheets.find(d => d.id === AppState.unitComparatorSlotA) || datasheets[0];
  const dsB = datasheets.find(d => d.id === AppState.unitComparatorSlotB) || datasheets[1] || datasheets[0];

  if (!dsA || !dsB) {
    container.innerHTML = `<p style="color: var(--text-muted); padding: 20px; text-align: center;">No hay hojas de datos disponibles para comparar.</p>`;
    return;
  }

  // Comparación matemática de estadísticas de 11ª Edición
  const compareStat = (valA, valB, key) => {
    if (key === "m" || key === "r" || key === "h" || key === "co") {
      const nA = parseInt(valA) || 0;
      const nB = parseInt(valB) || 0;
      return nA > nB ? 1 : (nB > nA ? -1 : 0);
    }
    if (key === "sv" || key === "l") {
      const nA = parseInt(String(valA).replace(/\+/g, '')) || 9;
      const nB = parseInt(String(valB).replace(/\+/g, '')) || 9;
      return nA < nB ? 1 : (nB < nA ? -1 : 0);
    }
    if (key === "inv") {
      const hasA = valA && valA !== '-' && valA !== 'none';
      const hasB = valB && valB !== '-' && valB !== 'none';
      if (hasA && !hasB) return 1;
      if (!hasA && hasB) return -1;
      if (hasA && hasB) {
        const nA = parseInt(String(valA).replace(/\+/g, '')) || 9;
        const nB = parseInt(String(valB).replace(/\+/g, '')) || 9;
        return nA < nB ? 1 : (nB < nA ? -1 : 0);
      }
      return 0;
    }
    return 0;
  };

  const renderColumn = (ds, otherDs, colClass, colLabel, colColor) => {
    const wingClass = ds.wing === "Ala de Muerte" ? "deathwing" : (ds.wing === "Ala de Cuervo" ? "ravenwing" : "green");
    const pointsOptions = Array.isArray(ds.pointsOptions) && ds.pointsOptions.length > 0 ? ds.pointsOptions : [{ models: 1, points: 0 }];
    const firstOption = pointsOptions[0];
    const pointsPerModel = firstOption.models > 0 ? Math.round(firstOption.points / firstOption.models) : firstOption.points;
    const woundsNum = parseInt(ds.stats?.h) || 1;
    const totalWoundsInUnit = firstOption.models * woundsNum;
    const pointsPerWound = totalWoundsInUnit > 0 ? (firstOption.points / totalWoundsInUnit).toFixed(1) : "-";

    const pointsStr = pointsOptions.map(p => `${p.models} mini${p.models > 1 ? 's' : ''}: ${p.points} pts`).join(' | ');

    // Statline con evaluación de ventajas
    const statsList = [
      { key: "m", label: "M", val: ds.stats?.m ?? "-" },
      { key: "r", label: "R", val: ds.stats?.r ?? "-" },
      { key: "sv", label: "SV", val: ds.stats?.sv ?? "-" },
      { key: "inv", label: "INV", val: ds.stats?.inv ?? "-", isInv: true },
      { key: "h", label: "H", val: ds.stats?.h ?? "-" },
      { key: "l", label: "L", val: ds.stats?.l ?? "-" },
      { key: "co", label: "CO", val: ds.stats?.co ?? "-", isCo: true }
    ];

    const statsHtml = statsList.map(s => {
      const otherVal = otherDs?.stats?.[s.key] ?? "-";
      const comp = compareStat(s.val, otherVal, s.key);
      const isWinner = comp === 1;
      const extraClass = s.isInv ? 'stat-inv' : (s.isCo ? 'stat-co' : '');
      return `
        <div class="stat-box ${extraClass} ${isWinner ? 'stat-winner' : ''}">
          <span class="stat-label">${s.label}</span>
          <span class="stat-val">${s.val}</span>
          ${isWinner ? '<span class="stat-winner-tag">★ TOP</span>' : ''}
        </div>
      `;
    }).join('');

    // Ranged weapons
    const rangedRows = (ds.rangedWeapons || []).map(w => `
      <tr>
        <td class="w-name">${w.name || '-'}<span class="w-keywords">${(w.keywords || []).join(', ') || '-'}</span></td>
        <td>${w.range || '-'}</td>
        <td>${w.a ?? '-'}</td>
        <td>${w.bs || '-'}</td>
        <td>${w.f ?? '-'}</td>
        <td>${w.ap ?? '-'}</td>
        <td>${w.d ?? '-'}</td>
      </tr>
    `).join('');

    // Melee weapons
    const meleeRows = (ds.meleeWeapons || []).map(w => `
      <tr>
        <td class="w-name">${w.name || '-'}<span class="w-keywords">${(w.keywords || []).join(', ') || '-'}</span></td>
        <td>${w.range || 'Combate'}</td>
        <td>${w.a ?? '-'}</td>
        <td>${w.ws || '-'}</td>
        <td>${w.f ?? '-'}</td>
        <td>${w.ap ?? '-'}</td>
        <td>${w.d ?? '-'}</td>
      </tr>
    `).join('');

    const abilitiesHtml = (ds.abilities || []).map(ab => `
      <div class="ability-tag" style="background: rgba(0, 0, 0, 0.45); border: 1px solid var(--border-subtle); padding: 6px 10px; margin-bottom: 4px; border-radius: var(--radius-sm);">
        ⚔️ ${ab}
      </div>
    `).join('') || '<p style="color: var(--text-muted); font-size: 0.8rem;">Sin habilidades especiales.</p>';

    const keywordsHtml = (ds.keywords || []).map(kw => `
      <span class="det-badge" style="background: rgba(255,255,255,0.06); border: 1px solid var(--border-subtle); color: var(--text-muted);">
        ${kw}
      </span>
    `).join('');

    const leaderHtml = Array.isArray(ds.leaderOf) && ds.leaderOf.length > 0 ? `
      <div class="comp-section-box">
        <div class="comp-section-title">👑 Puede liderar las unidades:</div>
        <div style="font-size: 0.85rem; color: var(--gold-accent);">
          ${ds.leaderOf.join(", ")}
        </div>
      </div>
    ` : '';

    return `
      <div class="comparator-col ${colClass}">
        <div class="col-header">
          <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800; color: ${colColor}; margin-bottom: 4px;">${colLabel}</div>
          <h4 class="col-title">${ds.name}</h4>
          <div class="col-subtitle">${ds.originalName ? ds.originalName + ' • ' : ''}<em>${ds.role}</em></div>
          <div class="col-badges">
            <span class="wing-badge ${wingClass}">${ds.wing}</span>
            <span class="points-badge">${firstOption.points} pts</span>
            ${ds.isEpicHero ? '<span class="det-badge da-exclusive">Héroe Épico</span>' : ''}
          </div>
        </div>

        <!-- Atributos Básicos 11ª Edición -->
        <div class="comp-section-box">
          <div class="comp-section-title">🛡️ Perfil de Atributos (Statline)</div>
          <div class="statline-container" style="grid-template-columns: repeat(7, 1fr); gap: 6px;">
            ${statsHtml}
          </div>
        </div>

        <!-- Eficiencia en Puntos y Tamaño de Escuadra -->
        <div class="comp-section-box">
          <div class="comp-section-title">💰 Opciones de Puntos y Eficiencia</div>
          <div style="font-size: 0.85rem; color: var(--gold-primary); margin-bottom: 6px;">${pointsStr}</div>
          <div class="efficiency-card">
            <div class="eff-stat">
              <span class="eff-label">Coste por Mini</span>
              <span class="eff-val">${pointsPerModel} pts</span>
            </div>
            <div class="eff-stat">
              <span class="eff-label">Heridas Escuadra</span>
              <span class="eff-val">${totalWoundsInUnit} H</span>
            </div>
            <div class="eff-stat">
              <span class="eff-label">Coste / Herida</span>
              <span class="eff-val">${pointsPerWound} pts/H</span>
            </div>
          </div>
        </div>

        <!-- Armas de Combate y Disparo -->
        <div class="comp-section-box">
          <div class="comp-section-title">💥 Arsenal de Armamento</div>
          <table class="weapons-summary-table" style="font-size: 0.78rem;">
            <thead>
              <tr>
                <th>Arma</th>
                <th>Alc</th>
                <th>A</th>
                <th>HP/HA</th>
                <th>F</th>
                <th>FP</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              ${rangedRows}
              ${meleeRows}
            </tbody>
          </table>
        </div>

        <!-- Habilidades -->
        <div class="comp-section-box">
          <div class="comp-section-title">⚡ Habilidades de Unidad</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            ${abilitiesHtml}
          </div>
        </div>

        ${leaderHtml}

        <!-- Palabras Clave -->
        <div class="comp-section-box">
          <div class="comp-section-title">🏷️ Palabras Clave (Keywords)</div>
          <div style="display: flex; gap: 4px; flex-wrap: wrap;">
            ${keywordsHtml}
          </div>
        </div>

        <!-- Acciones Rápidas -->
        <div style="display: flex; gap: 8px; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-subtle); flex-wrap: wrap;">
          <button class="btn-gothic" onclick="addDatasheetToCollection('${ds.id}')" style="font-size: 0.8rem; padding: 6px 12px;">
            + A mi Colección
          </button>
          <button class="btn-gothic-secondary" onclick="openEditDatasheetModal('${ds.id}')" style="font-size: 0.8rem; padding: 6px 10px;">
            ✏️ Editar
          </button>
        </div>
      </div>
    `;
  };

  container.innerHTML = `
    ${renderColumn(dsA, dsB, "col-a", "🔵 Unidad A", "#38bdf8")}
    ${renderColumn(dsB, dsA, "col-b", "🔴 Unidad B", "#f43f5e")}
  `;
}

if (typeof window !== "undefined") {
  window.initUnitComparator = initUnitComparator;
  window.toggleUnitComparator = toggleUnitComparator;
  window.swapUnitComparator = swapUnitComparator;
  window.sendUnitToComparator = sendUnitToComparator;
  window.renderUnitComparator = renderUnitComparator;
}

// ==========================================================================
// ==========================================================================
// MÓDULO DE DESTACAMENTOS Y COMPARADOR TÁCTICO (11ª EDICIÓN / WAHAPEDIA & EDITOR)
// ==========================================================================

/**
 * Carga los destacamentos personalizados y modificados desde localStorage
 */
function loadCustomDetachments() {
  try {
    const raw = localStorage.getItem("cogitator_custom_detachments");
    if (!raw) return;
    const customMap = JSON.parse(raw);
    if (!customMap || typeof customMap !== "object") return;

    Object.keys(customMap).forEach(id => {
      const customItem = customMap[id];
      const existingIdx = WH40K_DATA.detachments.findIndex(d => d.id === id);
      if (existingIdx !== -1) {
        WH40K_DATA.detachments[existingIdx] = customItem;
      } else {
        WH40K_DATA.detachments.push(customItem);
      }
    });
  } catch (err) {
    console.error("Error al cargar destacamentos personalizados:", err);
  }
}

/**
 * Guarda el mapa de destacamentos personalizados en localStorage
 */
function saveCustomDetachmentsMap(map) {
  try {
    localStorage.setItem("cogitator_custom_detachments", JSON.stringify(map));
  } catch (err) {
    console.error("Error al guardar destacamentos personalizados en localStorage:", err);
  }
}

/**
 * Comprueba si existen destacamentos personalizados o modificados y muestra el botón de restaurar
 */
function checkCustomDetachmentsStatus() {
  const btnResetAll = document.getElementById("btn-reset-all-detachments");
  if (!btnResetAll) return;
  const hasCustom = (WH40K_DATA.detachments || []).some(d => d.isCustom || d.isEdited);
  btnResetAll.style.display = hasCustom ? "inline-flex" : "none";
}

/**
 * Rellena los selectores de los destacamentos A y B del comparador táctico
 */
function populateComparatorSelectOptions() {
  const selectA = document.getElementById("comparator-select-a");
  const selectB = document.getElementById("comparator-select-b");
  if (!selectA || !selectB) return;

  const daExclusive = WH40K_DATA.detachments.filter(d => d.isExclusiveDA);
  const astartes = WH40K_DATA.detachments.filter(d => !d.isExclusiveDA);

  const makeOptionsHtml = () => `
    <optgroup label="★ Exclusivos de los Ángeles Oscuros (${daExclusive.length})">
      ${daExclusive.map(d => `<option value="${d.id}">${d.name} (${d.originalName}) [${d.commandPoints || (d.dp + ' PD')}]${d.isCustom ? ' [Personalizado]' : d.isEdited ? ' [Modificado]' : ''}</option>`).join('')}
    </optgroup>
    <optgroup label="Doctrinas Astartes Compatibles (${astartes.length})">
      ${astartes.map(d => `<option value="${d.id}">${d.name} (${d.originalName}) [${d.commandPoints || (d.dp + ' PD')}]${d.isCustom ? ' [Personalizado]' : d.isEdited ? ' [Modificado]' : ''}</option>`).join('')}
    </optgroup>
  `;

  selectA.innerHTML = makeOptionsHtml();
  selectB.innerHTML = makeOptionsHtml();

  if (!WH40K_DATA.detachments.some(d => d.id === AppState.comparatorSlotA)) {
    AppState.comparatorSlotA = WH40K_DATA.detachments[0]?.id || "inner_circle";
  }
  if (!WH40K_DATA.detachments.some(d => d.id === AppState.comparatorSlotB)) {
    AppState.comparatorSlotB = WH40K_DATA.detachments[1]?.id || "gladius_task_force";
  }

  selectA.value = AppState.comparatorSlotA;
  selectB.value = AppState.comparatorSlotB;
}

function initDetachments() {
  if (!WH40K_DATA.defaultDetachments) {
    WH40K_DATA.defaultDetachments = JSON.parse(JSON.stringify(WH40K_DATA.detachments));
  }

  loadCustomDetachments();
  populateComparatorSelectOptions();

  const selectA = document.getElementById("comparator-select-a");
  const selectB = document.getElementById("comparator-select-b");

  if (selectA && selectB) {
    selectA.addEventListener("change", (e) => {
      AppState.comparatorSlotA = e.target.value;
      renderDetachmentComparator();
    });

    selectB.addEventListener("change", (e) => {
      AppState.comparatorSlotB = e.target.value;
      renderDetachmentComparator();
    });
  }

  const searchInput = document.getElementById("detachment-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.detachmentSearch = e.target.value;
      renderDetachments();
    });
  }

  const filterBtns = document.querySelectorAll(".det-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.detachmentFilter = btn.getAttribute("data-detfilter");
      renderDetachments();
    });
  });

  checkCustomDetachmentsStatus();
}

function renderDetachmentComparator() {
  const container = document.getElementById("comparator-content-grid");
  if (!container) return;

  const detA = WH40K_DATA.detachments.find(d => d.id === AppState.comparatorSlotA) || WH40K_DATA.detachments[0];
  const detB = WH40K_DATA.detachments.find(d => d.id === AppState.comparatorSlotB) || WH40K_DATA.detachments[1];

  const renderColumn = (det, colClass, colLabel, borderAccent) => {
    const isDA = det.isExclusiveDA;
    const badgeType = isDA 
      ? `<span class="det-badge da-exclusive">★ Exclusivo Ángeles Oscuros</span>`
      : `<span class="det-badge astartes">Adeptus Astartes</span>`;
    const dpBadge = `<span class="det-badge dp-badge">${det.commandPoints || (det.dp + ' PD')}</span>`;

    const prosHtml = (det.pros || []).map(p => `<div class="pro-item"><span>✔</span><span>${p}</span></div>`).join('');
    const consHtml = (det.cons || []).map(c => `<div class="con-item"><span>✖</span><span>${c}</span></div>`).join('');
    
    const synergiesHtml = (det.synergies || []).map(syn => `
      <button class="synergy-chip" onclick="filterCodexBySynergy('${syn}')" title="Buscar '${syn}' en el Códex">
        ⚔️ ${syn}
      </button>
    `).join('');

    const enhancementsHtml = (det.enhancements || []).map(enh => `
      <div class="enh-card">
        <div class="enh-card-header">
          <span class="enh-title">${enh.name}</span>
          <span class="enh-pts">${enh.points} pts</span>
        </div>
        <p class="enh-desc">${enh.description}</p>
      </div>
    `).join('') || '<p style="font-size: 0.8rem; color: var(--text-muted);">Sin mejoras registradas.</p>';

    const stratagemsHtml = (det.stratagems || []).map(st => `
      <div class="strat-card">
        <div class="strat-card-header">
          <span class="strat-title">${st.name}</span>
          <span class="strat-cp">${st.cp} PC</span>
        </div>
        <div style="font-size: 0.72rem; color: var(--gold-primary); margin-bottom: 2px;">${st.type || 'Estratagema'}</div>
        <p class="strat-desc">${st.desc}</p>
      </div>
    `).join('') || '<p style="font-size: 0.8rem; color: var(--text-muted);">Sin estratagemas registradas.</p>';

    return `
      <div class="comparator-col ${colClass}">
        <div class="col-header">
          <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800; color: ${borderAccent}; margin-bottom: 4px;">${colLabel}</div>
          <h4 class="col-title">${det.name}</h4>
          <div class="col-subtitle">${det.originalName} • <em>${det.type || 'Doctrina de Combate'}</em></div>
          <div class="col-badges">
            ${badgeType}
            ${dpBadge}
          </div>
        </div>

        <!-- ¿Para qué sirve? (Propósito Táctico) -->
        <div class="comp-section-box">
          <div class="comp-section-title">🎯 ¿Para qué sirve esta doctrina?</div>
          <p class="comp-purpose-text">${det.purpose || 'Destacamento de combate táctico para fuerzas de choque del Adeptus Astartes.'}</p>
        </div>

        <!-- Regla del Destacamento -->
        <div class="comp-section-box">
          <div class="comp-section-title">📜 Regla de Destacamento</div>
          <div class="comp-rule-box">
            <div class="comp-rule-name">${det.ruleName}</div>
            <div class="comp-rule-desc">${det.ruleDesc}</div>
          </div>
        </div>

        <!-- Fortalezas y Debilidades -->
        <div class="comp-section-box">
          <div class="comp-section-title">⚖️ Pros y Contras</div>
          <div class="pros-cons-grid">
            <div>
              <div style="font-size: 0.75rem; color: #86efac; font-weight: 700; margin-bottom: 4px;">FORTALEZAS</div>
              ${prosHtml}
            </div>
            <div>
              <div style="font-size: 0.75rem; color: #fca5a5; font-weight: 700; margin-bottom: 4px;">LIMITACIONES</div>
              ${consHtml}
            </div>
          </div>
        </div>

        <!-- Sinergias del Códex -->
        <div class="comp-section-box">
          <div class="comp-section-title">⚔️ Miniaturas y Sinergias Clave</div>
          <div class="synergies-tag-list">
            ${synergiesHtml}
          </div>
        </div>

        <!-- Mejoras (Enhancements) -->
        <div class="comp-section-box">
          <div class="comp-section-title">🛡️ Mejoras para Personajes (${(det.enhancements || []).length})</div>
          <div class="enhancements-list">
            ${enhancementsHtml}
          </div>
        </div>

        <!-- Estratagemas -->
        <div class="comp-section-box">
          <div class="comp-section-title">⚡ Estratagemas Clave (${(det.stratagems || []).length})</div>
          <div class="stratagems-list">
            ${stratagemsHtml}
          </div>
        </div>

        <!-- Acción de asignación directa -->
        <div style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--border-subtle);">
          <button class="btn-gothic" style="width: 100%;" onclick="applyDetachmentToArmy('${det.id}')">
            ⚔️ Asignar a mi Lista de Ejército Activa
          </button>
        </div>
      </div>
    `;
  };

  container.innerHTML = `
    ${renderColumn(detA, "col-a", "Ranura A (Azul)", "#38bdf8")}
    ${renderColumn(detB, "col-b", "Ranura B (Rojo)", "#f43f5e")}
  `;
}

function renderDetachments() {
  const container = document.getElementById("detachments-cards-container");
  if (!container) return;

  const q = normalizeText(AppState.detachmentSearch);
  const filter = AppState.detachmentFilter;

  const filtered = WH40K_DATA.detachments.filter(d => {
    // Filtro por texto
    if (q) {
      const matchName = normalizeText(d.name).includes(q);
      const matchOrig = normalizeText(d.originalName).includes(q);
      const matchType = d.type && normalizeText(d.type).includes(q);
      const matchPurpose = d.purpose && normalizeText(d.purpose).includes(q);
      const matchRuleName = d.ruleName && normalizeText(d.ruleName).includes(q);
      const matchRuleDesc = d.ruleDesc && normalizeText(d.ruleDesc).includes(q);
      const matchSynergies = d.synergies && d.synergies.some(s => normalizeText(s).includes(q));
      
      if (!matchName && !matchOrig && !matchType && !matchPurpose && !matchRuleName && !matchRuleDesc && !matchSynergies) {
        return false;
      }
    }

    // Filtro por categoría / tipo
    if (filter === "exclusive") {
      if (!d.isExclusiveDA) return false;
    } else if (filter === "astartes") {
      if (d.isExclusiveDA) return false;
    } else if (filter === "dp1") {
      if (d.dp !== 1) return false;
    } else if (filter === "dp2") {
      if (d.dp !== 2) return false;
    } else if (filter === "dp3") {
      if (d.dp !== 3) return false;
    }

    return true;
  });

  // Contador de resultados
  const countEl = document.getElementById("detachment-results-count");
  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} de ${WH40K_DATA.detachments.length} destacamentos`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 48px 24px; color: var(--text-muted); background: var(--bg-surface); border: 1px dashed var(--border-bright); border-radius: var(--radius-md);">
        <p style="font-size: 1.1rem; color: var(--deathwing-bone); margin-bottom: 8px;">🦅 No se encontraron destacamentos que coincidan con la búsqueda.</p>
        <button class="btn-gothic" onclick="clearDetachmentFilters()">↺ Limpiar Filtros de Destacamentos</button>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(d => {
    const isDA = d.isExclusiveDA;
    const badgeType = isDA 
      ? `<span class="det-badge da-exclusive">★ Exclusivo Ángeles Oscuros</span>`
      : `<span class="det-badge astartes">Adeptus Astartes</span>`;
    const dpBadge = `<span class="det-badge dp-badge">${d.commandPoints || (d.dp + ' PD')}</span>`;
    const statusPill = d.isCustom
      ? `<span class="stratagem-tag tag-custom" style="font-size: 0.72rem;">✨ Personalizado</span>`
      : (d.isEdited ? `<span class="stratagem-tag tag-edited" style="font-size: 0.72rem;">✏️ Modificado</span>` : '');

    const prosHtml = (d.pros || []).map(p => `<div class="pro-item"><span>✔</span><span>${p}</span></div>`).join('');
    const consHtml = (d.cons || []).map(c => `<div class="con-item"><span>✖</span><span>${c}</span></div>`).join('');
    
    const synergiesHtml = (d.synergies || []).map(syn => `
      <button class="synergy-chip" onclick="filterCodexBySynergy('${syn}')" title="Filtrar '${syn}' en el Códex">
        ⚔️ ${syn}
      </button>
    `).join('');

    const enhancementsHtml = (d.enhancements || []).map(enh => `
      <div class="enh-card">
        <div class="enh-card-header">
          <span class="enh-title">${enh.name}</span>
          <span class="enh-pts">${enh.points} pts</span>
        </div>
        <p class="enh-desc">${enh.description}</p>
      </div>
    `).join('') || '<p style="font-size: 0.8rem; color: var(--text-muted);">Sin mejoras particulares.</p>';

    const stratagemsHtml = (d.stratagems || []).map(st => `
      <div class="strat-card">
        <div class="strat-card-header">
          <span class="strat-title">${st.name}</span>
          <span class="strat-cp">${st.cp} PC</span>
        </div>
        <div style="font-size: 0.72rem; color: var(--gold-primary); margin-bottom: 2px;">${st.type || 'Estratagema'}</div>
        <p class="strat-desc">${st.desc}</p>
      </div>
    `).join('') || '<p style="font-size: 0.8rem; color: var(--text-muted);">Sin estratagemas particulares.</p>';

    return `
      <div class="detachment-card ${isDA ? 'exclusive-da' : ''}">
        <div class="detachment-card-header">
          <div class="detachment-card-title">
            <h3>${d.name}</h3>
            <div class="orig-name">${d.originalName} • <em>${d.type || 'Doctrina de Combate'}</em></div>
          </div>
          <div style="display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
            ${statusPill}
            ${badgeType}
            ${dpBadge}
          </div>
        </div>

        <div class="detachment-card-body">
          <!-- ¿Para qué sirve? -->
          <div class="comp-section-box">
            <div class="comp-section-title">🎯 ¿Para qué sirve este destacamento?</div>
            <p class="comp-purpose-text">${d.purpose}</p>
          </div>

          <!-- Regla del Destacamento -->
          <div class="comp-section-box">
            <div class="comp-section-title">📜 Regla de Destacamento: ${d.ruleName}</div>
            <p class="comp-rule-desc">${d.ruleDesc}</p>
          </div>

          <!-- Pros y Contras -->
          <div class="comp-section-box">
            <div class="comp-section-title">⚖️ Pros y Contras</div>
            <div class="pros-cons-grid">
              <div>
                <div style="font-size: 0.75rem; color: #86efac; font-weight: 700; margin-bottom: 4px;">FORTALEZAS</div>
                ${prosHtml}
              </div>
              <div>
                <div style="font-size: 0.75rem; color: #fca5a5; font-weight: 700; margin-bottom: 4px;">LIMITACIONES</div>
                ${consHtml}
              </div>
            </div>
          </div>

          <!-- Sinergias del Códex -->
          <div class="comp-section-box">
            <div class="comp-section-title">⚔️ Miniaturas y Sinergias Recomendadas</div>
            <div class="synergies-tag-list">
              ${synergiesHtml}
            </div>
          </div>

          <!-- Mejoras Acordeón -->
          <details class="detachment-collapsible">
            <summary class="detachment-collapsible-summary">
              <span>🛡️ Mejoras Particulares (${(d.enhancements || []).length})</span>
              <span>▼</span>
            </summary>
            <div class="detachment-collapsible-content">
              ${enhancementsHtml}
            </div>
          </details>

          <!-- Estratagemas Acordeón -->
          <details class="detachment-collapsible">
            <summary class="detachment-collapsible-summary">
              <span>⚡ Estratagemas de Combate (${(d.stratagems || []).length})</span>
              <span>▼</span>
            </summary>
            <div class="detachment-collapsible-content">
              ${stratagemsHtml}
            </div>
          </details>
        </div>

        <div class="detachment-card-actions" style="flex-wrap: wrap; gap: 8px;">
          <button class="btn-gothic-secondary" style="font-size: 0.8rem; padding: 6px 10px;" onclick="setComparatorDetachment('a', '${d.id}')">
            ⚖️ Comparar en Ranura A
          </button>
          <button class="btn-gothic-secondary" style="font-size: 0.8rem; padding: 6px 10px;" onclick="setComparatorDetachment('b', '${d.id}')">
            ⚖️ Comparar en Ranura B
          </button>
          <button class="btn-gothic-secondary" style="font-size: 0.8rem; padding: 6px 10px; color: var(--gold-accent);" onclick="openDetachmentEditor('${d.id}')" title="Editar reglas, mejoras y datos de este destacamento">
            ✏️ Editar
          </button>
          <button class="btn-gothic" style="font-size: 0.8rem; padding: 6px 12px; margin-left: auto;" onclick="applyDetachmentToArmy('${d.id}')">
            ⚔️ Asignar a mi Lista
          </button>
        </div>
      </div>
    `;
  }).join('');

  // También sincronizar el comparador táctico
  renderDetachmentComparator();
}

function setComparatorDetachment(slot, detId) {
  if (slot === 'a') {
    AppState.comparatorSlotA = detId;
    const selectA = document.getElementById("comparator-select-a");
    if (selectA) selectA.value = detId;
  } else {
    AppState.comparatorSlotB = detId;
    const selectB = document.getElementById("comparator-select-b");
    if (selectB) selectB.value = detId;
  }

  // Asegurar que el comparador esté visible
  const comparatorSection = document.getElementById("detachment-comparator-section");
  const contentGrid = document.getElementById("comparator-content-grid");
  if (contentGrid) contentGrid.style.display = "grid";
  const toggleBtn = document.getElementById("btn-toggle-comparator");
  if (toggleBtn) toggleBtn.textContent = "🔼 Ocultar";
  AppState.isComparatorVisible = true;

  renderDetachmentComparator();

  if (comparatorSection) {
    comparatorSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================================================
// EDITOR INTERACTIVO DE DESTACAMENTOS (11ª EDICIÓN / WAHAPEDIA)
// ==========================================================================

function setEditorDetDP(dpVal) {
  const dpInput = document.getElementById("edit-det-dp");
  if (dpInput) dpInput.value = dpVal;
  const btns = document.querySelectorAll(".det-dp-preset-btn");
  btns.forEach(b => {
    const bVal = parseInt(b.getAttribute("data-dp"));
    b.classList.toggle("active", bVal === dpVal);
  });
}

function addEnhancementRowToEditor(enh = null) {
  const list = document.getElementById("det-editor-enhancements-list");
  if (!list) return;

  const row = document.createElement("div");
  row.className = "det-editor-enh-row";
  row.setAttribute("data-enh-id", enh ? (enh.id || "") : `enh_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`);
  row.style.cssText = "background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 10px; display: flex; flex-direction: column; gap: 8px;";
  
  const nameVal = enh ? (enh.name || "") : "";
  const ptsVal = enh && enh.points !== undefined ? enh.points : 20;
  const descVal = enh ? (enh.description || "") : "";

  row.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
      <input type="text" class="det-enh-name" placeholder="Nombre de la mejora..." value="${nameVal.replace(/"/g, '&quot;')}" style="flex: 2; min-width: 160px; background: var(--bg-deep); border: 1px solid var(--border-bright); color: var(--gold-accent); padding: 6px 10px; font-weight: 700; border-radius: 4px;">
      <div style="display: flex; align-items: center; gap: 4px;">
        <input type="number" class="det-enh-pts" placeholder="Coste" min="0" max="100" value="${ptsVal}" style="width: 65px; background: var(--bg-deep); border: 1px solid var(--border-bright); color: #fff; padding: 6px 8px; text-align: center; border-radius: 4px;">
        <span style="font-size: 0.8rem; color: var(--gold-accent); font-weight: 700;">pts</span>
      </div>
      <button type="button" class="btn-gothic-secondary" onclick="this.closest('.det-editor-enh-row').remove()" style="padding: 4px 8px; color: #f87171; border-color: rgba(239,68,68,0.4);" title="Eliminar mejora">🗑️</button>
    </div>
    <textarea class="det-enh-desc" rows="2" placeholder="Descripción y regla de la mejora..." style="width: 100%; background: var(--bg-deep); border: 1px solid var(--border-bright); color: #fff; padding: 6px 10px; border-radius: 4px; font-size: 0.82rem; resize: vertical;">${descVal}</textarea>
  `;

  list.appendChild(row);
}

function openDetachmentEditor(detId) {
  const modal = document.getElementById("edit-detachment-modal");
  if (!modal) return;

  const idInput = document.getElementById("edit-det-id");
  const isNewInput = document.getElementById("edit-det-is-new");
  const titleEl = document.getElementById("modal-det-editor-title");
  const pillEl = document.getElementById("modal-det-status-pill");
  const btnRevert = document.getElementById("btn-revert-detachment");
  const btnDelete = document.getElementById("btn-delete-detachment");
  const enhList = document.getElementById("det-editor-enhancements-list");
  if (enhList) enhList.innerHTML = "";

  if (!detId) {
    // Modo Nuevo
    idInput.value = `det_custom_${Date.now()}`;
    isNewInput.value = "true";
    titleEl.textContent = "Nuevo Destacamento Personalizado";
    pillEl.style.display = "inline-block";
    pillEl.className = "stratagem-tag tag-custom";
    pillEl.textContent = "✨ Nuevo";
    btnRevert.style.display = "none";
    btnDelete.style.display = "none";

    setEditorDetDP(1);
    document.getElementById("edit-det-exclusive").value = "da";
    document.getElementById("edit-det-type").value = "Doctrina de Combate";
    document.getElementById("edit-det-name-es").value = "";
    document.getElementById("edit-det-name-en").value = "";
    document.getElementById("edit-det-purpose").value = "";
    document.getElementById("edit-det-rule-name").value = "";
    document.getElementById("edit-det-rule-desc").value = "";
    document.getElementById("edit-det-pros").value = "";
    document.getElementById("edit-det-cons").value = "";
    document.getElementById("edit-det-synergies").value = "";

    // Añadir filas por defecto
    addEnhancementRowToEditor({ name: "", points: 20, description: "" });
  } else {
    // Modo Edición
    const raw = (WH40K_DATA.detachments || []).find(d => d.id === detId);
    if (!raw) return;

    idInput.value = raw.id;
    isNewInput.value = "false";
    titleEl.textContent = `Editar Destacamento: ${raw.name}`;

    const isCustom = !!raw.isCustom;
    const isEdited = !!raw.isEdited;

    if (isCustom) {
      pillEl.style.display = "inline-block";
      pillEl.className = "stratagem-tag tag-custom";
      pillEl.textContent = "✨ Personalizado";
      btnRevert.style.display = "none";
      btnDelete.style.display = "inline-flex";
    } else if (isEdited) {
      pillEl.style.display = "inline-block";
      pillEl.className = "stratagem-tag tag-edited";
      pillEl.textContent = "✏️ Modificado";
      btnRevert.style.display = "inline-flex";
      btnDelete.style.display = "none";
    } else {
      pillEl.style.display = "none";
      btnRevert.style.display = "none";
      btnDelete.style.display = "none";
    }

    setEditorDetDP(raw.dp !== undefined ? raw.dp : 1);
    document.getElementById("edit-det-exclusive").value = raw.isExclusiveDA ? "da" : "astartes";
    document.getElementById("edit-det-type").value = raw.type || "Doctrina de Combate";
    document.getElementById("edit-det-name-es").value = raw.name || "";
    document.getElementById("edit-det-name-en").value = raw.originalName || raw.name || "";
    document.getElementById("edit-det-purpose").value = raw.purpose || "";
    document.getElementById("edit-det-rule-name").value = raw.ruleName || "";
    document.getElementById("edit-det-rule-desc").value = raw.ruleDesc || "";
    document.getElementById("edit-det-pros").value = Array.isArray(raw.pros) ? raw.pros.join("\n") : "";
    document.getElementById("edit-det-cons").value = Array.isArray(raw.cons) ? raw.cons.join("\n") : "";
    document.getElementById("edit-det-synergies").value = Array.isArray(raw.synergies) ? raw.synergies.join(", ") : "";

    // Poblar mejoras
    if (Array.isArray(raw.enhancements) && raw.enhancements.length > 0) {
      raw.enhancements.forEach(enh => addEnhancementRowToEditor(enh));
    } else {
      addEnhancementRowToEditor({ name: "", points: 20, description: "" });
    }
  }

  modal.classList.add("active");
}

function closeDetachmentEditorModal() {
  const modal = document.getElementById("edit-detachment-modal");
  if (modal) modal.classList.remove("active");
}

function saveDetachmentFromEditor() {
  const idInput = document.getElementById("edit-det-id");
  const isNewInput = document.getElementById("edit-det-is-new");
  if (!idInput) return;

  const id = idInput.value;
  const isNew = isNewInput && isNewInput.value === "true";

  const dp = parseInt(document.getElementById("edit-det-dp").value) || 1;
  const isExclusiveDA = document.getElementById("edit-det-exclusive").value === "da";
  const type = document.getElementById("edit-det-type").value.trim() || "Doctrina de Combate";
  
  let nameEs = document.getElementById("edit-det-name-es").value.trim();
  let nameEn = document.getElementById("edit-det-name-en").value.trim();
  if (!nameEs && nameEn) nameEs = nameEn;
  if (!nameEn && nameEs) nameEn = nameEs;

  if (!nameEs) {
    alert("Por favor, introduce al menos un nombre para el destacamento.");
    return;
  }

  const purpose = document.getElementById("edit-det-purpose").value.trim();
  const ruleName = document.getElementById("edit-det-rule-name").value.trim();
  const ruleDesc = document.getElementById("edit-det-rule-desc").value.trim();

  const pros = document.getElementById("edit-det-pros").value
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);

  const cons = document.getElementById("edit-det-cons").value
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean);

  const synergies = document.getElementById("edit-det-synergies").value
    .split(",")
    .map(s => s.trim())
    .filter(Boolean);

  const enhRows = document.querySelectorAll("#det-editor-enhancements-list .det-editor-enh-row");
  const enhancements = [];
  enhRows.forEach((row, idx) => {
    const enhId = row.getAttribute("data-enh-id") || `enh_${id}_${idx + 1}`;
    const name = row.querySelector(".det-enh-name")?.value.trim() || "";
    const points = parseInt(row.querySelector(".det-enh-pts")?.value) || 0;
    const description = row.querySelector(".det-enh-desc")?.value.trim() || "";
    if (name) {
      enhancements.push({
        id: enhId,
        name,
        originalName: name,
        points,
        description,
        allowedLeaders: []
      });
    }
  });

  const existing = (WH40K_DATA.detachments || []).find(d => d.id === id);
  const stratagems = existing && Array.isArray(existing.stratagems) ? existing.stratagems : [];

  const updatedItem = {
    id,
    name: nameEs,
    originalName: nameEn,
    type,
    isExclusiveDA,
    category: isExclusiveDA ? "dark_angels" : "adeptus_astartes",
    dp,
    commandPoints: `${dp} PD`,
    purpose,
    ruleName,
    ruleDesc,
    pros,
    cons,
    synergies,
    enhancements,
    stratagems,
    isEdited: !isNew,
    isCustom: isNew
  };

  const idx = WH40K_DATA.detachments.findIndex(d => d.id === id);
  if (idx !== -1) {
    WH40K_DATA.detachments[idx] = updatedItem;
  } else {
    WH40K_DATA.detachments.push(updatedItem);
  }

  let map = {};
  try {
    const rawStorage = localStorage.getItem("cogitator_custom_detachments");
    if (rawStorage) map = JSON.parse(rawStorage) || {};
  } catch (e) {
    map = {};
  }
  map[id] = updatedItem;
  saveCustomDetachmentsMap(map);

  closeDetachmentEditorModal();
  checkCustomDetachmentsStatus();
  populateComparatorSelectOptions();
  renderDetachments();
  renderDetachmentComparator();
  if (typeof renderArmyBuilder === "function") {
    renderArmyBuilder();
  }

  showTacticalNotification(`🦅 Destacamento "${nameEs}" guardado con éxito`);
}

function revertCurrentEditorDetachment() {
  const idInput = document.getElementById("edit-det-id");
  if (!idInput) return;
  const detId = idInput.value;

  if (!WH40K_DATA.defaultDetachments) return;
  const original = WH40K_DATA.defaultDetachments.find(d => d.id === detId);
  if (!original) {
    alert("No se encontró el destacamento original oficial para restablecer.");
    return;
  }

  if (!confirm(`¿Restablecer el destacamento "${original.name}" a los datos oficiales de Wahapedia?`)) {
    return;
  }

  const restored = JSON.parse(JSON.stringify(original));
  const idx = WH40K_DATA.detachments.findIndex(d => d.id === detId);
  if (idx !== -1) {
    WH40K_DATA.detachments[idx] = restored;
  }

  try {
    const rawStorage = localStorage.getItem("cogitator_custom_detachments");
    if (rawStorage) {
      const map = JSON.parse(rawStorage) || {};
      delete map[detId];
      saveCustomDetachmentsMap(map);
    }
  } catch (e) {}

  closeDetachmentEditorModal();
  checkCustomDetachmentsStatus();
  populateComparatorSelectOptions();
  renderDetachments();
  renderDetachmentComparator();
  if (typeof renderArmyBuilder === "function") {
    renderArmyBuilder();
  }

  showTacticalNotification(`🔄 Destacamento "${original.name}" restaurado a valores oficiales`);
}

function deleteCurrentEditorDetachment() {
  const idInput = document.getElementById("edit-det-id");
  if (!idInput) return;
  const detId = idInput.value;

  const det = WH40K_DATA.detachments.find(d => d.id === detId);
  const name = det ? det.name : detId;

  if (!confirm(`¿Eliminar permanentemente el destacamento personalizado "${name}"?`)) {
    return;
  }

  WH40K_DATA.detachments = WH40K_DATA.detachments.filter(d => d.id !== detId);

  try {
    const rawStorage = localStorage.getItem("cogitator_custom_detachments");
    if (rawStorage) {
      const map = JSON.parse(rawStorage) || {};
      delete map[detId];
      saveCustomDetachmentsMap(map);
    }
  } catch (e) {}

  closeDetachmentEditorModal();
  checkCustomDetachmentsStatus();
  populateComparatorSelectOptions();
  renderDetachments();
  renderDetachmentComparator();
  if (typeof renderArmyBuilder === "function") {
    renderArmyBuilder();
  }

  showTacticalNotification(`🗑️ Destacamento "${name}" eliminado`);
}

function resetAllDetachmentsToDefault() {
  if (!confirm("¿Deseas restaurar todos los destacamentos a los valores oficiales de Wahapedia/Códex? Se descartarán todas las ediciones y destacamentos personalizados.")) {
    return;
  }

  if (WH40K_DATA.defaultDetachments) {
    WH40K_DATA.detachments = JSON.parse(JSON.stringify(WH40K_DATA.defaultDetachments));
  }
  localStorage.removeItem("cogitator_custom_detachments");

  checkCustomDetachmentsStatus();
  populateComparatorSelectOptions();
  renderDetachments();
  renderDetachmentComparator();
  if (typeof renderArmyBuilder === "function") {
    renderArmyBuilder();
  }

  showTacticalNotification("🔄 Todos los destacamentos han sido restaurados a los valores oficiales");
}


function swapComparatorDetachments() {
  const temp = AppState.comparatorSlotA;
  AppState.comparatorSlotA = AppState.comparatorSlotB;
  AppState.comparatorSlotB = temp;

  const selectA = document.getElementById("comparator-select-a");
  const selectB = document.getElementById("comparator-select-b");
  if (selectA) selectA.value = AppState.comparatorSlotA;
  if (selectB) selectB.value = AppState.comparatorSlotB;

  renderDetachmentComparator();
}

function toggleComparatorVisibility() {
  AppState.isComparatorVisible = !AppState.isComparatorVisible;
  const contentGrid = document.getElementById("comparator-content-grid");
  const toggleBtn = document.getElementById("btn-toggle-comparator");
  
  if (contentGrid) {
    contentGrid.style.display = AppState.isComparatorVisible ? "grid" : "none";
  }
  if (toggleBtn) {
    toggleBtn.textContent = AppState.isComparatorVisible ? "🔼 Ocultar" : "🔽 Mostrar Comparador";
  }
}

function clearDetachmentFilters() {
  AppState.detachmentSearch = "";
  AppState.detachmentFilter = "all";

  const searchInput = document.getElementById("detachment-search");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".det-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-detfilter") === "all");
  });

  renderDetachments();
}

function applyDetachmentToArmy(detId) {
  const activeList = getActiveArmyList();
  const detachment = WH40K_DATA.detachments.find(d => d.id === detId);
  if (!activeList || !detachment) return;

  if (!Array.isArray(activeList.detachmentIds) || activeList.detachmentIds.length === 0) {
    activeList.detachmentIds = activeList.detachmentId ? [activeList.detachmentId] : [];
  }

  const alreadySelected = activeList.detachmentIds.includes(detId);
  if (!alreadySelected) {
    activeList.detachmentIds.push(detId);
  }
  activeList.detachmentId = activeList.detachmentIds[0];
  saveToStorage();

  // Si existe el desplegable antiguo en el Army Builder, actualizar su valor
  const armySelect = document.getElementById("army-detachment-select");
  if (armySelect) armySelect.value = activeList.detachmentId;

  // Cambiar a la pestaña de listas de ejército y re-renderizar
  switchTab("army");
  if (typeof renderArmyBuilder === "function") {
    renderArmyBuilder();
  }

  const totalPD = typeof calculateListDetachmentPoints === "function" ? calculateListDetachmentPoints(activeList) : activeList.detachmentIds.length;
  const maxPD = typeof getMaxDetachmentPoints === "function" ? getMaxDetachmentPoints(activeList.pointsLimit) : 3;

  if (alreadySelected) {
    showTacticalNotification(`ℹ️ "${detachment.name}" ya formaba parte de tu fuerza (${totalPD}/${maxPD} PD).`);
  } else {
    showTacticalNotification(`🦅 Destacamento añadido: "${detachment.name}" (${totalPD}/${maxPD} PD acumulados).`);
  }
}

// ==========================================================================
// MÓDULO DE ESTRATAGEMAS (11ª EDICIÓN / WAHAPEDIA & EDITOR PERSONALIZADO)
// ==========================================================================

/**
 * Inicializa la copia maestra inmutable de estratagemas de Wahapedia
 * y carga las personalizaciones guardadas por el usuario en localStorage.
 */
function initStratagems() {
  // Asegurar referencia inmutable por defecto de Wahapedia
  if (!WH40K_DATA.defaultStratagems) {
    WH40K_DATA.defaultStratagems = JSON.parse(JSON.stringify(WH40K_DATA.stratagems));
  }

  // Cargar estratagemas editadas o creadas por el usuario
  loadCustomStratagems();

  const searchInput = document.getElementById("stratagem-search-input");
  const detachmentSelect = document.getElementById("stratagem-detachment-select");
  const phasePills = document.querySelectorAll("#stratagem-phase-pills .stratagem-pill-btn");
  const turnPills = document.querySelectorAll("#stratagem-turn-pills .stratagem-pill-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.stratagemSearch = e.target.value;
      renderStratagems();
    });
  }

  if (detachmentSelect) {
    detachmentSelect.addEventListener("change", (e) => {
      AppState.stratagemDetachmentFilter = e.target.value;
      renderStratagems();
    });
  }

  phasePills.forEach(btn => {
    btn.addEventListener("click", () => {
      const phase = btn.getAttribute("data-phase");
      setStratagemPhaseFilter(phase);
    });
  });

  turnPills.forEach(btn => {
    btn.addEventListener("click", () => {
      const turn = btn.getAttribute("data-turn");
      setStratagemTurnFilter(turn);
    });
  });

  populateEditorDetachmentSelect();
  updateStratagemDetachmentDropdown(AppState.currentLanguage || "es");
  updateStratagemPhaseBadges();
  checkCustomStratagemsStatus();
}

/**
 * Carga las estratagemas editadas y personalizadas desde localStorage
 */
function loadCustomStratagems() {
  try {
    const raw = localStorage.getItem("cogitator_custom_stratagems");
    if (!raw) return;
    const customMap = JSON.parse(raw);
    if (!customMap || typeof customMap !== "object") return;

    Object.keys(customMap).forEach(id => {
      const customItem = customMap[id];
      const existingIdx = WH40K_DATA.stratagems.findIndex(s => s.id === id);
      if (existingIdx !== -1) {
        WH40K_DATA.stratagems[existingIdx] = customItem;
      } else {
        WH40K_DATA.stratagems.push(customItem);
      }
    });
  } catch (err) {
    console.error("Error al cargar estratagemas personalizadas:", err);
  }
}

/**
 * Guarda el mapa de estratagemas personalizadas en localStorage
 */
function saveCustomStratagemsMap(map) {
  try {
    localStorage.setItem("cogitator_custom_stratagems", JSON.stringify(map));
  } catch (err) {
    console.error("Error al guardar estratagemas personalizadas en localStorage:", err);
  }
}

/**
 * Comprueba si hay alguna estratagema modificada o personalizada y actualiza el botón de restablecer
 */
function checkCustomStratagemsStatus() {
  const btnResetAll = document.getElementById("btn-reset-all-stratagems");
  if (!btnResetAll) return;
  const hasCustom = (WH40K_DATA.stratagems || []).some(s => s.isCustom || s.isEdited);
  btnResetAll.style.display = hasCustom ? "inline-flex" : "none";
}

/**
 * Actualiza los contadores de las píldoras de fases y turnos en tiempo real
 */
function updateStratagemPhaseBadges() {
  const stratagems = WH40K_DATA.stratagems || [];
  const counts = { all: stratagems.length, command: 0, movement: 0, shooting: 0, charge: 0, fight: 0, any: 0 };
  const turnCounts = { all: stratagems.length, your_turn: 0, opponent_turn: 0, either_turn: 0 };

  stratagems.forEach(s => {
    const pList = s.phases || [s.phase];
    pList.forEach(p => {
      if (counts[p] !== undefined) counts[p]++;
    });
    if (turnCounts[s.turn] !== undefined) {
      turnCounts[s.turn]++;
    }
  });

  Object.keys(counts).forEach(phase => {
    const el = document.getElementById(`count-phase-${phase}`);
    if (el) el.textContent = counts[phase];
  });

  const isEn = AppState.currentLanguage === "en";
  const pillPlayer = document.getElementById("pill-turn-player");
  if (pillPlayer) pillPlayer.textContent = isEn ? `🔵 Your Turn (${turnCounts.your_turn})` : `🔵 Tu Turno (${turnCounts.your_turn})`;
  const pillOpponent = document.getElementById("pill-turn-opponent");
  if (pillOpponent) pillOpponent.textContent = isEn ? `🔴 Opponent's Turn (${turnCounts.opponent_turn})` : `🔴 Turno Oponente (${turnCounts.opponent_turn})`;
  const pillEither = document.getElementById("pill-turn-either");
  if (pillEither) pillEither.textContent = isEn ? `⚪ Either Turn (${turnCounts.either_turn})` : `⚪ Cualquier Turno (${turnCounts.either_turn})`;

  const navBadge = document.getElementById("nav-badge-stratagems");
  if (navBadge) navBadge.textContent = stratagems.length;
  const kpiTotal = document.getElementById("kpi-strat-total");
  if (kpiTotal) kpiTotal.textContent = stratagems.length;

  checkCustomStratagemsStatus();
}

/**
 * Rellena el selector de destacamentos en el editor modal de estratagema
 */
function populateEditorDetachmentSelect() {
  const sel = document.getElementById("edit-strat-detachment");
  if (!sel) return;
  const isEn = AppState.currentLanguage === "en";

  const detachmentsList = [
    { id: "core", name_es: "Reglamento (Básicas del Core)", name_en: "Core Rules" },
    { id: "inner_circle", name_es: "Contingente del Círculo Interior", name_en: "Inner Circle Task Force" },
    { id: "wrath_of_the_rock", name_es: "Ira de la Roca", name_en: "Wrath of the Rock" },
    { id: "darkflight_pursuit", name_es: "Persecución del Vuelo Oscuro", name_en: "Darkflight Pursuit" },
    { id: "company_of_hunters", name_es: "Compañía de Cazadores", name_en: "Company of Hunters" },
    { id: "unforgiven_task_force", name_es: "Fuerza de Asedio de los No Perdonados", name_en: "Unforgiven Task Force" },
    { id: "gladius", name_es: "Contingente Gladius", name_en: "Gladius Task Force" },
    { id: "ironstorm", name_es: "Punta de Lanza Ferrotormenta", name_en: "Ironstorm Spearhead" },
    { id: "stormlance", name_es: "Contingente Lanzatormenta", name_en: "Stormlance Task Force" },
    { id: "deathwing_storm", name_es: "Fuerza Tormenta Exterminadora (1.ª Cía)", name_en: "Terminator Storm Force" },
    { id: "assault_brethren", name_es: "Hermandad de Asalto", name_en: "Assault Brethren" },
    { id: "tactical_brethren", name_es: "Hermandad Táctica", name_en: "Tactical Brethren" },
    { id: "devastator_brethren", name_es: "Hermandad Devastadora", name_en: "Devastator Brethren" },
    { id: "tacticus_attack", name_es: "Fuerza de Ataque Tacticus", name_en: "Tacticus Attack Force" },
    { id: "tacticus_firestorm", name_es: "Fuerza Tacticus Tormenta de Fuego", name_en: "Tacticus Firestorm Force" },
    { id: "phobos_shadow", name_es: "Fuerza Oculta Phobos", name_en: "Phobos Shadow Force" },
    { id: "phobos_shock", name_es: "Fuerza de Choque Phobos", name_en: "Phobos Shock Force" },
    { id: "gravis_linebreaker", name_es: "Fuerza Rompelíneas Gravis", name_en: "Gravis Linebreaker Force" },
    { id: "gravis_siege", name_es: "Fuerza de Asedio Gravis", name_en: "Gravis Siege Force" },
    { id: "ironclad_champions", name_es: "Campeones Férreos (Dreadnoughts)", name_en: "Ironclad Champions" },
    { id: "gauntlet", name_es: "Contingente Guantelete", name_en: "Gauntlet Task Force" },
    { id: "deathwatch_support", name_es: "Apoyo a los Vigías de la Muerte", name_en: "Deathwatch Support" },
    { id: "ceramite_sentinels", name_es: "Centinelas de Ceramita", name_en: "Ceramite Sentinels" },
    { id: "boarding_strike", name_es: "Golpe de Abordaje", name_en: "Boarding Strike" },
    { id: "terminator_assault", name_es: "Asalto de Exterminadores", name_en: "Terminator Assault" },
    { id: "shield_of_void", name_es: "Escudo del Vacío", name_en: "Shield of the Void" },
    { id: "pilum_strike", name_es: "Equipo de Asalto Pilum", name_en: "Pilum Strike Team" },
    { id: "custom", name_es: "Personalizada / Cruzada", name_en: "Custom / Crusade" }
  ];

  sel.innerHTML = detachmentsList.map(d => `<option value="${d.id}">${isEn ? d.name_en : d.name_es}</option>`).join("");
}

/**
 * Regenera dinámicamente las opciones del selector de destacamento con conteos actualizados
 */
function updateStratagemDetachmentDropdown(lang) {
  const select = document.getElementById("stratagem-detachment-select");
  if (!select) return;
  const isEn = lang === "en";
  const prev = select.value;

  const stratagems = WH40K_DATA.stratagems || [];
  const detCounts = {};
  stratagems.forEach(s => {
    detCounts[s.detachmentId] = (detCounts[s.detachmentId] || 0) + 1;
  });

  const daDetIds = ['darkflight_pursuit', 'inner_circle', 'wrath_of_the_rock', 'company_of_hunters', 'unforgiven_task_force'];

  const detNamesEs = {
    core: "Reglamento (Básicas del Core)",
    darkflight_pursuit: "Persecución del Vuelo Oscuro",
    inner_circle: "Contingente del Círculo Interior",
    wrath_of_the_rock: "Ira de la Roca",
    company_of_hunters: "Compañía de Cazadores",
    unforgiven_task_force: "Fuerza de Asedio de los No Perdonados",
    gladius: "Contingente Gladius",
    ironstorm: "Punta de Lanza Ferrotormenta",
    stormlance: "Contingente Lanzatormenta",
    deathwing_storm: "Fuerza Tormenta Exterminadora (1.ª Cía)",
    assault_brethren: "Hermandad de Asalto",
    tactical_brethren: "Hermandad Táctica",
    devastator_brethren: "Hermandad Devastadora",
    tacticus_attack: "Fuerza de Ataque Tacticus",
    tacticus_firestorm: "Fuerza Tacticus Tormenta de Fuego",
    phobos_shadow: "Fuerza Oculta Phobos",
    phobos_shock: "Fuerza de Choque Phobos",
    gravis_linebreaker: "Fuerza Rompelíneas Gravis",
    gravis_siege: "Fuerza de Asedio Gravis",
    ironclad_champions: "Campeones Férreos (Dreadnoughts)",
    gauntlet: "Contingente Guantelete",
    deathwatch_support: "Apoyo a los Vigías de la Muerte",
    ceramite_sentinels: "Centinelas de Ceramita",
    boarding_strike: "Golpe de Abordaje",
    terminator_assault: "Asalto de Exterminadores",
    shield_of_void: "Escudo del Vacío",
    pilum_strike: "Equipo de Asalto Pilum",
    custom: "Personalizadas / Cruzada"
  };

  const detNamesEn = {
    core: "Core Rules",
    darkflight_pursuit: "Darkflight Pursuit",
    inner_circle: "Inner Circle Task Force",
    wrath_of_the_rock: "Wrath of the Rock",
    company_of_hunters: "Company of Hunters",
    unforgiven_task_force: "Unforgiven Task Force",
    gladius: "Gladius Task Force",
    ironstorm: "Ironstorm Spearhead",
    stormlance: "Stormlance Task Force",
    deathwing_storm: "Terminator Storm Force",
    assault_brethren: "Assault Brethren",
    tactical_brethren: "Tactical Brethren",
    devastator_brethren: "Devastator Brethren",
    tacticus_attack: "Tacticus Attack Force",
    tacticus_firestorm: "Tacticus Firestorm Force",
    phobos_shadow: "Phobos Shadow Force",
    phobos_shock: "Phobos Shock Force",
    gravis_linebreaker: "Gravis Linebreaker Force",
    gravis_siege: "Gravis Siege Force",
    ironclad_champions: "Ironclad Champions",
    gauntlet: "Gauntlet Task Force",
    deathwatch_support: "Deathwatch Support",
    ceramite_sentinels: "Ceramite Sentinels",
    boarding_strike: "Boarding Strike",
    terminator_assault: "Terminator Assault Force",
    shield_of_void: "Shield of the Void",
    pilum_strike: "Pilum Strike Team",
    custom: "Custom / Crusade"
  };

  const detNames = isEn ? detNamesEn : detNamesEs;

  let daOptionsHtml = '';
  daDetIds.forEach(id => {
    const c = detCounts[id] || 0;
    if (c > 0) {
      daOptionsHtml += `<option value="${id}">${detNames[id] || id} (${c})</option>`;
    }
  });

  let smOptionsHtml = '';
  Object.keys(detCounts).forEach(id => {
    if (id !== 'core' && !daDetIds.includes(id) && id !== 'custom') {
      smOptionsHtml += `<option value="${id}">${detNames[id] || id} (${detCounts[id]})</option>`;
    }
  });

  let customHtml = '';
  if (detCounts['custom']) {
    customHtml = `<option value="custom">${detNames.custom} (${detCounts.custom})</option>`;
  }

  select.innerHTML = `
    <option value="all">${isEn ? `All Detachments (${stratagems.length})` : `Todos los Destacamentos (${stratagems.length})`}</option>
    <option value="core">${detNames.core} (${detCounts['core'] || 0})</option>
    ${daOptionsHtml ? `<optgroup label="${isEn ? 'Dark Angels (Exclusive)' : 'Ángeles Oscuros (Exclusivos)'}">${daOptionsHtml}</optgroup>` : ''}
    ${smOptionsHtml ? `<optgroup label="${isEn ? 'Space Marines (Compatible)' : 'Marines Espaciales (Compatibles)'}">${smOptionsHtml}</optgroup>` : ''}
    ${customHtml}
  `;

  select.value = prev && select.querySelector(`option[value="${prev}"]`) ? prev : "all";
}

function setStratagemPhaseFilter(phase) {
  AppState.stratagemPhaseFilter = phase;
  const phasePills = document.querySelectorAll("#stratagem-phase-pills .stratagem-pill-btn");
  phasePills.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-phase") === phase);
  });
  renderStratagems();
}

function setStratagemTurnFilter(turn) {
  AppState.stratagemTurnFilter = turn;
  const turnPills = document.querySelectorAll("#stratagem-turn-pills .stratagem-pill-btn");
  turnPills.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-turn") === turn);
  });
  renderStratagems();
}

function clearStratagemFilters() {
  AppState.stratagemSearch = "";
  AppState.stratagemPhaseFilter = "all";
  AppState.stratagemTurnFilter = "all";
  AppState.stratagemDetachmentFilter = "all";

  const searchInput = document.getElementById("stratagem-search-input");
  const detachmentSelect = document.getElementById("stratagem-detachment-select");
  if (searchInput) searchInput.value = "";
  if (detachmentSelect) detachmentSelect.value = "all";

  const phasePills = document.querySelectorAll("#stratagem-phase-pills .stratagem-pill-btn");
  phasePills.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-phase") === "all");
  });

  const turnPills = document.querySelectorAll("#stratagem-turn-pills .stratagem-pill-btn");
  turnPills.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-turn") === "all");
  });

  renderStratagems();
}

function renderStratagems() {
  const container = document.getElementById("stratagems-cards-container");
  const statusEl = document.getElementById("stratagems-filter-status");
  if (!container) return;

  const currentLang = AppState.currentLanguage || "es";
  const isEn = currentLang === "en";
  const t = WH40K_I18N[currentLang] || WH40K_I18N.es;

  const stratagems = WH40K_DATA.stratagems || [];
  const q = normalizeText(AppState.stratagemSearch);
  const phaseFilter = AppState.stratagemPhaseFilter;
  const turnFilter = AppState.stratagemTurnFilter;
  const detFilter = AppState.stratagemDetachmentFilter;

  const filtered = stratagems.filter(raw => {
    const s = getStratagemText(raw, currentLang);

    // Filtro por texto (busca en español, inglés original y campos de regla)
    if (q) {
      const matchName = normalizeText(s.name).includes(q);
      const matchOrig = normalizeText(raw.originalName).includes(q) || (raw.en && normalizeText(raw.en.name).includes(q));
      const matchDet = normalizeText(s.detachment).includes(q);
      const matchWhen = normalizeText(s.when).includes(q);
      const matchTarget = normalizeText(s.target).includes(q);
      const matchEffect = normalizeText(s.effect).includes(q);
      const matchType = normalizeText(s.type).includes(q);
      const matchRest = normalizeText(s.restrictions).includes(q);
      if (!matchName && !matchOrig && !matchDet && !matchWhen && !matchTarget && !matchEffect && !matchType && !matchRest) {
        return false;
      }
    }

    // Filtro por fase
    if (phaseFilter !== "all") {
      const pList = raw.phases || [raw.phase];
      if (!pList.includes(phaseFilter)) return false;
    }

    // Filtro por turno
    if (turnFilter !== "all") {
      if (raw.turn !== turnFilter && raw.turn !== "either_turn") {
        return false;
      }
    }

    // Filtro por destacamento
    if (detFilter !== "all") {
      if (detFilter === "core") {
        if (raw.detachmentId !== "core") return false;
      } else {
        if (raw.detachmentId !== detFilter) return false;
      }
    }

    return true;
  });

  if (statusEl) {
    statusEl.textContent = t.showingStrats(filtered.length, stratagems.length);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: rgba(0,0,0,0.4); border: 1px dashed var(--border-subtle); border-radius: var(--radius-md);">
        <p style="font-size: 1.2rem; color: var(--gold-accent); font-family: var(--font-serif); margin-bottom: 8px;">${t.noStratsFound}</p>
        <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">${t.noStratsDesc}</p>
        <button class="btn-gothic-primary" onclick="clearStratagemFilters()">${t.resetAllFilters}</button>
      </div>
    `;
    return;
  }

  const phaseIcons = {
    command: "👑",
    movement: "🏃",
    shooting: "🎯",
    charge: "⚡",
    fight: "⚔️",
    any: "🔄"
  };

  const turnIconsEs = {
    your_turn: "🔵 Tu Turno",
    opponent_turn: "🔴 Turno Enemigo",
    either_turn: "⚪ Cualquier Turno"
  };
  const turnIconsEn = {
    your_turn: "🔵 Your Turn",
    opponent_turn: "🔴 Opponent's Turn",
    either_turn: "⚪ Either Player's Turn"
  };
  const turnIcons = isEn ? turnIconsEn : turnIconsEs;

  container.innerHTML = filtered.map(raw => {
    const s = getStratagemText(raw, currentLang);
    const icon = phaseIcons[s.phase] || "⚡";
    const turnText = turnIcons[s.turn] || s.turnLabel;
    const isCore = s.detachmentId === "core";
    const detachmentBadge = isCore ? t.coreBadge : s.detachment;
    const isCustom = raw.isCustom || s.isCustom;
    const isEdited = raw.isEdited || s.isEdited;

    return `
      <article class="stratagem-card phase-accent-${s.phase}" data-id="${raw.id}">
        <div class="stratagem-header-top">
          <div class="stratagem-title-group">
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <h3 class="stratagem-name">${s.name}</h3>
              ${isCustom ? `<span class="stratagem-tag tag-custom" title="Estratagema creada por el usuario">✨ ${isEn ? 'Custom' : 'Personalizada'}</span>` : ''}
              ${!isCustom && isEdited ? `<span class="stratagem-tag tag-edited" title="Modificada respecto al original de Wahapedia">✏️ ${isEn ? 'Edited' : 'Modificada'}</span>` : ''}
            </div>
            ${!isEn && s.originalName && s.originalName !== s.name ? `<div class="stratagem-orig-name">${s.originalName}</div>` : ''}
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <button class="btn-strat-action btn-strat-edit" onclick="openStratagemEditor('${raw.id}')" title="${isEn ? 'Edit stratagem' : 'Editar estratagema'}">✏️ ${isEn ? 'Edit' : 'Editar'}</button>
            ${!isCustom && isEdited ? `<button class="btn-strat-action btn-strat-revert" onclick="revertSingleStratagem('${raw.id}')" title="${isEn ? 'Revert to Wahapedia default' : 'Restablecer a valores de Wahapedia'}">🔄</button>` : ''}
            <div class="stratagem-cp-badge">${s.cp} CP</div>
          </div>
        </div>

        <div class="stratagem-tags-row">
          <span class="stratagem-tag tag-phase phase-${s.phase}">${icon} ${s.phaseLabel}</span>
          <span class="stratagem-tag tag-turn turn-${s.turn === 'your_turn' ? 'player' : (s.turn === 'opponent_turn' ? 'opponent' : 'either')}">${turnText}</span>
          <span class="stratagem-tag tag-detachment">${detachmentBadge}</span>
          ${s.type ? `<span class="stratagem-tag tag-type">${s.type}</span>` : ''}
        </div>

        ${s.fluff ? `<div class="stratagem-fluff">"${s.fluff}"</div>` : ''}

        <div class="stratagem-body">
          <div class="stratagem-rule-block">
            <span class="stratagem-rule-label label-when">${t.whenLabel}</span>
            <span>${escapeHtml(s.when)}</span>
          </div>
          <div class="stratagem-rule-block">
            <span class="stratagem-rule-label label-target">${t.targetLabel}</span>
            <span>${escapeHtml(s.target)}</span>
          </div>
          <div class="stratagem-rule-block">
            <span class="stratagem-rule-label label-effect">${t.effectLabel}</span>
            <span>${escapeHtml(s.effect)}</span>
          </div>
          ${s.restrictions ? `
          <div class="stratagem-rule-block rule-restrictions">
            <span class="stratagem-rule-label label-restrictions">${isEn ? 'RESTRICTIONS:' : 'RESTRICCIONES:'}</span>
            <span>${escapeHtml(s.restrictions)}</span>
          </div>` : ''}
        </div>
      </article>
    `;
  }).join("");

  checkCustomStratagemsStatus();
}

// ==========================================================================
// EDITOR MODAL DE ESTRATAGEMAS (FUNCIONES DE EDICIÓN SENCILLA)
// ==========================================================================

/**
 * Abre el editor modal para modificar una estratagema existente o crear una nueva
 */
function openStratagemEditor(stratId) {
  const modal = document.getElementById("edit-stratagem-modal");
  if (!modal) return;
  const isEn = AppState.currentLanguage === "en";

  populateEditorDetachmentSelect();

  const idInput = document.getElementById("edit-strat-id");
  const isNewInput = document.getElementById("edit-strat-is-new");
  const titleEl = document.getElementById("modal-stratagem-editor-title");
  const pillEl = document.getElementById("modal-strat-status-pill");
  const btnRevert = document.getElementById("btn-revert-stratagem");
  const btnDelete = document.getElementById("btn-delete-stratagem");

  switchStratEditorTab(isEn ? "en" : "es");

  if (!stratId) {
    // Modo Creación Nueva
    idInput.value = `strat_custom_${Date.now()}`;
    isNewInput.value = "true";
    titleEl.textContent = isEn ? "New Custom Stratagem" : "Nueva Estratagema Personalizada";
    pillEl.style.display = "inline-block";
    pillEl.className = "stratagem-tag tag-custom";
    pillEl.textContent = isEn ? "✨ New Custom" : "✨ Nueva";
    btnRevert.style.display = "none";
    btnDelete.style.display = "none";

    setEditorCP(1);
    document.getElementById("edit-strat-detachment").value = AppState.stratagemDetachmentFilter !== "all" ? AppState.stratagemDetachmentFilter : "inner_circle";
    document.getElementById("edit-strat-type").value = "Táctica de Batalla";
    document.getElementById("edit-strat-phase").value = "any";
    document.getElementById("edit-strat-turn").value = "either_turn";

    // Campos ES
    document.getElementById("edit-strat-name-es").value = "";
    document.getElementById("edit-strat-when-es").value = "";
    document.getElementById("edit-strat-target-es").value = "";
    document.getElementById("edit-strat-effect-es").value = "";
    document.getElementById("edit-strat-restrictions-es").value = "";
    document.getElementById("edit-strat-fluff-es").value = "";

    // Campos EN
    document.getElementById("edit-strat-name-en").value = "";
    document.getElementById("edit-strat-when-en").value = "";
    document.getElementById("edit-strat-target-en").value = "";
    document.getElementById("edit-strat-effect-en").value = "";
    document.getElementById("edit-strat-restrictions-en").value = "";
    document.getElementById("edit-strat-fluff-en").value = "";
  } else {
    // Modo Edición Existente
    const raw = (WH40K_DATA.stratagems || []).find(s => s.id === stratId);
    if (!raw) return;

    idInput.value = raw.id;
    isNewInput.value = "false";
    titleEl.textContent = isEn ? `Edit: ${raw.en?.name || raw.name}` : `Editar: ${raw.es?.name || raw.name}`;

    const isCustom = !!raw.isCustom;
    const isEdited = !!raw.isEdited;

    if (isCustom) {
      pillEl.style.display = "inline-block";
      pillEl.className = "stratagem-tag tag-custom";
      pillEl.textContent = isEn ? "✨ Custom" : "✨ Personalizada";
      btnRevert.style.display = "none";
      btnDelete.style.display = "inline-flex";
    } else if (isEdited) {
      pillEl.style.display = "inline-block";
      pillEl.className = "stratagem-tag tag-edited";
      pillEl.textContent = isEn ? "✏️ Modified" : "✏️ Modificada";
      btnRevert.style.display = "inline-flex";
      btnDelete.style.display = "none";
    } else {
      pillEl.style.display = "none";
      btnRevert.style.display = "none";
      btnDelete.style.display = "none";
    }

    setEditorCP(raw.cp !== undefined ? raw.cp : 1);
    document.getElementById("edit-strat-detachment").value = raw.detachmentId || "core";
    document.getElementById("edit-strat-type").value = raw.type || "Táctica de Batalla";
    document.getElementById("edit-strat-phase").value = raw.phase || "any";
    document.getElementById("edit-strat-turn").value = raw.turn || "either_turn";

    // ES fields
    const es = raw.es || raw;
    document.getElementById("edit-strat-name-es").value = es.name || raw.name || "";
    document.getElementById("edit-strat-when-es").value = es.when || raw.when || "";
    document.getElementById("edit-strat-target-es").value = es.target || raw.target || "";
    document.getElementById("edit-strat-effect-es").value = es.effect || raw.effect || "";
    document.getElementById("edit-strat-restrictions-es").value = es.restrictions || raw.restrictions || "";
    document.getElementById("edit-strat-fluff-es").value = es.fluff || raw.fluff || "";

    // EN fields
    const en = raw.en || raw;
    document.getElementById("edit-strat-name-en").value = en.name || raw.originalName || raw.name || "";
    document.getElementById("edit-strat-when-en").value = en.when || raw.when || "";
    document.getElementById("edit-strat-target-en").value = en.target || raw.target || "";
    document.getElementById("edit-strat-effect-en").value = en.effect || raw.effect || "";
    document.getElementById("edit-strat-restrictions-en").value = en.restrictions || raw.restrictions || "";
    document.getElementById("edit-strat-fluff-en").value = en.fluff || raw.fluff || "";
  }

  modal.classList.add("active");
}

/**
 * Cierra el modal del editor de estratagemas
 */
function closeStratagemEditorModal() {
  const modal = document.getElementById("edit-stratagem-modal");
  if (modal) modal.classList.remove("active");
}

/**
 * Cambia el valor de CP seleccionado en los botones rápidos
 */
function setEditorCP(val) {
  const numInput = document.getElementById("edit-strat-cp");
  if (numInput) numInput.value = val;

  const btns = document.querySelectorAll(".cp-preset-btn");
  btns.forEach(b => {
    const cp = parseInt(b.getAttribute("data-cp"));
    b.classList.toggle("active", cp === val);
  });
}

/**
 * Cambia entre la pestaña en Castellano y la pestaña en Inglés del editor
 */
function switchStratEditorTab(lang) {
  const tabEs = document.getElementById("tab-strat-es");
  const tabEn = document.getElementById("tab-strat-en");
  const paneEs = document.getElementById("strat-editor-pane-es");
  const paneEn = document.getElementById("strat-editor-pane-en");

  if (lang === "es") {
    if (tabEs) tabEs.classList.add("active");
    if (tabEn) tabEn.classList.remove("active");
    if (paneEs) paneEs.style.display = "flex";
    if (paneEn) paneEn.style.display = "none";
  } else {
    if (tabEs) tabEs.classList.remove("active");
    if (tabEn) tabEn.classList.add("active");
    if (paneEs) paneEs.style.display = "none";
    if (paneEn) paneEn.style.display = "flex";
  }
}

/**
 * Guarda los cambios realizados en el formulario modal
 */
function saveStratagemFromEditor() {
  const idInput = document.getElementById("edit-strat-id");
  const isNewInput = document.getElementById("edit-strat-is-new");
  if (!idInput) return;

  const id = idInput.value;
  const isNew = isNewInput && isNewInput.value === "true";

  const cp = parseInt(document.getElementById("edit-strat-cp").value) || 0;
  const detachmentId = document.getElementById("edit-strat-detachment").value;
  const type = document.getElementById("edit-strat-type").value;
  const phase = document.getElementById("edit-strat-phase").value;
  const turn = document.getElementById("edit-strat-turn").value;

  const detSelect = document.getElementById("edit-strat-detachment");
  const detachmentLabel = detSelect.options[detSelect.selectedIndex]?.text || detachmentId;

  // Campos ES
  let nameEs = document.getElementById("edit-strat-name-es").value.trim();
  let whenEs = document.getElementById("edit-strat-when-es").value.trim();
  let targetEs = document.getElementById("edit-strat-target-es").value.trim();
  let effectEs = document.getElementById("edit-strat-effect-es").value.trim();
  let restrictionsEs = document.getElementById("edit-strat-restrictions-es").value.trim();
  let fluffEs = document.getElementById("edit-strat-fluff-es").value.trim();

  // Campos EN
  let nameEn = document.getElementById("edit-strat-name-en").value.trim();
  let whenEn = document.getElementById("edit-strat-when-en").value.trim();
  let targetEn = document.getElementById("edit-strat-target-en").value.trim();
  let effectEn = document.getElementById("edit-strat-effect-en").value.trim();
  let restrictionsEn = document.getElementById("edit-strat-restrictions-en").value.trim();
  let fluffEn = document.getElementById("edit-strat-fluff-en").value.trim();

  // Autocompletar el idioma secundario si se dejó vacío
  if (!nameEs && nameEn) nameEs = nameEn;
  if (!nameEn && nameEs) nameEn = nameEs;
  if (!whenEs && whenEn) whenEs = whenEn;
  if (!whenEn && whenEs) whenEn = whenEs;
  if (!targetEs && targetEn) targetEs = targetEn;
  if (!targetEn && targetEs) targetEn = targetEs;
  if (!effectEs && effectEn) effectEs = effectEn;
  if (!effectEn && effectEs) effectEn = effectEs;
  if (!restrictionsEs && restrictionsEn) restrictionsEs = restrictionsEn;
  if (!restrictionsEn && restrictionsEs) restrictionsEn = restrictionsEs;

  if (!nameEs && !nameEn) {
    alert("Por favor, introduce al menos un nombre para la estratagema.");
    return;
  }

  const phaseLabelsEs = {
    command: "Fase de Mando",
    movement: "Fase de Movimiento",
    shooting: "Fase de Disparo",
    charge: "Fase de Carga",
    fight: "Fase de Combate",
    any: "Cualquier Fase"
  };
  const phaseLabelsEn = {
    command: "Command Phase",
    movement: "Movement Phase",
    shooting: "Shooting Phase",
    charge: "Charge Phase",
    fight: "Fight Phase",
    any: "Any Phase"
  };

  const turnLabelsEs = {
    your_turn: "Tu Turno",
    opponent_turn: "Turno Enemigo",
    either_turn: "Cualquier Turno"
  };
  const turnLabelsEn = {
    your_turn: "Your Turn",
    opponent_turn: "Opponent's Turn",
    either_turn: "Either Player's Turn"
  };

  const updatedItem = {
    id,
    cp,
    phase,
    phases: [phase],
    turn,
    detachmentId,
    name: nameEs,
    originalName: nameEn,
    type,
    detachment: detachmentLabel,
    phaseLabel: phaseLabelsEs[phase] || phase,
    turnLabel: turnLabelsEs[turn] || turn,
    when: whenEs,
    target: targetEs,
    effect: effectEs,
    restrictions: restrictionsEs,
    fluff: fluffEs,
    isEdited: !isNew,
    isCustom: isNew,
    es: {
      name: nameEs,
      originalName: nameEn,
      type,
      detachment: detachmentLabel,
      phaseLabel: phaseLabelsEs[phase] || phase,
      turnLabel: turnLabelsEs[turn] || turn,
      when: whenEs,
      target: targetEs,
      effect: effectEs,
      restrictions: restrictionsEs,
      fluff: fluffEs
    },
    en: {
      name: nameEn,
      originalName: nameEn,
      type: type === "Táctica de Batalla" ? "Battle Tactic" : (type === "Treta Estratégica" ? "Strategic Ploy" : (type === "Hazaña Épica" ? "Epic Deed" : "Wargear")),
      detachment: detachmentLabel,
      phaseLabel: phaseLabelsEn[phase] || phase,
      turnLabel: turnLabelsEn[turn] || turn,
      when: whenEn,
      target: targetEn,
      effect: effectEn,
      restrictions: restrictionsEn,
      fluff: fluffEn
    }
  };

  // Actualizar lista en memoria
  const existingIdx = WH40K_DATA.stratagems.findIndex(s => s.id === id);
  if (existingIdx !== -1) {
    WH40K_DATA.stratagems[existingIdx] = updatedItem;
  } else {
    WH40K_DATA.stratagems.push(updatedItem);
  }

  // Persistir en localStorage
  let customMap = {};
  try {
    const rawStorage = localStorage.getItem("cogitator_custom_stratagems");
    if (rawStorage) customMap = JSON.parse(rawStorage) || {};
  } catch (e) {}
  customMap[id] = updatedItem;
  saveCustomStratagemsMap(customMap);

  closeStratagemEditorModal();
  updateStratagemDetachmentDropdown(AppState.currentLanguage || "es");
  updateStratagemPhaseBadges();
  renderStratagems();
  if (typeof renderBattleStratagems === "function") {
    renderBattleStratagems();
  }

  showTacticalNotification(`✅ Estratagema "${nameEs}" guardada con éxito`);
}

/**
 * Revertir una estratagema editada a sus valores originales de Wahapedia
 */
function revertCurrentEditorStratagem() {
  const idInput = document.getElementById("edit-strat-id");
  if (!idInput) return;
  revertSingleStratagem(idInput.value);
  closeStratagemEditorModal();
}

/**
 * Restablece una estratagema específica a sus valores oficiales
 */
function revertSingleStratagem(stratId) {
  if (!WH40K_DATA.defaultStratagems) return;
  const original = WH40K_DATA.defaultStratagems.find(s => s.id === stratId);
  if (!original) return;

  const idx = WH40K_DATA.stratagems.findIndex(s => s.id === stratId);
  if (idx !== -1) {
    WH40K_DATA.stratagems[idx] = JSON.parse(JSON.stringify(original));
  }

  // Eliminar de localStorage
  try {
    const rawStorage = localStorage.getItem("cogitator_custom_stratagems");
    if (rawStorage) {
      const customMap = JSON.parse(rawStorage) || {};
      delete customMap[stratId];
      saveCustomStratagemsMap(customMap);
    }
  } catch (e) {}

  updateStratagemDetachmentDropdown(AppState.currentLanguage || "es");
  updateStratagemPhaseBadges();
  renderStratagems();
  if (typeof renderBattleStratagems === "function") {
    renderBattleStratagems();
  }

  showTacticalNotification(`🔄 Estratagema "${original.es?.name || original.name}" restaurada a los valores de Wahapedia`);
}

/**
 * Elimina una estratagema creada por el usuario
 */
function deleteCurrentEditorStratagem() {
  const idInput = document.getElementById("edit-strat-id");
  if (!idInput) return;
  const stratId = idInput.value;

  const item = WH40K_DATA.stratagems.find(s => s.id === stratId);
  const name = item ? (item.es?.name || item.name) : stratId;

  if (!confirm(`¿Estás seguro de que deseas eliminar la estratagema "${name}"?`)) {
    return;
  }

  WH40K_DATA.stratagems = WH40K_DATA.stratagems.filter(s => s.id !== stratId);

  try {
    const rawStorage = localStorage.getItem("cogitator_custom_stratagems");
    if (rawStorage) {
      const customMap = JSON.parse(rawStorage) || {};
      delete customMap[stratId];
      saveCustomStratagemsMap(customMap);
    }
  } catch (e) {}

  closeStratagemEditorModal();
  updateStratagemDetachmentDropdown(AppState.currentLanguage || "es");
  updateStratagemPhaseBadges();
  renderStratagems();
  if (typeof renderBattleStratagems === "function") {
    renderBattleStratagems();
  }

  showTacticalNotification(`🗑️ Estratagema "${name}" eliminada`);
}

/**
 * Restablece todas las estratagemas al compendio oficial de Wahapedia
 */
function resetAllStratagemsToDefault() {
  if (!confirm("¿Deseas restaurar todas las estratagemas modificadas a los valores oficiales de Wahapedia? Se descartarán todas las ediciones personalizadas.")) {
    return;
  }

  if (WH40K_DATA.defaultStratagems) {
    WH40K_DATA.stratagems = JSON.parse(JSON.stringify(WH40K_DATA.defaultStratagems));
  }
  localStorage.removeItem("cogitator_custom_stratagems");

  updateStratagemDetachmentDropdown(AppState.currentLanguage || "es");
  updateStratagemPhaseBadges();
  renderStratagems();
  if (typeof renderBattleStratagems === "function") {
    renderBattleStratagems();
  }

  showTacticalNotification("🔄 Todas las estratagemas han sido restauradas a los valores oficiales de Wahapedia");
}

/**
 * Notificación táctica flotante para acciones de guardado y edición
 */
function showTacticalNotification(msg) {
  if (typeof showBattleToast === "function") {
    showBattleToast(msg);
  } else {
    const existing = document.getElementById("cogitator-battle-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.id = "cogitator-battle-toast";
    toast.style.cssText = "position:fixed;bottom:24px;right:24px;background:rgba(20,35,25,0.95);border:1px solid #c5a059;color:#fff;padding:12px 20px;border-radius:6px;z-index:10000;font-weight:700;";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }
}

// Exportación explícita al objeto global window para asegurar compatibilidad total
window.openStratagemEditor = openStratagemEditor;
window.closeStratagemEditorModal = closeStratagemEditorModal;
window.setEditorCP = setEditorCP;
window.switchStratEditorTab = switchStratEditorTab;
window.saveStratagemFromEditor = saveStratagemFromEditor;
window.revertCurrentEditorStratagem = revertCurrentEditorStratagem;
window.revertSingleStratagem = revertSingleStratagem;
window.deleteCurrentEditorStratagem = deleteCurrentEditorStratagem;
window.resetAllStratagemsToDefault = resetAllStratagemsToDefault;
window.showTacticalNotification = showTacticalNotification;

window.openEditDatasheetModal = openEditDatasheetModal;
window.openCreateDatasheetModal = openCreateDatasheetModal;
window.closeEditDatasheetModal = closeEditDatasheetModal;
window.saveDatasheetFromModal = saveDatasheetFromModal;
window.deleteDatasheetFromModal = deleteDatasheetFromModal;

// ==========================================================================
// MÓDULO 2: GESTOR DE COLECCIÓN PERSONAL (INVENTARIO Y HOBBY)
// ==========================================================================
function initCollectionActions() {
  const filterBtns = document.querySelectorAll(".col-status-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.collectionStatusFilter = btn.getAttribute("data-status");
      renderCollection();
    });
  });
  
  const addBtn = document.getElementById("btn-add-collection-custom");
  if (addBtn) {
    addBtn.addEventListener("click", () => openAddMiniatureModal());
  }
}

function renderCollection() {
  const container = document.getElementById("collection-cards-container");
  if (!container) return;
  
  // Render de métricas de pintura y conteo
  updateCollectionKPIs();
  
  const filtered = AppState.collection.filter(item => {
    if (AppState.collectionStatusFilter === "all") return true;
    return item.status === AppState.collectionStatusFilter;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md);">
        <p>No hay miniaturas en esta categoría de tu colección.</p>
        <button class="btn-gothic" onclick="openAddMiniatureModal()" style="margin-top: 12px;">+ Añadir Miniatura</button>
      </div>`;
    return;
  }
  
  container.innerHTML = filtered.map(item => {
    const ds = WH40K_DATA.datasheets.find(d => d.id === item.datasheetId) || {
      name: item.customName || "Miniatura Desconocida",
      stats: { m: "-", r: "-", sv: "-", inv: "-", h: "-", l: "-", co: "-" },
      pointsOptions: [{ points: 0 }],
      rangedWeapons: [],
      meleeWeapons: []
    };
    
    const wingClass = item.wing === "Ala de Muerte" ? "deathwing" : (item.wing === "Ala de Cuervo" ? "ravenwing" : "green");
    const pointsVal = ds.pointsOptions && ds.pointsOptions[0] ? ds.pointsOptions[0].points : 0;
    
    const hasAlias = item.alias && item.alias.trim() && item.alias.trim() !== ds.name;
    const titleName = hasAlias ? item.alias.trim() : (item.customName || ds.name);

    return `
      <div class="collection-card wing-${wingClass}">
        <div class="card-header-da">
          <div class="card-title-group">
            <h3 class="collection-alias-title">${escapeHtml(titleName)}</h3>
            <div class="card-subtitle" style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 4px;">
              ${hasAlias ? `<span class="collection-ds-badge" title="Hoja de datos oficial">📜 ${escapeHtml(ds.name)}</span>` : ''}
              <span class="wing-badge ${wingClass}">${item.wing}</span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">• ${item.count} miniatura${item.count > 1 ? 's' : ''}</span>
            </div>
          </div>
          <div class="points-badge">${pointsVal} pts</div>
        </div>
        
        <!-- STATLINE RÁPIDA -->
        <div class="statline-container" style="padding: 4px; font-size: 0.85rem;">
          <div class="stat-box"><span class="stat-label">M</span><span class="stat-val" style="font-size: 1rem;">${ds.stats.m}</span></div>
          <div class="stat-box"><span class="stat-label">R</span><span class="stat-val" style="font-size: 1rem;">${ds.stats.r}</span></div>
          <div class="stat-box"><span class="stat-label">SV</span><span class="stat-val" style="font-size: 1rem;">${ds.stats.sv}</span></div>
          <div class="stat-box stat-inv"><span class="stat-label">INV</span><span class="stat-val" style="font-size: 1rem;">${ds.stats.inv}</span></div>
          <div class="stat-box"><span class="stat-label">H</span><span class="stat-val" style="font-size: 1rem;">${ds.stats.h}</span></div>
          <div class="stat-box"><span class="stat-label">L</span><span class="stat-val" style="font-size: 1rem;">${ds.stats.l}</span></div>
          <div class="stat-box stat-co"><span class="stat-label">CO</span><span class="stat-val" style="font-size: 1rem;">${ds.stats.co}</span></div>
        </div>
        
        <!-- SELECTOR DE ESTADO DE PINTURA (1-CLICK) -->
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Estado del Hobby:</span>
          <div class="status-selector">
            <button class="status-pill-btn st-box ${item.status === 'box' ? 'active' : ''}" onclick="setCollectionItemStatus('${item.id}', 'box')">📦 En caja</button>
            <button class="status-pill-btn st-built ${item.status === 'built' ? 'active' : ''}" onclick="setCollectionItemStatus('${item.id}', 'built')">🛠️ Montado</button>
            <button class="status-pill-btn st-primed ${item.status === 'primed' ? 'active' : ''}" onclick="setCollectionItemStatus('${item.id}', 'primed')">🎨 Imprimado</button>
            <button class="status-pill-btn st-base ${item.status === 'base' ? 'active' : ''}" onclick="setCollectionItemStatus('${item.id}', 'base')">🖌️ Base</button>
            <button class="status-pill-btn st-battle ${item.status === 'battle' ? 'active' : ''}" onclick="setCollectionItemStatus('${item.id}', 'battle')">⚔️ Battle Ready</button>
            <button class="status-pill-btn st-parade ${item.status === 'parade' ? 'active' : ''}" onclick="setCollectionItemStatus('${item.id}', 'parade')">🏆 Desfile</button>
          </div>
        </div>
        
        <!-- VISUALIZACIÓN DE ARMAMENTO SELECCIONADO (WYSIWYG) -->
        <div class="collection-wargear-display">
          <div class="wargear-display-header">
            <span>🛡️ Armamento Equipado (${(item.selectedWeapons && item.selectedWeapons.length) || 0})</span>
            ${item.isMagnetized ? '<span style="color: var(--gold-accent); font-size: 0.72rem;">[🧲 Magnetizada]</span>' : ''}
          </div>
          ${item.selectedWeapons && item.selectedWeapons.length > 0 ? `
            <div class="wargear-tag-list">
              ${item.selectedWeapons.map(wName => {
                const isRanged = (ds.rangedWeapons || []).some(w => w.name === wName);
                const icon = isRanged ? '🏹' : '⚔️';
                const typeClass = isRanged ? 'ranged' : 'melee';
                return `<span class="wargear-tag ${typeClass}" title="${escapeHtml(wName)}">${icon} ${escapeHtml(wName)}</span>`;
              }).join('')}
            </div>
          ` : `
            <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">
              ${escapeHtml(item.loadoutNotes || "Equipo estándar")}
            </div>
          `}
          ${item.loadoutNotes && (!item.selectedWeapons || item.loadoutNotes !== item.selectedWeapons.join(", ")) ? `
            <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 3px; border-top: 1px dashed rgba(255,255,255,0.1); padding-top: 3px;">
              <strong>Nota WYSIWYG:</strong> ${escapeHtml(item.loadoutNotes)}
            </div>
          ` : ''}
        </div>
        
        <div class="card-actions-row">
          <button class="btn-gothic-secondary" style="font-size: 0.75rem; padding: 4px 10px;" onclick="addCollectionItemToActiveList('${item.id}')">
            + Añadir a Lista
          </button>
          <button class="btn-gothic-secondary" style="font-size: 0.75rem; padding: 4px 10px; border-color: var(--caliban-bright); color: var(--caliban-bright);" onclick="openPaintRecipeModal('${item.id}')" title="Ver o editar receta de colores">
            🎨 Receta
          </button>
          <button class="btn-gothic-secondary" style="font-size: 0.75rem; padding: 4px 10px; border-color: var(--gold-accent); color: var(--gold-accent);" onclick="openEditCollectionItemModal('${item.id}')">
            ✏️ Personalizar
          </button>
          <button class="btn-gothic-secondary" style="font-size: 0.75rem; padding: 4px 8px; color: #f87171;" onclick="deleteCollectionItem('${item.id}')">
            Eliminar
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function updateCollectionKPIs() {
  let box = 0, built = 0, primed = 0, base = 0, battle = 0, parade = 0;
  let totalModels = 0;
  let totalPts = 0;
  
  AppState.collection.forEach(item => {
    const count = item.count;
    totalModels += count;
    
    const ds = WH40K_DATA.datasheets.find(d => d.id === item.datasheetId);
    if (ds && ds.pointsOptions[0]) {
      totalPts += ds.pointsOptions[0].points;
    }
    
    if (item.status === "box") box += count;
    else if (item.status === "built") built += count;
    else if (item.status === "primed") primed += count;
    else if (item.status === "base") base += count;
    else if (item.status === "battle") battle += count;
    else if (item.status === "parade") parade += count;
  });
  
  // Elementos de la interfaz
  const elTotalModels = document.getElementById("kpi-col-models");
  const elTotalPts = document.getElementById("kpi-col-points");
  const elBattleReady = document.getElementById("kpi-col-battleready");
  const elPileOfShame = document.getElementById("kpi-col-pile");
  
  if (elTotalModels) elTotalModels.textContent = totalModels;
  if (elTotalPts) elTotalPts.textContent = `${totalPts} pts`;
  
  const paintedTotal = battle + parade;
  const paintedPercent = totalModels > 0 ? Math.round((paintedTotal / totalModels) * 100) : 0;
  if (elBattleReady) elBattleReady.textContent = `${paintedTotal} (${paintedPercent}%)`;
  
  const pileCount = box + built + primed;
  if (elPileOfShame) elPileOfShame.textContent = `${pileCount} minis`;
  
  // Barra de progreso segmentada
  if (totalModels > 0) {
    document.getElementById("seg-box").style.width = `${(box / totalModels) * 100}%`;
    document.getElementById("seg-built").style.width = `${(built / totalModels) * 100}%`;
    document.getElementById("seg-primed").style.width = `${(primed / totalModels) * 100}%`;
    document.getElementById("seg-base").style.width = `${(base / totalModels) * 100}%`;
    document.getElementById("seg-battle").style.width = `${(battle / totalModels) * 100}%`;
    document.getElementById("seg-parade").style.width = `${(parade / totalModels) * 100}%`;
  }
}

function setCollectionItemStatus(itemId, newStatus) {
  const item = AppState.collection.find(i => i.id === itemId);
  if (item) {
    item.status = newStatus;
    saveToStorage();
    renderCollection();
    updateHeaderStats();
  }
}

function deleteCollectionItem(itemId) {
  if (confirm("¿Confirmas la retirada de esta miniatura de tu armería?")) {
    AppState.collection = AppState.collection.filter(i => i.id !== itemId);
    saveToStorage();
    renderCollection();
    updateHeaderStats();
  }
}

function openEditCollectionItemModal(itemId) {
  openAddMiniatureModal(null, itemId);
}

function openAddMiniatureModal(presetDatasheetId = null, existingItemId = null) {
  const modal = document.getElementById("add-miniature-modal");
  if (!modal) return;
  
  const titleEl = document.getElementById("modal-add-title");
  const submitBtn = document.getElementById("btn-submit-collection-mini");
  const idInput = document.getElementById("modal-collection-item-id");
  const selectDs = document.getElementById("modal-select-datasheet");
  const aliasInput = document.getElementById("modal-mini-alias");
  const countInput = document.getElementById("modal-mini-count");
  const statusSelect = document.getElementById("modal-mini-status");
  const notesInput = document.getElementById("modal-mini-notes");
  const isMagCheckbox = document.getElementById("modal-mini-mag");

  // Rellenar selector de hojas de datos si está vacío o no coincide
  if (selectDs && (!selectDs.options || selectDs.options.length !== WH40K_DATA.datasheets.length)) {
    selectDs.innerHTML = WH40K_DATA.datasheets.map(ds => `
      <option value="${ds.id}">${escapeHtml(ds.name)} (${escapeHtml(ds.wing)} - ${ds.pointsOptions[0] ? ds.pointsOptions[0].points : 0} pts)</option>
    `).join('');
  }

  if (existingItemId) {
    // MODO EDICIÓN
    const item = AppState.collection.find(i => i.id === existingItemId);
    if (!item) return;

    if (titleEl) titleEl.textContent = "✏️ Personalizar Escuadra y Armamento";
    if (submitBtn) submitBtn.textContent = "💾 Guardar Cambios";
    if (idInput) idInput.value = item.id;
    if (selectDs) selectDs.value = item.datasheetId;
    if (aliasInput) aliasInput.value = item.alias || (item.customName !== item.datasheetId ? item.customName : "") || "";
    if (countInput) countInput.value = item.count || 1;
    if (statusSelect) statusSelect.value = item.status || "built";
    if (notesInput) notesInput.value = item.loadoutNotes || "";
    if (isMagCheckbox) isMagCheckbox.checked = !!item.isMagnetized;

    renderWargearOptionsInModal(item.datasheetId, item.selectedWeapons || []);
  } else {
    // MODO NUEVO REGISTRO
    if (titleEl) titleEl.textContent = "🛡️ Registrar Miniatura en la Armería";
    if (submitBtn) submitBtn.textContent = "➕ Guardar en Colección";
    if (idInput) idInput.value = "";
    
    const targetDsId = presetDatasheetId || (selectDs && selectDs.value) || (WH40K_DATA.datasheets[0] ? WH40K_DATA.datasheets[0].id : "");
    if (selectDs) selectDs.value = targetDsId;
    
    const ds = WH40K_DATA.datasheets.find(d => d.id === targetDsId);
    if (aliasInput) aliasInput.value = "";
    if (countInput) countInput.value = ds && ds.pointsOptions[0] ? ds.pointsOptions[0].models : 1;
    if (statusSelect) statusSelect.value = "built";
    if (notesInput) notesInput.value = "";
    if (isMagCheckbox) isMagCheckbox.checked = false;

    renderWargearOptionsInModal(targetDsId, null);
  }
  
  modal.classList.add("active");
}

function closeAddMiniatureModal() {
  const modal = document.getElementById("add-miniature-modal");
  if (modal) modal.classList.remove("active");
}

function onDatasheetChangeInCollectionModal() {
  const selectDs = document.getElementById("modal-select-datasheet");
  const countInput = document.getElementById("modal-mini-count");
  if (!selectDs) return;

  const dsId = selectDs.value;
  const ds = WH40K_DATA.datasheets.find(d => d.id === dsId);
  if (ds && countInput) {
    countInput.value = ds.pointsOptions[0] ? ds.pointsOptions[0].models : 1;
  }

  // Rerender available weapons with smart defaults for this newly chosen datasheet
  renderWargearOptionsInModal(dsId, null);
}

function renderWargearOptionsInModal(datasheetId, selectedWeaponsList = null) {
  const container = document.getElementById("modal-collection-wargear-container");
  if (!container) return;

  const ds = WH40K_DATA.datasheets.find(d => d.id === datasheetId);
  if (!ds) {
    container.innerHTML = "";
    return;
  }

  const ranged = ds.rangedWeapons || [];
  const melee = ds.meleeWeapons || [];

  let isDefault = selectedWeaponsList === null;
  let selectedSet = new Set(selectedWeaponsList || []);

  if (isDefault) {
    // Si la unidad tiene armas a distancia, marcar las predeterminadas (las primeras)
    if (ranged.length > 0) {
      selectedSet.add(ranged[0].name);
      if (ranged.length === 2) selectedSet.add(ranged[1].name);
    }
    // Si la unidad tiene armas cuerpo a cuerpo, marcar la primera
    if (melee.length > 0) {
      selectedSet.add(melee[0].name);
    }
  }

  let html = `
    <div class="col-wargear-group">
      <div class="col-wargear-header">
        <span>⚔️ Armamento y Equipo Configurable (WYSIWYG):</span>
        <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: normal; text-transform: none;">
          Selecciona el equipo montado en tus miniaturas según las reglas de la escuadra
        </span>
      </div>
  `;

  if (ds.notes) {
    html += `
      <div style="font-size: 0.75rem; color: var(--gold-accent); background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--gold-accent); padding: 6px 10px; border-radius: 2px;">
        📜 <strong>Reglas y Opciones de Montaje del Códex:</strong> ${escapeHtml(ds.notes)}
      </div>
    `;
  }

  if (ranged.length === 0 && melee.length === 0) {
    html += `
      <div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic; padding: 6px;">
        Esta unidad no cuenta con opciones de armas en su perfil.
      </div>
    `;
  } else {
    // Armas a Distancia
    if (ranged.length > 0) {
      html += `
        <div style="margin-top: 4px;">
          <span style="font-size: 0.74rem; text-transform: uppercase; font-weight: 700; color: #38bdf8; display: block; margin-bottom: 6px;">
            🏹 Armas a Distancia Disponibles (${ranged.length}):
          </span>
          <div class="col-wargear-list">
            ${ranged.map((w, idx) => {
              const checked = selectedSet.has(w.name);
              const kwHtml = (w.keywords || []).map(k => `<span class="col-wargear-kw-badge">${escapeHtml(k)}</span>`).join('');
              return `
                <label class="col-wargear-card ${checked ? 'selected' : ''}" for="w_r_${idx}">
                  <input type="checkbox" id="w_r_${idx}" class="col-weapon-checkbox" data-weapon-type="ranged" value="${escapeHtml(w.name)}" ${checked ? 'checked' : ''} onchange="toggleWargearCardSelection(this)">
                  <div class="col-wargear-info">
                    <span class="col-wargear-name">${escapeHtml(w.name)}</span>
                    <span class="col-wargear-stats">Alcance: ${w.range} | A: ${w.a} | HP: ${w.bs} | F: ${w.s} | FP: ${w.ap} | D: ${w.d}</span>
                    ${kwHtml ? `<div class="col-wargear-kw">${kwHtml}</div>` : ''}
                  </div>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // Armas Cuerpo a Cuerpo
    if (melee.length > 0) {
      html += `
        <div style="margin-top: 8px;">
          <span style="font-size: 0.74rem; text-transform: uppercase; font-weight: 700; color: #f87171; display: block; margin-bottom: 6px;">
            ⚔️ Armas Cuerpo a Cuerpo Disponibles (${melee.length}):
          </span>
          <div class="col-wargear-list">
            ${melee.map((w, idx) => {
              const checked = selectedSet.has(w.name);
              const kwHtml = (w.keywords || []).map(k => `<span class="col-wargear-kw-badge">${escapeHtml(k)}</span>`).join('');
              return `
                <label class="col-wargear-card ${checked ? 'selected' : ''}" for="w_m_${idx}">
                  <input type="checkbox" id="w_m_${idx}" class="col-weapon-checkbox" data-weapon-type="melee" value="${escapeHtml(w.name)}" ${checked ? 'checked' : ''} onchange="toggleWargearCardSelection(this)">
                  <div class="col-wargear-info">
                    <span class="col-wargear-name">${escapeHtml(w.name)}</span>
                    <span class="col-wargear-stats">Alcance: ${w.range} | A: ${w.a} | HA: ${w.ws} | F: ${w.s} | FP: ${w.ap} | D: ${w.d}</span>
                    ${kwHtml ? `<div class="col-wargear-kw">${kwHtml}</div>` : ''}
                  </div>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
  }

  html += `</div>`;
  container.innerHTML = html;
}

function toggleWargearCardSelection(checkbox) {
  const card = checkbox.closest('.col-wargear-card');
  if (card) {
    if (checkbox.checked) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  }
}

function submitAddMiniature() {
  const idInput = document.getElementById("modal-collection-item-id");
  const selectDs = document.getElementById("modal-select-datasheet");
  const aliasInput = document.getElementById("modal-mini-alias");
  const countInput = document.getElementById("modal-mini-count");
  const statusSelect = document.getElementById("modal-mini-status");
  const notesInput = document.getElementById("modal-mini-notes");
  const isMagCheckbox = document.getElementById("modal-mini-mag");
  
  if (!selectDs) return;
  const dsId = selectDs.value;
  const ds = WH40K_DATA.datasheets.find(d => d.id === dsId);
  if (!ds) return;
  
  const existingId = idInput ? idInput.value : "";
  const aliasVal = aliasInput ? aliasInput.value.trim() : "";
  const countVal = parseInt(countInput ? countInput.value : 1, 10) || 1;
  const statusVal = statusSelect ? statusSelect.value : "built";
  const notesVal = notesInput ? notesInput.value.trim() : "";
  const isMagVal = isMagCheckbox ? isMagCheckbox.checked : false;

  // Recoger todas las armas marcadas
  const selectedWeapons = Array.from(document.querySelectorAll("#modal-collection-wargear-container .col-weapon-checkbox:checked")).map(cb => cb.value);

  if (existingId) {
    // ACTUALIZAR ELEMENTO EXISTENTE
    const item = AppState.collection.find(i => i.id === existingId);
    if (item) {
      item.datasheetId = ds.id;
      item.alias = aliasVal;
      item.customName = aliasVal || ds.name;
      item.wing = ds.wing;
      item.count = countVal;
      item.status = statusVal;
      item.selectedWeapons = selectedWeapons;
      item.loadoutNotes = notesVal || (selectedWeapons.length > 0 ? selectedWeapons.join(", ") : "Equipo estándar");
      item.isMagnetized = isMagVal;
      showTacticalNotification(`✏️ Escuadra "${item.customName}" actualizada correctamente`);
    }
  } else {
    // CREAR NUEVO REGISTRO EN LA COLECCIÓN
    const newItem = {
      id: "col_" + Date.now(),
      datasheetId: ds.id,
      alias: aliasVal,
      customName: aliasVal || ds.name,
      wing: ds.wing,
      count: countVal,
      status: statusVal,
      selectedWeapons: selectedWeapons,
      loadoutNotes: notesVal || (selectedWeapons.length > 0 ? selectedWeapons.join(", ") : "Equipo estándar"),
      isMagnetized: isMagVal,
      addedDate: new Date().toISOString().split("T")[0]
    };
    AppState.collection.unshift(newItem);
    showTacticalNotification(`🛡️ ¡"${newItem.customName}" añadida a tu Armería de La Roca!`);
  }
  
  saveToStorage();
  renderCollection();
  updateHeaderStats();
  closeAddMiniatureModal();
}

function addDatasheetToCollection(datasheetId) {
  // Abre el modal de registro preseleccionando la unidad para que el usuario configure alias y armamento
  switchTab("collection");
  openAddMiniatureModal(datasheetId);
}

function addCollectionItemToActiveList(itemIdOrDsId) {
  const item = AppState.collection.find(i => i.id === itemIdOrDsId || i.datasheetId === itemIdOrDsId);
  const activeList = getActiveArmyList();
  if (!activeList) return;

  const targetDsId = item ? item.datasheetId : itemIdOrDsId;
  const ds = WH40K_DATA.datasheets.find(d => d.id === targetDsId);
  if (!ds) return;

  const unitName = item ? (item.alias || item.customName || ds.name) : ds.name;
  const newUnit = {
    instanceId: "u_" + Date.now(),
    datasheetId: ds.id,
    customName: unitName,
    selectedWeapons: item && item.selectedWeapons ? [...item.selectedWeapons] : [],
    loadoutNotes: item ? item.loadoutNotes : "",
    modelsCount: item && item.count ? item.count : (ds.pointsOptions[0] ? ds.pointsOptions[0].models : 1),
    isWarlord: activeList.units.length === 0 && (ds.keywords.includes("PERSONAJE") || ds.keywords.includes("CHARACTER")),
    enhancementId: null,
    attachedToUnitInstanceId: null
  };

  activeList.units.push(newUnit);
  saveToStorage();
  renderArmyBuilder();
  showTacticalNotification(`➕ "${unitName}" añadida a la lista de combate`);
}

// ==========================================================================
// MÓDULO 3: CREADOR Y VALIDADOR DE LISTAS DE EJÉRCITO (ARMY BUILDER)
// ==========================================================================
/**
 * Obtiene el coste en Puntos de Destacamento (PD) de un destacamento.
 * 1 PD, 2 PD o 3 PD (por ejemplo, Gladius cuesta 3 PD, Ira de la Roca 2 PD, otros 1 PD).
 */
function getDetachmentPD(detOrId) {
  if (!detOrId) return 1;
  const det = typeof detOrId === "object" ? detOrId : WH40K_DATA.detachments.find(d => d.id === detOrId);
  if (!det) return 1;
  if (typeof det.dp === "number") return det.dp;
  if (det.commandPoints) {
    const m = det.commandPoints.match(/(\d+)/);
    if (m) return parseInt(m[1], 10);
  }
  return 1;
}

/**
 * Calcula el límite máximo de Puntos de Destacamento (PD) en función del tamaño de la partida.
 * - 500 pts (Patrulla de Combate): 1 PD
 * - 1.000 pts (Incursión): 2 PD
 * - 2.000 pts (Fuerza de Choque): 3 PD
 * - 3.000 pts (Embestida): 4 PD
 */
function getMaxDetachmentPoints(pointsLimit) {
  const limit = parseInt(pointsLimit, 10) || 2000;
  if (limit <= 500) return 1;
  if (limit <= 1000) return 2;
  if (limit <= 2000) return 3;
  return 4;
}

function getFormatNameByPoints(pointsLimit) {
  const limit = parseInt(pointsLimit, 10) || 2000;
  if (limit <= 500) return "Patrulla de Combate (500 pts)";
  if (limit <= 1000) return "Incursión (1.000 pts)";
  if (limit <= 2000) return "Fuerza de Choque (2.000 pts)";
  return "Embestida (3.000 pts)";
}

/**
 * Suma los Puntos de Destacamento (PD) asignados en la lista activa.
 */
function calculateListDetachmentPoints(armyList) {
  if (!armyList) return 0;
  const detIds = armyList.detachmentIds || (armyList.detachmentId ? [armyList.detachmentId] : []);
  return detIds.reduce((sum, id) => sum + getDetachmentPD(id), 0);
}

/**
 * Busca una mejora en cualquiera de los destacamentos activos seleccionados en la lista.
 */
function findEnhancementInActiveList(armyList, enhancementId) {
  if (!enhancementId || !armyList) return null;
  const detIds = armyList.detachmentIds || (armyList.detachmentId ? [armyList.detachmentId] : []);
  for (const detId of detIds) {
    const det = WH40K_DATA.detachments.find(d => d.id === detId);
    if (det && Array.isArray(det.enhancements)) {
      const enh = det.enhancements.find(e => e.id === enhancementId);
      if (enh) return { enhancement: enh, detachment: det };
    }
  }
  return null;
}

function initArmyBuilder() {
  const selectDetachment = document.getElementById("army-detachment-select");
  if (selectDetachment) {
    selectDetachment.innerHTML = WH40K_DATA.detachments.map(det => `
      <option value="${det.id}">${det.name} (${det.originalName}) - [${det.commandPoints || det.dp + ' PD'}]</option>
    `).join('');
    
    selectDetachment.addEventListener("change", (e) => {
      const activeList = getActiveArmyList();
      if (activeList) {
        activeList.detachmentId = e.target.value;
        if (!activeList.detachmentIds.includes(e.target.value)) {
          activeList.detachmentIds = [e.target.value];
        }
        saveToStorage();
        renderArmyBuilder();
      }
    });
  }
  
  const pointsLimitSelect = document.getElementById("army-points-limit");
  if (pointsLimitSelect) {
    pointsLimitSelect.addEventListener("change", (e) => {
      const activeList = getActiveArmyList();
      if (activeList) {
        activeList.pointsLimit = parseInt(e.target.value, 10);
        saveToStorage();
        renderArmyBuilder();
      }
    });
  }
  
  const armyNameInput = document.getElementById("army-name-input");
  if (armyNameInput) {
    armyNameInput.addEventListener("input", (e) => {
      const activeList = getActiveArmyList();
      if (activeList) {
        activeList.name = e.target.value;
        saveToStorage();
      }
    });
  }
}

function getActiveArmyList() {
  const list = AppState.armyLists.find(l => l.id === AppState.activeListId) || AppState.armyLists[0];
  if (list) {
    if (!Array.isArray(list.detachmentIds) || list.detachmentIds.length === 0) {
      list.detachmentIds = list.detachmentId ? [list.detachmentId] : ["inner_circle"];
    }
    // Sincronizar list.detachmentId con el primero para compatibilidad
    list.detachmentId = list.detachmentIds[0];
  }
  return list;
}

function calculateListPoints(armyList) {
  let total = 0;
  if (!armyList || !armyList.units) return total;
  
  armyList.units.forEach(u => {
    const ds = WH40K_DATA.datasheets.find(d => d.id === u.datasheetId);
    if (!ds) return;
    
    // Calcular puntos por modelo
    const pointsOpt = ds.pointsOptions.find(p => p.models === u.modelsCount) || ds.pointsOptions[0];
    if (pointsOpt) total += pointsOpt.points;
    
    // Puntos de mejora (acumulables de todos los destacamentos seleccionados)
    if (u.enhancementId) {
      const found = findEnhancementInActiveList(armyList, u.enhancementId);
      if (found) total += found.enhancement.points;
    }
  });
  
  return total;
}

// --------------------------------------------------------------------------
// ACCIONES MULTI-DESTACAMENTO
// --------------------------------------------------------------------------

function addSelectedDetachmentFromSelect() {
  const activeList = getActiveArmyList();
  const selectEl = document.getElementById("army-add-detachment-select");
  if (!activeList || !selectEl || !selectEl.value) return;

  const detId = selectEl.value;
  if (!activeList.detachmentIds.includes(detId)) {
    activeList.detachmentIds.push(detId);
    activeList.detachmentId = activeList.detachmentIds[0];
    saveToStorage();
    renderArmyBuilder();
    const det = WH40K_DATA.detachments.find(d => d.id === detId);
    const totalPD = calculateListDetachmentPoints(activeList);
    const maxPD = getMaxDetachmentPoints(activeList.pointsLimit);
    showTacticalNotification(`🦅 Añadido destacamento: ${det ? det.name : detId} (${totalPD}/${maxPD} PD).`);
  }
}

function removeDetachmentFromActiveList(detId) {
  const activeList = getActiveArmyList();
  if (!activeList) return;

  if (activeList.detachmentIds.length <= 1) {
    alert("Tu ejército debe contar con al menos un destacamento activo.");
    return;
  }

  const det = WH40K_DATA.detachments.find(d => d.id === detId);
  activeList.detachmentIds = activeList.detachmentIds.filter(id => id !== detId);
  activeList.detachmentId = activeList.detachmentIds[0];

  // Si alguna unidad tenía una mejora del destacamento retirado, resetearla
  activeList.units.forEach(u => {
    if (u.enhancementId && det && Array.isArray(det.enhancements) && det.enhancements.some(e => e.id === u.enhancementId)) {
      u.enhancementId = null;
    }
  });

  saveToStorage();
  renderArmyBuilder();
  const totalPD = calculateListDetachmentPoints(activeList);
  const maxPD = getMaxDetachmentPoints(activeList.pointsLimit);
  showTacticalNotification(`✕ Destacamento retirado: ${det ? det.name : detId} (${totalPD}/${maxPD} PD).`);
}

let manageDetSearchQuery = "";

function openManageDetachmentsModal() {
  const modal = document.getElementById("manage-detachments-modal");
  if (!modal) return;
  manageDetSearchQuery = "";
  const searchInput = document.getElementById("manage-det-search-input");
  if (searchInput) searchInput.value = "";
  renderManageDetachmentsModalContent();
  modal.classList.add("active");
}

function closeManageDetachmentsModal() {
  const modal = document.getElementById("manage-detachments-modal");
  if (modal) modal.classList.remove("active");
  renderArmyBuilder();
}

function filterManageDetachmentsList(q) {
  manageDetSearchQuery = q || "";
  renderManageDetachmentsModalContent();
}

function toggleDetachmentInActiveList(detId) {
  const activeList = getActiveArmyList();
  if (!activeList) return;

  const isSelected = activeList.detachmentIds.includes(detId);
  const det = WH40K_DATA.detachments.find(d => d.id === detId);

  if (isSelected) {
    if (activeList.detachmentIds.length <= 1) {
      alert("Tu ejército debe contar con al menos un destacamento activo.");
      return;
    }
    activeList.detachmentIds = activeList.detachmentIds.filter(id => id !== detId);
    activeList.units.forEach(u => {
      if (u.enhancementId && det && Array.isArray(det.enhancements) && det.enhancements.some(e => e.id === u.enhancementId)) {
        u.enhancementId = null;
      }
    });
  } else {
    activeList.detachmentIds.push(detId);
  }

  activeList.detachmentId = activeList.detachmentIds[0];
  saveToStorage();
  renderManageDetachmentsModalContent();
  renderArmyBuilder();
}

function renderManageDetachmentsModalContent() {
  const activeList = getActiveArmyList();
  if (!activeList) return;

  const totalPD = calculateListDetachmentPoints(activeList);
  const maxPD = getMaxDetachmentPoints(activeList.pointsLimit);
  const formatName = getFormatNameByPoints(activeList.pointsLimit);

  const formatDescEl = document.getElementById("modal-manage-det-format-desc");
  if (formatDescEl) {
    formatDescEl.textContent = `Formato: ${formatName} — Límite de Destacamentos: ${maxPD} PD`;
  }

  const pdBadgeEl = document.getElementById("modal-manage-det-pd-badge");
  if (pdBadgeEl) {
    pdBadgeEl.textContent = `${totalPD} / ${maxPD} PD`;
    pdBadgeEl.style.borderColor = totalPD > maxPD ? "#ef4444" : "var(--gold-primary)";
    pdBadgeEl.style.color = totalPD > maxPD ? "#f87171" : "var(--gold-accent)";
  }

  const warnEl = document.getElementById("modal-manage-det-warning");
  if (warnEl) {
    warnEl.style.display = totalPD > maxPD ? "block" : "none";
    if (totalPD > maxPD) {
      warnEl.textContent = `⚠️ Presupuesto excedido: Tu lista acumula ${totalPD} PD, pero el formato ${formatName} permite un máximo de ${maxPD} PD.`;
    }
  }

  const summaryEl = document.getElementById("modal-manage-det-footer-summary");
  if (summaryEl) {
    summaryEl.textContent = `${activeList.detachmentIds.length} destacamento(s) seleccionado(s) (${totalPD} de ${maxPD} PD)`;
  }

  const container = document.getElementById("manage-detachments-list-container");
  if (!container) return;

  const query = normalizeText(manageDetSearchQuery);
  const filtered = WH40K_DATA.detachments.filter(d => {
    if (!query) return true;
    return normalizeText(d.name).includes(query) ||
           normalizeText(d.originalName).includes(query) ||
           normalizeText(d.ruleName).includes(query) ||
           normalizeText(d.ruleDesc).includes(query) ||
           normalizeText(d.category).includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 24px; color: var(--text-muted);">
        No se encontraron destacamentos que coincidan con "${manageDetSearchQuery}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(det => {
    const isSelected = activeList.detachmentIds.includes(det.id);
    const pd = getDetachmentPD(det);
    const isDA = det.category === "dark_angels" || det.id === "inner_circle" || det.id === "wrath_of_the_rock" || det.id === "darkflight_pursuit" || det.id === "company_of_hunters" || det.id === "unforgiven_task_force";
    const catLabel = isDA ? "Ángeles Oscuros" : "Adeptus Astartes";

    return `
      <div class="manage-det-item ${isSelected ? 'selected' : ''}" onclick="toggleDetachmentInActiveList('${det.id}')">
        <input type="checkbox" class="manage-det-checkbox" ${isSelected ? 'checked' : ''} onclick="event.stopPropagation(); toggleDetachmentInActiveList('${det.id}')" aria-label="Seleccionar ${det.name}">
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <strong style="color: ${isSelected ? 'var(--gold-accent)' : 'var(--text-main)'}; font-size: 0.95rem;">
                ${det.name}
              </strong>
              <button type="button" class="btn-gothic-secondary" onclick="event.stopPropagation(); openDetachmentEditor('${det.id}')" style="padding: 1px 5px; font-size: 0.72rem; color: var(--gold-accent);" title="Editar reglas y mejoras de este destacamento">✏️</button>
              <span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">(${det.originalName})</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 0.7rem; padding: 2px 6px; border-radius: 4px; background: rgba(0,0,0,0.4); color: ${isDA ? 'var(--caliban-bright)' : '#93c5fd'}; border: 1px solid rgba(255,255,255,0.1);">
                ${catLabel}
              </span>
              <span class="det-badge dp-badge" style="font-size: 0.75rem; padding: 2px 8px;">
                ${det.commandPoints || pd + ' PD'}
              </span>
            </div>
          </div>
          <div style="font-size: 0.8rem; color: var(--deathwing-bone); margin-top: 6px; line-height: 1.35;">
            <strong style="color: #fff;">${det.ruleName}:</strong> ${det.ruleDesc}
          </div>
          <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 5px; display: flex; gap: 12px;">
            <span>🛡️ ${det.enhancements ? det.enhancements.length : 0} mejoras</span>
            <span>⚡ Estratagemas disponibles en batalla</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderArmyValidationBanner(activeList) {
  const container = document.getElementById("army-validation-container");
  if (!container) return;

  if (typeof ArmyValidator === "undefined") {
    container.innerHTML = "";
    return;
  }

  const result = ArmyValidator.validateList(activeList, WH40K_DATA.datasheets, WH40K_DATA.detachments);
  if (result.isValid && result.warningsCount === 0) {
    container.innerHTML = `
      <div style="background: rgba(34, 197, 94, 0.12); border: 1px solid var(--caliban-bright); border-radius: var(--radius-sm); padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1.2rem;">🛡️</span>
          <div>
            <strong style="color: var(--caliban-bright); font-size: 0.85rem;">Lista 100% Válida para Torneo (11ª Edición / WTC)</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Cumple todas las restricciones: Warlord, Héroes Épicos únicos, regla de 3 y mejoras.</div>
          </div>
        </div>
        <span style="font-size: 0.72rem; color: var(--caliban-bright); font-weight: 700; background: rgba(34, 197, 94, 0.2); padding: 2px 8px; border-radius: 4px;">OK</span>
      </div>
    `;
    return;
  }

  // Si hay errores o advertencias
  const errorItems = result.issues.filter(i => i.type === "error");
  const warnItems = result.issues.filter(i => i.type === "warning");

  const borderCol = errorItems.length > 0 ? "#ef4444" : "#f59e0b";
  const bgCol = errorItems.length > 0 ? "rgba(239, 68, 68, 0.12)" : "rgba(245, 158, 11, 0.12)";
  const titleCol = errorItems.length > 0 ? "#f87171" : "var(--gold-accent)";

  container.innerHTML = `
    <div style="background: ${bgCol}; border: 1px solid ${borderCol}; border-radius: var(--radius-sm); padding: 12px 14px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
        <div style="display: flex; align-items: center; gap: 6px;">
          <span style="font-size: 1.1rem;">⚠️</span>
          <strong style="color: ${titleCol}; font-size: 0.88rem;">
            Auditoría de Lista: ${errorItems.length} infraccion${errorItems.length === 1 ? '' : 'es'}, ${warnItems.length} aviso${warnItems.length === 1 ? '' : 's'}
          </strong>
        </div>
        <span style="font-size: 0.72rem; color: #fff; background: ${errorItems.length > 0 ? 'rgba(239, 68, 68, 0.4)' : 'rgba(245, 158, 11, 0.4)'}; padding: 2px 8px; border-radius: 4px; font-weight: 700;">
          ${errorItems.length > 0 ? 'NO REGLAMENTARIA' : 'AVISO'}
        </span>
      </div>
      <ul style="margin: 0; padding-left: 20px; font-size: 0.78rem; line-height: 1.45; color: var(--deathwing-bone);">
        ${errorItems.map(i => `<li style="color: #fca5a5;"><strong style="color: #f87171;">[Regla]:</strong> ${escapeHtml(i.message)}</li>`).join("")}
        ${warnItems.map(i => `<li style="color: #fde68a;"><strong style="color: #f59e0b;">[Aviso]:</strong> ${escapeHtml(i.message)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function runArmyValidationAndNotify() {
  const activeList = getActiveArmyList();
  if (!activeList || typeof ArmyValidator === "undefined") return;

  const result = ArmyValidator.validateList(activeList, WH40K_DATA.datasheets, WH40K_DATA.detachments);
  if (result.isValid && result.warningsCount === 0) {
    showBattleToast("¡Lista auditada con éxito! Cumple todas las restricciones oficiales de 11ª Edición.");
  } else if (result.isValid) {
    showBattleToast(`Lista legal con ${result.warningsCount} advertencia(s) menor(es). Revisa el panel superior.`);
  } else {
    showBattleToast(`⚠️ Lista NO reglamentaria: Se detectaron ${result.errorsCount} infracciones.`);
  }
  renderArmyValidationBanner(activeList);
}

// --------------------------------------------------------------------------
// RENDERIZADO DEL ARMY BUILDER
// --------------------------------------------------------------------------

function renderArmyBuilder() {
  const activeList = getActiveArmyList();
  if (!activeList) return;
  
  // Rellenar cabecera de la lista
  const nameInput = document.getElementById("army-name-input");
  if (nameInput) nameInput.value = activeList.name;
  
  const pointsSelect = document.getElementById("army-points-limit");
  if (pointsSelect) pointsSelect.value = activeList.pointsLimit;
  
  const detSelect = document.getElementById("army-detachment-select");
  if (detSelect) detSelect.value = activeList.detachmentId;

  // Actualizar contador y chips de Multi-Destacamento
  const countBadge = document.getElementById("count-selected-dets");
  if (countBadge) countBadge.textContent = (activeList.detachmentIds || []).length;

  const chipsContainer = document.getElementById("army-selected-detachments-chips");
  if (chipsContainer) {
    const activeDets = (activeList.detachmentIds || []).map(id => WH40K_DATA.detachments.find(d => d.id === id)).filter(Boolean);
    if (activeDets.length === 0) {
      chipsContainer.innerHTML = `<span style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">Sin destacamento</span>`;
    } else {
      chipsContainer.innerHTML = activeDets.map(det => `
        <div class="detachment-chip" data-id="${det.id}">
          <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; min-width: 0;">
            <span style="font-size: 0.85rem;">🦅</span>
            <span class="detachment-chip-name" title="${det.name} (${det.originalName})">${det.name}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
            <span class="det-badge dp-badge" style="font-size: 0.7rem; padding: 2px 6px;">${det.commandPoints || getDetachmentPD(det) + ' PD'}</span>
            <button type="button" class="btn-remove-det" onclick="removeDetachmentFromActiveList('${det.id}')" title="Quitar destacamento de la lista">✕</button>
          </div>
        </div>
      `).join('');
    }
  }

  // Rellenar selector de "Añadir otro destacamento" con los no seleccionados
  const addSelect = document.getElementById("army-add-detachment-select");
  if (addSelect) {
    const unselected = WH40K_DATA.detachments.filter(d => !(activeList.detachmentIds || []).includes(d.id));
    addSelect.innerHTML = `<option value="">+ Añadir otro destacamento...</option>` +
      unselected.map(d => `<option value="${d.id}">${d.name} [${d.commandPoints || getDetachmentPD(d) + ' PD'}]</option>`).join('');
  }

  // Actualizar medidor de Puntos de Destacamento (PD)
  const totalPD = calculateListDetachmentPoints(activeList);
  const maxPD = getMaxDetachmentPoints(activeList.pointsLimit);
  const meterPDEl = document.getElementById("meter-detachment-points");
  if (meterPDEl) {
    meterPDEl.textContent = `${totalPD} / ${maxPD} PD`;
    meterPDEl.style.color = totalPD > maxPD ? "#f87171" : "var(--caliban-bright)";
  }

  const meterPDFillEl = document.getElementById("meter-pd-fill");
  if (meterPDFillEl) {
    const percentPD = Math.min((totalPD / maxPD) * 100, 100);
    meterPDFillEl.style.width = `${percentPD}%`;
    meterPDFillEl.classList.toggle("over-budget", totalPD > maxPD);
  }

  const pdWarningEl = document.getElementById("pd-budget-warning");
  if (pdWarningEl) {
    if (totalPD > maxPD) {
      pdWarningEl.style.display = "block";
      pdWarningEl.textContent = `⚠️ Límite de PD superado: ${totalPD} PD asignados de ${maxPD} PD permitidos (${getFormatNameByPoints(activeList.pointsLimit)}).`;
    } else {
      pdWarningEl.style.display = "none";
    }
  }

  // Renderizar las reglas acumuladas de TODOS los destacamentos seleccionados
  const detBannerEl = document.getElementById("detachment-rule-banner");
  if (detBannerEl) {
    const activeDets = (activeList.detachmentIds || []).map(id => WH40K_DATA.detachments.find(d => d.id === id)).filter(Boolean);
    if (activeDets.length === 0) {
      detBannerEl.innerHTML = `<div style="font-size: 0.8rem; color: var(--text-muted); font-style: italic;">No hay destacamentos seleccionados.</div>`;
    } else {
      detBannerEl.innerHTML = activeDets.map(det => `
        <div class="detachment-rule-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
            <h5 style="margin: 0; font-family: var(--font-serif); font-size: 0.95rem; color: var(--gold-primary);">
              🦅 ${det.name} <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-sans); font-weight: normal;">(${det.originalName})</span>
            </h5>
            <span class="det-badge dp-badge" style="font-size: 0.72rem; padding: 2px 7px;">${det.commandPoints || getDetachmentPD(det) + ' PD'}</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--deathwing-bone); margin-top: 4px; line-height: 1.35;">
            <strong style="color: #fff;">${det.ruleName}:</strong> ${det.ruleDesc}
          </div>
        </div>
      `).join('');
    }
  }

  // Calcular puntos totales de la lista
  const currentPoints = calculateListPoints(activeList);
  const maxPoints = activeList.pointsLimit;
  
  const currentPtsEl = document.getElementById("meter-current-points");
  const maxPtsEl = document.getElementById("meter-max-points");
  const meterFillEl = document.getElementById("meter-bar-fill");
  
  if (currentPtsEl) currentPtsEl.textContent = `${currentPoints} pts`;
  if (maxPtsEl) maxPtsEl.textContent = `${maxPoints} pts`;
  
  const percent = Math.min((currentPoints / maxPoints) * 100, 100);
  if (meterFillEl) {
    meterFillEl.style.width = `${percent}%`;
    meterFillEl.classList.toggle("over-budget", currentPoints > maxPoints);
  }
  
  // Renderizar banner de auditoría y validación de reglas (11ª Ed / WTC)
  renderArmyValidationBanner(activeList);

  // Renderizar unidades
  const container = document.getElementById("army-units-list-container");
  if (!container) return;
  
  if (activeList.units.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-muted); background: var(--bg-surface); border-radius: var(--radius-md);">
        <p>No hay unidades en esta lista de combate.</p>
        <button class="btn-gothic" onclick="openAddUnitToArmyModal()" style="margin-top: 12px;">+ Añadir Unidad</button>
      </div>`;
    return;
  }
  
  container.innerHTML = activeList.units.map((unitInstance, idx) => {
    const ds = WH40K_DATA.datasheets.find(d => d.id === unitInstance.datasheetId);
    if (!ds) return '';
    
    // Puntos
    const pointsOpt = ds.pointsOptions.find(p => p.models === unitInstance.modelsCount) || ds.pointsOptions[0];
    let unitTotalPts = pointsOpt ? pointsOpt.points : 0;
    
    // Mejora (acumulable de cualquiera de los destacamentos activos)
    let enhName = "";
    if (unitInstance.enhancementId) {
      const found = findEnhancementInActiveList(activeList, unitInstance.enhancementId);
      if (found) {
        unitTotalPts += found.enhancement.points;
        enhName = ` + ${found.enhancement.name} (${found.enhancement.points} pts)`;
      }
    }
    
    // Cotejo con inventario real del usuario
    const collectionMatches = AppState.collection.filter(c => c.datasheetId === ds.id);
    let matchBadge = "";
    const totalOwned = collectionMatches.reduce((acc, c) => acc + c.count, 0);
    const paintedOwned = collectionMatches.filter(c => c.status === "battle" || c.status === "parade").reduce((acc, c) => acc + c.count, 0);
    
    if (paintedOwned >= unitInstance.modelsCount) {
      matchBadge = `<span class="unit-inventory-status status-match-full">🟢 En vitrina (${paintedOwned}/${unitInstance.modelsCount} pintadas)</span>`;
    } else if (totalOwned >= unitInstance.modelsCount) {
      matchBadge = `<span class="unit-inventory-status status-match-unpainted">🟡 En posesión (${totalOwned} montadas/sin pintar)</span>`;
    } else {
      matchBadge = `<span class="unit-inventory-status status-match-none">🔴 No posees suficientes (${totalOwned}/${unitInstance.modelsCount})</span>`;
    }
    
    // Dropdown de líderes asignables (con coincidencia difusa bilingüe por nombre y originalName)
    let leaderAttachHtml = "";
    if (ds.keywords.includes("PERSONAJE") && !ds.keywords.includes("MONSTRUO") && ds.leaderOf.length > 0) {
      const eligibleUnits = activeList.units.filter(u => {
        if (u.instanceId === unitInstance.instanceId) return false;
        const targetDs = WH40K_DATA.datasheets.find(d => d.id === u.datasheetId);
        if (!targetDs) return false;

        return ds.leaderOf.some(allowed => {
          const cleanAllowed = allowed.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
          const cleanTarget = targetDs.name.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
          const cleanOrig = (targetDs.originalName || "").toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
          return cleanAllowed.includes(cleanTarget) || cleanTarget.includes(cleanAllowed) || (cleanOrig && cleanAllowed.includes(cleanOrig));
        });
      });
      
      leaderAttachHtml = `
        <div style="margin-top: 8px;">
          <label style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Unir como Líder a Escuadra:</label>
          <select class="leader-attach-picker" onchange="attachLeaderToUnit('${unitInstance.instanceId}', this.value)">
            <option value="">-- Sin Escuadra Escolta --</option>
            ${eligibleUnits.map(u => {
              const uDs = WH40K_DATA.datasheets.find(d => d.id === u.datasheetId);
              const isSelected = unitInstance.attachedToUnitInstanceId === u.instanceId;
              return `<option value="${u.instanceId}" ${isSelected ? 'selected' : ''}>Escolta: ${uDs.name} (${u.modelsCount} minis)</option>`;
            }).join('')}
          </select>
        </div>
      `;
    }
    
    // Selector de mejora agrupado por destacamentos activos (solo personajes no épicos)
    let enhPickerHtml = "";
    const activeDets = (activeList.detachmentIds || []).map(id => WH40K_DATA.detachments.find(d => d.id === id)).filter(Boolean);
    const detsWithEnh = activeDets.filter(d => Array.isArray(d.enhancements) && d.enhancements.length > 0);

    if (ds.keywords.includes("PERSONAJE") && !ds.isEpicHero && detsWithEnh.length > 0) {
      enhPickerHtml = `
        <div style="margin-top: 8px;">
          <label style="font-size: 0.7rem; text-transform: uppercase; color: var(--gold-primary); font-weight: 700;">Mejora de Destacamento (acumuladas):</label>
          <select class="enhancement-picker form-control-gothic" onchange="setUnitEnhancement('${unitInstance.instanceId}', this.value)" style="width: 100%; font-size: 0.8rem; padding: 4px 8px;">
            <option value="">-- Ninguna Mejora --</option>
            ${detsWithEnh.map(det => `
              <optgroup label="${det.name} (${det.commandPoints || getDetachmentPD(det) + ' PD'})">
                ${det.enhancements.map(enh => `
                  <option value="${enh.id}" ${unitInstance.enhancementId === enh.id ? 'selected' : ''}>${enh.name} (+${enh.points} pts)</option>
                `).join('')}
              </optgroup>
            `).join('')}
          </select>
        </div>
      `;
    }
    
    // Selector de tamaño de unidad
    let sizeSelectorHtml = "";
    if (ds.pointsOptions.length > 1) {
      sizeSelectorHtml = `
        <select onchange="setUnitModelsCount('${unitInstance.instanceId}', parseInt(this.value, 10))" style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-subtle); color: #fff; border-radius: 4px; padding: 2px 6px; font-size: 0.8rem;">
          ${ds.pointsOptions.map(opt => `
            <option value="${opt.models}" ${unitInstance.modelsCount === opt.models ? 'selected' : ''}>${opt.models} minis (${opt.points} pts)</option>
          `).join('')}
        </select>
      `;
    }

    const hasCustomAlias = unitInstance.customName && unitInstance.customName !== ds.name;
    const displayName = hasCustomAlias ? unitInstance.customName : ds.name;

    let wargearSummaryHtml = "";
    if (unitInstance.selectedWeapons && unitInstance.selectedWeapons.length > 0) {
      wargearSummaryHtml = `
        <div style="margin-top: 6px; display: flex; flex-wrap: wrap; gap: 4px; align-items: center;">
          <span style="font-size: 0.7rem; color: var(--text-muted); font-weight: 600;">⚔️ Equipo:</span>
          ${unitInstance.selectedWeapons.map(w => {
            const isRanged = (ds.rangedWeapons || []).some(rw => rw.name === w);
            const tagClass = isRanged ? 'ranged' : 'melee';
            return `<span class="wargear-tag ${tagClass}" style="font-size: 0.68rem; padding: 1px 6px;">${escapeHtml(w)}</span>`;
          }).join('')}
        </div>
      `;
    }

    return `
      <div class="army-unit-card ${unitInstance.isWarlord ? 'is-warlord' : ''}">
        <div class="army-unit-top">
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <h4 style="font-family: var(--font-serif); font-size: 1.15rem; color: var(--text-main); margin: 0;">
              ${escapeHtml(displayName)}
              ${hasCustomAlias ? `<span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-sans); font-weight: normal; margin-left: 6px;">(${escapeHtml(ds.name)})</span>` : ''}
            </h4>
            ${matchBadge}
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            ${sizeSelectorHtml}
            <span class="points-badge">${unitTotalPts} pts</span>
            <button class="btn-gothic-secondary" style="padding: 2px 8px; font-size: 0.75rem; color: #f87171;" onclick="removeUnitFromArmy('${unitInstance.instanceId}')">✕</button>
          </div>
        </div>
        
        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-top: 4px;">
          ${ds.keywords.includes("PERSONAJE") ? `
            <button class="warlord-toggle-btn ${unitInstance.isWarlord ? 'active' : ''}" onclick="setUnitAsWarlord('${unitInstance.instanceId}')">
              👑 ${unitInstance.isWarlord ? 'Señor de la Guerra (Warlord)' : 'Designar Warlord'}
            </button>
          ` : ''}
          <span style="font-size: 0.75rem; color: var(--text-muted);">${ds.role} • ${ds.wing}</span>
        </div>
        
        ${wargearSummaryHtml}
        ${enhPickerHtml}
        ${leaderAttachHtml}
      </div>
    `;
  }).join('');
}

function openAddUnitToArmyModal() {
  const modal = document.getElementById("add-unit-to-army-modal");
  if (!modal) return;
  
  const container = document.getElementById("army-modal-unit-selector");
  if (container) {
    container.innerHTML = WH40K_DATA.datasheets.map(ds => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 6px; border: 1px solid var(--border-subtle);">
        <div>
          <strong style="color: var(--text-main);">${ds.name}</strong>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${ds.role} • ${ds.wing}</div>
        </div>
        <button class="btn-gothic" style="font-size: 0.75rem; padding: 5px 12px;" onclick="addDatasheetToActiveList('${ds.id}')">
          + Añadir (${ds.pointsOptions[0].points} pts)
        </button>
      </div>
    `).join('');
  }
  
  modal.classList.add("active");
}

function closeAddUnitToArmyModal() {
  const modal = document.getElementById("add-unit-to-army-modal");
  if (modal) modal.classList.remove("active");
}

function addDatasheetToActiveList(datasheetId) {
  const activeList = getActiveArmyList();
  const ds = WH40K_DATA.datasheets.find(d => d.id === datasheetId);
  if (!activeList || !ds) return;
  
  const newUnit = {
    instanceId: "u_" + Date.now(),
    datasheetId: ds.id,
    customName: ds.name,
    selectedWeapons: [],
    loadoutNotes: "",
    modelsCount: ds.pointsOptions[0].models,
    isWarlord: activeList.units.length === 0 && ds.keywords.includes("PERSONAJE"),
    enhancementId: null,
    attachedToUnitInstanceId: null
  };
  
  activeList.units.push(newUnit);
  saveToStorage();
  renderArmyBuilder();
  closeAddUnitToArmyModal();
}

function removeUnitFromArmy(instanceId) {
  const activeList = getActiveArmyList();
  if (!activeList) return;
  
  activeList.units = activeList.units.filter(u => u.instanceId !== instanceId);
  saveToStorage();
  renderArmyBuilder();
}

function setUnitModelsCount(instanceId, count) {
  const activeList = getActiveArmyList();
  const unit = activeList.units.find(u => u.instanceId === instanceId);
  if (unit) {
    unit.modelsCount = count;
    saveToStorage();
    renderArmyBuilder();
  }
}

function setUnitAsWarlord(instanceId) {
  const activeList = getActiveArmyList();
  activeList.units.forEach(u => {
    u.isWarlord = (u.instanceId === instanceId);
  });
  saveToStorage();
  renderArmyBuilder();
}

function setUnitEnhancement(instanceId, enhancementId) {
  const activeList = getActiveArmyList();
  const unit = activeList.units.find(u => u.instanceId === instanceId);
  if (unit) {
    unit.enhancementId = enhancementId || null;
    saveToStorage();
    renderArmyBuilder();
  }
}

function attachLeaderToUnit(leaderInstanceId, bodyguardInstanceId) {
  const activeList = getActiveArmyList();
  const leader = activeList.units.find(u => u.instanceId === leaderInstanceId);
  if (leader) {
    leader.attachedToUnitInstanceId = bodyguardInstanceId || null;
    saveToStorage();
    renderArmyBuilder();
  }
}

function exportActiveListTournamentText() {
  const activeList = getActiveArmyList();
  if (!activeList) return;
  
  const activeDets = (activeList.detachmentIds || []).map(id => WH40K_DATA.detachments.find(d => d.id === id)).filter(Boolean);
  const totalPD = calculateListDetachmentPoints(activeList);
  const maxPD = getMaxDetachmentPoints(activeList.pointsLimit);
  const totalPts = calculateListPoints(activeList);
  const detListStr = activeDets.map(d => `${d.name} [${d.commandPoints || getDetachmentPD(d) + ' PD'}]`).join(' + ') || "Ninguno";
  
  let text = `========================================================\n`;
  text += `FORMATO OFICIAL TORNEO: ÁNGELES OSCUROS (11ª EDICIÓN)\n`;
  text += `EJÉRCITO: ${activeList.name}\n`;
  text += `PUNTOS TOTALES: ${totalPts} / ${activeList.pointsLimit} pts\n`;
  text += `DESTACAMENTOS (${totalPD}/${maxPD} PD): ${detListStr}\n`;
  activeDets.forEach(d => {
    text += `   • Regla "${d.ruleName}": ${d.ruleDesc}\n`;
  });
  text += `REGLA DE FACCIÓN: Juramento de Momento (Oath of Moment)\n`;
  text += `========================================================\n\n`;
  
  text += `--- UNIDADES Y PERSONAJES ---\n`;
  activeList.units.forEach((u, i) => {
    const ds = WH40K_DATA.datasheets.find(d => d.id === u.datasheetId);
    if (!ds) return;
    
    const pointsOpt = ds.pointsOptions.find(p => p.models === u.modelsCount) || ds.pointsOptions[0];
    let unitPts = pointsOpt ? pointsOpt.points : 0;
    
    let enhText = "";
    if (u.enhancementId) {
      const found = findEnhancementInActiveList(activeList, u.enhancementId);
      if (found) {
        unitPts += found.enhancement.points;
        enhText = `MEJORA: ${found.enhancement.name} (+${found.enhancement.points} pts) [${found.detachment.name}]`;
      }
    }
    
    let leaderText = "";
    if (u.attachedToUnitInstanceId) {
      const bUnit = activeList.units.find(x => x.instanceId === u.attachedToUnitInstanceId);
      if (bUnit) {
        const bDs = WH40K_DATA.datasheets.find(d => d.id === bUnit.datasheetId);
        leaderText = ` [Líder asignado a: ${bDs ? bDs.name : 'Escuadra'}]`;
      }
    }
    
    text += `${i + 1}. ${ds.name} (${u.modelsCount} miniaturas) - ${unitPts} pts\n`;
    if (u.isWarlord) text += `   • SEÑOR DE LA GUERRA (WARLORD)\n`;
    if (enhText) text += `   • ${enhText}\n`;
    if (leaderText) text += `   • ${leaderText}\n`;
    text += `   • Atributos: M:${ds.stats.m} R:${ds.stats.r} Sv:${ds.stats.sv} Inv:${ds.stats.inv} H:${ds.stats.h} L:${ds.stats.l} CO:${ds.stats.co}\n\n`;
  });
  
  // Copiar al portapapeles con fallback seguro
  if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
    navigator.clipboard.writeText(text).then(() => {
      alert("¡Lista copiada al portapapeles en Formato Oficial de Torneo (WTC / BCP)!");
    }).catch(() => {
      alert(text);
    });
  } else {
    alert(text);
  }
}

// ==========================================================================
// MÓDULO 4: COGITADOR DE BATALLA (MODO PARTIDA EN VIVO)
// ==========================================================================
function initBattleTracker() {
  const roundEl = document.getElementById("hud-round-num");
  const cpEl = document.getElementById("hud-cp-val");
  const oathInput = document.getElementById("hud-oath-target-input");
  
  if (oathInput) {
    oathInput.addEventListener("input", (e) => {
      AppState.battle.oathTarget = e.target.value;
      saveToStorage();
    });
  }
}

function adjustRound(delta) {
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot(`Ronda ${delta > 0 ? '+' : ''}${delta}`);
  AppState.battle.round = Math.max(1, Math.min(5, AppState.battle.round + delta));
  saveToStorage();
  renderBattleTracker();
}

function adjustCP(delta) {
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot(`Puntos de Mando ${delta > 0 ? '+' : ''}${delta} CP`);
  AppState.battle.commandPoints = Math.max(0, AppState.battle.commandPoints + delta);
  saveToStorage();
  renderBattleTracker();
}

function adjustScore(target, delta) {
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot(`Puntos de Victoria (${target}) ${delta > 0 ? '+' : ''}${delta} VP`);
  if (target === "p-prim") AppState.battle.playerVPPrimary = Math.max(0, AppState.battle.playerVPPrimary + delta);
  if (target === "p-sec") AppState.battle.playerVPSecondary = Math.max(0, AppState.battle.playerVPSecondary + delta);
  if (target === "o-prim") AppState.battle.opponentVPPrimary = Math.max(0, AppState.battle.opponentVPPrimary + delta);
  if (target === "o-sec") AppState.battle.opponentVPSecondary = Math.max(0, AppState.battle.opponentVPSecondary + delta);
  saveToStorage();
  renderBattleTracker();
}

function renderBattleTracker() {
  const roundEl = document.getElementById("hud-round-num");
  const cpEl = document.getElementById("hud-cp-val");
  const pTotalEl = document.getElementById("hud-player-total-vp");
  const oTotalEl = document.getElementById("hud-opp-total-vp");
  const pPrimEl = document.getElementById("hud-p-prim-val");
  const pSecEl = document.getElementById("hud-p-sec-val");
  const oPrimEl = document.getElementById("hud-o-prim-val");
  const oSecEl = document.getElementById("hud-o-sec-val");
  const oathInput = document.getElementById("hud-oath-target-input");
  
  if (roundEl) roundEl.textContent = `RONDA ${AppState.battle.round} / 5`;
  if (cpEl) cpEl.textContent = AppState.battle.commandPoints;
  
  const pTotal = AppState.battle.playerVPPrimary + AppState.battle.playerVPSecondary;
  const oTotal = AppState.battle.opponentVPPrimary + AppState.battle.opponentVPSecondary;
  
  if (pTotalEl) pTotalEl.textContent = pTotal;
  if (oTotalEl) oTotalEl.textContent = oTotal;
  if (pPrimEl) pPrimEl.textContent = AppState.battle.playerVPPrimary;
  if (pSecEl) pSecEl.textContent = AppState.battle.playerVPSecondary;
  if (oPrimEl) oPrimEl.textContent = AppState.battle.opponentVPPrimary;
  if (oSecEl) oSecEl.textContent = AppState.battle.opponentVPSecondary;
  if (oathInput && AppState.battle.oathTarget) oathInput.value = AppState.battle.oathTarget;

  // Actualizar indicadores de turno activo y fase táctica
  const currentTurn = AppState.battle.turn || "player";
  const currentPhase = AppState.battle.phase || "command";

  const btnTurnPlayer = document.getElementById("btn-turn-player");
  const btnTurnOpponent = document.getElementById("btn-turn-opponent");
  const turnBadge = document.getElementById("hud-turn-indicator-badge");

  if (btnTurnPlayer) btnTurnPlayer.classList.toggle("active", currentTurn === "player");
  if (btnTurnOpponent) btnTurnOpponent.classList.toggle("active", currentTurn === "opponent");
  if (turnBadge) {
    turnBadge.textContent = currentTurn === "player" ? "🔵 Mi Turno (Jugador)" : "🔴 Turno Enemigo (Oponente)";
    turnBadge.style.color = currentTurn === "player" ? "#38bdf8" : "#f87171";
  }

  const phaseBtns = document.querySelectorAll("#battle-phases-btn-group .battle-phase-btn");
  phaseBtns.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-bphase") === currentPhase);
  });

  // Renderizar estratagemas disponibles en esta fase y turno
  renderBattleStratagems();
  
  // Renderizar medidores tácticos de escuadras, bajas y heridas de la lista activa
  const woundsContainer = document.getElementById("battle-wounds-tracker-container");
  const activeList = getActiveArmyList();
  if (woundsContainer && activeList && Array.isArray(activeList.units)) {
    const processedInstanceIds = new Set();
    const renderedBlocks = [];

    activeList.units.forEach(u => {
      if (processedInstanceIds.has(u.instanceId)) return;

      // Comprobar si esta unidad es un Líder asignado a otra escuadra
      if (u.attachedToUnitInstanceId) {
        const bgUnit = activeList.units.find(x => x.instanceId === u.attachedToUnitInstanceId);
        if (bgUnit) {
          // Obtener todos los líderes que comandan esta misma escolta
          const allLeaders = activeList.units.filter(x => x.attachedToUnitInstanceId === bgUnit.instanceId);
          allLeaders.forEach(l => processedInstanceIds.add(l.instanceId));
          processedInstanceIds.add(bgUnit.instanceId);

          renderedBlocks.push(renderAttachedCombatGroupHtml(allLeaders, bgUnit, activeList));
          return;
        }
      }

      // Comprobar si esta unidad es una Escolta con líderes asignados
      const attachedLeaders = activeList.units.filter(x => x.attachedToUnitInstanceId === u.instanceId);
      if (attachedLeaders.length > 0) {
        attachedLeaders.forEach(l => processedInstanceIds.add(l.instanceId));
        processedInstanceIds.add(u.instanceId);

        renderedBlocks.push(renderAttachedCombatGroupHtml(attachedLeaders, u, activeList));
        return;
      }

      // Unidad independiente (sin escolta ni líderes unidos)
      processedInstanceIds.add(u.instanceId);
      renderedBlocks.push(renderBattleUnitCardHtml(u, activeList, null));
    });

    woundsContainer.innerHTML = renderedBlocks.join('');
  }

  // Renderizar briefing de Mazo Pariah Nexus 2026/2027
  renderPariahMissionBriefing();

  // Actualizar estado del botón Deshacer (Undo)
  const undoBtn = document.getElementById("btn-battle-undo");
  if (undoBtn && typeof BattleEnhancements !== "undefined") {
    // sincronizar si está disponible
  }
}

let isWakeLockActive = false;
function toggleScreenWakeLockBtn() {
  if (typeof BattleEnhancements === "undefined") return;
  if (!isWakeLockActive) {
    BattleEnhancements.requestScreenWakeLock();
    isWakeLockActive = true;
    showBattleToast("☀️ Pantalla activa bloqueada para la partida.");
  } else {
    BattleEnhancements.releaseScreenWakeLock();
    isWakeLockActive = false;
    showBattleToast("🌙 Ahorro de pantalla reactivado.");
  }
}

// --------------------------------------------------------------------------
// MÓDULO PARIAH NEXUS 2026-2027 INTERACTION HANDLERS
// --------------------------------------------------------------------------
function renderPariahMissionBriefing() {
  const briefingEl = document.getElementById("pariah-mission-briefing");
  const secondariesEl = document.getElementById("pariah-active-secondaries-container");
  if (!briefingEl || typeof PariahNexusDeck === "undefined") return;

  const state = PariahNexusDeck.getDeckState();
  briefingEl.innerHTML = `
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <span style="color: var(--gold-accent);"><strong>Despliegue:</strong> ${state.deployment.name}</span>
      <span style="color: var(--caliban-bright);"><strong>Primaria:</strong> ${state.primary.name}</span>
      <span style="color: #38bdf8;"><strong>Regla:</strong> ${state.rule.name}</span>
    </div>
    <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic;">
      ${state.primary.desc}
    </div>
  `;

  if (secondariesEl) {
    if (state.activeSecondaries.length === 0) {
      secondariesEl.innerHTML = `
        <div style="grid-column: 1 / -1; font-size: 0.75rem; color: var(--text-muted); font-style: italic; text-align: center; padding: 6px;">
          No hay cartas secundarias activas en mesa. Pulsa '🃏 Robar Táctica' para robar objetivos.
        </div>
      `;
    } else {
      secondariesEl.innerHTML = state.activeSecondaries.map(sec => `
        <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-left: 3px solid var(--gold-accent); border-radius: var(--radius-sm); padding: 8px 10px; display: flex; flex-direction: column; justify-content: space-between; gap: 6px;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 6px;">
              <strong style="color: var(--deathwing-bone); font-size: 0.82rem;">${sec.name}</strong>
              <span class="stratagem-cp-badge" style="font-size: 0.7rem; padding: 1px 5px;">${sec.vp} VP</span>
            </div>
            <div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 4px; line-height: 1.3;">
              ${sec.desc}
            </div>
          </div>
          <div style="display: flex; gap: 6px; justify-content: flex-end; margin-top: 4px;">
            <button class="btn-gothic-secondary" onclick="PariahNexusDeck.discardTacticalCard('${sec.id}', true); renderBattleTracker();" style="padding: 2px 6px; font-size: 0.68rem; color: #f87171;" title="Descartar al final del turno y ganar 1 CP">
              ✕ Descartar (+1 CP)
            </button>
            <button class="btn-gothic-primary" onclick="PariahNexusDeck.scoreSecondaryCard('${sec.id}', ${sec.vp});" style="padding: 2px 8px; font-size: 0.68rem;" title="Completar y puntuar">
              ✓ Puntuar (+${sec.vp} VP)
            </button>
          </div>
        </div>
      `).join("");
    }
  }
}

function generateRandomMissionSetup() {
  if (typeof PariahNexusDeck === "undefined") return;
  const m = PariahNexusDeck.drawRandomTournamentMission();
  showBattleToast(`¡Misión Pariah Nexus generada!: ${m.primary.name}`);
  renderPariahMissionBriefing();
}

function drawSecondaryTacticalCardUi() {
  if (typeof PariahNexusDeck === "undefined") return;
  const card = PariahNexusDeck.drawTacticalCard();
  if (card) {
    showBattleToast(`Has robado: ${card.name} (${card.vp} VP)`);
    renderPariahMissionBriefing();
  } else {
    showBattleToast("Ya tienes el máximo de 2 secundarias activas o se ha agotado el mazo.");
  }
}

function rollChargeDiceQuick() {
  if (typeof TacticalTools === "undefined") return;
  const res = TacticalTools.rollCharge(true);
  showBattleToast(res.text);
}

function rollSingleDiceQuick() {
  const d = Math.floor(Math.random() * 6) + 1;
  showBattleToast(`🎲 Resultado de 1D6: [${d}]`);
}

// --------------------------------------------------------------------------
// MÓDULO IMPORTADOR & COMPARTIR LISTAS
// --------------------------------------------------------------------------
function openImportArmyModal() {
  const m = document.getElementById("modal-import-army");
  if (m) {
    const area = document.getElementById("import-army-textarea");
    if (area) area.value = "";
    m.classList.add("active");
  }
}

function closeImportArmyModal() {
  const m = document.getElementById("modal-import-army");
  if (m) m.classList.remove("active");
}

function submitImportArmyText() {
  const area = document.getElementById("import-army-textarea");
  if (!area || typeof ArmyListImporter === "undefined") return;

  const res = ArmyListImporter.importFromText(area.value, WH40K_DATA.datasheets, WH40K_DATA.detachments);
  if (!res.success) {
    alert("Error importando lista: " + res.error);
    return;
  }

  AppState.armyLists.push(res.list);
  AppState.activeListId = res.list.id;
  saveToStorage();
  renderArmyBuilder();
  closeImportArmyModal();
  showBattleToast(`¡Lista '${res.list.name}' importada con éxito! (${res.count} unidades identificadas).`);
}

function shareActiveListViaUrl() {
  const activeList = getActiveArmyList();
  if (!activeList || typeof ArmyListImporter === "undefined") return;

  const url = ArmyListImporter.generateShareableUrl(activeList);
  if (url && navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showBattleToast("¡Enlace directo con la lista copiado al portapapeles!");
    }).catch(() => {
      prompt("Copia este enlace para compartir tu lista:", url);
    });
  } else if (url) {
    prompt("Copia este enlace para compartir tu lista:", url);
  }
}

// --------------------------------------------------------------------------
// MÓDULO RECETARIO DE PINTURA
// --------------------------------------------------------------------------
function openPaintRecipeModal(miniId) {
  const m = document.getElementById("modal-paint-recipe");
  const mini = AppState.collection.find(c => c.id === miniId);
  if (!m || !mini) return;

  const ds = WH40K_DATA.datasheets.find(d => d.id === mini.datasheetId);
  const titleEl = document.getElementById("recipe-mini-title");
  const textEl = document.getElementById("recipe-textarea");
  const hiddenId = document.getElementById("recipe-current-mini-id");

  if (titleEl) titleEl.textContent = `Miniatura: ${mini.customName || (ds ? ds.name : 'Unidad')}`;
  if (hiddenId) hiddenId.value = miniId;
  if (textEl && typeof TacticalTools !== "undefined") {
    textEl.value = TacticalTools.getPaintingRecipe(miniId);
  }

  m.classList.add("active");
}

function closePaintRecipeModal() {
  const m = document.getElementById("modal-paint-recipe");
  if (m) m.classList.remove("active");
}

function saveCurrentPaintRecipe() {
  const hiddenId = document.getElementById("recipe-current-mini-id");
  const textEl = document.getElementById("recipe-textarea");
  if (!hiddenId || !textEl || typeof TacticalTools === "undefined") return;

  TacticalTools.savePaintingRecipe(hiddenId.value, textEl.value.trim());
  showBattleToast("Receta de pintura guardada para esta escuadra.");
  closePaintRecipeModal();
}

/**
 * Renderiza un grupo combinado de combate (Líderes + Escuadra Escolta contiguos)
 */
function renderAttachedCombatGroupHtml(leaders, bodyguardUnit, activeList) {
  const bgDs = WH40K_DATA.datasheets.find(d => d.id === bodyguardUnit.datasheetId);
  const leaderDatasheets = leaders.map(l => WH40K_DATA.datasheets.find(d => d.id === l.datasheetId)).filter(Boolean);
  const leaderNames = leaderDatasheets.map(d => d.name).join(' & ') || 'Líder';
  const bgName = bgDs ? bgDs.name : 'Escuadra Escolta';

  // Verificar estado en vivo de la escolta
  const bgState = (AppState.battle && AppState.battle.unitStates) ? AppState.battle.unitStates[bodyguardUnit.instanceId] : null;
  const isEscortDestroyed = bgState && bgState.modelsAlive <= 0;

  // Renderizar las tarjetas contiguas: primero Líder(es), luego Escolta
  const leaderCardsHtml = leaders.map(l => renderBattleUnitCardHtml(l, activeList, {
    role: 'leader',
    bodyguardName: bgName,
    isEscortDestroyed: isEscortDestroyed
  })).join('');

  const bodyguardCardHtml = renderBattleUnitCardHtml(bodyguardUnit, activeList, {
    role: 'bodyguard',
    leaderNames: leaderNames
  });

  return `
    <div class="battle-attached-group">
      <div class="battle-attached-group-header">
        <div class="battle-attached-group-title">
          <span class="battle-attached-icon">🔗</span>
          <div style="min-width: 0;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <strong style="color: var(--gold-accent); font-family: var(--font-serif); font-size: 0.95rem;">
                UNIDAD COMBINADA: ${leaderNames} + ${bgName}
              </strong>
              <span class="battle-attached-synergy-pill" style="background: ${isEscortDestroyed ? 'rgba(239, 68, 68, 0.2)' : 'rgba(56, 189, 248, 0.15)'}; border-color: ${isEscortDestroyed ? '#ef4444' : '#38bdf8'}; color: ${isEscortDestroyed ? '#fca5a5' : '#bae6fd'};">
                ${isEscortDestroyed ? '💀 Escolta Eliminada (Líder Separado)' : '🛡️ Vínculo de Escolta Activo'}
              </span>
            </div>
            <div class="battle-attached-tactical-tip">
              ${isEscortDestroyed 
                ? '⚠️ La escolta ha sido destruida en combate. Los líderes ahora reciben las heridas directamente como unidades independientes.' 
                : '🛡️ Regla Oficial de Escolta: El daño se asigna primero a las miniaturas de la Escolta antes de herir al Líder.'}
            </div>
          </div>
        </div>
      </div>
      <div class="battle-attached-group-units">
        ${leaderCardsHtml}
        ${bodyguardCardHtml}
      </div>
    </div>
  `;
}

/**
 * Renderiza la tarjeta individual de una unidad en el Cogitador de Batalla
 */
function renderBattleUnitCardHtml(u, activeList, attachedInfo) {
  const ds = WH40K_DATA.datasheets.find(d => d.id === u.datasheetId);
  if (!ds) return '';
  
  const maxModels = u.modelsCount || 1;
  const woundsPerModel = parseInt(ds.stats.h) || 1;
  const ocPerModel = parseInt(ds.stats.co) || 0;
  
  // Inicializar estado de combate si no existe
  if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
  if (!AppState.battle.unitStates[u.instanceId]) {
    AppState.battle.unitStates[u.instanceId] = {
      modelsAlive: maxModels,
      currentModelWounds: woundsPerModel,
      isBattleShocked: false
    };
  }
  
  const uState = AppState.battle.unitStates[u.instanceId];
  const modelsAlive = uState.modelsAlive;
  const currentModelW = uState.currentModelWounds;
  const isBattleShocked = !!uState.isBattleShocked;
  const isDestroyed = modelsAlive <= 0;
  
  // Total de heridas de la escuadra
  const totalWoundsRemaining = modelsAlive > 0 ? ((modelsAlive - 1) * woundsPerModel + currentModelW) : 0;
  const totalWoundsInitial = maxModels * woundsPerModel;
  
  // Mitad de fuerza (Half-Strength) para chequeo de moral 10ª Edición
  const isHalfStrength = !isDestroyed && (
    maxModels > 1 
      ? (modelsAlive <= Math.floor(maxModels / 2)) 
      : (currentModelW <= Math.floor(woundsPerModel / 2))
  );
  
  // Control de Objetivo real
  const effectiveOC = isBattleShocked ? 0 : (modelsAlive * ocPerModel);
  
  // Pips visuales de miniaturas
  let pipsHtml = "";
  if (isDestroyed) {
    pipsHtml = `<div class="mini-pip dead">💀 Escuadra Eliminada (${maxModels} bajas)</div>`;
  } else {
    const fullModels = modelsAlive - (currentModelW < woundsPerModel ? 1 : 0);
    const pipsArr = [];
    
    for (let i = 0; i < fullModels; i++) {
      pipsArr.push(`<div class="mini-pip full" title="Miniatura intacta">🛡️ ${woundsPerModel}/${woundsPerModel} H</div>`);
    }
    if (currentModelW < woundsPerModel && modelsAlive > 0) {
      pipsArr.push(`<div class="mini-pip wounded" title="Miniatura herida actualmente">⚠️ ${currentModelW}/${woundsPerModel} H</div>`);
    }
    const deadModels = maxModels - modelsAlive;
    for (let i = 0; i < deadModels; i++) {
      pipsArr.push(`<div class="mini-pip dead" title="Baja">✕ Baja</div>`);
    }
    pipsHtml = pipsArr.join('');
  }
  
  const wingClass = ds.wing === "Ala de Muerte" ? "deathwing" : (ds.wing === "Ala de Cuervo" ? "ravenwing" : "green");

  // Distintivo de mejora asignada si existe
  let enhBadge = "";
  if (u.enhancementId) {
    const found = findEnhancementInActiveList(activeList, u.enhancementId);
    if (found) {
      enhBadge = `<span style="color: var(--gold-accent); font-weight: 600; font-size: 0.72rem;">🛡️ ${found.enhancement.name}</span>`;
    }
  }

  // Distintivo de rol en formación de escolta
  let attachedRoleBadge = "";
  let leaderOrphanAlert = "";
  if (attachedInfo) {
    if (attachedInfo.role === 'leader') {
      attachedRoleBadge = `<span class="badge-attached-role leader">👑 LÍDER (Unido a: ${attachedInfo.bodyguardName})</span>`;
      if (attachedInfo.isEscortDestroyed) {
        leaderOrphanAlert = `<div class="alert-leader-standalone">⚠️ Escolta eliminada: El Líder ahora combate como unidad independiente en el campo de batalla.</div>`;
      }
    } else if (attachedInfo.role === 'bodyguard') {
      attachedRoleBadge = `<span class="badge-attached-role bodyguard">🛡️ ESCOLTA (Protegiendo a: ${attachedInfo.leaderNames})</span>`;
    }
  }

  return `
    <div class="battle-unit-card ${isDestroyed ? 'is-destroyed' : ''} ${isBattleShocked ? 'is-shocked' : ''}">
      <div class="battle-unit-header battle-unit-header-clickable" onclick="openBattleUnitDatasheetModal('${ds.id}', '${u.instanceId}')" title="Pulsa para ver la Ficha Técnica completa (Datasheet)">
        <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; width: 100%; flex-wrap: wrap;">
          <div style="min-width: 0;">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="battle-unit-name" style="color: var(--text-main); font-weight: 700;">${ds.name}</span>
              <button type="button" class="btn-quick-view-datasheet" onclick="event.stopPropagation(); openBattleUnitDatasheetModal('${ds.id}', '${u.instanceId}')" title="Ver ficha técnica completa">
                📜 Ver Ficha
              </button>
              ${attachedRoleBadge}
            </div>
            <div class="battle-unit-sub" style="margin-top: 3px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <span class="wing-badge ${wingClass}" style="font-size: 0.68rem; padding: 1px 6px;">${ds.wing}</span>
              <span>• ${ds.role}</span>
              ${u.isWarlord ? '<span style="color: var(--gold-primary); font-weight: 700; font-size: 0.72rem;">👑 Warlord</span>' : ''}
              ${enhBadge}
            </div>
          </div>
          <div class="battle-unit-badges">
            <span class="badge-models-alive">${modelsAlive} / ${maxModels} Minis</span>
            <span class="badge-total-wounds">${totalWoundsRemaining} / ${totalWoundsInitial} H</span>
            <span class="badge-oc ${effectiveOC === 0 ? 'zero-oc' : ''}">CO: ${effectiveOC}</span>
          </div>
        </div>
      </div>
      
      ${leaderOrphanAlert}

      ${isHalfStrength ? `
        <div class="alert-half-strength">
          ⚠️ MITAD DE FUERZA (${modelsAlive}/${maxModels} minis): Requiere Chequeo de Moral al inicio de la Fase de Mando
        </div>
      ` : ''}
      
      ${isBattleShocked ? `
        <div class="alert-battleshocked">
          ⚡ ACOBARDADA / BATTLE-SHOCKED: Su Control de Objetivo cae a 0 y no puede usar Estratagemas
        </div>
      ` : ''}
      
      <!-- Pips de Miniaturas Vivas y Heridas -->
      <div class="squad-models-visual-row">
        ${pipsHtml}
      </div>
      
      <!-- Controles de Combate -->
      <div class="battle-controls-row">
        <!-- Control de Heridas por Miniatura -->
        <div class="control-subgroup">
          <span class="control-label">Heridas de Miniatura Activa:</span>
          <div class="stepper-group">
            <button class="step-btn" style="width: 32px; height: 32px; font-size: 0.85rem;" 
              onclick="damageUnitModel('${u.instanceId}', ${woundsPerModel})" 
              ${isDestroyed ? 'disabled style="opacity:0.4"' : ''} title="Asignar 1 herida de daño a la miniatura">-1 H</button>
            <span class="wound-active-val ${currentModelW < woundsPerModel ? 'is-hurt' : ''}">
              ${isDestroyed ? '0' : currentModelW} / ${woundsPerModel}
            </span>
            <button class="step-btn" style="width: 32px; height: 32px; font-size: 0.85rem;" 
              onclick="healUnitModel('${u.instanceId}', ${woundsPerModel})" 
              ${isDestroyed ? 'disabled style="opacity:0.4"' : ''} title="Curar 1 herida">+1 H</button>
          </div>
        </div>
        
        <!-- Control de Bajas Directas de Miniaturas -->
        <div class="control-subgroup">
          <span class="control-label">Bajas de la Escuadra:</span>
          <div class="stepper-group">
            <button class="step-btn btn-casualty" onclick="removeUnitCasualty('${u.instanceId}', ${woundsPerModel})" 
              ${isDestroyed ? 'disabled style="opacity:0.4"' : ''} title="Retirar 1 miniatura como baja directa">-1 Mini</button>
            <button class="step-btn btn-revive" onclick="reviveUnitCasualty('${u.instanceId}', ${maxModels}, ${woundsPerModel})" 
              ${modelsAlive >= maxModels ? 'disabled style="opacity:0.4"' : ''} title="Revivir 1 miniatura (Apotecario)">+1 Mini</button>
            <button class="step-btn" style="width: 28px; height: 28px; font-size: 0.75rem;" 
              onclick="resetUnitBattleState('${u.instanceId}', ${maxModels}, ${woundsPerModel})" title="Restaurar escuadra completa">↺</button>
          </div>
        </div>
        
        <!-- Botón de Acobardamiento / Battle-Shock -->
        <button class="btn-shock ${isBattleShocked ? 'active' : ''}" onclick="toggleUnitBattleShock('${u.instanceId}')" ${isDestroyed ? 'disabled' : ''}>
          ⚡ ${isBattleShocked ? 'Acobardada (CO 0)' : 'Moral OK'}
        </button>
      </div>
    </div>
  `;
}

function damageUnitModel(instanceId, woundsPerModel) {
  if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
  const state = AppState.battle.unitStates[instanceId];
  if (!state || state.modelsAlive <= 0) return;
  
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot("Herida infligida (-1 H)");
  state.currentModelWounds -= 1;
  if (state.currentModelWounds <= 0) {
    // La miniatura herida ha muerto y se retira como baja
    state.modelsAlive -= 1;
    if (state.modelsAlive > 0) {
      // Quedan miniaturas en la escuadra: la siguiente empieza con heridas completas
      state.currentModelWounds = woundsPerModel;
    } else {
      // Escuadra eliminada por completo
      state.modelsAlive = 0;
      state.currentModelWounds = 0;
    }
  }
  
  saveToStorage();
  renderBattleTracker();
}

function healUnitModel(instanceId, woundsPerModel) {
  if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
  const state = AppState.battle.unitStates[instanceId];
  if (!state || state.modelsAlive <= 0) return;
  
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot("Curar herida (+1 H)");
  state.currentModelWounds = Math.min(woundsPerModel, state.currentModelWounds + 1);
  saveToStorage();
  renderBattleTracker();
}

function removeUnitCasualty(instanceId, woundsPerModel) {
  if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
  const state = AppState.battle.unitStates[instanceId];
  if (!state || state.modelsAlive <= 0) return;
  
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot("Retirar baja directa (-1 Mini)");
  state.modelsAlive -= 1;
  if (state.modelsAlive > 0) {
    state.currentModelWounds = woundsPerModel;
  } else {
    state.modelsAlive = 0;
    state.currentModelWounds = 0;
  }
  
  saveToStorage();
  renderBattleTracker();
}

function reviveUnitCasualty(instanceId, maxModels, woundsPerModel) {
  if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
  const state = AppState.battle.unitStates[instanceId];
  if (!state) return;
  
  if (state.modelsAlive < maxModels) {
    if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot("Revivir miniatura (+1 Mini)");
    state.modelsAlive += 1;
    state.currentModelWounds = woundsPerModel;
    saveToStorage();
    renderBattleTracker();
  }
}

function toggleUnitBattleShock(instanceId) {
  if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
  const state = AppState.battle.unitStates[instanceId];
  if (!state) return;
  
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot(`Cambio moral (${state.isBattleShocked ? 'Recuperada' : 'Acobardada'})`);
  state.isBattleShocked = !state.isBattleShocked;
  saveToStorage();
  renderBattleTracker();
}

function resetUnitBattleState(instanceId, maxModels, woundsPerModel) {
  if (!AppState.battle.unitStates) AppState.battle.unitStates = {};
  if (typeof BattleEnhancements !== "undefined") BattleEnhancements.pushStateSnapshot("Restaurar escuadra completa");
  AppState.battle.unitStates[instanceId] = {
    modelsAlive: maxModels,
    currentModelWounds: woundsPerModel,
    isBattleShocked: false
  };
  saveToStorage();
  renderBattleTracker();
}

// ==========================================================================
// CONSULTA RÁPIDA DE FICHA TÉCNICA (DATASHEET) EN COGITADOR DE BATALLA
// ==========================================================================

function openBattleUnitDatasheetModal(datasheetId, instanceId) {
  const modal = document.getElementById("battle-datasheet-modal");
  if (!modal) return;

  const ds = WH40K_DATA.datasheets.find(d => d.id === datasheetId);
  if (!ds) return;

  const activeList = getActiveArmyList();
  const unitInstance = (activeList && activeList.units && instanceId)
    ? activeList.units.find(u => u.instanceId === instanceId)
    : null;

  const uState = (AppState.battle && AppState.battle.unitStates && instanceId)
    ? AppState.battle.unitStates[instanceId]
    : null;

  renderBattleUnitDatasheetModalContent(ds, unitInstance, uState);
  modal.classList.add("active");
}

function closeBattleUnitDatasheetModal() {
  const modal = document.getElementById("battle-datasheet-modal");
  if (modal) modal.classList.remove("active");
}

function renderBattleUnitDatasheetModalContent(ds, unitInstance, uState) {
  const titleEl = document.getElementById("modal-battle-ds-title");
  const subEl = document.getElementById("modal-battle-ds-sub");
  const wingBadgeEl = document.getElementById("modal-battle-ds-wing-badge");
  const roleBadgeEl = document.getElementById("modal-battle-ds-role-badge");
  const bodyEl = document.getElementById("modal-battle-ds-body");
  const footerActionsEl = document.getElementById("modal-battle-ds-footer-actions");

  if (!bodyEl) return;

  const wingClass = ds.wing === "Ala de Muerte" ? "deathwing" : (ds.wing === "Ala de Cuervo" ? "ravenwing" : "green");

  if (titleEl) {
    titleEl.textContent = ds.name;
  }

  if (subEl) {
    const orig = ds.originalName && ds.originalName !== ds.name ? ` (${ds.originalName})` : "";
    subEl.textContent = `${ds.role} • ${ds.wing}${orig} • Cogitador de Batalla`;
  }

  if (wingBadgeEl) {
    wingBadgeEl.className = `wing-badge ${wingClass}`;
    wingBadgeEl.textContent = ds.wing;
  }

  if (roleBadgeEl) {
    roleBadgeEl.textContent = ds.role;
  }

  const activeList = getActiveArmyList();

  // 1. Estado en Vivo en Combate (si existe la instancia en la partida)
  let battleStatusHtml = "";
  if (unitInstance && uState) {
    const maxModels = unitInstance.modelsCount || 1;
    const woundsPerModel = parseInt(ds.stats.h, 10) || 1;
    const modelsAlive = uState.modelsAlive;
    const currentModelW = uState.currentModelWounds;
    const isDestroyed = modelsAlive <= 0;
    const isBattleShocked = !!uState.isBattleShocked;
    const totalWoundsRemaining = modelsAlive > 0 ? ((modelsAlive - 1) * woundsPerModel + currentModelW) : 0;
    const totalWoundsInitial = maxModels * woundsPerModel;
    const ocPerModel = parseInt(ds.stats.co, 10) || 0;
    const effectiveOC = isBattleShocked ? 0 : (modelsAlive * ocPerModel);

    let statusPill = `<span style="color: #4ade80; font-weight: 700;">🟢 Operativa</span>`;
    if (isDestroyed) {
      statusPill = `<span style="color: #f87171; font-weight: 700;">💀 Destruida / Bajas Totales</span>`;
    } else if (isBattleShocked) {
      statusPill = `<span style="color: #fbbf24; font-weight: 700;">⚡ Acobardada (Battle-Shocked)</span>`;
    }

    battleStatusHtml = `
      <div style="background: rgba(0,0,0,0.5); border: 1px solid var(--border-gold); border-radius: var(--radius-sm); padding: 12px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--gold-primary); font-weight: 700; letter-spacing: 0.5px;">
            📊 Estado en Vivo en la Partida
          </span>
          <div>${statusPill}</div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; font-size: 0.82rem;">
          <div style="background: rgba(255,255,255,0.03); padding: 6px 10px; border-radius: 4px;">
            <span style="color: var(--text-muted); display: block; font-size: 0.7rem;">Efectivos:</span>
            <strong style="color: #fff;">${modelsAlive} / ${maxModels} minis</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px 10px; border-radius: 4px;">
            <span style="color: var(--text-muted); display: block; font-size: 0.7rem;">Heridas Restantes:</span>
            <strong style="color: var(--caliban-bright);">${totalWoundsRemaining} / ${totalWoundsInitial} H</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px 10px; border-radius: 4px;">
            <span style="color: var(--text-muted); display: block; font-size: 0.7rem;">Miniatura Activa:</span>
            <strong style="color: ${currentModelW < woundsPerModel ? '#fbbf24' : '#fff'};">${isDestroyed ? '0' : currentModelW} / ${woundsPerModel} H</strong>
          </div>
          <div style="background: rgba(255,255,255,0.03); padding: 6px 10px; border-radius: 4px;">
            <span style="color: var(--text-muted); display: block; font-size: 0.7rem;">Control Objetivo (CO):</span>
            <strong style="color: ${effectiveOC === 0 ? '#f87171' : 'var(--gold-accent)'};">${effectiveOC} CO</strong>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Mejora Asignada (si tiene)
  let enhancementHtml = "";
  if (unitInstance && unitInstance.enhancementId) {
    const found = findEnhancementInActiveList(activeList, unitInstance.enhancementId);
    if (found) {
      enhancementHtml = `
        <div style="background: rgba(197, 160, 89, 0.12); border: 1px solid var(--border-gold); border-radius: var(--radius-sm); padding: 10px 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; flex-wrap: wrap; gap: 6px;">
            <strong style="color: var(--gold-accent); font-size: 0.92rem;">
              🛡️ Mejora de Destacamento: ${found.enhancement.name}
            </strong>
            <span class="det-badge dp-badge" style="font-size: 0.72rem; padding: 2px 8px;">
              +${found.enhancement.points} pts • ${found.detachment.name}
            </span>
          </div>
          <p style="font-size: 0.82rem; color: var(--deathwing-bone); margin: 0; line-height: 1.4;">
            ${found.enhancement.description}
          </p>
        </div>
      `;
    }
  }

  // 3. Vínculos de Líder / Escolta
  let leaderAttachmentHtml = "";
  if (unitInstance && activeList) {
    if (unitInstance.attachedToUnitInstanceId) {
      const bodyguardUnit = activeList.units.find(u => u.instanceId === unitInstance.attachedToUnitInstanceId);
      if (bodyguardUnit) {
        const bgDs = WH40K_DATA.datasheets.find(d => d.id === bodyguardUnit.datasheetId);
        if (bgDs) {
          leaderAttachmentHtml = `
            <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.82rem; color: #bae6fd;">
              🔗 <strong>Líder Asignado:</strong> Este personaje está unido liderando la escuadra escolta de <strong>${bgDs.name}</strong> (${bodyguardUnit.modelsCount} minis).
            </div>
          `;
        }
      }
    } else {
      const escortOf = activeList.units.filter(u => u.attachedToUnitInstanceId === unitInstance.instanceId);
      if (escortOf.length > 0) {
        const leaderNames = escortOf.map(l => {
          const lDs = WH40K_DATA.datasheets.find(d => d.id === l.datasheetId);
          return lDs ? lDs.name : "Líder";
        }).join(', ');
        leaderAttachmentHtml = `
          <div style="background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--radius-sm); padding: 8px 12px; font-size: 0.82rem; color: #bae6fd;">
            👑 <strong>Escolta con Líder:</strong> Esta unidad está acompañada y protegida por <strong>${leaderNames}</strong>.
          </div>
        `;
      }
    }
  }

  // 4. Atributos (Statline)
  const stats = ds.stats || { m: "-", r: "-", sv: "-", inv: "-", h: "-", l: "-", co: "-" };
  const statlineHtml = `
    <div>
      <h4 class="battle-ds-section-title">⚔️ Atributos Principales (Perfil Oficial 11ª Edición)</h4>
      <div class="statline-container">
        <div class="stat-box" title="Movimiento">
          <span class="stat-label">M</span>
          <span class="stat-val">${stats.m}</span>
        </div>
        <div class="stat-box" title="Resistencia">
          <span class="stat-label">R</span>
          <span class="stat-val">${stats.r}</span>
        </div>
        <div class="stat-box" title="Salvación por Armadura">
          <span class="stat-label">SV</span>
          <span class="stat-val">${stats.sv}</span>
        </div>
        <div class="stat-box stat-inv" title="Salvación Invulnerable">
          <span class="stat-label">INV</span>
          <span class="stat-val">${stats.inv}</span>
        </div>
        <div class="stat-box" title="Heridas por Miniatura">
          <span class="stat-label">H</span>
          <span class="stat-val">${stats.h}</span>
        </div>
        <div class="stat-box" title="Liderazgo">
          <span class="stat-label">L</span>
          <span class="stat-val">${stats.l}</span>
        </div>
        <div class="stat-box stat-co" title="Control de Objetivo">
          <span class="stat-label">CO</span>
          <span class="stat-val">${stats.co}</span>
        </div>
      </div>
    </div>
  `;

  // 5. Armas a Distancia
  let rangedWeaponsHtml = "";
  if (Array.isArray(ds.rangedWeapons) && ds.rangedWeapons.length > 0) {
    const rows = ds.rangedWeapons.map(w => `
      <tr>
        <td class="w-name">
          ${w.name || '-'}
          ${w.keywords && w.keywords.length > 0 ? `<span class="w-keywords">[${w.keywords.join(', ')}]</span>` : ''}
        </td>
        <td style="text-align: center;">${w.range || '-'}</td>
        <td style="text-align: center;">${w.a ?? '-'}</td>
        <td style="text-align: center; color: var(--caliban-bright); font-weight: 700;">${w.bs || '-'}</td>
        <td style="text-align: center;">${w.f ?? '-'}</td>
        <td style="text-align: center;">${w.ap ?? '-'}</td>
        <td style="text-align: center; color: var(--gold-accent); font-weight: 700;">${w.d ?? '-'}</td>
      </tr>
    `).join('');

    rangedWeaponsHtml = `
      <div>
        <h4 class="battle-ds-section-title">🎯 Armas a Distancia (Ranged Weapons)</h4>
        <table class="weapons-summary-table">
          <thead>
            <tr>
              <th>Arma & Reglas Especiales</th>
              <th style="text-align: center;">Alcance</th>
              <th style="text-align: center;">A</th>
              <th style="text-align: center;">HP</th>
              <th style="text-align: center;">F</th>
              <th style="text-align: center;">FP</th>
              <th style="text-align: center;">D</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
  }

  // 6. Armas de Combate Cuerpo a Cuerpo
  let meleeWeaponsHtml = "";
  if (Array.isArray(ds.meleeWeapons) && ds.meleeWeapons.length > 0) {
    const rows = ds.meleeWeapons.map(w => `
      <tr>
        <td class="w-name">
          ${w.name || '-'}
          ${w.keywords && w.keywords.length > 0 ? `<span class="w-keywords">[${w.keywords.join(', ')}]</span>` : ''}
        </td>
        <td style="text-align: center;">${w.range || 'Combate'}</td>
        <td style="text-align: center;">${w.a ?? '-'}</td>
        <td style="text-align: center; color: var(--caliban-bright); font-weight: 700;">${w.ws || '-'}</td>
        <td style="text-align: center;">${w.f ?? '-'}</td>
        <td style="text-align: center;">${w.ap ?? '-'}</td>
        <td style="text-align: center; color: var(--gold-accent); font-weight: 700;">${w.d ?? '-'}</td>
      </tr>
    `).join('');

    meleeWeaponsHtml = `
      <div>
        <h4 class="battle-ds-section-title">⚔️ Armas de Combate Cuerpo a Cuerpo (Melee Weapons)</h4>
        <table class="weapons-summary-table">
          <thead>
            <tr>
              <th>Arma & Reglas Especiales</th>
              <th style="text-align: center;">Alcance</th>
              <th style="text-align: center;">A</th>
              <th style="text-align: center;">HA</th>
              <th style="text-align: center;">F</th>
              <th style="text-align: center;">FP</th>
              <th style="text-align: center;">D</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    `;
  }

  // 7. Sinergias de Destacamentos Activos aplicables a esta unidad
  let detachmentSynergiesHtml = "";
  if (activeList && activeList.detachmentIds && activeList.detachmentIds.length > 0) {
    const activeDets = activeList.detachmentIds.map(id => WH40K_DATA.detachments.find(d => d.id === id)).filter(Boolean);
    const synergies = [];

    activeDets.forEach(det => {
      let isApplicable = false;
      const kw = (ds.keywords || []).map(k => k.toUpperCase());
      
      if (det.id === "inner_circle" && (kw.includes("ALA DE MUERTE") || kw.includes("DEATHWING") || ds.wing === "Ala de Muerte")) {
        isApplicable = true;
      } else if (det.id === "darkflight_pursuit" && (kw.includes("ALA DE CUERVO") || kw.includes("RAVENWING") || ds.wing === "Ala de Cuervo")) {
        isApplicable = true;
      } else if (det.id === "company_of_hunters" && (kw.includes("ALA DE CUERVO") || kw.includes("RAVENWING") || ds.wing === "Ala de Cuervo")) {
        isApplicable = true;
      } else if (det.id === "wrath_of_the_rock" && (kw.includes("INFANTERÍA") || kw.includes("INFANTRY") || kw.includes("MONTADA") || kw.includes("MOUNTED"))) {
        isApplicable = true;
      } else if (det.id === "gladius" && (kw.includes("ADEPTUS ASTARTES") || kw.includes("ÁNGELES OSCUROS"))) {
        isApplicable = true;
      } else if (det.id === "ironstorm" && (kw.includes("VEHÍCULO") || kw.includes("DREADNOUGHT"))) {
        isApplicable = true;
      } else if (det.id === "stormlance" && (kw.includes("MONTADA") || kw.includes("MOUNTED") || kw.includes("VEHÍCULO"))) {
        isApplicable = true;
      }

      if (isApplicable) {
        synergies.push({
          detName: det.name,
          ruleName: det.ruleName,
          ruleDesc: det.ruleDesc
        });
      }
    });

    if (synergies.length > 0) {
      detachmentSynergiesHtml = `
        <div style="background: rgba(197, 160, 89, 0.08); border: 1px solid rgba(197, 160, 89, 0.3); border-radius: var(--radius-sm); padding: 10px 14px;">
          <h4 class="battle-ds-section-title" style="color: var(--gold-accent);">
            🦅 Sinergias Activas de tus Destacamentos
          </h4>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${synergies.map(s => `
              <div style="font-size: 0.8rem; line-height: 1.35; color: var(--deathwing-bone);">
                <strong style="color: #fff;">${s.detName} — ${s.ruleName}:</strong> ${s.ruleDesc}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  // 8. Habilidades de la Unidad
  const abilitiesList = Array.isArray(ds.abilities) ? ds.abilities : [];
  const abilitiesHtml = `
    <div>
      <h4 class="battle-ds-section-title">📜 Habilidades & Reglas Especiales</h4>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); padding: 8px 12px; border-radius: 4px; font-size: 0.82rem; line-height: 1.4;">
          <strong style="color: var(--gold-accent);">Juramento de Momento (Oath of Moment):</strong>
          <span style="color: var(--deathwing-bone);"> Regla de facción del Adeptus Astartes. Al inicio de tu Fase de Mando, selecciona una unidad enemiga como objetivo del juramento; las unidades amigas repiten las tiradas para impactar contra ese objetivo.</span>
        </div>
        ${abilitiesList.map(ab => `
          <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); padding: 8px 12px; border-radius: 4px; font-size: 0.82rem; line-height: 1.4; color: var(--deathwing-bone);">
            ${ab}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // 9. Palabras Clave (Keywords)
  const keywordsList = Array.isArray(ds.keywords) ? ds.keywords : [];
  const keywordsHtml = `
    <div>
      <h4 style="color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; margin: 0 0 6px 0; font-weight: 700;">
        🏷️ Palabras Clave (Keywords)
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${keywordsList.map(k => `
          <span style="font-size: 0.72rem; padding: 2px 8px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.12); border-radius: 4px; color: var(--text-main);">
            ${k}
          </span>
        `).join('')}
      </div>
    </div>
  `;

  // 10. Líder de (si es Personaje con líder de)
  let leaderOfHtml = "";
  if (Array.isArray(ds.leaderOf) && ds.leaderOf.length > 0) {
    leaderOfHtml = `
      <div style="background: rgba(0,0,0,0.3); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700; display: block; margin-bottom: 4px;">
          🛡️ Puede unirse como Líder a las siguientes escuadras:
        </span>
        <div style="font-size: 0.8rem; color: var(--deathwing-bone); line-height: 1.4;">
          ${ds.leaderOf.join(' • ')}
        </div>
      </div>
    `;
  }

  // Componer cuerpo completo
  bodyEl.innerHTML = `
    ${battleStatusHtml}
    ${enhancementHtml}
    ${leaderAttachmentHtml}
    ${statlineHtml}
    ${detachmentSynergiesHtml}
    ${rangedWeaponsHtml}
    ${meleeWeaponsHtml}
    ${abilitiesHtml}
    ${leaderOfHtml}
    ${keywordsHtml}
  `;

  // Pie de modal con acciones
  if (footerActionsEl) {
    footerActionsEl.innerHTML = `
      <button type="button" class="btn-gothic-secondary" onclick="sendUnitToComparator('${ds.id}'); closeBattleUnitDatasheetModal(); switchTab('codex');" style="font-size: 0.78rem; padding: 5px 12px; border-color: #38bdf8; color: #38bdf8;">
        ⚖️ Abrir en Comparador Táctico
      </button>
    `;
  }
}

function setBattleTurn(turn) {
  AppState.battle.turn = turn;
  saveToStorage();
  renderBattleTracker();
}

function setBattlePhase(phase) {
  AppState.battle.phase = phase;
  saveToStorage();
  renderBattleTracker();
}

function nextBattlePhase() {
  const phases = ["command", "movement", "shooting", "charge", "fight"];
  const currentIdx = phases.indexOf(AppState.battle.phase);
  
  if (currentIdx >= 0 && currentIdx < phases.length - 1) {
    AppState.battle.phase = phases[currentIdx + 1];
  } else {
    // Si estábamos en la fase de combate (fin de turno de este jugador)
    if (AppState.battle.turn === "player") {
      AppState.battle.turn = "opponent";
      AppState.battle.phase = "command";
      AppState.battle.commandPoints += 1;
      showBattleToast("Inicio del Turno Enemigo. ¡Ganas +1 CP de Mando!");
    } else {
      AppState.battle.turn = "player";
      AppState.battle.phase = "command";
      if (AppState.battle.round < 5) {
        AppState.battle.round += 1;
      }
      AppState.battle.commandPoints += 1;
      showBattleToast(`¡Inicio de Ronda ${AppState.battle.round} (Tu Turno)! Ganas +1 CP de Mando.`);
    }
  }

  saveToStorage();
  renderBattleTracker();
}

function toggleBattleStratagemsScope() {
  const chk = document.getElementById("battle-stratagems-scope-filter");
  if (chk) {
    AppState.battle.stratagemScopeOnlyArmy = chk.checked;
  } else {
    AppState.battle.stratagemScopeOnlyArmy = !AppState.battle.stratagemScopeOnlyArmy;
  }
  saveToStorage();
  renderBattleStratagems();
}

function useBattleStratagem(stratId) {
  const currentLang = AppState.currentLanguage || "es";
  const t = WH40K_I18N[currentLang] || WH40K_I18N.es;
  const raw = (WH40K_DATA.stratagems || []).find(s => s.id === stratId);
  if (!raw) return;
  const s = getStratagemText(raw, currentLang);

  if (AppState.battle.commandPoints < s.cp) {
    alert(t.battleToastNoCp(s.name, s.cp, AppState.battle.commandPoints));
    return;
  }

  AppState.battle.commandPoints -= s.cp;
  saveToStorage();
  renderBattleTracker();
  showBattleToast(t.battleToastActivated(s.name, s.cp));
}

function showBattleToast(msg) {
  const existing = document.getElementById("cogitator-battle-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "cogitator-battle-toast";
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: linear-gradient(135deg, rgba(20, 35, 25, 0.95), rgba(10, 18, 14, 0.98));
    border: 1px solid var(--gold-accent);
    color: #fff;
    padding: 12px 20px;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 20px rgba(0,0,0,0.8), 0 0 12px rgba(217,119,6,0.3);
    font-family: var(--font-title);
    font-size: 0.9rem;
    font-weight: 700;
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 10px;
  `;
  toast.innerHTML = `<span>⚔️</span><span>${msg}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s ease";
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

function renderBattleStratagems() {
  const grid = document.getElementById("battle-available-stratagems-grid");
  const countBadge = document.getElementById("hud-stratagems-count-badge");
  const subtitleEl = document.getElementById("hud-stratagems-current-phase-desc");
  const scopeCheckbox = document.getElementById("battle-stratagems-scope-filter");

  if (!grid) return;

  const currentLang = AppState.currentLanguage || "es";
  const isEn = currentLang === "en";
  const t = WH40K_I18N[currentLang] || WH40K_I18N.es;

  const currentTurn = AppState.battle.turn || "player";
  const currentPhase = AppState.battle.phase || "command";
  const onlyArmy = AppState.battle.stratagemScopeOnlyArmy !== false;

  if (scopeCheckbox) scopeCheckbox.checked = onlyArmy;

  const phaseLabelsEs = {
    command: "Fase de Mando",
    movement: "Fase de Movimiento",
    shooting: "Fase de Disparo",
    charge: "Fase de Carga",
    fight: "Fase de Combate"
  };
  const phaseLabelsEn = {
    command: "Command Phase",
    movement: "Movement Phase",
    shooting: "Shooting Phase",
    charge: "Charge Phase",
    fight: "Fight Phase"
  };
  const phaseLabels = isEn ? phaseLabelsEn : phaseLabelsEs;

  const turnLabelsEs = {
    player: "Mi Turno (Jugador)",
    opponent: "Turno Enemigo (Oponente)"
  };
  const turnLabelsEn = {
    player: "My Turn (Player)",
    opponent: "Opponent's Turn"
  };
  const turnLabels = isEn ? turnLabelsEn : turnLabelsEs;

  if (subtitleEl) {
    subtitleEl.textContent = `${phaseLabels[currentPhase] || currentPhase} • ${turnLabels[currentTurn] || currentTurn}`;
  }

  const stratagems = WH40K_DATA.stratagems || [];
  const activeList = getActiveArmyList();
  const armyDetId = activeList ? activeList.detachmentId : null;

  // Filtrar según fase y turno actual
  const eligible = stratagems.filter(raw => {
    // Fase: coincide o es aplicable en cualquier fase
    const phaseMatch = (raw.phases ? raw.phases.includes(currentPhase) : raw.phase === currentPhase) || raw.phase === "any";
    if (!phaseMatch) return false;

    // Turno: coincide o es aplicable en cualquier turno
    const turnMatch = currentTurn === "player" 
      ? (raw.turn === "your_turn" || raw.turn === "either_turn")
      : (raw.turn === "opponent_turn" || raw.turn === "either_turn");
    if (!turnMatch) return false;

    // Alcance: solo destacamentos activos de la fuerza + básicas
    if (onlyArmy) {
      if (raw.detachmentId === "core") return true;
      const activeDetIds = (activeList && activeList.detachmentIds && activeList.detachmentIds.length > 0)
        ? activeList.detachmentIds
        : (armyDetId ? [armyDetId] : []);
      if (activeDetIds.length > 0) {
        return activeDetIds.includes(raw.detachmentId);
      }
      // Si la lista no tiene destacamentos asignados todavía, mostrar básicas y de Ángeles Oscuros
      if (raw.detachmentId === "inner_circle" || raw.detachmentId === "darkflight_pursuit" || raw.detachmentId === "wrath_of_the_rock") return true;
      return false;
    }

    return true;
  });

  if (countBadge) {
    countBadge.textContent = `${eligible.length} Disp.`;
  }

  if (eligible.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 20px; text-align: center; background: rgba(0,0,0,0.3); border: 1px dashed var(--border-subtle); border-radius: var(--radius-sm);">
        <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0;">
          ${t.battleNoStratsForPhase(phaseLabels[currentPhase] || currentPhase, turnLabels[currentTurn] || currentTurn)}
        </p>
        <button class="btn-gothic-secondary" onclick="toggleBattleStratagemsScope()" style="margin-top: 8px; font-size: 0.75rem; padding: 4px 10px;">
          ${t.battleViewAllForPhase}
        </button>
      </div>
    `;
    return;
  }

  const userCP = AppState.battle.commandPoints || 0;

  grid.innerHTML = eligible.map(raw => {
    const s = getStratagemText(raw, currentLang);
    const canAfford = userCP >= s.cp;
    const isCore = s.detachmentId === "core";
    const detachmentTag = isCore ? (isEn ? "Core" : "Básica") : s.detachment;

    return `
      <div class="battle-stratagem-card phase-accent-${s.phase}">
        <div class="battle-stratagem-top">
          <div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <h5 style="margin: 0; font-family: var(--font-serif); font-size: 0.95rem; color: var(--deathwing-bone);">
                ${s.name}
              </h5>
              <button class="btn-strat-action" onclick="openStratagemEditor('${raw.id}')" style="padding: 1px 5px; font-size: 0.68rem;" title="${isEn ? 'Edit stratagem' : 'Editar estratagema'}">✏️</button>
            </div>
            <div style="display: flex; gap: 6px; align-items: center; margin-top: 2px;">
              <span class="stratagem-tag tag-detachment" style="font-size: 0.68rem; padding: 1px 6px;">
                ${detachmentTag}
              </span>
              <span style="font-size: 0.72rem; color: var(--text-muted);">${s.type || ''}</span>
            </div>
          </div>
          <span class="stratagem-cp-badge" style="font-size: 0.8rem; padding: 2px 7px;">${s.cp} CP</span>
        </div>

        <div style="font-size: 0.78rem; line-height: 1.35; color: var(--text-muted); display: flex; flex-direction: column; gap: 4px;">
          <div><strong style="color: var(--gold-accent);">${t.whenLabel}</strong> ${escapeHtml(s.when)}</div>
          <div><strong style="color: #38bdf8;">${t.targetLabel}</strong> ${escapeHtml(s.target)}</div>
          <div><strong style="color: var(--deathwing-bone);">${t.effectLabel}</strong> ${escapeHtml(s.effect)}</div>
          ${s.restrictions ? `<div style="color: #fca5a5;"><strong style="color: #f87171;">${isEn ? 'RESTRICTIONS:' : 'RESTRICCIONES:'}</strong> ${escapeHtml(s.restrictions)}</div>` : ''}
        </div>

        <div class="battle-stratagem-action-row">
          <span style="font-size: 0.75rem; color: ${canAfford ? 'var(--caliban-bright)' : '#ef4444'}; font-weight: 600;">
            ${canAfford ? t.battleAvailable : t.battleRequires(s.cp, userCP)}
          </span>
          <button class="btn-use-stratagem" onclick="useBattleStratagem('${raw.id}')" ${!canAfford ? 'disabled' : ''} title="Activar esta estratagema y deducir ${s.cp} CP">
            ${t.battleUseBtn(s.cp)}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// MÓDULO 5: SIMULADOR TÁCTICO MATHHAMMER
// ==========================================================================
function initMathhammer() {
  const calcInputs = document.querySelectorAll(".math-calc-trigger");
  calcInputs.forEach(input => {
    input.addEventListener("input", () => calculateMathhammer());
    input.addEventListener("change", () => calculateMathhammer());
  });

  // Poblar selector de armas del códex
  populateMathhammerWeaponsSelect();
  calculateMathhammer();
}

function populateMathhammerWeaponsSelect() {
  const select = document.getElementById("math-quick-weapon-select");
  if (!select || !WH40K_DATA || !Array.isArray(WH40K_DATA.datasheets)) return;

  const options = ['<option value="">-- Elige un arma de la Armería de la Roca... --</option>'];
  const weaponMap = new Map();

  WH40K_DATA.datasheets.forEach(ds => {
    const allW = [...(ds.rangedWeapons || []), ...(ds.meleeWeapons || [])];
    allW.forEach(w => {
      const key = `${w.name}__${ds.name}`;
      if (!weaponMap.has(key)) {
        weaponMap.set(key, { weapon: w, dsName: ds.name });
      }
    });
  });

  // Agrupar por tipo / nombre
  const sorted = Array.from(weaponMap.entries()).sort((a, b) => a[1].weapon.name.localeCompare(b[1].weapon.name));
  sorted.forEach(([key, item]) => {
    const w = item.weapon;
    const isRanged = !!w.range && w.range !== "Combate";
    const typeIcon = isRanged ? "🏹" : "⚔️";
    options.push(`<option value="${escapeHtml(key)}">${typeIcon} ${escapeHtml(w.name)} (${escapeHtml(item.dsName)}) - A:${w.a} F:${w.f} FP:${w.ap} D:${w.d}</option>`);
  });

  select.innerHTML = options.join("");
}

function loadWeaponIntoMathhammer(key) {
  if (!key) return;
  const parts = key.split("__");
  const weaponName = parts[0];
  const dsName = parts[1];

  const ds = WH40K_DATA.datasheets.find(d => d.name === dsName);
  if (!ds) return;
  const weapon = [...(ds.rangedWeapons || []), ...(ds.meleeWeapons || [])].find(w => w.name === weaponName);
  if (!weapon) return;

  // Rellenar campos
  const elAttacks = document.getElementById("math-attacks");
  const elBsWs = document.getElementById("math-bsws");
  const elStrength = document.getElementById("math-strength");
  const elAp = document.getElementById("math-ap");
  const elDamage = document.getElementById("math-damage");

  if (elAttacks) elAttacks.value = weapon.a || 1;
  const rawSkill = parseInt(weapon.bs || weapon.ws) || 3;
  if (elBsWs) elBsWs.value = Math.max(2, Math.min(6, rawSkill));
  if (elStrength) elStrength.value = parseInt(weapon.f) || 4;
  if (elAp) elAp.value = weapon.ap !== undefined ? weapon.ap : -1;
  if (elDamage) elDamage.value = weapon.d || 1;

  // Reglas del arma
  const kw = weapon.keywords || [];
  const elTorrent = document.getElementById("math-torrent");
  const elLethal = document.getElementById("math-lethal");
  const elDevastating = document.getElementById("math-devastating");
  const elTwin = document.getElementById("math-twinlinked");
  const elSustained = document.getElementById("math-sustained");
  const elAnti = document.getElementById("math-anti");

  if (elTorrent) elTorrent.checked = kw.some(k => /Torrente|Torrent/i.test(k));
  if (elLethal) elLethal.checked = kw.some(k => /Impactos Letales|Lethal Hits/i.test(k));
  if (elDevastating) elDevastating.checked = kw.some(k => /Heridas Devastadoras|Devastating Wounds/i.test(k));
  if (elTwin) elTwin.checked = kw.some(k => /Acoplada|Twin-linked/i.test(k));

  if (elSustained) {
    if (kw.some(k => /Impactos Sostenidos 2|Sustained Hits 2/i.test(k))) elSustained.value = "2";
    else if (kw.some(k => /Impactos Sostenidos|Sustained Hits/i.test(k))) elSustained.value = "1";
    else elSustained.value = "0";
  }

  if (elAnti) {
    const antiMatch = kw.find(k => /Anti-.*?(\d)\+/i.test(k));
    if (antiMatch) {
      const match = antiMatch.match(/(\d)\+/);
      elAnti.value = match ? match[1] : "0";
    } else {
      elAnti.value = "0";
    }
  }

  calculateMathhammer();
}

function loadPresetTargetIntoMathhammer(presetId) {
  if (typeof MathhammerAdv === "undefined" || !MathhammerAdv.PRESET_TARGETS) return;
  const preset = MathhammerAdv.PRESET_TARGETS.find(p => p.id === presetId);
  if (!preset || preset.id === "custom") return;

  const elT = document.getElementById("math-target-t");
  const elSv = document.getElementById("math-target-sv");
  const elInv = document.getElementById("math-target-inv");
  const elW = document.getElementById("math-target-w");
  const elFnp = document.getElementById("math-target-fnp");

  if (elT) elT.value = preset.t;
  if (elSv) elSv.value = preset.sv;
  if (elInv) elInv.value = preset.inv;
  if (elW) elW.value = preset.w;
  if (elFnp) elFnp.value = preset.fnp;

  calculateMathhammer();
}

function calculateMathhammer() {
  if (typeof MathhammerAdv === "undefined") return;

  const attacksVal = (document.getElementById("math-attacks")?.value || "10").trim();
  const bsWs = parseInt(document.getElementById("math-bsws")?.value) || 3;
  const strength = parseInt(document.getElementById("math-strength")?.value) || 4;
  const ap = parseInt(document.getElementById("math-ap")?.value) || 0;
  const damageVal = (document.getElementById("math-damage")?.value || "2").trim();

  const isTorrent = !!document.getElementById("math-torrent")?.checked;
  const lethalHits = !!document.getElementById("math-lethal")?.checked;
  const devastatingWounds = !!document.getElementById("math-devastating")?.checked;
  const twinLinked = !!document.getElementById("math-twinlinked")?.checked;
  const isOath = !!document.getElementById("math-oath")?.checked;
  const sustainedHits = parseInt(document.getElementById("math-sustained")?.value) || 0;
  const antiThreshold = parseInt(document.getElementById("math-anti")?.value) || 0;

  const targetT = parseInt(document.getElementById("math-target-t")?.value) || 4;
  const targetSv = parseInt(document.getElementById("math-target-sv")?.value) || 3;
  const targetInv = parseInt(document.getElementById("math-target-inv")?.value) || 0;
  const targetW = parseInt(document.getElementById("math-target-w")?.value) || 2;
  const targetFnp = parseInt(document.getElementById("math-target-fnp")?.value) || 0;
  const hasCover = !!document.getElementById("math-cover")?.checked;
  const damageReduction = parseInt(document.getElementById("math-damage-red")?.value) || 0;

  const res = MathhammerAdv.calculate({
    attacks: attacksVal,
    bsWs,
    strength,
    ap,
    damage: damageVal,
    isTorrent,
    lethalHits,
    devastatingWounds,
    twinLinked,
    sustainedHits,
    antiThreshold,
    hitReroll: isOath ? "all" : "none",
    targetT,
    targetSv,
    targetInv,
    targetW,
    targetFnp,
    hasCover,
    damageReduction
  });

  const resEl = document.getElementById("math-result-damage");
  const killsEl = document.getElementById("math-result-kills");
  const subEl = document.getElementById("math-result-subtext");

  if (resEl) resEl.textContent = res.rawTotalDamage.toFixed(2);
  if (killsEl) killsEl.textContent = `${res.expectedKills.toFixed(1)} minis`;

  if (subEl) {
    const specialRulesActive = [];
    if (isTorrent) specialRulesActive.push("Torrente");
    if (lethalHits) specialRulesActive.push(`Impactos Letales (${res.autoWounds.toFixed(1)} aut.)`);
    if (sustainedHits > 0) specialRulesActive.push(`Sostenidos ${sustainedHits}`);
    if (devastatingWounds) specialRulesActive.push(`Devastadoras (${res.devWounds.toFixed(1)} mortales)`);
    if (twinLinked) specialRulesActive.push("Acoplada");
    if (isOath) specialRulesActive.push("Juramento (Oath)");

    const rulesStr = specialRulesActive.length > 0 ? ` • [${specialRulesActive.join(", ")}]` : "";

    subEl.innerHTML = `
      <strong>Flujo Táctico:</strong> ${res.attacks.toFixed(1)} ataques ➔ <strong>${res.expectedHits.toFixed(1)} impactos</strong> ➔ <strong>${res.expectedWounds.toFixed(1)} heridas</strong> (Sv requerida: ${res.effectiveSv}+) ➔ <strong>${res.unsavedWounds.toFixed(1)} fallos de salvación</strong>.${rulesStr}
    `;
  }
}

// Backup & Restauración JSON
function exportCollectionJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AppState.collection, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `coleccion_angeles_oscuros_${new Date().toISOString().split("T")[0]}.json`);
  dlAnchorElem.click();
}

function triggerImportCollectionJson() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported)) {
            AppState.collection = imported;
            saveToStorage();
            renderCollection();
            updateHeaderStats();
            alert("¡Colección importada con éxito!");
          }
        } catch (err) {
          alert("Error importando archivo JSON.");
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
}

// ==========================================================================
// MÓDULO 6: EDITOR DE PARÁMETROS DEL CÓDEX (11ª EDICIÓN / REGLAS VIVAS)
// ==========================================================================

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function addKeywordChip(keyword) {
  const input = document.getElementById("edit-ds-keywords");
  if (!input) return;
  const current = input.value.split(",").map(k => k.trim()).filter(Boolean);
  if (!current.includes(keyword)) {
    current.push(keyword);
    input.value = current.join(", ");
  }
}

function addPointsOptionRow(models = 5, points = 100) {
  const tbody = document.getElementById("tbody-points-options");
  if (!tbody) return;
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>
      <input type="number" min="1" class="points-models-input" value="${models}" placeholder="5">
    </td>
    <td>
      <input type="number" min="0" step="5" class="points-val-input" value="${points}" placeholder="100">
    </td>
    <td style="text-align: center;">
      <button type="button" class="btn-table-del" onclick="this.closest('tr').remove()" title="Eliminar fila">🗑️</button>
    </td>
  `;
  tbody.appendChild(tr);
}

function addRangedWeaponRow(w = null) {
  const tbody = document.getElementById("tbody-ranged-weapons");
  if (!tbody) return;
  const weapon = w || { name: "", range: '24"', a: "2", bs: "3+", f: 4, ap: 0, d: "1", keywords: [] };
  const kwStr = Array.isArray(weapon.keywords) ? weapon.keywords.join(", ") : (weapon.keywords || "");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" class="w-name-input" value="${escapeHtml(weapon.name || '')}" placeholder="Nombre del arma (ej: Bólter)"></td>
    <td><input type="text" class="w-range-input" value="${escapeHtml(weapon.range || '24"')}" placeholder='24"'></td>
    <td><input type="text" class="w-a-input" value="${escapeHtml(weapon.a || '2')}" placeholder="2 o D6"></td>
    <td><input type="text" class="w-skill-input" value="${escapeHtml(weapon.bs || weapon.ws || '3+')}" placeholder="3+"></td>
    <td><input type="number" class="w-f-input" value="${weapon.f !== undefined ? weapon.f : 4}" placeholder="4"></td>
    <td><input type="number" class="w-ap-input" value="${weapon.ap !== undefined ? weapon.ap : 0}" placeholder="0 o -1"></td>
    <td><input type="text" class="w-d-input" value="${escapeHtml(weapon.d || '1')}" placeholder="1 o D3"></td>
    <td><input type="text" class="w-kw-input" value="${escapeHtml(kwStr)}" placeholder="Asalto, Pesada..."></td>
    <td style="text-align: center;">
      <button type="button" class="btn-table-del" onclick="this.closest('tr').remove()" title="Eliminar arma">🗑️</button>
    </td>
  `;
  tbody.appendChild(tr);
}

function addMeleeWeaponRow(w = null) {
  const tbody = document.getElementById("tbody-melee-weapons");
  if (!tbody) return;
  const weapon = w || { name: "", range: "Combate", a: "3", ws: "3+", f: 4, ap: 0, d: "1", keywords: [] };
  const kwStr = Array.isArray(weapon.keywords) ? weapon.keywords.join(", ") : (weapon.keywords || "");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input type="text" class="w-name-input" value="${escapeHtml(weapon.name || '')}" placeholder="Nombre del arma (ej: Espada)"></td>
    <td><input type="text" class="w-range-input" value="${escapeHtml(weapon.range || 'Combate')}" placeholder="Combate"></td>
    <td><input type="text" class="w-a-input" value="${escapeHtml(weapon.a || '3')}" placeholder="3 o D3"></td>
    <td><input type="text" class="w-skill-input" value="${escapeHtml(weapon.ws || weapon.bs || '3+')}" placeholder="3+"></td>
    <td><input type="number" class="w-f-input" value="${weapon.f !== undefined ? weapon.f : 4}" placeholder="4"></td>
    <td><input type="number" class="w-ap-input" value="${weapon.ap !== undefined ? weapon.ap : 0}" placeholder="0 o -2"></td>
    <td><input type="text" class="w-d-input" value="${escapeHtml(weapon.d || '1')}" placeholder="1 o 2"></td>
    <td><input type="text" class="w-kw-input" value="${escapeHtml(kwStr)}" placeholder="Lanza, Devastadoras..."></td>
    <td style="text-align: center;">
      <button type="button" class="btn-table-del" onclick="this.closest('tr').remove()" title="Eliminar arma">🗑️</button>
    </td>
  `;
  tbody.appendChild(tr);
}

function addAbilityRow(abilityText = '') {
  const container = document.getElementById("container-abilities-rows");
  if (!container) return;
  const div = document.createElement("div");
  div.className = "ability-edit-row";
  div.style.cssText = "display: flex; gap: 8px; align-items: center;";
  div.innerHTML = `
    <input type="text" class="ability-val-input" value="${escapeHtml(abilityText)}" placeholder="Nombre o regla de la habilidad (ej: Juramento de Momento, Rampa de Asalto...)" style="flex: 1; background: var(--bg-deep); border: 1px solid var(--border-bright); color: #fff; padding: 6px 10px; border-radius: 4px;">
    <button type="button" class="btn-table-del" onclick="this.closest('.ability-edit-row').remove()" title="Eliminar habilidad">🗑️</button>
  `;
  container.appendChild(div);
}

function openEditDatasheetModal(id) {
  const ds = WH40K_DATA.datasheets.find(d => d.id === id);
  if (!ds) {
    alert("No se encontró la hoja de datos en el Códex.");
    return;
  }
  
  const modal = document.getElementById("edit-datasheet-modal");
  if (!modal) return;
  
  const titleEl = document.getElementById("modal-edit-ds-title");
  if (titleEl) titleEl.textContent = `Editar Hoja de Datos: ${ds.name}`;
  
  const deleteBtn = document.getElementById("btn-delete-datasheet");
  if (deleteBtn) deleteBtn.style.display = "inline-block";
  
  // Asignar campos de identificación
  document.getElementById("edit-ds-id").value = ds.id;
  document.getElementById("edit-ds-name").value = ds.name || "";
  
  // Rol táctico desplegable
  const roleSelect = document.getElementById("edit-ds-role");
  if (roleSelect) {
    let found = false;
    for (let i = 0; i < roleSelect.options.length; i++) {
      if (roleSelect.options[i].value === ds.role) {
        roleSelect.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found && ds.role) {
      const opt = document.createElement("option");
      opt.value = ds.role;
      opt.textContent = ds.role;
      roleSelect.appendChild(opt);
      roleSelect.value = ds.role;
    }
  }
  
  document.getElementById("edit-ds-wing").value = ds.wing || "Ala de Muerte";
  document.getElementById("edit-ds-keywords").value = (ds.keywords || []).join(", ");
  document.getElementById("edit-ds-epic").checked = !!ds.isEpicHero;
  
  // Atributos de 11ª Edición
  const stats = ds.stats || { m: '6"', r: 4, sv: '3+', inv: '-', h: 2, l: '6+', co: 1 };
  document.getElementById("edit-stat-m").value = stats.m || '6"';
  document.getElementById("edit-stat-r").value = stats.r || 4;
  document.getElementById("edit-stat-sv").value = stats.sv || '3+';
  document.getElementById("edit-stat-inv").value = stats.inv || '-';
  document.getElementById("edit-stat-h").value = stats.h || 2;
  document.getElementById("edit-stat-l").value = stats.l || '6+';
  document.getElementById("edit-stat-co").value = stats.co !== undefined ? stats.co : 1;
  
  // Rellenar Opciones de Puntos (celdas individuales)
  const tbodyPts = document.getElementById("tbody-points-options");
  if (tbodyPts) {
    tbodyPts.innerHTML = "";
    if (ds.pointsOptions && ds.pointsOptions.length > 0) {
      ds.pointsOptions.forEach(p => addPointsOptionRow(p.models, p.points));
    } else {
      addPointsOptionRow(1, 100);
    }
  }
  
  // Rellenar Armas a Distancia (celdas individuales)
  const tbodyRanged = document.getElementById("tbody-ranged-weapons");
  if (tbodyRanged) {
    tbodyRanged.innerHTML = "";
    if (ds.rangedWeapons && ds.rangedWeapons.length > 0) {
      ds.rangedWeapons.forEach(w => addRangedWeaponRow(w));
    }
  }
  
  // Rellenar Armas Cuerpo a Cuerpo (celdas individuales)
  const tbodyMelee = document.getElementById("tbody-melee-weapons");
  if (tbodyMelee) {
    tbodyMelee.innerHTML = "";
    if (ds.meleeWeapons && ds.meleeWeapons.length > 0) {
      ds.meleeWeapons.forEach(w => addMeleeWeaponRow(w));
    }
  }
  
  // Rellenar Habilidades (celdas individuales)
  const containerAbilities = document.getElementById("container-abilities-rows");
  if (containerAbilities) {
    containerAbilities.innerHTML = "";
    if (ds.abilities && ds.abilities.length > 0) {
      ds.abilities.forEach(ab => addAbilityRow(ab));
    } else {
      addAbilityRow("Juramento de Momento");
    }
  }
  
  // Liderazgo y notas
  document.getElementById("edit-ds-leader").value = (ds.leaderOf || ds.canLead || []).join(", ");
  document.getElementById("edit-ds-notes").value = ds.notes || "";
  
  modal.classList.add("active");
}

function openCreateDatasheetModal() {
  const modal = document.getElementById("edit-datasheet-modal");
  if (!modal) return;
  
  const titleEl = document.getElementById("modal-edit-ds-title");
  if (titleEl) titleEl.textContent = "Nueva Hoja de Datos (11ª Edición)";
  
  const deleteBtn = document.getElementById("btn-delete-datasheet");
  if (deleteBtn) deleteBtn.style.display = "none";
  
  const newId = `da_custom_${Date.now()}`;
  document.getElementById("edit-ds-id").value = newId;
  document.getElementById("edit-ds-name").value = "Nueva Escuadra de Ángeles Oscuros";
  
  const roleSelect = document.getElementById("edit-ds-role");
  if (roleSelect) roleSelect.value = "Línea (Battleline)";
  
  document.getElementById("edit-ds-wing").value = "Compañía Verde";
  document.getElementById("edit-ds-keywords").value = "INFANTERÍA, IMPERIUM, ADEPTUS ASTARTES";
  document.getElementById("edit-ds-epic").checked = false;
  
  document.getElementById("edit-stat-m").value = '6"';
  document.getElementById("edit-stat-r").value = 4;
  document.getElementById("edit-stat-sv").value = '3+';
  document.getElementById("edit-stat-inv").value = '-';
  document.getElementById("edit-stat-h").value = 2;
  document.getElementById("edit-stat-l").value = '6+';
  document.getElementById("edit-stat-co").value = 2;
  
  // Puntos iniciales
  const tbodyPts = document.getElementById("tbody-points-options");
  if (tbodyPts) {
    tbodyPts.innerHTML = "";
    addPointsOptionRow(5, 90);
    addPointsOptionRow(10, 180);
  }
  
  // Armas iniciales
  const tbodyRanged = document.getElementById("tbody-ranged-weapons");
  if (tbodyRanged) {
    tbodyRanged.innerHTML = "";
    addRangedWeaponRow({ name: "Rifle bólter", range: '24"', a: "2", bs: "3+", f: 4, ap: -1, d: "1", keywords: ["Asalto", "Pesada"] });
  }
  
  const tbodyMelee = document.getElementById("tbody-melee-weapons");
  if (tbodyMelee) {
    tbodyMelee.innerHTML = "";
    addMeleeWeaponRow({ name: "Arma de combate cuerpo a cuerpo", range: "Combate", a: "3", ws: "3+", f: 4, ap: 0, d: "1", keywords: [] });
  }
  
  // Habilidades iniciales
  const containerAbilities = document.getElementById("container-abilities-rows");
  if (containerAbilities) {
    containerAbilities.innerHTML = "";
    addAbilityRow("Juramento de Momento");
  }
  
  document.getElementById("edit-ds-leader").value = "";
  document.getElementById("edit-ds-notes").value = "Unidad personalizada añadida al Códex.";
  
  modal.classList.add("active");
}

function closeEditDatasheetModal() {
  const modal = document.getElementById("edit-datasheet-modal");
  if (modal) modal.classList.remove("active");
}

function saveDatasheetFromModal() {
  const id = document.getElementById("edit-ds-id").value.trim();
  const name = document.getElementById("edit-ds-name").value.trim();
  if (!name) {
    alert("Por favor ingresa un nombre para la hoja de datos.");
    return;
  }
  
  const role = document.getElementById("edit-ds-role").value || "Infantería";
  const wing = document.getElementById("edit-ds-wing").value;
  const keywords = document.getElementById("edit-ds-keywords").value
    .split(",")
    .map(k => k.trim())
    .filter(Boolean);
  const isEpicHero = document.getElementById("edit-ds-epic").checked;
  
  const stats = {
    m: document.getElementById("edit-stat-m").value.trim() || '6"',
    r: parseInt(document.getElementById("edit-stat-r").value) || 4,
    sv: document.getElementById("edit-stat-sv").value.trim() || '3+',
    inv: document.getElementById("edit-stat-inv").value.trim() || '-',
    h: parseInt(document.getElementById("edit-stat-h").value) || 2,
    l: document.getElementById("edit-stat-l").value.trim() || '6+',
    co: parseInt(document.getElementById("edit-stat-co").value) || 1
  };
  
  // 1. Puntos leídos directamente de las celdas de la tabla
  const pointsOptions = [];
  document.querySelectorAll("#tbody-points-options tr").forEach(tr => {
    const modelsInput = tr.querySelector(".points-models-input");
    const pointsInput = tr.querySelector(".points-val-input");
    if (modelsInput && pointsInput) {
      const models = parseInt(modelsInput.value) || 1;
      const points = parseInt(pointsInput.value) || 0;
      pointsOptions.push({ models, points });
    }
  });
  if (pointsOptions.length === 0) {
    pointsOptions.push({ models: 1, points: 100 });
  }
  
  // 2. Armas a distancia leídas directamente de las celdas
  const rangedWeapons = [];
  document.querySelectorAll("#tbody-ranged-weapons tr").forEach(tr => {
    const nameInp = tr.querySelector(".w-name-input");
    if (!nameInp) return;
    const wName = nameInp.value.trim();
    if (!wName) return;
    
    const range = (tr.querySelector(".w-range-input")?.value || '24"').trim();
    const a = (tr.querySelector(".w-a-input")?.value || "1").trim();
    const bs = (tr.querySelector(".w-skill-input")?.value || "3+").trim();
    const fVal = tr.querySelector(".w-f-input")?.value;
    const f = isNaN(parseInt(fVal)) ? 4 : parseInt(fVal);
    const apVal = tr.querySelector(".w-ap-input")?.value;
    const ap = isNaN(parseInt(apVal)) ? 0 : parseInt(apVal);
    const d = (tr.querySelector(".w-d-input")?.value || "1").trim();
    const kwRaw = tr.querySelector(".w-kw-input")?.value.trim() || "";
    const keywords = kwRaw && kwRaw !== "-" ? kwRaw.split(",").map(k => k.trim()).filter(Boolean) : [];
    
    rangedWeapons.push({ name: wName, range, a, bs, f, ap, d, keywords });
  });
  
  // 3. Armas cuerpo a cuerpo leídas directamente de las celdas
  const meleeWeapons = [];
  document.querySelectorAll("#tbody-melee-weapons tr").forEach(tr => {
    const nameInp = tr.querySelector(".w-name-input");
    if (!nameInp) return;
    const wName = nameInp.value.trim();
    if (!wName) return;
    
    const range = (tr.querySelector(".w-range-input")?.value || "Combate").trim();
    const a = (tr.querySelector(".w-a-input")?.value || "1").trim();
    const ws = (tr.querySelector(".w-skill-input")?.value || "3+").trim();
    const fVal = tr.querySelector(".w-f-input")?.value;
    const f = isNaN(parseInt(fVal)) ? 4 : parseInt(fVal);
    const apVal = tr.querySelector(".w-ap-input")?.value;
    const ap = isNaN(parseInt(apVal)) ? 0 : parseInt(apVal);
    const d = (tr.querySelector(".w-d-input")?.value || "1").trim();
    const kwRaw = tr.querySelector(".w-kw-input")?.value.trim() || "";
    const keywords = kwRaw && kwRaw !== "-" ? kwRaw.split(",").map(k => k.trim()).filter(Boolean) : [];
    
    meleeWeapons.push({ name: wName, range, a, ws, f, ap, d, keywords });
  });
  
  // 4. Habilidades leídas directamente de las celdas
  const abilities = [];
  document.querySelectorAll("#container-abilities-rows .ability-val-input").forEach(inp => {
    const ab = inp.value.trim();
    if (ab) abilities.push(ab);
  });
  
  // 5. Líder y notas
  const leaderOf = document.getElementById("edit-ds-leader").value
    .split(",")
    .map(l => l.trim())
    .filter(Boolean);
    
  const notes = document.getElementById("edit-ds-notes").value.trim();
  
  const existingIndex = WH40K_DATA.datasheets.findIndex(d => d.id === id);
  const updatedDatasheet = {
    id,
    name,
    role,
    wing,
    isEpicHero,
    keywords,
    stats,
    pointsOptions,
    rangedWeapons,
    meleeWeapons,
    abilities,
    leaderOf,
    notes,
    isCustom: true
  };
  
  if (existingIndex >= 0) {
    WH40K_DATA.datasheets[existingIndex] = updatedDatasheet;
  } else {
    WH40K_DATA.datasheets.push(updatedDatasheet);
  }
  
  // Guardar en almacenamiento local persistente
  localStorage.setItem("cogitator_custom_datasheets", JSON.stringify(WH40K_DATA.datasheets));
  
  closeEditDatasheetModal();
  renderCodex();
  renderCollection();
  renderArmyBuilder();
  renderBattleTracker();
  updateHeaderStats();
}

function deleteDatasheetFromModal() {
  const id = document.getElementById("edit-ds-id").value;
  const ds = WH40K_DATA.datasheets.find(d => d.id === id);
  if (!ds) return;
  
  if (confirm(`¿Estás seguro de que deseas eliminar "${ds.name}" del Códex?`)) {
    WH40K_DATA.datasheets = WH40K_DATA.datasheets.filter(d => d.id !== id);
    localStorage.setItem("cogitator_custom_datasheets", JSON.stringify(WH40K_DATA.datasheets));
    closeEditDatasheetModal();
    renderCodex();
    renderCollection();
    renderArmyBuilder();
    renderBattleTracker();
    updateHeaderStats();
  }
}

// Exportación y Restauración del Códex completo
function exportCodexJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(WH40K_DATA.datasheets, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `codex_angeles_oscuros_11ed_${new Date().toISOString().split("T")[0]}.json`);
  dlAnchorElem.click();
}

function triggerImportCodexJson() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported) && imported.length > 0 && imported[0].name && imported[0].stats) {
            WH40K_DATA.datasheets = imported;
            localStorage.setItem("cogitator_custom_datasheets", JSON.stringify(WH40K_DATA.datasheets));
            renderCodex();
            renderCollection();
            renderArmyBuilder();
            renderBattleTracker();
            updateHeaderStats();
            alert(`¡Códex importado con éxito! Se sincronizaron ${imported.length} hojas de datos.`);
          } else {
            alert("El archivo no tiene el formato válido de Códex de hojas de datos de 11ª Edición.");
          }
        } catch (err) {
          alert("Error importando archivo JSON de Códex: " + err.message);
        }
      };
      reader.readAsText(file);
    }
  };
  input.click();
}

function resetCodexToDefaults() {
  if (confirm("¿Deseas restaurar todas las hojas de datos a sus valores oficiales originales? Se perderán las modificaciones personalizadas.")) {
    if (window.WH40K_DATA_DEFAULTS && window.WH40K_DATA_DEFAULTS.datasheets) {
      WH40K_DATA.datasheets = JSON.parse(JSON.stringify(window.WH40K_DATA_DEFAULTS.datasheets));
    }
    localStorage.removeItem("cogitator_custom_datasheets");
    renderCodex();
    renderCollection();
    renderArmyBuilder();
    renderBattleTracker();
    updateHeaderStats();
    alert("Códex restaurado a los valores oficiales de 11ª Edición.");
  }
}

// Modal de Actualizaciones Oficiales de Reglas (11ª Edición / Balance Dataslate)
function openRulesUpdateModal() {
  const modal = document.getElementById("rules-update-modal");
  const listEl = document.getElementById("rules-update-content-list");
  if (!modal || !listEl) return;
  
  if (WH40K_DATA.coreRulesUpdates && WH40K_DATA.coreRulesUpdates.length > 0) {
    listEl.innerHTML = WH40K_DATA.coreRulesUpdates.map((rule, idx) => `
      <div style="background: rgba(0,0,0,0.45); border: 1px solid var(--border-subtle); border-left: 3px solid var(--gold-primary); border-radius: var(--radius-sm); padding: 12px 16px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
          <h4 style="color: var(--gold-accent); font-size: 0.95rem; font-family: var(--font-serif); margin: 0;">
            ${idx + 1}. ${rule.title}
          </h4>
          <span style="font-size: 0.7rem; color: var(--caliban-bright); font-weight: 700; text-transform: uppercase;">11ª Ed / Balance</span>
        </div>
        <p style="color: var(--text-main); font-size: 0.85rem; line-height: 1.5; margin: 0;">
          ${rule.desc}
        </p>
      </div>
    `).join("");
  } else {
    listEl.innerHTML = `<p style="color: var(--text-muted);">No hay actualizaciones de reglas cargadas.</p>`;
  }
  
  modal.classList.add("active");
}

function closeRulesUpdateModal() {
  const modal = document.getElementById("rules-update-modal");
  if (modal) modal.classList.remove("active");
}

// Exposición global para interactividad de la interfaz
if (typeof window !== "undefined") {
  window.setBattleTurn = setBattleTurn;
  window.setBattlePhase = setBattlePhase;
  window.nextBattlePhase = nextBattlePhase;
  window.toggleBattleStratagemsScope = toggleBattleStratagemsScope;
  window.useBattleStratagem = useBattleStratagem;
  window.setStratagemPhaseFilter = setStratagemPhaseFilter;
  window.setStratagemTurnFilter = setStratagemTurnFilter;
  window.clearStratagemFilters = clearStratagemFilters;

  // Multi-destacamentos con puntos de destacamento (PD)
  window.addSelectedDetachmentFromSelect = addSelectedDetachmentFromSelect;
  window.removeDetachmentFromActiveList = removeDetachmentFromActiveList;
  window.openManageDetachmentsModal = openManageDetachmentsModal;
  window.closeManageDetachmentsModal = closeManageDetachmentsModal;
  window.filterManageDetachmentsList = filterManageDetachmentsList;
  window.toggleDetachmentInActiveList = toggleDetachmentInActiveList;

  // Editor Interactivo de Destacamentos
  window.openDetachmentEditor = openDetachmentEditor;
  window.closeDetachmentEditorModal = closeDetachmentEditorModal;
  window.saveDetachmentFromEditor = saveDetachmentFromEditor;
  window.setEditorDetDP = setEditorDetDP;
  window.addEnhancementRowToEditor = addEnhancementRowToEditor;
  window.revertCurrentEditorDetachment = revertCurrentEditorDetachment;
  window.deleteCurrentEditorDetachment = deleteCurrentEditorDetachment;
  window.resetAllDetachmentsToDefault = resetAllDetachmentsToDefault;

  // Visualización rápida de Ficha Técnica (Datasheet) en Cogitador de Batalla
  window.openBattleUnitDatasheetModal = openBattleUnitDatasheetModal;
  window.closeBattleUnitDatasheetModal = closeBattleUnitDatasheetModal;
  window.renderBattleUnitDatasheetModalContent = renderBattleUnitDatasheetModalContent;
  window.openRulesUpdateModal = openRulesUpdateModal;
  window.closeRulesUpdateModal = closeRulesUpdateModal;
  window.renderBattleTracker = renderBattleTracker;
  window.AppState = AppState;

  // Pariah Nexus Mazo 2026-2027 y Herramientas Tácticas
  window.renderPariahMissionBriefing = renderPariahMissionBriefing;
  window.generateRandomMissionSetup = generateRandomMissionSetup;
  window.drawSecondaryTacticalCardUi = drawSecondaryTacticalCardUi;
  window.rollChargeDiceQuick = rollChargeDiceQuick;
  window.rollSingleDiceQuick = rollSingleDiceQuick;
  window.toggleScreenWakeLockBtn = toggleScreenWakeLockBtn;

  // Importador y Compartir Listas
  window.openImportArmyModal = openImportArmyModal;
  window.closeImportArmyModal = closeImportArmyModal;
  window.submitImportArmyText = submitImportArmyText;
  window.shareActiveListViaUrl = shareActiveListViaUrl;

  // Recetario de Pintura
  window.openPaintRecipeModal = openPaintRecipeModal;
  window.closePaintRecipeModal = closePaintRecipeModal;
  window.saveCurrentPaintRecipe = saveCurrentPaintRecipe;
}

