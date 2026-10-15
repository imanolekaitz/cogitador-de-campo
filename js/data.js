/**
 * BASE DE DATOS OFICIAL: ÁNGELES OSCUROS (11ª EDICIÓN / REGLAS ACTUALIZADAS 2026)
 * Fuentes: 
 * - Wahapedia 11th Ed (https://wahapedia.ru/wh40k11ed/factions/space-marines/dark-angels)
 * - Munitorum Field Manual v1.5 (Warhammer Community)
 * - Balance Dataslate 2026 / Actualización de Reglas
 */

const WH40K_DATA = {
  edition: "11ª Edición (Reglamento Actualizado 2026 / Wahapedia 11ed)",
  faction: "Ángeles Oscuros",
  originalFaction: "Dark Angels",
  superFaction: "Imperium",
  factionRule: {
    name: "Juramento de Momento (Oath of Moment)",
    originalName: "Oath of Moment",
    description: "Al principio de tu fase de mando, selecciona una unidad del ejército de tu oponente. Hasta el principio de tu siguiente fase de mando, cada vez que una miniatura de tu ejército con esta habilidad realice un ataque dirigido a esa unidad objetivo, puedes repetir la tirada para impactar."
  },
  
  // REGLAS ESPECÍFICAS DE CAPÍTULO DE LOS ÁNGELES OSCUROS
  chapterRules: [
    {
      name: "El Ala de Muerte (The Deathwing)",
      originalName: "The Deathwing",
      description: "Veteranos de la 1.ª Compañía. Obtienen la clave ALA DE MUERTE (DEATHWING). Se benefician de reglas especiales en destacamentos del Círculo Interior e inmunidad o bonificaciones contra acobardamiento y heridas."
    },
    {
      name: "El Ala de Cuervo (The Ravenwing)",
      originalName: "The Ravenwing",
      description: "Especialistas móviles de la 2.ª Compañía. Obtienen la clave ALA DE CUERVO (RAVENWING). Unidades con Propulsores, Motos, Deslizadores y Aeronaves adquieren movilidad implacable y opciones de Avanzar y Disparar o Cargar."
    }
  ],

  // ACTUALIZACIONES BÁSICAS Y BALANCE OFICIAL 2026
  coreRulesUpdates: [
    {
      title: "Modificadores de Estratagemas a 0 PM (0 CP)",
      desc: "Las reglas que te permiten tomar una unidad de tu ejército como blanco de una estratagema por 0 PM/CP, pero que no especifican el nombre de la estratagema, en su lugar reducen en 1 PM/CP el coste del uso de esa estratagema (p. ej. habilidades de Capitán)."
    },
    {
      title: "Reutilización de Estratagemas en la Misma Fase",
      desc: "Las reglas que permiten usar una estratagema aunque ya se haya usado en esa fase solo pueden utilizarse si el nombre de la estratagema está especificado explícitamente en esa regla. Las estratagemas limitadas a una vez por ronda (p. ej. Disparos Preventivos / Overwatch) siguen esta misma restricción."
    },
    {
      title: "Alcance de Protección de Sigilo a Distancia (18\" o menos)",
      desc: "Si una estratagema o regla tiene un efecto que dice que la unidad blanco solo puede ser tomada como blanco si el atacante está a 12\" o menos (p. ej. Halo de Fuego Espiritual o Pantallas de Humo), se actualiza a: solo puede tomarse como blanco si la miniatura atacante está a 18\" o menos."
    },
    {
      title: "Estratagemas de Refuerzo / Nuevas Unidades",
      desc: "Si una estratagema añade una nueva unidad a tu ejército como refuerzo, adquiere la restricción: 'Solo puedes usar esta estratagema una vez por batalla'."
    },
    {
      title: "Desembarco de Asalto y Choque desde Transportes",
      desc: "Desembarco de Asalto (18.06): si un Transporte hizo Movimiento Normal y permite desembarcar y cargar. Desembarco de Choque (18.07): si un Transporte hizo Movimiento de Avanzar y permite desembarcar."
    }
  ],

  // GLOSARIO DE PALABRAS CLAVE (KEYWORDS) WAHAPEDIA 11ED
  keywords: {
    "Adeptus Astartes": {
        "es": "Adeptus Astartes",
        "cat": "Faction",
        "desc": "Guerreros modificados genéticamente de los Capítulos de Marines Espaciales del Emperador."
    },
    "Dark Angels": {
        "es": "Ángeles Oscuros",
        "cat": "Faction",
        "desc": "La Primera Legión, cazadores de los Caídos organizados en las alas especializadas Ala de Muerte y Ala de Cuervo."
    },
    "Deathwing": {
        "es": "Ala de Muerte",
        "cat": "Wing",
        "desc": "La 1ª Compañía de veteranos en armadura de Exterminador o armaduras pesadas con secretos del Círculo Interior."
    },
    "Ravenwing": {
        "es": "Ala de Cuervo",
        "cat": "Wing",
        "desc": "La 2ª Compañía de combate móvil sobre motos, speeders y cazas aéreos de intercepción rápida."
    },
    "Imperium": {
        "es": "Imperio de la Humanidad",
        "cat": "Superfaction",
        "desc": "Fuerzas leales al Trono Dorado del Emperador de la Humanidad."
    },
    "Infantry": {
        "es": "Infantería",
        "cat": "Unit Type",
        "desc": "Tropas a pie capaces de ocupar ruinas, atravesar terreno difícil y tomar objetivos con cobertura."
    },
    "Character": {
        "es": "Personaje",
        "cat": "Unit Role",
        "desc": "Líderes de batalla, héroes o comandantes que pueden unirse a escuadras como guardaespaldas."
    },
    "Epic Hero": {
        "es": "Héroe Épico",
        "cat": "Unit Role",
        "desc": "Personajes legendarios de nombre propio con reglas únicas (máximo 1 copia por ejército)."
    },
    "Primarch": {
        "es": "Primarca",
        "cat": "Unit Role",
        "desc": "Uno de los hijos genéticos del Emperador, gobernante y maestro de su Legión."
    },
    "Captain": {
        "es": "Capitán",
        "cat": "Leader",
        "desc": "Comandante de compañía capaz de dirigir tácticas y abaratar el uso de estratagemas."
    },
    "Chapter Master": {
        "es": "Gran Maestre",
        "cat": "Leader",
        "desc": "Comandante supremo del Capítulo con autoridad táctica y liderazgo supremo."
    },
    "Chaplain": {
        "es": "Capellán",
        "cat": "Leader",
        "desc": "Líder espiritual y guerrero zealote que inspira a sus hermanos con cánticos y bendiciones de batalla."
    },
    "Librarian": {
        "es": "Bibliotecario",
        "cat": "Leader",
        "desc": "Psíquico entrenado que canaliza las energías de la Disformidad en defensa de sus hermanos."
    },
    "Ancient": {
        "es": "Portaestandarte",
        "cat": "Leader",
        "desc": "Guardián de los estandartes venerados que inspira el control de objetivos (CO)."
    },
    "Psyker": {
        "es": "Psíquico",
        "cat": "Ability",
        "desc": "Unidad con poderes psíquicos capaces de manipular la Disformidad para atacar o defender."
    },
    "Terminator": {
        "es": "Exterminador",
        "cat": "Armor Type",
        "desc": "Portador de la armadura táctica Acorazada Indomitus o Tartaros con salvación invulnerable 4++."
    },
    "Tacticus": {
        "es": "Tacticus",
        "cat": "Armor Type",
        "desc": "Armadura estándar Primaris Mark X, equilibrada en movilidad y protección."
    },
    "Phobos": {
        "es": "Phobos",
        "cat": "Armor Type",
        "desc": "Armadura ligera Mark X orientada a sigilo, infiltración y hostigamiento."
    },
    "Gravis": {
        "es": "Gravis",
        "cat": "Armor Type",
        "desc": "Armadura pesada Mark X reforzada con mayor Resistencia (R6) y blindaje."
    },
    "Mounted": {
        "es": "Montado",
        "cat": "Unit Type",
        "desc": "Unidades en motos o monturas rápidas con gran alcance de movimiento."
    },
    "Vehicle": {
        "es": "Vehículo",
        "cat": "Unit Type",
        "desc": "Tanques, transportes y blindados con capacidad de disparar dentro del combate (Grandes Armas no Descansan)."
    },
    "Walker": {
        "es": "Bípode",
        "cat": "Unit Type",
        "desc": "Vehículo acorazado con extremidades mecánicas como los temibles Dreadnoughts."
    },
    "Dreadnought": {
        "es": "Dreadnought",
        "cat": "Unit Type",
        "desc": "Sarcófago de soporte vital blindado que alberga a un héroe veterano herido de muerte."
    },
    "Transport": {
        "es": "Transporte",
        "cat": "Function",
        "desc": "Vehículo diseñado para albergar escuadras de infantería en su interior y protegerlas."
    },
    "Dedicated Transport": {
        "es": "Transporte Asignado",
        "cat": "Function",
        "desc": "Transporte que debe empezar la batalla con una unidad embarcada para no ser destruido."
    },
    "Fly": {
        "es": "Volar",
        "cat": "Movement",
        "desc": "Capaz de ignorar el terreno y otras miniaturas al medir el movimiento horizontal y vertical."
    },
    "Aircraft": {
        "es": "Aeronave",
        "cat": "Unit Type",
        "desc": "Naves en vuelo supersónico que operan a alta velocidad y reglas especiales de maniobra."
    },
    "Speeder": {
        "es": "Deslizador",
        "cat": "Vehicle Type",
        "desc": "Vehículo gravítico ligero y ágil de ataque rápido y apoyo artillero."
    },
    "Smoke": {
        "es": "Humo",
        "cat": "Defensive",
        "desc": "Permite usar la estratagema de Humo para obtener cobertura y penalización de -1 a impactar."
    },
    "Explosives": {
        "es": "Explosivos / Granadas",
        "cat": "Wargear",
        "desc": "Permite el uso de la estratagema de Granadas para infligir heridas mortales a distancia."
    },
    "Titanic": {
        "es": "Titánico",
        "cat": "Scale",
        "desc": "Máquinas bélicas gigantescas que pueden pasar por encima de elementos de escenografía."
    },
    "Jump Pack": {
        "es": "Propulsor de Salto",
        "cat": "Movement",
        "desc": "Retrorreactores que proporcionan la clave Volar y un movimiento incrementado a 12\"."
    },
    "Battleline": {
        "es": "Línea de Batalla",
        "cat": "Role",
        "desc": "Unidades troncales que pueden incluir hasta 6 copias en la lista de ejército."
    },
    "Assault": {
        "es": "Asalto",
        "cat": "Weapon Rule",
        "desc": "El arma puede disparar en un turno en el que la unidad haya Avanzado."
    },
    "Heavy": {
        "es": "Pesada",
        "cat": "Weapon Rule",
        "desc": "Suma +1 a la tirada para impactar si la miniatura atacante se mantuvo estacionaria."
    },
    "Rapid Fire": {
        "es": "Fuego Rápido",
        "cat": "Weapon Rule",
        "desc": "Añade ataques adicionales por valor de X si el blanco está a la mitad del alcance máximo."
    },
    "Pistol": {
        "es": "Pistola",
        "cat": "Weapon Rule",
        "desc": "Puede dispararse incluso mientras la unidad atacante esté trabada en combate cuerpo a cuerpo."
    },
    "Blast": {
        "es": "Área",
        "cat": "Weapon Rule",
        "desc": "Suma +1 ataque por cada 5 miniaturas que compongan la unidad objetivo. No puede dispararse trabado."
    },
    "Devastating Wounds": {
        "es": "Heridas Devastadoras",
        "cat": "Weapon Rule",
        "desc": "Las heridas críticas infligen daño que no permite salvaciones normales ni invulnerables."
    },
    "Lethal Hits": {
        "es": "Golpes Letales",
        "cat": "Weapon Rule",
        "desc": "Los impactos críticos (6 natural) hieren automáticamente al objetivo sin tirar para herir."
    },
    "Sustained Hits": {
        "es": "Impactos Sostenidos",
        "cat": "Weapon Rule",
        "desc": "Los impactos críticos (6 natural) generan X impactos adicionales automáticos."
    },
    "Hazardous": {
        "es": "Peligrosa",
        "cat": "Weapon Rule",
        "desc": "Tras disparar, tira 1D6 por arma peligrosa utilizada: con un 1 natural la unidad sufre 3 mortales o se destruye el modelo."
    },
    "Twin-linked": {
        "es": "Doble Enlace / Acoplada",
        "cat": "Weapon Rule",
        "desc": "Permite repetir las tiradas para herir realizadas con esta arma."
    },
    "Torrent": {
        "es": "Torrente",
        "cat": "Weapon Rule",
        "desc": "El arma impacta automáticamente al objetivo sin necesidad de tirar tirada para impactar."
    },
    "Precision": {
        "es": "Precisión",
        "cat": "Weapon Rule",
        "desc": "Permite asignar el daño directamente a miniaturas con la clave Personaje dentro de la unidad objetivo."
    },
    "Lance": {
        "es": "Lanza",
        "cat": "Weapon Rule",
        "desc": "Suma +1 a la tirada para herir si la miniatura atacante cargó en ese turno."
    },
    "Ignores Cover": {
        "es": "Ignora Cobertura",
        "cat": "Weapon Rule",
        "desc": "El blanco no obtiene el beneficio de la cobertura contra los ataques de esta arma."
    },
    "Anti-X": {
        "es": "Anti-X",
        "cat": "Weapon Rule",
        "desc": "Una tirada para herir sin modificar igual o superior a X es una Herida Crítica contra el tipo especificado."
    },
    "Melta": {
        "es": "Fusión",
        "cat": "Weapon Rule",
        "desc": "Suma daño adicional a la característica D si el blanco está a la mitad del alcance."
    },
    "Psychic": {
        "es": "Psíquico",
        "cat": "Weapon Rule",
        "desc": "Ataques canalizados mediante poderes psíquicos sujetos a protecciones contra poderes de la disformidad."
    },
    "One Shot": {
        "es": "Un Solo Disparo",
        "cat": "Weapon Rule",
        "desc": "El arma solo puede dispararse una única vez durante toda la batalla."
    },
    "Deep Strike": {
        "es": "Despliegue Rápido",
        "cat": "Core Rule",
        "desc": "La unidad puede iniciar en reservas y desplegar en la fase de refuerzos a más de 9\" de enemigos."
    },
    "Infiltrators": {
        "es": "Infiltradores",
        "cat": "Core Rule",
        "desc": "Puede desplegar en cualquier punto del campo de batalla a más de 9\" de la zona enemiga y miniaturas rivales."
    },
    "Scouts": {
        "es": "Exploradores",
        "cat": "Core Rule",
        "desc": "Antes del primer turno, puede realizar un movimiento libre de hasta X pulgadas."
    },
    "Stealth": {
        "es": "Sigilo",
        "cat": "Core Rule",
        "desc": "Resta 1 a las tiradas para impactar de ataques a distancia dirigidos contra esta unidad."
    },
    "Lone Operative": {
        "es": "Operativo Solitario",
        "cat": "Core Rule",
        "desc": "Solo puede ser seleccionado como blanco de ataques a distancia si el atacante está a 12\" (o 18\" según balance 2026)."
    },
    "Feel No Pain": {
        "es": "No Hay Dolor",
        "cat": "Core Rule",
        "desc": "Permite tirar un dado por cada punto de daño sufrido: con tirada igual o superior a X, la herida se ignora."
    },
    "Fights First": {
        "es": "Combate Primero",
        "cat": "Core Rule",
        "desc": "La unidad combate al principio de la fase de combate, antes que las unidades normales."
    },
    "Deadly Demise": {
        "es": "Muerte Funesta",
        "cat": "Core Rule",
        "desc": "Al ser destruida, tira 1D6: con un 6 explota infligiendo mortales a todas las unidades a X pulgadas."
    }
},

  // DESTACAMENTOS (DETACHMENTS) WAHAPEDIA 11ED & CODEX
  detachments: [
{
    "id": "inner_circle",
    "name": "Contingente del Círculo Interior",
    "originalName": "Inner Circle Task Force",
    "type": "Activos Prioritarios (Priority Assets)",
    "isExclusiveDA": true,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Destacamento de asalto de élite centrado en Exterminadores y Veteranos del Ala de Muerte. Su objetivo es designar un marcador clave de la mesa como 'Objetivo Jurado' y erradicar implacablemente a cualquier enemigo que ose disputarlo con bonificaciones letales a las tiradas para herir.",
    "ruleName": "Objetivo Jurado (Vowed Target)",
    "ruleDesc": "Al inicio de tu Fase de Mando, selecciona un marcador de objetivo como tu Objetivo Jurado. Los ataques de unidades de INFANTERÍA del ALA DE MUERTE que tomen como blanco a una unidad enemiga dentro del alcance de tu objetivo jurado obtienen +1 a las tiradas para herir.",
    "synergies": [
      "Caballeros del Ala de Muerte",
      "Escuadra de Exterminadores del Ala de Muerte",
      "Lion El'Jonson",
      "Belial",
      "Camaradas del Círculo Interior",
      "Escuadra de Veteranos de Ferreaguardia",
      "Capitán con Armadura de Exterminador"
    ],
    "pros": [
      "+1 a herir constante sobre el objetivo jurado para toda la infantería Deathwing.",
      "Coste económico de solo 1 PD.",
      "Acceso a Despliegue Rápido a más de 3\" y combate al morir."
    ],
    "cons": [
      "La bonificación solo aplica contra enemigos dentro del rango del objetivo jurado.",
      "No beneficia a unidades de vehículos o motos del Ala de Cuervo."
    ],
    "enhancements": [
      {
        "id": "enh_ic_1",
        "name": "Voluntad Singular (Singular Will)",
        "points": 20,
        "description": "Solo miniatura del Ala de Muerte. Cuando esta unidad realiza un movimiento de consolidación, puede mover hasta 6\" en lugar de 3\"."
      },
      {
        "id": "enh_ic_2",
        "name": "Adalid del Ala de Muerte (Champion of the Deathwing)",
        "points": 20,
        "description": "Solo miniatura del Ala de Muerte. Los ataques cuerpo a cuerpo de esta unidad contra enemigos en tu objetivo jurado obtienen Impactos Críticos con 5+."
      },
      {
        "id": "enh_ic_3",
        "name": "Ojo de los Invisibles (Eye of the Unseen)",
        "points": 10,
        "description": "Solo Personaje del Ala de Muerte. Las unidades enemigas a 6\" o menos sufren -1 a su atributo de Liderazgo. Cada vez que el oponente use una Estratagema sobre una unidad a 12\" o menos del portador, tira 1D6: con 5+, ganas 1 Punto de Mando (CP)."
      },
      {
        "id": "enh_ic_4",
        "name": "Asalto del Ala de Muerte (Deathwing Assault)",
        "points": 30,
        "description": "Solo miniatura del Ala de Muerte con la habilidad Despliegue Rápido. Esta unidad puede desplegar mediante Despliegue Rápido en tu primera, segunda o tercera Fase de Movimiento, independientemente de cualquier regla de misión."
      }
    ],
    "stratagems": [
      {
        "name": "Deber más allá de la Muerte (Duty Unto Death)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a una miniatura del Ala de Muerte eliminada combatir con tirada de 4+ (o 3+ si está en el Objetivo Jurado) antes de ser retirada."
      },
      {
        "name": "Teleportarium de Reliquia (Relic Teleportarium)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a una unidad de Exterminadores desplegar mediante Despliegue Rápido a más de 3\" horizontalmente del enemigo (no puede declarar carga ese turno)."
      },
      {
        "name": "La Ira del León (Wrath of the Lion)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede la habilidad [LANZA] (+1 a herir en carga) y +1 al FP de las armas cuerpo a cuerpo del Ala de Muerte tras completar una carga."
      },
      {
        "name": "Ejemplar Marcial (Martial Exemplar)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite repetir las tiradas para impactar en combate cuerpo a cuerpo a una unidad de infantería del Ala de Muerte."
      },
      {
        "name": "Furia No Perdonada (Unforgiven Wrath)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas de combate de la unidad obtienen [IMPACTOS SOSTENIDOS 1] hasta el final de la fase."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Empeora el FP de los ataques recibidos en 1 punto (ej. FP -2 pasa a FP -1)."
      }
    ]
  },
  {
    "id": "wrath_of_the_rock",
    "name": "Ira de la Roca",
    "originalName": "Wrath of the Rock",
    "type": "Ocupar y Mantener (Take and Hold)",
    "isExclusiveDA": true,
    "dp": 2,
    "commandPoints": "2 PD",
    "purpose": "El destacamento de aguante numantino por excelencia de los Ángeles Oscuros. Diseñado para listas combinadas de infantería pesada y motos del Ala de Cuervo. Su regla defensiva reduce drásticamente la efectividad de las armas enemigas pesadas y de alta fuerza.",
    "ruleName": "Tenacidad Ejemplar (Dutiful Tenacity)",
    "ruleDesc": "Los ataques dirigidos contra unidades amigas de INFANTERÍA o MONTADAS de los Adeptus Astartes cuya Fuerza sea superior a la Resistencia de tu unidad sufren -1 a las tiradas para herir.",
    "synergies": [
      "Caballeros del Ala de Muerte (Resistencia 6 protegida)",
      "Exterminadores",
      "Caballero Negro del Ala de Cuervo",
      "Escuadra de Batidores (Outriders)",
      "Azrael",
      "Camaradas del Círculo Interior"
    ],
    "pros": [
      "Protección defensiva universal pasiva en toda la mesa (-1 para ser herido frente a armas de alta fuerza).",
      "Excelente catálogo de 4 mejoras y 6 estratagemas especializadas.",
      "Permite Despliegue Rápido en turno 1 y movilidad defensiva."
    ],
    "cons": [
      "Cuesta 2 Puntos de Destacamento (2 PD).",
      "No protege a vehículos ni monstruos contra armas antitanque."
    ],
    "enhancements": [
      {
        "id": "enh_wr_1",
        "name": "Templado en Batalla (Aura) [Tempered in Battle]",
        "points": 10,
        "description": "Solo Adeptus Astartes. Unidades amigas a 6\" pueden repetir los chequeos de Acobardamiento (Battle-shock)."
      },
      {
        "id": "enh_wr_2",
        "name": "Señor del Ala de Cuervo (Lord of the Ravenwing)",
        "points": 15,
        "description": "Solo Ala de Cuervo. Esta unidad puede repetir tiradas de carga."
      },
      {
        "id": "enh_wr_3",
        "name": "Asalto del Ala de Muerte (Deathwing Assault)",
        "points": 15,
        "description": "Solo Ala de Muerte con Despliegue Rápido. Puede desplegar en tu primera fase de movimiento."
      },
      {
        "id": "enh_wr_4",
        "name": "Armas Antiguas (Ancient Weapons)",
        "points": 20,
        "description": "Solo Adeptus Astartes. Los ataques de combate cuerpo a cuerpo del portador suman +1 Ataque y +1 Daño."
      }
    ],
    "stratagems": [
      {
        "name": "En el Sacrificio, Victoria (In Sacrifice, Victory)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite ignorar modificadores y disparar al ser destruido."
      },
      {
        "name": "Caballeros de Hierro (Knights of Iron)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede [GOLPES LETALES] en combate cuerpo a cuerpo a una unidad del Ala de Muerte."
      },
      {
        "name": "Reliquias de la Era Oscura (Relics of the Dark Age)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Mejora las armas de plasma del Ala de Cuervo con +1 Daño y +1 Fuerza."
      },
      {
        "name": "Maestría Táctica (Tactical Mastery)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite retirarse de combate y aun así disparar y cargar en el mismo turno."
      },
      {
        "name": "Justicia Ineludible (Inescapable Justice)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede [PRECISIÓN] a las armas a distancia contra Personajes enemigos."
      },
      {
        "name": "La Voluntad del León (Lion's Will)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Concede No Hay Dolor 5+ ante heridas mortales a una unidad objetivo."
      }
    ]
  },
  {
    "id": "darkflight_pursuit",
    "name": "Persecución del Vuelo Oscuro",
    "originalName": "Darkflight Pursuit",
    "type": "Reconocimiento (Reconnaissance)",
    "isExclusiveDA": true,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Diseñado para ejércitos móviles y naves de apoyo de la 2.ª Compañía (Ala de Cuervo). Convierte a las escuadras de motos Outriders en tropas de Línea de Batalla y asegura que la potencia de fuego aéreo no sea frenada por la escenografía enemiga.",
    "ruleName": "Vigilancia de Alas Negras (Black-winged Vigilance)",
    "ruleDesc": "Los ataques a distancia de unidades amigas del ALA DE CUERVO con la clave VOLAR tienen [IGNORA COBERTURA]. Además, las unidades de ESCUADRA DE BATIDORES (OUTRIDERS) obtienen la clave LÍNEA (BATTLELINE).",
    "synergies": [
      "Sammael",
      "Land Speeder Venganza",
      "Mortaja del Ala de Cuervo",
      "Caza Nephilim",
      "Espolón del Ala de Cuervo (Dark Talon)",
      "Escuadra de Batidores (Outriders)",
      "Caballero Negro del Ala de Cuervo"
    ],
    "pros": [
      "Niega coberturas enemigas a todas las naves y deslizadores del Ala de Cuervo.",
      "Permite incluir hasta 6 escuadras de Outriders con control de objetivo.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "No aporta reglas a unidades a pie de la 1.ª Compañía (Deathwing) o infantería Tacticus."
    ],
    "enhancements": [
      {
        "id": "enh_df_1",
        "name": "Turbinas Capucha del Trueno (Thundercowl Turbines)",
        "points": 15,
        "description": "Solo unidad Volar o Montada. Suma +2\" a la característica de Movimiento y permite repetir las tiradas de Avance."
      },
      {
        "id": "enh_df_2",
        "name": "Batería Forjanocturna (Nightforged Battery)",
        "points": 10,
        "description": "Solo vehículo o montado del Ala de Cuervo. Sus armas de plasma obtienen [FUEGO RÁPIDO 1] y [HERIDAS DEVASTADORAS]."
      },
      {
        "id": "enh_df_3",
        "name": "Maestro del Espolón Oscuro (Master of the Dark Talon)",
        "points": 20,
        "description": "Solo Personaje del Ala de Cuervo. Permite repetir las tiradas para impactar de 1 para unidades AERONAVE amigas a 6\" o menos."
      },
      {
        "id": "enh_df_4",
        "name": "Mortaja del Cuervo (Shroud of the Raven)",
        "points": 15,
        "description": "Solo Personaje del Ala de Cuervo. La miniatura portadora y su unidad obtienen [SIGILO] (-1 para ser impactadas a distancia) y Beneficio de Cobertura."
      }
    ],
    "stratagems": [
      {
        "name": "Vigilancia Aerotransportada (Skyborne Surveillance)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Repetición de 1s para impactar a todas las naves del Ala de Cuervo contra un enemigo designado."
      },
      {
        "name": "Somos la Venganza (We Are Vengeance)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a una unidad montada disparar en respuesta si un vehículo aliado a 6\" es destruido."
      },
      {
        "name": "Alas de Sombras (Wings of Shadow)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Otorga [SIGILO] (-1 para impactar) y beneficio de cobertura a una unidad voladora."
      },
      {
        "name": "Superioridad Aérea (Aerial Superiority)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Inflige hasta 6 heridas mortales a una unidad enemiga al sobrevolarla durante un movimiento normal o de avance."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      },
      {
        "name": "Foco a Alta Velocidad (High-speed Focus)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite repetir las tiradas para impactar tras haber realizado un movimiento de Avance."
      }
    ]
  },
  {
    "id": "company_of_hunters",
    "name": "Compañía de Cazadores (Perseguir con Alas Oscuras)",
    "originalName": "Company of Hunters",
    "type": "Reconocimiento (Reconnaissance)",
    "isExclusiveDA": true,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "El clásico destacamento puro de motos y deslizadores del Ala de Cuervo del Codex. Ideal para jugadores que buscan una fuerza 100% montada que pueda cruzar la mesa a toda velocidad y disparar o cargar tras avanzar.",
    "ruleName": "Jauría Veloz de Caliban",
    "ruleDesc": "Las unidades de MONTADAS y VEHÍCULOS del ALA DE CUERVO son elegibles para disparar y declarar una carga en un turno en el que hayan Avanzado. Las unidades de Motos (Outriders) obtienen la clave LÍNEA (BATTLELINE).",
    "synergies": [
      "Sammael",
      "Caballero Negro del Ala de Cuervo",
      "Escuadra de Mando del Ala de Cuervo",
      "Escuadra de Batidores (Outriders)",
      "Capitán y Capellán en Moto",
      "Quads Invader ATV"
    ],
    "pros": [
      "Máxima agresividad táctica: avanzar a toda velocidad sin perder la capacidad de disparo ni de carga.",
      "Excelente sinergia con martillos Corvus y armas de plasma.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "No beneficia a infantería ni Exterminadores."
    ],
    "enhancements": [
      {
        "id": "enh_ch_1",
        "name": "Maestro de la Maniobra (Master of Maneuvre)",
        "points": 15,
        "description": "Solo Ala de Cuervo. La unidad del portador es elegible para disparar y declarar una carga en un turno en el que se haya Retirado del combate."
      },
      {
        "id": "enh_ch_2",
        "name": "Cazador de Reconocimiento (Recon Hunter)",
        "points": 20,
        "description": "Solo Ala de Cuervo. La unidad del portador obtiene la habilidad [INFILTRADORES] y un movimiento de Exploradores de 9\"."
      },
      {
        "id": "enh_ch_3",
        "name": "Batería de Forjanocturna (Nightforged Battery)",
        "points": 10,
        "description": "Las armas a distancia del portador ganan [FUEGO RÁPIDO 1] y [HERIDAS DEVASTADORAS]."
      },
      {
        "id": "enh_ch_4",
        "name": "Turbinas Capucha del Trueno (Thundercowl Turbines)",
        "points": 15,
        "description": "Suma +2\" a la característica de Movimiento del portador y su unidad montada."
      }
    ],
    "stratagems": [
      {
        "name": "Maniobra Evasiva (Evade and Harass)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Concede salvación invulnerable 4++ contra ataques de disparo tras haber realizado un movimiento de Avance."
      },
      {
        "name": "Golpe de Cazador (Hunter's Strike)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede [GOLPES LETALES] al disparar a media distancia con armas de moto o bólter pesados."
      },
      {
        "name": "Reliquias de la Era Oscura (Relics of the Dark Age)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Mejora las armas de plasma del Ala de Cuervo con +1 Daño y +1 Fuerza durante la fase de disparo."
      },
      {
        "name": "Retirada Táctica (Tactical Withdrawal)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a una unidad montada realizar un movimiento reactivo de hasta 6\" cuando una unidad enemiga declara una carga contra ella."
      },
      {
        "name": "Ataque Rápido (Swift Strike)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Tras disparar en tu fase de disparo, la unidad puede realizar un movimiento normal adicional de hasta 6\"."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "unforgiven_task_force",
    "name": "Fuerza de Asedio de los No Perdonados",
    "originalName": "Unforgiven Task Force",
    "type": "Ocupar y Mantener (Take and Hold)",
    "isExclusiveDA": true,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Inspirado en la expiación obsesiva de la Primera Legión. Convierte el Acobardamiento (Battle-shock) en una ventaja ofensiva mortal: las unidades castigadas luchan con furia desesperada infligiendo heridas devastadoras.",
    "ruleName": "Resolución Inquebrantable de los No Perdonados",
    "ruleDesc": "Mientras una unidad amiga esté Acobardada (Battle-shocked), sus ataques obtienen [HERIDAS DEVASTADORAS] y su Control de Objetivo se reduce a 1 en vez de 0. Además, repiten chequeos de choque de mando fallidos en tu fase de mando.",
    "synergies": [
      "Asmodai",
      "Azrael",
      "Escuadras de Intercesores",
      "Escuadras Infernus",
      "Exterminadores",
      "Dreadnoughts"
    ],
    "pros": [
      "Inmunidad a la pérdida total de objetivos por Battle-shock (CO mínimo de 1).",
      "Castigo brutal con Heridas Devastadoras cuando tus unidades están bajo presión.",
      "Coste económico de 1 PD."
    ],
    "cons": [
      "Requiere que las unidades fallen chequeos o sufran bajas para activar el máximo potencial ofensivo."
    ],
    "enhancements": [
      {
        "id": "enh_utf_1",
        "name": "Armas de la Primera Legión (Weapons of the First Legion)",
        "points": 25,
        "description": "Suma +1 Ataque y +1 Fuerza a las armas cuerpo a cuerpo del portador (+2 Ataques y +2 Fuerza si la unidad del portador está Acobardada)."
      },
      {
        "id": "enh_utf_2",
        "name": "Estandarte del Recuerdo (Pennant of the Remembrance)",
        "points": 10,
        "description": "Las miniaturas de la unidad del portador obtienen No Hay Dolor 6+ (o No Hay Dolor 5+ mientras la unidad esté Acobardada)."
      },
      {
        "id": "enh_utf_3",
        "name": "Mortaja de los Héroes (Shroud of Heroes)",
        "points": 25,
        "description": "La primera vez que la miniatura portadora sea destruida, al final de la fase tira 1D6: con 2+, vuelve a colocarla en el campo lo más cerca posible con 3 heridas restantes."
      },
      {
        "id": "enh_utf_4",
        "name": "Tenacidad Inquebrantable (Stubborn Tenacity)",
        "points": 15,
        "description": "El portador y su unidad suman +1 a las tiradas para impactar si están por debajo de sus Efectivos Iniciales, y +1 adicional para herir si están a Mitad de Fuerza."
      }
    ],
    "stratagems": [
      {
        "name": "Furia No Perdonada (Unforgiven Fury)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas de la unidad obtienen [GOLPES LETALES], o Impactos Críticos con 5+ si la unidad está Acobardada."
      },
      {
        "name": "Severa Retribución (Grim Retribution)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a una unidad aliada disparar en represalia inmediatamente después de que una unidad enemiga le dispare."
      },
      {
        "name": "Determinación Intransigente (Intransigent Determination)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite conservar el control de un marcador de objetivo incluso tras abandonar su alcance (Objetivo Pegajoso)."
      },
      {
        "name": "Disciplina de Fuego (Fire Discipline)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede [IMPACTOS SOSTENIDOS 1] a las armas a distancia de la unidad."
      },
      {
        "name": "Valentía Inigualable (Unmatched Bravery)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Supera automáticamente un chequeo de Acobardamiento para la unidad elegida."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "gladius",
    "name": "Contingente Gladius",
    "originalName": "Gladius Task Force",
    "type": "Ocupar y Mantener (Take and Hold)",
    "isExclusiveDA": false,
    "dp": 3,
    "commandPoints": "3 PD",
    "purpose": "El destacamento de armas combinadas más equilibrado del juego. Permite activar una Doctrina de Combate distinta por ronda (Devastadora para avanzar y disparar, Táctica para retirarse y disparar/cargar, Asalto para avanzar y cargar).",
    "ruleName": "Doctrinas de Combate (Combat Doctrines)",
    "ruleDesc": "Al inicio de tu Fase de Mando, selecciona una doctrina de combate activa (Devastadora: avanzar y disparar; Táctica: disparar y cargar tras retroceder; Asalto: avanzar y declarar cargas). Puedes activar cada una una vez por batalla.",
    "synergies": [
      "Listas mixtas equilibradas de Infantería, Blindados y Asalto",
      "Azrael",
      "Hellblasters",
      "Intercesores",
      "Tanques Repulsor"
    ],
    "pros": [
      "Extrema versatilidad táctica para adaptarse al estado de cada ronda de la partida.",
      "Excelente catálogo de 4 mejoras y 6 estratagemas de alto impacto (incluyendo Armadura de Desprecio)."
    ],
    "cons": [
      "Coste elevado de 3 Puntos de Destacamento (3 PD).",
      "Cada doctrina solo puede usarse una vez por batalla."
    ],
    "enhancements": [
      {
        "id": "enh_gl_1",
        "name": "Adepto del Codex (Adept of the Codex)",
        "points": 20,
        "description": "Solo Capitán. Una vez por batalla, puedes seleccionar una Doctrina de Combate adicional que aplicará exclusivamente a la unidad de este personaje durante una ronda completa."
      },
      {
        "id": "enh_gl_2",
        "name": "Armadura de Artífice (Artificer Armour)",
        "points": 10,
        "description": "El portador tiene una salvación por armadura de 2+ y obtiene la habilidad No Hay Dolor 5+."
      },
      {
        "id": "enh_gl_3",
        "name": "El Honor Vehemente (The Honour Vehement)",
        "points": 15,
        "description": "Añade +1 Ataque y +1 Fuerza a las armas cuerpo a cuerpo del portador (mientras la Doctrina de Asalto esté activa, añade +2 Ataques y +2 Fuerza en su lugar)."
      },
      {
        "id": "enh_gl_4",
        "name": "Disciplina de Fuego (Fire Discipline)",
        "points": 25,
        "description": "Las armas a distancia de las miniaturas de la unidad del portador tienen [IMPACTOS SOSTENIDOS 1]. Mientras la Doctrina Devastadora esté activa, los impactos críticos se logran con 5+."
      }
    ],
    "stratagems": [
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      },
      {
        "name": "Tácticas de Escuadra (Squad Tactics)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite realizar un movimiento reactivo de 1D6\" (o 6\" fijo si no hay enemigos cerca) cuando una unidad enemiga finaliza su movimiento a 9\"."
      },
      {
        "name": "Estrategia Adaptativa (Adaptive Strategy)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Activa una doctrina de combate para una unidad sin agotar el uso global de esa doctrina para el resto del ejército."
      },
      {
        "name": "Tormenta de Fuego (Storm of Fire)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas a distancia de la unidad obtienen [IGNORA COBERTURA] y sus Impactos Críticos mejoran su FP en 1 punto adicional."
      },
      {
        "name": "Solo en la Muerte Termina el Deber (Only in Death Does Duty End)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a las miniaturas eliminadas combatir con tirada de 4+ antes de ser retiradas del campo."
      },
      {
        "name": "Honrar al Capítulo (Honour the Chapter)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede la habilidad [LANZA] (+1 a herir en carga) a las armas cuerpo a cuerpo de la unidad (y +1 al FP si la Doctrina de Asalto está activa)."
      }
    ]
  },
  {
    "id": "ironstorm",
    "name": "Punta de Lanza Ferrotormenta",
    "originalName": "Ironstorm Spearhead",
    "type": "Purgar al Enemigo (Purge the Foe)",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "El paraíso de los jugadores mecanizados y amantes de los Dreadnoughts. Otorga una repetición por turno (1 impacto, 1 herida o 1 daño) a CADA vehículo del ejército, garantizando una consistencia letal con cañones láser y macroplasmas.",
    "ruleName": "Puntería Automatizada (Ironstorm Auto-targeters)",
    "ruleDesc": "Cada vez que una unidad de VEHÍCULOS de tu ejército dispare o combata, puede repetir una tirada para impactar, una para herir o una tirada de daño.",
    "synergies": [
      "Dreadnought Redentor",
      "Dreadnought Ballistus",
      "Dreadnought Brutalis",
      "Land Raider (todas las variantes)",
      "Gladiator Lancero",
      "Tanques Repulsor y Repulsor Ejecutor"
    ],
    "pros": [
      "Fiabilidad matemática absoluta en armas de alta potencia y pocos disparos (D6 daño o FP pesada).",
      "Solo cuesta 1 PD.",
      "Excelente sinergia con el blindaje de la Primera Legión."
    ],
    "cons": [
      "No ofrece beneficios directos a unidades de infantería a pie."
    ],
    "enhancements": [
      {
        "id": "enh_is_1",
        "name": "Red de Triangulación de Objetivos (Target Augury Web)",
        "points": 30,
        "description": "Solo Adeptus Astartes. Aura de 6\": Las armas a distancia de los vehículos amigos obtienen la habilidad [GOLPES LETALES]."
      },
      {
        "id": "enh_is_2",
        "name": "Adepto del Omnissiah (Adept of the Omnissiah)",
        "points": 35,
        "description": "Solo Tecnomarine. Una vez por ronda de batalla, cuando un ataque cause daño a un vehículo amigo a 6\" o menos del portador, reduce ese daño a 0."
      },
      {
        "id": "enh_is_3",
        "name": "Maestro de la Guerra Mecánica (Master of Machine War)",
        "points": 20,
        "description": "Solo Adeptus Astartes. Aura de 6\": Los vehículos amigos pueden disparar tras haber Avanzado o tras haberse Retirado del combate."
      },
      {
        "id": "enh_is_4",
        "name": "Espíritu Máquina Temible (Redoubtable Machine Spirit)",
        "points": 15,
        "description": "Solo Vehículo. Permite ignorar cualquier penalizador o modificador negativo a las características del vehículo y a sus tiradas para impactar o herir."
      }
    ],
    "stratagems": [
      {
        "name": "Ánimo Vengativo (Vengeful Animus)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite disparar a un vehículo inmediatamente al ser destruido con tirada de 4+ (o 3+ si es Personaje) antes de retirarlo."
      },
      {
        "name": "Ira Acorazada (Armoured Wrath)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a un vehículo amigo repetir todas las tiradas para herir fallidas contra una unidad enemiga designada."
      },
      {
        "name": "Heroísmo Inquebrantable (Unyielding Heroism)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Reduce el daño de cada ataque recibido en 1 punto (mínimo 1) hasta el final de la fase."
      },
      {
        "name": "Poder del Espíritu Máquina (Power of the Machine Spirit)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "El vehículo objetivo ignora la tabla de daños degradados y cuenta como si tuviera sus heridas al máximo."
      },
      {
        "name": "La Piedad es Debilidad (Mercy Is Weakness)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Los ataques de disparo contra Monstruos o Vehículos enemigos obtienen [IMPACTOS SOSTENIDOS 1] (o Impactos Críticos con 5+ si el portador es Tecnomarine)."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "stormlance",
    "name": "Contingente Lanzatormenta",
    "originalName": "Stormlance Task Force",
    "type": "Reconocimiento (Reconnaissance)",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Destinado a formaciones hiperrápidas. Añade +2 pulgadas fijas al movimiento de unidades montadas y deslizadores, y les permite cargar tras avanzar, superando cualquier defensa en los primeros turnos.",
    "ruleName": "Golpe Relámpago (Lightning-fast Strike)",
    "ruleDesc": "Las unidades amigas MONTADAS y con la clave VOLAR de los Adeptus Astartes suman +2\" a su Movimiento (M) y pueden declarar una carga en turnos en que hayan Avanzado.",
    "synergies": [
      "Caballero Negro del Ala de Cuervo",
      "Escuadra de Batidores (Outriders)",
      "Capitán y Capellán en Moto",
      "Storm Speeders (Thunderstrike, Hailstrike, Hammerstrike)",
      "Quads Invader ATV"
    ],
    "pros": [
      "Rango de amenaza colosal: 14\" de movimiento base + tirada de avance + tirada de carga.",
      "Ideal para tomar la iniciativa y asaltar en turno 1 o 2.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Exclusivo para unidades Montadas y Voladoras; no beneficia a infantería a pie."
    ],
    "enhancements": [
      {
        "id": "enh_sl_1",
        "name": "Presagios de Sabiduría (Portents of Wisdom)",
        "points": 10,
        "description": "Solo unidad Montada. Permite repetir las tiradas de Avance de la unidad del portador."
      },
      {
        "id": "enh_sl_2",
        "name": "Furia de la Tormenta (Fury of the Storm)",
        "points": 25,
        "description": "En el turno en que cargue, las armas cuerpo a cuerpo del portador suman +1 a la Fuerza y +1 al FP (+2 a la Fuerza y +2 al FP si es una unidad Montada)."
      },
      {
        "id": "enh_sl_3",
        "name": "Instintos de Cazador (Hunter's Instincts)",
        "points": 25,
        "description": "Esta unidad puede entrar desde Reservas Estratégicas un turno antes de lo habitual y puede desplegar en la zona de despliegue enemiga a partir del turno 2."
      },
      {
        "id": "enh_sl_4",
        "name": "Retirada Fingida (Feinting Withdrawal)",
        "points": 20,
        "description": "La unidad del portador es elegible para disparar y declarar cargas en turnos en que se haya Retirado de combate."
      }
    ],
    "stratagems": [
      {
        "name": "Acelerón a Fondo (Full Throttle)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite avanzar 6\" fijos sin necesidad de tirar el dado de avance."
      },
      {
        "name": "Asalto de Choque (Shock Assault)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Concede la habilidad [LANZA] (+1 a herir en carga) y +1 a la distancia de carga."
      },
      {
        "name": "Fusilería Relámpago (Blitzing Fusillade)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas a distancia de la unidad ganan la clave [ASALTO] hasta el final del turno."
      },
      {
        "name": "Cabalga Rápido, Cabalga Duro (Ride Hard, Ride Fast)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Los ataques a distancia dirigidos contra esta unidad sufren -1 para impactar y -1 para herir."
      },
      {
        "name": "Maniobras Evasivas (Evasive Maneuvres)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a una unidad montada moverse 6\" cuando un enemigo termina su movimiento a 9\" o menos."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "deathwing_storm",
    "name": "Fuerza Tormenta Exterminadora (1.ª Cía)",
    "originalName": "1st Company Task Force",
    "type": "Activos Prioritarios (Priority Assets)",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Para formaciones de élite de Exterminadores y Veteranos de la 1.ª Compañía. Otorga repetición de salvaciones y habilidades demoledoras para aguantar fuego concentrado de artillería en el centro del campo de batalla.",
    "ruleName": "Objetivo Extremo (Extremis Objective)",
    "ruleDesc": "Una vez por batalla, al inicio de tu Fase de Mando, selecciona un marcador de objetivo. Las unidades de la 1.ª COMPAÑÍA repiten las tiradas para herir de 1 contra enemigos en dicho marcador (o repiten todas las tiradas de herir si tu unidad está por debajo de sus Efectivos Iniciales).",
    "synergies": [
      "Escuadra de Exterminadores",
      "Escuadra de Exterminadores de Asalto",
      "Caballeros del Ala de Muerte",
      "Belial",
      "Capitán en Exterminador",
      "Veteranos Sternguard"
    ],
    "pros": [
      "Protección suprema para escuadras de élite de salvación 2+ e invulnerable 4++.",
      "Gran consistencia para capturar y asegurar el marcador clave de la misión.",
      "Coste económico de solo 1 PD."
    ],
    "cons": [
      "La regla de destacamento es de activación única (1 sola ronda de batalla).",
      "Solo aplica a unidades con la clave 1.ª COMPAÑÍA o EXTERMINADOR."
    ],
    "enhancements": [
      {
        "id": "enh_dw_1",
        "name": "Terror Manifiesto (Aura) [Fear Made Manifest]",
        "points": 30,
        "description": "Aura de 6\": Las unidades enemigas sufren -1 a su Liderazgo y -1 a los chequeos de Acobardamiento."
      },
      {
        "id": "enh_dw_2",
        "name": "Resolución Férrea (Iron Resolve)",
        "points": 15,
        "description": "El portador obtiene la habilidad No Hay Dolor 5+."
      },
      {
        "id": "enh_dw_3",
        "name": "Ritos de Guerra (Rites of War)",
        "points": 15,
        "description": "Aura de 6\": Las miniaturas de unidades amigas de la 1.ª Compañía suman +1 a su Control de Objetivo (CO)."
      },
      {
        "id": "enh_dw_4",
        "name": "Adalid de la 1.ª Compañía (Champion of the 1st Company)",
        "points": 20,
        "description": "Las armas cuerpo a cuerpo del portador ganan [PRECISIÓN] y logran Impactos Críticos con 5+."
      }
    ],
    "stratagems": [
      {
        "name": "Fortaleza Legendaria (Legendary Fortitude)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Reduce el daño de todos los ataques dirigidos a esta unidad en 1 punto (mínimo 1)."
      },
      {
        "name": "Deber y Honor (Duty and Honour)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Suma +1 al CO de cada miniatura y conserva el control del marcador incluso tras abandonarlo."
      },
      {
        "name": "Héroes del Capítulo (Heroes of the Chapter)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede +1 a las tiradas para impactar en combate cuerpo a cuerpo a la unidad elegida."
      },
      {
        "name": "Aspecto Aterrador (Terrifying Demeanour)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Obliga a una unidad enemiga trabada en combate a superar un chequeo de Acobardamiento con penalizador de -1."
      },
      {
        "name": "Asalto Implacable (Relentless Assault)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite repetir las tiradas de carga y añade +1 al FP de las armas de combate."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "assault_brethren",
    "name": "Hermandad de Asalto (Fuerza de Fuego Ígneo)",
    "originalName": "Firestorm Assault Force",
    "type": "Asalto e Impacto Corto",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Especializado en ejércitos agresivos de asalto corto y armas de fuego pesadas a quemarropa. Las armas ganan Asalto para disparar tras avanzar, y a menos de 12 pulgadas aumentan su Fuerza de forma devastadora.",
    "ruleName": "Fuego de Proximidad (Close-range Firepower)",
    "ruleDesc": "Las armas a distancia equipadas por miniaturas de tu ejército tienen la habilidad [ASALTO]. Cada vez que una miniatura realice un ataque a distancia contra una unidad enemiga a 12\" o menos, suma +1 a la Fuerza de ese ataque.",
    "synergies": [
      "Infernus",
      "Erradicadores",
      "Agresores",
      "Land Raider Redentor",
      "Intercesores de Asalto",
      "Capitán Gravis"
    ],
    "pros": [
      "Avance y disparo garantizado para todo el ejército sin perder cadencia.",
      "Aumento letal de +1 a la Fuerza a corta distancia (+1 a herir contra blindados e infantería).",
      "Coste económico de 1 PD."
    ],
    "cons": [
      "Requiere situarse a 12\" o menos para obtener la bonificación de Fuerza."
    ],
    "enhancements": [
      {
        "id": "enh_ab_1",
        "name": "Artificio Templado en Guerra (War-tempered Artifice)",
        "points": 25,
        "description": "Añade +3 a la Fuerza de las armas de combate cuerpo a cuerpo del portador."
      },
      {
        "id": "enh_ab_2",
        "name": "Campeón de la Humanidad (Champion of Humanity)",
        "points": 10,
        "description": "El portador y su unidad ignoran todos los modificadores negativos a sus características, tiradas de impacto, herir y daño."
      },
      {
        "id": "enh_ab_3",
        "name": "Manto Adamantino (Adamantine Mantle)",
        "points": 20,
        "description": "Reduce el daño sufrido por la miniatura portadora en 1 punto (mínimo 1) y concede No Hay Dolor 5+."
      },
      {
        "id": "enh_ab_4",
        "name": "Forjado en Batalla (Forged in Battle)",
        "points": 15,
        "description": "Una vez por turno, puedes cambiar el resultado de una tirada de impacto o de salvación del portador por un 6 natural."
      }
    ],
    "stratagems": [
      {
        "name": "Protocolos de Inmolación (Immolation Protocols)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas con la clave Torrente (llamas) de la unidad obtienen [HERIDAS DEVASTADORAS] hasta el final de la fase."
      },
      {
        "name": "Crux Infernus",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Mejora el FP de todas las armas a distancia de la unidad en 1 punto al disparar a 12\" o menos."
      },
      {
        "name": "Venganza Ardiente (Burning Vengeance)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a una unidad embarcada desembarcar inmediatamente y disparar tras ser atacado su transporte."
      },
      {
        "name": "Embarque Rápido (Rapid Embarkation)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a una unidad reembarcar en un transporte aliado tras resolver sus disparos o combate."
      },
      {
        "name": "Embestida Demoledora (Onslaught)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Concede la habilidad [LANZA] (+1 a herir en carga) a las armas de combate cuerpo a cuerpo."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "tactical_brethren",
    "name": "Hermandad Táctica",
    "originalName": "Tactical Brethren",
    "type": "Línea Flexible y Misiones",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Ideal para listas de infantería de línea equilibrada con abundante presencia de escuadras de Intercesores, asegurando un control indiscutible de objetivos y máxima flexibilidad en misiones secundarias.",
    "ruleName": "Flexibilidad Operativa (Tactical Flexibility)",
    "ruleDesc": "Las unidades de LÍNEA DE BATALLA y TACTICUS pueden disparar y realizar acciones secundarias en el mismo turno sin perder su elegibilidad de combate. Además, mientras controlen un objetivo, repiten tiradas para impactar de 1.",
    "synergies": [
      "Intercesores",
      "Intercesores Pesados",
      "Infiltradores",
      "Incursores",
      "Tenientes y Capitanes"
    ],
    "pros": [
      "Garantiza puntuación máxima en misiones tácticas sin sacrificar potencia de fuego.",
      "Repetición pasiva de 1s para impactar al defender marcadores.",
      "Coste económico de solo 1 PD."
    ],
    "cons": [
      "Menor pegada que destacamentos especializados de asalto o blindados."
    ],
    "enhancements": [
      {
        "id": "enh_tb_1",
        "name": "Maestro de la Estrategia (Master of Strategy)",
        "points": 20,
        "description": "Una vez por ronda de batalla, puedes seleccionar la unidad del portador como objetivo de una Estratagema por 0 CP, incluso si ya se usó esa estratagema en esa fase."
      },
      {
        "id": "enh_tb_2",
        "name": "Estandarte de los Inquebrantables (Standard of the Unbroken)",
        "points": 15,
        "description": "Cada miniatura de la unidad del portador suma +1 a su Control de Objetivo (CO)."
      },
      {
        "id": "enh_tb_3",
        "name": "Virtuoso del Bólter (Bolter Virtuoso)",
        "points": 10,
        "description": "Las armas de bólter de la unidad del portador ganan [IMPACTOS SOSTENIDOS 1] e [IGNORA COBERTURA]."
      },
      {
        "id": "enh_tb_4",
        "name": "Comandante Tenaz (Tenacious Commander)",
        "points": 15,
        "description": "La unidad del portador obtiene la habilidad No Hay Dolor 5+ mientras esté dentro del alcance de un marcador de objetivo."
      }
    ],
    "stratagems": [
      {
        "name": "Salva Disciplinada (Disciplined Volley)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas de bólter de la unidad suman +1 Ataque y obtienen la habilidad [GOLPES LETALES]."
      },
      {
        "name": "Redistribución Táctica (Tactical Redistribution)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite realizar un movimiento normal reactivo de hasta 6\" al final de la fase de disparo del enemigo."
      },
      {
        "name": "Asegurar Terreno (Secure Ground)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "El marcador de objetivo permanece bajo tu control incluso tras retirar a tus miniaturas de su alcance."
      },
      {
        "name": "Redespliegue Rápido (Rapid Redeployment)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "La unidad puede Retirarse del combate y aún así ser elegible para disparar y realizar acciones este turno."
      },
      {
        "name": "Defender hasta el Final (Defend to the Last)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a las miniaturas eliminadas combatir con tirada de 4+ antes de ser retiradas."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "devastator_brethren",
    "name": "Hermandad Devastadora (Fuerza de Asedio Yunque)",
    "originalName": "Anvil Siege Force",
    "type": "Fuego Pesado y Asedio",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Potencia el fuego de artillería e infantería pesada a distancia. Al mantener las unidades estacionarias, sus armas ganan bonificaciones masivas de penetración de armadura y daño implacable.",
    "ruleName": "Escudo y Fuego Pesado (Shield of the Imperium)",
    "ruleDesc": "Las armas a distancia con la clave [PESADA] obtienen +1 a las tiradas para herir si la unidad atacante Permaneció Estacionaria en su Fase de Movimiento. Las unidades estacionarias ignoran penalizadores a impactar.",
    "synergies": [
      "Hellblasters",
      "Erradicadores",
      "Desoladores",
      "Eliminadores",
      "Dreadnought Ballistus",
      "Tanque Gladiator Lancero"
    ],
    "pros": [
      "+1 a herir masivo para toda el arma pesada estacionaria en la mesa.",
      "Perforación devastadora contra tanques, monstruos y armaduras pesadas enemigas.",
      "Coste económico de solo 1 PD."
    ],
    "cons": [
      "Incentiva el estatismo, penalizando la movilidad rápida para puntuar primarias en campo abierto."
    ],
    "enhancements": [
      {
        "id": "enh_db_1",
        "name": "Defensor Estoico (Stoic Defender)",
        "points": 15,
        "description": "Las miniaturas de la unidad del portador suman +1 a su Control de Objetivo (CO) y ganan No Hay Dolor 6+ mientras estén sobre un marcador."
      },
      {
        "id": "enh_db_2",
        "name": "Ejemplar de la Flota (Fleet Exemplar)",
        "points": 15,
        "description": "La unidad del portador es elegible para disparar con armas pesadas incluso en turnos en que haya Avanzado."
      },
      {
        "id": "enh_db_3",
        "name": "Arquitecto de la Guerra (Architect of War)",
        "points": 25,
        "description": "Aura de 6\": Los ataques a distancia de unidades amigas que Permanecieron Estacionarias ignoran el Beneficio de Cobertura."
      },
      {
        "id": "enh_db_4",
        "name": "Armadura Indómita (Indomitable Armour)",
        "points": 20,
        "description": "El portador tiene una salvación por armadura de 2+ y salvación invulnerable de 4++."
      }
    ],
    "stratagems": [
      {
        "name": "Granizada de Venganza (Hail of Vengeance)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas con la clave [PESADA] de la unidad logran Impactos Críticos con tiradas de 5+."
      },
      {
        "name": "Rígida Disciplina (Rigid Discipline)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a la unidad retirarse 6\" y aun así contar como que Permaneció Estacionaria para la fase de disparo."
      },
      {
        "name": "Instrucción de Combate (Battle Drill State)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite repetir todas las tiradas para impactar de 1 a una unidad de fuego pesado."
      },
      {
        "name": "Fuego Cruzado Solapado (Overlapping Fire)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Designa una unidad enemiga; todas las unidades amigas que disparen a ese objetivo mejoran su FP en 1 punto adicional."
      },
      {
        "name": "Bombardeo Sostenido (Sustained Bombardment)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas pesadas de la unidad obtienen la habilidad [IMPACTOS SOSTENIDOS 1]."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "tacticus_attack",
    "name": "Fuerza de Asalto Tacticus",
    "originalName": "Tacticus Rapid Assault",
    "type": "Infantería Ofensiva",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Enfocado en las formaciones móviles con servoarmadura Tacticus Mark X, otorgando bonificaciones de movilidad y golpes letales al cargar para desbordar las líneas rivales.",
    "ruleName": "Embate de Infantería Tacticus (Tacticus Rapid Assault)",
    "ruleDesc": "Las unidades de INFANTERÍA TACTICUS suman +1\" a su característica de Movimiento. En el turno en que completen una carga, sus armas cuerpo a cuerpo suman +1 a la Fuerza y +1 al número de Ataques (A).",
    "synergies": [
      "Intercesores",
      "Intercesores de Asalto",
      "Hellblasters",
      "Veteranos de Ferreaguardia",
      "Capitanes Primaris",
      "Tenientes"
    ],
    "pros": [
      "Mayor letalidad y cadencia en combate cuerpo a cuerpo para toda la tropa de línea Tacticus.",
      "Movimiento base aumentado a 7\" para toda la infantería.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Solo beneficia a miniaturas con la palabra clave TACTICUS."
    ],
    "enhancements": [
      {
        "id": "enh_ta_1",
        "name": "Paragón Primaris (Primaris Paragon)",
        "points": 20,
        "description": "El portador suma +1 Herida, +1 Ataque y puede repetir las tiradas de carga para su unidad."
      },
      {
        "id": "enh_ta_2",
        "name": "Blasón del León (Crest of the Lion)",
        "points": 15,
        "description": "Aura de 6\": Las unidades amigas Tacticus suman +1 a su Liderazgo y +1 a la distancia de carga."
      },
      {
        "id": "enh_ta_3",
        "name": "Hoja de Venganza (Vengeance Blade)",
        "points": 15,
        "description": "El arma de combate del portador suma +2 a la Fuerza y obtiene la habilidad [HERIDAS DEVASTADORAS]."
      },
      {
        "id": "enh_ta_4",
        "name": "Augur Táctico (Tactical Augur)",
        "points": 10,
        "description": "Las armas a distancia de la unidad del portador obtienen la habilidad [PRECISIÓN]."
      }
    ],
    "stratagems": [
      {
        "name": "Impacto Aplastante (Crushing Impact)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Tras completar una carga, inflige 1D3 heridas mortales a la unidad enemiga (o 1D3+2 si el enemigo es infantería ligera)."
      },
      {
        "name": "Fisiología Transhumana (Transhuman Physiology)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las tiradas para herir no modificadas de 1-3 siempre fallan contra esta unidad, independientemente de la Fuerza del atacante."
      },
      {
        "name": "Fuego de Combate Cuerpo a Cuerpo",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite disparar pistolas en combate cuerpo a cuerpo con +1 al FP y repetición de 1s para impactar."
      },
      {
        "name": "Compromiso Adaptativo (Adaptive Engagement)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a una unidad Tacticus Retirarse, disparar y volver a cargar en el mismo turno."
      },
      {
        "name": "Intervención Heroica (Heroic Intervention)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite realizar una contracarga de intervención heroica de hasta 6\" por solo 1 CP."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "tacticus_firestorm",
    "name": "Fuerza Tacticus Tormenta de Fuego",
    "originalName": "Tacticus Close Firestorm",
    "type": "Fuego Disciplinado y Saturación",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Satura al enemigo con fuego disciplinado de bólter y plasma, aumentando el número de disparos de la infantería e ignorando penalizadores de disparo defensivo.",
    "ruleName": "Patrones de Fuego del Códex",
    "ruleDesc": "Las armas de bólter y plasma de unidades TACTICUS ganan [FUEGO RÁPIDO 1] (o aumentan su valor existente en 1). Si disparan a la mitad de su alcance máximo, suman +1 al FP.",
    "synergies": [
      "Intercesores",
      "Hellblasters",
      "Sternguard",
      "Infernus"
    ],
    "pros": [
      "Saturación de disparos masiva a media y corta distancia.",
      "Excelente para limpiar hordas enemigas y tropas numerosas.",
      "Coste económico de solo 1 PD."
    ],
    "cons": [
      "Baja efectividad contra blindados pesados sin armas especializadas."
    ],
    "enhancements": [
      {
        "id": "enh_tfs_1",
        "name": "Núcleo de Plasma Sobrecalentado",
        "points": 20,
        "description": "Las armas de plasma de la unidad del portador nunca sufren heridas mortales por la regla Peligrosa (Hazardous)."
      },
      {
        "id": "enh_tfs_2",
        "name": "Cargadores de Alta Capacidad",
        "points": 15,
        "description": "Suma +1 Ataque a todas las armas de proyectiles de la unidad del portador."
      },
      {
        "id": "enh_tfs_3",
        "name": "Puntería de Caliban",
        "points": 10,
        "description": "Las armas a distancia del portador logran Impactos Críticos con tiradas de 5+."
      },
      {
        "id": "enh_tfs_4",
        "name": "Pistolero Veterano",
        "points": 10,
        "description": "El portador puede disparar sus pistolas dos veces en cada fase de disparo."
      }
    ],
    "stratagems": [
      {
        "name": "Fuego Defensivo Abrumador",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite disparar Fuego Defensivo (Overwatch) impactando a 5+ en lugar de a 6+."
      },
      {
        "name": "Cadencia de Fuego Aumentada",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Añade la habilidad [IMPACTOS SOSTENIDOS 1] a todas las armas de disparo de la unidad."
      },
      {
        "name": "Munición Penetrante de Caliban",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Aumenta el FP de todas las armas de disparo de la unidad en 1 punto adicional."
      },
      {
        "name": "Retirada y Fuego de Cobertura",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite retirarse de combate y disparar a bocajarro sobre la unidad enemiga trabada."
      },
      {
        "name": "Puntillero a Quemarropa",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las pistolas de la unidad suman +1 al Daño al disparar a 6\" o menos."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "phobos_shadow",
    "name": "Punta de Lanza de Vanguardia (Phobos)",
    "originalName": "Vanguard Spearhead",
    "type": "Sigilo e Infiltración",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Para fuerzas de infiltración táctica Phobos y francotiradores. Hace a las unidades prácticamente intocables a larga distancia (-1 a impactar y cobertura obligatoria).",
    "ruleName": "Maestros de las Sombras (Shadow Masters)",
    "ruleDesc": "Cada vez que un ataque a distancia tome como blanco a una unidad de los Adeptus Astartes, si la miniatura atacante está a más de 12\", el ataque sufre -1 a la tirada para impactar y tu unidad obtiene el Beneficio de Cobertura.",
    "synergies": [
      "Infiltradores",
      "Eliminadores",
      "Incursores",
      "Teniente Phobos",
      "Bibliotecario Phobos",
      "Exploradores (Scouts)"
    ],
    "pros": [
      "Protección suprema en toda la mesa contra ejércitos de disparo masivo.",
      "Excelente catálogo de tácticas de guerrilla y redespliegue.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Poca pegada pesada cuerpo a cuerpo; requiere desgaste táctico."
    ],
    "enhancements": [
      {
        "id": "enh_ps_1",
        "name": "Capa Tejesombras (Ghostweave Cloak)",
        "points": 15,
        "description": "El portador obtiene las habilidades [AGENTE SOLITARIO] y [SIGILO]."
      },
      {
        "id": "enh_ps_2",
        "name": "Ejecutar y Reposicionar (Execute and Redeploy)",
        "points": 20,
        "description": "Tras resolver los disparos de la unidad del portador, esta puede realizar un movimiento normal de hasta 6\" (no puede declarar carga ese turno)."
      },
      {
        "id": "enh_ps_3",
        "name": "Veterano de Guerra de Sombras (Shadow War Veteran)",
        "points": 30,
        "description": "Una vez por batalla, tras usar el oponente una estratagema, incrementa el coste de esa estratagema en 1 CP para el resto de la partida."
      },
      {
        "id": "enh_ps_4",
        "name": "La Hoja Clavada en lo Profundo (The Blade Driven Deep)",
        "points": 25,
        "description": "El portador y las miniaturas de su unidad obtienen la habilidad [INFILTRADORES]."
      }
    ],
    "stratagems": [
      {
        "name": "Tácticas de Guerrilla (Guerrilla Tactics)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite retirar hasta 2 unidades Phobos del campo de batalla y colocarlas en Reservas Estratégicas."
      },
      {
        "name": "Golpear desde las Sombras (Strike from the Shadows)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Concede +1 a la HP y +1 al FP a los ataques a distancia contra un enemigo a más de 12\"."
      },
      {
        "name": "Finta Calculada (Calculated Feint)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a una unidad Phobos moverse 1D6\" reactivamente cuando una unidad enemiga declara una carga contra ella."
      },
      {
        "name": "Premio Letal (A Deadly Prize)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Siembra un marcador de objetivo con minas trampas para infligir 2D3 heridas mortales al enemigo que intente controlarlo."
      },
      {
        "name": "Penumbra y Niebla (Murk and Shadows)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "La unidad no puede ser seleccionada como blanco de ataques a distancia a más de 12\" hasta el final de la fase."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "phobos_shock",
    "name": "Fuerza de Choque Phobos",
    "originalName": "Phobos Shock Force",
    "type": "Emboscada Rápida y Hostigamiento",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Especializado en redespliegues sorpresa, emboscadas en turno 1 y ataques quirúrgicos de francotiradores sobre personajes clave del enemigo.",
    "ruleName": "Emboscadores de Vanguardia",
    "ruleDesc": "Las unidades PHOBOS y EXPLORADORES suman +2\" a su Movimiento en la primera ronda. Al disparar contra enemigos sobre marcadores de objetivo, sus armas obtienen [GOLPES LETALES].",
    "synergies": [
      "Infiltradores",
      "Eliminadores",
      "Incursores",
      "Capitán Phobos"
    ],
    "pros": [
      "Control de despliegue absoluto y eliminación de Personajes enemigos a distancia.",
      "Gran movilidad inicial para tomar posiciones en tierra de nadie.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Baja resistencia frente a asaltos cuerpo a cuerpo masivos."
    ],
    "enhancements": [
      {
        "id": "enh_psk_1",
        "name": "Maestro de Francotiradores",
        "points": 15,
        "description": "Las armas de francotirador de la unidad del portador suman +1 al Daño y obtienen la habilidad [HERIDAS DEVASTADORAS]."
      },
      {
        "id": "enh_psk_2",
        "name": "Auspex Omnisciente",
        "points": 10,
        "description": "Aura de 12\": Las unidades enemigas no pueden ser desplegadas mediante Despliegue Rápido a 12\" o menos del portador."
      },
      {
        "id": "enh_psk_3",
        "name": "Capa de Camuflaje de Caliban",
        "points": 15,
        "description": "El portador y su unidad obtienen -1 para ser impactados a distancia y +1 a las tiradas de salvación en cobertura."
      },
      {
        "id": "enh_psk_4",
        "name": "Saboteador Táctico",
        "points": 20,
        "description": "Reduce a la mitad el movimiento de cualquier unidad enemiga que comience su turno a 6\" o menos del portador."
      }
    ],
    "stratagems": [
      {
        "name": "Golpe Quirúrgico Silencioso",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Las armas de la unidad ganan [PRECISIÓN] e [IGNORA COBERTURA] durante esta fase."
      },
      {
        "name": "Cortina de Humo Táctico",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Otorga [SIGILO] y Beneficio de Cobertura a la unidad seleccionada."
      },
      {
        "name": "Extracción Inmediata",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Coloca la unidad en Reservas Estratégicas al final del turno enemigo."
      },
      {
        "name": "Fuego Supresor Desmoralizador",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "La unidad enemiga impactada sufre -1 a sus tiradas para impactar hasta su siguiente turno."
      },
      {
        "name": "Protocolo de Trampa Explosiva",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Inflige 1D3+3 heridas mortales a un vehículo enemigo que avance cerca de la unidad."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "gravis_linebreaker",
    "name": "Fuerza Rompelíneas Gravis",
    "originalName": "Gravis Linebreaker Force",
    "type": "Asedio y Resistencia Pesada",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Para formaciones pesadas de armadura Gravis (Erradicadores, Agresores, Intercesores Pesados). Concede resistencia extrema y reducción de daño frente a armas antitanque.",
    "ruleName": "Fortaleza Andante (Walking Fortress)",
    "ruleDesc": "Las miniaturas con armadura GRAVIS reducen el FP de los ataques recibidos en 1 punto adicional. Además, sus armas suman +1 al Daño contra MONSTRUOS y VEHÍCULOS a 12\" o menos.",
    "synergies": [
      "Erradicadores",
      "Intercesores Pesados",
      "Agresores",
      "Capitán Gravis",
      "Apotecario Biologis"
    ],
    "pros": [
      "Infantería tan resistente como tanques ligeros (Resistencia 6 reforzada).",
      "Capacidad demoledora contra vehículos a corta distancia.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Movimiento base reducido (5\" por turno)."
    ],
    "enhancements": [
      {
        "id": "enh_glb_1",
        "name": "Caparazón Adamantino (Adamantine Carapace)",
        "points": 20,
        "description": "El portador suma +1 a su característica de Resistencia (R7) y +1 a sus Heridas (H7)."
      },
      {
        "id": "enh_glb_2",
        "name": "Maestro del Bólter Pesado (Heavy Bolter Master)",
        "points": 15,
        "description": "Las armas de bólter pesado de la unidad del portador suman +1 Ataque y obtienen [IMPACTOS SOSTENIDOS 2]."
      },
      {
        "id": "enh_glb_3",
        "name": "Zancada Implacable (Unyielding Stride)",
        "points": 10,
        "description": "La unidad del portador ignora cualquier modificador negativo a su Movimiento y a sus tiradas de carga."
      },
      {
        "id": "enh_glb_4",
        "name": "Núcleo Rompedor (Breaker Core)",
        "points": 25,
        "description": "Los ataques de combate cuerpo a cuerpo del portador logran Impactos Críticos con 5+ al completar una carga."
      }
    ],
    "stratagems": [
      {
        "name": "Avance Indómito (Indomitable Advance)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a la unidad Avanzar y disparar todas sus armas pesadas sin penalizador alguno."
      },
      {
        "name": "Masa Acorazada (Armoured Bulk)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Al cargar, tira 1D6 por cada miniatura de la unidad: cada 4+ causa 1 herida mortal a la unidad enemiga."
      },
      {
        "name": "Potencia de Fuego Abrumadora",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite repetir todas las tiradas para herir de 1 contra el objetivo enemigo más cercano."
      },
      {
        "name": "Aguantar Firmes (Stand Firm)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Concede No Hay Dolor 5+ frente a cualquier ataque de Daño 1 hasta el final de la fase."
      },
      {
        "name": "Devastación a Bocajarro",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite a las armas pesadas Gravis disparar dentro del combate cuerpo a cuerpo sin penalizador a la HP."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "gravis_siege",
    "name": "Fuerza de Asedio Gravis",
    "originalName": "Gravis Fortress Siege",
    "type": "Defensa Numantina y Control",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Defensa inquebrantable de marcadores con infantería pesada Gravis con control de objetivo triplicado y reducción masiva de daño.",
    "ruleName": "Defensa Indomable (Indomitable Defence)",
    "ruleDesc": "Las miniaturas GRAVIS tienen Control de Objetivo 3 mientras disputen un marcador. Si son blanco de armas con Fuerza 7 o superior, resta 1 a la tirada para herir del atacante.",
    "synergies": [
      "Intercesores Pesados",
      "Erradicadores",
      "Agresores",
      "Capitán Gravis"
    ],
    "pros": [
      "Prácticamente imposible arrebatar un marcador defendido por escuadras Gravis.",
      "Protección pasiva de -1 a herir contra armas pesadas y antitanque.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Fuerza defensiva; menor movilidad para disputar la zona enemiga."
    ],
    "enhancements": [
      {
        "id": "enh_gs_1",
        "name": "Especialista en Asedio (Siege Specialist)",
        "points": 20,
        "description": "Suma +1 a las tiradas para herir contra Fortificaciones, Monstruos y Vehículos enemigos."
      },
      {
        "id": "enh_gs_2",
        "name": "Escudo de Hierro (Shield of Iron)",
        "points": 15,
        "description": "El portador obtiene una salvación invulnerable de 4++."
      },
      {
        "id": "enh_gs_3",
        "name": "Comandante del Bastión (Bastion Commander)",
        "points": 25,
        "description": "Aura de 6\": Las unidades amigas suman +1 a sus tiradas de salvación por armadura mientras estén sobre un marcador."
      },
      {
        "id": "enh_gs_4",
        "name": "Placas de Asedio Reforzadas",
        "points": 10,
        "description": "La unidad del portador ignora por completo los ataques enemigos de FP -1."
      }
    ],
    "stratagems": [
      {
        "name": "Defensa de Bastión Inquebrantable",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas de la unidad logran Impactos Críticos con 5+ mientras defiendan un marcador de objetivo."
      },
      {
        "name": "Fuego Cruzado Defensivo",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Añade +1 al FP a todas las armas que disparen contra una unidad enemiga que intente cargar sobre el marcador."
      },
      {
        "name": "Objeto Inamovible (Immovable Object)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Duplica el Control de Objetivo de la unidad hasta el final de la ronda de batalla."
      },
      {
        "name": "Rígida Disciplina de Trinchera",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a la unidad retirarse de combate y aun así disparar a plena potencia."
      },
      {
        "name": "Deber más allá de la Muerte",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a las miniaturas eliminadas combatir con tirada de 4+ antes de ser retiradas."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "ironclad_champions",
    "name": "Campeones Férreos (Dreadnoughts)",
    "originalName": "Ironclad Champions",
    "type": "Blindados Sagrados",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Para ejércitos centrados en 3 o más Dreadnoughts venerados, regenerando heridas perdidas cada turno y aumentando su potencia de choque cuerpo a cuerpo.",
    "ruleName": "Venganza Imperecedera (Enduring Vengeance)",
    "ruleDesc": "Los DREADNOUGHTS de tu ejército recuperan 1 herida perdida al inicio de tu Fase de Mando. En combate cuerpo a cuerpo, sus ataques contra enemigos a 6\" o menos obtienen la habilidad [HERIDAS DEVASTADORAS].",
    "synergies": [
      "Dreadnought Redentor",
      "Dreadnought Ballistus",
      "Dreadnought Brutalis",
      "Dreadnought Venerable",
      "Tecnomarine"
    ],
    "pros": [
      "Dreadnoughts extremadamente duraderos con autoregeneración constante.",
      "Capacidad letal para aniquilar cualquier objetivo en combate cuerpo a cuerpo.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Vulnerable frente a ejércitos con abundante artillería antitanque pesada."
    ],
    "enhancements": [
      {
        "id": "enh_icp_1",
        "name": "Casco Venerado (Venerated Hull)",
        "points": 20,
        "description": "El Dreadnought portador obtiene No Hay Dolor 6+ (o No Hay Dolor 5+ contra heridas mortales)."
      },
      {
        "id": "enh_icp_2",
        "name": "Furia Ancestral (Ancient Fury)",
        "points": 25,
        "description": "Añade +2 Ataques y +2 a la Fuerza de las armas de combate cuerpo a cuerpo del Dreadnought."
      },
      {
        "id": "enh_icp_3",
        "name": "Sarcófago de Artífice (Master Artificer Sarcophagus)",
        "points": 15,
        "description": "Permite repetir una tirada para impactar y una tirada para herir en cada fase de combate o disparo."
      },
      {
        "id": "enh_icp_4",
        "name": "Sello Férreo de Caliban",
        "points": 10,
        "description": "Los Personajes enemigos sufren -1 para impactar en combate cuerpo a cuerpo contra este Dreadnought."
      }
    ],
    "stratagems": [
      {
        "name": "Venganza Ancestral Implacable",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite al Dreadnought combatir automáticamente al morir antes de ser retirado del campo."
      },
      {
        "name": "Embestida Acorazada (Tank Shock)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Al cargar, inflige hasta 8 heridas mortales al enemigo según la Fuerza de su arma cuerpo a cuerpo."
      },
      {
        "name": "Reactor Sobrecargado (Overclocked Reactor)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Suma +3\" al Movimiento y +1 a las tiradas de carga del Dreadnought durante este turno."
      },
      {
        "name": "Blindaje de Deflexión Pesado",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Reduce el daño de cada ataque recibido en 1 punto (mínimo 1) hasta el final de la fase."
      },
      {
        "name": "Golpes de Barrido Demoñedores",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Duplica los ataques de combate cuerpo a cuerpo del Dreadnought para aniquilar infantería enemiga."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "gauntlet",
    "name": "Contingente Guantelete Mecanizado",
    "originalName": "Gauntlet Task Force",
    "type": "Mecanizado de Transportes",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Para formaciones mecanizadas de asalto coordinado desde transportes blindados Repulsor, Impulsor y Land Raider.",
    "ruleName": "Asalto Acorazado Móvil (Armoured Assault Protocol)",
    "ruleDesc": "Las unidades que desembarquen de un TRANSPORTE que haya realizado un Movimiento Normal son elegibles para disparar y declarar cargas ese turno. Los Transportes ganan la clave [HUMO].",
    "synergies": [
      "Tanque Repulsor",
      "Land Raider",
      "Impulsor",
      "Intercesores",
      "Hellblasters",
      "Veteranos de Ferreaguardia"
    ],
    "pros": [
      "Protege a la infantería valiosa dentro de blindajes pesados hasta el momento del asalto.",
      "Asalto directo desde el interior del vehículo tras el movimiento.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Requiere alta inversión en puntos de vehículos de transporte."
    ],
    "enhancements": [
      {
        "id": "enh_gt_1",
        "name": "Auriga Veterano (Veteran Charioteer)",
        "points": 15,
        "description": "El transporte suma +2\" a su Movimiento y puede repetir las tiradas de Avance."
      },
      {
        "id": "enh_gt_2",
        "name": "Maestro del Desembarco (Disembarkation Master)",
        "points": 20,
        "description": "Las unidades que desembarquen de este transporte suman +1 para impactar y +1 a sus tiradas de carga."
      },
      {
        "id": "enh_gt_3",
        "name": "Casco Reforzado (Hardened Transport Hull)",
        "points": 15,
        "description": "El vehículo de transporte obtiene la habilidad No Hay Dolor 6+."
      },
      {
        "id": "enh_gt_4",
        "name": "Puesto de Mando Vox (Command Vox Suite)",
        "points": 10,
        "description": "Aura de 9\": Las unidades que desembarquen de vehículos aliados pueden usar Estratagemas de Batalla por 1 CP menos."
      }
    ],
    "stratagems": [
      {
        "name": "Desembarco de Emergencia Rápido",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite a las unidades desembarcar de forma segura sin sufrir bajas cuando su transporte es destruido."
      },
      {
        "name": "Puesto de Tiro Móvil (Mobile Firebase)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las miniaturas que disparen desde las troneras del transporte suman +1 a la Habilidad de Proyectiles (HP)."
      },
      {
        "name": "Ataque Coordinado de Blindados",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Añade +1 a las tiradas para herir contra una unidad enemiga que haya recibido fuego previo del transporte."
      },
      {
        "name": "Espolón Acorazado (Armoured Prow)",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "El vehículo de transporte causa hasta 6 heridas mortales al completar una carga contra tropas enemigas."
      },
      {
        "name": "Despliegue Relámpago",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite desembarcar a una distancia de hasta 6\" del transporte en lugar de las 3\" habituales."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  },
  {
    "id": "deathwatch_support",
    "name": "Apoyo a los Vigías de la Muerte",
    "originalName": "Deathwatch Support",
    "type": "Cazadores Alienígenas",
    "isExclusiveDA": false,
    "dp": 1,
    "commandPoints": "1 PD",
    "purpose": "Proporciona municiones especiales y protocolos de exterminio optimizados contra facciones Xenos (Tiránidos, Necrones, Aeldari, Orkos, T'au, Ligas de Votann).",
    "ruleName": "Protocolos Xenocidas (Xenocidal Protocols)",
    "ruleDesc": "Al inicio de cada ronda, selecciona una Táctica de Misión activa: Furor (+1 Ataque contra Infantería), Malleus (+1 al FP contra Monstruos y Vehículos) o Dominus (+1 al Daño contra Personajes). Aplica a todas las unidades.",
    "synergies": [
      "Intercesores",
      "Veteranos Sternguard",
      "Hellblasters",
      "Capitán y Teniente"
    ],
    "pros": [
      "Eficacia demoledora y versatilidad táctica adaptada a las amenazas del rival.",
      "Acceso a municiones especiales legendarias de los Guardianes de la Muerte.",
      "Solo cuesta 1 PD."
    ],
    "cons": [
      "Menor rendimiento frente a partidas espejo contra otros Capítulos del Adeptus Astartes."
    ],
    "enhancements": [
      {
        "id": "enh_dw_sup_1",
        "name": "Tomo de las Ectoclades (Tome of the Ectoclades)",
        "points": 25,
        "description": "Al inicio de la batalla, selecciona 2 unidades enemigas: las unidades amigas repiten todas las tiradas para impactar contra ellas."
      },
      {
        "id": "enh_dw_sup_2",
        "name": "Ladrón de Secretos (Thief of Secrets)",
        "points": 15,
        "description": "El arma de combate del portador suma +1 a la Fuerza, +1 al FP y +1 al Daño (+2 si combate contra enemigos Xenos)."
      },
      {
        "id": "enh_dw_sup_3",
        "name": "El Faro Angelis (The Beacon Angelis)",
        "points": 20,
        "description": "La unidad del portador puede colocarse en Reservas Estratégicas y realizar Despliegue Rápido a partir del turno 1."
      },
      {
        "id": "enh_dw_sup_4",
        "name": "Llave Ósea (Osseus Key)",
        "points": 10,
        "description": "Un vehículo enemigo a 6\" o menos del portador sufre -1 a sus tiradas para impactar y reduce sus ataques en 1."
      }
    ],
    "stratagems": [
      {
        "name": "Munición Especial de Misión (Special Issue Ammunition)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Las armas de bólter de la unidad obtienen las habilidades [PRECISIÓN] y [ANTI-INFANTERÍA 2+]."
      },
      {
        "name": "Tácticas Adaptativas Rápidas",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite cambiar la Táctica de Misión activa exclusivamente para una unidad amiga."
      },
      {
        "name": "Ensayo de Teleportarium",
        "cp": 1,
        "type": "Táctica Épica",
        "desc": "Permite desplegar a 2 unidades mediante Despliegue Rápido a más de 6\" del enemigo en el mismo turno."
      },
      {
        "name": "Protocolos Purgatus",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Los ataques a distancia logran Impactos Críticos con 5+ contra el objetivo del jurado designado."
      },
      {
        "name": "Potencia de Fuego Abrumadora",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Permite repetir las tiradas para herir de 1 a toda la infantería contra objetivos de alta resistencia."
      },
      {
        "name": "Armadura de Desprecio (Armour of Contempt)",
        "cp": 1,
        "type": "Estratagema de Batalla",
        "desc": "Resta 1 al FP de los ataques dirigidos a esta unidad."
      }
    ]
  }
],

    // CATÁLOGO OFICIAL DE ESTRATAGEMAS (11ª EDICIÓN / WAHAPEDIA / REGLAMENTO & DESTACAMENTOS)
  stratagems: [
  {
    "id": "core_command_reroll",
    "cp": 1,
    "phase": "any",
    "turn": "either_turn",
    "detachmentId": "core",
    "name": "Repetición de Mando",
    "originalName": "Command Re-roll",
    "type": "Táctica de Batalla",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Cualquier Fase",
    "turnLabel": "Cualquier Turno",
    "when": "En cualquier fase, justo después de realizar una tirada para impactar, herir, daño, salvación, avance, carga, acobardamiento o tirada de peligro.",
    "target": "Una tirada de dados efectuada por tu ejército.",
    "effect": "Vuelve a tirar uno de los dados de esa tirada.",
    "fluff": "Los grandes comandantes corrigen el destino en el último instante mediante órdenes tajantes.",
    "es": {
      "name": "Repetición de Mando",
      "originalName": "Command Re-roll",
      "type": "Táctica de Batalla",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Cualquier Fase",
      "turnLabel": "Cualquier Turno",
      "when": "En cualquier fase, justo después de realizar una tirada para impactar, herir, daño, salvación, avance, carga, acobardamiento o tirada de peligro.",
      "target": "Una tirada de dados efectuada por tu ejército.",
      "effect": "Vuelve a tirar uno de los dados de esa tirada.",
      "fluff": "Los grandes comandantes corrigen el destino en el último instante mediante órdenes tajantes."
    },
    "en": {
      "name": "Command Re-roll",
      "originalName": "Command Re-roll",
      "type": "Battle Tactic",
      "detachment": "Core Rules",
      "phaseLabel": "Any Phase",
      "turnLabel": "Either Turn",
      "when": "In any phase, just after you have made a Hit roll, a Wound roll, a Damage roll, a saving throw, an Advance roll, a Charge roll, a Desperate Escape test or a Hazardous test.",
      "target": "That dice roll.",
      "effect": "Re-roll that roll, test or saving throw.",
      "fluff": "Great commanders snatch victory from defeat with swift tactical adjustments."
    }
  },
  {
    "id": "core_counter_offensive",
    "cp": 2,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "core",
    "name": "Contraofensiva",
    "originalName": "Counter-offensive",
    "type": "Ardid Estratégico",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, justo después de que una unidad enemiga haya combatido.",
    "target": "Una de tus unidades elegibles para combatir que no haya sido seleccionada todavía.",
    "effect": "Tu unidad combate a continuación, interrumpiendo el orden normal de combate del oponente.",
    "fluff": "Aprovechando el retroceso del asalto enemigo, los guerreros lanzan un contraataque fulgurante.",
    "es": {
      "name": "Contraofensiva",
      "originalName": "Counter-offensive",
      "type": "Ardid Estratégico",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, justo después de que una unidad enemiga haya combatido.",
      "target": "Una de tus unidades elegibles para combatir que no haya sido seleccionada todavía.",
      "effect": "Tu unidad combate a continuación, interrumpiendo el orden normal de combate del oponente.",
      "fluff": "Aprovechando el retroceso del asalto enemigo, los guerreros lanzan un contraataque fulgurante."
    },
    "en": {
      "name": "Counter-offensive",
      "originalName": "Counter-offensive",
      "type": "Strategic Ploy",
      "detachment": "Core Rules",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, just after an enemy unit has fought.",
      "target": "One unit from your army that is eligible to fight and has not yet been selected to fight this phase.",
      "effect": "Your unit fights next.",
      "fluff": "Exploiting the enemy's overextension, warriors strike back before the foe can consolidate."
    }
  },
  {
    "id": "core_epic_challenge",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "core",
    "name": "Desafío Épico",
    "originalName": "Epic Challenge",
    "type": "Táctica Épica",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad Personaje de tu ejército que esté liderando una unidad es elegida para combatir.",
    "target": "Esa miniatura Personaje de tu ejército.",
    "effect": "Hasta el final de la fase, las armas cuerpo a cuerpo equipadas por ese Personaje obtienen la habilidad [PRECISIÓN].",
    "fluff": "Los campeones se abren paso entre la masa enemiga para batirse en duelo singular.",
    "es": {
      "name": "Desafío Épico",
      "originalName": "Epic Challenge",
      "type": "Táctica Épica",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad Personaje de tu ejército que esté liderando una unidad es elegida para combatir.",
      "target": "Esa miniatura Personaje de tu ejército.",
      "effect": "Hasta el final de la fase, las armas cuerpo a cuerpo equipadas por ese Personaje obtienen la habilidad [PRECISIÓN].",
      "fluff": "Los campeones se abren paso entre la masa enemiga para batirse en duelo singular."
    },
    "en": {
      "name": "Epic Challenge",
      "originalName": "Epic Challenge",
      "type": "Epic Deed",
      "detachment": "Core Rules",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when a Character unit from your army that is leading a unit is selected to fight.",
      "target": "That Character model.",
      "effect": "Until the end of the phase, melee weapons equipped by that Character model have the [PRECISION] ability.",
      "fluff": "Champions seek out the enemy leader amidst the fury of battle."
    }
  },
  {
    "id": "core_insane_bravery",
    "cp": 1,
    "phase": "command",
    "turn": "either_turn",
    "detachmentId": "core",
    "name": "Valor Insensato",
    "originalName": "Insane Bravery",
    "type": "Hazaña Épica",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Mando",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de mando, justo después de fallar un chequeo de acobardamiento.",
    "target": "La unidad de tu ejército que acaba de fallar el chequeo de acobardamiento.",
    "effect": "Esa unidad supera automáticamente el chequeo y no queda acobardada (no está Battle-shocked).",
    "fluff": "Un desprecio suicida por la muerte empuja a los guerreros a mantener su posición contra toda lógica.",
    "es": {
      "name": "Valor Insensato",
      "originalName": "Insane Bravery",
      "type": "Hazaña Épica",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Mando",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de mando, justo después de fallar un chequeo de acobardamiento.",
      "target": "La unidad de tu ejército que acaba de fallar el chequeo de acobardamiento.",
      "effect": "Esa unidad supera automáticamente el chequeo y no queda acobardada (no está Battle-shocked).",
      "fluff": "Un desprecio suicida por la muerte empuja a los guerreros a mantener su posición contra toda lógica."
    },
    "en": {
      "name": "Insane Bravery",
      "originalName": "Insane Bravery",
      "type": "Epic Deed",
      "detachment": "Core Rules",
      "phaseLabel": "Command Phase",
      "turnLabel": "Your Turn",
      "when": "Your Command phase, just after failing a Battle-shock test.",
      "target": "The unit from your army that just failed that Battle-shock test.",
      "effect": "Your unit is treated as having passed that Battle-shock test instead.",
      "fluff": "Indomitable will and iron discipline steady soldiers on the brink of panic."
    }
  },
  {
    "id": "core_grenade",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "core",
    "name": "Granada",
    "originalName": "Grenade",
    "type": "Táctica de Batalla",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, una unidad que no haya avanzado ni retrocedido.",
    "target": "Una unidad de tu ejército con la palabra clave GRANADAS.",
    "effect": "Selecciona una unidad enemiga visible a menos de 8\". Tira 6 D6: por cada 4+, esa unidad enemiga sufre 1 herida mortal.",
    "fluff": "Una salva coordinada de granadas fragmentarias o perforantes es arrojada contra las posiciones enemigas.",
    "es": {
      "name": "Granada",
      "originalName": "Grenade",
      "type": "Táctica de Batalla",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, una unidad que no haya avanzado ni retrocedido.",
      "target": "Una unidad de tu ejército con la palabra clave GRANADAS.",
      "effect": "Selecciona una unidad enemiga visible a menos de 8\". Tira 6 D6: por cada 4+, esa unidad enemiga sufre 1 herida mortal.",
      "fluff": "Una salva coordinada de granadas fragmentarias o perforantes es arrojada contra las posiciones enemigas."
    },
    "en": {
      "name": "Grenade",
      "originalName": "Grenade",
      "type": "Battle Tactic",
      "detachment": "Core Rules",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase.",
      "target": "One GRENADES unit from your army that is not within Engagement Range of any enemy units.",
      "effect": "Select one enemy unit visible to and within 8\" of that unit. Roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.",
      "fluff": "A volley of explosive ordnance is hurled into the enemy's midst."
    }
  },
  {
    "id": "core_tank_shock",
    "cp": 1,
    "phase": "charge",
    "turn": "your_turn",
    "detachmentId": "core",
    "name": "Choque de Tanques",
    "originalName": "Tank Shock",
    "type": "Ardid Estratégico",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Carga",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de carga, justo después de que una unidad VEHÍCULO termine un movimiento de carga.",
    "target": "Esa unidad VEHÍCULO de tu ejército.",
    "effect": "Selecciona un arma cuerpo a cuerpo del vehículo y una unidad enemiga trabada. Tira dados iguales a la Fuerza del arma (sumando +2 dados si la Fuerza supera la Resistencia enemiga): por cada 5+, causa 1 herida mortal (máximo 6 heridas mortales).",
    "fluff": "Toneladas de acero y ceramita blindada arrollan sin contemplaciones las filas del oponente.",
    "es": {
      "name": "Choque de Tanques",
      "originalName": "Tank Shock",
      "type": "Ardid Estratégico",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Carga",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de carga, justo después de que una unidad VEHÍCULO termine un movimiento de carga.",
      "target": "Esa unidad VEHÍCULO de tu ejército.",
      "effect": "Selecciona un arma cuerpo a cuerpo del vehículo y una unidad enemiga trabada. Tira dados iguales a la Fuerza del arma (sumando +2 dados si la Fuerza supera la Resistencia enemiga): por cada 5+, causa 1 herida mortal (máximo 6 heridas mortales).",
      "fluff": "Toneladas de acero y ceramita blindada arrollan sin contemplaciones las filas del oponente."
    },
    "en": {
      "name": "Tank Shock",
      "originalName": "Tank Shock",
      "type": "Strategic Ploy",
      "detachment": "Core Rules",
      "phaseLabel": "Charge Phase",
      "turnLabel": "Your Turn",
      "when": "Your Charge phase, just after a Vehicle unit from your army ends a charge move.",
      "target": "That Vehicle unit from your army.",
      "effect": "Select one enemy unit within Engagement Range. Roll D6 equal to the Strength of one of your melee weapons (+2 D6 if Strength exceeds enemy Toughness): for each 5+, the enemy suffers 1 mortal wound (max 6).",
      "fluff": "Armoured behemoths crush barricades and bodies under grinding treads."
    }
  },
  {
    "id": "core_heroic_intervention",
    "cp": 1,
    "phase": "charge",
    "turn": "opponent_turn",
    "detachmentId": "core",
    "name": "Intervención Heroica",
    "originalName": "Heroic Intervention",
    "type": "Táctica Épica",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Carga",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de carga del oponente, justo después de que una unidad enemiga termine un movimiento de carga.",
    "target": "Una unidad de tu ejército que esté a 6\" o menos de esa unidad enemiga y sea elegible para cargar.",
    "effect": "Tu unidad declara una carga contra esa unidad enemiga (sin recibir bonificador de carga).",
    "fluff": "Los guerreros acuden prestos a socorrer a sus camaradas asediados por el asalto hostil.",
    "es": {
      "name": "Intervención Heroica",
      "originalName": "Heroic Intervention",
      "type": "Táctica Épica",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Carga",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de carga del oponente, justo después de que una unidad enemiga termine un movimiento de carga.",
      "target": "Una unidad de tu ejército que esté a 6\" o menos de esa unidad enemiga y sea elegible para cargar.",
      "effect": "Tu unidad declara una carga contra esa unidad enemiga (sin recibir bonificador de carga).",
      "fluff": "Los guerreros acuden prestos a socorrer a sus camaradas asediados por el asalto hostil."
    },
    "en": {
      "name": "Heroic Intervention",
      "originalName": "Heroic Intervention",
      "type": "Epic Deed",
      "detachment": "Core Rules",
      "phaseLabel": "Charge Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Charge phase, just after an enemy unit ends a charge move.",
      "target": "One unit from your army that is within 6\" of that enemy unit and eligible to declare a charge.",
      "effect": "Your unit declares a charge against that enemy unit (does not gain Charge bonus).",
      "fluff": "Warriors leap forward to meet the enemy assault before comrades are overwhelmed."
    }
  },
  {
    "id": "core_smokescreen",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "core",
    "name": "Pantalla de Humo",
    "originalName": "Smokescreen",
    "type": "Ardid Estratégico",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una de tus unidades.",
    "target": "Una unidad de tu ejército con la palabra clave HUMO (SMOKE).",
    "effect": "Hasta el final de la fase, tu unidad obtiene las habilidades [BENEFICIO DE LA COBERTURA] y [SIGILO] (-1 a impactar en su contra).",
    "fluff": "Candelas químicas y botes fumígenos ciegan los sistemas de puntería y la visión del enemigo.",
    "es": {
      "name": "Pantalla de Humo",
      "originalName": "Smokescreen",
      "type": "Ardid Estratégico",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una de tus unidades.",
      "target": "Una unidad de tu ejército con la palabra clave HUMO (SMOKE).",
      "effect": "Hasta el final de la fase, tu unidad obtiene las habilidades [BENEFICIO DE LA COBERTURA] y [SIGILO] (-1 a impactar en su contra).",
      "fluff": "Candelas químicas y botes fumígenos ciegan los sistemas de puntería y la visión del enemigo."
    },
    "en": {
      "name": "Smokescreen",
      "originalName": "Smokescreen",
      "type": "Strategic Ploy",
      "detachment": "Core Rules",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
      "target": "One Smoke unit from your army that was selected as the target of one or more attacks.",
      "effect": "Until the end of the phase, that unit has the Benefit of Cover and the Stealth ability (-1 to hit).",
      "fluff": "Thick chemical smog obscures the unit from enemy targeting arrays."
    }
  },
  {
    "id": "core_rapid_ingress",
    "cp": 1,
    "phase": "movement",
    "turn": "opponent_turn",
    "detachmentId": "core",
    "name": "Entrada Rápida",
    "originalName": "Rapid Ingress",
    "type": "Ardid Estratégico",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Turno Enemigo",
    "when": "Al final de la fase de movimiento de tu oponente.",
    "target": "Una unidad de tu ejército que esté en Reservas.",
    "effect": "Tu unidad entra al campo de batalla mediante sus reglas de Despliegue Rápido o Reservas Estratégicas como si fuera el final de tu propia fase de movimiento.",
    "fluff": "Aterrizajes orbitales de precisión quirúrgica toman por sorpresa las posiciones defensivas rivales.",
    "es": {
      "name": "Entrada Rápida",
      "originalName": "Rapid Ingress",
      "type": "Ardid Estratégico",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Turno Enemigo",
      "when": "Al final de la fase de movimiento de tu oponente.",
      "target": "Una unidad de tu ejército que esté en Reservas.",
      "effect": "Tu unidad entra al campo de batalla mediante sus reglas de Despliegue Rápido o Reservas Estratégicas como si fuera el final de tu propia fase de movimiento.",
      "fluff": "Aterrizajes orbitales de precisión quirúrgica toman por sorpresa las posiciones defensivas rivales.",
      "restrictions": "No puedes usar esta Estratagema durante la primera ronda de batalla, ni en la segunda ronda si juegas en primer lugar. Además, debes desplegar esa unidad a más de 9\" de toda miniatura enemiga."
    },
    "en": {
      "name": "Rapid Ingress",
      "originalName": "Rapid Ingress",
      "type": "Strategic Ploy",
      "detachment": "Core Rules",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Opponent's Turn",
      "when": "End of your opponent's Movement phase.",
      "target": "One unit from your army that is in Reserves.",
      "effect": "Your unit can arrive on the battlefield as if it were the Reinforcements step of your Movement phase.",
      "fluff": "Drop pods and teleport beams deliver reinforcements directly into combat zones.",
      "restrictions": "You cannot use this stratagem during the first battle round."
    },
    "restrictions": "You cannot use this stratagem during the first battle round."
  },
  {
    "id": "core_go_to_ground",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "core",
    "name": "Cuerpo a Tierra",
    "originalName": "Go to Ground",
    "type": "Táctica de Batalla",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo del oponente, cuando una unidad de INFANTERÍA aliada es seleccionada como objetivo.",
    "target": "Esa unidad de INFANTERÍA de tu ejército.",
    "effect": "Hasta el final de la fase, las miniaturas de tu unidad obtienen [BENEFICIO DE LA COBERTURA] y una tirada de salvación invulnerable de 6+.",
    "fluff": "Los soldados se arrojan a zanjas y cráteres buscando refugio del devastador bombardeo enemigo.",
    "es": {
      "name": "Cuerpo a Tierra",
      "originalName": "Go to Ground",
      "type": "Táctica de Batalla",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo del oponente, cuando una unidad de INFANTERÍA aliada es seleccionada como objetivo.",
      "target": "Esa unidad de INFANTERÍA de tu ejército.",
      "effect": "Hasta el final de la fase, las miniaturas de tu unidad obtienen [BENEFICIO DE LA COBERTURA] y una tirada de salvación invulnerable de 6+.",
      "fluff": "Los soldados se arrojan a zanjas y cráteres buscando refugio del devastador bombardeo enemigo."
    },
    "en": {
      "name": "Go to Ground",
      "originalName": "Go to Ground",
      "type": "Battle Tactic",
      "detachment": "Core Rules",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
      "target": "One Infantry unit from your army that was selected as the target of one or more attacks.",
      "effect": "Until the end of the phase, models in your unit have the Benefit of Cover and a 6+ invulnerable save.",
      "fluff": "Infantry dive into bomb craters and trenches to weather the incoming storm."
    }
  },
  {
    "id": "core_fire_overwatch",
    "cp": 1,
    "phase": "movement",
    "turn": "opponent_turn",
    "detachmentId": "core",
    "name": "Disparos Preventivos",
    "originalName": "Fire Overwatch",
    "type": "Ardid Estratégico",
    "detachment": "Reglamento (Básicas)",
    "phaseLabel": "Fase de Movimiento o Carga",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de movimiento o carga del oponente, justo después de que una unidad enemiga inicie o termine un movimiento visible a 24\".",
    "target": "Una unidad de tu ejército que sea elegible para disparar.",
    "effect": "Tu unidad dispara contra esa unidad enemiga como si fuera tu fase de disparo, pero solo impacta con resultados de 6 natural.",
    "fluff": "Fuego reactivo y disciplinado es descargado sobre los asaltantes mientras avanzan a campo abierto.",
    "es": {
      "name": "Disparos Preventivos",
      "originalName": "Fire Overwatch",
      "type": "Ardid Estratégico",
      "detachment": "Reglamento (Básicas)",
      "phaseLabel": "Fase de Movimiento o Carga",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de movimiento o carga del oponente, justo después de que una unidad enemiga inicie o termine un movimiento visible a 24\".",
      "target": "Una unidad de tu ejército que sea elegible para disparar.",
      "effect": "Tu unidad dispara contra esa unidad enemiga como si fuera tu fase de disparo, pero solo impacta con resultados de 6 natural.",
      "fluff": "Fuego reactivo y disciplinado es descargado sobre los asaltantes mientras avanzan a campo abierto."
    },
    "en": {
      "name": "Fire Overwatch",
      "originalName": "Fire Overwatch",
      "type": "Strategic Ploy",
      "detachment": "Core Rules",
      "phaseLabel": "Movement or Charge Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Movement or Charge phase, just after an enemy unit starts or ends a normal, Advance, Fall Back or charge move.",
      "target": "One unit from your army that is within 24\" of that enemy unit and eligible to shoot.",
      "effect": "Your unit shoots at that enemy unit as if it were your Shooting phase, hitting only on unmodified 6s.",
      "fluff": "Disciplined defensive fire rakes the advancing enemy ranks."
    }
  },
  {
    "id": "strat_darkflight_pursuit_skyborne_surveillance",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "darkflight_pursuit",
    "name": "Vigilancia Aerotransportada",
    "originalName": "Skyborne Surveillance",
    "type": "Ardid Estratégico",
    "detachment": "Persecución del Vuelo Oscuro",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad VOLAR del Ala de Cuervo aliada es elegida para disparar.",
    "target": "Esa unidad VOLAR del Ala de Cuervo aliada.",
    "effect": "Hasta el final de la fase, las armas a distancia de tu unidad obtienen [IGNORA COBERTURA]. Además, selecciona una unidad enemiga visible: las demás unidades aliadas del Ala de Cuervo repiten tiradas para impactar de 1 contra ella.",
    "fluff": "Aeronaves y Landspeeders marcan a los objetivos con balizas cuánticas de telemetría.",
    "es": {
      "name": "Vigilancia Aerotransportada",
      "originalName": "Skyborne Surveillance",
      "type": "Ardid Estratégico",
      "detachment": "Persecución del Vuelo Oscuro",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad VOLAR del Ala de Cuervo aliada es elegida para disparar.",
      "target": "Esa unidad VOLAR del Ala de Cuervo aliada.",
      "effect": "Hasta el final de la fase, las armas a distancia de tu unidad obtienen [IGNORA COBERTURA]. Además, selecciona una unidad enemiga visible: las demás unidades aliadas del Ala de Cuervo repiten tiradas para impactar de 1 contra ella.",
      "fluff": "Aeronaves y Landspeeders marcan a los objetivos con balizas cuánticas de telemetría."
    },
    "en": {
      "name": "Skyborne Surveillance",
      "originalName": "Skyborne Surveillance",
      "type": "Strategic Ploy",
      "detachment": "Darkflight Pursuit",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly Ravenwing Fly unit is selected to shoot.",
      "target": "That Ravenwing Fly unit.",
      "effect": "Ranged weapons equipped by models in your unit gain [IGNORES COVER]. In addition, select one visible enemy unit: friendly Ravenwing units re-roll Hit rolls of 1 against that target.",
      "fluff": "Fast-moving atmospheric craft scan and designate critical weak points in enemy defenses."
    }
  },
  {
    "id": "strat_darkflight_pursuit_we_are_vengeance",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "darkflight_pursuit",
    "name": "Somos la Venganza",
    "originalName": "We Are Vengeance",
    "type": "Táctica de Batalla",
    "detachment": "Persecución del Vuelo Oscuro",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo de tu oponente, justo después de que una unidad enemiga haya disparado contra una unidad del Ala de Cuervo aliada.",
    "target": "Esa unidad del Ala de Cuervo aliada que sufrió impactos o bajas.",
    "effect": "Tu unidad puede realizar de inmediato un movimiento de hasta 6\" (o 9\" si está Montada), sin terminar a distancia de amenaza de miniaturas enemigas.",
    "fluff": "Ningún golpe asestado contra los cazadores de Caliban queda impune; las motos maniobran velozmente para cercar al agresor.",
    "es": {
      "name": "Somos la Venganza",
      "originalName": "We Are Vengeance",
      "type": "Táctica de Batalla",
      "detachment": "Persecución del Vuelo Oscuro",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo de tu oponente, justo después de que una unidad enemiga haya disparado contra una unidad del Ala de Cuervo aliada.",
      "target": "Esa unidad del Ala de Cuervo aliada que sufrió impactos o bajas.",
      "effect": "Tu unidad puede realizar de inmediato un movimiento de hasta 6\" (o 9\" si está Montada), sin terminar a distancia de amenaza de miniaturas enemigas.",
      "fluff": "Ningún golpe asestado contra los cazadores de Caliban queda impune; las motos maniobran velozmente para cercar al agresor."
    },
    "en": {
      "name": "We Are Vengeance",
      "originalName": "We Are Vengeance",
      "type": "Battle Tactic",
      "detachment": "Darkflight Pursuit",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase, just after an enemy unit has shot at a friendly Ravenwing unit.",
      "target": "That Ravenwing unit.",
      "effect": "Your unit can make a normal move of up to 6\" (or up to 9\" if Mounted), not ending within Engagement Range of enemy models.",
      "fluff": "The Ravenwing react to enemy volleys by instantly closing the net around their prey."
    }
  },
  {
    "id": "strat_darkflight_pursuit_wings_of_shadow",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "darkflight_pursuit",
    "name": "Alas de Sombra",
    "originalName": "Wings of Shadow",
    "type": "Ardid Estratégico",
    "detachment": "Persecución del Vuelo Oscuro",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad del Ala de Cuervo aliada.",
    "target": "Esa unidad del Ala de Cuervo aliada.",
    "effect": "Hasta el final de la fase, tu unidad obtiene [SIGILO] (-1 a ser impactada). Si tu unidad Avanzó en su turno anterior, los ataques a distancia enemigos sufren un -1 adicional a impactar.",
    "fluff": "Cortinas de humo electromagnético y perturbadores ópticos ocultan los bólteres de asalto en la oscuridad.",
    "es": {
      "name": "Alas de Sombra",
      "originalName": "Wings of Shadow",
      "type": "Ardid Estratégico",
      "detachment": "Persecución del Vuelo Oscuro",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad del Ala de Cuervo aliada.",
      "target": "Esa unidad del Ala de Cuervo aliada.",
      "effect": "Hasta el final de la fase, tu unidad obtiene [SIGILO] (-1 a ser impactada). Si tu unidad Avanzó en su turno anterior, los ataques a distancia enemigos sufren un -1 adicional a impactar.",
      "fluff": "Cortinas de humo electromagnético y perturbadores ópticos ocultan los bólteres de asalto en la oscuridad."
    },
    "en": {
      "name": "Wings of Shadow",
      "originalName": "Wings of Shadow",
      "type": "Strategic Ploy",
      "detachment": "Darkflight Pursuit",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase, when an enemy unit targets a friendly Ravenwing unit.",
      "target": "That Ravenwing unit.",
      "effect": "Until the end of the phase, your unit gains [STEALTH]. If your unit Advanced in your previous turn, attacks against it suffer an additional -1 to hit.",
      "fluff": "Chaff and holo-fields veil the black-armoured riders in impenetrable gloom."
    }
  },
  {
    "id": "strat_gladius_armour_of_contempt",
    "cp": 1,
    "phase": "shooting",
    "turn": "either_turn",
    "detachmentId": "gladius",
    "name": "Armadura del Desprecio",
    "originalName": "Armour of Contempt",
    "type": "Táctica de Batalla",
    "detachment": "Contingente Gladius",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo o combate de tu oponente, justo después de que una unidad enemiga seleccione sus objetivos.",
    "target": "Una unidad ADEPTUS ASTARTES aliada que haya sido seleccionada como objetivo.",
    "effect": "Hasta el final de la fase, cada vez que se asigne un ataque a una miniatura de tu unidad, empeora el Factor de Penetración (FP) de ese ataque en 1.",
    "fluff": "La hostilidad del enemigo no es nada comparada con el odio y desprecio supremo que los Marines Espaciales sienten hacia sus adversarios.",
    "es": {
      "name": "Armadura del Desprecio",
      "originalName": "Armour of Contempt",
      "type": "Táctica de Batalla",
      "detachment": "Contingente Gladius",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo o combate de tu oponente, justo después de que una unidad enemiga seleccione sus objetivos.",
      "target": "Una unidad ADEPTUS ASTARTES aliada que haya sido seleccionada como objetivo.",
      "effect": "Hasta el final de la fase, cada vez que se asigne un ataque a una miniatura de tu unidad, empeora el Factor de Penetración (FP) de ese ataque en 1.",
      "fluff": "La hostilidad del enemigo no es nada comparada con el odio y desprecio supremo que los Marines Espaciales sienten hacia sus adversarios."
    },
    "en": {
      "name": "Armour of Contempt",
      "originalName": "Armour of Contempt",
      "type": "Battle Tactic",
      "detachment": "Gladius Task Force",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
      "target": "One ADEPTUS ASTARTES unit from your army targeted by that enemy unit.",
      "effect": "Until the end of the phase, each time an attack is allocated to a model in your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      "fluff": "The enemy's malice is nothing to the contempt the Space Marines hold for their foes."
    }
  },
  {
    "id": "strat_gladius_a_worthy_death",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "gladius",
    "name": "Una Muerte Digna",
    "originalName": "A Worthy Death",
    "type": "Hazaña Épica",
    "detachment": "Contingente Gladius",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad ADEPTUS ASTARTES aliada.",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Cada vez que una miniatura de tu unidad sea destruida sin haber combatido todavía en esta fase, tira un D6: con un 4+, no se retira hasta después de haber combatido o al final de la fase.",
    "fluff": "Los guerreros consagrados al combate cuerpo a cuerpo luchan con furia feroz hasta su último hálito de vida.",
    "es": {
      "name": "Una Muerte Digna",
      "originalName": "A Worthy Death",
      "type": "Hazaña Épica",
      "detachment": "Contingente Gladius",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad ADEPTUS ASTARTES aliada.",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Cada vez que una miniatura de tu unidad sea destruida sin haber combatido todavía en esta fase, tira un D6: con un 4+, no se retira hasta después de haber combatido o al final de la fase.",
      "fluff": "Los guerreros consagrados al combate cuerpo a cuerpo luchan con furia feroz hasta su último hálito de vida."
    },
    "en": {
      "name": "A Worthy Death",
      "originalName": "A Worthy Death",
      "type": "Epic Deed",
      "detachment": "Gladius Task Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when an enemy unit targets a friendly ADEPTUS ASTARTES unit.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "When a model in your unit is destroyed, if your unit has not fought this phase, roll one D6: on a 4+, do not remove that model until it has fought.",
      "fluff": "Close assault specialists fight to their last breath to cut down more foes."
    }
  },
  {
    "id": "strat_gladius_responsive_tactics",
    "cp": 1,
    "phase": "movement",
    "turn": "opponent_turn",
    "detachmentId": "gladius",
    "name": "Tácticas Reactivas",
    "originalName": "Responsive Tactics",
    "type": "Ardid Estratégico",
    "detachment": "Contingente Gladius",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de movimiento de tu oponente, cuando una unidad enemiga termine un movimiento a 9\" o menos de una unidad ADEPTUS ASTARTES aliada.",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Tu unidad puede realizar de inmediato un movimiento normal de hasta 6\". No puede terminar a distancia de amenaza de miniaturas enemigas.",
    "fluff": "Anticipando la maniobra enemiga, los Astartes se reposicionan con disciplina militar milimétrica.",
    "es": {
      "name": "Tácticas Reactivas",
      "originalName": "Responsive Tactics",
      "type": "Ardid Estratégico",
      "detachment": "Contingente Gladius",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de movimiento de tu oponente, cuando una unidad enemiga termine un movimiento a 9\" o menos de una unidad ADEPTUS ASTARTES aliada.",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Tu unidad puede realizar de inmediato un movimiento normal de hasta 6\". No puede terminar a distancia de amenaza de miniaturas enemigas.",
      "fluff": "Anticipando la maniobra enemiga, los Astartes se reposicionan con disciplina militar milimétrica."
    },
    "en": {
      "name": "Responsive Tactics",
      "originalName": "Responsive Tactics",
      "type": "Strategic Ploy",
      "detachment": "Gladius Task Force",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Movement phase, when an enemy unit ends a move within 9\" of a friendly ADEPTUS ASTARTES unit.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "Your unit can make a normal move of up to 6\". It cannot end this move within Engagement Range of enemy models.",
      "fluff": "Anticipating the enemy's gambit, battle-brothers redeploy with tactical precision."
    }
  },
  {
    "id": "strat_gladius_storm_of_devastation",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "gladius",
    "name": "Tormenta de Devastación",
    "originalName": "Storm of Devastation",
    "type": "Táctica de Batalla",
    "detachment": "Contingente Gladius",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad ADEPTUS ASTARTES aliada es elegida para disparar.",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Hasta el final de la fase, las armas a distancia equipadas por miniaturas de tu unidad obtienen la habilidad [IMPACTOS SOSTENIDOS 1].",
    "fluff": "Una andanada implacable de bólter y plasma satura la posición enemiga en una lluvia aniquiladora.",
    "es": {
      "name": "Tormenta de Devastación",
      "originalName": "Storm of Devastation",
      "type": "Táctica de Batalla",
      "detachment": "Contingente Gladius",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad ADEPTUS ASTARTES aliada es elegida para disparar.",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Hasta el final de la fase, las armas a distancia equipadas por miniaturas de tu unidad obtienen la habilidad [IMPACTOS SOSTENIDOS 1].",
      "fluff": "Una andanada implacable de bólter y plasma satura la posición enemiga en una lluvia aniquiladora."
    },
    "en": {
      "name": "Storm of Devastation",
      "originalName": "Storm of Devastation",
      "type": "Battle Tactic",
      "detachment": "Gladius Task Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly ADEPTUS ASTARTES unit is selected to shoot.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability.",
      "fluff": "A ceaseless hail of bolt rounds and plasma fire hammers the enemy line into ruins."
    }
  },
  {
    "id": "strat_gladius_adaptive_strategy",
    "cp": 1,
    "phase": "command",
    "turn": "your_turn",
    "detachmentId": "gladius",
    "name": "Estrategia Adaptativa",
    "originalName": "Adaptive Strategy",
    "type": "Ardid Estratégico",
    "detachment": "Contingente Gladius",
    "phaseLabel": "Fase de Mando",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de mando.",
    "target": "Una unidad ADEPTUS ASTARTES de tu ejército.",
    "effect": "Selecciona una Doctrina de Combate (Devastadora, Táctica o Asalto). Hasta el inicio de tu siguiente fase de mando, esa Doctrina está activa para esa unidad, incluso si ya fue usada.",
    "fluff": "Los comandantes Astartes evalúan las condiciones del combate y reasignan protocolos doctrinales sobre la marcha.",
    "es": {
      "name": "Estrategia Adaptativa",
      "originalName": "Adaptive Strategy",
      "type": "Ardid Estratégico",
      "detachment": "Contingente Gladius",
      "phaseLabel": "Fase de Mando",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de mando.",
      "target": "Una unidad ADEPTUS ASTARTES de tu ejército.",
      "effect": "Selecciona una Doctrina de Combate (Devastadora, Táctica o Asalto). Hasta el inicio de tu siguiente fase de mando, esa Doctrina está activa para esa unidad, incluso si ya fue usada.",
      "fluff": "Los comandantes Astartes evalúan las condiciones del combate y reasignan protocolos doctrinales sobre la marcha."
    },
    "en": {
      "name": "Adaptive Strategy",
      "originalName": "Adaptive Strategy",
      "type": "Strategic Ploy",
      "detachment": "Gladius Task Force",
      "phaseLabel": "Command Phase",
      "turnLabel": "Your Turn",
      "when": "Your Command phase.",
      "target": "One ADEPTUS ASTARTES unit from your army.",
      "effect": "Select one Combat Doctrine (Devastator, Tactical or Assault). Until the start of your next Command phase, that doctrine is active for that unit even if already used.",
      "fluff": "Astartes commanders read the shifting tide of war and adapt battlefield protocols."
    }
  },
  {
    "id": "strat_gladius_might_of_angels",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "gladius",
    "name": "Poder de los Ángeles",
    "originalName": "Might of Angels",
    "type": "Táctica de Batalla",
    "detachment": "Contingente Gladius",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad ADEPTUS ASTARTES aliada es elegida para combatir.",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Hasta el final de la fase, añade 1 a la Fuerza y 1 al Factor de Penetración (FP) de los ataques cuerpo a cuerpo de tu unidad (o +2 a la Fuerza si la unidad cargó este turno).",
    "fluff": "Con la furia sagrada de los primeros legionarios del Emperador, los guerreros descargan golpes demoledores.",
    "es": {
      "name": "Poder de los Ángeles",
      "originalName": "Might of Angels",
      "type": "Táctica de Batalla",
      "detachment": "Contingente Gladius",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad ADEPTUS ASTARTES aliada es elegida para combatir.",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Hasta el final de la fase, añade 1 a la Fuerza y 1 al Factor de Penetración (FP) de los ataques cuerpo a cuerpo de tu unidad (o +2 a la Fuerza si la unidad cargó este turno).",
      "fluff": "Con la furia sagrada de los primeros legionarios del Emperador, los guerreros descargan golpes demoledores."
    },
    "en": {
      "name": "Might of Angels",
      "originalName": "Might of Angels",
      "type": "Battle Tactic",
      "detachment": "Gladius Task Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when a friendly ADEPTUS ASTARTES unit is selected to fight.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "Until the end of the phase, add 1 to Strength and 1 to Armour Penetration of melee attacks made by models in your unit (+2 to Strength if unit charged).",
      "fluff": "Unleashing transhuman fury, battle-brothers strike with crushing force."
    }
  },
  {
    "id": "strat_inner_circle_duty_unto_death",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "inner_circle",
    "name": "Deber más allá de la Muerte",
    "originalName": "Duty Unto Death",
    "type": "Hazaña Épica",
    "detachment": "Contingente del Círculo Interior",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad del Ala de la Muerte aliada.",
    "target": "Esa unidad del Ala de la Muerte aliada.",
    "effect": "Cada vez que una miniatura de tu unidad sea destruida, si no ha combatido aún en esta fase, tira un D6: con un 4+ no se retira hasta después de haber resuelto sus ataques cuerpo a cuerpo.",
    "fluff": "Los hermanos del Círculo Interior juraron defender los secretos de la Primera Legión hasta su último suspiro vital.",
    "es": {
      "name": "Deber más allá de la Muerte",
      "originalName": "Duty Unto Death",
      "type": "Hazaña Épica",
      "detachment": "Contingente del Círculo Interior",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad del Ala de la Muerte aliada.",
      "target": "Esa unidad del Ala de la Muerte aliada.",
      "effect": "Cada vez que una miniatura de tu unidad sea destruida, si no ha combatido aún en esta fase, tira un D6: con un 4+ no se retira hasta después de haber resuelto sus ataques cuerpo a cuerpo.",
      "fluff": "Los hermanos del Círculo Interior juraron defender los secretos de la Primera Legión hasta su último suspiro vital."
    },
    "en": {
      "name": "Duty Unto Death",
      "originalName": "Duty Unto Death",
      "type": "Epic Deed",
      "detachment": "Inner Circle Task Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when an enemy unit targets a friendly Deathwing unit.",
      "target": "That Deathwing unit.",
      "effect": "When a model in your unit is destroyed, if it has not fought this phase, roll one D6: on a 4+, do not remove it until after it has fought.",
      "fluff": "Brothers of the Inner Circle swore an unbreakable oath to protect the Chapter's secrets."
    }
  },
  {
    "id": "strat_inner_circle_relic_teleportarium",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "inner_circle",
    "name": "Teleportarium de Reliquia",
    "originalName": "Relic Teleportarium",
    "type": "Ardid Estratégico",
    "detachment": "Contingente del Círculo Interior",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento, cuando una unidad del Ala de la Muerte aliada en Reservas llega mediante Despliegue Rápido.",
    "target": "Esa unidad del Ala de la Muerte aliada.",
    "effect": "Tu unidad puede desplegarse en cualquier punto del campo de batalla que esté a más de 3\" horizontal de cualquier miniatura enemiga, pero no puede cargar en este turno.",
    "fluff": "Los arcanos teleportadores de La Roca sitúan a los Exterminadores en el corazón mismo del territorio rival.",
    "es": {
      "name": "Teleportarium de Reliquia",
      "originalName": "Relic Teleportarium",
      "type": "Ardid Estratégico",
      "detachment": "Contingente del Círculo Interior",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento, cuando una unidad del Ala de la Muerte aliada en Reservas llega mediante Despliegue Rápido.",
      "target": "Esa unidad del Ala de la Muerte aliada.",
      "effect": "Tu unidad puede desplegarse en cualquier punto del campo de batalla que esté a más de 3\" horizontal de cualquier miniatura enemiga, pero no puede cargar en este turno.",
      "fluff": "Los arcanos teleportadores de La Roca sitúan a los Exterminadores en el corazón mismo del territorio rival."
    },
    "en": {
      "name": "Relic Teleportarium",
      "originalName": "Relic Teleportarium",
      "type": "Strategic Ploy",
      "detachment": "Inner Circle Task Force",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement phase, when a friendly Deathwing unit in Reserves arrives using Deep Strike.",
      "target": "That Deathwing unit.",
      "effect": "Your unit can be set up anywhere that is more than 3\" horizontally away from all enemy models, but is not eligible to declare a charge this turn.",
      "fluff": "Ancient teleport arrays aboard The Rock materialize Terminator squads directly into the fray."
    }
  },
  {
    "id": "strat_inner_circle_wrath_of_the_lion",
    "cp": 1,
    "phase": "charge",
    "turn": "your_turn",
    "detachmentId": "inner_circle",
    "name": "La Ira del León",
    "originalName": "Wrath of the Lion",
    "type": "Táctica de Batalla",
    "detachment": "Contingente del Círculo Interior",
    "phaseLabel": "Fase de Carga",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de carga, cuando una unidad del Ala de la Muerte aliada termina un movimiento de carga.",
    "target": "Esa unidad del Ala de la Muerte aliada.",
    "effect": "Selecciona una unidad enemiga trabada y tira un D6 por cada miniatura de tu unidad que cargó: cada 4+ inflige 1 herida mortal (máximo 6 heridas mortales).",
    "fluff": "El impacto aplastante de armaduras de Exterminador y escudos de tormenta quiebra las líneas enemigas al instante de la carga.",
    "es": {
      "name": "La Ira del León",
      "originalName": "Wrath of the Lion",
      "type": "Táctica de Batalla",
      "detachment": "Contingente del Círculo Interior",
      "phaseLabel": "Fase de Carga",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de carga, cuando una unidad del Ala de la Muerte aliada termina un movimiento de carga.",
      "target": "Esa unidad del Ala de la Muerte aliada.",
      "effect": "Selecciona una unidad enemiga trabada y tira un D6 por cada miniatura de tu unidad que cargó: cada 4+ inflige 1 herida mortal (máximo 6 heridas mortales).",
      "fluff": "El impacto aplastante de armaduras de Exterminador y escudos de tormenta quiebra las líneas enemigas al instante de la carga."
    },
    "en": {
      "name": "Wrath of the Lion",
      "originalName": "Wrath of the Lion",
      "type": "Battle Tactic",
      "detachment": "Inner Circle Task Force",
      "phaseLabel": "Charge Phase",
      "turnLabel": "Your Turn",
      "when": "Your Charge phase, when a friendly Deathwing unit ends a charge move.",
      "target": "That Deathwing unit.",
      "effect": "Select one enemy unit within Engagement Range. Roll one D6 for each model in your unit that charged: each 4+ inflicts 1 mortal wound (max 6 mortal wounds).",
      "fluff": "Terminators slam into enemy lines with the ferocious momentum of the Primarch himself."
    }
  },
  {
    "id": "strat_ironstorm_layered_ceramite",
    "cp": 1,
    "phase": "any",
    "turn": "either_turn",
    "detachmentId": "ironstorm",
    "name": "Ceramita Estratificada",
    "originalName": "Layered Ceramite",
    "type": "Táctica de Batalla",
    "detachment": "Punta de Lanza Ferrotormenta",
    "phaseLabel": "Cualquier Fase",
    "turnLabel": "Cualquier Turno",
    "when": "En cualquier fase, cuando una unidad VEHÍCULO ADEPTUS ASTARTES aliada es objetivo de un ataque.",
    "target": "Ese VEHÍCULO ADEPTUS ASTARTES aliado.",
    "effect": "Hasta el final de la fase, reduce a 0 cualquier daño asignado a ese vehículo que provenga de la habilidad [HERIDAS DEVASTADORAS] o Daño Mortal.",
    "fluff": "El blindaje reforzado y los campos de dispersión térmica absorben las descargas más destructivas del armamento pesado.",
    "es": {
      "name": "Ceramita Estratificada",
      "originalName": "Layered Ceramite",
      "type": "Táctica de Batalla",
      "detachment": "Punta de Lanza Ferrotormenta",
      "phaseLabel": "Cualquier Fase",
      "turnLabel": "Cualquier Turno",
      "when": "En cualquier fase, cuando una unidad VEHÍCULO ADEPTUS ASTARTES aliada es objetivo de un ataque.",
      "target": "Ese VEHÍCULO ADEPTUS ASTARTES aliado.",
      "effect": "Hasta el final de la fase, reduce a 0 cualquier daño asignado a ese vehículo que provenga de la habilidad [HERIDAS DEVASTADORAS] o Daño Mortal.",
      "fluff": "El blindaje reforzado y los campos de dispersión térmica absorben las descargas más destructivas del armamento pesado."
    },
    "en": {
      "name": "Layered Ceramite",
      "originalName": "Layered Ceramite",
      "type": "Battle Tactic",
      "detachment": "Ironstorm Spearhead",
      "phaseLabel": "Any Phase",
      "turnLabel": "Either Turn",
      "when": "Any phase, when a friendly Adeptus Astartes Vehicle unit is targeted by an attack.",
      "target": "That Adeptus Astartes Vehicle unit.",
      "effect": "Until the end of the phase, each time an attack with [DEVASTATING WOUNDS] is allocated to your vehicle, that damage is reduced to 0.",
      "fluff": "Ablative plates and reinforced ceramite dissipate high-energy kinetic and thermal blasts."
    }
  },
  {
    "id": "strat_ironstorm_might_of_the_machine_spirit",
    "cp": 1,
    "phase": "command",
    "turn": "your_turn",
    "detachmentId": "ironstorm",
    "name": "Fuerza del Espíritu Máquina",
    "originalName": "Might of the Machine Spirit",
    "type": "Ardid Estratégico",
    "detachment": "Punta de Lanza Ferrotormenta",
    "phaseLabel": "Fase de Mando",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de mando.",
    "target": "Una unidad VEHÍCULO ADEPTUS ASTARTES de tu ejército que esté dañada.",
    "effect": "Hasta el inicio de tu siguiente fase de mando, ese vehículo no sufre penalizadores en sus atributos por estar dañado, y añade 1 a su Control de Objetivo (CO).",
    "fluff": "Los rezos binarios de los Tecnomarines despiertan la ferocidad durmiente del espíritu máquina blindado.",
    "es": {
      "name": "Fuerza del Espíritu Máquina",
      "originalName": "Might of the Machine Spirit",
      "type": "Ardid Estratégico",
      "detachment": "Punta de Lanza Ferrotormenta",
      "phaseLabel": "Fase de Mando",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de mando.",
      "target": "Una unidad VEHÍCULO ADEPTUS ASTARTES de tu ejército que esté dañada.",
      "effect": "Hasta el inicio de tu siguiente fase de mando, ese vehículo no sufre penalizadores en sus atributos por estar dañado, y añade 1 a su Control de Objetivo (CO).",
      "fluff": "Los rezos binarios de los Tecnomarines despiertan la ferocidad durmiente del espíritu máquina blindado."
    },
    "en": {
      "name": "Might of the Machine Spirit",
      "originalName": "Might of the Machine Spirit",
      "type": "Strategic Ploy",
      "detachment": "Ironstorm Spearhead",
      "phaseLabel": "Command Phase",
      "turnLabel": "Your Turn",
      "when": "Your Command phase.",
      "target": "One damaged Adeptus Astartes Vehicle unit from your army.",
      "effect": "Until the start of your next Command phase, that vehicle does not suffer any characteristic penalties from being Damaged, and adds 1 to its Objective Control.",
      "fluff": "Techmarines invoke wrathful machine canticles, spurring wounded war engines onward."
    }
  },
  {
    "id": "strat_ironstorm_headhunter_doctrine",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "ironstorm",
    "name": "Doctrina Cazacabezas",
    "originalName": "Headhunter Doctrine",
    "type": "Táctica de Batalla",
    "detachment": "Punta de Lanza Ferrotormenta",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad VEHÍCULO ADEPTUS ASTARTES aliada es elegida para disparar.",
    "target": "Ese VEHÍCULO ADEPTUS ASTARTES aliado.",
    "effect": "Hasta el final de la fase, las armas a distancia de tu vehículo obtienen la habilidad [HERIDAS LETALES] contra unidades MONSTRUO o VEHÍCULO enemigas.",
    "fluff": "Sistemas de cálculo balístico identifican los puntos estructurales críticos de titanes y tanques hostiles.",
    "es": {
      "name": "Doctrina Cazacabezas",
      "originalName": "Headhunter Doctrine",
      "type": "Táctica de Batalla",
      "detachment": "Punta de Lanza Ferrotormenta",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad VEHÍCULO ADEPTUS ASTARTES aliada es elegida para disparar.",
      "target": "Ese VEHÍCULO ADEPTUS ASTARTES aliado.",
      "effect": "Hasta el final de la fase, las armas a distancia de tu vehículo obtienen la habilidad [HERIDAS LETALES] contra unidades MONSTRUO o VEHÍCULO enemigas.",
      "fluff": "Sistemas de cálculo balístico identifican los puntos estructurales críticos de titanes y tanques hostiles."
    },
    "en": {
      "name": "Headhunter Doctrine",
      "originalName": "Headhunter Doctrine",
      "type": "Battle Tactic",
      "detachment": "Ironstorm Spearhead",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly Adeptus Astartes Vehicle unit is selected to shoot.",
      "target": "That Adeptus Astartes Vehicle unit.",
      "effect": "Until the end of the phase, ranged weapons equipped by your vehicle gain [LETHAL HITS] when targeting enemy Monster or Vehicle units.",
      "fluff": "Predictive cogitators isolate structural weak spots in colossal enemy warmachines."
    }
  },
  {
    "id": "strat_stormlance_sudden_onslaught",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "stormlance",
    "name": "Embate Repentino",
    "originalName": "Sudden Onslaught",
    "type": "Táctica de Batalla",
    "detachment": "Contingente Lanzatormenta",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento, cuando una unidad MONTADA o VEHÍCULO aliada avanza.",
    "target": "Esa unidad aliada.",
    "effect": "Tu unidad es elegible para disparar y declarar una carga en este turno, incluso habiendo avanzado.",
    "fluff": "Acelerando al límite de sus propulsores, los jinetes de Caliban se abalanzan sobre el enemigo sin frenar.",
    "es": {
      "name": "Embate Repentino",
      "originalName": "Sudden Onslaught",
      "type": "Táctica de Batalla",
      "detachment": "Contingente Lanzatormenta",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento, cuando una unidad MONTADA o VEHÍCULO aliada avanza.",
      "target": "Esa unidad aliada.",
      "effect": "Tu unidad es elegible para disparar y declarar una carga en este turno, incluso habiendo avanzado.",
      "fluff": "Acelerando al límite de sus propulsores, los jinetes de Caliban se abalanzan sobre el enemigo sin frenar."
    },
    "en": {
      "name": "Sudden Onslaught",
      "originalName": "Sudden Onslaught",
      "type": "Battle Tactic",
      "detachment": "Stormlance Task Force",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement phase, when a friendly Adeptus Astartes Mounted or Vehicle unit Advances.",
      "target": "That unit.",
      "effect": "Your unit is eligible to shoot and declare a charge this turn even though it Advanced.",
      "fluff": "Accelerating beyond safety limits, fast assault elements crash into the foe."
    }
  },
  {
    "id": "strat_stormlance_wind_swift_evasion",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "stormlance",
    "name": "Evasión Ligera como el Viento",
    "originalName": "Wind-swift Evasion",
    "type": "Ardid Estratégico",
    "detachment": "Contingente Lanzatormenta",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "Al final de la fase de combate.",
    "target": "Una unidad MONTADA aliada que no esté trabada en combate.",
    "effect": "Retira esa unidad del campo de batalla y colócala en Reservas Estratégicas para volver a entrar en un turno posterior.",
    "fluff": "Aprovechando el caos del choque, las escuadras de reconocimiento se retiran a toda velocidad para golpear desde otro flanco.",
    "es": {
      "name": "Evasión Ligera como el Viento",
      "originalName": "Wind-swift Evasion",
      "type": "Ardid Estratégico",
      "detachment": "Contingente Lanzatormenta",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "Al final de la fase de combate.",
      "target": "Una unidad MONTADA aliada que no esté trabada en combate.",
      "effect": "Retira esa unidad del campo de batalla y colócala en Reservas Estratégicas para volver a entrar en un turno posterior.",
      "fluff": "Aprovechando el caos del choque, las escuadras de reconocimiento se retiran a toda velocidad para golpear desde otro flanco."
    },
    "en": {
      "name": "Wind-swift Evasion",
      "originalName": "Wind-swift Evasion",
      "type": "Strategic Ploy",
      "detachment": "Stormlance Task Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "End of the Fight phase.",
      "target": "One friendly Adeptus Astartes Mounted unit not within Engagement Range.",
      "effect": "Remove that unit from the battlefield and place it into Strategic Reserves.",
      "fluff": "Disengaging beneath plumes of dust, outriders circle back to strike elsewhere."
    }
  },
  {
    "id": "strat_stormlance_hurtling_targets",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "stormlance",
    "name": "Blancos Vertiginosos",
    "originalName": "Hurtling Targets",
    "type": "Táctica de Batalla",
    "detachment": "Contingente Lanzatormenta",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad MONTADA aliada que avanzó en su turno anterior.",
    "target": "Esa unidad MONTADA aliada.",
    "effect": "Hasta el final de la fase, cada vez que un ataque a distancia tenga como objetivo a tu unidad, resta 1 a la tirada para impactar y resta 1 a la tirada para herir.",
    "fluff": "La endiablada velocidad de las motocicletas y bípodes hace imposible fijar un disparo certero sobre ellos.",
    "es": {
      "name": "Blancos Vertiginosos",
      "originalName": "Hurtling Targets",
      "type": "Táctica de Batalla",
      "detachment": "Contingente Lanzatormenta",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad MONTADA aliada que avanzó en su turno anterior.",
      "target": "Esa unidad MONTADA aliada.",
      "effect": "Hasta el final de la fase, cada vez que un ataque a distancia tenga como objetivo a tu unidad, resta 1 a la tirada para impactar y resta 1 a la tirada para herir.",
      "fluff": "La endiablada velocidad de las motocicletas y bípodes hace imposible fijar un disparo certero sobre ellos."
    },
    "en": {
      "name": "Hurtling Targets",
      "originalName": "Hurtling Targets",
      "type": "Battle Tactic",
      "detachment": "Stormlance Task Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase, when an enemy unit targets a friendly Mounted unit that Advanced.",
      "target": "That Mounted unit.",
      "effect": "Until the end of the phase, each time a ranged attack targets your unit, subtract 1 from the Hit roll and subtract 1 from the Wound roll.",
      "fluff": "Blistering speed and erratic evasion foil even advanced optical targeting."
    }
  },
  {
    "id": "strat_wrath_of_the_rock_in_sacrifice__victory",
    "cp": 1,
    "phase": "any",
    "turn": "either_turn",
    "detachmentId": "wrath_of_the_rock",
    "name": "En el Sacrificio, la Victoria",
    "originalName": "In Sacrifice, Victory",
    "type": "Hazaña Épica",
    "detachment": "Ira de la Roca",
    "phaseLabel": "Cualquier Fase",
    "turnLabel": "Cualquier Turno",
    "when": "En cualquier fase, cuando una unidad Personaje de los Ángeles Oscuros es destruida.",
    "target": "Ese Personaje aliado.",
    "effect": "Antes de retirar la miniatura, selecciona una unidad enemiga a menos de 6\": esa unidad sufre D3+3 heridas mortales, y las unidades aliadas que la ataquen obtienen +1 al Impacto hasta el final de la batalla.",
    "fluff": "La caída de un paladín de La Roca sella el destino de sus verdugos con fuego y sangre.",
    "es": {
      "name": "En el Sacrificio, la Victoria",
      "originalName": "In Sacrifice, Victory",
      "type": "Hazaña Épica",
      "detachment": "Ira de la Roca",
      "phaseLabel": "Cualquier Fase",
      "turnLabel": "Cualquier Turno",
      "when": "En cualquier fase, cuando una unidad Personaje de los Ángeles Oscuros es destruida.",
      "target": "Ese Personaje aliado.",
      "effect": "Antes de retirar la miniatura, selecciona una unidad enemiga a menos de 6\": esa unidad sufre D3+3 heridas mortales, y las unidades aliadas que la ataquen obtienen +1 al Impacto hasta el final de la batalla.",
      "fluff": "La caída de un paladín de La Roca sella el destino de sus verdugos con fuego y sangre."
    },
    "en": {
      "name": "In Sacrifice, Victory",
      "originalName": "In Sacrifice, Victory",
      "type": "Epic Deed",
      "detachment": "Wrath of the Rock",
      "phaseLabel": "Any Phase",
      "turnLabel": "Either Turn",
      "when": "Any phase, when a friendly Deathwing/Ravenwing Character unit is destroyed.",
      "target": "That Character model.",
      "effect": "Before removing it, select one enemy unit within 6\": that unit suffers D3+3 mortal wounds and friendly units gain +1 to hit against it for the rest of the battle.",
      "fluff": "The death of a champion of Caliban demands an immediate and overwhelming reckoning."
    }
  },
  {
    "id": "strat_wrath_of_the_rock_knights_of_iron",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "wrath_of_the_rock",
    "name": "Caballeros de Hierro",
    "originalName": "Knights of Iron",
    "type": "Táctica de Batalla",
    "detachment": "Ira de la Roca",
    "phaseLabel": "Fase de Movimiento o Carga",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento o carga, cuando una unidad del Ala de Cuervo aliada es seleccionada.",
    "target": "Esa unidad del Ala de Cuervo aliada.",
    "effect": "Hasta el final del turno, la unidad puede mover a través de elementos de escenografía y miniaturas enemigas como si no estuvieran allí.",
    "fluff": "Los jinetes más diestros del Ala de Cuervo superan cualquier obstáculo del terreno con saltos antigravitatorios pasmosos.",
    "es": {
      "name": "Caballeros de Hierro",
      "originalName": "Knights of Iron",
      "type": "Táctica de Batalla",
      "detachment": "Ira de la Roca",
      "phaseLabel": "Fase de Movimiento o Carga",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento o carga, cuando una unidad del Ala de Cuervo aliada es seleccionada.",
      "target": "Esa unidad del Ala de Cuervo aliada.",
      "effect": "Hasta el final del turno, la unidad puede mover a través de elementos de escenografía y miniaturas enemigas como si no estuvieran allí.",
      "fluff": "Los jinetes más diestros del Ala de Cuervo superan cualquier obstáculo del terreno con saltos antigravitatorios pasmosos."
    },
    "en": {
      "name": "Knights of Iron",
      "originalName": "Knights of Iron",
      "type": "Battle Tactic",
      "detachment": "Wrath of the Rock",
      "phaseLabel": "Movement or Charge Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement or Charge phase, when a friendly Ravenwing unit is selected.",
      "target": "That Ravenwing unit.",
      "effect": "Until the end of the turn, models in your unit can move across terrain and enemy models as if they were not there.",
      "fluff": "Skilled Ravenwing pilots vault ruined bastions and barricades with ease."
    }
  },
  {
    "id": "strat_wrath_of_the_rock_relics_of_the_dark_age",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "wrath_of_the_rock",
    "name": "Reliquias de la Era Siniestra",
    "originalName": "Relics of the Dark Age",
    "type": "Táctica de Batalla",
    "detachment": "Ira de la Roca",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad aliada equipada con armas de plasma es elegida para disparar.",
    "target": "Esa unidad de los Ángeles Oscuros aliada.",
    "effect": "Hasta el final de la fase, añade 1 a la Fuerza y 1 al Daño de todas las armas de plasma de tu unidad, y repite las tiradas de 1 natural para herir al sobrecargar.",
    "fluff": "Frascos de contención y bobinas magnéticas de la Primera Legión desatan el verdadero poder del fuego de plasma.",
    "es": {
      "name": "Reliquias de la Era Siniestra",
      "originalName": "Relics of the Dark Age",
      "type": "Táctica de Batalla",
      "detachment": "Ira de la Roca",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad aliada equipada con armas de plasma es elegida para disparar.",
      "target": "Esa unidad de los Ángeles Oscuros aliada.",
      "effect": "Hasta el final de la fase, añade 1 a la Fuerza y 1 al Daño de todas las armas de plasma de tu unidad, y repite las tiradas de 1 natural para herir al sobrecargar.",
      "fluff": "Frascos de contención y bobinas magnéticas de la Primera Legión desatan el verdadero poder del fuego de plasma."
    },
    "en": {
      "name": "Relics of the Dark Age",
      "originalName": "Relics of the Dark Age",
      "type": "Battle Tactic",
      "detachment": "Wrath of the Rock",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly Adeptus Astartes unit equipped with plasma weapons is selected to shoot.",
      "target": "That unit.",
      "effect": "Until the end of the phase, add 1 to Strength and 1 to Damage of plasma weapons equipped by models in your unit, and re-roll Wound rolls of 1 when supercharging.",
      "fluff": "Forbidden tech from the Dreadwing armouries burns with unmatched fury."
    }
  },
  {
    "id": "strat_wrath_of_the_rock_tactical_mastery",
    "cp": 1,
    "phase": "command",
    "turn": "your_turn",
    "detachmentId": "wrath_of_the_rock",
    "name": "Maestría Táctica",
    "originalName": "Tactical Mastery",
    "type": "Ardid Estratégico",
    "detachment": "Ira de la Roca",
    "phaseLabel": "Fase de Mando",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de mando.",
    "target": "Una unidad de los Ángeles Oscuros de tu ejército.",
    "effect": "Selecciona una regla de doctrina de Ala (Ala de la Muerte o Ala de Cuervo): la unidad se beneficia de ella hasta el inicio de tu siguiente fase de mando.",
    "fluff": "Los oficiales veteranos adaptan sus protocolos de combate coordinando infantería y vehículos en perfecta sintonía.",
    "es": {
      "name": "Maestría Táctica",
      "originalName": "Tactical Mastery",
      "type": "Ardid Estratégico",
      "detachment": "Ira de la Roca",
      "phaseLabel": "Fase de Mando",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de mando.",
      "target": "Una unidad de los Ángeles Oscuros de tu ejército.",
      "effect": "Selecciona una regla de doctrina de Ala (Ala de la Muerte o Ala de Cuervo): la unidad se beneficia de ella hasta el inicio de tu siguiente fase de mando.",
      "fluff": "Los oficiales veteranos adaptan sus protocolos de combate coordinando infantería y vehículos en perfecta sintonía."
    },
    "en": {
      "name": "Tactical Mastery",
      "originalName": "Tactical Mastery",
      "type": "Strategic Ploy",
      "detachment": "Wrath of the Rock",
      "phaseLabel": "Command Phase",
      "turnLabel": "Your Turn",
      "when": "Your Command phase.",
      "target": "One Dark Angels unit from your army.",
      "effect": "Select one Wing doctrine (Deathwing or Ravenwing): the unit gains its benefits until the start of your next Command phase.",
      "fluff": "Veteran commanders coordinate disparate arms into one unified spearhead."
    }
  },
  {
    "id": "strat_wrath_of_the_rock_inescapable_justice",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "wrath_of_the_rock",
    "name": "Justicia Ineludible",
    "originalName": "Inescapable Justice",
    "type": "Táctica de Batalla",
    "detachment": "Ira de la Roca",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad aliada combate contra el objetivo designado como Juramento de Momento.",
    "target": "Esa unidad de los Ángeles Oscuros aliada.",
    "effect": "Hasta el final de la fase, los ataques cuerpo a cuerpo de tu unidad obtienen [GOLPES CRÍTICOS EN 5+] y mejoran su FP en 1.",
    "fluff": "Nadie escapa al juicio de los No Perdonados cuando el Juramento ha sido pronunciado.",
    "es": {
      "name": "Justicia Ineludible",
      "originalName": "Inescapable Justice",
      "type": "Táctica de Batalla",
      "detachment": "Ira de la Roca",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad aliada combate contra el objetivo designado como Juramento de Momento.",
      "target": "Esa unidad de los Ángeles Oscuros aliada.",
      "effect": "Hasta el final de la fase, los ataques cuerpo a cuerpo de tu unidad obtienen [GOLPES CRÍTICOS EN 5+] y mejoran su FP en 1.",
      "fluff": "Nadie escapa al juicio de los No Perdonados cuando el Juramento ha sido pronunciado."
    },
    "en": {
      "name": "Inescapable Justice",
      "originalName": "Inescapable Justice",
      "type": "Battle Tactic",
      "detachment": "Wrath of the Rock",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when a friendly Adeptus Astartes unit fights against the Oath of Moment target.",
      "target": "That Adeptus Astartes unit.",
      "effect": "Until the end of the phase, melee weapons equipped by models in your unit have [CRITICAL HITS ON 5+] and improve AP by 1.",
      "fluff": "Condemned foes are eradicated with merciless finality."
    }
  },
  {
    "id": "strat_wrath_of_the_rock_lion_s_will",
    "cp": 1,
    "phase": "command",
    "turn": "either_turn",
    "detachmentId": "wrath_of_the_rock",
    "name": "La Voluntad del León",
    "originalName": "Lion's Will",
    "type": "Hazaña Épica",
    "detachment": "Ira de la Roca",
    "phaseLabel": "Fase de Mando",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de mando, cuando una unidad aliada deba realizar un chequeo de acobardamiento.",
    "target": "Esa unidad de los Ángeles Oscuros aliada.",
    "effect": "La unidad supera automáticamente el chequeo sin tirar dados y recupera 1 herida perdida en una miniatura herida.",
    "fluff": "La implacable voluntad del Primarca Lion El'Jonson destierra cualquier duda o temor de sus hijos.",
    "es": {
      "name": "La Voluntad del León",
      "originalName": "Lion's Will",
      "type": "Hazaña Épica",
      "detachment": "Ira de la Roca",
      "phaseLabel": "Fase de Mando",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de mando, cuando una unidad aliada deba realizar un chequeo de acobardamiento.",
      "target": "Esa unidad de los Ángeles Oscuros aliada.",
      "effect": "La unidad supera automáticamente el chequeo sin tirar dados y recupera 1 herida perdida en una miniatura herida.",
      "fluff": "La implacable voluntad del Primarca Lion El'Jonson destierra cualquier duda o temor de sus hijos."
    },
    "en": {
      "name": "Lion's Will",
      "originalName": "Lion's Will",
      "type": "Epic Deed",
      "detachment": "Wrath of the Rock",
      "phaseLabel": "Command Phase",
      "turnLabel": "Your Turn",
      "when": "Command phase, when a friendly unit must take a Battle-shock test.",
      "target": "That Dark Angels unit.",
      "effect": "The unit automatically passes that test and one wounded model in the unit regains 1 lost wound.",
      "fluff": "The austere resolve of Primarch Lion El'Jonson banishes all doubt and despair."
    }
  },
  {
    "id": "strat_boarding_strike_ceramite_bulwark",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "boarding_strike",
    "name": "Baluarte de Ceramita",
    "originalName": "Ceramite Bulwark",
    "type": "Táctica de Batalla",
    "detachment": "Golpe de Abordaje",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad ADEPTUS ASTARTES aliada.",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Hasta el final de la fase, cada vez que se asigne un ataque a una miniatura de tu unidad, suma 1 a sus tiradas de salvación de armadura.",
    "fluff": "Escudos entrelazados y hombreras macizas forman una muralla infranqueable en los estrechos pasillos de las naves.",
    "es": {
      "name": "Baluarte de Ceramita",
      "originalName": "Ceramite Bulwark",
      "type": "Táctica de Batalla",
      "detachment": "Golpe de Abordaje",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad ADEPTUS ASTARTES aliada.",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Hasta el final de la fase, cada vez que se asigne un ataque a una miniatura de tu unidad, suma 1 a sus tiradas de salvación de armadura.",
      "fluff": "Escudos entrelazados y hombreras macizas forman una muralla infranqueable en los estrechos pasillos de las naves."
    },
    "en": {
      "name": "Ceramite Bulwark",
      "originalName": "Ceramite Bulwark",
      "type": "Battle Tactic",
      "detachment": "Boarding Strike",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when an enemy unit targets a friendly ADEPTUS ASTARTES unit.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "Until the end of the phase, each time an attack is allocated to a model in your unit, add 1 to its saving throw.",
      "fluff": "Locked storm shields and overlapping plates turn cramped ship corridors into impassable killzones."
    }
  },
  {
    "id": "strat_boarding_strike_in_the_emperor_s_name",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "boarding_strike",
    "name": "En Nombre del Emperador",
    "originalName": "In the Emperor's Name",
    "type": "Hazaña Épica",
    "detachment": "Golpe de Abordaje",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo o combate de tu oponente, cuando una unidad aliada pierde miniaturas.",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Tu unidad supera automáticamente los chequeos de acobardamiento hasta tu siguiente fase de mando y añade 1 a su atributo de Control de Objetivo.",
    "fluff": "Invocando el nombre del Señor de la Humanidad, los Marines Espaciales juran morir antes que ceder un palmo de cubierta.",
    "es": {
      "name": "En Nombre del Emperador",
      "originalName": "In the Emperor's Name",
      "type": "Hazaña Épica",
      "detachment": "Golpe de Abordaje",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo o combate de tu oponente, cuando una unidad aliada pierde miniaturas.",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Tu unidad supera automáticamente los chequeos de acobardamiento hasta tu siguiente fase de mando y añade 1 a su atributo de Control de Objetivo.",
      "fluff": "Invocando el nombre del Señor de la Humanidad, los Marines Espaciales juran morir antes que ceder un palmo de cubierta."
    },
    "en": {
      "name": "In the Emperor's Name",
      "originalName": "In the Emperor's Name",
      "type": "Epic Deed",
      "detachment": "Boarding Strike",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting or Fight phase, after a friendly unit loses models.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "Your unit automatically passes Battle-shock tests until your next Command phase and adds 1 to Objective Control.",
      "fluff": "Swearing oaths to the Master of Mankind, warriors hold key bulkheads at any cost."
    }
  },
  {
    "id": "strat_boarding_strike_duty_and_defiance",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "boarding_strike",
    "name": "Deber y Desafío",
    "originalName": "Duty and Defiance",
    "type": "Táctica de Batalla",
    "detachment": "Golpe de Abordaje",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, justo después de que una unidad enemiga haya combatido.",
    "target": "Una unidad ADEPTUS ASTARTES aliada que esté trabada con esa unidad enemiga.",
    "effect": "Tu unidad puede combatir a continuación e inflige heridas críticas con resultados de 5+ no modificados.",
    "fluff": "Resistiendo la embestida inicial, los guerreros de asalto barren la sala con contragolpes fulminantes.",
    "es": {
      "name": "Deber y Desafío",
      "originalName": "Duty and Defiance",
      "type": "Táctica de Batalla",
      "detachment": "Golpe de Abordaje",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, justo después de que una unidad enemiga haya combatido.",
      "target": "Una unidad ADEPTUS ASTARTES aliada que esté trabada con esa unidad enemiga.",
      "effect": "Tu unidad puede combatir a continuación e inflige heridas críticas con resultados de 5+ no modificados.",
      "fluff": "Resistiendo la embestida inicial, los guerreros de asalto barren la sala con contragolpes fulminantes."
    },
    "en": {
      "name": "Duty and Defiance",
      "originalName": "Duty and Defiance",
      "type": "Battle Tactic",
      "detachment": "Boarding Strike",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, just after an enemy unit has fought.",
      "target": "One friendly ADEPTUS ASTARTES unit in Engagement Range.",
      "effect": "Your unit fights next, and scores Critical Wounds on unmodified rolls of 5+.",
      "fluff": "Absorbing the impact of enemy close combat, boarding teams strike back ruthlessly."
    }
  },
  {
    "id": "strat_boarding_strike_vox_amplified_roar",
    "cp": 1,
    "phase": "charge",
    "turn": "your_turn",
    "detachmentId": "boarding_strike",
    "name": "Rugido por Vox Amplificado",
    "originalName": "Vox-Amplified Roar",
    "type": "Ardid Estratégico",
    "detachment": "Golpe de Abordaje",
    "phaseLabel": "Fase de Carga",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de carga, justo después de que una unidad ADEPTUS ASTARTES aliada termine una carga.",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Una unidad enemiga trabada debe realizar de inmediato un chequeo de acobardamiento con un penalizador de -1.",
    "fluff": "Los transmisores de casco braman himnos de guerra a decibelios ensordecedores que quiebran la psique enemiga.",
    "es": {
      "name": "Rugido por Vox Amplificado",
      "originalName": "Vox-Amplified Roar",
      "type": "Ardid Estratégico",
      "detachment": "Golpe de Abordaje",
      "phaseLabel": "Fase de Carga",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de carga, justo después de que una unidad ADEPTUS ASTARTES aliada termine una carga.",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Una unidad enemiga trabada debe realizar de inmediato un chequeo de acobardamiento con un penalizador de -1.",
      "fluff": "Los transmisores de casco braman himnos de guerra a decibelios ensordecedores que quiebran la psique enemiga."
    },
    "en": {
      "name": "Vox-Amplified Roar",
      "originalName": "Vox-Amplified Roar",
      "type": "Strategic Ploy",
      "detachment": "Golpe de Abordaje",
      "phaseLabel": "Charge Phase",
      "turnLabel": "Your Turn",
      "when": "Your Charge phase, just after a friendly ADEPTUS ASTARTES unit ends a charge move.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "One enemy unit within Engagement Range must immediately take a Battle-shock test with a -1 penalty.",
      "fluff": "Thunderous war cries reverberate through metal decks, shattering enemy nerve."
    }
  },
  {
    "id": "strat_pilum_strike_master_marksmen",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "pilum_strike",
    "name": "Tiradores Maestros",
    "originalName": "Master Marksmen",
    "type": "Táctica de Batalla",
    "detachment": "Equipo de Asalto Pilum",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo.",
    "target": "Una unidad de INFANTERÍA ADEPTUS ASTARTES aliada.",
    "effect": "Hasta el final de la fase, las armas a distancia de tu unidad obtienen [PRECISIÓN] e [IMPACTOS PESADOS (+1 a impactar si permaneció estacionaria)].",
    "fluff": "Tiradores de élite sincronizan miras biométricas para eliminar a oficiales enemigos entre la multitud.",
    "es": {
      "name": "Tiradores Maestros",
      "originalName": "Master Marksmen",
      "type": "Táctica de Batalla",
      "detachment": "Equipo de Asalto Pilum",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo.",
      "target": "Una unidad de INFANTERÍA ADEPTUS ASTARTES aliada.",
      "effect": "Hasta el final de la fase, las armas a distancia de tu unidad obtienen [PRECISIÓN] e [IMPACTOS PESADOS (+1 a impactar si permaneció estacionaria)].",
      "fluff": "Tiradores de élite sincronizan miras biométricas para eliminar a oficiales enemigos entre la multitud."
    },
    "en": {
      "name": "Master Marksmen",
      "originalName": "Master Marksmen",
      "type": "Battle Tactic",
      "detachment": "Pilum Strike Team",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase.",
      "target": "One friendly ADEPTUS ASTARTES Infantry unit.",
      "effect": "Until the end of the phase, ranged weapons equipped by models in your unit have the [PRECISION] and [HEAVY] abilities.",
      "fluff": "Sharpshooters calm their hearts and execute high-priority targets with chilling ease."
    }
  },
  {
    "id": "strat_pilum_strike_knife_work",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "pilum_strike",
    "name": "Lucha con Cuchillo",
    "originalName": "Knife Work",
    "type": "Táctica de Batalla",
    "detachment": "Equipo de Asalto Pilum",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate.",
    "target": "Una unidad de INFANTERÍA ADEPTUS ASTARTES aliada.",
    "effect": "Hasta el final de la fase, las armas cuerpo a cuerpo de tu unidad obtienen [GOLPES LETALES] e incrementan sus ataques en 1.",
    "fluff": "Hojas de combate de ceramita buscan los puntos vulnerables de las junturas de armadura enemiga.",
    "es": {
      "name": "Lucha con Cuchillo",
      "originalName": "Knife Work",
      "type": "Táctica de Batalla",
      "detachment": "Equipo de Asalto Pilum",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate.",
      "target": "Una unidad de INFANTERÍA ADEPTUS ASTARTES aliada.",
      "effect": "Hasta el final de la fase, las armas cuerpo a cuerpo de tu unidad obtienen [GOLPES LETALES] e incrementan sus ataques en 1.",
      "fluff": "Hojas de combate de ceramita buscan los puntos vulnerables de las junturas de armadura enemiga."
    },
    "en": {
      "name": "Knife Work",
      "originalName": "Knife Work",
      "type": "Battle Tactic",
      "detachment": "Pilum Strike Team",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase.",
      "target": "One friendly ADEPTUS ASTARTES Infantry unit.",
      "effect": "Until the end of the phase, melee weapons equipped by models in your unit gain [LETHAL HITS] and add 1 to Attacks.",
      "fluff": "Combat knives find the weak seams in enemy battle plate with surgical violence."
    }
  },
  {
    "id": "strat_pilum_strike_fighting_retreat",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "pilum_strike",
    "name": "Retirada en Combate",
    "originalName": "Fighting Retreat",
    "type": "Ardid Estratégico",
    "detachment": "Equipo de Asalto Pilum",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento, justo después de que una unidad aliada destrabe (Fall Back).",
    "target": "Esa unidad ADEPTUS ASTARTES aliada.",
    "effect": "Tu unidad sigue siendo elegible para disparar y declarar una carga en este turno, a pesar de haberse destrabado.",
    "fluff": "Los exploradores se repliegan disparando ráfagas continuas para volver a saltar al asalto desde un ángulo letal.",
    "es": {
      "name": "Retirada en Combate",
      "originalName": "Fighting Retreat",
      "type": "Ardid Estratégico",
      "detachment": "Equipo de Asalto Pilum",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento, justo después de que una unidad aliada destrabe (Fall Back).",
      "target": "Esa unidad ADEPTUS ASTARTES aliada.",
      "effect": "Tu unidad sigue siendo elegible para disparar y declarar una carga en este turno, a pesar de haberse destrabado.",
      "fluff": "Los exploradores se repliegan disparando ráfagas continuas para volver a saltar al asalto desde un ángulo letal."
    },
    "en": {
      "name": "Fighting Retreat",
      "originalName": "Fighting Retreat",
      "type": "Strategic Ploy",
      "detachment": "Pilum Strike Team",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement phase, just after a friendly unit Falls Back.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "Your unit is still eligible to shoot and declare a charge this turn, even though it Fell Back.",
      "fluff": "Disciplined warriors withdraw under fire only to counter-attack from superior ground."
    }
  },
  {
    "id": "strat_pilum_strike_enhanced_efficiency",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "pilum_strike",
    "name": "Eficiencia Aumentada",
    "originalName": "Enhanced Efficiency",
    "type": "Ardid Estratégico",
    "detachment": "Equipo de Asalto Pilum",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento.",
    "target": "Una unidad ADEPTUS ASTARTES de tu ejército.",
    "effect": "Añade 3\" al atributo de Movimiento de esa unidad y puede repetir tiradas de Avance durante esta fase.",
    "fluff": "Estimulantes de combate y protocolos servoasistidos aceleran el paso de las escuadras de asalto.",
    "es": {
      "name": "Eficiencia Aumentada",
      "originalName": "Enhanced Efficiency",
      "type": "Ardid Estratégico",
      "detachment": "Equipo de Asalto Pilum",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento.",
      "target": "Una unidad ADEPTUS ASTARTES de tu ejército.",
      "effect": "Añade 3\" al atributo de Movimiento de esa unidad y puede repetir tiradas de Avance durante esta fase.",
      "fluff": "Estimulantes de combate y protocolos servoasistidos aceleran el paso de las escuadras de asalto."
    },
    "en": {
      "name": "Enhanced Efficiency",
      "originalName": "Enhanced Efficiency",
      "type": "Strategic Ploy",
      "detachment": "Pilum Strike Team",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement phase.",
      "target": "One ADEPTUS ASTARTES unit from your army.",
      "effect": "Add 3\" to the Move characteristic of that unit, and it can re-roll Advance rolls this phase.",
      "fluff": "Combat stimms and servo-actuators propel the strike squad across open terrain."
    }
  },
  {
    "id": "strat_terminator_assault_cleansing_sweep",
    "cp": 1,
    "phase": "charge",
    "turn": "opponent_turn",
    "detachmentId": "terminator_assault",
    "name": "Barrido Purificador",
    "originalName": "Cleansing Sweep",
    "type": "Táctica de Batalla",
    "detachment": "Asalto de Exterminadores",
    "phaseLabel": "Fase de Movimiento o Carga",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de movimiento o carga del oponente, cuando una unidad enemiga se acerque a menos de 9\".",
    "target": "Una unidad de EXTERMINADORES aliada.",
    "effect": "Tu unidad realiza de inmediato disparos preventivos (Overwatch) con sus bólteres de asalto y lanzallamas pesados sin gastar CP adicionales.",
    "fluff": "Armas pesadas de Exterminador saturan pasillos enteros de fuego abrasador ante la aproximación hostil.",
    "es": {
      "name": "Barrido Purificador",
      "originalName": "Cleansing Sweep",
      "type": "Táctica de Batalla",
      "detachment": "Asalto de Exterminadores",
      "phaseLabel": "Fase de Movimiento o Carga",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de movimiento o carga del oponente, cuando una unidad enemiga se acerque a menos de 9\".",
      "target": "Una unidad de EXTERMINADORES aliada.",
      "effect": "Tu unidad realiza de inmediato disparos preventivos (Overwatch) con sus bólteres de asalto y lanzallamas pesados sin gastar CP adicionales.",
      "fluff": "Armas pesadas de Exterminador saturan pasillos enteros de fuego abrasador ante la aproximación hostil."
    },
    "en": {
      "name": "Cleansing Sweep",
      "originalName": "Cleansing Sweep",
      "type": "Battle Tactic",
      "detachment": "Terminator Assault",
      "phaseLabel": "Movement or Charge Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Movement or Charge phase, when an enemy unit moves within 9\".",
      "target": "One friendly Terminator unit.",
      "effect": "Your unit immediately fires Overwatch with its storm bolters and heavy flamers at no additional CP cost.",
      "fluff": "Storm bolters roar in unison, sweeping corridors clear of advancing hostiles."
    }
  },
  {
    "id": "strat_terminator_assault_tower_of_strength",
    "cp": 1,
    "phase": "command",
    "turn": "either_turn",
    "detachmentId": "terminator_assault",
    "name": "Torre de Fuerza",
    "originalName": "Tower of Strength",
    "type": "Hazaña Épica",
    "detachment": "Asalto de Exterminadores",
    "phaseLabel": "Cualquier Fase",
    "turnLabel": "Cualquier Turno",
    "when": "Al inicio o final de cualquier fase.",
    "target": "Una unidad de EXTERMINADORES aliada.",
    "effect": "Hasta el final del turno, el atributo de Control de Objetivo (CO) de cada miniatura de la unidad aumenta en 1, y no pueden ser movidas contra su voluntad por reglas enemigas.",
    "fluff": "Inamovibles como baluartes de piedra, los gigantes acorazados afianzan sus botas de ceramita en el suelo sagrado.",
    "es": {
      "name": "Torre de Fuerza",
      "originalName": "Tower of Strength",
      "type": "Hazaña Épica",
      "detachment": "Asalto de Exterminadores",
      "phaseLabel": "Cualquier Fase",
      "turnLabel": "Cualquier Turno",
      "when": "Al inicio o final de cualquier fase.",
      "target": "Una unidad de EXTERMINADORES aliada.",
      "effect": "Hasta el final del turno, el atributo de Control de Objetivo (CO) de cada miniatura de la unidad aumenta en 1, y no pueden ser movidas contra su voluntad por reglas enemigas.",
      "fluff": "Inamovibles como baluartes de piedra, los gigantes acorazados afianzan sus botas de ceramita en el suelo sagrado.",
      "restrictions": "Cada vez que uses esta Estratagema, no podrás volver a usarla hasta el inicio de tu siguiente fase de Mando."
    },
    "en": {
      "name": "Tower of Strength",
      "originalName": "Tower of Strength",
      "type": "Epic Deed",
      "detachment": "Terminator Assault",
      "phaseLabel": "Any Phase",
      "turnLabel": "Either Turn",
      "when": "Start or end of any phase.",
      "target": "One friendly Terminator unit.",
      "effect": "Until the end of the turn, improve the Objective Control characteristic of models in your unit by 1, and they cannot be moved by enemy rules.",
      "fluff": "Armoured titans plant their boots, standing immovable amidst the raging storm.",
      "restrictions": "Each time you use this Stratagem, you cannot use it again until after your next Command phase."
    },
    "restrictions": "Each time you use this Stratagem, you cannot use it again until after your next Command phase."
  },
  {
    "id": "strat_terminator_assault_carve_a_path",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "terminator_assault",
    "name": "Abrir una Brecha",
    "originalName": "Carve a Path",
    "type": "Táctica de Batalla",
    "detachment": "Asalto de Exterminadores",
    "phaseLabel": "Fase de Movimiento o Carga",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento o de carga.",
    "target": "Una unidad de EXTERMINADORES aliada.",
    "effect": "Tu unidad ignora penalizadores al movimiento por terreno difícil y puede repetir tiradas de carga en este turno.",
    "fluff": "Puños de combate y cuchillas relámpago trituran mamparos y barricadas para abrir paso a la fuerza de choque.",
    "es": {
      "name": "Abrir una Brecha",
      "originalName": "Carve a Path",
      "type": "Táctica de Batalla",
      "detachment": "Asalto de Exterminadores",
      "phaseLabel": "Fase de Movimiento o Carga",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento o de carga.",
      "target": "Una unidad de EXTERMINADORES aliada.",
      "effect": "Tu unidad ignora penalizadores al movimiento por terreno difícil y puede repetir tiradas de carga en este turno.",
      "fluff": "Puños de combate y cuchillas relámpago trituran mamparos y barricadas para abrir paso a la fuerza de choque.",
      "restrictions": "No puedes usar esta Estratagema más de una vez por turno."
    },
    "en": {
      "name": "Carve a Path",
      "originalName": "Carve a Path",
      "type": "Battle Tactic",
      "detachment": "Terminator Assault",
      "phaseLabel": "Movement or Charge Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement phase or Charge phase.",
      "target": "One friendly Terminator unit.",
      "effect": "Your unit ignores movement penalties from difficult terrain and can re-roll Charge rolls this turn.",
      "fluff": "Power fists and chainfists smash through steel bulkheads, creating avenues of advance.",
      "restrictions": "You cannot use this Stratagem more than once per turn."
    },
    "restrictions": "You cannot use this Stratagem more than once per turn."
  },
  {
    "id": "strat_terminator_assault_focusing_shrine",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "terminator_assault",
    "name": "Santuario de Concentración",
    "originalName": "Focusing Shrine",
    "type": "Ardid Estratégico",
    "detachment": "Asalto de Exterminadores",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento, al inicio del paso de Refuerzos.",
    "target": "Un marcador de objetivo controlado por tu ejército.",
    "effect": "Las unidades de Exterminadores que lleguen mediante Despliegue Rápido a menos de 6\" de ese objetivo pueden desplegar a más de 6\" del enemigo (en lugar de 9\").",
    "fluff": "Balizas de telemetría bendecidas por capellanes guían las coordenadas de inserción de la Primera Compañía.",
    "es": {
      "name": "Santuario de Concentración",
      "originalName": "Focusing Shrine",
      "type": "Ardid Estratégico",
      "detachment": "Asalto de Exterminadores",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento, al inicio del paso de Refuerzos.",
      "target": "Un marcador de objetivo controlado por tu ejército.",
      "effect": "Las unidades de Exterminadores que lleguen mediante Despliegue Rápido a menos de 6\" de ese objetivo pueden desplegar a más de 6\" del enemigo (en lugar de 9\").",
      "fluff": "Balizas de telemetría bendecidas por capellanes guían las coordenadas de inserción de la Primera Compañía.",
      "restrictions": "Hasta el final del turno, tu unidad no es elegible para disparar ni para declarar una carga."
    },
    "en": {
      "name": "Focusing Shrine",
      "originalName": "Focusing Shrine",
      "type": "Strategic Ploy",
      "detachment": "Terminator Assault",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement phase, at the start of the Reinforcements step.",
      "target": "One objective marker controlled by your army.",
      "effect": "Friendly Terminator units arriving from Deep Strike within 6\" of that objective can be set up more than 6\" away from enemy models.",
      "fluff": "Hallowed beacons calibrate teleportation signals directly onto sacred ground.",
      "restrictions": "Until the end of the turn, your unit is not eligible to declare a charge."
    },
    "restrictions": "Until the end of the turn, your unit is not eligible to declare a charge."
  },
  {
    "id": "strat_shield_of_void_adaptive_purge",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "shield_of_void",
    "name": "Purga Adaptativa",
    "originalName": "Adaptive Purge",
    "type": "Táctica de Batalla",
    "detachment": "Escudo del Vacío",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo.",
    "target": "Una unidad ADEPTUS ASTARTES aliada.",
    "effect": "Hasta el final de la fase, las armas de tu unidad obtienen [ANTI-INFANTERÍA 4+] o [ANTI-VEHÍCULO 4+] (a tu elección).",
    "fluff": "Munición configurada a medida descompone blindajes orgánicos o mecánicos con eficacia extrema.",
    "es": {
      "name": "Purga Adaptativa",
      "originalName": "Adaptive Purge",
      "type": "Táctica de Batalla",
      "detachment": "Escudo del Vacío",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo.",
      "target": "Una unidad ADEPTUS ASTARTES aliada.",
      "effect": "Hasta el final de la fase, las armas de tu unidad obtienen [ANTI-INFANTERÍA 4+] o [ANTI-VEHÍCULO 4+] (a tu elección).",
      "fluff": "Munición configurada a medida descompone blindajes orgánicos o mecánicos con eficacia extrema."
    },
    "en": {
      "name": "Adaptive Purge",
      "originalName": "Adaptive Purge",
      "type": "Battle Tactic",
      "detachment": "Shield of the Void",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase.",
      "target": "One friendly ADEPTUS ASTARTES unit.",
      "effect": "Until the end of the phase, ranged weapons in your unit gain either [ANTI-INFANTRY 4+] or [ANTI-VEHICLE 4+] (your choice).",
      "fluff": "Astartes load specialized munitions tailored precisely to eliminate the targeted foe."
    }
  },
  {
    "id": "strat_shield_of_void_rapid_takeover",
    "cp": 1,
    "phase": "movement",
    "turn": "opponent_turn",
    "detachmentId": "shield_of_void",
    "name": "Toma Rápida",
    "originalName": "Rapid Takeover",
    "type": "Ardid Estratégico",
    "detachment": "Escudo del Vacío",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de movimiento de tu oponente, justo después de que una unidad enemiga termine un movimiento cerca de un objetivo.",
    "target": "Una unidad ADEPTUS ASTARTES aliada que controle ese objetivo.",
    "effect": "Ese objetivo permanece bajo tu control hasta el final de la batalla, incluso si no tienes miniaturas en él, hasta que el enemigo lo capture.",
    "fluff": "Subrutinas lógicas aseguran las consolas de mando de la estación espacial bajo control imperial permanente.",
    "es": {
      "name": "Toma Rápida",
      "originalName": "Rapid Takeover",
      "type": "Ardid Estratégico",
      "detachment": "Escudo del Vacío",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de movimiento de tu oponente, justo después de que una unidad enemiga termine un movimiento cerca de un objetivo.",
      "target": "Una unidad ADEPTUS ASTARTES aliada que controle ese objetivo.",
      "effect": "Ese objetivo permanece bajo tu control hasta el final de la batalla, incluso si no tienes miniaturas en él, hasta que el enemigo lo capture.",
      "fluff": "Subrutinas lógicas aseguran las consolas de mando de la estación espacial bajo control imperial permanente."
    },
    "en": {
      "name": "Rapid Takeover",
      "originalName": "Rapid Takeover",
      "type": "Strategic Ploy",
      "detachment": "Shield of the Void",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Movement phase, just after an enemy unit moves near an objective.",
      "target": "One friendly ADEPTUS ASTARTES unit controlling that objective.",
      "effect": "That objective marker remains under your control even if you have no models within range of it.",
      "fluff": "Security protocols lock down critical control consoles under permanent Imperial authority."
    }
  },
  {
    "id": "strat_shield_of_void_overcharged_breach",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "shield_of_void",
    "name": "Brecha Sobrecargada",
    "originalName": "Overcharged Breach",
    "type": "Táctica de Batalla",
    "detachment": "Escudo del Vacío",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "Al inicio de tu fase de disparo.",
    "target": "Una unidad ADEPTUS ASTARTES aliada.",
    "effect": "Hasta el final de la fase, mejora el Factor de Penetración (FP) de las armas a distancia de tu unidad en 1.",
    "fluff": "Células de energía sobrecargadas perforan placas de casco estelar de doble grosor.",
    "es": {
      "name": "Brecha Sobrecargada",
      "originalName": "Overcharged Breach",
      "type": "Táctica de Batalla",
      "detachment": "Escudo del Vacío",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "Al inicio de tu fase de disparo.",
      "target": "Una unidad ADEPTUS ASTARTES aliada.",
      "effect": "Hasta el final de la fase, mejora el Factor de Penetración (FP) de las armas a distancia de tu unidad en 1.",
      "fluff": "Células de energía sobrecargadas perforan placas de casco estelar de doble grosor."
    },
    "en": {
      "name": "Overcharged Breach",
      "originalName": "Overcharged Breach",
      "type": "Battle Tactic",
      "detachment": "Shield of the Void",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Start of your Shooting phase.",
      "target": "One friendly ADEPTUS ASTARTES unit.",
      "effect": "Until the end of the phase, improve the Armour Penetration characteristic of ranged weapons in your unit by 1.",
      "fluff": "Overcharged capacitors unleash searing energy capable of melting through reinforced void bulkheads."
    }
  },
  {
    "id": "strat_shield_of_void_codex_warfare",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "shield_of_void",
    "name": "Guerra de Códex",
    "originalName": "Codex Warfare",
    "type": "Ardid Estratégico",
    "detachment": "Escudo del Vacío",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento.",
    "target": "Tu Señor de la Guerra (Warlord).",
    "effect": "Ganas de inmediato 1 Punto de Mando adicional si controlas al menos dos marcadores de objetivo en este momento.",
    "fluff": "El cumplimiento escrupuloso de los axiomas de Guilliman otorga una ventaja logística inmediata.",
    "es": {
      "name": "Guerra de Códex",
      "originalName": "Codex Warfare",
      "type": "Ardid Estratégico",
      "detachment": "Escudo del Vacío",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento.",
      "target": "Tu Señor de la Guerra (Warlord).",
      "effect": "Ganas de inmediato 1 Punto de Mando adicional si controlas al menos dos marcadores de objetivo en este momento.",
      "fluff": "El cumplimiento escrupuloso de los axiomas de Guilliman otorga una ventaja logística inmediata."
    },
    "en": {
      "name": "Codex Warfare",
      "originalName": "Codex Warfare",
      "type": "Strategic Ploy",
      "detachment": "Shield of the Void",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement phase.",
      "target": "Your Warlord.",
      "effect": "You immediately gain 1 additional Command Point if you control at least two objective markers.",
      "fluff": "Strict adherence to the Codex Astartes delivers unmatched tactical efficiency."
    }
  },
  {
    "id": "strat_ceramite_sentinels_stand_to_the_end",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "ceramite_sentinels",
    "name": "Resistir hasta el Final",
    "originalName": "Stand to the End",
    "type": "Hazaña Épica",
    "detachment": "Centinelas de Ceramita",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo o combate de tu oponente.",
    "target": "Una unidad atrincherada de Centinelas de Ceramita aliada.",
    "effect": "Hasta el final de la fase, la unidad no puede ser herida con tiradas menores de 4+, independientemente de la Fuerza del atacante.",
    "fluff": "Atrincherados tras barricadas de plasteel, los centinelas soportan el fuego más atronador sin vacilar.",
    "es": {
      "name": "Resistir hasta el Final",
      "originalName": "Stand to the End",
      "type": "Hazaña Épica",
      "detachment": "Centinelas de Ceramita",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo o combate de tu oponente.",
      "target": "Una unidad atrincherada de Centinelas de Ceramita aliada.",
      "effect": "Hasta el final de la fase, la unidad no puede ser herida con tiradas menores de 4+, independientemente de la Fuerza del atacante.",
      "fluff": "Atrincherados tras barricadas de plasteel, los centinelas soportan el fuego más atronador sin vacilar."
    },
    "en": {
      "name": "Stand to the End",
      "originalName": "Stand to the End",
      "type": "Epic Deed",
      "detachment": "Ceramite Sentinels",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting or Fight phase.",
      "target": "One entrenched friendly ADEPTUS ASTARTES unit.",
      "effect": "Until the end of the phase, attacks targeting your unit cannot wound on an unmodified roll of 1-3.",
      "fluff": "Dug into defensive bastions, the sentinels stand resolute against impossible odds."
    }
  },
  {
    "id": "strat_ceramite_sentinels_unyielding_might",
    "cp": 1,
    "phase": "command",
    "turn": "either_turn",
    "detachmentId": "ceramite_sentinels",
    "name": "Fuerza Inquebrantable",
    "originalName": "Unyielding Might",
    "type": "Táctica de Batalla",
    "detachment": "Centinelas de Ceramita",
    "phaseLabel": "Fase de Mando",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de mando.",
    "target": "Una unidad de Centinelas de Ceramita aliada.",
    "effect": "Hasta tu siguiente fase de mando, la unidad recupera D3 heridas perdidas y su atributo de Resistencia aumenta en 1.",
    "fluff": "Armaduras Gravis y servoesqueletos reforzados reparan sus sellos herméticos en mitad de la refriega.",
    "es": {
      "name": "Fuerza Inquebrantable",
      "originalName": "Unyielding Might",
      "type": "Táctica de Batalla",
      "detachment": "Centinelas de Ceramita",
      "phaseLabel": "Fase de Mando",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de mando.",
      "target": "Una unidad de Centinelas de Ceramita aliada.",
      "effect": "Hasta tu siguiente fase de mando, la unidad recupera D3 heridas perdidas y su atributo de Resistencia aumenta en 1.",
      "fluff": "Armaduras Gravis y servoesqueletos reforzados reparan sus sellos herméticos en mitad de la refriega."
    },
    "en": {
      "name": "Unyielding Might",
      "originalName": "Unyielding Might",
      "type": "Battle Tactic",
      "detachment": "Ceramite Sentinels",
      "phaseLabel": "Command Phase",
      "turnLabel": "Your Turn",
      "when": "Command phase.",
      "target": "One friendly ADEPTUS ASTARTES unit.",
      "effect": "Until your next Command phase, one model in the unit regains D3 lost wounds, and its Toughness improves by 1.",
      "fluff": "Heavy Gravis servos reseal damaged plating to endure endless barrages."
    }
  },
  {
    "id": "strat_ceramite_sentinels_augmented_targeting",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "ceramite_sentinels",
    "name": "Puntería Aumentada",
    "originalName": "Augmented Targeting",
    "type": "Táctica de Batalla",
    "detachment": "Centinelas de Ceramita",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo o combate.",
    "target": "Una unidad de Centinelas de Ceramita aliada.",
    "effect": "Hasta el final de la fase, las armas de tu unidad obtienen [IMPACTOS PESADOS] y repiten tiradas para impactar de 1.",
    "fluff": "Sensores ópticos de largo alcance guían los proyectiles pesados al corazón de las filas enemigas.",
    "es": {
      "name": "Puntería Aumentada",
      "originalName": "Augmented Targeting",
      "type": "Táctica de Batalla",
      "detachment": "Centinelas de Ceramita",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo o combate.",
      "target": "Una unidad de Centinelas de Ceramita aliada.",
      "effect": "Hasta el final de la fase, las armas de tu unidad obtienen [IMPACTOS PESADOS] y repiten tiradas para impactar de 1.",
      "fluff": "Sensores ópticos de largo alcance guían los proyectiles pesados al corazón de las filas enemigas."
    },
    "en": {
      "name": "Augmented Targeting",
      "originalName": "Augmented Targeting",
      "type": "Battle Tactic",
      "detachment": "Ceramite Sentinels",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase or the Fight phase.",
      "target": "One friendly ADEPTUS ASTARTES unit.",
      "effect": "Until the end of the phase, weapons equipped by models in your unit re-roll Hit rolls of 1.",
      "fluff": "Heavy optical link-ups designate optimal fire arcs across the killzone."
    }
  },
  {
    "id": "strat_ceramite_sentinels_establish_supremacy",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "ceramite_sentinels",
    "name": "Establecer Supremacía",
    "originalName": "Establish Supremacy",
    "type": "Ardid Estratégico",
    "detachment": "Centinelas de Ceramita",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad atrincherada aliada combate.",
    "target": "Esa unidad aliada.",
    "effect": "Añade 2 al atributo de Ataques cuerpo a cuerpo de las miniaturas de la unidad que estén en rango de un marcador de objetivo.",
    "fluff": "Los defensores barren a culatazos y bayonetas a los intrusos que osan pisar el perímetro asegurado.",
    "es": {
      "name": "Establecer Supremacía",
      "originalName": "Establish Supremacy",
      "type": "Ardid Estratégico",
      "detachment": "Centinelas de Ceramita",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad atrincherada aliada combate.",
      "target": "Esa unidad aliada.",
      "effect": "Añade 2 al atributo de Ataques cuerpo a cuerpo de las miniaturas de la unidad que estén en rango de un marcador de objetivo.",
      "fluff": "Los defensores barren a culatazos y bayonetas a los intrusos que osan pisar el perímetro asegurado."
    },
    "en": {
      "name": "Establish Supremacy",
      "originalName": "Establish Supremacy",
      "type": "Strategic Ploy",
      "detachment": "Ceramite Sentinels",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when a friendly entrenched ADEPTUS ASTARTES unit fights.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "Add 2 to the Attacks characteristic of melee weapons for models in range of an objective marker.",
      "fluff": "Defenders crush any who dare encroach upon their fortified perimeter."
    }
  },
  {
    "id": "strat_ceramite_sentinels_priority_strike",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "ceramite_sentinels",
    "name": "Ataque Prioritario",
    "originalName": "Priority Strike",
    "type": "Táctica de Batalla",
    "detachment": "Centinelas de Ceramita",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad aliada selecciona como objetivo a la unidad con mayor valor en puntos enemiga.",
    "target": "Esa unidad de Centinelas aliada.",
    "effect": "Las armas a distancia de tu unidad obtienen [HERIDAS LETALES] contra ese objetivo prioritario.",
    "fluff": "Órdenes de mando concentran todo el poder destructivo sobre el activo de guerra más peligroso del enemigo.",
    "es": {
      "name": "Ataque Prioritario",
      "originalName": "Priority Strike",
      "type": "Táctica de Batalla",
      "detachment": "Centinelas de Ceramita",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad aliada selecciona como objetivo a la unidad con mayor valor en puntos enemiga.",
      "target": "Esa unidad de Centinelas aliada.",
      "effect": "Las armas a distancia de tu unidad obtienen [HERIDAS LETALES] contra ese objetivo prioritario.",
      "fluff": "Órdenes de mando concentran todo el poder destructivo sobre el activo de guerra más peligroso del enemigo."
    },
    "en": {
      "name": "Priority Strike",
      "originalName": "Priority Strike",
      "type": "Battle Tactic",
      "detachment": "Ceramite Sentinels",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when targeting the highest-value enemy threat.",
      "target": "That friendly ADEPTUS ASTARTES unit.",
      "effect": "Ranged weapons equipped by models in your unit gain [LETHAL HITS] against that target.",
      "fluff": "Cogitators prioritize and isolate the enemy's most lethal asset for termination."
    }
  },
  {
    "id": "strat_ceramite_sentinels_evasive_repositioning",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "ceramite_sentinels",
    "name": "Reposicionamiento Evasivo",
    "originalName": "Evasive Repositioning",
    "type": "Ardid Estratégico",
    "detachment": "Centinelas de Ceramita",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona a tu unidad.",
    "target": "Una unidad de Centinelas aliada.",
    "effect": "La unidad realiza de inmediato un movimiento de reacción de hasta 3\" para ponerse a cubierto tras un elemento de escenografía.",
    "fluff": "Avanzando paso a paso con los escudos en alto, la escuadra se desliza tras los parapetos antes de recibir la andanada.",
    "es": {
      "name": "Reposicionamiento Evasivo",
      "originalName": "Evasive Repositioning",
      "type": "Ardid Estratégico",
      "detachment": "Centinelas de Ceramita",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona a tu unidad.",
      "target": "Una unidad de Centinelas aliada.",
      "effect": "La unidad realiza de inmediato un movimiento de reacción de hasta 3\" para ponerse a cubierto tras un elemento de escenografía.",
      "fluff": "Avanzando paso a paso con los escudos en alto, la escuadra se desliza tras los parapetos antes de recibir la andanada."
    },
    "en": {
      "name": "Evasive Repositioning",
      "originalName": "Evasive Repositioning",
      "type": "Strategic Ploy",
      "detachment": "Ceramite Sentinels",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase, when an enemy unit targets your unit.",
      "target": "One friendly ADEPTUS ASTARTES unit.",
      "effect": "Your unit can immediately make a reactive move of up to 3\" into cover.",
      "fluff": "Discipline under fire allows the squad to adjust positions behind defensive revetments."
    }
  },
  {
    "id": "strat_phobos_shadow_mortis_snares",
    "cp": 1,
    "phase": "movement",
    "turn": "your_turn",
    "detachmentId": "phobos_shadow",
    "name": "Cepos Mortis",
    "originalName": "Mortis Snares",
    "type": "Ardid Estratégico",
    "detachment": "Fuerza de Sombras Phobos",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "Al final de tu fase de movimiento.",
    "target": "Una unidad PHOBOS de tu ejército.",
    "effect": "Selecciona un punto del terreno a 12\" o menos: las unidades enemigas que muevan a 6\" o menos de ese punto sufren D3 heridas mortales y -2\" a su Movimiento.",
    "fluff": "Minas de pulso sónico y microabrojos detienen en seco el avance de patrullas enemigas desprevenidas.",
    "es": {
      "name": "Cepos Mortis",
      "originalName": "Mortis Snares",
      "type": "Ardid Estratégico",
      "detachment": "Fuerza de Sombras Phobos",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "Al final de tu fase de movimiento.",
      "target": "Una unidad PHOBOS de tu ejército.",
      "effect": "Selecciona un punto del terreno a 12\" o menos: las unidades enemigas que muevan a 6\" o menos de ese punto sufren D3 heridas mortales y -2\" a su Movimiento.",
      "fluff": "Minas de pulso sónico y microabrojos detienen en seco el avance de patrullas enemigas desprevenidas."
    },
    "en": {
      "name": "Mortis Snares",
      "originalName": "Mortis Snares",
      "type": "Strategic Ploy",
      "detachment": "Phobos Shadow Force",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "End of your Movement phase.",
      "target": "One PHOBOS unit from your army.",
      "effect": "Select a point within 12\": enemy units moving within 6\" suffer D3 mortal wounds and -2\" Move.",
      "fluff": "Dispersed micro-munitions snare advancing hostiles in deadly choke points."
    }
  },
  {
    "id": "strat_phobos_shadow_strike_from_the_shadows",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "phobos_shadow",
    "name": "Golpear desde las Sombras",
    "originalName": "Strike from the Shadows",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza de Sombras Phobos",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo o combate.",
    "target": "Una unidad PHOBOS de tu ejército.",
    "effect": "Hasta el final de la fase, las armas de tu unidad obtienen [IMPACTOS CRÍTICOS EN 5+] y no pueden ser objetivo de fuego preventivo (Overwatch).",
    "fluff": "Emergiendo silenciosos de la niebla y los conductos de ventilación, los exploradores siegan al enemigo antes de que pueda reaccionar.",
    "es": {
      "name": "Golpear desde las Sombras",
      "originalName": "Strike from the Shadows",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza de Sombras Phobos",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo o combate.",
      "target": "Una unidad PHOBOS de tu ejército.",
      "effect": "Hasta el final de la fase, las armas de tu unidad obtienen [IMPACTOS CRÍTICOS EN 5+] y no pueden ser objetivo de fuego preventivo (Overwatch).",
      "fluff": "Emergiendo silenciosos de la niebla y los conductos de ventilación, los exploradores siegan al enemigo antes de que pueda reaccionar."
    },
    "en": {
      "name": "Strike from the Shadows",
      "originalName": "Strike from the Shadows",
      "type": "Battle Tactic",
      "detachment": "Phobos Shadow Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase or Fight phase.",
      "target": "One PHOBOS unit from your army.",
      "effect": "Weapons equipped by your unit score [CRITICAL HITS ON 5+] and cannot be targeted by Overwatch.",
      "fluff": "Infiltrators emerge unseen from darkness to execute rapid ambushes."
    }
  },
  {
    "id": "strat_phobos_shadow_tactical_withdrawal",
    "cp": 1,
    "phase": "fight",
    "turn": "opponent_turn",
    "detachmentId": "phobos_shadow",
    "name": "Repliegue Táctico",
    "originalName": "Tactical Withdrawal",
    "type": "Ardid Estratégico",
    "detachment": "Fuerza de Sombras Phobos",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Turno Enemigo",
    "when": "Al final de la fase de combate de tu oponente.",
    "target": "Una unidad PHOBOS de tu ejército.",
    "effect": "Tu unidad realiza de inmediato un movimiento de 6\" o puede entrar en Reservas Estratégicas para desvanecerse en las sombras.",
    "fluff": "Disolviéndose entre el humo y los escombros, los comandos Phobos se evaporan ante los ojos del enemigo.",
    "es": {
      "name": "Repliegue Táctico",
      "originalName": "Tactical Withdrawal",
      "type": "Ardid Estratégico",
      "detachment": "Fuerza de Sombras Phobos",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Turno Enemigo",
      "when": "Al final de la fase de combate de tu oponente.",
      "target": "Una unidad PHOBOS de tu ejército.",
      "effect": "Tu unidad realiza de inmediato un movimiento de 6\" o puede entrar en Reservas Estratégicas para desvanecerse en las sombras.",
      "fluff": "Disolviéndose entre el humo y los escombros, los comandos Phobos se evaporan ante los ojos del enemigo."
    },
    "en": {
      "name": "Tactical Withdrawal",
      "originalName": "Tactical Withdrawal",
      "type": "Strategic Ploy",
      "detachment": "Phobos Shadow Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "End of your opponent's Fight phase.",
      "target": "One PHOBOS unit from your army.",
      "effect": "Your unit makes a 6\" move or is placed into Strategic Reserves to vanish from sight.",
      "fluff": "Deploying smoke charges, Phobos specialists vanish into the surrounding gloom."
    }
  },
  {
    "id": "strat_assault_brethren_duty_in_death",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "assault_brethren",
    "name": "Deber en la Muerte",
    "originalName": "Duty in Death",
    "type": "Hazaña Épica",
    "detachment": "Hermandad de Asalto",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad de asalto aliada.",
    "target": "Esa unidad de la Hermandad de Asalto.",
    "effect": "Cada miniatura destruida tira un D6: con 4+, lucha antes de ser retirada del tablero.",
    "fluff": "Espadas sierra rugiendo y pistolas bólter disparando a bocajarro hasta el estertor final.",
    "es": {
      "name": "Deber en la Muerte",
      "originalName": "Duty in Death",
      "type": "Hazaña Épica",
      "detachment": "Hermandad de Asalto",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad enemiga ataca a una unidad de asalto aliada.",
      "target": "Esa unidad de la Hermandad de Asalto.",
      "effect": "Cada miniatura destruida tira un D6: con 4+, lucha antes de ser retirada del tablero.",
      "fluff": "Espadas sierra rugiendo y pistolas bólter disparando a bocajarro hasta el estertor final."
    },
    "en": {
      "name": "Duty in Death",
      "originalName": "Duty in Death",
      "type": "Epic Deed",
      "detachment": "Assault Brethren",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when an enemy unit targets a friendly assault unit.",
      "target": "That Assault Brethren unit.",
      "effect": "Each destroyed model rolls a D6: on a 4+, it fights before being removed.",
      "fluff": "Chainswords whirring until the final heartbeat, brothers take foes down with them."
    }
  },
  {
    "id": "strat_assault_brethren_gene_wrought_might",
    "cp": 1,
    "phase": "fight",
    "turn": "either_turn",
    "detachmentId": "assault_brethren",
    "name": "Fuerza de Origen Genético",
    "originalName": "Gene-wrought Might",
    "type": "Táctica de Batalla",
    "detachment": "Hermandad de Asalto",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad aliada de asalto combate.",
    "target": "Esa unidad de la Hermandad de Asalto.",
    "effect": "Las tiradas para impactar de 6 natural hieren automáticamente al objetivo sin necesidad de tirar para herir.",
    "fluff": "El poder genético del Primarca se manifiesta en golpes de una brutalidad descomunal.",
    "es": {
      "name": "Fuerza de Origen Genético",
      "originalName": "Gene-wrought Might",
      "type": "Táctica de Batalla",
      "detachment": "Hermandad de Asalto",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad aliada de asalto combate.",
      "target": "Esa unidad de la Hermandad de Asalto.",
      "effect": "Las tiradas para impactar de 6 natural hieren automáticamente al objetivo sin necesidad de tirar para herir.",
      "fluff": "El poder genético del Primarca se manifiesta en golpes de una brutalidad descomunal."
    },
    "en": {
      "name": "Gene-wrought Might",
      "originalName": "Gene-wrought Might",
      "type": "Battle Tactic",
      "detachment": "Assault Brethren",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Turn",
      "when": "Fight phase, when a friendly assault unit fights.",
      "target": "That Assault Brethren unit.",
      "effect": "Unmodified Hit rolls of 6 automatically wound the target.",
      "fluff": "Primarch-forged muscle and transhuman rage drive attacks deep into enemy armor."
    }
  },
  {
    "id": "strat_assault_brethren_armour_of_contempt",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "assault_brethren",
    "name": "Armadura del Desprecio",
    "originalName": "Armour of Contempt",
    "type": "Táctica de Batalla",
    "detachment": "Hermandad de Asalto",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo o combate del oponente.",
    "target": "Una unidad de la Hermandad de Asalto aliada.",
    "effect": "Empeora el Factor de Penetración (FP) de los ataques enemigos en 1.",
    "fluff": "La devoción y el desprecio hacia el hereje amortiguan el daño sufrido.",
    "es": {
      "name": "Armadura del Desprecio",
      "originalName": "Armour of Contempt",
      "type": "Táctica de Batalla",
      "detachment": "Hermandad de Asalto",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo o combate del oponente.",
      "target": "Una unidad de la Hermandad de Asalto aliada.",
      "effect": "Empeora el Factor de Penetración (FP) de los ataques enemigos en 1.",
      "fluff": "La devoción y el desprecio hacia el hereje amortiguan el daño sufrido."
    },
    "en": {
      "name": "Armour of Contempt",
      "originalName": "Armour of Contempt",
      "type": "Battle Tactic",
      "detachment": "Assault Brethren",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting or Fight phase.",
      "target": "One Assault Brethren unit.",
      "effect": "Worsen the Armour Penetration characteristic of incoming attacks by 1.",
      "fluff": "Contempt for the foe hardens armor plating against enemy blades."
    }
  },
  {
    "id": "strat_devastator_brethren_hail_of_vengeance",
    "cp": 2,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "devastator_brethren",
    "name": "Granizada de Venganza",
    "originalName": "Hail of Vengeance",
    "type": "Táctica de Batalla",
    "detachment": "Hermandad Devastadora",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo de tu oponente, justo después de que destruya a una miniatura aliada.",
    "target": "Una unidad de la Hermandad Devastadora aliada.",
    "effect": "Tu unidad puede disparar inmediatamente como si fuera tu fase de disparo contra la unidad enemiga que abrió fuego.",
    "fluff": "Las baterías pesadas de misiles y cañones láser responden con una represalia instantánea demoledora.",
    "es": {
      "name": "Granizada de Venganza",
      "originalName": "Hail of Vengeance",
      "type": "Táctica de Batalla",
      "detachment": "Hermandad Devastadora",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo de tu oponente, justo después de que destruya a una miniatura aliada.",
      "target": "Una unidad de la Hermandad Devastadora aliada.",
      "effect": "Tu unidad puede disparar inmediatamente como si fuera tu fase de disparo contra la unidad enemiga que abrió fuego.",
      "fluff": "Las baterías pesadas de misiles y cañones láser responden con una represalia instantánea demoledora."
    },
    "en": {
      "name": "Hail of Vengeance",
      "originalName": "Hail of Vengeance",
      "type": "Battle Tactic",
      "detachment": "Devastator Brethren",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting phase, just after a friendly model is destroyed.",
      "target": "One Devastator Brethren unit.",
      "effect": "Your unit can shoot back at the attacking enemy unit as if it were your Shooting phase.",
      "fluff": "Heavy weapons teams unleash instant, retaliatory fury."
    }
  },
  {
    "id": "strat_devastator_brethren_storm_of_fire",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "devastator_brethren",
    "name": "Tormenta de Fuego",
    "originalName": "Storm of Fire",
    "type": "Táctica de Batalla",
    "detachment": "Hermandad Devastadora",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo.",
    "target": "Una unidad de la Hermandad Devastadora aliada.",
    "effect": "Las armas a distancia de tu unidad obtienen la habilidad [IGNORA COBERTURA] y mejoran su FP en 1.",
    "fluff": "La saturación de fuego pesado no deja parapeto ni trinchera en pie.",
    "es": {
      "name": "Tormenta de Fuego",
      "originalName": "Storm of Fire",
      "type": "Táctica de Batalla",
      "detachment": "Hermandad Devastadora",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo.",
      "target": "Una unidad de la Hermandad Devastadora aliada.",
      "effect": "Las armas a distancia de tu unidad obtienen la habilidad [IGNORA COBERTURA] y mejoran su FP en 1.",
      "fluff": "La saturación de fuego pesado no deja parapeto ni trinchera en pie."
    },
    "en": {
      "name": "Storm of Fire",
      "originalName": "Storm of Fire",
      "type": "Battle Tactic",
      "detachment": "Devastator Brethren",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase.",
      "target": "One Devastator Brethren unit.",
      "effect": "Ranged weapons in your unit gain [IGNORES COVER] and improve AP by 1.",
      "fluff": "Concentrated heavy ordnance obliterates enemy fortifications."
    }
  },
  {
    "id": "strat_devastator_brethren_armour_of_contempt",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "devastator_brethren",
    "name": "Armadura del Desprecio",
    "originalName": "Armour of Contempt",
    "type": "Táctica de Batalla",
    "detachment": "Hermandad Devastadora",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo o combate del oponente.",
    "target": "Una unidad de la Hermandad Devastadora aliada.",
    "effect": "Empeora el Factor de Penetración (FP) de los ataques enemigos en 1.",
    "fluff": "Armaduras pesadas soportan la metralla enemiga con estoicismo.",
    "es": {
      "name": "Armadura del Desprecio",
      "originalName": "Armour of Contempt",
      "type": "Táctica de Batalla",
      "detachment": "Hermandad Devastadora",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo o combate del oponente.",
      "target": "Una unidad de la Hermandad Devastadora aliada.",
      "effect": "Empeora el Factor de Penetración (FP) de los ataques enemigos en 1.",
      "fluff": "Armaduras pesadas soportan la metralla enemiga con estoicismo."
    },
    "en": {
      "name": "Armour of Contempt",
      "originalName": "Armour of Contempt",
      "type": "Battle Tactic",
      "detachment": "Devastator Brethren",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting or Fight phase.",
      "target": "One Devastator Brethren unit.",
      "effect": "Worsen the Armour Penetration characteristic of incoming attacks by 1.",
      "fluff": "Heavy battle plate shrugs off enemy salvos."
    }
  },
  {
    "id": "strat_tactical_brethren_masterful_tactics",
    "cp": 1,
    "phase": "movement",
    "turn": "opponent_turn",
    "detachmentId": "tactical_brethren",
    "name": "Tácticas Magistrales",
    "originalName": "Masterful Tactics",
    "type": "Ardid Estratégico",
    "detachment": "Hermandad Táctica",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de movimiento del oponente, cuando un enemigo se mueva a menos de 9\".",
    "target": "Una unidad de la Hermandad Táctica aliada.",
    "effect": "Tu unidad realiza de inmediato un movimiento normal de 6\" para reposicionarse ventajosamente.",
    "fluff": "Veteranos de mil campañas maniobran con soltura antes de verse superados por el número.",
    "es": {
      "name": "Tácticas Magistrales",
      "originalName": "Masterful Tactics",
      "type": "Ardid Estratégico",
      "detachment": "Hermandad Táctica",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de movimiento del oponente, cuando un enemigo se mueva a menos de 9\".",
      "target": "Una unidad de la Hermandad Táctica aliada.",
      "effect": "Tu unidad realiza de inmediato un movimiento normal de 6\" para reposicionarse ventajosamente.",
      "fluff": "Veteranos de mil campañas maniobran con soltura antes de verse superados por el número."
    },
    "en": {
      "name": "Masterful Tactics",
      "originalName": "Masterful Tactics",
      "type": "Strategic Ploy",
      "detachment": "Tactical Brethren",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Movement phase, when an enemy moves within 9\".",
      "target": "One Tactical Brethren unit.",
      "effect": "Your unit makes a normal move of up to 6\" to take up better firing positions.",
      "fluff": "Tactical squads shift positions fluidly to dominate the battlefield."
    }
  },
  {
    "id": "strat_tactical_brethren_domination_fire",
    "cp": 1,
    "phase": "shooting",
    "turn": "your_turn",
    "detachmentId": "tactical_brethren",
    "name": "Fuego de Dominación",
    "originalName": "Domination Fire",
    "type": "Táctica de Batalla",
    "detachment": "Hermandad Táctica",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo.",
    "target": "Una unidad de la Hermandad Táctica aliada.",
    "effect": "Las armas de bólter de tu unidad repiten todas las tiradas para herir de 1 (o repiten todas las tiradas de herida falladas si el objetivo está en un marcador de objetivo).",
    "fluff": "Disciplina de tiro inflexible purga a los ocupantes de enclaves estratégicos.",
    "es": {
      "name": "Fuego de Dominación",
      "originalName": "Domination Fire",
      "type": "Táctica de Batalla",
      "detachment": "Hermandad Táctica",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo.",
      "target": "Una unidad de la Hermandad Táctica aliada.",
      "effect": "Las armas de bólter de tu unidad repiten todas las tiradas para herir de 1 (o repiten todas las tiradas de herida falladas si el objetivo está en un marcador de objetivo).",
      "fluff": "Disciplina de tiro inflexible purga a los ocupantes de enclaves estratégicos."
    },
    "en": {
      "name": "Domination Fire",
      "originalName": "Domination Fire",
      "type": "Battle Tactic",
      "detachment": "Tactical Brethren",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase.",
      "target": "One Tactical Brethren unit.",
      "effect": "Bolt weapons in your unit re-roll Wound rolls of 1 (or re-roll all failed Wound rolls if target is on an objective).",
      "fluff": "Punishing bolter drill scours enemy infantry from key tactical points."
    }
  },
  {
    "id": "strat_tactical_brethren_armour_of_contempt",
    "cp": 1,
    "phase": "shooting",
    "turn": "opponent_turn",
    "detachmentId": "tactical_brethren",
    "name": "Armadura del Desprecio",
    "originalName": "Armour of Contempt",
    "type": "Táctica de Batalla",
    "detachment": "Hermandad Táctica",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo o combate del oponente.",
    "target": "Una unidad de la Hermandad Táctica aliada.",
    "effect": "Empeora el Factor de Penetración (FP) de los ataques enemigos en 1.",
    "fluff": "La disciplina táctica Astartes rechaza el daño como si fuera barro.",
    "es": {
      "name": "Armadura del Desprecio",
      "originalName": "Armour of Contempt",
      "type": "Táctica de Batalla",
      "detachment": "Hermandad Táctica",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo o combate del oponente.",
      "target": "Una unidad de la Hermandad Táctica aliada.",
      "effect": "Empeora el Factor de Penetración (FP) de los ataques enemigos en 1.",
      "fluff": "La disciplina táctica Astartes rechaza el daño como si fuera barro."
    },
    "en": {
      "name": "Armour of Contempt",
      "originalName": "Armour of Contempt",
      "type": "Battle Tactic",
      "detachment": "Tactical Brethren",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent's Shooting or Fight phase.",
      "target": "One Tactical Brethren unit.",
      "effect": "Worsen the Armour Penetration characteristic of incoming attacks by 1.",
      "fluff": "Iron discipline withstands hostile firepower."
    }
  },
  {
    "id": "strat_deathwing_storm_tactical_dreadnought_fortitude",
    "cp": 2,
    "phase": "any",
    "phases": [
      "shooting",
      "fight"
    ],
    "turn": "opponent_turn",
    "detachmentId": "deathwing_storm",
    "name": "Entereza de Armadura Táctica de Exterminador",
    "originalName": "TACTICAL DREADNOUGHT FORTITUDE",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza Tormenta Exterminadora (1.ª Cía)",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo o combate de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad EXTERMINADOR ADEPTUS ASTARTES aliada.",
    "target": "Esa unidad EXTERMINADOR ADEPTUS ASTARTES.",
    "effect": "Los ataques dirigidos contra tu unidad tienen -1 al Daño hasta que esa unidad enemiga haya terminado sus ataques.",
    "restrictions": "",
    "fluff": "La ceramita y los campos de fuerza de la armadura táctica de exterminador pueden desviar los proyectiles más brutales.",
    "es": {
      "name": "Entereza de Armadura Táctica de Exterminador",
      "originalName": "TACTICAL DREADNOUGHT FORTITUDE",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza Tormenta Exterminadora (1.ª Cía)",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo o combate de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad EXTERMINADOR ADEPTUS ASTARTES aliada.",
      "target": "Esa unidad EXTERMINADOR ADEPTUS ASTARTES.",
      "effect": "Los ataques dirigidos contra tu unidad tienen -1 al Daño hasta que esa unidad enemiga haya terminado sus ataques.",
      "restrictions": "",
      "fluff": "La ceramita y los campos de fuerza de la armadura táctica de exterminador pueden desviar los proyectiles más brutales."
    },
    "en": {
      "name": "TACTICAL DREADNOUGHT FORTITUDE",
      "originalName": "TACTICAL DREADNOUGHT FORTITUDE",
      "type": "Battle Tactic",
      "detachment": "Terminator Storm Force",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent’s Shooting phase or the Fight phase, when an enemy unit targets a friendly ADEPTUS ASTARTES TERMINATOR unit.",
      "target": "That ADEPTUS ASTARTES TERMINATOR unit.",
      "effect": "Attacks that target your unit have -1 D until that enemy unit has attacked.",
      "restrictions": "",
      "fluff": "The combination of Tactical Dreadnought armour and transhuman physiology is redoubtable indeed."
    }
  },
  {
    "id": "strat_deathwing_storm_merciless_veterans",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "your_turn",
    "detachmentId": "deathwing_storm",
    "name": "Veteranos Despiadados",
    "originalName": "MERCILESS VETERANS",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza Tormenta Exterminadora (1.ª Cía)",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad EXTERMINADOR ADEPTUS ASTARTES aliada es seleccionada para disparar.",
    "target": "Esa unidad EXTERMINADOR ADEPTUS ASTARTES.",
    "effect": "Los ataques a distancia de tu unidad obtienen [Impactos Letales] e [Impactos Sostenidos 1].",
    "restrictions": "",
    "fluff": "Habiendo combatido durante siglos en las zonas de guerra más letales de la galaxia, estos veteranos dirigen ráfagas implacables a los puntos vulnerables del enemigo.",
    "es": {
      "name": "Veteranos Despiadados",
      "originalName": "MERCILESS VETERANS",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza Tormenta Exterminadora (1.ª Cía)",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad EXTERMINADOR ADEPTUS ASTARTES aliada es seleccionada para disparar.",
      "target": "Esa unidad EXTERMINADOR ADEPTUS ASTARTES.",
      "effect": "Los ataques a distancia de tu unidad obtienen [Impactos Letales] e [Impactos Sostenidos 1].",
      "restrictions": "",
      "fluff": "Habiendo combatido durante siglos en las zonas de guerra más letales de la galaxia, estos veteranos dirigen ráfagas implacables a los puntos vulnerables del enemigo."
    },
    "en": {
      "name": "MERCILESS VETERANS",
      "originalName": "MERCILESS VETERANS",
      "type": "Battle Tactic",
      "detachment": "Terminator Storm Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly ADEPTUS ASTARTES TERMINATOR unit is selected to shoot.",
      "target": "That ADEPTUS ASTARTES TERMINATOR unit.",
      "effect": "Your unit’s ranged attacks have:\n• [Lethal Hits].\n• [Sustained Hits 1].",
      "restrictions": "",
      "fluff": "Cumulative centuries of military experience help these veterans’ firepower hit home with murderous precision."
    }
  },
  {
    "id": "strat_deathwing_storm_gunship_extraction",
    "cp": 1,
    "phase": "fight",
    "phases": [
      "fight"
    ],
    "turn": "opponent_turn",
    "detachmentId": "deathwing_storm",
    "name": "Extracción en Cañonera",
    "originalName": "GUNSHIP EXTRACTION",
    "type": "Treta Estratégica",
    "detachment": "Fuerza Tormenta Exterminadora (1.ª Cía)",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Turno Enemigo",
    "when": "Al final de la fase de combate de tu oponente.",
    "target": "Una unidad EXTERMINADOR ADEPTUS ASTARTES aliada que no esté trabada en combate.",
    "effect": "Coloca esa unidad en reservas estratégicas.",
    "restrictions": "",
    "fluff": "Con precisión quirúrgica, las cañoneras Stormraven descienden entre el fuego cruzado para evacuar a los Exterminadores y reubicarlos donde el mando lo requiera.",
    "es": {
      "name": "Extracción en Cañonera",
      "originalName": "GUNSHIP EXTRACTION",
      "type": "Treta Estratégica",
      "detachment": "Fuerza Tormenta Exterminadora (1.ª Cía)",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Turno Enemigo",
      "when": "Al final de la fase de combate de tu oponente.",
      "target": "Una unidad EXTERMINADOR ADEPTUS ASTARTES aliada que no esté trabada en combate.",
      "effect": "Coloca esa unidad en reservas estratégicas.",
      "restrictions": "",
      "fluff": "Con precisión quirúrgica, las cañoneras Stormraven descienden entre el fuego cruzado para evacuar a los Exterminadores y reubicarlos donde el mando lo requiera."
    },
    "en": {
      "name": "GUNSHIP EXTRACTION",
      "originalName": "GUNSHIP EXTRACTION",
      "type": "Strategic Ploy",
      "detachment": "Terminator Storm Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "End of your opponent’s Fight phase.",
      "target": "One friendly unengaged ADEPTUS ASTARTES TERMINATOR unit.",
      "effect": "Place your unit in strategic reserves.",
      "restrictions": "",
      "fluff": "Armoured gunships are often assigned to swoop in and relocate Terminator Squads in the midst of battle."
    }
  },
  {
    "id": "strat_tacticus_attack_relentless_assault",
    "cp": 1,
    "phase": "any",
    "phases": [
      "shooting",
      "fight"
    ],
    "turn": "your_turn",
    "detachmentId": "tacticus_attack",
    "name": "Asalto Implacable",
    "originalName": "RELENTLESS ASSAULT",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza de Ataque Tacticus",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo o combate, cuando una unidad TACTICUS aliada es seleccionada para atacar.",
    "target": "Esa unidad TACTICUS aliada.",
    "effect": "Los ataques de tu unidad obtienen [Impactos Sostenidos 1] contra objetivos que no sean Monstruo ni Vehículo, o [Impactos Letales] si el objetivo es un Monstruo o Vehículo.",
    "restrictions": "",
    "fluff": "Las tácticas del Códice Astartes dictan una cadencia de fuego y acometidas coordinadas para abrumar cualquier línea de defensa.",
    "es": {
      "name": "Asalto Implacable",
      "originalName": "RELENTLESS ASSAULT",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza de Ataque Tacticus",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo o combate, cuando una unidad TACTICUS aliada es seleccionada para atacar.",
      "target": "Esa unidad TACTICUS aliada.",
      "effect": "Los ataques de tu unidad obtienen [Impactos Sostenidos 1] contra objetivos que no sean Monstruo ni Vehículo, o [Impactos Letales] si el objetivo es un Monstruo o Vehículo.",
      "restrictions": "",
      "fluff": "Las tácticas del Códice Astartes dictan una cadencia de fuego y acometidas coordinadas para abrumar cualquier línea de defensa."
    },
    "en": {
      "name": "RELENTLESS ASSAULT",
      "originalName": "RELENTLESS ASSAULT",
      "type": "Battle Tactic",
      "detachment": "Tacticus Attack Force",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase or the Fight phase, when a friendly TACTICUS unit is selected to attack.",
      "target": "That TACTICUS unit.",
      "effect": "Your unit’s attacks have:\n• [Sustained Hits 1: non-Monster/Vehicle].\n• Or: [Lethal Hits: Monster/Vehicle].",
      "restrictions": "",
      "fluff": "Pressing mercilessly forward, these warriors place shots and blows perfectly, no matter their targets."
    }
  },
  {
    "id": "strat_tacticus_attack_transhuman_swiftness",
    "cp": 1,
    "phase": "fight",
    "phases": [
      "fight"
    ],
    "turn": "either_turn",
    "detachmentId": "tacticus_attack",
    "name": "Presteza Transhumana",
    "originalName": "TRANSHUMAN SWIFTNESS",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza de Ataque Tacticus",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, justo después de que una unidad enemiga haya luchado.",
    "target": "Una unidad TACTICUS aliada que esté a distancia de control de un marcador de objetivo y sea elegible para combatir.",
    "effect": "Tu unidad obtiene [Atacar Primero] y debe ser la siguiente unidad que selecciones para luchar.",
    "restrictions": "",
    "fluff": "Los reflejos genéticamente mejorados de los Marines Espaciales les permiten contraatacar en fracciones de segundo.",
    "es": {
      "name": "Presteza Transhumana",
      "originalName": "TRANSHUMAN SWIFTNESS",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza de Ataque Tacticus",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, justo después de que una unidad enemiga haya luchado.",
      "target": "Una unidad TACTICUS aliada que esté a distancia de control de un marcador de objetivo y sea elegible para combatir.",
      "effect": "Tu unidad obtiene [Atacar Primero] y debe ser la siguiente unidad que selecciones para luchar.",
      "restrictions": "",
      "fluff": "Los reflejos genéticamente mejorados de los Marines Espaciales les permiten contraatacar en fracciones de segundo."
    },
    "en": {
      "name": "TRANSHUMAN SWIFTNESS",
      "originalName": "TRANSHUMAN SWIFTNESS",
      "type": "Battle Tactic",
      "detachment": "Tacticus Attack Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Player's Turn",
      "when": "Fight phase, when an enemy unit has fought.",
      "target": "One friendly TACTICUS unit that is within range of an objective and is eligible to fight.",
      "effect": "Your unit has Fights First and must be the next unit you select to fight.",
      "restrictions": "",
      "fluff": "Poised and aware of their foes’ every move, these warriors strike at the most tactically advantageous moment."
    }
  },
  {
    "id": "strat_tacticus_attack_tactical_focus",
    "cp": 1,
    "phase": "fight",
    "phases": [
      "fight"
    ],
    "turn": "either_turn",
    "detachmentId": "tacticus_attack",
    "name": "Concentración Táctica",
    "originalName": "TACTICAL FOCUS",
    "type": "Treta Estratégica",
    "detachment": "Fuerza de Ataque Tacticus",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En la fase de combate, cuando una unidad TACTICUS aliada es seleccionada para hacer un movimiento de consolidación.",
    "target": "Esa unidad TACTICUS aliada.",
    "effect": "Al hacer ese movimiento de consolidación, tu unidad puede mover hasta D3+3 pulgadas en lugar de las 3\" normales.",
    "restrictions": "",
    "fluff": "Con disciplina férrea, la escuadra se reagrupa y asegura posiciones clave tras aniquilar a sus contrincantes.",
    "es": {
      "name": "Concentración Táctica",
      "originalName": "TACTICAL FOCUS",
      "type": "Treta Estratégica",
      "detachment": "Fuerza de Ataque Tacticus",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En la fase de combate, cuando una unidad TACTICUS aliada es seleccionada para hacer un movimiento de consolidación.",
      "target": "Esa unidad TACTICUS aliada.",
      "effect": "Al hacer ese movimiento de consolidación, tu unidad puede mover hasta D3+3 pulgadas en lugar de las 3\" normales.",
      "restrictions": "",
      "fluff": "Con disciplina férrea, la escuadra se reagrupa y asegura posiciones clave tras aniquilar a sus contrincantes."
    },
    "en": {
      "name": "TACTICAL FOCUS",
      "originalName": "TACTICAL FOCUS",
      "type": "Strategic Ploy",
      "detachment": "Tacticus Attack Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Player's Turn",
      "when": "Fight phase, when a friendly TACTICUS unit is selected to make a consolidation move.",
      "target": "That TACTICUS unit.",
      "effect": "When making that consolidation move, your unit can move up to D3+3\".",
      "restrictions": "",
      "fluff": "Even amidst the fiercest fighting, this squad retains sight of their assigned mission."
    }
  },
  {
    "id": "strat_tacticus_firestorm_for_the_emperor",
    "cp": 1,
    "phase": "command",
    "phases": [
      "command"
    ],
    "turn": "your_turn",
    "detachmentId": "tacticus_firestorm",
    "name": "¡Por el Emperador!",
    "originalName": "FOR THE EMPEROR!",
    "type": "Hazaña Épica",
    "detachment": "Fuerza Tacticus Tormenta de Fuego",
    "phaseLabel": "Fase de Mando",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de mando.",
    "target": "Una unidad TACTICUS aliada que esté a distancia de control de un marcador de objetivo.",
    "effect": "Las miniaturas de tu unidad obtienen +1 al Control de Objetivo (CO) hasta el final del turno.",
    "restrictions": "",
    "fluff": "Entonando cánticos de batalla milenarios, los hermanos de batalla juran defender el suelo sagrado del Imperio hasta su último aliento.",
    "es": {
      "name": "¡Por el Emperador!",
      "originalName": "FOR THE EMPEROR!",
      "type": "Hazaña Épica",
      "detachment": "Fuerza Tacticus Tormenta de Fuego",
      "phaseLabel": "Fase de Mando",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de mando.",
      "target": "Una unidad TACTICUS aliada que esté a distancia de control de un marcador de objetivo.",
      "effect": "Las miniaturas de tu unidad obtienen +1 al Control de Objetivo (CO) hasta el final del turno.",
      "restrictions": "",
      "fluff": "Entonando cánticos de batalla milenarios, los hermanos de batalla juran defender el suelo sagrado del Imperio hasta su último aliento."
    },
    "en": {
      "name": "FOR THE EMPEROR!",
      "originalName": "FOR THE EMPEROR!",
      "type": "Epic Deed",
      "detachment": "Tacticus Firestorm Force",
      "phaseLabel": "Command Phase",
      "turnLabel": "Your Turn",
      "when": "Command phase.",
      "target": "One friendly TACTICUS unit that is within range of an objective.",
      "effect": "Your unit has +1 OC until the end of the turn.",
      "restrictions": "",
      "fluff": "Unflinching in their loyalty to Chapter and Primarch, battle-brothers seize and hold their objectives with unrelenting determination and zealous fury."
    }
  },
  {
    "id": "strat_tacticus_firestorm_point_blank_brutality",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "your_turn",
    "detachmentId": "tacticus_firestorm",
    "name": "Brutalidad a Quemarropa",
    "originalName": "POINT-BLANK BRUTALITY",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza Tacticus Tormenta de Fuego",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad TACTICUS aliada trabada en combate es seleccionada para disparar.",
    "target": "Esa unidad TACTICUS aliada.",
    "effect": "Los ataques a distancia de tu unidad (excluyendo armas con [Área]) obtienen [A Quemarropa] e [Ignora Cobertura].",
    "restrictions": "",
    "fluff": "Descargando bólteres directamente en las fauces y pecheras de sus enemigos trabados, los Astartes limpian la melé con fuego devastador.",
    "es": {
      "name": "Brutalidad a Quemarropa",
      "originalName": "POINT-BLANK BRUTALITY",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza Tacticus Tormenta de Fuego",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad TACTICUS aliada trabada en combate es seleccionada para disparar.",
      "target": "Esa unidad TACTICUS aliada.",
      "effect": "Los ataques a distancia de tu unidad (excluyendo armas con [Área]) obtienen [A Quemarropa] e [Ignora Cobertura].",
      "restrictions": "",
      "fluff": "Descargando bólteres directamente en las fauces y pecheras de sus enemigos trabados, los Astartes limpian la melé con fuego devastador."
    },
    "en": {
      "name": "POINT-BLANK BRUTALITY",
      "originalName": "POINT-BLANK BRUTALITY",
      "type": "Battle Tactic",
      "detachment": "Tacticus Firestorm Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly engaged TACTICUS unit is selected to shoot.",
      "target": "That TACTICUS unit.",
      "effect": "Your unit’s ranged attacks (excluding [Blast] attacks) have:\n• [Close-Quarters].\n• [Ignores Cover].",
      "restrictions": "",
      "fluff": "Transhuman skill and reaction times render these Space Marines’ firearms as deadly up close as any blade."
    }
  },
  {
    "id": "strat_phobos_shock_transhuman_reactions",
    "cp": 1,
    "phase": "movement",
    "phases": [
      "movement"
    ],
    "turn": "opponent_turn",
    "detachmentId": "phobos_shock",
    "name": "Reacciones Transhumanas",
    "originalName": "TRANSHUMAN REACTIONS",
    "type": "Treta Estratégica",
    "detachment": "Fuerza de Choque Phobos",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de movimiento de tu oponente, cuando una unidad enemiga finaliza un movimiento a 8\" o menos de una unidad PHOBOS aliada no trabada.",
    "target": "Esa unidad PHOBOS aliada.",
    "effect": "Tu unidad puede realizar un movimiento normal de hasta D6\" (o de hasta 6\" si la Doctrina Táctica está activa para tu ejército).",
    "restrictions": "",
    "fluff": "Los exploradores y vanguardistas Phobos detectan el avance hostil y se repliegan como sombras a posiciones más ventajosas.",
    "es": {
      "name": "Reacciones Transhumanas",
      "originalName": "TRANSHUMAN REACTIONS",
      "type": "Treta Estratégica",
      "detachment": "Fuerza de Choque Phobos",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de movimiento de tu oponente, cuando una unidad enemiga finaliza un movimiento a 8\" o menos de una unidad PHOBOS aliada no trabada.",
      "target": "Esa unidad PHOBOS aliada.",
      "effect": "Tu unidad puede realizar un movimiento normal de hasta D6\" (o de hasta 6\" si la Doctrina Táctica está activa para tu ejército).",
      "restrictions": "",
      "fluff": "Los exploradores y vanguardistas Phobos detectan el avance hostil y se repliegan como sombras a posiciones más ventajosas."
    },
    "en": {
      "name": "TRANSHUMAN REACTIONS",
      "originalName": "TRANSHUMAN REACTIONS",
      "type": "Strategic Ploy",
      "detachment": "Phobos Shock Force",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent’s Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged PHOBOS unit.",
      "target": "That PHOBOS unit.",
      "effect": "Your unit can make a normal move of:\n• Up to D6\".\n• Or: If the tactical doctrine is active for your unit, up to 6\".",
      "restrictions": "",
      "fluff": "Seemingly with the speed of instinct, these warriors reposition in response to the enemy’s movements."
    }
  },
  {
    "id": "strat_phobos_shock_umbral_evasion",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "opponent_turn",
    "detachmentId": "phobos_shock",
    "name": "Evasión Umbría",
    "originalName": "UMBRAL EVASION",
    "type": "Treta Estratégica",
    "detachment": "Fuerza de Choque Phobos",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Turno Enemigo",
    "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad PHOBOS aliada.",
    "target": "Esa unidad PHOBOS aliada.",
    "effect": "Los ataques a distancia dirigidos contra tu unidad tienen un penalizador de -1 a las tiradas para impactar.",
    "restrictions": "",
    "fluff": "Activando capas de camuflaje holo-óptico y difusores de calor, la escuadra se desvanece en las sombras del terreno.",
    "es": {
      "name": "Evasión Umbría",
      "originalName": "UMBRAL EVASION",
      "type": "Treta Estratégica",
      "detachment": "Fuerza de Choque Phobos",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Turno Enemigo",
      "when": "En la fase de disparo de tu oponente, cuando una unidad enemiga selecciona como objetivo a una unidad PHOBOS aliada.",
      "target": "Esa unidad PHOBOS aliada.",
      "effect": "Los ataques a distancia dirigidos contra tu unidad tienen un penalizador de -1 a las tiradas para impactar.",
      "restrictions": "",
      "fluff": "Activando capas de camuflaje holo-óptico y difusores de calor, la escuadra se desvanece en las sombras del terreno."
    },
    "en": {
      "name": "UMBRAL EVASION",
      "originalName": "UMBRAL EVASION",
      "type": "Strategic Ploy",
      "detachment": "Phobos Shock Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Opponent's Turn",
      "when": "Your opponent’s Shooting phase, when an enemy unit targets a friendly PHOBOS unit.",
      "target": "That PHOBOS unit.",
      "effect": "Ranged attacks that target your unit have -1 to hit rolls.",
      "restrictions": "",
      "fluff": "A combination of technological arcana and expert training help these warriors to evade the eyes of the foe."
    }
  },
  {
    "id": "strat_gravis_linebreaker_annihilating_force",
    "cp": 1,
    "phase": "any",
    "phases": [
      "shooting",
      "fight"
    ],
    "turn": "either_turn",
    "detachmentId": "gravis_linebreaker",
    "name": "Fuerza Aniquiladora",
    "originalName": "ANNIHILATING FORCE",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza Rompelíneas Gravis",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En tu fase de disparo o en la fase de combate, cuando una unidad GRAVIS aliada es seleccionada para atacar.",
    "target": "Esa unidad GRAVIS aliada.",
    "effect": "Los ataques de tu unidad obtienen [Impactos Letales].",
    "restrictions": "",
    "fluff": "Conscientes de su deber de quebrantar las líneas más fortificadas, estos colosos disparan y golpean con un vigor implacable.",
    "es": {
      "name": "Fuerza Aniquiladora",
      "originalName": "ANNIHILATING FORCE",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza Rompelíneas Gravis",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En tu fase de disparo o en la fase de combate, cuando una unidad GRAVIS aliada es seleccionada para atacar.",
      "target": "Esa unidad GRAVIS aliada.",
      "effect": "Los ataques de tu unidad obtienen [Impactos Letales].",
      "restrictions": "",
      "fluff": "Conscientes de su deber de quebrantar las líneas más fortificadas, estos colosos disparan y golpean con un vigor implacable."
    },
    "en": {
      "name": "ANNIHILATING FORCE",
      "originalName": "ANNIHILATING FORCE",
      "type": "Battle Tactic",
      "detachment": "Gravis Linebreaker Force",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Either Player's Turn",
      "when": "Your Shooting phase or the Fight phase, when a friendly GRAVIS unit is selected to attack.",
      "target": "That GRAVIS unit.",
      "effect": "Your unit’s attacks have [Lethal Hits].",
      "restrictions": "",
      "fluff": "Knowing well their duty to shatter the foe’s lines, these warriors strike with devastating strength."
    }
  },
  {
    "id": "strat_gravis_linebreaker_purgation_push",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "your_turn",
    "detachmentId": "gravis_linebreaker",
    "name": "Empuje de Purgación",
    "originalName": "PURGATION PUSH",
    "type": "Treta Estratégica",
    "detachment": "Fuerza Rompelíneas Gravis",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, después de que una unidad GRAVIS aliada haya disparado.",
    "target": "Esa unidad GRAVIS aliada.",
    "effect": "Si tu unidad no está trabada, puede realizar un movimiento normal de hasta 5\" debiendo terminar dentro del alcance de un marcador de objetivo. Tu unidad no podrá declarar cargas ni embarcar en transportes este turno.",
    "restrictions": "",
    "fluff": "Las tácticas de asalto Gravis estipulan un avance imparable coordinado con una cadencia de fuego abrumadora.",
    "es": {
      "name": "Empuje de Purgación",
      "originalName": "PURGATION PUSH",
      "type": "Treta Estratégica",
      "detachment": "Fuerza Rompelíneas Gravis",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, después de que una unidad GRAVIS aliada haya disparado.",
      "target": "Esa unidad GRAVIS aliada.",
      "effect": "Si tu unidad no está trabada, puede realizar un movimiento normal de hasta 5\" debiendo terminar dentro del alcance de un marcador de objetivo. Tu unidad no podrá declarar cargas ni embarcar en transportes este turno.",
      "restrictions": "",
      "fluff": "Las tácticas de asalto Gravis estipulan un avance imparable coordinado con una cadencia de fuego abrumadora."
    },
    "en": {
      "name": "PURGATION PUSH",
      "originalName": "PURGATION PUSH",
      "type": "Strategic Ploy",
      "detachment": "Gravis Linebreaker Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly GRAVIS unit has shot.",
      "target": "That GRAVIS unit.",
      "effect": "• If your unit is unengaged, your unit can make a normal move of up to 5\", and must end that move within range of an objective.\n• Your unit is not eligible to declare a charge or embark within a TRANSPORT until the end of the turn.",
      "restrictions": "",
      "fluff": "Gravis assault tactics stipulate a relentless advance coupled with unfaltering firepower."
    }
  },
  {
    "id": "strat_gravis_linebreaker_armoured_impact",
    "cp": 1,
    "phase": "charge",
    "phases": [
      "charge"
    ],
    "turn": "your_turn",
    "detachmentId": "gravis_linebreaker",
    "name": "Impacto Blindado",
    "originalName": "ARMOURED IMPACT",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza Rompelíneas Gravis",
    "phaseLabel": "Fase de Carga",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de carga, cuando una unidad GRAVIS aliada finaliza un movimiento de carga.",
    "target": "Esa unidad GRAVIS aliada.",
    "effect": "Selecciona una unidad enemiga trabada. Tira un D6 por cada miniatura de tu unidad trabada con ella: cada resultado de 3+ inflige 1 herida mortal a la unidad enemiga.",
    "restrictions": "",
    "fluff": "Arrojando toneladas de servoarmadura Gravis contra las filas enemigas, los Marines Espaciales aplastan y pisotean a sus oponentes.",
    "es": {
      "name": "Impacto Blindado",
      "originalName": "ARMOURED IMPACT",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza Rompelíneas Gravis",
      "phaseLabel": "Fase de Carga",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de carga, cuando una unidad GRAVIS aliada finaliza un movimiento de carga.",
      "target": "Esa unidad GRAVIS aliada.",
      "effect": "Selecciona una unidad enemiga trabada. Tira un D6 por cada miniatura de tu unidad trabada con ella: cada resultado de 3+ inflige 1 herida mortal a la unidad enemiga.",
      "restrictions": "",
      "fluff": "Arrojando toneladas de servoarmadura Gravis contra las filas enemigas, los Marines Espaciales aplastan y pisotean a sus oponentes."
    },
    "en": {
      "name": "ARMOURED IMPACT",
      "originalName": "ARMOURED IMPACT",
      "type": "Battle Tactic",
      "detachment": "Gravis Linebreaker Force",
      "phaseLabel": "Charge Phase",
      "turnLabel": "Your Turn",
      "when": "Your Charge phase, when a friendly GRAVIS unit ends a charge move.",
      "target": "That GRAVIS unit.",
      "effect": "When your unit ends a charge move, you can select one enemy unit engaged with your unit. If you do, roll one D6 for each model in your unit engaged with that enemy unit:\n• For each 3+, that enemy unit suffers 1 mortal wound.",
      "restrictions": "",
      "fluff": "Throwing their armoured mass into an assault, a Space Marine in Gravis armour can crush and trample their foe."
    }
  },
  {
    "id": "strat_gravis_siege_stand_unyielding",
    "cp": 1,
    "phase": "movement",
    "phases": [
      "movement"
    ],
    "turn": "your_turn",
    "detachmentId": "gravis_siege",
    "name": "Mantenerse Inquebrantable",
    "originalName": "STAND UNYIELDING",
    "type": "Treta Estratégica",
    "detachment": "Fuerza de Asedio Gravis",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "Al final de tu fase de movimiento.",
    "target": "Una unidad GRAVIS aliada.",
    "effect": "Selecciona un marcador de objetivo que tu unidad esté controlando. Ese objetivo queda asegurado (lo sigues controlando aunque tu unidad se retire de su alcance).",
    "restrictions": "",
    "fluff": "El terreno reclamado por los Adeptus Astartes con armadura Gravis es prácticamente imposible de recuperar por el enemigo.",
    "es": {
      "name": "Mantenerse Inquebrantable",
      "originalName": "STAND UNYIELDING",
      "type": "Treta Estratégica",
      "detachment": "Fuerza de Asedio Gravis",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "Al final de tu fase de movimiento.",
      "target": "Una unidad GRAVIS aliada.",
      "effect": "Selecciona un marcador de objetivo que tu unidad esté controlando. Ese objetivo queda asegurado (lo sigues controlando aunque tu unidad se retire de su alcance).",
      "restrictions": "",
      "fluff": "El terreno reclamado por los Adeptus Astartes con armadura Gravis es prácticamente imposible de recuperar por el enemigo."
    },
    "en": {
      "name": "STAND UNYIELDING",
      "originalName": "STAND UNYIELDING",
      "type": "Strategic Ploy",
      "detachment": "Gravis Siege Force",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "End of your Movement phase.",
      "target": "One friendly GRAVIS unit.",
      "effect": "Select one objective your unit is controlling. That objective is secured.",
      "restrictions": "",
      "fluff": "Ground claimed by Gravis-clad Adeptus Astartes cannot be taken back with ease."
    }
  },
  {
    "id": "strat_gravis_siege_suppression_volleys",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "your_turn",
    "detachmentId": "gravis_siege",
    "name": "Salvas de Supresión",
    "originalName": "SUPPRESSION VOLLEYS",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza de Asedio Gravis",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, después de que una unidad GRAVIS aliada haya disparado.",
    "target": "Esa unidad GRAVIS aliada.",
    "effect": "Selecciona una unidad enemiga que haya recibido impactos de esos ataques. Esa unidad debe realizar un chequeo de Acobardamiento (Battle-shock) con un penalizador de -1.",
    "restrictions": "",
    "fluff": "Descargando una granizada de proyectiles pesados, estos guerreros inmovilizan o fuerzan la retirada de las escuadras enemigas.",
    "es": {
      "name": "Salvas de Supresión",
      "originalName": "SUPPRESSION VOLLEYS",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza de Asedio Gravis",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, después de que una unidad GRAVIS aliada haya disparado.",
      "target": "Esa unidad GRAVIS aliada.",
      "effect": "Selecciona una unidad enemiga que haya recibido impactos de esos ataques. Esa unidad debe realizar un chequeo de Acobardamiento (Battle-shock) con un penalizador de -1.",
      "restrictions": "",
      "fluff": "Descargando una granizada de proyectiles pesados, estos guerreros inmovilizan o fuerzan la retirada de las escuadras enemigas."
    },
    "en": {
      "name": "SUPPRESSION VOLLEYS",
      "originalName": "SUPPRESSION VOLLEYS",
      "type": "Battle Tactic",
      "detachment": "Gravis Siege Force",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase, when a friendly GRAVIS unit has shot.",
      "target": "That GRAVIS unit.",
      "effect": "Select one enemy unit hit by those attacks. That enemy unit makes a battle-shock roll, with -1 to that battle-shock roll.",
      "restrictions": "",
      "fluff": "Laying down hails of heavy fire, these warriors pin or drive back the foe."
    }
  },
  {
    "id": "strat_ironclad_champions_adamantine_terror",
    "cp": 1,
    "phase": "fight",
    "phases": [
      "fight"
    ],
    "turn": "either_turn",
    "detachmentId": "ironclad_champions",
    "name": "Terror Adamantino",
    "originalName": "ADAMANTINE TERROR",
    "type": "Hazaña Épica",
    "detachment": "Campeones Férreos (Dreadnoughts)",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "Al inicio de la fase de combate.",
    "target": "Una unidad DREADNOUGHT aliada.",
    "effect": "Cada unidad enemiga trabada en combate con tu unidad Dreadnought debe realizar un chequeo de Acobardamiento con un penalizador de -1.",
    "restrictions": "",
    "fluff": "Emitiendo bramidos de batalla a través de sus amplificadores vox externos, el sarcófago viviente siembra el pánico entre las filas enemigas.",
    "es": {
      "name": "Terror Adamantino",
      "originalName": "ADAMANTINE TERROR",
      "type": "Hazaña Épica",
      "detachment": "Campeones Férreos (Dreadnoughts)",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "Al inicio de la fase de combate.",
      "target": "Una unidad DREADNOUGHT aliada.",
      "effect": "Cada unidad enemiga trabada en combate con tu unidad Dreadnought debe realizar un chequeo de Acobardamiento con un penalizador de -1.",
      "restrictions": "",
      "fluff": "Emitiendo bramidos de batalla a través de sus amplificadores vox externos, el sarcófago viviente siembra el pánico entre las filas enemigas."
    },
    "en": {
      "name": "ADAMANTINE TERROR",
      "originalName": "ADAMANTINE TERROR",
      "type": "Epic Deed",
      "detachment": "Ironclad Champions",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Player's Turn",
      "when": "Start of the Fight phase.",
      "target": "One friendly DREADNOUGHT unit.",
      "effect": "Each enemy unit engaged with your unit makes a battle-shock roll, with -1 to that battle-shock roll.",
      "restrictions": "",
      "fluff": "Booming war cries through his vox-amplifiers, this Dreadnought rampages through the terrified foe."
    }
  },
  {
    "id": "strat_ironclad_champions_mercy_is_weakness",
    "cp": 1,
    "phase": "any",
    "phases": [
      "shooting",
      "fight"
    ],
    "turn": "either_turn",
    "detachmentId": "ironclad_champions",
    "name": "La Piedad es Debilidad",
    "originalName": "MERCY IS WEAKNESS",
    "type": "Táctica de Batalla",
    "detachment": "Campeones Férreos (Dreadnoughts)",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En tu fase de disparo o en la fase de combate, cuando una unidad DREADNOUGHT aliada es seleccionada para atacar.",
    "target": "Esa unidad DREADNOUGHT aliada.",
    "effect": "Los ataques de tu unidad obtienen [Impactos Letales] o [Impactos Sostenidos 1] (a tu elección al activar la estratagema).",
    "restrictions": "",
    "fluff": "Una vez marcado un objetivo para la aniquilación, los venerables campeones del capítulo no cesan el fuego hasta que no queda rastro del enemigo.",
    "es": {
      "name": "La Piedad es Debilidad",
      "originalName": "MERCY IS WEAKNESS",
      "type": "Táctica de Batalla",
      "detachment": "Campeones Férreos (Dreadnoughts)",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En tu fase de disparo o en la fase de combate, cuando una unidad DREADNOUGHT aliada es seleccionada para atacar.",
      "target": "Esa unidad DREADNOUGHT aliada.",
      "effect": "Los ataques de tu unidad obtienen [Impactos Letales] o [Impactos Sostenidos 1] (a tu elección al activar la estratagema).",
      "restrictions": "",
      "fluff": "Una vez marcado un objetivo para la aniquilación, los venerables campeones del capítulo no cesan el fuego hasta que no queda rastro del enemigo."
    },
    "en": {
      "name": "MERCY IS WEAKNESS",
      "originalName": "MERCY IS WEAKNESS",
      "type": "Battle Tactic",
      "detachment": "Ironclad Champions",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Either Player's Turn",
      "when": "Your Shooting phase or the Fight phase, when a friendly DREADNOUGHT unit is selected to attack.",
      "target": "That DREADNOUGHT unit.",
      "effect": "Your unit’s attacks have:\n• [lethal hits].\n• Or: [Sustained Hits 1].",
      "restrictions": "",
      "fluff": "Once a foe is marked for destruction, the Angels of Death must not relent until the target is annihilated."
    }
  },
  {
    "id": "strat_ironclad_champions_upstoppable_advance",
    "cp": 1,
    "phase": "any",
    "phases": [
      "movement",
      "charge"
    ],
    "turn": "your_turn",
    "detachmentId": "ironclad_champions",
    "name": "Avance Imparable",
    "originalName": "UPSTOPPABLE ADVANCE",
    "type": "Treta Estratégica",
    "detachment": "Campeones Férreos (Dreadnoughts)",
    "phaseLabel": "Fase de Movimiento o Carga",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de movimiento o fase de carga, cuando una unidad DREADNOUGHT aliada es seleccionada para mover o declara una carga.",
    "target": "Esa unidad DREADNOUGHT aliada.",
    "effect": "Tu unidad obtiene la clave MÓVIL (puede atravesar elementos de escenografía y terrenos difíciles como si no estuvieran presentes).",
    "restrictions": "",
    "fluff": "Ruinas, barricadas o búnkeres: ninguna estructura física puede frenar el paso destructor de un Dreadnought del Adeptus Astartes.",
    "es": {
      "name": "Avance Imparable",
      "originalName": "UPSTOPPABLE ADVANCE",
      "type": "Treta Estratégica",
      "detachment": "Campeones Férreos (Dreadnoughts)",
      "phaseLabel": "Fase de Movimiento o Carga",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de movimiento o fase de carga, cuando una unidad DREADNOUGHT aliada es seleccionada para mover o declara una carga.",
      "target": "Esa unidad DREADNOUGHT aliada.",
      "effect": "Tu unidad obtiene la clave MÓVIL (puede atravesar elementos de escenografía y terrenos difíciles como si no estuvieran presentes).",
      "restrictions": "",
      "fluff": "Ruinas, barricadas o búnkeres: ninguna estructura física puede frenar el paso destructor de un Dreadnought del Adeptus Astartes."
    },
    "en": {
      "name": "UPSTOPPABLE ADVANCE",
      "originalName": "UPSTOPPABLE ADVANCE",
      "type": "Strategic Ploy",
      "detachment": "Ironclad Champions",
      "phaseLabel": "Movement or Charge Phase",
      "turnLabel": "Your Turn",
      "when": "Your Movement/Charge phase, when a friendly DREADNOUGHT unit is selected to move or declares a charge.",
      "target": "That DREADNOUGHT unit.",
      "effect": "Your unit has MOBILE.",
      "restrictions": "",
      "fluff": "Ruins, barricades, bunkers; few such structures can impede the relentless advance of an Adeptus Astartes Dreadnought."
    }
  },
  {
    "id": "strat_gauntlet_aggressive_disembarkation",
    "cp": 1,
    "phase": "any",
    "phases": [
      "movement"
    ],
    "turn": "either_turn",
    "detachmentId": "gauntlet",
    "name": "Desembarco Agresivo",
    "originalName": "AGGRESSIVE DISEMBARKATION",
    "type": "Treta Estratégica",
    "detachment": "Contingente Guantelete",
    "phaseLabel": "Cualquier Fase",
    "turnLabel": "Cualquier Turno",
    "when": "En cualquier fase, cuando una unidad ADEPTUS ASTARTES aliada embarcada en un TRANSPORTE es seleccionada para mover o desembarcar.",
    "target": "Esa unidad ADEPTUS ASTARTES.",
    "effect": "Al desembarcar, cada miniatura puede situarse a distancia de despliegue del TRANSPORTE sin requerir estar totalmente dentro de dicha distancia.",
    "restrictions": "",
    "fluff": "Saliendo en tromba de las compuertas de asalto de su transporte, los Marines ya están combatiendo antes de que el enemigo pueda reaccionar.",
    "es": {
      "name": "Desembarco Agresivo",
      "originalName": "AGGRESSIVE DISEMBARKATION",
      "type": "Treta Estratégica",
      "detachment": "Contingente Guantelete",
      "phaseLabel": "Cualquier Fase",
      "turnLabel": "Cualquier Turno",
      "when": "En cualquier fase, cuando una unidad ADEPTUS ASTARTES aliada embarcada en un TRANSPORTE es seleccionada para mover o desembarcar.",
      "target": "Esa unidad ADEPTUS ASTARTES.",
      "effect": "Al desembarcar, cada miniatura puede situarse a distancia de despliegue del TRANSPORTE sin requerir estar totalmente dentro de dicha distancia.",
      "restrictions": "",
      "fluff": "Saliendo en tromba de las compuertas de asalto de su transporte, los Marines ya están combatiendo antes de que el enemigo pueda reaccionar."
    },
    "en": {
      "name": "AGGRESSIVE DISEMBARKATION",
      "originalName": "AGGRESSIVE DISEMBARKATION",
      "type": "Strategic Ploy",
      "detachment": "Gauntlet Task Force",
      "phaseLabel": "Any Phase",
      "turnLabel": "Either Player's Turn",
      "when": "Any phase, when a friendly ADEPTUS ASTARTES unit embarked within a TRANSPORT is selected to move.",
      "target": "That ADEPTUS ASTARTES unit.",
      "effect": "While making that move, each model in your unit can be set up within the set-up distance of that TRANSPORT.\n\nThis allows you to set up your unit within the set-up distance of your TRANSPORT, instead of wholly within that distance.",
      "restrictions": "",
      "fluff": "Bursting out of their transport, the Space Marines are already on the move before their foes can react."
    }
  },
  {
    "id": "strat_gauntlet_duty_is_never_done",
    "cp": 1,
    "phase": "fight",
    "phases": [
      "fight"
    ],
    "turn": "either_turn",
    "detachmentId": "gauntlet",
    "name": "El Deber Nunca Termina",
    "originalName": "DUTY IS NEVER DONE",
    "type": "Treta Estratégica",
    "detachment": "Contingente Guantelete",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Cualquier Turno",
    "when": "Al final de la fase de combate.",
    "target": "Una unidad INFANTERÍA ADEPTUS ASTARTES aliada no trabada que haya luchado esta fase y se encuentre totalmente a 6\" o menos de un TRANSPORTE aliado en el que sea elegible para embarcar.",
    "effect": "Tu unidad embarca inmediatamente en ese transporte.",
    "restrictions": "",
    "fluff": "No hay tiempo para celebrar laureles mientras cualquier porción del reino del Emperador permanezca bajo amenaza.",
    "es": {
      "name": "El Deber Nunca Termina",
      "originalName": "DUTY IS NEVER DONE",
      "type": "Treta Estratégica",
      "detachment": "Contingente Guantelete",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Cualquier Turno",
      "when": "Al final de la fase de combate.",
      "target": "Una unidad INFANTERÍA ADEPTUS ASTARTES aliada no trabada que haya luchado esta fase y se encuentre totalmente a 6\" o menos de un TRANSPORTE aliado en el que sea elegible para embarcar.",
      "effect": "Tu unidad embarca inmediatamente en ese transporte.",
      "restrictions": "",
      "fluff": "No hay tiempo para celebrar laureles mientras cualquier porción del reino del Emperador permanezca bajo amenaza."
    },
    "en": {
      "name": "DUTY IS NEVER DONE",
      "originalName": "DUTY IS NEVER DONE",
      "type": "Strategic Ploy",
      "detachment": "Gauntlet Task Force",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Either Player's Turn",
      "when": "End of the Fight phase.",
      "target": "One friendly unengaged ADEPTUS ASTARTES INFANTRY unit that was eligible to fight this phase, is wholly within 6\" of a friendly TRANSPORT unit, and is eligible to embark within that TRANSPORT unit.",
      "effect": "Your unit embarks within that TRANSPORT unit.",
      "restrictions": "",
      "fluff": "There is no time to rest upon laurels while any portion of the Emperor’s realm remains in enemy hands."
    }
  },
  {
    "id": "strat_gauntlet_storm_and_secure",
    "cp": 1,
    "phase": "movement",
    "phases": [
      "movement"
    ],
    "turn": "your_turn",
    "detachmentId": "gauntlet",
    "name": "Asaltar y Asegurar",
    "originalName": "STORM AND SECURE",
    "type": "Treta Estratégica",
    "detachment": "Contingente Guantelete",
    "phaseLabel": "Fase de Movimiento",
    "turnLabel": "Tu Turno",
    "when": "Al final de tu fase de movimiento.",
    "target": "Una unidad TRANSPORTE ADEPTUS ASTARTES aliada que tenga una unidad LÍNEA DE BATALLA embarcada en su interior.",
    "effect": "Selecciona un marcador de objetivo que tu unidad esté controlando. Ese objetivo queda asegurado permanentemente para tu ejército.",
    "restrictions": "",
    "fluff": "Las tácticas mecanizadas avanzadas permiten asegurar objetivos vitales a gran velocidad sin detener el avance de la columna.",
    "es": {
      "name": "Asaltar y Asegurar",
      "originalName": "STORM AND SECURE",
      "type": "Treta Estratégica",
      "detachment": "Contingente Guantelete",
      "phaseLabel": "Fase de Movimiento",
      "turnLabel": "Tu Turno",
      "when": "Al final de tu fase de movimiento.",
      "target": "Una unidad TRANSPORTE ADEPTUS ASTARTES aliada que tenga una unidad LÍNEA DE BATALLA embarcada en su interior.",
      "effect": "Selecciona un marcador de objetivo que tu unidad esté controlando. Ese objetivo queda asegurado permanentemente para tu ejército.",
      "restrictions": "",
      "fluff": "Las tácticas mecanizadas avanzadas permiten asegurar objetivos vitales a gran velocidad sin detener el avance de la columna."
    },
    "en": {
      "name": "STORM AND SECURE",
      "originalName": "STORM AND SECURE",
      "type": "Strategic Ploy",
      "detachment": "Gauntlet Task Force",
      "phaseLabel": "Movement Phase",
      "turnLabel": "Your Turn",
      "when": "End of your Movement phase.",
      "target": "One friendly ADEPTUS ASTARTES TRANSPORT unit that has an ADEPTUS ASTARTES BATTLELINE unit embarked within it.",
      "effect": "Select one objective your unit is controlling. That objective is secured.",
      "restrictions": "",
      "fluff": "The advanced mechanised assault tactics employed by this force allow ground to be seized rapidly while on the move."
    }
  },
  {
    "id": "strat_deathwatch_support_kraken_rounds",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "your_turn",
    "detachmentId": "deathwatch_support",
    "name": "Proyectiles Kraken",
    "originalName": "KRAKEN ROUNDS",
    "type": "Equipo de Guerra",
    "detachment": "Apoyo a los Vigías de la Muerte",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad KILL TEAM aliada es seleccionada para disparar.",
    "target": "Esa unidad KILL TEAM aliada.",
    "effect": "Los ataques a distancia de tu unidad obtienen +6\" de Alcance y +1 a la Fuerza del arma.",
    "restrictions": "",
    "fluff": "Los proyectiles Kraken incorporan núcleos de adamantio densificado y propelentes mejorados para perforar las corazas xenos más gruesas.",
    "es": {
      "name": "Proyectiles Kraken",
      "originalName": "KRAKEN ROUNDS",
      "type": "Equipo de Guerra",
      "detachment": "Apoyo a los Vigías de la Muerte",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad KILL TEAM aliada es seleccionada para disparar.",
      "target": "Esa unidad KILL TEAM aliada.",
      "effect": "Los ataques a distancia de tu unidad obtienen +6\" de Alcance y +1 a la Fuerza del arma.",
      "restrictions": "",
      "fluff": "Los proyectiles Kraken incorporan núcleos de adamantio densificado y propelentes mejorados para perforar las corazas xenos más gruesas."
    },
    "en": {
      "name": "KRAKEN ROUNDS",
      "originalName": "KRAKEN ROUNDS",
      "type": "Wargear",
      "detachment": "Deathwatch Support",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase when a KILL TEAM unit is selected to shoot.",
      "target": "That KILL TEAM unit.",
      "effect": "Your unit’s ranged attacks have:\n• Have +6\" R.\n• Have +1 S.",
      "restrictions": "",
      "fluff": "Kraken rounds utilise adamantine cores and improved propellants to penetrate the thickest hide."
    }
  },
  {
    "id": "strat_deathwatch_support_dragonfire_rounds",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "your_turn",
    "detachmentId": "deathwatch_support",
    "name": "Proyectiles Fuego de Dragón",
    "originalName": "DRAGONFIRE ROUNDS",
    "type": "Equipo de Guerra",
    "detachment": "Apoyo a los Vigías de la Muerte",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad KILL TEAM aliada es seleccionada para disparar.",
    "target": "Esa unidad KILL TEAM aliada.",
    "effect": "Los ataques a distancia de tu unidad pueden repetir las tiradas para herir de 1 y obtienen [Ignora Cobertura].",
    "restrictions": "",
    "fluff": "Diseñados para detonar justo antes del impacto, los proyectiles Dragonfire saturan las trincheras enemigas con nubes de gas abrasador.",
    "es": {
      "name": "Proyectiles Fuego de Dragón",
      "originalName": "DRAGONFIRE ROUNDS",
      "type": "Equipo de Guerra",
      "detachment": "Apoyo a los Vigías de la Muerte",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad KILL TEAM aliada es seleccionada para disparar.",
      "target": "Esa unidad KILL TEAM aliada.",
      "effect": "Los ataques a distancia de tu unidad pueden repetir las tiradas para herir de 1 y obtienen [Ignora Cobertura].",
      "restrictions": "",
      "fluff": "Diseñados para detonar justo antes del impacto, los proyectiles Dragonfire saturan las trincheras enemigas con nubes de gas abrasador."
    },
    "en": {
      "name": "DRAGONFIRE ROUNDS",
      "originalName": "DRAGONFIRE ROUNDS",
      "type": "Wargear",
      "detachment": "Deathwatch Support",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase when a KILL TEAM unit is selected to shoot.",
      "target": "That KILL TEAM unit.",
      "effect": "Your unit’s ranged attacks:\n• Can re-roll wound rolls of 1.\n• Have [IGNORES COVER].",
      "restrictions": "",
      "fluff": "Dragonfire rounds are designed to explode just before contact, saturating foes in cover with searing gas and flames."
    }
  },
  {
    "id": "strat_deathwatch_support_hellfire_rounds",
    "cp": 1,
    "phase": "shooting",
    "phases": [
      "shooting"
    ],
    "turn": "your_turn",
    "detachmentId": "deathwatch_support",
    "name": "Proyectiles Fuego Infernal",
    "originalName": "HELLFIRE ROUNDS",
    "type": "Equipo de Guerra",
    "detachment": "Apoyo a los Vigías de la Muerte",
    "phaseLabel": "Fase de Disparo",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo, cuando una unidad KILL TEAM aliada es seleccionada para disparar.",
    "target": "Esa unidad KILL TEAM aliada.",
    "effect": "Los ataques a distancia de tu unidad (excluyendo ataques con [Heridas Devastadoras]) obtienen [Anti-No-Vehículo 4+].",
    "restrictions": "",
    "fluff": "Los proyectiles Hellfire contienen viales presurizados de ácidos mutagénicos capaces de licuar organismos biológicos al menor contacto.",
    "es": {
      "name": "Proyectiles Fuego Infernal",
      "originalName": "HELLFIRE ROUNDS",
      "type": "Equipo de Guerra",
      "detachment": "Apoyo a los Vigías de la Muerte",
      "phaseLabel": "Fase de Disparo",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo, cuando una unidad KILL TEAM aliada es seleccionada para disparar.",
      "target": "Esa unidad KILL TEAM aliada.",
      "effect": "Los ataques a distancia de tu unidad (excluyendo ataques con [Heridas Devastadoras]) obtienen [Anti-No-Vehículo 4+].",
      "restrictions": "",
      "fluff": "Los proyectiles Hellfire contienen viales presurizados de ácidos mutagénicos capaces de licuar organismos biológicos al menor contacto."
    },
    "en": {
      "name": "HELLFIRE ROUNDS",
      "originalName": "HELLFIRE ROUNDS",
      "type": "Wargear",
      "detachment": "Deathwatch Support",
      "phaseLabel": "Shooting Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase when a KILL TEAM unit is selected to shoot.",
      "target": "That KILL TEAM unit.",
      "effect": "Your unit’s ranged attacks (excluding [DEVASTATING WOUNDS] attacks) have [ANTI-non-VEHICLE 4+].",
      "restrictions": "",
      "fluff": "Hellfire rounds douse their targets in voracious acids that are utterly lethal to organic life."
    }
  },
  {
    "id": "strat_deathwatch_support_blackstar_extraction",
    "cp": 1,
    "phase": "fight",
    "phases": [
      "fight"
    ],
    "turn": "opponent_turn",
    "detachmentId": "deathwatch_support",
    "name": "Extracción Corvus Blackstar",
    "originalName": "BLACKSTAR EXTRACTION",
    "type": "Treta Estratégica",
    "detachment": "Apoyo a los Vigías de la Muerte",
    "phaseLabel": "Fase de Combate",
    "turnLabel": "Turno Enemigo",
    "when": "Al final de la fase de combate de tu oponente.",
    "target": "Una unidad KILL TEAM aliada que no esté trabada en combate.",
    "effect": "Coloca esa unidad en reservas estratégicas.",
    "restrictions": "",
    "fluff": "Descendiendo a baja cota con sus compuertas abiertas, las naves Corvus Blackstar extraen a los veteranos de los Guardianes de la Muerte para redesplegarlos al instante.",
    "es": {
      "name": "Extracción Corvus Blackstar",
      "originalName": "BLACKSTAR EXTRACTION",
      "type": "Treta Estratégica",
      "detachment": "Apoyo a los Vigías de la Muerte",
      "phaseLabel": "Fase de Combate",
      "turnLabel": "Turno Enemigo",
      "when": "Al final de la fase de combate de tu oponente.",
      "target": "Una unidad KILL TEAM aliada que no esté trabada en combate.",
      "effect": "Coloca esa unidad en reservas estratégicas.",
      "restrictions": "",
      "fluff": "Descendiendo a baja cota con sus compuertas abiertas, las naves Corvus Blackstar extraen a los veteranos de los Guardianes de la Muerte para redesplegarlos al instante."
    },
    "en": {
      "name": "BLACKSTAR EXTRACTION",
      "originalName": "BLACKSTAR EXTRACTION",
      "type": "Strategic Ploy",
      "detachment": "Deathwatch Support",
      "phaseLabel": "Fight Phase",
      "turnLabel": "Opponent's Turn",
      "when": "End of your opponent’s Fight phase.",
      "target": "One friendly unengaged KILL TEAM unit.",
      "effect": "Place your unit in strategic reserves.",
      "restrictions": "",
      "fluff": "Swooping low with transport bays yawning wide, Corvus Blackstar gunships extract Deathwatch warriors from the battlefield and convey them to locations where their lethal talents are most required."
    }
  },
  {
    "id": "strat_tacticus_firestorm_relentless_assault",
    "cp": 1,
    "phase": "any",
    "phases": [
      "shooting",
      "fight"
    ],
    "turn": "your_turn",
    "detachmentId": "tacticus_firestorm",
    "name": "Asalto Implacable",
    "originalName": "RELENTLESS ASSAULT",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza Tacticus Tormenta de Fuego",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Tu Turno",
    "when": "En tu fase de disparo o combate, cuando una unidad TACTICUS aliada es seleccionada para atacar.",
    "target": "Esa unidad TACTICUS aliada.",
    "effect": "Los ataques de tu unidad obtienen [Impactos Sostenidos 1] contra objetivos que no sean Monstruo ni Vehículo, o [Impactos Letales] si el objetivo es un Monstruo o Vehículo.",
    "restrictions": "",
    "fluff": "Las tácticas del Códice Astartes dictan una cadencia de fuego y acometidas coordinadas para abrumar cualquier línea de defensa.",
    "es": {
      "name": "Asalto Implacable",
      "originalName": "RELENTLESS ASSAULT",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza Tacticus Tormenta de Fuego",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Tu Turno",
      "when": "En tu fase de disparo o combate, cuando una unidad TACTICUS aliada es seleccionada para atacar.",
      "target": "Esa unidad TACTICUS aliada.",
      "effect": "Los ataques de tu unidad obtienen [Impactos Sostenidos 1] contra objetivos que no sean Monstruo ni Vehículo, o [Impactos Letales] si el objetivo es un Monstruo o Vehículo.",
      "restrictions": "",
      "fluff": "Las tácticas del Códice Astartes dictan una cadencia de fuego y acometidas coordinadas para abrumar cualquier línea de defensa."
    },
    "en": {
      "name": "RELENTLESS ASSAULT",
      "originalName": "RELENTLESS ASSAULT",
      "type": "Battle Tactic",
      "detachment": "Tacticus Firestorm Force",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Your Turn",
      "when": "Your Shooting phase or the Fight phase, when a friendly TACTICUS unit is selected to attack.",
      "target": "That TACTICUS unit.",
      "effect": "Your unit’s attacks have:\n• [Sustained Hits 1: non-Monster/Vehicle].\n• Or: [Lethal Hits: Monster/Vehicle].",
      "restrictions": "",
      "fluff": "Pressing mercilessly forward, these warriors place shots and blows perfectly, no matter their targets."
    }
  },
  {
    "id": "strat_gravis_siege_annihilating_force",
    "cp": 1,
    "phase": "any",
    "phases": [
      "shooting",
      "fight"
    ],
    "turn": "either_turn",
    "detachmentId": "gravis_siege",
    "name": "Fuerza Aniquiladora",
    "originalName": "ANNIHILATING FORCE",
    "type": "Táctica de Batalla",
    "detachment": "Fuerza de Asedio Gravis",
    "phaseLabel": "Fase de Disparo o Combate",
    "turnLabel": "Cualquier Turno",
    "when": "En tu fase de disparo o en la fase de combate, cuando una unidad GRAVIS aliada es seleccionada para atacar.",
    "target": "Esa unidad GRAVIS aliada.",
    "effect": "Los ataques de tu unidad obtienen [Impactos Letales].",
    "restrictions": "",
    "fluff": "Conscientes de su deber de quebrantar las líneas más fortificadas, estos colosos disparan y golpean con un vigor implacable.",
    "es": {
      "name": "Fuerza Aniquiladora",
      "originalName": "ANNIHILATING FORCE",
      "type": "Táctica de Batalla",
      "detachment": "Fuerza de Asedio Gravis",
      "phaseLabel": "Fase de Disparo o Combate",
      "turnLabel": "Cualquier Turno",
      "when": "En tu fase de disparo o en la fase de combate, cuando una unidad GRAVIS aliada es seleccionada para atacar.",
      "target": "Esa unidad GRAVIS aliada.",
      "effect": "Los ataques de tu unidad obtienen [Impactos Letales].",
      "restrictions": "",
      "fluff": "Conscientes de su deber de quebrantar las líneas más fortificadas, estos colosos disparan y golpean con un vigor implacable."
    },
    "en": {
      "name": "ANNIHILATING FORCE",
      "originalName": "ANNIHILATING FORCE",
      "type": "Battle Tactic",
      "detachment": "Gravis Siege Force",
      "phaseLabel": "Shooting or Fight Phase",
      "turnLabel": "Either Player's Turn",
      "when": "Your Shooting phase or the Fight phase, when a friendly GRAVIS unit is selected to attack.",
      "target": "That GRAVIS unit.",
      "effect": "Your unit’s attacks have [Lethal Hits].",
      "restrictions": "",
      "fluff": "Knowing well their duty to shatter the foe’s lines, these warriors strike with devastating strength."
    }
  }
],

  // CATÁLOGO COMPLETO DE DATASHEETS (49+ UNIDADES WAHAPEDIA 11ED / ÁNGELES OSCUROS)
  datasheets: [
  {
    "id": "da_lion",
    "name": "Lion El'Jonson",
    "originalName": "Lion El'jonson",
    "aliases": [
      "Lion El’jonson",
      "Lion El Jonson",
      "El León"
    ],
    "role": "Héroe Épico",
    "wing": "Ala de Muerte",
    "isEpicHero": true,
    "keywords": [
      "MONSTRUO",
      "PERSONAJE",
      "HÉROE ÉPICO",
      "PRIMARCA",
      "ALA DE MUERTE",
      "IMPERIUM",
      "LION EL'JONSON",
      "MONSTER",
      "CHARACTER",
      "EPIC HERO",
      "PRIMARCH",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES"
    ],
    "stats": {
      "m": "8\"",
      "r": 10,
      "sv": "2+",
      "inv": "3++",
      "h": 16,
      "l": "5+",
      "co": 4
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 415
      }
    ],
    "rangedWeapons": [
      {
        "name": "Arma Luminis – Plasma (Arma Luminis - Plasma)",
        "range": "18\"",
        "a": 2,
        "bs": "2+",
        "f": 10,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Arma Luminis – Bólter (Arma Luminis - Bolt)",
        "range": "18\"",
        "a": 4,
        "bs": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Fealty – Barrido Devastador (Sweep)",
        "range": "Combate",
        "a": 12,
        "ws": "2+",
        "f": 6,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Hendedura 2 (Cleave 2)"
        ]
      },
      {
        "name": "Fealty – Golpe Demoledor (Strike)",
        "range": "Combate",
        "a": 8,
        "ws": "2+",
        "f": 12,
        "ap": -4,
        "d": 4,
        "keywords": [
          "Impactos Letales (Lethal Hits)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Despliegue Rápido, Ataca Primero",
      "Regla de Facción: Juramento del Momento",
      "Reinos Sombríos Envolventes: En tu fase de Mando, si esta unidad no está trabada, puede retirarse a Reservas Estratégicas y desplegarse mediante Ingress Rápido en tu siguiente fase de Movimiento (incluso en el primer turno).",
      "Ejemplar Marcial (Aura): Mientras una unidad amigable de ÁNGELES OSCUROS esté a 6\" o menos de esta miniatura, sus ataques cuerpo a cuerpo pueden repetir tiradas de impacto de 1 y tiradas para herir de 1.",
      "No Hay Escape de los Vigilantes (Aura): Mientras una unidad amigable de ÁNGELES OSCUROS esté a 6\" o menos de esta miniatura, tiene No Hay Dolor 5+ contra ataques psíquicos y heridas mortales.",
      "Señor de la Guerra: Si esta miniatura está incluida en tu ejército, debe ser tu SEÑOR DE LA GUERRA.",
      "Guardaespaldas de los Ángeles Oscuros: Mientras esta unidad esté a 3\" o menos de una o más unidades amigables de INFANTERÍA ÁNGELES OSCUROS, tiene la habilidad [Agente Solitario].",
      "El Escudo del Emperador: Salvación invulnerable 3++. Los ataques enemigos con una Fuerza superior a la Resistencia de esta unidad sufren -1 a la tirada para herir.",
      "Primarca de la Primera Legión: Al inicio de tu fase de Mando, selecciona hasta dos habilidades de la sección Primarca de la Primera Legión para que estén activas hasta tu próxima fase de Mando.",
      "Los Vigilantes en la Oscuridad: Esta unidad tiene No Hay Dolor 4+ contra ataques psíquicos y heridas mortales.",
      "Maestro Estratega: En tu fase de Mando, puedes seleccionar una doctrina de combate para que esté activa en esta unidad hasta tu siguiente fase de Mando, además de cualquier otra doctrina activa.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "Señor Primarca de la Primera Legión. Porta la colosal espada Fealty y el Escudo del Emperador."
  },
  {
    "id": "da_azrael",
    "name": "Comandante Supremo Azrael",
    "originalName": "Supreme Grand Master Azrael",
    "aliases": [
      "Azrael",
      "Gran Maestre Supremo Azrael"
    ],
    "role": "Héroe Épico",
    "wing": "Ala de Muerte",
    "isEpicHero": true,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "HÉROE ÉPICO",
      "GRAN MAESTRE",
      "ALA DE MUERTE",
      "AZRAEL",
      "INFANTRY",
      "CHARACTER",
      "EPIC HERO",
      "CHAPTER MASTER",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "TACTICUS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "2+",
      "inv": "4++",
      "h": 6,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 150
      }
    ],
    "rangedWeapons": [
      {
        "name": "Ira del León (Lion's Wrath)",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Heridas Devastadoras (Devastating Wounds)",
          "Anti-Infantería 4+"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "La Espada de los Secretos (The Sword of Secrets)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 6,
        "ap": -4,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Táctico Magistral: En tu fase de Movimiento, selecciona una unidad amigable visible de ADEPTUS ASTARTES a 9\" o menos y elige una doctrina de combate; dicha doctrina estará activa para esa unidad hasta tu próxima fase de Mando.",
      "Gran Maestre Supremo: Los ataques de esta unidad tienen la habilidad [Impactos Sostenidos 1].",
      "Vigilante en la Oscuridad (1 vez por batalla): Cuando esta unidad sufra una herida mortal, puede invocar al Vigilante para obtener No Hay Dolor 4+ contra heridas mortales durante esa fase.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Héroes de la Compañía (Company Heroes)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)"
    ],
    "notes": "Líder indiscutible del Capítulo de los Ángeles Oscuros, portador del Yelmo del León y la Espada de los Secretos."
  },
  {
    "id": "da_belial",
    "name": "Belial",
    "originalName": "Grand Master Belial",
    "aliases": [
      "Gran Maestre Belial",
      "Belial"
    ],
    "role": "Héroe Épico",
    "wing": "Ala de Muerte",
    "isEpicHero": true,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "HÉROE ÉPICO",
      "EXTERMINADOR",
      "GRAN MAESTRE",
      "ALA DE MUERTE",
      "BELIAL",
      "INFANTRY",
      "CHARACTER",
      "EPIC HERO",
      "TERMINATOR",
      "CAPTAIN",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 6,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 100
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Tormenta Magistral (Master-crafted)",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Precisión (Precision)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "La Espada del Silencio (The Sword of Silence)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 6,
        "ap": -3,
        "d": 2,
        "keywords": []
      }
    ],
    "abilities": [
      "Reglas Básicas: Despliegue Rápido, Líder",
      "Regla de Facción: Juramento del Momento",
      "Gran Maestre del Ala de Muerte: Los ataques de esta unidad contra una unidad PERSONAJE enemiga tienen +1 a la tirada para herir.",
      "Golpes de Represalia: En la fase de Combate, si esta miniatura es destruida antes de haber sido seleccionada para combatir, puede atacar antes de ser retirada.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [
      "Escuadra de Exterminadores (Terminator Squad)",
      "Caballeros del Ala de Muerte (Deathwing Knights)",
      "Escuadra de Exterminadores del Ala de Muerte"
    ],
    "notes": "Comandante supremo de la 1ª Compañía (Ala de Muerte). Letal duelista equipado con armadura de Exterminador."
  },
  {
    "id": "da_sammael",
    "name": "Sammael",
    "originalName": "Grand Master Sammael",
    "aliases": [
      "Gran Maestre Sammael",
      "Sammael"
    ],
    "role": "Héroe Épico",
    "wing": "Ala de Cuervo",
    "isEpicHero": true,
    "keywords": [
      "MONTADO",
      "PERSONAJE",
      "HÉROE ÉPICO",
      "VOLAR",
      "ALA DE CUERVO",
      "SAMMAEL",
      "MOUNTED",
      "CHARACTER",
      "EPIC HERO",
      "FLY",
      "CAPTAIN",
      "RAVENWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES"
    ],
    "stats": {
      "m": "12\"",
      "r": 6,
      "sv": "3+",
      "inv": "4++",
      "h": 7,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 120
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Cañón de Plasma Magistral (Master-crafted)",
        "range": "36\"",
        "a": 3,
        "bs": "2+",
        "f": 8,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Bólter Tormenta Acoplado (Twin Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "La Espada del Cuervo (The Raven Sword)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 6,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 2"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Cortar la Retirada: Cuando una unidad enemiga trabada con esta miniatura (excepto MONSTRUOS o VEHÍCULOS) intente destrabarse, tira 1D6: con 4+ no puede retirarse y permanece trabada.",
      "Gran Maestre del Ala de Cuervo: Esta unidad tiene la habilidad MÓVIL. En tu fase de Mando, selecciona una doctrina de combate adicional activa para unidades Ala de Cuervo a 6\".",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [
      "Escuadra de Batidores (Outriders)",
      "Caballeros Negros del Ala de Cuervo"
    ],
    "notes": "Comandante supremo de la 2ª Compañía (Ala de Cuervo) a lomos de su moto a reacción relicaria Corvex."
  },
  {
    "id": "da_asmodai",
    "name": "Asmodai",
    "originalName": "Master of Repentance Asmodai",
    "aliases": [
      "Asmodai",
      "Maestre Asmodai"
    ],
    "role": "Héroe Épico",
    "wing": "Ala de Muerte",
    "isEpicHero": true,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "HÉROE ÉPICO",
      "CAPELLÁN",
      "ALA DE MUERTE",
      "ASMODAI",
      "INFANTRY",
      "CHARACTER",
      "EPIC HERO",
      "CHAPLAIN",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "TACTICUS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 4,
      "l": "5+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 80
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Crozius Arcanum y Arma de Energía – Golpe",
        "range": "Combate",
        "a": 5,
        "ws": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Precisión (Precision)"
        ]
      },
      {
        "name": "Crozius Arcanum y Arma de Energía – Barrido",
        "range": "Combate",
        "a": 8,
        "ws": "2+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Hendedura 1 (Cleave 1)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Ejemplar del Odio: Los ataques cuerpo a cuerpo de esta unidad pueden repetir las tiradas para impactar.",
      "Interrogador Temido: Al inicio de la fase de Combate, cada unidad PERSONAJE enemiga a 6\" o menos de esta miniatura debe realizar un chequeo de Acobardamiento, sufriendo un modificador de -1 si esta miniatura está a distancia de combate de dicha unidad enemiga.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)"
    ],
    "notes": "El más antiguo y temido de los Capellanes Interrogadores de los Ángeles Oscuros."
  },
  {
    "id": "da_ezekiel",
    "name": "Ezekiel",
    "originalName": "Grand Master of Librarians Ezekiel",
    "aliases": [
      "Ezekiel",
      "Gran Bibliotecario Ezekiel"
    ],
    "role": "Héroe Épico",
    "wing": "Ala de Muerte",
    "isEpicHero": true,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "HÉROE ÉPICO",
      "PSÍQUICO",
      "BIBLIOTECARIO",
      "ALA DE MUERTE",
      "EZEKIEL",
      "INFANTRY",
      "CHARACTER",
      "EPIC HERO",
      "PSYKER",
      "LIBRARIAN",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "2+",
      "inv": "4++",
      "h": 5,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 110
      }
    ],
    "rangedWeapons": [
      {
        "name": "Borrado Mental – Fuego Brujo Concentrado",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 6,
        "ap": -2,
        "d": "D3+3",
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Peligrosa (Hazardous)",
          "Precisión (Precision)",
          "Psíquica (Psychic)",
          "Anti-Character 4+",
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Borrado Mental – Fuego Brujo",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 6,
        "ap": -2,
        "d": "D6",
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Precisión (Precision)",
          "Combate Cerrado (Close-Quarters)",
          "Psíquica (Psychic)"
        ]
      },
      {
        "name": "El Salvador (The Deliverer)",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Precisión (Precision)",
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Perdición del Traidor (Traitor's Bane)",
        "range": "Combate",
        "a": 4,
        "ws": "2+",
        "f": 6,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Precisión (Precision)",
          "Psíquica (Psychic)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Miedo Envolvente (Psíquico Nivel 1): En tu fase de Disparo, si la unidad no está acobardada, realiza un chequeo psíquico; si lo supera, una unidad enemiga visible a 18\" sufre Acobardamiento y -1 a su Liderazgo.",
      "Susurros del Bosque Sombrío (Psíquico Nivel 1): Cuando una unidad enemiga designe a esta unidad como objetivo, si no está acobardada, resta 1 a las tiradas de impacto del atacante.",
      "Libro de la Salvación: Mientras esta miniatura lidere una unidad, las miniaturas de dicha unidad tienen +1 Ataque en combate cuerpo a cuerpo.",
      "Bibliotecario Jefe (Psíquico Nivel 3): Esta miniatura domina los poderes psíquicos ancestrales del Círculo Interior.",
      "Capucha Psíquica: Esta unidad tiene No Hay Dolor 4+ contra ataques psíquicos y heridas mortales.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)"
    ],
    "notes": "Poseedor del Libro de la Salvación y Guardián de las Llaves del Librarium de la Roca."
  },
  {
    "id": "da_lazarus",
    "name": "Maestre Lazarus",
    "originalName": "Master Lazarus",
    "aliases": [
      "Lazarus",
      "Capitán Lazarus"
    ],
    "role": "Héroe Épico",
    "wing": "Línea General / Círculo Interior",
    "isEpicHero": true,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "HÉROE ÉPICO",
      "CAPITÁN",
      "LAZARUS",
      "INFANTRY",
      "CHARACTER",
      "EPIC HERO",
      "CAPTAIN",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "TACTICUS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 5,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 80
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Filo de la Enemistad (Enmity's Edge)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 6,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Anti-Psyker 2+"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Voluntad Inquebrantable: En la fase de Combate, cuando una miniatura de esta unidad sea destruida, si aún no ha combatido en esta fase, tira 1D6: con un resultado de 3+, no la retires del juego. La miniatura destruida puede luchar tras finalizar los ataques de la unidad atacante y luego es retirada.",
      "El Yelmo EscudoEspiritual: Esta unidad tiene No Hay Dolor 3+ contra ataques psíquicos y heridas mortales.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Héroes de la Compañía (Company Heroes)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)"
    ],
    "notes": "Capitán de la 5ª Compañía de los Ángeles Oscuros, primer Primaris en cruzar el Rubicón dentro de la Orden."
  },
  {
    "id": "da_deathwing_knights",
    "name": "Caballeros del Ala de Muerte",
    "originalName": "Deathwing Knights",
    "role": "Élite / Infantería Pesada",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "EXTERMINADOR",
      "ALA DE MUERTE",
      "CABALLEROS",
      "INFANTRY",
      "TERMINATOR",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 255
      }
    ],
    "rangedWeapons": [],
    "meleeWeapons": [
      {
        "name": "Gran Arma de los No Perdonados",
        "range": "Combate",
        "a": 5,
        "ws": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Maza de Absolución (Mace of Absolution)",
        "range": "Combate",
        "a": 4,
        "ws": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Anti-Monstruo/Vehículo 4+"
        ]
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 5,
        "ws": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma Reliquia (Relic Weapon)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Impactos Letales (Lethal Hits)"
        ]
      }
    ],
    "abilities": [
      "Círculo Interior: Los ataques dirigidos contra esta unidad sufren -1 al Daño infligido. No puede ser objetivo de la estratagema Fortaleza Dreadnought.",
      "Baliza de Teletransporte (1 vez por batalla): Puedes desplegar una baliza al inicio de la batalla; permite realizar Despliegue Rápido o Ingress Rápido con coste de -1 CP a 3\" de la baliza.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano con Armadura de Exterminador.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "La élite suprema de combate cuerpo a cuerpo del Ala de Muerte con Mazas de Absolución."
  },
  {
    "id": "da_deathwing_terminator_squad",
    "name": "Escuadra de Exterminadores del Ala de Muerte",
    "originalName": "Deathwing Terminator Squad",
    "role": "Infantería Pesada",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "EXTERMINADOR",
      "ALA DE MUERTE",
      "INFANTRY",
      "TERMINATOR",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 190
      },
      {
        "models": 10,
        "points": 380
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón de Asalto (Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Lanzamisiles Cyclone – Fragmentación",
        "range": "36\"",
        "a": 8,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Lanzamisiles Cyclone – Perforante",
        "range": "36\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ]
      },
      {
        "name": "Cañón de Plasma – Estándar",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Cañón de Plasma – Sobrecarga",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Explosión 1"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puño Sierra (Chainfist)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 12,
        "ap": -2,
        "d": 3,
        "keywords": []
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Ala de Muerte: Los ataques de esta unidad ignoran todos los modificadores negativos a su HP, HA y tiradas de impacto.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano con Armadura de Exterminador.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Veteranos de la 1ª Compañía equipados con cañones de plasma exclusivos de Caliban."
  },
  {
    "id": "da_inner_circle_companions",
    "name": "Camaradas del Círculo Interior",
    "originalName": "Inner Circle Companions",
    "role": "Élite / Guardia de Honor",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "ALA DE MUERTE",
      "CÍRCULO INTERIOR",
      "GUARDIA",
      "INFANTRY",
      "DEATHWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "TACTICUS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 3,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 90
      },
      {
        "models": 6,
        "points": 180
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Mandoble Calibanita – Barrido (Sweep)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 2"
        ]
      },
      {
        "name": "Mandoble Calibanita – Golpe (Strike)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Impactos Letales (Lethal Hits)"
        ]
      }
    ],
    "abilities": [
      "Brebajes del Juicio: Esta unidad tiene la regla Sigilo [Stealth]. Los ataques cuerpo a cuerpo enemigos sufren -1 a la tirada para impactar.",
      "Enemistad hacia los Indignos: Los ataques de esta unidad contra unidades enemigas de PERSONAJE tienen +1 a la tirada para impactar.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Apotecario, Judiciar o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Misteriosos guerreros encapuchados que custodian a los más altos dignatarios de la Orden."
  },
  {
    "id": "da_ravenwing_black_knights",
    "name": "Caballero Negro del Ala de Cuervo",
    "originalName": "Ravenwing Black Knights",
    "role": "Ataque Rápido / Montado",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "MONTADO",
      "ALA DE CUERVO",
      "CABALLEROS NEGROS",
      "MOUNTED",
      "RAVENWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 6,
      "sv": "3+",
      "inv": "5++",
      "h": 3,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 85
      },
      {
        "models": 6,
        "points": 170
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Lanzagranadas – Fragmentación",
        "range": "24\"",
        "a": 4,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Lanzagranadas – Perforante",
        "range": "24\"",
        "a": 1,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Garras de Plasma – Estándar (Plasma Talon)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Garras de Plasma – Sobrecarga (Plasma Talon)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Peligrosa (Hazardous)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Martillos Corvus (Corvus Hammers)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      }
    ],
    "abilities": [
      "Caballeros de Caliban: Si esta unidad realizó un movimiento de carga este turno, las armas de combate cuerpo a cuerpo de esta unidad obtienen un bonificador de +1 al Daño y la habilidad [Lanza].",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Escuadra de Mando del Ala de Cuervo.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Motores Sobrealimentados: Otorga mayor velocidad de avance y maniobrabilidad."
    ],
    "leaderOf": [],
    "notes": "Élite montada de la 2ª Compañía armados con martillos Corvus y garras de plasma."
  },
  {
    "id": "da_ravenwing_command_squad",
    "name": "Escuadra de Mando del Ala de Cuervo",
    "originalName": "Ravenwing Command Squad",
    "role": "Montado / Mando",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "MONTADO",
      "ALA DE CUERVO",
      "MANDO",
      "PERSONAJE",
      "MOUNTED",
      "RAVENWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "CHARACTER"
    ],
    "stats": {
      "m": "12\"",
      "r": 6,
      "sv": "3+",
      "inv": "5++",
      "h": 4,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 115
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Lanzagranadas – Fragmentación",
        "range": "24\"",
        "a": 4,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Lanzagranadas – Perforante",
        "range": "24\"",
        "a": 1,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Garras de Plasma – Estándar (Plasma Talon)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Garras de Plasma – Sobrecarga (Plasma Talon)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Peligrosa (Hazardous)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Martillos Corvus (Corvus Hammers)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      },
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": []
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Estandarte Astartes: Suma 1 al Control de Objetivo (CO) de cada miniatura de la unidad liderada.",
      "Honor o Muerte: Mientras contenga un Campeón del Ala de Cuervo, esta unidad tiene +1 a las tiradas para avanzar y cargar.",
      "Narthecium: En tu fase de Mando, esta unidad cura D3+1 heridas a una miniatura herida de la escuadra.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Motores Sobrealimentados: Otorga mayor velocidad de avance y maniobrabilidad."
    ],
    "leaderOf": [
      "Escuadra de Batidores (Outriders)",
      "Caballeros Negros del Ala de Cuervo"
    ],
    "notes": "Compuesta por el Campeón, el Boticario y el Portaestandarte del Ala de Cuervo."
  },
  {
    "id": "da_ravenwing_darkshroud",
    "name": "Mortaja del Ala de Cuervo",
    "originalName": "Ravenwing Darkshroud",
    "role": "Vehículo de Apoyo",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "DESLIZADOR",
      "VOLAR",
      "ALA DE CUERVO",
      "HUMO",
      "VEHICLE",
      "SPEEDER",
      "FLY",
      "RAVENWING",
      "SMOKE",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "14\"",
      "r": 8,
      "sv": "3+",
      "inv": "5++",
      "h": 10,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 80
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón de Asalto (Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Icono del Antiguo Caliban: Mientras una unidad amigable de ÁNGELES OSCUROS esté a 6\" o menos de este vehículo, tiene la regla Sigilo [Stealth].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Santuarios de Triangulación de Auspex: Red de sensores avanzados que anulan las ventajas de cobertura del enemigo."
    ],
    "leaderOf": [],
    "notes": "Porta una antigua piedra reliquia de Caliban que emite un campo impenetrable de sombras protectoras."
  },
  {
    "id": "da_land_speeder_vengeance",
    "name": "Land Speeder Venganza",
    "originalName": "Land Speeder Vengeance",
    "role": "Vehículo Pesado / Artillería Móvil",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "DESLIZADOR",
      "VOLAR",
      "ALA DE CUERVO",
      "VEHICLE",
      "SPEEDER",
      "FLY",
      "RAVENWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "14\"",
      "r": 9,
      "sv": "3+",
      "inv": "5++",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 150
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón de Asalto (Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Batería Tormenta de Plasma – Sobrecarga",
        "range": "36\"",
        "a": "D3+3",
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Explosión 1",
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Batería Tormenta de Plasma – Estándar",
        "range": "36\"",
        "a": "D3+3",
        "bs": "3+",
        "f": 9,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Explosión 1"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Tormenta de Venganza (1 vez por turno): En la fase de Disparo enemiga, cuando una unidad enemiga dispare a un aliado cercano, este deslizador puede disparar en respuesta.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Santuarios de Triangulación de Auspex: Red de sensores avanzados que anulan las ventajas de cobertura del enemigo."
    ],
    "leaderOf": [],
    "notes": "El mayor deslizador de combate del Ala de Cuervo dotado de devastadora potencia de plasma."
  },
  {
    "id": "da_nephilim_jetfighter",
    "name": "Caza Nephilim",
    "originalName": "Nephilim Jetfighter",
    "role": "Aeronave / Interceptor",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "AERONAVE",
      "VEHÍCULO",
      "VOLAR",
      "ALA DE CUERVO",
      "AIRCRAFT",
      "VEHICLE",
      "FLY",
      "RAVENWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "-",
      "r": 8,
      "sv": "3+",
      "inv": "5++",
      "h": 11,
      "l": "6+",
      "co": "-"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 200
      }
    ],
    "rangedWeapons": [
      {
        "name": "Megabólter Vengador (Avenger Mega Bolter)",
        "range": "36\"",
        "a": 10,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Misiles Espada Negra (Blacksword Missiles)",
        "range": "36\"",
        "a": 2,
        "bs": "3+",
        "f": 8,
        "ap": -2,
        "d": "D3+2",
        "keywords": [
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ]
      },
      {
        "name": "Cañones Láser Nephilim",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Blindaje de Combate (Armoured hull)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Maniobras Ultrarrápidas: Los ataques a distancia que tengan como objetivo a esta unidad tienen un modificador de -1 a las tiradas para herir.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Turbinas Atronadoras: Propulsión de alta potencia que otorga gran movilidad sobre el campo de batalla."
    ],
    "leaderOf": [],
    "notes": "Caza interceptor de alta velocidad para erradicar amenazas aéreas enemigas."
  },
  {
    "id": "da_dark_talon",
    "name": "Espolón del Ala de Cuervo (Dark Talon)",
    "originalName": "Ravenwing Dark Talon",
    "role": "Aeronave / Bombardero",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "AERONAVE",
      "VEHÍCULO",
      "VOLAR",
      "ALA DE CUERVO",
      "AIRCRAFT",
      "VEHICLE",
      "FLY",
      "RAVENWING",
      "DARK ANGELS",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "-",
      "r": 8,
      "sv": "3+",
      "inv": "5++",
      "h": 11,
      "l": "6+",
      "co": "-"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 190
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Rift del Vacío (Rift Cannon)",
        "range": "18\"",
        "a": "D3+1",
        "bs": "3+",
        "f": 16,
        "ap": -4,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Explosión 1"
        ]
      },
      {
        "name": "Bólter Huracán (Hurricane Bolter)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 6 (Rapid Fire 6)",
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Bomba de Estasis: Al final de la fase de Combate enemiga, selecciona una unidad enemiga visible; dicha unidad sufre heridas mortales y queda trabada en un campo de estasis temporal.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Turbinas Atronadoras: Propulsión de alta potencia que otorga gran movilidad sobre el campo de batalla."
    ],
    "leaderOf": [],
    "notes": "Aeronave equipada con el Cañón Rift, capaz de abrir microfisuras en la disformidad."
  },
  {
    "id": "sm_terminator_squad",
    "name": "Escuadra de Exterminadores",
    "originalName": "Terminator Squad",
    "role": "Infantería Pesada",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "EXTERMINADOR",
      "ALA DE MUERTE",
      "INFANTRY",
      "TERMINATOR",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 190
      },
      {
        "models": 10,
        "points": 380
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón de Asalto (Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Lanzamisiles Cyclone – Fragmentación",
        "range": "36\"",
        "a": 8,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Lanzamisiles Cyclone – Perforante",
        "range": "36\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puño Sierra – Estándar (Chainfist - Standard)",
        "range": "Combate",
        "a": 2,
        "ws": "4+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Puño Sierra – Cazador (Chainfist - Hunter)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 12,
        "ap": -2,
        "d": 3,
        "keywords": []
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Baliza de Teletransporte (1 vez por batalla): Puedes desplegar una baliza al inicio de la batalla; permite realizar Despliegue Rápido o Ingress Rápido con coste de -1 CP a 3\" de la baliza.",
      "Furia de los Primeros: Los ataques de esta unidad dirigidos a un objetivo situado a 9\" o menos tienen +1 al FP.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano con Armadura de Exterminador.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Escuadra estándar de Exterminadores de la 1.ª Compañía del Ala de Muerte."
  },
  {
    "id": "sm_terminator_assault_squad",
    "name": "Escuadra de Exterminadores de Asalto",
    "originalName": "Terminator Assault Squad",
    "role": "Infantería Pesada / Asalto",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "EXTERMINADOR",
      "ALA DE MUERTE",
      "INFANTRY",
      "TERMINATOR",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 170
      },
      {
        "models": 10,
        "points": 340
      }
    ],
    "rangedWeapons": [],
    "meleeWeapons": [
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      },
      {
        "name": "Garras Relámpago Acopladas (Twin Lightning Claws)",
        "range": "Combate",
        "a": 6,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "abilities": [
      "Baliza de Teletransporte (1 vez por batalla): Puedes desplegar una baliza al inicio de la batalla; permite realizar Despliegue Rápido o Ingress Rápido con coste de -1 CP a 3\" de la baliza.",
      "Asalto Terminatus: Si esta unidad realizó un movimiento de carga este turno, sus Garras Relámpago obtienen la regla [Acoplada] y sus Martillos de Trueno obtienen [Heridas Devastadoras].",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano con Armadura de Exterminador.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Especialistas de choque cuerpo a cuerpo con martillos de trueno y escudos de asedio."
  },
  {
    "id": "sm_captain_terminator",
    "name": "Capitán con Armadura de Exterminador",
    "originalName": "Captain in Terminator Armour",
    "role": "Cuartel General / Personaje",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "EXTERMINADOR",
      "CAPITÁN",
      "ALA DE MUERTE",
      "INFANTRY",
      "CHARACTER",
      "TERMINATOR",
      "CAPTAIN",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 6,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 90
      }
    ],
    "rangedWeapons": [
      {
        "name": "Combiarma – Infernus",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 1"
        ]
      },
      {
        "name": "Combiarma – Purgatus",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Combiarma – Damnatus",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puño Reliquia (Relic Fist)",
        "range": "Combate",
        "a": 5,
        "ws": "2+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma Reliquia (Relic Weapon)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": []
      }
    ],
    "abilities": [
      "Reglas Básicas: Despliegue Rápido, Líder",
      "Regla de Facción: Juramento del Momento",
      "Perspicacia Estratégica: En tu fase de Mando, puedes seleccionar una doctrina de combate para que esté activa para esta unidad hasta tu próxima fase de Mando.",
      "Valor Imparable: Puedes repetir las tiradas de carga realizadas para esta unidad.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Exterminadores de Asalto (Terminator Assault)",
      "Escuadra de Exterminadores (Terminator Squad)",
      "Caballeros del Ala de Muerte (Deathwing Knights)",
      "Escuadra de Exterminadores del Ala de Muerte",
      "Escuadra de Exterminadores de los Guardianes de la Muerte (Deathwatch)",
      "Exterminadores de la Guardia del Lobo (Wolf Guard)"
    ],
    "notes": "Veterano oficial protegido por armadura táctica Dreadnought con halo de hierro integrado."
  },
  {
    "id": "sm_chaplain_terminator",
    "name": "Capellán con Armadura de Exterminador",
    "originalName": "Chaplain in Terminator Armour",
    "role": "Cuartel General / Personaje",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "EXTERMINADOR",
      "CAPELLÁN",
      "ALA DE MUERTE",
      "INFANTRY",
      "CHARACTER",
      "TERMINATOR",
      "CHAPLAIN",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 5,
      "l": "5+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 75
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Crozius Arcanum (Crozius Arcanum)",
        "range": "Combate",
        "a": 5,
        "ws": "2+",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Hendedura 1 (Cleave 1)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Despliegue Rápido, Líder",
      "Regla de Facción: Juramento del Momento",
      "Letanía de Odio: Los ataques cuerpo a cuerpo de esta unidad tienen la habilidad [Lanza / Lance].",
      "Fortaleza Celosa: Esta unidad tiene No Hay Dolor 4+ contra heridas mortales.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Exterminadores de Asalto (Terminator Assault)",
      "Escuadra de Exterminadores (Terminator Squad)",
      "Caballeros del Ala de Muerte (Deathwing Knights)",
      "Escuadra de Exterminadores del Ala de Muerte",
      "Escuadra de Exterminadores de los Guardianes de la Muerte (Deathwatch)",
      "Exterminadores de la Guardia del Lobo (Wolf Guard)"
    ],
    "notes": "Líder espiritual y guerrero implacable que inspira a sus hermanos exterminadores al combate sagrado."
  },
  {
    "id": "sm_librarian_terminator",
    "name": "Bibliotecario con Armadura de Exterminador",
    "originalName": "Librarian in Terminator Armour",
    "role": "Cuartel General / Psíquico",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "EXTERMINADOR",
      "PSÍQUICO",
      "BIBLIOTECARIO",
      "ALA DE MUERTE",
      "INFANTRY",
      "CHARACTER",
      "TERMINATOR",
      "PSYKER",
      "LIBRARIAN",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 5,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 80
      }
    ],
    "rangedWeapons": [
      {
        "name": "Castigo Divino (Smite) – Fuego Brujo Concentrado",
        "range": "24\"",
        "a": "D3+3",
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Psíquica (Psychic)",
          "Peligrosa (Hazardous)"
        ]
      },
      {
        "name": "Castigo – Fuego Brujo (Smite – witchfire)",
        "range": "24\"",
        "a": "D6",
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Psíquica (Psychic)"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma Psíquica / de Fuerza (Force Weapon)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Psíquica (Psychic)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Despliegue Rápido, Líder",
      "Regla de Facción: Juramento del Momento",
      "Poder de los Héroes (Psíquico Nivel 1): En la fase de Combate, si no está acobardada, realiza un chequeo psíquico; si lo supera, añade +1 a la Fuerza y Ataques de las armas de combate de la unidad.",
      "Fuerza Atronadora (Psíquico Nivel 1): En tu fase de Disparo, desata una onda de choque psíquica que inflige heridas mortales a unidades enemigas cercanas.",
      "Bibliotecario (Psíquico Nivel 1): Esta miniatura domina las disciplinas psíquicas de combate de los Adeptus Astartes.",
      "Capucha Psíquica: Esta unidad tiene No Hay Dolor 4+ contra ataques psíquicos y heridas mortales.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Exterminadores de Asalto (Terminator Assault)",
      "Escuadra de Exterminadores (Terminator Squad)",
      "Caballeros del Ala de Muerte (Deathwing Knights)",
      "Escuadra de Exterminadores del Ala de Muerte",
      "Escuadra de Exterminadores de los Guardianes de la Muerte (Deathwatch)",
      "Exterminadores de la Guardia del Lobo (Wolf Guard)"
    ],
    "notes": "Canaliza las tormentas del Immaterium protegido por su servoarmadura blindada y capucha psíquica."
  },
  {
    "id": "sm_ancient_terminator",
    "name": "Anciano con Armadura de Exterminador",
    "originalName": "Ancient in Terminator Armour",
    "role": "Personaje / Soporte",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "EXTERMINADOR",
      "PORTAESTANDARTE",
      "ALA DE MUERTE",
      "INFANTRY",
      "CHARACTER",
      "TERMINATOR",
      "ANCIENT",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "4++",
      "h": 5,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 75
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": []
      }
    ],
    "abilities": [
      "Reglas Básicas: Despliegue Rápido, Líder",
      "Regla de Facción: Juramento del Momento",
      "Alzad el Estandarte: Al final de tu fase de Movimiento, si esta unidad controla un marcador de objetivo, dicho objetivo queda asegurado hasta que una unidad enemiga lo controle, incluso si abandonas el marcador.",
      "¡El Estandarte Jamás Caerá!: Mientras esta unidad esté a alcance de un marcador de objetivo, las miniaturas de esta unidad obtienen la habilidad No Hay Dolor 5+ (Feel No Pain 5+).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Exterminadores de Asalto (Terminator Assault)",
      "Escuadra de Exterminadores (Terminator Squad)",
      "Caballeros del Ala de Muerte (Deathwing Knights)",
      "Escuadra de Exterminadores del Ala de Muerte",
      "Escuadra de Exterminadores de los Guardianes de la Muerte (Deathwatch)",
      "Exterminadores de la Guardia del Lobo (Wolf Guard)"
    ],
    "notes": "Guardián de las sagradas enseñas del Ala de Muerte. Eleva la moral de los veteranos en los puntos críticos."
  },
  {
    "id": "sm_bladeguard_ancient",
    "name": "Anciano de Ferreaguardia",
    "originalName": "Bladeguard Ancient",
    "role": "Personaje / Soporte",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "PERSONAJE",
      "PORTAESTANDARTE",
      "ALA DE MUERTE",
      "INFANTRY",
      "CHARACTER",
      "ANCIENT",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "TACTICUS",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 4,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 70
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Reliquias de Batalla",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": []
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Alzad el Estandarte: Al final de tu fase de Movimiento, si esta unidad controla un marcador de objetivo, dicho objetivo queda asegurado hasta que una unidad enemiga lo controle, incluso si abandonas el marcador.",
      "Hazañas Legendarias: Mientras esta unidad esté a alcance de un marcador de objetivo, los ataques cuerpo a cuerpo de esta unidad obtienen la regla [Impactos Letales].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)"
    ],
    "notes": "Veterano del Círculo Interior que porta un estandarte de batalla glorioso para alentar a la Ferreaguardia."
  },
  {
    "id": "sm_bladeguard_veterans",
    "name": "Escuadra de Veteranos de Ferreaguardia",
    "originalName": "Bladeguard Veteran Squad",
    "role": "Élite / Infantería",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "ALA DE MUERTE",
      "FERREAGUARDIA",
      "INFANTRY",
      "DEATHWING",
      "BLADEGUARD",
      "ADEPTUS ASTARTES",
      "TACTICUS",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 90
      },
      {
        "models": 6,
        "points": 180
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola Neo-volkite",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Espada de Energía Magistral (Master-crafted)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": []
      }
    ],
    "abilities": [
      "Ferreaguardia (1 vez por turno): En la fase de Combate, al ser seleccionada para combatir o al recibir ataques, puede repetir tiradas de salvación invulnerable de 1 o tiradas de impacto de 1.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Apotecario, Anciano de Ferreaguardia, Judiciar o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Veteranos con espadas maestras y escudos tormenta incorporados a la 1ª Compañía."
  },
  {
    "id": "sm_sternguard_veterans",
    "name": "Escuadra de Veteranos de Retaguardia (Sternguard)",
    "originalName": "Sternguard Veteran Squad",
    "role": "Infantería / Disparo",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "ALA DE MUERTE",
      "RETAGUARDIA",
      "INFANTRY",
      "DEATHWING",
      "STERNGUARD",
      "ADEPTUS ASTARTES",
      "TACTICUS",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 105
      },
      {
        "models": 10,
        "points": 210
      }
    ],
    "rangedWeapons": [
      {
        "name": "Arma de Fuego Artesanal – Infernus",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Asalto (Assault)",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Arma de Fuego Artesanal – Purgatus",
        "range": "24\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Asalto (Assault)",
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Arma de Fuego Artesanal – Damnatus",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Asalto (Assault)",
          "Fusión 2 (Melta 2)"
        ]
      },
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Pesada (Heavy)",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Cañón Ígneo (Pyrecannon)",
        "range": "12\"",
        "a": 4,
        "bs": "-",
        "f": 6,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Combate",
        "a": 6,
        "ws": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Tiradores Veteranos: Los ataques a distancia de esta unidad pueden repetir las tiradas de impacto de 1.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Apotecario, Judiciar o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Especialistas de tiro con munición artesanal integrada en la 1ª Compañía."
  },
  {
    "id": "sm_vanguard_veterans_jump",
    "name": "Escuadra de Veteranos de Vanguardia con Propulsores",
    "originalName": "Vanguard Veteran Squad With Jump Packs",
    "role": "Infantería Rápida / Asalto",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "VOLAR",
      "PROPULSOR DE SALTO",
      "ALA DE MUERTE",
      "INFANTRY",
      "FLY",
      "JUMP PACK",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 110
      },
      {
        "models": 10,
        "points": 220
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Combate Cerrado (Close-Quarters)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Hoja Reliquia (Relic Blade)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Hendedura 1 (Cleave 1)",
          "Impactos Letales: No Monstruos/Vehículos"
        ]
      },
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      }
    ],
    "abilities": [
      "Asalto de Vanguardia: Si esta unidad realizó un movimiento de carga este turno, sus ataques cuerpo a cuerpo obtienen [Impactos Letales].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Veteranos aerotransportados con retrocohetes y escudos."
  },
  {
    "id": "sm_captain_bike",
    "name": "Capitán en Moto",
    "originalName": "Captain on Bike",
    "role": "Cuartel General / Montado (Legends)",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "MONTADO",
      "PERSONAJE",
      "CAPITÁN",
      "ALA DE CUERVO",
      "LEGENDS",
      "MOUNTED",
      "CHARACTER",
      "CAPTAIN",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 6,
      "sv": "3+",
      "inv": "4++",
      "h": 6,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 110
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "2+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)"
        ]
      },
      {
        "name": "Rifle Bólter Acoplado (Twin Bolt Rifle)",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Asalto (Assault)",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Combate",
        "a": 6,
        "ws": "2+",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Perspicacia Estratégica: En tu fase de Mando, puedes seleccionar una doctrina de combate para que esté activa para esta unidad hasta tu próxima fase de Mando.",
      "Al Combate: Si esta unidad realizó un movimiento de carga este turno, sus ataques cuerpo a cuerpo obtienen la habilidad [Hendedura 1 / Cleave 1].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Batidores (Outriders)",
      "Caballeros Negros del Ala de Cuervo"
    ],
    "notes": "Comandante de vanguardia montado del Ala de Cuervo (Ficha de reglas oficiales Legends)."
  },
  {
    "id": "sm_chaplain_bike",
    "name": "Capellán en Moto",
    "originalName": "Chaplain on Bike",
    "role": "Cuartel General / Montado",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "MONTADO",
      "PERSONAJE",
      "CAPELLÁN",
      "ALA DE CUERVO",
      "MOUNTED",
      "CHARACTER",
      "CHAPLAIN",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 6,
      "sv": "3+",
      "inv": "4++",
      "h": 5,
      "l": "5+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 75
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Absolvor (Absolvor Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Rifle Bólter Acoplado (Twin Bolt Rifle)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Crozius Arcanum (Crozius Arcanum)",
        "range": "Combate",
        "a": 5,
        "ws": "2+",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Hendedura 1 (Cleave 1)"
        ]
      }
    ],
    "abilities": [
      "Reglas Básicas: Líder",
      "Regla de Facción: Juramento del Momento",
      "Letanía de Odio: Los ataques cuerpo a cuerpo de esta unidad tienen la habilidad [Lanza / Lance].",
      "Catecismo de Fuego: En tu fase de Disparo, selecciona una unidad enemiga visible a 12\"; los ataques a distancia de esta unidad contra ella obtienen [Impactos Devastadores].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Batidores (Outriders)",
      "Caballeros Negros del Ala de Cuervo"
    ],
    "notes": "Capellán montado en moto todoterreno Raider, liderando a las fuerzas móviles del Ala de Cuervo."
  },
  {
    "id": "sm_outriders",
    "name": "Escuadra de Batidores (Outriders)",
    "originalName": "Outrider Squad",
    "role": "Ataque Rápido / Montado",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "MONTADO",
      "ALA DE CUERVO",
      "LÍNEA",
      "MOUNTED",
      "RAVENWING",
      "BATTLELINE",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 80
      },
      {
        "models": 6,
        "points": 160
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)"
        ]
      },
      {
        "name": "Rifle Bólter Acoplado (Twin Bolt Rifle)",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Asalto (Assault)",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      }
    ],
    "abilities": [
      "Asalto a Todo Gas: Si esta unidad realizó un movimiento de carga este turno, sus Rifles Bólter Acoplados obtienen la regla [Lanza] y sus Espadas Sierra Astartes aumentan su Daño en +1.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Escuadra de Mando del Ala de Cuervo.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Motores Sobrealimentados: Otorga mayor velocidad de avance y maniobrabilidad."
    ],
    "leaderOf": [],
    "notes": "Motos de intercepción veloz del Ala de Cuervo (Línea de Batalla en destacamentos de Alas)."
  },
  {
    "id": "sm_invader_atv",
    "name": "Quads Invader (ATV)",
    "originalName": "Invader ATVs",
    "role": "Montado / Apoyo Ligero",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "MONTADO",
      "ALA DE CUERVO",
      "MOUNTED",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "10\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 8,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 65
      },
      {
        "models": 2,
        "points": 130
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Cañón Gatling Onslaught (Onslaught Gatling)",
        "range": "24\"",
        "a": 8,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras: No Monstruos/Vehículos"
        ]
      },
      {
        "name": "Rifle Bólter Acoplado (Twin Bolt Rifle)",
        "range": "24\"",
        "a": 2,
        "bs": "2+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Asalto (Assault)",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Impacto Blindado (Armoured Impact)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Reconocimiento Agresivo: En tu fase de Disparo, los ataques a distancia de esta unidad contra un enemigo visible obtienen +1 para impactar si se encuentra a corta distancia.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Vehículo todoterreno de fuego de apoyo del Ala de Cuervo."
  },
  {
    "id": "sm_scout_bikes",
    "name": "Escuadra de Batidores en Moto",
    "originalName": "Scout Bike Squad",
    "role": "Montado / Explorador",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "MONTADO",
      "ALA DE CUERVO",
      "EXPLORADOR",
      "MOUNTED",
      "RAVENWING",
      "SCOUT",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 5,
      "sv": "4+",
      "inv": "-",
      "h": 3,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 75
      },
      {
        "models": 6,
        "points": 150
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Bólter (Boltgun)",
        "range": "24\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Combiarma – Damnatus",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ]
      },
      {
        "name": "Combiarma – Infernus",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Explosión 1",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Combiarma – Purgatus",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Pistola Gravitatoria (Grav-pistol)",
        "range": "12\"",
        "a": 2,
        "bs": "3+",
        "f": 2,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Anti-Vehicle 2+",
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Lanzagranadas – Fragmentación",
        "range": "24\"",
        "a": 4,
        "bs": "4+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Lanzagranadas – Perforante",
        "range": "24\"",
        "a": 1,
        "bs": "4+",
        "f": 10,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Lanzallamas de Mano (Hand Flamer)",
        "range": "9\"",
        "a": 3,
        "bs": "-",
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Pistola Infernal (Inferno Pistol)",
        "range": "9\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Fusión 2 (Melta 2)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Escopeta Astartes (Astartes Shotgun)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Asalto (Assault)",
          "Explosión 1"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Bólter Acoplado (Twin Boltgun)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Cuchillo de Combate (Combat Knife)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Combate",
        "a": 2,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 4,
        "ap": -2,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      },
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Flanquear: Cuando esta unidad realiza un movimiento de despliegue por reservas, puede desplegarse a 6\" o menos de cualquier borde del campo de batalla en lugar de a más de 9\" de miniaturas enemigas.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Motores Sobrealimentados: Otorga mayor velocidad de avance y maniobrabilidad."
    ],
    "leaderOf": [],
    "notes": "Pioneros del Ala de Cuervo en reconocimiento avanzado."
  },
  {
    "id": "sm_storm_speeder_thunderstrike",
    "name": "Storm Speeder Atronador",
    "originalName": "Storm Speeder Thunderstrike",
    "role": "Vehículo / Cazador de Blindados",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "DESLIZADOR",
      "VOLAR",
      "ALA DE CUERVO",
      "VEHICLE",
      "SPEEDER",
      "FLY",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "14\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 140
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzamisiles Stormfury",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Módulo de Cohetes Icarus Thunderstrike",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ]
      },
      {
        "name": "Garras Láser Atronadoras (Las-talon)",
        "range": "36\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      }
    ],
    "meleeWeapons": [
      {
        "name": "Impacto Blindado (Armoured Impact)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Atronador: Los ataques a distancia contra unidades de MONSTRUO o VEHÍCULO tienen +1 a la tirada para herir.",
      "Defensas Destrozadas: Tras disparar contra un MONSTRUO o VEHÍCULO enemigo, los ataques posteriores de aliados contra ese blanco tienen +1 a la tirada para herir.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Santuarios de Triangulación de Auspex: Red de sensores avanzados que anulan las ventajas de cobertura del enemigo."
    ],
    "leaderOf": [],
    "notes": "Deslizador pesado con láser de alto calibre del Ala de Cuervo."
  },
  {
    "id": "sm_storm_speeder_hailstrike",
    "name": "Storm Speeder Granizador",
    "originalName": "Storm Speeder Hailstrike",
    "role": "Vehículo / Supresión Ligera",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "DESLIZADOR",
      "VOLAR",
      "ALA DE CUERVO",
      "VEHICLE",
      "SPEEDER",
      "FLY",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "14\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 110
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzagranadas Fragstorm (Fragstorm)",
        "range": "18\"",
        "a": 6,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Ignora Cobertura (Ignores Cover)"
        ]
      },
      {
        "name": "Batería de Ametralladoras Pesadas Ironhail",
        "range": "36\"",
        "a": 6,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 6 (Rapid Fire 6)",
          "Ignora Cobertura (Ignores Cover)"
        ]
      },
      {
        "name": "Cañón Gatling Onslaught (Onslaught Gatling)",
        "range": "24\"",
        "a": 8,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras: No Monstruos/Vehículos",
          "Ignora Cobertura (Ignores Cover)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Impacto Blindado (Armoured Impact)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Granizador: Tras disparar contra una unidad enemiga, los ataques a distancia de otros aliados contra ese objetivo ganan +1 al FP hasta el final de la fase.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Santuarios de Triangulación de Auspex: Red de sensores avanzados que anulan las ventajas de cobertura del enemigo."
    ],
    "leaderOf": [],
    "notes": "Deslizador de saturación de infantería."
  },
  {
    "id": "sm_storm_speeder_hammerstrike",
    "name": "Storm Speeder Martillador",
    "originalName": "Storm Speeder Hammerstrike",
    "role": "Vehículo / Destructor de Búnkeres",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "DESLIZADOR",
      "VOLAR",
      "ALA DE CUERVO",
      "VEHICLE",
      "SPEEDER",
      "FLY",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "14\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 140
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzamisiles Hammerstrike",
        "range": "36\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": []
      },
      {
        "name": "Lanzagranadas Krakstorm",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 9,
        "ap": -1,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Destructor de Fusión (Melta Destroyer)",
        "range": "18\"",
        "a": 3,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Impacto Blindado (Armoured Impact)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Martillador: Los ataques a distancia contra enemigos en cobertura o dentro de escenografía obtienen [Impactos Sostenidos 1].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Santuarios de Triangulación de Auspex: Red de sensores avanzados que anulan las ventajas de cobertura del enemigo."
    ],
    "leaderOf": [],
    "notes": "Deslizador de demolición a corta distancia."
  },
  {
    "id": "sm_brutalis_dreadnought",
    "name": "Dreadnought Brutalis",
    "originalName": "Brutalis Dreadnought",
    "role": "Bípode / Choque Frontal",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "BÍPODE",
      "DREADNOUGHT",
      "ALA DE MUERTE",
      "VEHICLE",
      "WALKER",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "10\"",
      "r": 10,
      "sv": "2+",
      "inv": "-",
      "h": 12,
      "l": "6+",
      "co": 4
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 160
      }
    ],
    "rangedWeapons": [
      {
        "name": "Rifles Bólter (Bolt Rifles)",
        "range": "24\"",
        "a": 4,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Ametralladora Pesada Ironhail Icarus Acoplada",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Anti-Fly 3+",
          "Disparo Rápido 3 (Rapid Fire 3)",
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Multifusión Acoplada (Twin Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Acoplada (Twin-linked)",
          "Fusión 3 (Melta 3)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños Brutalis (Brutalis Fists)",
        "range": "Combate",
        "a": 6,
        "ws": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Garras Brutalis (Brutalis Talons)",
        "range": "Combate",
        "a": 8,
        "ws": "3+",
        "f": 10,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1: No Monstruos/Vehículos",
          "Acoplada (Twin-linked)",
          "Hendedura 2 (Cleave 2)"
        ]
      }
    ],
    "abilities": [
      "Carga Brutalis (1 vez por fase): Puedes seleccionar a esta unidad como blanco de la estratagema Impacto Aplastante, independientemente de cualquier otro uso de dicha estratagema en esta fase.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Campeón Venerable (Aura): Inspira a los hermanos de batalla cercanos con siglos de experiencia bélica."
    ],
    "leaderOf": [],
    "notes": "El temible Dreadnought de asalto de corta distancia de la 1ª Compañía."
  },
  {
    "id": "sm_ballistus_dreadnought",
    "name": "Dreadnought Ballistus",
    "originalName": "Ballistus Dreadnought",
    "role": "Bípode / Apoyo Pesado",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "BÍPODE",
      "DREADNOUGHT",
      "ALA DE MUERTE",
      "VEHICLE",
      "WALKER",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "8\"",
      "r": 10,
      "sv": "2+",
      "inv": "-",
      "h": 12,
      "l": "6+",
      "co": 4
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 150
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Láser Ballistus (Ballistus Lascannon)",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Lanzamisiles Ballistus – Fragmentación",
        "range": "48\"",
        "a": "D6+6",
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Lanzamisiles Ballistus – Perforante",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Bólteres Tormenta (Storm Bolters)",
        "range": "24\"",
        "a": 4,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 4 (Rapid Fire 4)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Pies Blindados (Armoured Feet)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 7,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Ataque Ballistus: Los ataques a distancia contra unidades enemigas a más de 24\" pueden repetir las tiradas de impacto de 1.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Campeón Venerable (Aura): Inspira a los hermanos de batalla cercanos con siglos de experiencia bélica."
    ],
    "leaderOf": [],
    "notes": "Plataforma de artillería andante de largo alcance del Ala de Muerte."
  },
  {
    "id": "sm_redemptor_dreadnought",
    "name": "Dreadnought Redentor",
    "originalName": "Redemptor Dreadnought",
    "role": "Bípode / Asedio",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "BÍPODE",
      "DREADNOUGHT",
      "ALA DE MUERTE",
      "VEHICLE",
      "WALKER",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "8\"",
      "r": 10,
      "sv": "2+",
      "inv": "-",
      "h": 12,
      "l": "6+",
      "co": 4
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 170
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzagranadas Fragstorm (Fragstorm)",
        "range": "18\"",
        "a": 6,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Megacañón Gatling Onslaught Pesado",
        "range": "24\"",
        "a": 12,
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras: No Monstruos/Vehículos",
          "Impactos Sostenidos 2: No Monstruos/Vehículos"
        ]
      },
      {
        "name": "Módulo de Cohetes Icarus (Icarus Rocket Pod)",
        "range": "24\"",
        "a": 3,
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ]
      },
      {
        "name": "Macroincinerador de Plasma – Estándar",
        "range": "36\"",
        "a": "D3+3",
        "bs": "3+",
        "f": 9,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Macroincinerador de Plasma – Sobrecarga",
        "range": "36\"",
        "a": "D3+3",
        "bs": "3+",
        "f": 10,
        "ap": -4,
        "d": 3,
        "keywords": [
          "Explosión 1",
          "Peligrosa (Hazardous)"
        ]
      },
      {
        "name": "Cañón Gatling Onslaught (Onslaught Gatling)",
        "range": "24\"",
        "a": 8,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras: No Monstruos/Vehículos"
        ]
      },
      {
        "name": "Bólteres Tormenta (Storm Bolters)",
        "range": "24\"",
        "a": 4,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 4 (Rapid Fire 4)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puño Redemptor (Redemptor Fist)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      }
    ],
    "abilities": [
      "Deber Eterno: Los ataques enemigos dirigidos contra esta unidad cuya Fuerza sea superior a su Resistencia sufren -1 a la tirada para herir.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Campeón Venerable (Aura): Inspira a los hermanos de batalla cercanos con siglos de experiencia bélica."
    ],
    "leaderOf": [],
    "notes": "El dreadnought multipropósito por excelencia, veterano de la 1ª Compañía."
  },
  {
    "id": "sm_dreadnought",
    "name": "Dreadnought Clásico / Venerable",
    "originalName": "Dreadnought",
    "role": "Bípode / Soporte",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "BÍPODE",
      "DREADNOUGHT",
      "ALA DE MUERTE",
      "VEHICLE",
      "WALKER",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 9,
      "sv": "2+",
      "inv": "-",
      "h": 8,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 135
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón de Asalto (Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Cañón de Plasma Pesado – Estándar",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 9,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Explosión 1",
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Cañón de Plasma Pesado – Sobrecarga",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Explosión 1",
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Lanzamisiles – Fragmentación (Frag)",
        "range": "48\"",
        "a": 4,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Lanzamisiles – Perforante (Krak)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Pies Aplastantes (Crushing Feet)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Puño Dreadnought (Dreadnought Fist)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 12,
        "ap": -2,
        "d": 3,
        "keywords": []
      }
    ],
    "abilities": [
      "Sabiduría de los Ancestros (Aura): Mientras una unidad amiga de INFANTERÍA ADEPTUS ASTARTES esté a 6\" o menos de esta miniatura, los ataques de dicha unidad pueden repetir las tiradas de impactar de 1.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Campeón Venerable (Aura): Inspira a los hermanos de batalla cercanos con siglos de experiencia bélica."
    ],
    "leaderOf": [],
    "notes": "Casta venerable de antiguos héroes del Capítulo."
  },
  {
    "id": "sm_venerable_dreadnought",
    "name": "Dreadnought Venerable",
    "originalName": "Venerable Dreadnought",
    "role": "Bípode / Soporte Veterano",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "BÍPODE",
      "DREADNOUGHT",
      "ALA DE MUERTE",
      "VEHICLE",
      "WALKER",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 9,
      "sv": "2+",
      "inv": "-",
      "h": 8,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 165
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón de Asalto (Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Cañón Infernal Dreadnought",
        "range": "12\"",
        "a": 7,
        "bs": "-",
        "f": 6,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ]
      },
      {
        "name": "Cañón de Plasma Pesado – Estándar",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 9,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Explosión 1",
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Cañón de Plasma Pesado – Sobrecarga",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Explosión 1",
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Lanzamisiles – Fragmentación (Frag)",
        "range": "48\"",
        "a": 4,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1",
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Lanzamisiles – Perforante (Krak)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Cañón Automático Acoplado (Twin Autocannon)",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 9,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Lanzallamas Pesado Acoplado (Twin Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Acoplada (Twin-linked)",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Pies Blindados (Armoured Feet)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Puño Dreadnought (Dreadnought Fist)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 12,
        "ap": -2,
        "d": 3,
        "keywords": []
      }
    ],
    "abilities": [
      "Sabiduría de los Ancestros (Aura): Mientras una unidad amiga de INFANTERÍA ADEPTUS ASTARTES esté a 6\" o menos de esta miniatura, los ataques de dicha unidad pueden repetir las tiradas de impactar de 1.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Campeón Venerable (Aura): Inspira a los hermanos de batalla cercanos con siglos de experiencia bélica."
    ],
    "leaderOf": [],
    "notes": "Casta venerable de antiguos héroes del Capítulo."
  },
  {
    "id": "sm_thunderhawk_gunship",
    "name": "Cañonera Thunderhawk",
    "originalName": "Thunderhawk Gunship",
    "role": "Titánico / Aeronave Pesada",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "TITÁNICO",
      "AERONAVE",
      "VEHÍCULO",
      "TRANSPORTE",
      "VOLAR",
      "ALA DE CUERVO",
      "TITANIC",
      "AIRCRAFT",
      "VEHICLE",
      "TRANSPORT",
      "FLY",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "14\"",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 30,
      "l": "6+",
      "co": "0"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 850
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Batería de Misiles Hellstrike",
        "range": "72\"",
        "a": 4,
        "bs": "3+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Anti-Fly 4+"
        ]
      },
      {
        "name": "Cañón Pesado Thunderhawk",
        "range": "48\"",
        "a": 10,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Destructor Turboláser (Turbo-laser Destructor)",
        "range": "96\"",
        "a": 3,
        "bs": "3+",
        "f": 20,
        "ap": -4,
        "d": "D6+6",
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 6,
        "ws": "4+",
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Asalto Aéreo: En tu fase de Movimiento, cuando esta unidad termine un movimiento normal, las unidades embarcadas en su interior pueden realizar un desembarco de asalto.",
      "Bombas de Racimo Thunderhawk: En tu fase de Movimiento, cuando esta unidad termine un movimiento normal o de avance, puedes seleccionar una unidad enemiga sobre la que haya sobrevolado y tirar 6D6: por cada 4+, esa unidad sufre 1 herida mortal.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 30 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Turbinas Atronadoras: Propulsión de alta potencia que otorga gran movilidad sobre el campo de batalla."
    ],
    "leaderOf": [],
    "notes": "Superpesado titánico aerotransportado del Capítulo."
  },
  {
    "id": "sm_land_raider_standard",
    "name": "Land Raider",
    "originalName": "Land Raider",
    "role": "Vehículo / Transporte Blindado",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "HUMO",
      "TRANSPORTE",
      "ALA DE MUERTE",
      "VEHICLE",
      "SMOKE",
      "TRANSPORT",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 16,
      "l": "6+",
      "co": 5
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 245
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Láser Godhammer (Godhammer Lascannon)",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "bs": "2+",
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ]
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Combate",
        "a": 6,
        "ws": "4+",
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Rampa de Asalto: En tu fase de Movimiento, tras realizar un movimiento normal, las unidades embarcadas pueden desembarcar y declarar una carga este mismo turno.",
      "Poder del Espíritu Máquina: En cada fase de disparo, los ataques a distancia de esta unidad pueden: Repetir una tirada de impactar y Repetir una tirada de herir.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 14 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "El vehículo de asedio y transporte definitivo del Ala de Muerte con cañones láser Godhammer."
  },
  {
    "id": "sm_land_raider_crusader",
    "name": "Land Raider Cruzado",
    "originalName": "Land Raider Crusader",
    "role": "Vehículo / Transporte de Asalto",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "HUMO",
      "TRANSPORTE",
      "ALA DE MUERTE",
      "EXPLOSIVOS",
      "VEHICLE",
      "SMOKE",
      "TRANSPORT",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 16,
      "l": "6+",
      "co": 5
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 230
      }
    ],
    "rangedWeapons": [
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "bs": "2+",
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ]
      },
      {
        "name": "Bólter Huracán (Hurricane Bolter)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 6 (Rapid Fire 6)"
        ]
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Cañón de Asalto Acoplado (Twin Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1",
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Combate",
        "a": 6,
        "ws": "4+",
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Rampa de Asalto: En tu fase de Movimiento, tras realizar un movimiento normal, las unidades embarcadas pueden desembarcar y declarar una carga este mismo turno.",
      "Furia del Espíritu Máquina: Los ataques a distancia de esta unidad dirigidos contra un objetivo a 12\" o menos obtienen la regla [Impactos Letales].",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 16 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Variante creada expresamente para asaltar con escuadras masivas de Exterminadores."
  },
  {
    "id": "sm_land_raider_redeemer",
    "name": "Land Raider Redentor",
    "originalName": "Land Raider Redeemer",
    "role": "Vehículo / Transporte Flamígero",
    "wing": "Ala de Muerte",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "HUMO",
      "TRANSPORTE",
      "ALA DE MUERTE",
      "VEHICLE",
      "SMOKE",
      "TRANSPORT",
      "DEATHWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "12\"",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 16,
      "l": "6+",
      "co": 5
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 245
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Tormenta Ígnea (Flamestorm Cannon)",
        "range": "12\"",
        "a": 4,
        "bs": "-",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ]
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "bs": "2+",
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ]
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Cañón de Asalto Acoplado (Twin Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1",
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Combate",
        "a": 6,
        "ws": "4+",
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Rampa de Asalto: En tu fase de Movimiento, tras realizar un movimiento normal, las unidades embarcadas pueden desembarcar y declarar una carga este mismo turno.",
      "Cólera del Espíritu Máquina: Los ataques a distancia de esta unidad dirigidos contra un objetivo a 12\" o menos obtienen la regla [Heridas Devastadoras: No Monstruos/Vehículos].",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 14 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "El destructor de trincheras definitivo con lanzallamas de plasma pesado."
  },
  {
    "id": "sm_repulsor",
    "name": "Tanque Repulsor",
    "originalName": "Repulsor",
    "role": "Vehículo / Transporte Pesado",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "TRANSPORTE",
      "DESLIZADOR",
      "VEHICLE",
      "TRANSPORT",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "3+",
      "inv": "-",
      "h": 16,
      "l": "6+",
      "co": 5
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 190
      }
    ],
    "rangedWeapons": [
      {
        "name": "Batería Defensiva (Defensive Array)",
        "range": "24\"",
        "a": 18,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Megacañón Gatling Onslaught Pesado",
        "range": "24\"",
        "a": 12,
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras: No Monstruos/Vehículos",
          "Impactos Sostenidos 2: No Monstruos/Vehículos"
        ]
      },
      {
        "name": "Misil Cazador-Exterminador (Hunter-slayer Missile)",
        "range": "48\"",
        "a": 1,
        "bs": "2+",
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Fuego Indirecto (Indirect Fire)",
          "Un Solo Uso (One Shot)"
        ]
      },
      {
        "name": "Garras Láser (Las-talon)",
        "range": "36\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1",
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 6,
        "ws": "4+",
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Embarque de Combate: En la fase de Carga del oponente, cuando una unidad enemiga declare sus objetivos de carga, puedes seleccionar una unidad amiga no trabada a 6\" o menos de este transporte: esa unidad amiga puede embarcar inmediatamente en él.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 14 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Transporte gravítico blindado multipropósito."
  },
  {
    "id": "sm_repulsor_executioner",
    "name": "Repulsor Ejecutor",
    "originalName": "Repulsor Executioner",
    "role": "Vehículo / Cazador de Tanques Pesado",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "TRANSPORTE",
      "DESLIZADOR",
      "VEHICLE",
      "TRANSPORT",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "3+",
      "inv": "-",
      "h": 16,
      "l": "6+",
      "co": 5
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 265
      }
    ],
    "rangedWeapons": [
      {
        "name": "Batería Defensiva (Defensive Array)",
        "range": "24\"",
        "a": 18,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Destructor Láser Pesado (Heavy Laser Destroyer)",
        "range": "72\"",
        "a": 2,
        "bs": "3+",
        "f": 16,
        "ap": -4,
        "d": "D6+4",
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Megacañón Gatling Onslaught Pesado",
        "range": "24\"",
        "a": 12,
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 2: No Monstruos/Vehículos",
          "Heridas Devastadoras: No Monstruos/Vehículos"
        ]
      },
      {
        "name": "Macroincinerador de Plasma – Estándar",
        "range": "36\"",
        "a": "D3+3",
        "bs": "3+",
        "f": 9,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Macroincinerador de Plasma – Sobrecarga",
        "range": "36\"",
        "a": "D3+3",
        "bs": "3+",
        "f": 10,
        "ap": -4,
        "d": 3,
        "keywords": [
          "Explosión 1",
          "Peligrosa (Hazardous)"
        ]
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 6,
        "ws": "4+",
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Ejecutor: Los ataques a distancia de esta unidad que tengan como objetivo una unidad que no esté por debajo de la mitad de sus efectivos tienen un modificador de +1 a las tiradas de impactar.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 7 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "El destructor acorazado más potente de los Marines Espaciales."
  },
  {
    "id": "sm_gladiator_lancer",
    "name": "Gladiator Lancero",
    "originalName": "Gladiator Lancer",
    "role": "Vehículo / Antitanque",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "VEHÍCULO",
      "DESLIZADOR",
      "VEHICLE",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "10\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 12,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 165
      }
    ],
    "rangedWeapons": [
      {
        "name": "Destructor Láser (Laser Destroyer)",
        "range": "72\"",
        "a": 2,
        "bs": "3+",
        "f": 14,
        "ap": -3,
        "d": "D6+3",
        "keywords": [
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Batería Defensiva (Defensive Array)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 6 (Rapid Fire 6)"
        ]
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Ópticas Aquilon: Los ataques a distancia de esta unidad dirigidos contra una unidad MONSTRUO o VEHÍCULO pueden: Repetir una tirada para impactar, Repetir una tirada para herir y Repetir una tirada de daño.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Cazatanques de larga distancia."
  },
  {
    "id": "sm_stormraven_gunship",
    "name": "Cañonera Stormraven",
    "originalName": "Stormraven Gunship",
    "role": "Aeronave / Transporte Pesado",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "AERONAVE",
      "VEHÍCULO",
      "TRANSPORTE",
      "VOLAR",
      "ALA DE CUERVO",
      "AIRCRAFT",
      "VEHICLE",
      "TRANSPORT",
      "FLY",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "14\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 14,
      "l": "6+",
      "co": "0"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 280
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Huracán (Hurricane Bolter)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 6 (Rapid Fire 6)"
        ]
      },
      {
        "name": "Lanzamisiles Stormstrike",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": 3,
        "keywords": []
      },
      {
        "name": "Lanzamisiles Typhoon – Fragmentación",
        "range": "48\"",
        "a": 6,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Lanzamisiles Typhoon – Perforante",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Cañón de Asalto Acoplado (Twin Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Multifusión Acoplada (Twin Multi-melta)",
        "range": "18\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Acoplada (Twin-linked)",
          "Fusión 3 (Melta 3)"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      },
      {
        "name": "Cañón de Plasma Pesado Acoplado – Estándar",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 9,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Pesada (Heavy)",
          "Explosión 1",
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Cañón de Plasma Pesado Acoplado – Sobrecarga",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Pesada (Heavy)",
          "Acoplada (Twin-linked)",
          "Explosión 1",
          "Peligrosa (Hazardous)"
        ]
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 6,
        "ws": "4+",
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Resistencia Blindada: Los ataques dirigidos contra esta unidad reducen la característica de Daño sufrida en 1 (hasta un mínimo de 1).",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 12 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Turbinas Atronadoras: Propulsión de alta potencia que otorga gran movilidad sobre el campo de batalla."
    ],
    "leaderOf": [],
    "notes": "Transporte aéreo de asalto acorazado."
  },
  {
    "id": "sm_stormtalon_gunship",
    "name": "Cañonera Stormtalon",
    "originalName": "Stormtalon Gunship",
    "role": "Aeronave / Escolta",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "AERONAVE",
      "VEHÍCULO",
      "VOLAR",
      "ALA DE CUERVO",
      "AIRCRAFT",
      "VEHICLE",
      "FLY",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "-",
      "r": 8,
      "sv": "3+",
      "inv": "-",
      "h": 10,
      "l": "6+",
      "co": "-"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 165
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzamisiles Skyhammer",
        "range": "48\"",
        "a": 3,
        "bs": "3+",
        "f": 8,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ]
      },
      {
        "name": "Cañón de Asalto Acoplado (Twin Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "bs": "3+",
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Lanzamisiles Typhoon – Fragmentación",
        "range": "48\"",
        "a": 6,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ]
      },
      {
        "name": "Lanzamisiles Typhoon – Perforante",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Pasada de Ametrallamiento: Los ataques a distancia de esta unidad dirigidos contra unidades que no tengan la clave VOLAR tienen un bonificador de +1 a las tiradas de impactar.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Turbinas Atronadoras: Propulsión de alta potencia que otorga gran movilidad sobre el campo de batalla."
    ],
    "leaderOf": [],
    "notes": "Caza de apoyo aéreo cercano."
  },
  {
    "id": "sm_stormhawk_interceptor",
    "name": "Interceptor Stormhawk",
    "originalName": "Stormhawk Interceptor",
    "role": "Aeronave / Superioridad Aérea",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "AERONAVE",
      "VEHÍCULO",
      "VOLAR",
      "ALA DE CUERVO",
      "AIRCRAFT",
      "VEHICLE",
      "FLY",
      "RAVENWING",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "-",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 10,
      "l": "6+",
      "co": "-"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 155
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Tormenta Icarus (Icarus Stormcannon)",
        "range": "48\"",
        "a": 6,
        "bs": "3+",
        "f": 7,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ]
      },
      {
        "name": "Garras Láser (Las-talon)",
        "range": "36\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Lanzamisiles Skyhammer",
        "range": "48\"",
        "a": 3,
        "bs": "3+",
        "f": 8,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ]
      },
      {
        "name": "Cañón de Asalto Acoplado (Twin Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "bs": "3+",
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1",
          "Acoplada (Twin-linked)"
        ]
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ]
      },
      {
        "name": "Lanzamisiles Typhoon – Perforante",
        "range": "48\"",
        "a": 2,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": []
      },
      {
        "name": "Lanzamisiles Typhoon – Fragmentación",
        "range": "48\"",
        "a": 6,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Interceptor: Los ataques a distancia de esta unidad dirigidos contra unidades con la clave VOLAR tienen un bonificador de +1 a las tiradas de impactar.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Turbinas Atronadoras: Propulsión de alta potencia que otorga gran movilidad sobre el campo de batalla."
    ],
    "leaderOf": [],
    "notes": "Caza de combate para derribar aeronaves rivales."
  },
  {
    "id": "sm_intercessors",
    "name": "Escuadra de Intercesores",
    "originalName": "Intercessor Squad",
    "role": "Línea / Infantería",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "LÍNEA",
      "TACTICUS",
      "INFANTRY",
      "BATTLELINE",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 85
      },
      {
        "models": 10,
        "points": 170
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Rifle Bólter – Fuego Concentrado (Focused Fire)",
        "range": "24\"",
        "a": 1,
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Pesada (Heavy)"
        ]
      },
      {
        "name": "Rifle Bólter – Saturación (Saturation)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Asalto (Assault)",
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Lanzagranadas – Fragmentación",
        "range": "24\"",
        "a": 4,
        "bs": "3+",
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ]
      },
      {
        "name": "Lanzagranadas – Perforante",
        "range": "24\"",
        "a": 1,
        "bs": "3+",
        "f": 10,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ]
      },
      {
        "name": "Lanzallamas de Mano (Hand Flamer)",
        "range": "9\"",
        "a": 3,
        "bs": "-",
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Combate",
        "a": 5,
        "ws": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Cuchillos y Puños de Combate",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      }
    ],
    "abilities": [
      "Disciplina de Bólter: En tu fase de Disparo, si la unidad o su objetivo están en alcance de un objetivo, sus ataques a distancia tienen +1 a la tirada para impactar.",
      "Pilar Táctico: Estar trabado en combate o acobardado no impide que esta unidad sea elegible para iniciar acciones tácticas secundarias.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Apotecario, Judiciar o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Núcleo versátil de la infantería del Capítulo."
  },
  {
    "id": "sm_assault_intercessors",
    "name": "Escuadra de Intercesores de Asalto",
    "originalName": "Assault Intercessor Squad",
    "role": "Línea / Combate",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "LÍNEA",
      "TACTICUS",
      "ASALTO",
      "INFANTRY",
      "BATTLELINE",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 85
      },
      {
        "models": 10,
        "points": 170
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzallamas de Mano (Hand Flamer)",
        "range": "9\"",
        "a": 3,
        "bs": "-",
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Torrente (Torrent)"
        ]
      },
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": []
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Combate",
        "a": 4,
        "ws": "3+",
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": []
      },
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Combate",
        "a": 3,
        "ws": "4+",
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ]
      }
    ],
    "abilities": [
      "Intercesión Selectiva: Si esta unidad realizó un movimiento de carga este turno, las armas de combate cuerpo a cuerpo de sus miniaturas obtienen la regla [Lanza].",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Apotecario, Judiciar o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Infantería de choque cuerpo a cuerpo."
  },
  {
    "id": "sm_hellblasters",
    "name": "Escuadra de Revientainfiernos (Hellblasters)",
    "originalName": "Hellblaster Squad",
    "role": "Infantería / Plasma",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "TACTICUS",
      "PLASMA",
      "INFANTRY",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 115
      },
      {
        "models": 10,
        "points": 230
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Incinerador de Plasma – Estándar",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Asalto (Assault)"
        ]
      },
      {
        "name": "Incinerador de Plasma – Sobrecarga",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Asalto (Assault)",
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Peligrosa (Hazardous)"
        ]
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Ritos de Apaciguamiento Térmico: Esta unidad tiene un bonificador de +1 a las tiradas de armas Peligrosas (Hazardous) realizadas para sus Incineradores de Plasma y Pistolas de Plasma.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Apotecario o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Especialistas devotos del plasma, en perfecta sinergia con el Capítulo."
  },
  {
    "id": "sm_infernus",
    "name": "Escuadra Infernus",
    "originalName": "Infernus Squad",
    "role": "Infantería / Lanzallamas",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "TACTICUS",
      "LANZALLAMAS",
      "INFANTRY",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 95
      },
      {
        "models": 10,
        "points": 190
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Pirólisis (Pyreblaster)",
        "range": "12\"",
        "a": 3,
        "bs": "-",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1",
          "Torrente (Torrent)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Expulsados de la Cobertura: En tu fase de Disparo, tras disparar con esta unidad, selecciona una unidad enemiga alcanzada por sus ataques. Las unidades amigas ADEPTUS ASTARTES ignoran cobertura al atacar a esa unidad enemiga hasta el final del turno.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Apotecario, Judiciar o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Purificadores con lanzallamas de alta presión."
  },
  {
    "id": "sm_infiltrators",
    "name": "Escuadra de Infiltradores",
    "originalName": "Infiltrator Squad",
    "role": "Infantería / Sigilo",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "PHOBOS",
      "INFILTRADOR",
      "HUMO",
      "INFANTRY",
      "SMOKE",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 85
      },
      {
        "models": 10,
        "points": 150
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Carabina Bólter de Tirador (Marksman Bolt Carbine)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Precisión (Precision)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Omni-interferidores (Omni-scramblers): En tu fase de Disparo, puedes seleccionar una unidad enemiga visible a 18\" o menos de esta unidad. Dicha unidad queda detectada: mientras esté detectada, su rango de detección aumenta en +3\" (y las unidades enemigas no pueden ser desplegadas como refuerzos o reservas a 12\" o menos de esta unidad).",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Teniente con Armadura Phobos.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "La mejor unidad para denegar el despliegue rápido enemigo."
  },
  {
    "id": "sm_eradicators",
    "name": "Escuadra de Erradicadores",
    "originalName": "Eradicator Squad",
    "role": "Infantería Pesada / Fusión",
    "wing": "Compañía Verde",
    "isEpicHero": false,
    "keywords": [
      "INFANTERÍA",
      "GRAVIS",
      "FUSIÓN",
      "INFANTRY",
      "ADEPTUS ASTARTES",
      "IMPERIUM"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 100
      },
      {
        "models": 6,
        "points": 215
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "bs": "3+",
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ]
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "bs": "3+",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Pesada (Heavy)"
        ]
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Combate",
        "a": 3,
        "ws": "3+",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": []
      }
    ],
    "abilities": [
      "Destrucción Superpuesta: En tu fase de Disparo, selecciona una unidad enemiga. Las armas Bólter Pesado de esta unidad dirigidas contra ese objetivo obtienen [Impactos Sostenidos 1].",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Apotecario Biologis.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Cazadores acorazados en servoarmadura Gravis."
  },
  {
    "id": "sm_ancient",
    "name": "Anciano de Batalla (Astartes)",
    "originalName": "Ancient",
    "aliases": [
      "Ancient",
      "Anciano de Batalla (Astartes)",
      "Anciano de Batalla",
      "Ancient"
    ],
    "role": "Líder / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 40
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Rifle Bólter – Fuego Concentrado (Focused Fire)",
        "range": "24\"",
        "a": 1,
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Rifle Bólter – Saturación (Saturation)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Asalto (Assault)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Melee",
        "a": 4,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Melee",
        "a": 5,
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Alzad el Estandarte: Al final de tu fase de Movimiento, si esta unidad controla un marcador de objetivo, dicho objetivo queda asegurado hasta que una unidad enemiga lo controle, incluso si abandonas el marcador.",
      "Honor de la Compañía: Esta unidad tiene un bonificador de +1 a su Control de Objetivo (OC).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra Desolación (Desolation Squad)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)",
      "Escuadra de Veteranos de Vanguardia (Vanguard Veterans)"
    ],
    "notes": "Portador del Estandarte del Capítulo que inspira a las líneas a resistir hasta el final."
  },
  {
    "id": "sm_apothecary",
    "name": "Apotecario",
    "originalName": "Apothecary",
    "aliases": [
      "Apothecary",
      "Apotecario",
      "Apotecario",
      "Apothecary"
    ],
    "role": "Líder / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 45
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Absolvor (Absolvor Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Pistola Reductora (Reductor Pistol)",
        "range": "Melee",
        "a": 1,
        "f": 5,
        "ap": -4,
        "d": 2,
        "keywords": [
          "Ataques Adicionales (Extra Attacks)"
        ],
        "ws": "3+"
      },
      {
        "name": "Brazo Servoarmadura (Servo-armature)",
        "range": "Melee",
        "a": 4,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Narthecium: En tu fase de Mando, esta unidad cura D3+1 heridas a una miniatura herida de la escuadra.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Héroes de la Compañía (Company Heroes)",
      "Escuadra Desolación (Desolation Squad)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)"
    ],
    "notes": "Médico de combate encargado de recuperar la semilla genética y curar a los hermanos heridos."
  },
  {
    "id": "sm_apothecary_biologis",
    "name": "Apotecario Biologis",
    "originalName": "Apothecary Biologis",
    "aliases": [
      "Apothecary Biologis",
      "Apotecario Biologis",
      "Apotecario Biologis",
      "Apothecary Biologis"
    ],
    "role": "Líder / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 5,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 60
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Absolvor (Absolvor Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Brazo Servoarmadura (Servo-armature)",
        "range": "Melee",
        "a": 4,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Análisis Viviespectral de Objetivos: Los ataques de la unidad liderada tienen la habilidad [Impactos Letales: no vehículos].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Agresores (Aggressors)",
      "Escuadra de Erradicadores (Bólteres Pesados)",
      "Escuadra de Erradicadores (Rifles de Fusión)",
      "Escuadra de Intercesores Pesados (Heavy Intercessors)"
    ],
    "notes": "Especialista en bio-análisis en servoarmadura Gravis, analiza las debilidades del enemigo en tiempo real."
  },
  {
    "id": "sm_captain",
    "name": "Capitán",
    "originalName": "Captain",
    "aliases": [
      "Captain",
      "Capitán",
      "Capitán",
      "Captain"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 5,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 90
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Bólter Magistral (Master-crafted Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Asalto (Assault)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola Neo-volkite",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Melee",
        "a": 6,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Melee",
        "a": 5,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Perspicacia Estratégica: En tu fase de Mando, puedes seleccionar una doctrina de combate para que esté activa para esta unidad hasta tu próxima fase de Mando.",
      "Momento Cumbre (1 vez por batalla): En la fase de Combate, cuando esta unidad sea elegida para combatir, puedes activar esta habilidad. Si lo haces, hasta el final de la fase, los ataques cuerpo a cuerpo de esta miniatura aumentan sus Ataques en +3 y obtienen la regla [Heridas Devastadoras].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Héroes de la Compañía (Company Heroes)",
      "Escuadra Desolación (Desolation Squad)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)",
      "Guardia de Honor Victrix (Victrix Honour Guard)",
      "Escuadra de Veteranos de Vanguardia (Vanguard Veterans)"
    ],
    "notes": "Comandante de compañía veterano con armamento personalizable y gran maestría táctica."
  },
  {
    "id": "sm_captain_in_gravis_armour",
    "name": "Capitán con Armadura Gravis",
    "originalName": "Captain In Gravis Armour",
    "aliases": [
      "Captain In Gravis Armour",
      "Capitán con Armadura Gravis",
      "Capitán con Armadura Gravis",
      "Captain In Gravis Armour"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "3+",
      "inv": "4++",
      "h": 6,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 90
      }
    ],
    "rangedWeapons": [
      {
        "name": "Guantelete Bólter Tormenta (Boltstorm Gauntlet)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Master-crafted Heavy Bolt Rifle",
        "range": "30\"",
        "a": 2,
        "f": 6,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Pesada (Heavy)",
          "Asalto (Assault)",
          "Disparo Rápido 1 (Rapid Fire 1)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Guantelete Bólter Tormenta (Boltstorm Gauntlet)",
        "range": "Melee",
        "a": 5,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      },
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Melee",
        "a": 6,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      },
      {
        "name": "Hoja Reliquia (Relic Blade)",
        "range": "Melee",
        "a": 2,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Ataques Adicionales (Extra Attacks)"
        ],
        "ws": "2+"
      },
      {
        "name": "Espada Sierra Reliquia",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Ataques Adicionales (Extra Attacks)"
        ],
        "ws": "2+"
      },
      {
        "name": "Puño de Combate Reliquia",
        "range": "Melee",
        "a": 1,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Ataques Adicionales (Extra Attacks)"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Perspicacia Estratégica: En tu fase de Mando, puedes seleccionar una doctrina de combate para que esté activa para esta unidad hasta tu próxima fase de Mando.",
      "Negativa a Ceder: Cada vez que se asigne un ataque a esta miniatura, reduce el Daño recibido en 1 (hasta un mínimo de 1).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Agresores (Aggressors)",
      "Escuadra de Erradicadores (Bólteres Pesados)",
      "Escuadra de Erradicadores (Rifles de Fusión)",
      "Escuadra de Intercesores Pesados (Heavy Intercessors)"
    ],
    "notes": "Líder blindado casi inamovible diseñado para encabezar asaltos pesados."
  },
  {
    "id": "sm_captain_in_phobos_armour",
    "name": "Capitán con Armadura Phobos",
    "originalName": "Captain In Phobos Armour",
    "aliases": [
      "Captain In Phobos Armour",
      "Capitán con Armadura Phobos",
      "Capitán con Armadura Phobos",
      "Captain In Phobos Armour"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "4++",
      "h": 5,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 75
      }
    ],
    "rangedWeapons": [
      {
        "name": "Carabina Bólter Instigadora",
        "range": "24\"",
        "a": 1,
        "f": 4,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Precisión (Precision)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Cuchillo de Combate (Combat Knife)",
        "range": "Melee",
        "a": 6,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Precisión (Precision)",
          "Impactos Sostenidos 1"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Perspicacia Estratégica: En tu fase de Mando, puedes seleccionar una doctrina de combate para que esté activa para esta unidad hasta tu próxima fase de Mando.",
      "Fluidez Táctica (1 vez por ronda de batalla): En tu fase de Disparo, tras haber disparado, si esta unidad no está trabada en combate puede realizar un movimiento normal de hasta 6\".",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Eliminadores (Eliminators)",
      "Escuadra de Incursores (Incursors)",
      "Escuadra de Infiltradores (Infiltrators)",
      "Escuadra de Reivers",
      "Escuadra de Exploradores (Scouts)"
    ],
    "notes": "Comandante de infiltración y guerra de guerrillas con capa de camuflaje."
  },
  {
    "id": "sm_captain_with_jump_pack",
    "name": "Capitán con Retropropulsor",
    "originalName": "Captain With Jump Pack",
    "aliases": [
      "Captain With Jump Pack",
      "Capitán con Retropropulsor",
      "Capitán con Retropropulsor",
      "Captain With Jump Pack"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 5,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 90
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzallamas de Mano (Hand Flamer)",
        "range": "9\"",
        "a": 3,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Melee",
        "a": 8,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ],
        "ws": "2+"
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Melee",
        "a": 5,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      },
      {
        "name": "Arma Reliquia (Relic Weapon)",
        "range": "Melee",
        "a": 6,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      },
      {
        "name": "Martillo de Trueno (Thunder Hammer)",
        "range": "Melee",
        "a": 5,
        "f": 8,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Perspicacia Estratégica: En tu fase de Mando, puedes seleccionar una doctrina de combate para que esté activa para esta unidad hasta tu próxima fase de Mando.",
      "Ira del Ángel: Esta unidad tiene un bonificador de +1 a las tiradas de avance y tiradas de carga.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Intercesores de Asalto con Retropropulsor",
      "Veteranos de Vanguardia con Retropropulsor"
    ],
    "notes": "Comandante aéreo de asalto relámpago con alta movilidad."
  },
  {
    "id": "sm_chaplain",
    "name": "Capellán",
    "originalName": "Chaplain",
    "aliases": [
      "Chaplain",
      "Capellán",
      "Capellán",
      "Chaplain"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 4,
      "l": "5+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 60
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Absolvor (Absolvor Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Crozius Arcanum (Crozius Arcanum)",
        "range": "Melee",
        "a": 5,
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Hendedura 1 (Cleave 1)"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Letanía de Odio: Los ataques cuerpo a cuerpo de esta unidad tienen la habilidad [Lanza / Lance].",
      "Líder Espiritual (1 vez por ronda de batalla): Al inicio de cualquier fase, selecciona una unidad amigable de ADEPTUS ASTARTES a 6\" que esté acobardada; dicha unidad deja de estar acobardada inmediatamente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)",
      "Escuadra de Veteranos de Vanguardia (Vanguard Veterans)"
    ],
    "notes": "Líder espiritual y guardián del celo de batalla de los Ángeles Oscuros."
  },
  {
    "id": "sm_chaplain_with_jump_pack",
    "name": "Capellán con Retropropulsor",
    "originalName": "Chaplain With Jump Pack",
    "aliases": [
      "Chaplain With Jump Pack",
      "Capellán con Retropropulsor",
      "Capellán con Retropropulsor",
      "Chaplain With Jump Pack"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 4,
      "l": "5+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 75
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Absolvor (Absolvor Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Crozius Arcanum (Crozius Arcanum)",
        "range": "Melee",
        "a": 5,
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Hendedura 1 (Cleave 1)"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Letanía de Odio: Los ataques cuerpo a cuerpo de esta unidad tienen la habilidad [Lanza / Lance].",
      "Exhortación a la Rabia: Mientras esta unidad esté en su mitad de efectivos o menos, los ataques cuerpo a cuerpo de sus miniaturas obtienen la regla [Impactos Sostenidos 1].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Intercesores de Asalto con Retropropulsor",
      "Veteranos de Vanguardia con Retropropulsor"
    ],
    "notes": "Capellán aerotransportado que lidera asaltos aéreos infundiendo fervor fanático."
  },
  {
    "id": "sm_judiciar",
    "name": "Judiciar",
    "originalName": "Judiciar",
    "aliases": [
      "Judiciar",
      "Judiciar",
      "Judiciar",
      "Judiciar"
    ],
    "role": "Líder / Combate",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "4++",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 50
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Absolvor (Absolvor Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Hoja Reliquia Ejecutora (Executioner Relic Blade)",
        "range": "Melee",
        "a": 5,
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Precisión (Precision)",
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Tempormortis: Las miniaturas de esta unidad tienen la habilidad Ataca Primero (Fights First).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)",
      "Escuadra de Veteranos de Vanguardia (Vanguard Veterans)"
    ],
    "notes": "Verdugo silencioso armado con la Hoja de la Ejecución y el Tempormortis para forzar al enemigo a atacar último."
  },
  {
    "id": "sm_librarian",
    "name": "Bibliotecario",
    "originalName": "Librarian",
    "aliases": [
      "Librarian",
      "Bibliotecario",
      "Bibliotecario",
      "Librarian"
    ],
    "role": "Líder / Psíquico",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 75
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Castigo Divino (Smite) – Fuego Brujo Concentrado",
        "range": "24\"",
        "a": "D3+3",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Psíquica (Psychic)",
          "Peligrosa (Hazardous)"
        ],
        "bs": "3+"
      },
      {
        "name": "Castigo Divino (Smite) – Fuego Brujo",
        "range": "24\"",
        "a": "D6",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Psíquica (Psychic)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma Psíquica / de Fuerza (Force Weapon)",
        "range": "Melee",
        "a": 4,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Psíquica (Psychic)"
        ],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Velo del Tiempo (Psíquico Nivel 1): Cuando esta unidad sea elegida para avanzar, si no está Acobardada, puedes realizar un chequeo psíquico con 1D6: con 2+, añade +3\" a su tirada de avance y las armas de esta unidad obtienen la regla [Asalto].",
      "Cúpula de Fuerza (Psíquico Nivel 1): En tu fase de Movimiento, si esta unidad no está Acobardada, puedes realizar un chequeo psíquico con 1D6: con 2+, las miniaturas de esta unidad obtienen salvación invulnerable de 4+ hasta tu siguiente fase de Movimiento.",
      "Bibliotecario (Psíquico Nivel 1): Esta miniatura domina las disciplinas psíquicas de combate de los Adeptus Astartes.",
      "Capucha Psíquica: Esta unidad tiene No Hay Dolor 4+ contra ataques psíquicos y heridas mortales.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra Desolación (Desolation Squad)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)",
      "Escuadra de Veteranos de Vanguardia (Vanguard Veterans)"
    ],
    "notes": "Psíquico de batalla que desata los poderes de la Disformidad y proyecta campos de fuerza protectores."
  },
  {
    "id": "sm_librarian_in_phobos_armour",
    "name": "Bibliotecario con Armadura Phobos",
    "originalName": "Librarian In Phobos Armour",
    "aliases": [
      "Librarian In Phobos Armour",
      "Bibliotecario con Armadura Phobos",
      "Bibliotecario con Armadura Phobos",
      "Librarian In Phobos Armour"
    ],
    "role": "Líder / Psíquico",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 75
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Castigo Divino (Smite) – Fuego Brujo Concentrado",
        "range": "24\"",
        "a": "D3+3",
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)",
          "Psíquica (Psychic)",
          "Peligrosa (Hazardous)"
        ],
        "bs": "3+"
      },
      {
        "name": "Castigo Divino (Smite) – Fuego Brujo",
        "range": "24\"",
        "a": "D6",
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Psíquica (Psychic)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma Psíquica / de Fuerza (Force Weapon)",
        "range": "Melee",
        "a": 4,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Psíquica (Psychic)"
        ],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Mortaja Ilusoria (Psíquico Nivel 1): Cuando una unidad enemiga elija a esta unidad como blanco, si no está Acobardada, puedes realizar un chequeo psíquico con 1D6: con 2+, esta unidad solo puede ser objetivo de ataques a distancia a 12\" o menos.",
      "Visión del Alma (Psíquico Nivel 1): En tu fase de Disparo, si esta unidad no está Acobardada, puedes realizar un chequeo psíquico con 1D6: con 2+, las armas a distancia de esta unidad obtienen la regla [Ignora Cobertura] y repiten tiradas de impactar de 1.",
      "Bibliotecario (Psíquico Nivel 1): Esta miniatura domina las disciplinas psíquicas de combate de los Adeptus Astartes.",
      "Capucha Psíquica: Esta unidad tiene No Hay Dolor 4+ contra ataques psíquicos y heridas mortales.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Eliminadores (Eliminators)",
      "Escuadra de Incursores (Incursors)",
      "Escuadra de Infiltradores (Infiltrators)",
      "Escuadra de Reivers",
      "Escuadra de Exploradores (Scouts)"
    ],
    "notes": "Maestro de las sombras que oculta a las tropas de infiltración de los escáneres y ojos enemigos."
  },
  {
    "id": "sm_lieutenant",
    "name": "Teniente",
    "originalName": "Lieutenant",
    "aliases": [
      "Lieutenant",
      "Teniente",
      "Teniente",
      "Lieutenant"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 50
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Bólter Magistral (Master-crafted Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [],
        "bs": "2+"
      },
      {
        "name": "Pistola Neo-volkite",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Melee",
        "a": 5,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "2+"
      },
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Melee",
        "a": 5,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Melee",
        "a": 4,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Comandante de Semicompañía (1 vez por turno): Cuando una unidad CAPITÁN amiga active su habilidad Perspicacia Estratégica, puedes usar esta habilidad. Si lo haces, la unidad liderada por este Teniente también se beneficia de dicha habilidad.",
      "Precisión Táctica: Los ataques de las miniaturas de esta unidad obtienen la regla [Impactos Letales: No Monstruos/Vehículos].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra de Veteranos de Ferreaguardia (Bladeguard)",
      "Héroes de la Compañía (Company Heroes)",
      "Escuadra Desolación (Desolation Squad)",
      "Escuadra de Revientainfiernos (Hellblasters)",
      "Escuadra Infernus (Infernus Squad)",
      "Escuadra de Intercesores (Intercessor Squad)",
      "Escuadra de Veteranos de Retaguardia (Sternguard)",
      "Camaradas del Círculo Interior (Inner Circle Companions)",
      "Escuadra de Veteranos de Vanguardia (Vanguard Veterans)"
    ],
    "notes": "Oficial táctico que otorga impactos letales a la escuadra y permite disparar y cargar tras retirarse."
  },
  {
    "id": "sm_lieutenant_in_phobos_armour",
    "name": "Teniente con Armadura Phobos",
    "originalName": "Lieutenant In Phobos Armour",
    "aliases": [
      "Lieutenant In Phobos Armour",
      "Teniente con Armadura Phobos",
      "Teniente con Armadura Phobos",
      "Lieutenant In Phobos Armour"
    ],
    "role": "Líder",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 40
      }
    ],
    "rangedWeapons": [
      {
        "name": "Carabina Bólter Magistral",
        "range": "24\"",
        "a": 2,
        "f": 4,
        "ap": 0,
        "d": 2,
        "keywords": [],
        "bs": "2+"
      },
      {
        "name": "Pistola Bólter de Fabricación Especial",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Precisión (Precision)",
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Cuchillas Monomoleculares de Combate",
        "range": "Melee",
        "a": 6,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1",
          "Precisión (Precision)"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Comandante de Semicompañía (1 vez por turno): Cuando una unidad CAPITÁN amiga active su habilidad Perspicacia Estratégica, puedes usar esta habilidad. Si lo haces, la unidad liderada por este Teniente también se beneficia de dicha habilidad.",
      "Precisión Táctica: Los ataques de las miniaturas de esta unidad obtienen la regla [Impactos Letales: No Monstruos/Vehículos].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Eliminadores (Eliminators)",
      "Escuadra de Incursores (Incursors)",
      "Escuadra de Infiltradores (Infiltrators)",
      "Escuadra de Reivers"
    ],
    "notes": "Líder ágil de exploración que permite disparar y recolocarse de inmediato."
  },
  {
    "id": "sm_lieutenant_with_combi_weapon",
    "name": "Teniente con Arma Combinada",
    "originalName": "Lieutenant With Combi-weapon",
    "aliases": [
      "Lieutenant With Combi-weapon",
      "Teniente con Arma Combinada",
      "Teniente con Arma Combinada",
      "Lieutenant With Combi-weapon"
    ],
    "role": "Agente Solitario",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 85
      }
    ],
    "rangedWeapons": [
      {
        "name": "Combiarma – Bólter (Combi-weapon - Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Asalto (Assault)"
        ],
        "bs": "2+"
      },
      {
        "name": "Combiarma – Lanzallamas",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Asalto (Assault)",
          "Explosión 1"
        ],
        "bs": "-"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Cuchillas Gemelas de Combate",
        "range": "Melee",
        "a": 6,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Objetivo Prioritario Identificado (1 vez por batalla): En tu fase de Mando, puedes activar esta habilidad. Si lo haces, selecciona un elemento de escenografía visible: las unidades amigas ADEPTUS ASTARTES repiten las tiradas para herir de 1 contra enemigos en dicho elemento (o repiten todas las tiradas de herir si el enemigo está en su mitad de efectivos o menos).",
      "Evadir y Sobrevivir (1 vez por fase): En la fase de Movimiento del enemigo, cuando una unidad enemiga termine un movimiento a 8\" o menos de esta unidad, si no está trabada en combate, esta unidad puede realizar un movimiento normal de hasta 6\".",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [],
    "notes": "Operativo solitario experto en emboscadas contra enemigos prioritarios."
  },
  {
    "id": "sm_techmarine",
    "name": "Tecnomarine",
    "originalName": "Techmarine",
    "aliases": [
      "Techmarine",
      "Tecnomarine",
      "Tecnomarine",
      "Techmarine"
    ],
    "role": "Líder / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "2+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 55
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter de la Forja (Forge Bolter)",
        "range": "24\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1"
        ],
        "bs": "2+"
      },
      {
        "name": "Pistola Gravitatoria (Grav-pistol)",
        "range": "12\"",
        "a": 2,
        "f": 2,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Anti-Vehicle 2+",
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Hacha de Energía del Omnissiah y Servobrazo",
        "range": "Melee",
        "a": 5,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Tecnomarine: Mientras esta miniatura esté a 3\" o menos de una unidad VEHÍCULO ADEPTUS ASTARTES amiga, esta miniatura obtiene la habilidad Agente Solitario (Lone Operative).",
      "Bendiciones del Omnissiah: En tu fase de Movimiento, al inicio o final del movimiento de esta unidad, puedes seleccionar una unidad VEHÍCULO ADEPTUS ASTARTES amiga a 3\" o menos: ese vehículo recupera 1D3 heridas perdidas y sus armas obtienen un bonificador de +1 a las tiradas de impactar hasta tu siguiente fase de Movimiento.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Armadura Artesanal: Armadura magistral forjada por los maestros artífices del Capítulo que otorga Salvación 2+."
    ],
    "leaderOf": [
      "Escuadra de Intercesores de Asalto (Assault Intercessors)",
      "Escuadra Desolación (Desolation Squad)",
      "Escuadra de Intercesores (Intercessor Squad)"
    ],
    "notes": "Sacerdote del Mechanicus que repara tanques y dreadnoughts y potencia su puntería."
  },
  {
    "id": "sm_heavy_intercessor_squad",
    "name": "Escuadra de Intercesores Pesados",
    "originalName": "Heavy Intercessor Squad",
    "aliases": [
      "Heavy Intercessor Squad",
      "Escuadra de Intercesores Pesados",
      "Escuadra de Intercesores Pesados",
      "Heavy Intercessor Squad"
    ],
    "role": "Línea / Resistencia",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 3,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 115
      },
      {
        "models": 10,
        "points": 230
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Rifle Bólter Pesado (Heavy Bolt Rifle)",
        "range": "30\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Pesada (Heavy)",
          "Disparo Rápido 1 (Rapid Fire 1)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Pesada (Heavy)",
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Inquebrantables ante el Enemigo: Mientras controle un marcador de objetivo, esta unidad tiene +1 a sus tiradas de salvación.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Apotecario Biologis.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Infantería de línea pesada en servoarmadura Gravis para asegurar objetivos bajo fuego intenso."
  },
  {
    "id": "sm_drop_pod",
    "name": "Cápsula de Desembarco (Drop Pod)",
    "originalName": "Drop Pod",
    "aliases": [
      "Drop Pod",
      "Cápsula de Desembarco (Drop Pod)",
      "Cápsula de Desembarco",
      "Drop Pod"
    ],
    "role": "Transporte Dedicado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "-",
      "r": 7,
      "sv": "3+",
      "inv": "-",
      "h": 8,
      "l": "6+",
      "co": "-"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 60
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "bs": "3+",
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ]
      }
    ],
    "meleeWeapons": [],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Asalto en Cápsula de Desembarco: Debe comenzar en Reservas Estratégicas. Puede descender en el primer turno mediante Ingress y desembarcar a sus tropas a más de 8\" del enemigo.",
      "Desembarco Completado: Una vez hayan desembarcado las tropas tras el impacto orbital, las unidades no pueden volver a embarcar en la cápsula.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 12 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Cápsula de Desembarco: Esta unidad se compone de 1 miniatura de Cápsula de Desembarco Astartes.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "Cápsula de descenso orbital que despliega tropas en el turno 1 sin restricciones de reservas."
  },
  {
    "id": "sm_impulsor",
    "name": "Transporte Ligero Impulsor",
    "originalName": "Impulsor",
    "aliases": [
      "Impulsor",
      "Transporte Ligero Impulsor",
      "Transporte Ligero Impulsor",
      "Impulsor"
    ],
    "role": "Transporte Dedicado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 70
      }
    ],
    "rangedWeapons": [
      {
        "name": "Batería de Misiles Bellicatus – Frag",
        "range": "48\"",
        "a": 4,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Batería de Misiles Bellicatus – Icarus",
        "range": "48\"",
        "a": 3,
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ],
        "bs": "3+"
      },
      {
        "name": "Batería de Misiles Bellicatus – Krak",
        "range": "48\"",
        "a": 1,
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Lanzagranadas Fragstorm (Fragstorm)",
        "range": "18\"",
        "a": 6,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2"
        ],
        "bs": "3+"
      },
      {
        "name": "Ametralladora Pesada Ironhail",
        "range": "36\"",
        "a": 3,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 3 (Rapid Fire 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólteres Tormenta (Storm Bolters)",
        "range": "24\"",
        "a": 4,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 4 (Rapid Fire 4)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Desembarco Rápido: En tu fase de Movimiento, tras finalizar un movimiento de avance, las tropas embarcadas pueden realizar un desembarco de choque.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 7 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "Transporte gravítico rápido que permite desembarcar a la infantería tras avanzar."
  },
  {
    "id": "sm_rhino",
    "name": "Transporte Oruga Rhino",
    "originalName": "Rhino",
    "aliases": [
      "Rhino",
      "Transporte Oruga Rhino",
      "Transporte Oruga Rhino",
      "Rhino"
    ],
    "role": "Transporte Dedicado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 10,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 70
      }
    ],
    "rangedWeapons": [
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Humo Envolvente (1 vez por fase): Puedes designar a este transporte con la estratagema Descarga de Humo con coste de -1 CP sin bloquear otros usos de la misma.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 12 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "El icónico vehículo de transporte blindado de los Marines Espaciales."
  },
  {
    "id": "sm_razorback",
    "name": "Transporte Blindado Razorback",
    "originalName": "Razorback",
    "aliases": [
      "Razorback",
      "Transporte Blindado Razorback",
      "Transporte Blindado Razorback",
      "Razorback"
    ],
    "role": "Transporte Dedicado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 10,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 95
      }
    ],
    "rangedWeapons": [
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Fuego de Apoyo: Tras disparar este transporte, los aliados que desembarcaron de él este turno pueden repetir las tiradas para herir contra la misma presa.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 6 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "Transporte armado con cañones láser pesados o bólteres pesados acoplados de apoyo."
  },
  {
    "id": "sm_relic_razorback",
    "name": "Razorback Reliquia",
    "originalName": "Relic Razorback",
    "aliases": [
      "Relic Razorback",
      "Razorback Reliquia",
      "Razorback Reliquia",
      "Relic Razorback"
    ],
    "role": "Transporte / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 10,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 105
      }
    ],
    "rangedWeapons": [
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón de Asalto Acoplado (Twin Assault Cannon)",
        "range": "24\"",
        "a": 6,
        "f": 6,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Fuego de Apoyo: Tras disparar este transporte, los aliados que desembarcaron de él este turno pueden repetir las tiradas para herir contra la misma presa.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 6 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "Antigua variante venerada equipada con armamento arcaico."
  },
  {
    "id": "sm_terrax_pattern_termite",
    "name": "Termita Patrón Terrax",
    "originalName": "Terrax-pattern Termite",
    "aliases": [
      "Terrax-pattern Termite",
      "Termita Patrón Terrax",
      "Termita Patrón Terrax",
      "Terrax-pattern Termite"
    ],
    "role": "Transporte de Asalto",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 14,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 200
      }
    ],
    "rangedWeapons": [
      {
        "name": "Combiarma – Damnatus",
        "range": "12\"",
        "a": 1,
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Combiarma – Infernus",
        "range": "12\"",
        "a": 3,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Explosión 1",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Combiarma – Purgatus",
        "range": "24\"",
        "a": 2,
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Cortador de Fusión Terrax",
        "range": "12\"",
        "a": 5,
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cargador Volkite Acoplado",
        "range": "18\"",
        "a": 2,
        "f": 5,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Taladro Térmita (Termite Drill)",
        "range": "Melee",
        "a": 6,
        "f": 14,
        "ap": -2,
        "d": "D3+3",
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Asalto Subterráneo Termita: Inicia la batalla en reservas y emerge de las profundidades del suelo a más de 8\" del enemigo para desembarcar a su escuadra.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 12 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "Taladradora subterránea que surge de las profundidades de la tierra tras las líneas enemigas."
  },
  {
    "id": "sm_firestrike_servo_turrets",
    "name": "Servotorretas Firestrike",
    "originalName": "Firestrike Servo-turrets",
    "aliases": [
      "Firestrike Servo-turrets",
      "Servotorretas Firestrike",
      "Servotorretas Firestrike",
      "Firestrike Servo-turrets"
    ],
    "role": "Apoyo de Fuego",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "2+",
      "inv": "-",
      "h": 6,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 80
      },
      {
        "models": 2,
        "points": 160
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Automático Firestrike Acoplado",
        "range": "48\"",
        "a": 4,
        "f": 9,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "2+"
      },
      {
        "name": "Garras Láser Firestrike Acopladas",
        "range": "36\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Masa Gravítica (Hovering Bulk)",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Protocolos Centinela (1 vez por fase): Al disparar Fuego de Fuga (Overwatch), sus ataques de disparo rápido impactan con un resultado no modificado de 4+.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Plataformas de defensa fija automatizadas con cañones automáticos o láser gemelos."
  },
  {
    "id": "sm_rapier_carrier",
    "name": "Plataforma de Armas Rapier",
    "originalName": "Rapier Carrier",
    "aliases": [
      "Rapier Carrier",
      "Plataforma de Armas Rapier",
      "Plataforma de Armas Rapier",
      "Rapier Carrier"
    ],
    "role": "Artillería Ligera",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "3\"",
      "r": 6,
      "sv": "2+",
      "inv": "-",
      "h": 6,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 90
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter (Boltgun)",
        "range": "24\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Gravitón (Graviton Cannon)",
        "range": "36\"",
        "a": 3,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Explosión 2",
          "Anti-Vehicle 2+",
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Destructor Láser (Laser Destroyer)",
        "range": "72\"",
        "a": 2,
        "f": 14,
        "ap": -3,
        "d": "D6+3",
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado Cuádruple (Quad Heavy Bolter)",
        "range": "36\"",
        "a": 6,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)",
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzador Cuádruple – Proyectiles Fragmentadores",
        "range": "24\"",
        "a": 4,
        "f": 9,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzador Cuádruple – Proyectiles Thunderfire",
        "range": "60\"",
        "a": "D3+6",
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Fuego Indirecto (Indirect Fire)",
          "Pesada (Heavy)",
          "Explosión 1"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Melee",
        "a": 2,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Salva Potente: Si esta unidad permanece estacionaria, sus armas con la regla [Pesada] obtienen además la regla [Impactos Letales].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Vehículo oruga ligero de artillería móvil de precisión."
  },
  {
    "id": "sm_tarantula_sentry_battery",
    "name": "Batería Centinela Tarantula",
    "originalName": "Tarantula Sentry Battery",
    "aliases": [
      "Tarantula Sentry Battery",
      "Batería Centinela Tarantula",
      "Batería Centinela Tarantula",
      "Tarantula Sentry Battery"
    ],
    "role": "Defensa Automatizada",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "-",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 30
      },
      {
        "models": 2,
        "points": 60
      },
      {
        "models": 3,
        "points": 90
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Melee",
        "a": 1,
        "f": 3,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "6+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Protocolos Centinela (1 vez por fase): Al disparar Fuego de Fuga (Overwatch), sus ataques de disparo rápido impactan con un resultado no modificado de 4+.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Torreta defensiva automatizada para negar corredores de avance."
  },
  {
    "id": "sm_aggressor_squad",
    "name": "Escuadra de Agresores (Aggressors)",
    "originalName": "Aggressor Squad",
    "aliases": [
      "Aggressor Squad",
      "Escuadra de Agresores (Aggressors)",
      "Escuadra de Agresores",
      "Aggressor Squad"
    ],
    "role": "Infantería Pesada / Asalto",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 90
      },
      {
        "models": 6,
        "points": 180
      }
    ],
    "rangedWeapons": [
      {
        "name": "Guanteletes Bólter Tormenta Automáticos",
        "range": "18\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Guanteletes Tormenta Ígnea – Combate Cerrado",
        "range": "12\"",
        "a": 3,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Torrente (Torrent)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "-"
      },
      {
        "name": "Guanteletes Tormenta Ígnea – Disparo",
        "range": "12\"",
        "a": 3,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Torrente (Torrent)",
          "Explosión 2"
        ],
        "bs": "-"
      },
      {
        "name": "Lanzagranadas Fragstorm",
        "range": "18\"",
        "a": 3,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Combate Acoplados",
        "range": "Melee",
        "a": 3,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Tormenta a Quemarropa: Los ataques contra enemigos a 9\" o menos de esta unidad obtienen +1 a la Fuerza (F).",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Apotecario Biologis.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Tropas Gravis armadas con guanteletes lanzallamas o bólteres tormenta para despejar hordas."
  },
  {
    "id": "sm_assault_intercessors_with_jump_packs",
    "name": "Intercesores de Asalto con Retropropulsor",
    "originalName": "Assault Intercessors With Jump Packs",
    "aliases": [
      "Assault Intercessors With Jump Packs",
      "Intercesores de Asalto con Retropropulsor",
      "Intercesores de Asalto con Retropropulsor",
      "Assault Intercessors With Jump Packs"
    ],
    "role": "Asalto Rápido",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 95
      },
      {
        "models": 10,
        "points": 190
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzallamas de Mano (Hand Flamer)",
        "range": "9\"",
        "a": 3,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Pistola Bólter Pesada (Heavy Bolt Pistol)",
        "range": "18\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Melee",
        "a": 4,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      },
      {
        "name": "Puño de Combate (Power Fist)",
        "range": "Melee",
        "a": 3,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "ws": "3+"
      },
      {
        "name": "Arma de Energía (Power Weapon)",
        "range": "Melee",
        "a": 4,
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Martillo de Furia: Tras finalizar una carga, cada miniatura en combate tira 1D6: con 4+ inflige 1 herida mortal al enemigo.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Infantería de salto que impacta a alta velocidad causando heridas mortales al cargar."
  },
  {
    "id": "sm_company_heroes",
    "name": "Héroes de la Compañía (Company Heroes)",
    "originalName": "Company Heroes",
    "aliases": [
      "Company Heroes",
      "Héroes de la Compañía (Company Heroes)",
      "Héroes de la Compañía",
      "Company Heroes"
    ],
    "role": "Guardia de Honor",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 4,
        "points": 125
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter Magistral (Master-crafted)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Rifle Bólter Magistral (Master-crafted)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Asalto (Assault)",
          "Disparo Rápido 1 (Rapid Fire 1)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado Magistral (Master-crafted)",
        "range": "36\"",
        "a": 4,
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Asalto (Assault)",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Pesada (Heavy)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Cuchillo de Combate (Combat Knife)",
        "range": "Melee",
        "a": 5,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      },
      {
        "name": "Arma de Energía Magistral (Master-crafted)",
        "range": "Melee",
        "a": 6,
        "f": 6,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Precisión (Precision)"
        ],
        "ws": "2+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Alzad el Estandarte: Al final de tu fase de Movimiento, si esta unidad controla un marcador de objetivo, dicho objetivo queda asegurado hasta que una unidad enemiga lo controle, incluso si abandonas el marcador.",
      "Escuadra de Mando: Los ataques dirigidos contra esta unidad sufren un penalizador de -1 a la tirada para herir.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Apotecario o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Escuadra de élite de veteranos selectos que escolta y protege al Capitán del Capítulo."
  },
  {
    "id": "sm_desolation_squad",
    "name": "Escuadra Desolación (Desolation)",
    "originalName": "Desolation Squad",
    "aliases": [
      "Desolation Squad",
      "Escuadra Desolación (Desolation)",
      "Escuadra Desolación",
      "Desolation Squad"
    ],
    "role": "Fuego Indirecto / Pesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 140
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzador Castellan (Castellan Launcher)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzacohetes Superfrag",
        "range": "48\"",
        "a": 4,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1",
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzacohetes Superkrak",
        "range": "48\"",
        "a": 1,
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzador Vengor (Vengor Launcher)",
        "range": "48\"",
        "a": 4,
        "f": 7,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Explosión 1",
          "Fuego Indirecto (Indirect Fire)",
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Ópticas de Puntería: Los ataques a distancia de esta unidad dirigidos contra un objetivo visible tienen la habilidad [Ignora Cobertura].",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Apotecario o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Especialistas armados con lanzacohetes Superfrag/Superkrak y misiles guiados Castellan."
  },
  {
    "id": "sm_eliminator_squad",
    "name": "Escuadra de Eliminadores (Eliminators)",
    "originalName": "Eliminator Squad",
    "aliases": [
      "Eliminator Squad",
      "Escuadra de Eliminadores (Eliminators)",
      "Escuadra de Eliminadores",
      "Eliminator Squad"
    ],
    "role": "Tiradores / Francotiradores",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 85
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Rifle Bólter de Francotirador (Bolt Sniper Rifle)",
        "range": "36\"",
        "a": 1,
        "f": 6,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Pesada (Heavy)",
          "Precisión (Precision)"
        ],
        "bs": "3+"
      },
      {
        "name": "Carabina Bólter Instigadora (Instigator Bolt Carbine)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Impactos Letales: No Monstruos/Vehículos",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Precisión (Precision)"
        ],
        "bs": "2+"
      },
      {
        "name": "Fusil Láser (Las Fusil)",
        "range": "36\"",
        "a": 1,
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Capas de Camaleonina: Esta unidad reduce en 3\" el rango de detección del enemigo (dificulta ser detectada a distancia).",
      "Ópticas y Munición Especial: Al disparar, elige entre ignorar la cobertura enemiga o aumentar en +6\" el rango de detección de un objetivo enemigo a 24\".",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Teniente con Armadura Phobos.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Francotiradores de sigilo en armadura Phobos armados con rifles bólter de precisión o cañones láser fusil."
  },
  {
    "id": "sm_eradicator_squad_with_melta_rifles",
    "name": "Escuadra de Erradicadores (Rifles de Fusión)",
    "originalName": "Eradicator Squad with Melta Rifles",
    "aliases": [
      "Eradicator Squad with Melta Rifles",
      "Escuadra de Erradicadores (Rifles de Fusión)",
      "Escuadra de Erradicadores",
      "Eradicator Squad with Melta Rifles"
    ],
    "role": "Antitanque / Pesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "5\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 100
      },
      {
        "models": 6,
        "points": 200
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Fusil de Fusión (Melta Rifle)",
        "range": "18\"",
        "a": 1,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Melta Rifle - Hunter",
        "range": "18\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ],
        "bs": "2+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Multifusión – Cazador (Hunter)",
        "range": "18\"",
        "a": 2,
        "f": 12,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "2+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Aniquilación Total: Los ataques a distancia de esta unidad pueden repetir las tiradas de daño.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Apotecario Biologis.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Variante especializada en fusiles de fusión de asalto térmico masivo contra blindajes pesados."
  },
  {
    "id": "sm_inceptor_squad",
    "name": "Escuadra de Inceptores (Inceptors)",
    "originalName": "Inceptor Squad",
    "aliases": [
      "Inceptor Squad",
      "Escuadra de Inceptores (Inceptors)",
      "Escuadra de Inceptores",
      "Inceptor Squad"
    ],
    "role": "Asalto Rápido / Salto",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 6,
      "sv": "3+",
      "inv": "-",
      "h": 3,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 130
      },
      {
        "models": 6,
        "points": 260
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólteres de Asalto (Assault Bolters)",
        "range": "18\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Asalto (Assault)",
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 2",
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Exterminadores de Plasma – Estándar",
        "range": "18\"",
        "a": 2,
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Asalto (Assault)",
          "Combate Cerrado (Close-Quarters)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Exterminadores de Plasma – Sobrecarga",
        "range": "18\"",
        "a": 2,
        "f": 8,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Peligrosa (Hazardous)",
          "Asalto (Assault)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Ceramita (Ceramite Fists)",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Descenso Meteórico: Si esta unidad realizó un movimiento de despliegue o Ingress este turno, sus ataques a distancia tienen +1 a la tirada para impactar.",
      "Salto Gravítico Parabólico: Al final de la fase de Combate enemiga, si esta unidad no está trabada, puede retirarse a Reservas Estratégicas.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Tropas Gravis con retropropulsores pesados que caen en picado disparando bólteres de asalto o exterminadores de plasma."
  },
  {
    "id": "sm_incursor_squad",
    "name": "Escuadra de Incursores (Incursors)",
    "originalName": "Incursor Squad",
    "aliases": [
      "Incursor Squad",
      "Escuadra de Incursores (Incursors)",
      "Escuadra de Incursores",
      "Incursor Squad"
    ],
    "role": "Exploración / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 90
      },
      {
        "models": 10,
        "points": 170
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Carabina Bólter Occulus (Occulus Bolt Carbine)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Ignora Cobertura (Ignores Cover)",
          "Asalto (Assault)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Cuchillas Gemelas de Combate",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 1"
        ],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Auspex Clase Divinador (1 vez por fase): En tu fase de Disparo, escanea a una unidad enemiga visible a 18\"; las unidades amigables que disparen contra ella repiten tiradas de impacto de 1.",
      "Mina de Pulso Electromagnético (1 vez por batalla): Causa D3 heridas mortales a una unidad enemiga a 6\" (o 2D3 heridas mortales si es un VEHÍCULO).",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Teniente con Armadura Phobos.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Puntería designadora mediante visores ópticos que otorgan bonificadores de impacto al resto del ejército."
  },
  {
    "id": "sm_reiver_squad",
    "name": "Escuadra de Reivers",
    "originalName": "Reiver Squad",
    "aliases": [
      "Reiver Squad",
      "Escuadra de Reivers",
      "Escuadra de Reivers",
      "Reiver Squad"
    ],
    "role": "Guerra Psicológica / Asalto",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "8\"",
      "r": 4,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 85
      },
      {
        "models": 10,
        "points": 165
      }
    ],
    "rangedWeapons": [
      {
        "name": "Carabina Bólter (Bolt Carbine)",
        "range": "18\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Precisión (Precision)",
          "Asalto (Assault)"
        ],
        "bs": "3+"
      },
      {
        "name": "Pistola Bólter de Fabricación Especial",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Precisión (Precision)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Cuchillo Monomolecular de Combate",
        "range": "Melee",
        "a": 4,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Precisión (Precision)"
        ],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Tropas de Terror (Aura): Mientras una miniatura enemiga esté a 3\" de esta unidad, su Control de Objetivo (CO) se reduce en 1.",
      "Asalto Aterrador: Al inicio de la fase de Combate, las unidades enemigas trabadas deben realizar un chequeo de Acobardamiento con penalizador de -1.",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Teniente con Armadura Phobos.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Especialistas del terror con máscaras de calavera que provocan chequeos de acobardamiento y niegan estratagemas."
  },
  {
    "id": "sm_scout_squad",
    "name": "Escuadra de Exploradores (Scouts)",
    "originalName": "Scout Squad",
    "aliases": [
      "Scout Squad",
      "Escuadra de Exploradores (Scouts)",
      "Escuadra de Exploradores",
      "Scout Squad"
    ],
    "role": "Infiltración / Guerrilla",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 4,
      "sv": "4+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 65
      },
      {
        "models": 10,
        "points": 120
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter (Boltgun)",
        "range": "24\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1",
          "Pesada (Heavy)"
        ],
        "bs": "4+"
      },
      {
        "name": "Lanzamisiles – Fragmentación (Frag)",
        "range": "48\"",
        "a": 4,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1",
          "Pesada (Heavy)"
        ],
        "bs": "4+"
      },
      {
        "name": "Lanzamisiles – Perforante (Krak)",
        "range": "48\"",
        "a": 1,
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": [],
        "bs": "4+"
      },
      {
        "name": "Escopeta Astartes (Astartes Shotgun)",
        "range": "18\"",
        "a": 2,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Asalto (Assault)",
          "Explosión 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Sniper Rifle",
        "range": "36\"",
        "a": 1,
        "f": 5,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Pesada (Heavy)",
          "Precisión (Precision)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Espada Sierra Astartes (Astartes Chainsword)",
        "range": "Melee",
        "a": 4,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      },
      {
        "name": "Cuchillo de Combate (Combat Knife)",
        "range": "Melee",
        "a": 3,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Recurso Flexible: Avanzar o retroceder no impide que esta unidad sea elegible para realizar acciones tácticas.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Infiltrados versátiles capaces de desaparecer del tablero al final del turno enemigo para reaparecer estratégicamente."
  },
  {
    "id": "sm_centurion_assault_squad",
    "name": "Escuadra de Asalto Centurión",
    "originalName": "Centurion Assault Squad",
    "aliases": [
      "Centurion Assault Squad",
      "Escuadra de Asalto Centurión",
      "Escuadra de Asalto Centurión",
      "Centurion Assault Squad"
    ],
    "role": "Asedio / Asalto Pesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "4\"",
      "r": 7,
      "sv": "2+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 150
      },
      {
        "models": 6,
        "points": 300
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólteres Centurión (Centurion Bolters)",
        "range": "24\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 3 (Rapid Fire 3)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Acoplado (Twin Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Explosión 1",
          "Acoplada (Twin-linked)",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Rifle de Fusión Acoplado (Twin Meltagun)",
        "range": "12\"",
        "a": 1,
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Taladros de Asedio (Siege Drills)",
        "range": "Melee",
        "a": 3,
        "f": 10,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Protocolos Aniquiladores: Los ataques cuerpo a cuerpo contra MONSTRUOS, VEHÍCULOS o FORTIFICACIONES tienen [Impactos Sostenidos 2].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Exoesqueletos blindados devastadores equipados con taladros de asedio y lanzallamas pesados."
  },
  {
    "id": "sm_centurion_devastator_squad",
    "name": "Escuadra de Devastadores Centurión",
    "originalName": "Centurion Devastator Squad",
    "aliases": [
      "Centurion Devastator Squad",
      "Escuadra de Devastadores Centurión",
      "Escuadra de Devastadores Centurión",
      "Centurion Devastator Squad"
    ],
    "role": "Fuego Pesado / Asedio",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "4\"",
      "r": 7,
      "sv": "2+",
      "inv": "-",
      "h": 4,
      "l": "6+",
      "co": 2
    },
    "pointsOptions": [
      {
        "models": 3,
        "points": 175
      },
      {
        "models": 6,
        "points": 350
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólteres Centurión (Centurion Bolters)",
        "range": "24\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 3 (Rapid Fire 3)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzamisiles de Centurión (Centurion Missile Launcher)",
        "range": "36\"",
        "a": 2,
        "f": 9,
        "ap": -2,
        "d": 3,
        "keywords": [
          "Explosión 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Gravitatorio (Grav-cannon)",
        "range": "24\"",
        "a": 3,
        "f": 6,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Anti-Vehicle 2+"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puños de Centurión (Centurion Fists)",
        "range": "Melee",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Protocolos Diezmadores: Los ataques a distancia repiten tiradas de impacto de 1 (o todas las tiradas de impacto si el objetivo está en un marcador).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Plataformas de armas andantes armadas con cañones láser, gravimétricos y lanzamisiles."
  },
  {
    "id": "sm_vanguard_veteran_squad",
    "name": "Escuadra de Veteranos de Vanguardia (a pie)",
    "originalName": "Vanguard Veteran Squad",
    "aliases": [
      "Vanguard Veteran Squad",
      "Escuadra de Veteranos de Vanguardia (a pie)",
      "Escuadra de Veteranos de Vanguardia",
      "Vanguard Veteran Squad"
    ],
    "role": "Combate Veterano",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "6\"",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 2,
      "l": "6+",
      "co": 1
    },
    "pointsOptions": [
      {
        "models": 5,
        "points": 120
      },
      {
        "models": 10,
        "points": 240
      }
    ],
    "rangedWeapons": [
      {
        "name": "Pistola Bólter (Bolt Pistol)",
        "range": "12\"",
        "a": 1,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Pistola Infernal (Inferno Pistol)",
        "range": "9\"",
        "a": 1,
        "f": 8,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas de Mano (Hand Flamer)",
        "range": "9\"",
        "a": 3,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "-"
      },
      {
        "name": "Pistola Gravitatoria (Grav-pistol)",
        "range": "12\"",
        "a": 2,
        "f": 2,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Combate Cerrado (Close-Quarters)",
          "Anti-Vehicle 2+"
        ],
        "bs": "3+"
      },
      {
        "name": "Pistola de Plasma – Estándar",
        "range": "12\"",
        "a": 1,
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      },
      {
        "name": "Pistola de Plasma – Sobrecarga",
        "range": "12\"",
        "a": 1,
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Peligrosa (Hazardous)",
          "Combate Cerrado (Close-Quarters)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Arma Reliquia Familiar (Heirloom Weapon)",
        "range": "Melee",
        "a": 4,
        "f": 5,
        "ap": -2,
        "d": 1,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Asalto de Vanguardia: Si esta unidad realizó un movimiento de carga este turno, sus ataques cuerpo a cuerpo obtienen [Impactos Letales].",
      "Unidad de Apoyo: Esta unidad puede contar con el apoyo conjunto de un segundo líder: Anciano, Judiciar o Teniente.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Asalto Furioso: Al cargar en combate cuerpo a cuerpo, esta unidad ataca con un ímpetu demoledor."
    ],
    "leaderOf": [],
    "notes": "Veteranos de combate cuerpo a cuerpo armados con escudos de tormenta y armas reliquia."
  },
  {
    "id": "sm_astraeus",
    "name": "Tanque Superpesado Astraeus",
    "originalName": "Astraeus",
    "aliases": [
      "Astraeus",
      "Tanque Superpesado Astraeus",
      "Tanque Superpesado Astraeus",
      "Astraeus"
    ],
    "role": "Superpesado / Titánico",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "2+",
      "inv": "5++",
      "h": 24,
      "l": "6+",
      "co": 8
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 550
      }
    ],
    "rangedWeapons": [
      {
        "name": "Láser Desgarrador Astraeus (Las-ripper)",
        "range": "36\"",
        "a": 2,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Ametralladora Pesada Ironhail",
        "range": "36\"",
        "a": 3,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 3 (Rapid Fire 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Erradicador de Plasma – Estándar",
        "range": "36\"",
        "a": 3,
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Explosión 2"
        ],
        "bs": "3+"
      },
      {
        "name": "Erradicador de Plasma – Sobrecarga",
        "range": "36\"",
        "a": 3,
        "f": 8,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Explosión 2",
          "Peligrosa (Hazardous)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Acoplado (Twin Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Macroacelerador Acoplado",
        "range": "72\"",
        "a": 12,
        "f": 10,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Fuego de Supresión: Si un enemigo es alcanzado por el cañón acelerador, queda suprimido y sufre -1 a sus tiradas para impactar hasta tu próximo turno.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Fortaleza gravítica superpesada equipada con cañones macroaceleradores colosales."
  },
  {
    "id": "sm_falchion",
    "name": "Superpesado Falchion",
    "originalName": "Falchion",
    "aliases": [
      "Falchion",
      "Superpesado Falchion",
      "Superpesado Falchion",
      "Falchion"
    ],
    "role": "Cazatitanes Superpesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "9\"",
      "r": 13,
      "sv": "2+",
      "inv": "-",
      "h": 24,
      "l": "6+",
      "co": 8
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 420
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ],
        "bs": "-"
      },
      {
        "name": "Destructor Láser (Laser Destroyer)",
        "range": "72\"",
        "a": 2,
        "f": 14,
        "ap": -3,
        "d": "D6+3",
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Cuádruple (Quad Lascannon)",
        "range": "48\"",
        "a": 4,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado Acoplado (Twin Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Volcán Falchion Acoplado",
        "range": "120\"",
        "a": "D3+1",
        "f": 24,
        "ap": -4,
        "d": 12,
        "keywords": [
          "Explosión 1",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Pesado Acoplado (Twin Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Acoplada (Twin-linked)",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Cazatitanes: Los disparos del Cañón Volcán contra unidades de MONSTRUO o VEHÍCULO tienen la habilidad [Heridas Devastadoras].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Blindado masivo de destrucción equipado con dos cañones láser volcán gemelos."
  },
  {
    "id": "sm_mastodon",
    "name": "Transporte de Asedio Mastodon",
    "originalName": "Mastodon",
    "aliases": [
      "Mastodon",
      "Transporte de Asedio Mastodon",
      "Transporte de Asedio Mastodon",
      "Mastodon"
    ],
    "role": "Transporte Superpesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "9\"",
      "r": 14,
      "sv": "2+",
      "inv": "-",
      "h": 30,
      "l": "6+",
      "co": 12
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 540
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Batería de Fusión de Asedio",
        "range": "24\"",
        "a": 6,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Batería Segadora Celestial (Skyreaper)",
        "range": "48\"",
        "a": 8,
        "f": 7,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Anti-Fly 4+"
        ],
        "bs": "3+"
      },
      {
        "name": "Culebrina Volkite",
        "range": "36\"",
        "a": 4,
        "f": 6,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Transporte Inviolable: Los ataques dirigidos contra este vehículo sufren un modificador de -1 al Daño recibido.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 45 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Monstruoso transporte de asedio capaz de transportar más de 40 miniaturas y resistir bombardeos orbitales."
  },
  {
    "id": "sm_land_raider_excelsior",
    "name": "Land Raider Excelsior",
    "originalName": "Land Raider Excelsior",
    "aliases": [
      "Land Raider Excelsior",
      "Land Raider Excelsior",
      "Land Raider Excelsior",
      "Land Raider Excelsior"
    ],
    "role": "Mando Blindado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "2+",
      "inv": "5++",
      "h": 16,
      "l": "6+",
      "co": 5
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 250
      }
    ],
    "rangedWeapons": [
      {
        "name": "Combiarma – Damnatus",
        "range": "12\"",
        "a": 1,
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Combiarma – Infernus",
        "range": "12\"",
        "a": 3,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 1"
        ],
        "bs": "-"
      },
      {
        "name": "Combiarma – Purgatus",
        "range": "24\"",
        "a": 2,
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Godhammer (Godhammer Lascannon)",
        "range": "48\"",
        "a": 2,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Cañón Gravitatorio (Grav-cannon)",
        "range": "24\"",
        "a": 3,
        "f": 6,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Anti-Vehicle 2+"
        ],
        "bs": "3+"
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Ritos de Batalla: Una vez por ronda de batalla, una unidad de tu ejército con esta habilidad puede reducir en 1 CP el coste de una estratagema que la designe como objetivo.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 12 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Tanque de mando venerado que coordina fuego balístico de precisión."
  },
  {
    "id": "sm_rhino_primaris",
    "name": "Rhino Primaris de Mando",
    "originalName": "Rhino Primaris",
    "aliases": [
      "Rhino Primaris",
      "Rhino Primaris de Mando",
      "Rhino Primaris de Mando",
      "Rhino Primaris"
    ],
    "role": "Mando / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "12\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 10,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 95
      }
    ],
    "rangedWeapons": [
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Rifle de Plasma Acoplado – Estándar",
        "range": "24\"",
        "a": 1,
        "f": 7,
        "ap": -2,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 1 (Rapid Fire 1)"
        ],
        "bs": "3+"
      },
      {
        "name": "Rifle de Plasma Acoplado – Sobrecarga",
        "range": "24\"",
        "a": 1,
        "f": 8,
        "ap": -3,
        "d": 2,
        "keywords": [
          "Disparo Rápido 1 (Rapid Fire 1)",
          "Peligrosa (Hazardous)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Auto-reparación: En tu fase de Mando, este vehículo repara y recupera automáticamente 1 herida perdida.",
      "Matriz de Comunicaciones Orbital: Mientras una unidad amigable de ADEPTUS ASTARTES esté a 6\", cada vez que uses una estratagema con ella, tira 1D6: con 5+ ganas 1 CP.",
      "Capacidad de Transporte: Este vehículo tiene capacidad para transportar 6 miniaturas de INFANTERÍA ADEPTUS ASTARTES (armaduras Gravis, Exterminador o Propulsores ocupan 2 espacios; Centuriones ocupan 3 espacios).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Vehículo de comunicaciones que solicita bombardeos orbitales devastadores."
  },
  {
    "id": "sm_gladiator_reaper",
    "name": "Gladiator Segador (Reaper)",
    "originalName": "Gladiator Reaper",
    "aliases": [
      "Gladiator Reaper",
      "Gladiator Segador (Reaper)",
      "Gladiator Segador",
      "Gladiator Reaper"
    ],
    "role": "Antipersona Blindado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 12,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 165
      }
    ],
    "rangedWeapons": [
      {
        "name": "Batería Defensiva (Defensive Array)",
        "range": "24\"",
        "a": 12,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 12 (Rapid Fire 12)"
        ],
        "bs": "3+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Megacañón Gatling Onslaught Pesado Acoplado",
        "range": "24\"",
        "a": 12,
        "f": 6,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Impactos Sostenidos 2: No Monstruos/Vehículos",
          "Acoplada (Twin-linked)",
          "Heridas Devastadoras: No Monstruos/Vehículos"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Cosecha Mortal: Los ataques a distancia contra unidades que no sean Monstruos ni Vehículos obtienen un bonificador de +1 al FP.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Tanque gravítico destructor de infantería armado con cañón rotatorio Tempest gemelo."
  },
  {
    "id": "sm_gladiator_valiant",
    "name": "Gladiator Valiente (Valiant)",
    "originalName": "Gladiator Valiant",
    "aliases": [
      "Gladiator Valiant",
      "Gladiator Valiente (Valiant)",
      "Gladiator Valiente",
      "Gladiator Valiant"
    ],
    "role": "Antitanque Blindado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 12,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 145
      }
    ],
    "rangedWeapons": [
      {
        "name": "Batería Defensiva (Defensive Array)",
        "range": "24\"",
        "a": 6,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 6 (Rapid Fire 6)"
        ],
        "bs": "3+"
      },
      {
        "name": "Garras Láser Acopladas (Twin Las-talon)",
        "range": "36\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Adquisición de Objetivo Prioritario: Los ataques a distancia contra enemigos situados a 12\" o menos tienen +1 a la Fuerza (F).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Tanque gravítico perforador con cañones láser pesados y cañones de fusión gemelos."
  },
  {
    "id": "sm_land_speeder",
    "name": "Land Speeder Clásico",
    "originalName": "Land Speeder",
    "aliases": [
      "Land Speeder",
      "Land Speeder Clásico",
      "Land Speeder Clásico",
      "Land Speeder"
    ],
    "role": "Exploración Rápida",
    "wing": "Ala de Cuervo",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "14\"",
      "r": 8,
      "sv": "3+",
      "inv": "-",
      "h": 9,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 105
      }
    ],
    "rangedWeapons": [
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Gatling Onslaught (Onslaught Gatling)",
        "range": "24\"",
        "a": 8,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras: No Monstruos/Vehículos"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Ígneo (Pyrecannon)",
        "range": "12\"",
        "a": 4,
        "f": 6,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Lanzamisiles Stormfury",
        "range": "48\"",
        "a": 1,
        "f": 10,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Impacto Blindado (Armoured Impact)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Pasada de Purgación: Tras disparar, este vehículo puede realizar un movimiento normal adicional de hasta 1D6\" (no podrá cargar este turno).",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Santuarios de Triangulación de Auspex: Red de sensores avanzados que anulan las ventajas de cobertura del enemigo."
    ],
    "leaderOf": [],
    "notes": "Deslizador ligero biplaza de reconocimiento y apoyo de fuego del Ala de Cuervo."
  },
  {
    "id": "sm_cerberus",
    "name": "Destructor Pesado Cerberus",
    "originalName": "Cerberus",
    "aliases": [
      "Cerberus",
      "Destructor Pesado Cerberus",
      "Destructor Pesado Cerberus",
      "Cerberus"
    ],
    "role": "Cazatanques Pesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 18,
      "l": "6+",
      "co": 6
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 270
      }
    ],
    "rangedWeapons": [
      {
        "name": "Array de Pulsos Neutrón Cerberus",
        "range": "48\"",
        "a": 3,
        "f": 16,
        "ap": -3,
        "d": "D3+6",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Torrente (Torrent)"
        ],
        "bs": "-"
      },
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Reactor de Arco Atomántico: En los turnos en que este blindado permanezca estacionario, sus ataques con el array neutrón obtienen [Impactos Letales].",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Plataforma de asedio armada con el devastador haz neutrón de fisión atómica."
  },
  {
    "id": "sm_kratos",
    "name": "Tanque Pesado Kratos",
    "originalName": "Kratos",
    "aliases": [
      "Kratos",
      "Tanque Pesado Kratos",
      "Tanque Pesado Kratos",
      "Kratos"
    ],
    "role": "Tanque de Asalto Pesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 18,
      "l": "6+",
      "co": 6
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 240
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Automático (Autocannon)",
        "range": "48\"",
        "a": 4,
        "f": 9,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Combiarma – Damnatus",
        "range": "12\"",
        "a": 1,
        "f": 9,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 2 (Melta 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Combiarma – Infernus",
        "range": "12\"",
        "a": 3,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 1"
        ],
        "bs": "-"
      },
      {
        "name": "Combiarma – Purgatus",
        "range": "24\"",
        "a": 2,
        "f": 7,
        "ap": -2,
        "d": 2,
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Lanzador Havoc (Havoc Launcher)",
        "range": "48\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ],
        "bs": "-"
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Cañón de Batalla Kratos – Explosión",
        "range": "36\"",
        "a": "D3+3",
        "f": 10,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Explosión 2"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón de Batalla Kratos – Perforante",
        "range": "36\"",
        "a": 1,
        "f": 18,
        "ap": -4,
        "d": "D3+6",
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Cañón de Fusión Blast-gun",
        "range": "24\"",
        "a": 4,
        "f": 12,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Acoplado (Twin Boltgun)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Disparo Rápido 1 (Rapid Fire 1)"
        ],
        "bs": "3+"
      },
      {
        "name": "Caliver Volkite",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cardanelle Volkite",
        "range": "36\"",
        "a": 9,
        "f": 9,
        "ap": 0,
        "d": 3,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "3+"
      },
      {
        "name": "Culebrina Volkite",
        "range": "36\"",
        "a": 4,
        "f": 6,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Rompe-Líneas: Al disparar en combate cerrado a quemarropa, ignora modificadores negativos a la HP y tiradas de impacto, y puede disparar armas de Explosión a enemigos no trabados con otras tropas amigables.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Coloso acorazado de la Gran Cruzada armado con cañón de batalla Kratos o melta explosivo."
  },
  {
    "id": "sm_predator_annihilator",
    "name": "Tanque Predator Aniquilador",
    "originalName": "Predator Annihilator",
    "aliases": [
      "Predator Annihilator",
      "Tanque Predator Aniquilador",
      "Tanque Predator Aniquilador",
      "Predator Annihilator"
    ],
    "role": "Antitanque Oruga",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 135
      }
    ],
    "rangedWeapons": [
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser Acoplado Predator",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Aniquilador: Los ataques a distancia contra unidades de MONSTRUO o VEHÍCULO pueden repetir las tiradas de daño.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Tanque de batalla armado con cañones láser gemelos en torreta y barquillas láser."
  },
  {
    "id": "sm_predator_destructor",
    "name": "Tanque Predator Destructor",
    "originalName": "Predator Destructor",
    "aliases": [
      "Predator Destructor",
      "Tanque Predator Destructor",
      "Tanque Predator Destructor",
      "Predator Destructor"
    ],
    "role": "Antipersona / Apoyo",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 140
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Cañón Automático Predator (Predator Autocannon)",
        "range": "48\"",
        "a": 4,
        "f": 9,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Destructor: Los ataques a distancia contra unidades de INFANTERÍA obtienen un bonificador de +1 al FP.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Tanque de batalla armado con cañón automático pesado Predator en torreta."
  },
  {
    "id": "sm_sicaran",
    "name": "Tanque de Batalla Sicaran",
    "originalName": "Sicaran",
    "aliases": [
      "Sicaran",
      "Tanque de Batalla Sicaran",
      "Tanque de Batalla Sicaran",
      "Sicaran"
    ],
    "role": "Blindado Rápido",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 11,
      "sv": "2+",
      "inv": "-",
      "h": 14,
      "l": "6+",
      "co": 4
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 180
      }
    ],
    "rangedWeapons": [
      {
        "name": "Multilanzador Arcus (Arcus Multi-launcher)",
        "range": "48\"",
        "a": 7,
        "f": 6,
        "ap": 0,
        "d": 2,
        "keywords": [
          "Fuego Indirecto (Indirect Fire)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Automático Patrón Herakles",
        "range": "48\"",
        "a": 6,
        "f": 9,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Batería de Plasma Omega – Estándar",
        "range": "36\"",
        "a": 6,
        "f": 9,
        "ap": -3,
        "d": 2,
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Batería de Plasma Omega – Sobrecarga",
        "range": "36\"",
        "a": 6,
        "f": 10,
        "ap": -3,
        "d": 3,
        "keywords": [
          "Peligrosa (Hazardous)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Rotatorio Castigador (Punisher)",
        "range": "36\"",
        "a": 18,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [
          "Heridas Devastadoras (Devastating Wounds)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Láser Neutrónico Venator",
        "range": "48\"",
        "a": 3,
        "f": 16,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Pesada (Heavy)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Punta de Lanza Blindada: Los ataques a distancia de este blindado pueden repetir una tirada de impacto, una de herida o una de daño.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Vehículo veloz de la Herejía equipado con cañones automáticos aceleradores Herakles."
  },
  {
    "id": "sm_tarantula_air_defence_battery",
    "name": "Batería Antiaérea Tarantula",
    "originalName": "Tarantula Air Defence Battery",
    "aliases": [
      "Tarantula Air Defence Battery",
      "Batería Antiaérea Tarantula",
      "Batería Antiaérea Tarantula",
      "Tarantula Air Defence Battery"
    ],
    "role": "Antiaéreo Automatizado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "-",
      "r": 5,
      "sv": "3+",
      "inv": "-",
      "h": 4,
      "l": "7+",
      "co": "0"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 70
      }
    ],
    "rangedWeapons": [
      {
        "name": "Misiles Antiaéreos Tarantula",
        "range": "48\"",
        "a": 3,
        "f": 7,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 2",
          "Anti-Aéreo 2+ (Anti-Fly 2+)"
        ],
        "bs": "4+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Casco Blindado (Armoured Hull)",
        "range": "Melee",
        "a": 1,
        "f": 4,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Programación Centinela (1 vez por fase): Puede disparar Fuego de Fuga (Overwatch) con coste de -1 CP sin impedir otros usos de la estratagema este turno.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Batería de misiles antiaéreos de bloqueo para derribar aeronaves enemigas."
  },
  {
    "id": "sm_typhon",
    "name": "Cañón de Asedio Typhon",
    "originalName": "Typhon",
    "aliases": [
      "Typhon",
      "Cañón de Asedio Typhon",
      "Cañón de Asedio Typhon",
      "Typhon"
    ],
    "role": "Bombardero Superpesado",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 18,
      "l": "6+",
      "co": 6
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 320
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón de Asedio Dreadhammer",
        "range": "24\"",
        "a": "D6+6",
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Explosión 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Impactos Sostenidos 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzallamas Pesado (Heavy Flamer)",
        "range": "12\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ],
        "bs": "-"
      },
      {
        "name": "Cañón Láser (Lascannon)",
        "range": "48\"",
        "a": 1,
        "f": 12,
        "ap": -3,
        "d": "D3+3",
        "keywords": [],
        "bs": "3+"
      },
      {
        "name": "Multifusión (Multi-melta)",
        "range": "18\"",
        "a": 2,
        "f": 10,
        "ap": -3,
        "d": "D3+2",
        "keywords": [
          "Fusión 3 (Melta 3)"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 6,
        "f": 8,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Demoledor de Fortalezas: Los ataques contra VEHÍCULOS ganan +1 F y +1 D; contra FORTIFICACIONES ganan +2 F y +2 D.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Mortero de asedio masivo diseñado para pulverizar fortificaciones y búnkeres enteros."
  },
  {
    "id": "sm_vindicator",
    "name": "Tanque de Asedio Vindicator",
    "originalName": "Vindicator",
    "aliases": [
      "Vindicator",
      "Tanque de Asedio Vindicator",
      "Tanque de Asedio Vindicator",
      "Vindicator"
    ],
    "role": "Demolición / Asedio",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "9\"",
      "r": 11,
      "sv": "2+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 185
      }
    ],
    "rangedWeapons": [
      {
        "name": "Cañón Demoledor (Demolisher Cannon)",
        "range": "24\"",
        "a": "D3+3",
        "f": 14,
        "ap": -3,
        "d": 4,
        "keywords": [
          "Explosión 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Pala de Asedio: Protege el chasis en combate cerrado y permite disparar armas de demolición contra unidades trabadas.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Tanque blindado con pala excavadora armada con el temido cañón Demoledor de alcance medio."
  },
  {
    "id": "sm_whirlwind",
    "name": "Tanque Lanzamisiles Whirlwind",
    "originalName": "Whirlwind",
    "aliases": [
      "Whirlwind",
      "Tanque Lanzamisiles Whirlwind",
      "Tanque Lanzamisiles Whirlwind",
      "Whirlwind"
    ],
    "role": "Artillería / Fuego Indirecto",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 10,
      "sv": "3+",
      "inv": "-",
      "h": 11,
      "l": "6+",
      "co": 3
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 175
      }
    ],
    "rangedWeapons": [
      {
        "name": "Misil Cazador-Asesino (Hunter-killer Missile)",
        "range": "48\"",
        "a": 1,
        "f": 14,
        "ap": -3,
        "d": "D3+3",
        "keywords": [
          "Un Solo Uso (One Shot)"
        ],
        "bs": "2+"
      },
      {
        "name": "Bólter Tormenta (Storm Bolter)",
        "range": "24\"",
        "a": 2,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Lanzamisiles Venganza Whirlwind",
        "range": "72\"",
        "a": 6,
        "f": 8,
        "ap": -2,
        "d": 2,
        "keywords": [
          "Fuego Indirecto (Indirect Fire)",
          "Explosión 2"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Orugas Blindadas (Armoured Tracks)",
        "range": "Melee",
        "a": 3,
        "f": 6,
        "ap": 0,
        "d": 1,
        "keywords": [],
        "ws": "4+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Bombardeo Punitivo: Si una unidad de INFANTERÍA enemiga es alcanzada por el lanzamisiles Whirlwind, debe superar un chequeo de Acobardamiento de inmediato.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Artillería de cohetes de bombardeo indirecto que castiga objetivos ocultos tras escenografía."
  },
  {
    "id": "sm_invictor_tactical_warsuit",
    "name": "Bípode Táctico Invictor",
    "originalName": "Invictor Tactical Warsuit",
    "aliases": [
      "Invictor Tactical Warsuit",
      "Bípode Táctico Invictor",
      "Bípode Táctico Invictor",
      "Invictor Tactical Warsuit"
    ],
    "role": "Bípode / Infiltración",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "10\"",
      "r": 9,
      "sv": "3+",
      "inv": "-",
      "h": 12,
      "l": "6+",
      "co": 4
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 135
      }
    ],
    "rangedWeapons": [
      {
        "name": "Lanzagranadas Fragstorm",
        "range": "18\"",
        "a": 3,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ],
        "bs": "3+"
      },
      {
        "name": "Bólter Pesado (Heavy Bolter)",
        "range": "36\"",
        "a": 3,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Incendium (Incendium Cannon)",
        "range": "12\"",
        "a": 4,
        "f": 6,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Torrente (Torrent)",
          "Explosión 2"
        ],
        "bs": "-"
      },
      {
        "name": "Ametralladoras Pesadas Ironhail",
        "range": "36\"",
        "a": 6,
        "f": 4,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Disparo Rápido 6 (Rapid Fire 6)"
        ],
        "bs": "3+"
      },
      {
        "name": "Cañón Automático Ironhail Acoplado",
        "range": "48\"",
        "a": 4,
        "f": 9,
        "ap": -1,
        "d": 3,
        "keywords": [
          "Acoplada (Twin-linked)"
        ],
        "bs": "3+"
      }
    ],
    "meleeWeapons": [
      {
        "name": "Puño Invictor (Invictor Fist)",
        "range": "Melee",
        "a": 5,
        "f": 12,
        "ap": -2,
        "d": 3,
        "keywords": [],
        "ws": "3+"
      }
    ],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Bípode de Asalto Avanzado: Al inicio de la primera ronda, designa un objetivo enemigo; los ataques contra dicha presa repiten tiradas de herida de 1.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes."
    ],
    "leaderOf": [],
    "notes": "Bípode de combate de despliegue avanzado que apoya y defiende a las fuerzas de infiltración Phobos."
  },
  {
    "id": "sm_hammerfall_bunker",
    "name": "Búnker Hammerfall",
    "originalName": "Hammerfall Bunker",
    "aliases": [
      "Hammerfall Bunker",
      "Búnker Hammerfall",
      "Búnker Hammerfall",
      "Hammerfall Bunker"
    ],
    "role": "Fortificación",
    "wing": "Ala Verde",
    "isEpicHero": false,
    "keywords": [
      "ADEPTUS ASTARTES",
      "IMPERIUM",
      "DARK ANGELS"
    ],
    "stats": {
      "m": "-",
      "r": 12,
      "sv": "2+",
      "inv": "-",
      "h": 14,
      "l": "6+",
      "co": "0"
    },
    "pointsOptions": [
      {
        "models": 1,
        "points": 175
      }
    ],
    "rangedWeapons": [
      {
        "name": "Batería de Bólteres Pesados Hammerfall",
        "range": "36\"",
        "a": 6,
        "f": 5,
        "ap": -1,
        "d": 2,
        "keywords": [
          "Impactos Sostenidos 1",
          "Disparo Rápido 2 (Rapid Fire 2)",
          "Acoplada (Twin-linked)"
        ],
        "bs": "4+"
      },
      {
        "name": "Batería de Lanzallamas Pesados Hammerfall",
        "range": "12\"",
        "a": 6,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Acoplada (Twin-linked)",
          "Torrente (Torrent)",
          "Explosión 2"
        ],
        "bs": "-"
      },
      {
        "name": "Lanzamisiles Hammerfall – Superfragmentación",
        "range": "48\"",
        "a": 7,
        "f": 5,
        "ap": -1,
        "d": 1,
        "keywords": [
          "Explosión 1"
        ],
        "bs": "4+"
      },
      {
        "name": "Lanzamisiles Hammerfall – Superperforante",
        "range": "48\"",
        "a": 2,
        "f": 10,
        "ap": -2,
        "d": "D3+3",
        "keywords": [],
        "bs": "4+"
      }
    ],
    "meleeWeapons": [],
    "abilities": [
      "Regla de Facción: Juramento del Momento",
      "Cobertura de Ceramita: Otorga beneficio de cobertura a las unidades aliadas que se oculten tras el casco de esta estructura.",
      "Matriz Defensiva (1 vez por fase): Puede disparar Fuego de Fuga (Overwatch) con coste de -1 CP.",
      "Fortificación: Estructura estática defensiva en 360 grados que proporciona fuego continuo y cobertura inamovible.",
      "Disciplina del Códex: Esta unidad sigue las doctrinas tácticas estándar del Adeptus Astartes.",
      "Honores de Artillería: Maestría balística veterana que optimiza la precisión del armamento pesado."
    ],
    "leaderOf": [],
    "notes": "Fortificación orbital con ametrallamiento defensivo automático en 360 grados."
  }
]
};

// Exportación global para navegadores
if (typeof window !== "undefined") {
  window.WH40K_DATA = WH40K_DATA;
  window.WH40K_DATA_DEFAULTS = JSON.parse(JSON.stringify(WH40K_DATA));
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = WH40K_DATA;
}
