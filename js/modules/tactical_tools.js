/**
 * MÓDULO: RECURSOS TÁCTICOS Y MODELISMO (DICE ROLLER, CHESS CLOCK Y RECETARIO DE PINTURA)
 * 1. Lanzador de Dados Táctico (2D6 Cargas con repetición, D6, Nd6 con filtros de éxitos).
 * 2. Reloj de Torneo / Chess Clock (temporizador dual por jugador con control de pausas).
 * 3. Galería y Recetas de Pintura persistentes en LocalStorage/IndexedDB.
 */

const TacticalTools = (function() {

  // RELOJ DE AJEDREZ / TORNEO (CHESS CLOCK)
  let chessClock = {
    playerTime: 60 * 60, // 60 minutos por defecto
    opponentTime: 60 * 60,
    activeSide: null, // "player" | "opponent" | null
    intervalId: null
  };

  function setInitialClockMinutes(mins) {
    chessClock.playerTime = mins * 60;
    chessClock.opponentTime = mins * 60;
    chessClock.activeSide = null;
    if (chessClock.intervalId) clearInterval(chessClock.intervalId);
    updateClockDisplay();
  }

  function startClock(side) {
    chessClock.activeSide = side;
    if (chessClock.intervalId) clearInterval(chessClock.intervalId);

    chessClock.intervalId = setInterval(() => {
      if (chessClock.activeSide === "player" && chessClock.playerTime > 0) {
        chessClock.playerTime--;
      } else if (chessClock.activeSide === "opponent" && chessClock.opponentTime > 0) {
        chessClock.opponentTime--;
      }
      updateClockDisplay();
    }, 1000);

    updateClockDisplay();
  }

  function toggleClock() {
    if (!chessClock.activeSide || chessClock.activeSide === "opponent") {
      startClock("player");
    } else {
      startClock("opponent");
    }
  }

  function pauseClock() {
    if (chessClock.intervalId) {
      clearInterval(chessClock.intervalId);
      chessClock.intervalId = null;
    }
    chessClock.activeSide = null;
    updateClockDisplay();
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  function updateClockDisplay() {
    const elP = document.getElementById("clock-player-time");
    const elO = document.getElementById("clock-opp-time");
    const btnToggle = document.getElementById("btn-clock-toggle");

    if (elP) {
      elP.textContent = formatTime(chessClock.playerTime);
      elP.style.color = chessClock.activeSide === "player" ? "var(--caliban-bright)" : "var(--text-main)";
    }
    if (elO) {
      elO.textContent = formatTime(chessClock.opponentTime);
      elO.style.color = chessClock.activeSide === "opponent" ? "#f87171" : "var(--text-main)";
    }
    if (btnToggle) {
      btnToggle.textContent = chessClock.activeSide ? "Cambiar Turno Reloj ⏱️" : "Iniciar Reloj ▶️";
    }
  }

  // LANZADOR DE DADOS TÁCTICO
  function rollDice(count = 1, sides = 6) {
    const results = [];
    for (let i = 0; i < count; i++) {
      results.push(Math.floor(Math.random() * sides) + 1);
    }
    return results;
  }

  function rollCharge(reroll = false) {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const total = d1 + d2;
    return {
      d1,
      d2,
      total,
      text: `🎲 Tirada de Carga: [${d1}] + [${d2}] = ${total}" ${reroll ? '(Repetición de carga disponible)' : ''}`
    };
  }

  // RECETAS DE PINTURA (ALMACENAMIENTO POR MINIATURA)
  function getPaintingRecipe(miniatureId) {
    const recipes = JSON.parse(localStorage.getItem("cogitator_paint_recipes") || "{}");
    return recipes[miniatureId] || "";
  }

  function savePaintingRecipe(miniatureId, recipeText) {
    const recipes = JSON.parse(localStorage.getItem("cogitator_paint_recipes") || "{}");
    recipes[miniatureId] = recipeText;
    localStorage.setItem("cogitator_paint_recipes", JSON.stringify(recipes));
  }

  return {
    setInitialClockMinutes,
    startClock,
    toggleClock,
    pauseClock,
    rollDice,
    rollCharge,
    getPaintingRecipe,
    savePaintingRecipe
  };

})();

// Exportar
if (typeof module !== "undefined" && module.exports) {
  module.exports = TacticalTools;
}
if (typeof window !== "undefined") {
  window.TacticalTools = TacticalTools;
}
