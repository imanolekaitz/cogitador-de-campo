# ⚔️ Cogitador de Campo: La Roca

> **Herramienta táctica de gestión de colección, creación de listas y cogitador de batalla para Ángeles Oscuros (*Warhammer 40,000 11ª Edición / Wahapedia 11ed*).**

![Warhammer 40k](https://img.shields.io/badge/Warhammer%2040K-11th%20Edition-red.svg)
![Faction](https://img.shields.io/badge/Faction-Dark%20Angels-004d25.svg)
![Language](https://img.shields.io/badge/Idiomas-Espa%C3%B1ol%20%7C%20English-blue.svg)
![Tech](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS%20(Vanilla)-darkgreen.svg)

---

## 📖 Descripción General

El **Cogitador de Campo** es una aplicación web interactiva diseñada para comandantes del capítulo de los **Ángeles Oscuros** (La Primera Legión). Permite administrar tanto la colección física de miniaturas (seguimiento de inventario, montaje y progreso de pintura *Battle Ready*) como planificar y pilotar partidas competitivas y narrativas de Warhammer 40k.

---

## ✨ Características Principales

- 🏛️ **Inventario de Colección:** Registro detallado de miniaturas, estado de montaje, pintura (imprimado, base, *battle ready*, desfile) y recuento de puntos según el MFM (*Munitorum Field Manual*).
- 📜 **Creador y Validador de Listas:**
  - Selección de Destacamentos oficiales (Fuerza de Asalto del Ala de Muerte, Fuerza de Asalto Cazaenjambres, Destacamento del Círculo Interior, etc.).
  - Asignación de Mejoras (*Enhancements*) con validación de puntos y restricciones de líderes.
  - Reglas de Líderes y Unidades Adjuntas automáticas.
- ⚡ **Compendio de Estratagemas:**
  - Catálogo completo con filtrado por fase de batalla, tipo y destacamento.
  - Disponibilidad bilingüe (Castellano e Inglés).
- ⚔️ **Modo Batalla y Cogitador Táctico:**
  - Simulador de combate y cálculo de probabilidades/daño.
  - Comparador de perfiles y datasheets entre unidades.
  - Control de turnos, puntos de victoria (VP) y puntos de mando (CP).
- 🎨 **Estética Inmersiva de la Roca:** Interfaz estilizada inspirada en terminales cogitadoras del Imperio de la Humanidad, fuentes góticas e iconografía del Ala de Muerte y Ala de Cuervo.

---

## 🚀 Cómo Ejecutar el Proyecto

No requiere dependencias complejas ni compilación previa.

### Opción 1: Directo en el Navegador
Abre directamente el archivo `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Safari).

### Opción 2: Servidor Local Ligero (Node.js)
Si tienes Node.js instalado, puedes levantar el servidor local incluido:

```bash
node server.js
```
Luego abre tu navegador en: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estructura del Repositorio

```text
├── index.html          # Interfaz principal del Cogitador de Campo
├── css/
│   └── style.css       # Sistema de diseño, temas góticos y animaciones
├── js/
│   ├── app.js          # Lógica interactiva, gestión de estado y componentes UI
│   └── data.js         # Base de datos de datasheets, destacamentos y estratagemas
├── Reglas/             # Documentos PDF y referencias de reglas
├── server.js           # Servidor local HTTP básico
└── README.md           # Documentación del proyecto
```

---

## 🛡️ Licencia y Reconocimientos

Warhammer 40,000, Dark Angels, Deathwing, Ravenwing y todo el arte/lore asociado son marcas registradas y propiedad intelectual de **Games Workshop Limited**. Esta herramienta ha sido desarrollada como proyecto de aficionado sin fines comerciales.
