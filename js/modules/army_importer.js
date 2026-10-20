/**
 * MÓDULO: IMPORTADOR INTELIGENTE DE LISTAS (GW APP, NEW RECRUIT, BATTLESCRIBE, WTC TEXT)
 * Parsea el texto copiado de apps oficiales de Warhammer 40k y genera una lista
 * válida en el Cogitador de Campo mapeando automáticamente con las 113 hojas de datos oficiales.
 */

const ArmyListImporter = (function() {

  function importFromText(rawText, datasheets, detachments) {
    if (!rawText || !rawText.trim()) {
      return { success: false, error: "El texto de la lista está vacío." };
    }

    const lines = rawText.split("\n").map(l => l.trim()).filter(Boolean);
    let armyName = "Fuerza Importada";
    let pointsLimit = 2000;
    let detachmentId = "inner_circle"; // Default DA
    let detectedUnits = [];

    // 1. Detectar nombre de la lista y destacamento
    for (const line of lines) {
      if (/^(EJ[EÉ]RCITO|ARMY|LISTA|FORCE):/i.test(line)) {
        armyName = line.split(":")[1].trim();
      }
      if (/^(DESTACAMENTO|DETACHMENT):/i.test(line)) {
        const detName = line.split(":")[1].trim().toLowerCase();
        const foundDet = detachments.find(d => 
          d.name.toLowerCase().includes(detName) || 
          (d.originalName && d.originalName.toLowerCase().includes(detName)) ||
          detName.includes(d.name.toLowerCase())
        );
        if (foundDet) detachmentId = foundDet.id;
      }
      if (/(\d{3,4})\s*(pts|puntos)/i.test(line)) {
        const match = line.match(/(\d{3,4})\s*(pts|puntos)/i);
        if (match) {
          const val = parseInt(match[1]);
          if (val > 1500) pointsLimit = 2000;
          else if (val > 750) pointsLimit = 1000;
          else if (val > 0) pointsLimit = 500;
        }
      }
    }

    // 2. Escanear unidades por coincidencia con hojas de datos
    datasheets.forEach(ds => {
      const cleanDsName = ds.name.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
      const cleanOrig = (ds.originalName || "").toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].toLowerCase();
        
        // Coincidencia de nombre de hoja de datos
        if (line.includes(cleanDsName) || (cleanOrig && line.includes(cleanOrig))) {
          // Extraer número de miniaturas si está presente (ej: "10x", "5 miniaturas", "(10)")
          let modelsCount = ds.pointsOptions && ds.pointsOptions[0] ? ds.pointsOptions[0].models : 1;
          const countMatch = lines[i].match(/(\d+)\s*(miniaturas|models|x)/i) || lines[i].match(/^(\d+)\s+/);
          if (countMatch) {
            const countVal = parseInt(countMatch[1]);
            if (ds.pointsOptions.some(p => p.models === countVal)) {
              modelsCount = countVal;
            }
          }

          // Detectar si es Warlord
          const isWarlord = /warlord|se[nñ]or de la guerra/i.test(lines[i]) || 
            (i + 1 < lines.length && /warlord|se[nñ]or de la guerra/i.test(lines[i + 1]));

          // Detectar mejora
          let enhancementId = null;
          for (const det of detachments) {
            for (const enh of (det.enhancements || [])) {
              const enhName = enh.name.toLowerCase().replace(/\s*\([^)]*\)/g, "").trim();
              if (line.includes(enhName) || (i + 1 < lines.length && lines[i + 1].toLowerCase().includes(enhName))) {
                enhancementId = enh.id;
                break;
              }
            }
            if (enhancementId) break;
          }

          detectedUnits.push({
            instanceId: "u_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
            datasheetId: ds.id,
            modelsCount,
            isWarlord,
            enhancementId,
            attachedToUnitInstanceId: null
          });
          break; // Siguiente datasheet
        }
      }
    });

    if (detectedUnits.length === 0) {
      return {
        success: false,
        error: "No se pudieron identificar unidades de Ángeles Oscuros / Marines Espaciales en el texto proporcionado. Asegúrate de copiar el formato de lista de GW App o New Recruit."
      };
    }

    // Asegurar que haya 1 Warlord
    if (!detectedUnits.some(u => u.isWarlord)) {
      const firstChar = detectedUnits.find(u => {
        const ds = datasheets.find(d => d.id === u.datasheetId);
        return ds && Array.isArray(ds.keywords) && (ds.keywords.includes("PERSONAJE") || ds.keywords.includes("CHARACTER") || ds.role === "Líder" || ds.isEpicHero);
      });
      if (firstChar) firstChar.isWarlord = true;
    }

    const newList = {
      id: "list_" + Date.now(),
      name: armyName,
      pointsLimit,
      detachmentId,
      detachmentIds: [detachmentId],
      units: detectedUnits
    };

    return {
      success: true,
      list: newList,
      count: detectedUnits.length
    };
  }

  // Genera un enlace URL compacto con la lista codificada en Base64 para compartir
  function generateShareableUrl(list) {
    try {
      const minified = {
        n: list.name,
        p: list.pointsLimit,
        d: list.detachmentId,
        ds: list.detachmentIds || [list.detachmentId],
        u: (list.units || []).map(u => ({
          d: u.datasheetId,
          m: u.modelsCount,
          w: u.isWarlord ? 1 : 0,
          e: u.enhancementId || null,
          a: u.attachedToUnitInstanceId || null
        }))
      };
      const jsonStr = JSON.stringify(minified);
      let encoded = "";
      if (typeof Buffer !== "undefined") {
        encoded = Buffer.from(jsonStr, "utf8").toString("base64");
      } else {
        const bytes = new TextEncoder().encode(jsonStr);
        let binary = "";
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        encoded = btoa(binary);
      }

      const baseHref = (typeof window !== "undefined" && window.location && window.location.href)
        ? window.location.href
        : "https://cogitador.local/index.html";
      const url = new URL(baseHref);
      url.searchParams.set("army", encoded);
      return url.toString();
    } catch (e) {
      console.error("Error generando enlace para compartir:", e);
      return null;
    }
  }

  function decodeShareableUrl(urlSearchParam) {
    try {
      if (!urlSearchParam) return null;
      let jsonStr = "";
      if (typeof Buffer !== "undefined") {
        jsonStr = Buffer.from(urlSearchParam, "base64").toString("utf8");
      } else {
        const binary = atob(urlSearchParam);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        jsonStr = new TextDecoder().decode(bytes);
      }

      const min = JSON.parse(jsonStr);
      return {
        id: "list_shared_" + Date.now(),
        name: min.n || "Lista Compartida",
        pointsLimit: min.p || 2000,
        detachmentId: min.d || "inner_circle",
        detachmentIds: min.ds || [min.d || "inner_circle"],
        units: (min.u || []).map((u, i) => ({
          instanceId: "u_sh_" + Date.now() + "_" + i,
          datasheetId: u.d,
          modelsCount: u.m,
          isWarlord: !!u.w,
          enhancementId: u.e || null,
          attachedToUnitInstanceId: u.a || null
        }))
      };
    } catch (e) {
      console.warn("No se pudo descifrar la lista de la URL:", e);
      return null;
    }
  }

  return {
    importFromText,
    generateShareableUrl,
    decodeShareableUrl
  };

})();

// Exportar
if (typeof module !== "undefined" && module.exports) {
  module.exports = ArmyListImporter;
}
if (typeof window !== "undefined") {
  window.ArmyListImporter = ArmyListImporter;
}
