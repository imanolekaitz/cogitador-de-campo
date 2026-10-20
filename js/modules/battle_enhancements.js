/**
 * MÓDULO: GESTIÓN DE COMBATE AVANZADO, DESHACER (UNDO) Y FINALIZACIÓN DE BATALLA
 * Características:
 * - Historial de acciones con Deshacer (Undo) para heridas, bajas, CP y VP.
 * - Wake Lock API: mantiene encendida la pantalla de la tablet/móvil durante las partidas.
 * - Pantalla y modal de Fin de Batalla con resumen completo y guardado en Historial.
 * - Registro histórico de partidas jugadas guardado en LocalStorage.
 * - Selector rápido de objetivos para Oath of Moment y recordatorios por fase táctica.
 */

const BattleEnhancements = (function() {

  const actionHistory = [];
  const MAX_HISTORY = 30;
  let wakeLockSentinel = null;

  // Guarda una instantánea del estado de batalla para revertir
  function pushStateSnapshot(description) {
    if (typeof AppState === "undefined" || !AppState.battle) return;
    try {
      const snap = {
        desc: description || "Acción táctica",
        timestamp: Date.now(),
        battle: JSON.parse(JSON.stringify(AppState.battle))
      };
      actionHistory.push(snap);
      if (actionHistory.length > MAX_HISTORY) actionHistory.shift();
      updateUndoButtonState();
    } catch (e) {
      console.warn("No se pudo guardar la instantánea de batalla:", e);
    }
  }

  // Deshacer la última acción
  function undoLastAction() {
    if (actionHistory.length === 0) {
      if (typeof showBattleToast === "function") {
        showBattleToast("No hay acciones previas en el registro para deshacer.");
      }
      return;
    }

    const lastSnap = actionHistory.pop();
    if (lastSnap && lastSnap.battle) {
      AppState.battle = lastSnap.battle;
      if (typeof saveToStorage === "function") saveToStorage();
      if (typeof renderBattleTracker === "function") renderBattleTracker();
      if (typeof showBattleToast === "function") {
        showBattleToast(`↶ Acción revertida: ${lastSnap.desc}`);
      }
      updateUndoButtonState();
    }
  }

  function updateUndoButtonState() {
    const btn = document.getElementById("btn-battle-undo");
    if (btn) {
      btn.disabled = actionHistory.length === 0;
      btn.style.opacity = actionHistory.length === 0 ? "0.45" : "1";
      btn.title = actionHistory.length > 0 
        ? `Deshacer: ${actionHistory[actionHistory.length - 1].desc}` 
        : "Sin acciones para deshacer";
    }
  }

  // Wake Lock API para evitar que la pantalla se apague en torneos / partidas
  async function requestScreenWakeLock() {
    if ("wakeLock" in navigator) {
      try {
        wakeLockSentinel = await navigator.wakeLock.request("screen");
        console.log("🛡️ Cogitador: Pantalla activa bloqueada (Wake Lock)");
        updateWakeLockBadge(true);
        wakeLockSentinel.addEventListener("release", () => {
          updateWakeLockBadge(false);
        });
      } catch (err) {
        console.warn("Wake Lock no concedido:", err);
        updateWakeLockBadge(false);
      }
    }
  }

  function releaseScreenWakeLock() {
    if (wakeLockSentinel) {
      wakeLockSentinel.release();
      wakeLockSentinel = null;
      updateWakeLockBadge(false);
    }
  }

  function updateWakeLockBadge(isActive) {
    const el = document.getElementById("battle-wakelock-status");
    if (el) {
      el.textContent = isActive ? "☀️ Pantalla Siempre Activa" : "🌙 Ahorro de Energía";
      el.style.color = isActive ? "var(--caliban-bright)" : "var(--text-muted)";
    }
  }

  // Finalizar partida y generar resumen
  function finishBattleModal() {
    if (typeof AppState === "undefined" || !AppState.battle) return;
    const b = AppState.battle;
    const pTotal = (b.playerVPPrimary || 0) + (b.playerVPSecondary || 0);
    const oTotal = (b.opponentVPPrimary || 0) + (b.opponentVPSecondary || 0);

    let resultClass = "draw";
    let resultTitle = "⚖️ EMPATE TÁCTICO";
    let resultColor = "var(--gold-accent)";

    if (pTotal > oTotal) {
      resultClass = "victory";
      resultTitle = "🏆 ¡VICTORIA DE LA PRIMERA LEGIÓN!";
      resultColor = "var(--caliban-bright)";
    } else if (pTotal < oTotal) {
      resultClass = "defeat";
      resultTitle = "💀 DERROTA TÁCTICA";
      resultColor = "#f87171";
    }

    const modalHtml = `
      <div class="modal-backdrop active" id="modal-finish-battle" role="dialog" aria-modal="true">
        <div class="modal-content-da" style="max-width: 650px; text-align: center;">
          <div class="modal-header" style="justify-content: center;">
            <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: ${resultColor}; margin: 0;">${resultTitle}</h3>
          </div>
          <div class="modal-body" style="padding: 24px;">
            <div style="display: flex; justify-content: center; align-items: center; gap: 30px; margin-bottom: 20px;">
              <div style="background: rgba(34, 197, 94, 0.1); border: 2px solid var(--caliban-bright); border-radius: var(--radius-md); padding: 16px 24px; min-width: 140px;">
                <span style="font-size: 0.8rem; color: var(--caliban-bright); text-transform: uppercase; font-weight: 700;">Ángeles Oscuros</span>
                <div style="font-size: 2.5rem; font-weight: 900; color: #fff;">${pTotal}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Prim: ${b.playerVPPrimary || 0} | Sec: ${b.playerVPSecondary || 0}</div>
              </div>
              <div style="font-size: 1.5rem; color: var(--text-muted); font-weight: bold;">VS</div>
              <div style="background: rgba(239, 68, 68, 0.1); border: 2px solid #ef4444; border-radius: var(--radius-md); padding: 16px 24px; min-width: 140px;">
                <span style="font-size: 0.8rem; color: #f87171; text-transform: uppercase; font-weight: 700;">Oponente</span>
                <div style="font-size: 2.5rem; font-weight: 900; color: #fff;">${oTotal}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">Prim: ${b.opponentVPPrimary || 0} | Sec: ${b.opponentVPSecondary || 0}</div>
              </div>
            </div>

            <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px; font-size: 0.85rem; color: var(--text-muted); text-align: left; margin-bottom: 20px;">
              <div>⚔️ <strong>Rondas disputadas:</strong> ${b.round} / 5</div>
              <div>⚡ <strong>Puntos de Mando finales:</strong> ${b.commandPoints} CP</div>
              <div>🎯 <strong>Último objetivo de Juramento:</strong> ${b.oathTarget || "Ninguno"}</div>
            </div>

            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
              <button class="btn-gothic-primary" onclick="BattleEnhancements.saveMatchToHistoryAndClose()">
                💾 Guardar en Historial de Batallas
              </button>
              <button class="btn-gothic-secondary" onclick="BattleEnhancements.resetMatchState()">
                ↺ Reiniciar Nueva Batalla
              </button>
              <button class="btn-gothic-secondary" onclick="document.getElementById('modal-finish-battle').remove()">
                ✕ Volver a la Mesa
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    const oldModal = document.getElementById("modal-finish-battle");
    if (oldModal) oldModal.remove();

    const wrapper = document.createElement("div");
    wrapper.innerHTML = modalHtml;
    document.body.appendChild(wrapper.firstElementChild);
  }

  function saveMatchToHistoryAndClose() {
    try {
      const b = AppState.battle;
      const activeList = typeof getActiveArmyList === "function" ? getActiveArmyList() : null;
      const history = JSON.parse(localStorage.getItem("cogitator_match_history") || "[]");

      const matchRecord = {
        id: "match_" + Date.now(),
        date: new Date().toISOString(),
        armyName: activeList ? activeList.name : "Fuerza de la Primera Legión",
        playerVP: (b.playerVPPrimary || 0) + (b.playerVPSecondary || 0),
        opponentVP: (b.opponentVPPrimary || 0) + (b.opponentVPSecondary || 0),
        rounds: b.round,
        outcome: (b.playerVPPrimary + b.playerVPSecondary) > (b.opponentVPPrimary + b.opponentVPSecondary) ? "victory" : "defeat"
      };

      history.unshift(matchRecord);
      localStorage.setItem("cogitator_match_history", JSON.stringify(history));

      const modal = document.getElementById("modal-finish-battle");
      if (modal) modal.remove();

      if (typeof showBattleToast === "function") {
        showBattleToast("Partida archivada en el Historial de la Roca.");
      }
    } catch (e) {
      console.error("Error guardando el historial de partida:", e);
    }
  }

  function resetMatchState() {
    if (confirm("¿Confirmas el reinicio de todos los contadores de la partida para comenzar un nuevo combate?")) {
      AppState.battle = {
        round: 1,
        turn: "player",
        phase: "command",
        commandPoints: 1,
        playerVPPrimary: 0,
        playerVPSecondary: 0,
        opponentVPPrimary: 0,
        opponentVPSecondary: 0,
        oathTarget: "No designado",
        unitStates: {},
        stratagemScopeOnlyArmy: true
      };
      if (typeof saveToStorage === "function") saveToStorage();
      if (typeof renderBattleTracker === "function") renderBattleTracker();
      const modal = document.getElementById("modal-finish-battle");
      if (modal) modal.remove();
      if (typeof showBattleToast === "function") {
        showBattleToast("¡Cogitador de Batalla listo para un nuevo enfrentamiento!");
      }
    }
  }

  return {
    pushStateSnapshot,
    undoLastAction,
    requestScreenWakeLock,
    releaseScreenWakeLock,
    finishBattleModal,
    saveMatchToHistoryAndClose,
    resetMatchState
  };

})();

// Exportar
if (typeof module !== "undefined" && module.exports) {
  module.exports = BattleEnhancements;
}
if (typeof window !== "undefined") {
  window.BattleEnhancements = BattleEnhancements;
}
