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
    // === PERSONAJES Y HÉROES ÉPICOS EXCLUSIVOS DE LOS ÁNGELES OSCUROS ===
    {
      id: "da_lion",
      name: "Lion El'Jonson",
      originalName: "Lion El'jonson",
      aliases: ["Lion El’jonson", "Lion El Jonson"],
      role: "Héroe Épico",
      wing: "Ala de Muerte",
      isEpicHero: true,
      keywords: ["MONSTRUO", "PERSONAJE", "HÉROE ÉPICO", "PRIMARCA", "ALA DE MUERTE", "IMPERIUM", "LION EL'JONSON", "MONSTER", "CHARACTER", "EPIC HERO", "PRIMARCH", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES"],
      stats: { m: "8\"", r: 9, sv: "2+", inv: "3++", h: 10, l: "5+", co: 4 },
      pointsOptions: [{ models: 1, points: 415 }],
      rangedWeapons: [
        { name: "Arma Arcanum (Disparo)", range: "12\"", a: 4, bs: "2+", f: 5, ap: -1, d: 2, keywords: ["Pistola", "Pistol"] }
      ],
      meleeWeapons: [
        { name: "Fealty - Golpe demoledor", range: "Combate", a: 8, ws: "2+", f: 12, ap: -4, d: 4, keywords: ["Golpes Letales", "Lethal Hits"] },
        { name: "Fealty - Barrido", range: "Combate", a: 16, ws: "2+", f: 6, ap: -2, d: 1, keywords: ["Impactos Sostenidos 1", "Sustained Hits 1"] }
      ],
      abilities: ["Juramento de Momento", "Escudo del Emperador (3++ salvación invulnerable, 4++ contra mortales)", "Aura del Primarca (No Hay Dolor 4+++ contra mortales, repetición de cargas o -1 a impactar para el enemigo)."],
      leaderOf: [],
      notes: "Señor Primarca de la Primera Legión. Combate en solitario con la protección del Escudo del Emperador."
    },
    {
      id: "da_azrael",
      name: "Comandante Supremo Azrael",
      originalName: "Azrael",
      role: "Héroe Épico",
      wing: "Ala de Muerte",
      isEpicHero: true,
      keywords: ["INFANTERÍA", "PERSONAJE", "HÉROE ÉPICO", "GRAN MAESTRE", "ALA DE MUERTE", "AZRAEL", "INFANTRY", "CHARACTER", "EPIC HERO", "CHAPTER MASTER", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES", "TACTICUS"],
      stats: { m: "6\"", r: 4, sv: "2+", inv: "4++", h: 6, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 150 }],
      rangedWeapons: [
        { name: "Ira del León (Bólter)", range: "24\"", a: 2, bs: "2+", f: 4, ap: -1, d: 2, keywords: ["Fuego Rápido 1", "Rapid Fire 1"] },
        { name: "Ira del León (Plasma sobrecargado)", range: "24\"", a: 1, bs: "2+", f: 8, ap: -3, d: 3, keywords: ["Peligrosa", "Hazardous"] }
      ],
      meleeWeapons: [
        { name: "Espada de Secretos", range: "Combate", a: 6, ws: "2+", f: 6, ap: -3, d: 2, keywords: ["Heridas Devastadoras", "Devastating Wounds"] }
      ],
      abilities: ["Juramento de Momento", "Yelmo del León: Concede Salvación Invulnerable 4++ a su unidad.", "Líder Supremo: Al inicio de tu fase de mando, obtienes +1 Punto de Mando (CP).", "Ira Justiciera: Las armas de su unidad obtienen [IMPACTOS SOSTENIDOS 1]."],
      leaderOf: [
        "Camaradas del Círculo Interior",
        "Escuadra de Intercesores",
        "Escuadra de Intercesores de Asalto",
        "Escuadra de Revientainfiernos",
        "Escuadra de Veteranos de Ferreaguardia",
        "Escuadra de Veteranos de Retaguardia",
        "Escuadra Infernus",
        "Héroes de la Compañía"
      ],
      notes: "Gran Maestre Supremo del Capítulo de los Ángeles Oscuros."
    },
    {
      id: "da_belial",
      name: "Belial",
      originalName: "Belial",
      role: "Héroe Épico",
      wing: "Ala de Muerte",
      isEpicHero: true,
      keywords: ["INFANTERÍA", "PERSONAJE", "HÉROE ÉPICO", "EXTERMINADOR", "GRAN MAESTRE", "ALA DE MUERTE", "BELIAL", "INFANTRY", "CHARACTER", "EPIC HERO", "TERMINATOR", "CAPTAIN", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES"],
      stats: { m: "5\"", r: 5, sv: "2+", inv: "4++", h: 6, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 100 }],
      rangedWeapons: [
        { name: "Bólter de Asalto Maestro", range: "24\"", a: 2, bs: "2+", f: 4, ap: 0, d: 2, keywords: ["Fuego Rápido 2", "Precisión", "Rapid Fire 2", "Precision"] }
      ],
      meleeWeapons: [
        { name: "Espada del Silencio", range: "Combate", a: 6, ws: "2+", f: 6, ap: -2, d: 2, keywords: ["Precisión", "Precision"] }
      ],
      abilities: ["Juramento de Momento", "Gran Maestre del Ala de Muerte: Mientras lidera una unidad, los ataques de combate obtienen Impactos Críticos con 5+ sin modificar."],
      leaderOf: [
        "Caballeros del Ala de Muerte",
        "Escuadra de Exterminadores",
        "Escuadra de Exterminadores del Ala de Muerte",
        "Escuadra de Exterminadores de Asalto"
      ],
      notes: "Gran Maestre de la 1ª Compañía (Ala de Muerte)."
    },
    {
      id: "da_sammael",
      name: "Sammael",
      originalName: "Sammael",
      role: "Héroe Épico",
      wing: "Ala de Cuervo",
      isEpicHero: true,
      keywords: ["MONTADO", "PERSONAJE", "HÉROE ÉPICO", "VOLAR", "ALA DE CUERVO", "SAMMAEL", "MOUNTED", "CHARACTER", "EPIC HERO", "FLY", "CAPTAIN", "RAVENWING", "DARK ANGELS", "ADEPTUS ASTARTES"],
      stats: { m: "12\"", r: 5, sv: "3+", inv: "4++", h: 7, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 120 }],
      rangedWeapons: [
        { name: "Cañón de Plasma Corvex", range: "36\"", a: "D3", bs: "2+", f: 8, ap: -3, d: 3, keywords: ["Área", "Blast"] },
        { name: "Bólteres Tormenta gemelos", range: "24\"", a: 4, bs: "2+", f: 4, ap: 0, d: 1, keywords: ["Doble Enlace", "Twin-linked"] }
      ],
      meleeWeapons: [
        { name: "Espada Raven", range: "Combate", a: 6, ws: "2+", f: 6, ap: -3, d: 2, keywords: ["Impactos Sostenidos 1", "Sustained Hits 1"] }
      ],
      abilities: ["Juramento de Momento", "Gran Maestre del Ala de Cuervo: Permite a su unidad Avanzar, Disparar y Cargar en el mismo turno."],
      leaderOf: [
        "Caballero Negro del Ala de Cuervo",
        "Escuadra de Mando del Ala de Cuervo",
        "Escuadra de Batidores (Outriders)"
      ],
      notes: "Gran Maestre de la 2ª Compañía montado sobre la moto a reacción reliquia Corvex."
    },
    {
      id: "da_asmodai",
      name: "Asmodai",
      originalName: "Asmodai",
      role: "Héroe Épico",
      wing: "Ala de Muerte",
      isEpicHero: true,
      keywords: ["INFANTERÍA", "PERSONAJE", "HÉROE ÉPICO", "CAPELLÁN", "ALA DE MUERTE", "ASMODAI", "INFANTRY", "CHARACTER", "EPIC HERO", "CHAPLAIN", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES", "TACTICUS"],
      stats: { m: "6\"", r: 5, sv: "3+", inv: "4++", h: 4, l: "5+", co: 1 },
      pointsOptions: [{ models: 1, points: 70 }],
      rangedWeapons: [
        { name: "Pistola Bólter Pesada", range: "18\"", a: 1, bs: "2+", f: 4, ap: -1, d: 1, keywords: ["Pistola", "Pistol"] }
      ],
      meleeWeapons: [
        { name: "Crozius Arcanum & Cuchillas de la Razón", range: "Combate", a: 5, ws: "2+", f: 6, ap: -2, d: 2, keywords: ["Heridas Devastadoras", "Devastating Wounds"] }
      ],
      abilities: ["Juramento de Momento", "Capellán Interrogador: Permite a su unidad repetir tiradas completas para impactar en combate cuerpo a cuerpo."],
      leaderOf: [
        "Camaradas del Círculo Interior",
        "Escuadra de Intercesores de Asalto",
        "Escuadra de Veteranos de Ferreaguardia"
      ],
      notes: "El más antiguo y temido Maestro de la Herejía y Capellán Interrogador."
    },
    {
      id: "da_ezekiel",
      name: "Ezekiel",
      originalName: "Ezekiel",
      role: "Héroe Épico",
      wing: "Ala de Muerte",
      isEpicHero: true,
      keywords: ["INFANTERÍA", "PERSONAJE", "HÉROE ÉPICO", "PSÍQUICO", "BIBLIOTECARIO", "ALA DE MUERTE", "EZEKIEL", "INFANTRY", "CHARACTER", "EPIC HERO", "PSYKER", "LIBRARIAN", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES"],
      stats: { m: "6\"", r: 4, sv: "2+", inv: "4++", h: 5, l: "6+", co: 1 },
      pointsOptions: [{ models: 1, points: 75 }],
      rangedWeapons: [
        { name: "La Mirada de la Condenación (Psíquico)", range: "24\"", a: "D6", bs: "2+", f: 6, ap: -2, d: 2, keywords: ["Psíquico", "Psychic"] },
        { name: "El Libertador", range: "12\"", a: 1, bs: "2+", f: 4, ap: -1, d: 2, keywords: ["Pistola", "Precisión", "Pistol", "Precision"] }
      ],
      meleeWeapons: [
        { name: "Espada Traidor", range: "Combate", a: 5, ws: "2+", f: 6, ap: -3, d: "D3", keywords: ["Psíquico", "Psychic"] }
      ],
      abilities: ["Juramento de Momento", "Guardián de las Llaves: Añade +1 Ataque a las miniaturas de su unidad en combate.", "Libro de la Salvación: Concede No Hay Dolor 4+ contra heridas mortales."],
      leaderOf: [
        "Camaradas del Círculo Interior",
        "Escuadra de Intercesores",
        "Escuadra de Veteranos de Ferreaguardia"
      ],
      notes: "Gran Maestre de los Bibliotecarios y Guardián del Libro de la Salvación."
    },
    {
      id: "da_lazarus",
      name: "Maestre Lazarus",
      originalName: "Lazarus",
      role: "Héroe Épico",
      wing: "Compañía Verde",
      isEpicHero: true,
      keywords: ["INFANTERÍA", "PERSONAJE", "HÉROE ÉPICO", "CAPITÁN", "LAZARUS", "INFANTRY", "CHARACTER", "EPIC HERO", "CAPTAIN", "DARK ANGELS", "ADEPTUS ASTARTES", "TACTICUS"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "4++", h: 5, l: "6+", co: 1 },
      pointsOptions: [{ models: 1, points: 70 }],
      rangedWeapons: [
        { name: "Pistola Bólter Especial", range: "12\"", a: 1, bs: "2+", f: 4, ap: 0, d: 1, keywords: ["Pistola", "Pistol"] }
      ],
      meleeWeapons: [
        { name: "Filo de Enemistad", range: "Combate", a: 6, ws: "2+", f: 6, ap: -3, d: 2, keywords: ["Anti-Psíquico 2+", "Anti-Psyker 2+"] }
      ],
      abilities: ["Juramento de Momento", "Escudo Espiritual de Caliban: Concede a su unidad salvación especial No Hay Dolor 3+ contra ataques Psíquicos y heridas mortales."],
      leaderOf: [
        "Camaradas del Círculo Interior",
        "Escuadra de Intercesores",
        "Escuadra de Revientainfiernos"
      ],
      notes: "Capitán de la 5.ª Compañía, primer Marine Espacial Primaris en liderar una compañía de los Ángeles Oscuros."
    },

    // === UNIDADES EXCLUSIVAS DEL ALA DE MUERTE (DEATHWING) ===
    {
      id: "da_deathwing_knights",
      name: "Caballeros del Ala de Muerte",
      originalName: "Deathwing Knights",
      role: "Élite / Infantería Pesada",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "EXTERMINADOR", "ALA DE MUERTE", "CABALLEROS", "INFANTRY", "TERMINATOR", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 6, sv: "2+", inv: "4++", h: 4, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 235 }
      ],
      rangedWeapons: [],
      meleeWeapons: [
        { name: "Maza de Absolución", range: "Combate", a: 4, ws: "2+", f: 6, ap: -2, d: 2, keywords: ["Heridas Devastadoras", "Devastating Wounds"] },
        { name: "Espada de Reliquia (Gran Maestre)", range: "Combate", a: 5, ws: "2+", f: 7, ap: -2, d: 2, keywords: ["Golpes Letales", "Lethal Hits"] },
        { name: "Mangual de los No Perdonados", range: "Combate", a: 5, ws: "2+", f: 7, ap: -3, d: 2, keywords: ["Heridas Devastadoras", "Devastating Wounds"] }
      ],
      abilities: ["Juramento de Momento", "Fortaleza del Círculo Interior: Reduce en 1 todo el daño sufrido (hasta un mínimo de 1).", "Despliegue Rápido (Deep Strike)."],
      leaderOf: [],
      notes: "La élite suprema de combate cuerpo a cuerpo del Ala de Muerte con Mazas de Absolución."
    },
    {
      id: "da_deathwing_terminator_squad",
      name: "Escuadra de Exterminadores del Ala de Muerte",
      originalName: "Deathwing Terminator Squad",
      role: "Infantería Pesada",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "EXTERMINADOR", "ALA DE MUERTE", "INFANTRY", "TERMINATOR", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 5, sv: "2+", inv: "4++", h: 3, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 190 },
        { models: 10, points: 380 }
      ],
      rangedWeapons: [
        { name: "Bólter de Asalto Tormenta", range: "24\"", a: 2, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Fuego Rápido 2", "Rapid Fire 2"] },
        { name: "Cañón de Plasma (Sobrecargado)", range: "36\"", a: "D3", bs: "3+", f: 8, ap: -3, d: 2, keywords: ["Área", "Peligrosa", "Blast", "Hazardous"] },
        { name: "Cañón de Asalto", range: "24\"", a: 6, bs: "3+", f: 6, ap: 0, d: 1, keywords: ["Heridas Devastadoras", "Devastating Wounds"] },
        { name: "Lanzamisiles Ciclón", range: "36\"", a: 2, bs: "3+", f: 9, ap: -2, d: "D6", keywords: [] }
      ],
      meleeWeapons: [
        { name: "Puño de Combate", range: "Combate", a: 3, ws: "3+", f: 8, ap: -2, d: 2, keywords: [] },
        { name: "Arma de Energía", range: "Combate", a: 4, ws: "3+", f: 5, ap: -2, d: 1, keywords: [] },
        { name: "Cuchillas Relámpago gemelas", range: "Combate", a: 5, ws: "3+", f: 5, ap: -2, d: 1, keywords: ["Doble Enlace", "Twin-linked"] }
      ],
      abilities: ["Juramento de Momento", "Despliegue Rápido (Deep Strike)", "Vigilancia de Caliban: Ignora modificadores a la tirada para impactar y suma +1 al Control de Objetivo al mantener marcadores."],
      leaderOf: [],
      notes: "Veteranos de la 1ª Compañía equipados con cañones de plasma exclusivos de Caliban."
    },
    {
      id: "da_inner_circle_companions",
      name: "Camaradas del Círculo Interior",
      originalName: "Inner Circle Companions",
      role: "Élite / Guardia de Honor",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "ALA DE MUERTE", "CÍRCULO INTERIOR", "GUARDIA", "INFANTRY", "DEATHWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM", "TACTICUS"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "4++", h: 3, l: "6+", co: 1 },
      pointsOptions: [
        { models: 3, points: 90 },
        { models: 6, points: 180 }
      ],
      rangedWeapons: [
        { name: "Pistola Bólter Pesada", range: "18\"", a: 1, bs: "3+", f: 4, ap: -1, d: 1, keywords: ["Pistola", "Pistol"] }
      ],
      meleeWeapons: [
        { name: "Gran Espada de Caliban - Golpe", range: "Combate", a: 4, ws: "3+", f: 6, ap: -2, d: 2, keywords: ["Golpes Letales", "Lethal Hits"] },
        { name: "Gran Espada de Caliban - Barrido", range: "Combate", a: 6, ws: "3+", f: 5, ap: -1, d: 1, keywords: ["Impactos Sostenidos 1", "Sustained Hits 1"] }
      ],
      abilities: ["Juramento de Momento", "Guardaespaldas del Círculo: Mientras un Personaje lidere esta unidad, los enemigos sufren -1 para impactarles en combate cuerpo a cuerpo."],
      leaderOf: [],
      notes: "Misteriosos guerreros encapuchados que custodian a los más altos dignatarios de la Orden."
    },

    // === UNIDADES EXCLUSIVAS DEL ALA DE CUERVO (RAVENWING) ===
    {
      id: "da_ravenwing_black_knights",
      name: "Caballero Negro del Ala de Cuervo",
      originalName: "Ravenwing Black Knights",
      role: "Ataque Rápido / Montado",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["MONTADO", "ALA DE CUERVO", "CABALLEROS NEGROS", "MOUNTED", "RAVENWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 5, sv: "3+", inv: "5++", h: 3, l: "6+", co: 2 },
      pointsOptions: [
        { models: 3, points: 85 },
        { models: 6, points: 170 }
      ],
      rangedWeapons: [
        { name: "Garras de Plasma (Sobrecargadas)", range: "18\"", a: 2, bs: "3+", f: 8, ap: -3, d: 2, keywords: ["Fuego Rápido 1", "Peligrosa", "Rapid Fire 1", "Hazardous"] }
      ],
      meleeWeapons: [
        { name: "Martillo Corvus", range: "Combate", a: 3, ws: "3+", f: 5, ap: -1, d: 2, keywords: ["Lanza", "Lance"] }
      ],
      abilities: ["Juramento de Momento", "Jinetes de la Tormenta: Las armas cuerpo a cuerpo ganan [ANTI-MONSTRUO 4+] y [ANTI-VEHÍCULO 4+] tras cargar."],
      leaderOf: [],
      notes: "Élite montada de la 2ª Compañía armados con martillos Corvus y garras de plasma."
    },
    {
      id: "da_ravenwing_command_squad",
      name: "Escuadra de Mando del Ala de Cuervo",
      originalName: "Ravenwing Command Squad",
      role: "Montado / Mando",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["MONTADO", "ALA DE CUERVO", "MANDO", "PERSONAJE", "MOUNTED", "RAVENWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 5, sv: "3+", inv: "5++", h: 3, l: "6+", co: 2 },
      pointsOptions: [
        { models: 3, points: 115 }
      ],
      rangedWeapons: [
        { name: "Garras de Plasma", range: "18\"", a: 2, bs: "3+", f: 8, ap: -3, d: 2, keywords: ["Fuego Rápido 1", "Rapid Fire 1"] }
      ],
      meleeWeapons: [
        { name: "Martillo Corvus", range: "Combate", a: 3, ws: "3+", f: 5, ap: -1, d: 2, keywords: ["Lanza", "Lance"] }
      ],
      abilities: ["Juramento de Momento", "Apotecario en Moto: Revive una miniatura eliminada de la unidad en cada fase de mando.", "Estandarte del Cuervo: +1 al Control de Objetivo."],
      leaderOf: [],
      notes: "Escuadra de cuartel general móvil que incluye Campeón, Apotecario y Portaestandarte en moto."
    },
    {
      id: "da_ravenwing_darkshroud",
      name: "Mortaja del Ala de Cuervo",
      originalName: "Ravenwing Darkshroud",
      role: "Vehículo de Apoyo",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "DESLIZADOR", "VOLAR", "ALA DE CUERVO", "HUMO", "VEHICLE", "SPEEDER", "FLY", "RAVENWING", "SMOKE", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "14\"", r: 8, sv: "3+", inv: "4++", h: 10, l: "6+", co: 2 },
      pointsOptions: [
        { models: 1, points: 80 }
      ],
      rangedWeapons: [
        { name: "Cañón de Asalto Pesado", range: "24\"", a: 6, bs: "3+", f: 6, ap: 0, d: 1, keywords: ["Heridas Devastadoras", "Devastating Wounds"] }
      ],
      meleeWeapons: [
        { name: "Embestida", range: "Combate", a: 3, ws: "4+", f: 6, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Manto de Tinieblas (Aura): Las unidades amigas a 6\" obtienen [SIGILO] (-1 a impactar para el atacante) y beneficio de cobertura."],
      leaderOf: [],
      notes: "Porta una antigua piedra reliquia de Caliban que emite un campo impenetrable de sombras protectoras."
    },
    {
      id: "da_land_speeder_vengeance",
      name: "Land Speeder Venganza",
      originalName: "Land Speeder Vengeance",
      role: "Vehículo Pesado / Artillería Móvil",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "DESLIZADOR", "VOLAR", "ALA DE CUERVO", "VEHICLE", "SPEEDER", "FLY", "RAVENWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "14\"", r: 8, sv: "3+", inv: "5++", h: 10, l: "6+", co: 2 },
      pointsOptions: [
        { models: 1, points: 140 }
      ],
      rangedWeapons: [
        { name: "Batería de Tormenta de Plasma (Sobrecargada)", range: "36\"", a: "D6+3", bs: "3+", f: 9, ap: -3, d: 3, keywords: ["Área", "Peligrosa", "Blast", "Hazardous"] },
        { name: "Cañón de Asalto Pesado", range: "24\"", a: 6, bs: "3+", f: 6, ap: 0, d: 1, keywords: ["Heridas Devastadoras", "Devastating Wounds"] }
      ],
      meleeWeapons: [
        { name: "Embestida", range: "Combate", a: 3, ws: "4+", f: 6, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Furia Castigadora: Repite tiradas de daño de 1 con la Batería de Tormenta de Plasma."],
      leaderOf: [],
      notes: "El mayor deslizador de combate del Ala de Cuervo dotado de devastadora potencia de plasma."
    },
    {
      id: "da_nephilim_jetfighter",
      name: "Caza Nephilim",
      originalName: "Nephilim Jetfighter",
      role: "Aeronave / Interceptor",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["AERONAVE", "VEHÍCULO", "VOLAR", "ALA DE CUERVO", "AIRCRAFT", "VEHICLE", "FLY", "RAVENWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "20+\"", r: 8, sv: "3+", inv: "-", h: 11, l: "6+", co: 0 },
      pointsOptions: [
        { models: 1, points: 200 }
      ],
      rangedWeapons: [
        { name: "Megabolter Vengador", range: "36\"", a: 10, bs: "3+", f: 6, ap: -1, d: 2, keywords: [] },
        { name: "Lanza Láser Gemela", range: "48\"", a: 2, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: ["Doble Enlace", "Twin-linked"] },
        { name: "Misiles Blacksword", range: "36\"", a: 2, bs: "3+", f: 8, ap: -2, d: "D6", keywords: ["Anti-Aeronave 2+", "Anti-Fly 2+"] }
      ],
      meleeWeapons: [
        { name: "Blindaje de Combate (Armoured hull)", range: "Melee", a: 3, ws: "4+", f: 6, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Supremacía Aérea: Suma +1 a impactar contra objetivos que tengan la clave VOLAR."],
      leaderOf: [],
      notes: "Caza interceptor de alta velocidad para erradicar amenazas aéreas enemigas."
    },
    {
      id: "da_dark_talon",
      name: "Espolón del Ala de Cuervo (Dark Talon)",
      originalName: "Ravenwing Dark Talon",
      role: "Aeronave / Bombardero",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["AERONAVE", "VEHÍCULO", "VOLAR", "ALA DE CUERVO", "AIRCRAFT", "VEHICLE", "FLY", "RAVENWING", "DARK ANGELS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "20+\"", r: 8, sv: "3+", inv: "-", h: 11, l: "6+", co: 0 },
      pointsOptions: [
        { models: 1, points: 190 }
      ],
      rangedWeapons: [
        { name: "Cañón Rift del Vacío (Rift Cannon)", range: "18\"", a: "D3", bs: "3+", f: 16, ap: -4, d: "D6+1", keywords: ["Área", "Heridas Devastadoras", "Blast", "Devastating Wounds"] },
        { name: "Bólteres Huracán gemelos", range: "24\"", a: 12, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Doble Enlace", "Twin-linked"] }
      ],
      meleeWeapons: [],
      abilities: ["Juramento de Momento", "Bomba de Estasis: Una vez por batalla, lanza una bomba sobre una unidad enemiga causando heridas mortales y reduciendo su movimiento."],
      leaderOf: [],
      notes: "Aeronave equipada con el Cañón Rift, capaz de abrir microfisuras en la disformidad."
    },

    // === UNIDADES GENERALES Y SÍNERGICAS DE ADEPTUS ASTARTES (DEATHWING / RAVENWING / COMÚN) ===
    {
      id: "sm_terminator_squad",
      name: "Escuadra de Exterminadores",
      originalName: "Terminator Squad",
      role: "Infantería Pesada",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "EXTERMINADOR", "ALA DE MUERTE", "INFANTRY", "TERMINATOR", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 5, sv: "2+", inv: "4++", h: 3, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 190 },
        { models: 10, points: 380 }
      ],
      rangedWeapons: [
        { name: "Bólter de Asalto Tormenta", range: "24\"", a: 2, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Fuego Rápido 2", "Rapid Fire 2"] },
        { name: "Cañón de Asalto", range: "24\"", a: 6, bs: "3+", f: 6, ap: 0, d: 1, keywords: ["Heridas Devastadoras", "Devastating Wounds"] }
      ],
      meleeWeapons: [
        { name: "Puño de Combate", range: "Combate", a: 3, ws: "3+", f: 8, ap: -2, d: 2, keywords: [] },
        { name: "Arma de Energía", range: "Combate", a: 4, ws: "3+", f: 5, ap: -2, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Despliegue Rápido (Deep Strike)", "Furia Teleportada: Repite tiradas para impactar de 1 contra el Juramento."],
      leaderOf: [],
      notes: "Escuadra estándar de Exterminadores de la 1.ª Compañía del Ala de Muerte."
    },
    {
      id: "sm_terminator_assault_squad",
      name: "Escuadra de Exterminadores de Asalto",
      originalName: "Terminator Assault Squad",
      role: "Infantería Pesada / Asalto",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "EXTERMINADOR", "ALA DE MUERTE", "INFANTRY", "TERMINATOR", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 6, sv: "2+", inv: "4++", h: 3, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 170 },
        { models: 10, points: 340 }
      ],
      rangedWeapons: [],
      meleeWeapons: [
        { name: "Martillo de Trueno y Escudo Tormenta", range: "Combate", a: 3, ws: "4+", f: 8, ap: -2, d: 3, keywords: ["Heridas Devastadoras", "Devastating Wounds"] },
        { name: "Cuchillas Relámpago gemelas", range: "Combate", a: 5, ws: "3+", f: 5, ap: -2, d: 1, keywords: ["Doble Enlace", "Twin-linked"] }
      ],
      abilities: ["Juramento de Momento", "Despliegue Rápido (Deep Strike)", "Escudo Tormenta: Otorga 4 Heridas por modelo (H4)."],
      leaderOf: [],
      notes: "Especialistas de choque cuerpo a cuerpo con martillos de trueno y escudos de asedio."
    },
    {
      id: "sm_captain_terminator",
      name: "Capitán con Armadura de Exterminador",
      originalName: "Captain in Terminator Armour",
      role: "Cuartel General / Personaje",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "PERSONAJE", "EXTERMINADOR", "CAPITÁN", "ALA DE MUERTE", "INFANTRY", "CHARACTER", "TERMINATOR", "CAPTAIN", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 5, sv: "2+", inv: "4++", h: 6, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 90 }],
      rangedWeapons: [
        { name: "Bólter de Asalto Tormenta", range: "24\"", a: 2, bs: "2+", f: 4, ap: 0, d: 1, keywords: ["Fuego Rápido 2", "Rapid Fire 2"] }
      ],
      meleeWeapons: [
        { name: "Arma de Reliquia", range: "Combate", a: 6, ws: "2+", f: 6, ap: -2, d: 2, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Genio Rito de Batalla: Reduce en 1 CP el coste de una estratagema dirigida a su unidad.", "Despliegue Rápido."],
      leaderOf: ["Caballeros del Ala de Muerte", "Escuadra de Exterminadores", "Escuadra de Exterminadores de Asalto", "Escuadra de Exterminadores del Ala de Muerte"],
      notes: "Líder de la 1.ª Compañía."
    },
    {
      id: "sm_chaplain_terminator",
      name: "Capellán con Armadura de Exterminador",
      originalName: "Chaplain in Terminator Armour",
      role: "Cuartel General / Personaje",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "PERSONAJE", "EXTERMINADOR", "CAPELLÁN", "ALA DE MUERTE", "INFANTRY", "CHARACTER", "TERMINATOR", "CHAPLAIN", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 5, sv: "2+", inv: "4++", h: 5, l: "5+", co: 1 },
      pointsOptions: [{ models: 1, points: 75 }],
      rangedWeapons: [
        { name: "Bólter de Asalto Tormenta", range: "24\"", a: 2, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Fuego Rápido 2"] }
      ],
      meleeWeapons: [
        { name: "Crozius Arcanum", range: "Combate", a: 5, ws: "2+", f: 6, ap: -1, d: 2, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Letanías de Odio: Suma +1 a las tiradas para herir en combate cuerpo a cuerpo para su unidad.", "No Hay Dolor 4+ contra mortales."],
      leaderOf: ["Caballeros del Ala de Muerte", "Escuadra de Exterminadores", "Escuadra de Exterminadores de Asalto", "Escuadra de Exterminadores del Ala de Muerte"],
      notes: "Inspirador fanático del Ala de Muerte."
    },
    {
      id: "sm_librarian_terminator",
      name: "Bibliotecario con Armadura de Exterminador",
      originalName: "Librarian in Terminator Armour",
      role: "Cuartel General / Psíquico",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "PERSONAJE", "EXTERMINADOR", "PSÍQUICO", "BIBLIOTECARIO", "ALA DE MUERTE", "INFANTRY", "CHARACTER", "TERMINATOR", "PSYKER", "LIBRARIAN", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 5, sv: "2+", inv: "4++", h: 5, l: "6+", co: 1 },
      pointsOptions: [{ models: 1, points: 80 }],
      rangedWeapons: [
        { name: "Furia Psíquica (Smite)", range: "24\"", a: "D6", bs: "3+", f: 6, ap: -2, d: "D3", keywords: ["Psíquico", "Psychic"] }
      ],
      meleeWeapons: [
        { name: "Arma Psíquica", range: "Combate", a: 4, ws: "3+", f: 6, ap: -2, d: "D3", keywords: ["Psíquico", "Psychic"] }
      ],
      abilities: ["Juramento de Momento", "Velo Psíquico: Concede [IMPACTOS SOSTENIDOS 1] a los ataques a distancia y cuerpo a cuerpo de su unidad."],
      leaderOf: ["Caballeros del Ala de Muerte", "Escuadra de Exterminadores", "Escuadra de Exterminadores de Asalto", "Escuadra de Exterminadores del Ala de Muerte"],
      notes: "Canaliza poderes de la disformidad con la protección de la armadura indomitus."
    },
    {
      id: "sm_ancient_terminator",
      name: "Anciano con Armadura de Exterminador",
      originalName: "Ancient in Terminator Armour",
      role: "Personaje / Soporte",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "PERSONAJE", "EXTERMINADOR", "PORTAESTANDARTE", "ALA DE MUERTE", "INFANTRY", "CHARACTER", "TERMINATOR", "ANCIENT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 5, sv: "2+", inv: "4++", h: 5, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 75 }],
      rangedWeapons: [
        { name: "Bólter de Asalto Tormenta", range: "24\"", a: 2, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Fuego Rápido 2"] }
      ],
      meleeWeapons: [
        { name: "Arma de Energía", range: "Combate", a: 4, ws: "3+", f: 5, ap: -2, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Estandarte del Astartes: Suma +1 al Control de Objetivo (CO) de todas las miniaturas de su unidad."],
      leaderOf: ["Escuadra de Exterminadores", "Escuadra de Exterminadores de Asalto", "Escuadra de Exterminadores del Ala de Muerte"],
      notes: "Portador de los sagrados estandartes del Ala de Muerte."
    },
    {
      id: "sm_bladeguard_ancient",
      name: "Anciano de Ferreaguardia",
      originalName: "Bladeguard Ancient",
      role: "Personaje / Soporte",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "PERSONAJE", "PORTAESTANDARTE", "ALA DE MUERTE", "INFANTRY", "CHARACTER", "ANCIENT", "DEATHWING", "ADEPTUS ASTARTES", "TACTICUS", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "4++", h: 4, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 70 }],
      rangedWeapons: [
        { name: "Pistola Bólter Pesada", range: "18\"", a: 1, bs: "3+", f: 4, ap: -1, d: 1, keywords: ["Pistola"] }
      ],
      meleeWeapons: [
        { name: "Espada de Combate", range: "Combate", a: 4, ws: "3+", f: 5, ap: -2, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Estandarte de Ferreaguardia: Suma +1 a impactar en cuerpo a cuerpo a su unidad."],
      leaderOf: ["Escuadra de Veteranos de Ferreaguardia", "Camaradas del Círculo Interior"],
      notes: "Guardián de reliquias de la espada."
    },
    {
      id: "sm_bladeguard_veterans",
      name: "Escuadra de Veteranos de Ferreaguardia",
      originalName: "Bladeguard Veteran Squad",
      role: "Élite / Infantería",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "ALA DE MUERTE", "FERREAGUARDIA", "INFANTRY", "DEATHWING", "BLADEGUARD", "ADEPTUS ASTARTES", "TACTICUS", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "4++", h: 3, l: "6+", co: 1 },
      pointsOptions: [
        { models: 3, points: 90 },
        { models: 6, points: 180 }
      ],
      rangedWeapons: [
        { name: "Pistola Bólter Pesada", range: "18\"", a: 1, bs: "3+", f: 4, ap: -1, d: 1, keywords: ["Pistola"] }
      ],
      meleeWeapons: [
        { name: "Espada de Energía Maestra", range: "Combate", a: 4, ws: "3+", f: 5, ap: -2, d: 2, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Escudos Tormenta (4++ invulnerable)", "Espadachines Consumados: Repite tiradas de salvación de 1 en combate."],
      leaderOf: [],
      notes: "Veteranos con espadas maestras y escudos tormenta incorporados a la 1ª Compañía."
    },
    {
      id: "sm_sternguard_veterans",
      name: "Escuadra de Veteranos de Retaguardia (Sternguard)",
      originalName: "Sternguard Veteran Squad",
      role: "Infantería / Disparo",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "ALA DE MUERTE", "RETAGUARDIA", "INFANTRY", "DEATHWING", "STERNGUARD", "ADEPTUS ASTARTES", "TACTICUS", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "-", h: 2, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 105 },
        { models: 10, points: 210 }
      ],
      rangedWeapons: [
        { name: "Rifle Bólter Sternguard", range: "24\"", a: 2, bs: "3+", f: 4, ap: -1, d: 1, keywords: ["Fuego Rápido 1", "Heridas Devastadoras", "Rapid Fire 1", "Devastating Wounds"] },
        { name: "Bólter Pesado Sternguard", range: "36\"", a: 3, bs: "3+", f: 5, ap: -1, d: 2, keywords: ["Pesada", "Heridas Devastadoras", "Heavy", "Devastating Wounds"] }
      ],
      meleeWeapons: [
        { name: "Arma de Combate", range: "Combate", a: 3, ws: "3+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Puntería de Veteranos: Repite tiradas para herir de 1 contra el Juramento de Momento."],
      leaderOf: [],
      notes: "Especialistas de tiro con munición artesanal integrada en la 1ª Compañía."
    },
    {
      id: "sm_vanguard_veterans_jump",
      name: "Escuadra de Veteranos de Vanguardia con Propulsores",
      originalName: "Vanguard Veteran Squad With Jump Packs",
      role: "Infantería Rápida / Asalto",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "VOLAR", "PROPULSOR DE SALTO", "ALA DE MUERTE", "INFANTRY", "FLY", "JUMP PACK", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 4, sv: "3+", inv: "4++", h: 2, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 110 },
        { models: 10, points: 220 }
      ],
      rangedWeapons: [
        { name: "Pistola Bólter", range: "12\"", a: 1, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Pistola"] }
      ],
      meleeWeapons: [
        { name: "Arma de Vanguardia", range: "Combate", a: 4, ws: "3+", f: 5, ap: -1, d: 1, keywords: ["Golpes Letales", "Lethal Hits"] }
      ],
      abilities: ["Juramento de Momento", "Despliegue Rápido (Deep Strike)", "Asalto Aéreo: +1 a las tiradas de carga tras descender."],
      leaderOf: [],
      notes: "Veteranos aerotransportados con retrocohetes y escudos."
    },
    {
      id: "sm_captain_bike",
      name: "Capitán en Moto",
      originalName: "Captain on Bike",
      role: "Cuartel General / Montado",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["MONTADO", "PERSONAJE", "CAPITÁN", "ALA DE CUERVO", "MOUNTED", "CHARACTER", "CAPTAIN", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 5, sv: "3+", inv: "4++", h: 6, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 75 }],
      rangedWeapons: [
        { name: "Bólteres Gemelos de Moto", range: "24\"", a: 4, bs: "2+", f: 4, ap: 0, d: 1, keywords: ["Doble Enlace"] }
      ],
      meleeWeapons: [
        { name: "Arma de Reliquia", range: "Combate", a: 6, ws: "2+", f: 6, ap: -2, d: 2, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Genio Rito de Batalla: -1 CP a estratagemas dirigidas a su escuadra."],
      leaderOf: ["Caballero Negro del Ala de Cuervo", "Escuadra de Batidores (Outriders)"],
      notes: "Líder de ataque rápido del Ala de Cuervo."
    },
    {
      id: "sm_chaplain_bike",
      name: "Capellán en Moto",
      originalName: "Chaplain On Bike",
      role: "Cuartel General / Montado",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["MONTADO", "PERSONAJE", "CAPELLÁN", "ALA DE CUERVO", "MOUNTED", "CHARACTER", "CHAPLAIN", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 5, sv: "3+", inv: "4++", h: 6, l: "5+", co: 2 },
      pointsOptions: [{ models: 1, points: 75 }],
      rangedWeapons: [
        { name: "Bólteres Gemelos de Moto", range: "24\"", a: 4, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Doble Enlace"] }
      ],
      meleeWeapons: [
        { name: "Crozius Arcanum", range: "Combate", a: 5, ws: "2+", f: 6, ap: -1, d: 2, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Exhortación a la Carga: Suma +1 a la Fuerza y tiradas para herir de su unidad montada al cargar."],
      leaderOf: ["Caballero Negro del Ala de Cuervo", "Escuadra de Batidores (Outriders)"],
      notes: "Predicador marcial del Ala de Cuervo."
    },
    {
      id: "sm_outriders",
      name: "Escuadra de Batidores (Outriders)",
      originalName: "Outrider Squad",
      role: "Ataque Rápido / Montado",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["MONTADO", "ALA DE CUERVO", "LÍNEA", "MOUNTED", "RAVENWING", "BATTLELINE", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 5, sv: "3+", inv: "-", h: 4, l: "6+", co: 2 },
      pointsOptions: [
        { models: 3, points: 80 },
        { models: 6, points: 160 }
      ],
      rangedWeapons: [
        { name: "Bólteres Gemelos de Moto", range: "24\"", a: 4, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Doble Enlace", "Twin-linked"] }
      ],
      meleeWeapons: [
        { name: "Espadas Sierra Astartes", range: "Combate", a: 4, ws: "3+", f: 4, ap: -1, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Avance Turbocargado: Al avanzar, añade 6\" automáticos en lugar de tirar dado."],
      leaderOf: [],
      notes: "Motos de intercepción veloz del Ala de Cuervo (Línea de Batalla en destacamentos de Alas)."
    },
    {
      id: "sm_invader_atv",
      name: "Quads Invader (ATV)",
      originalName: "Invader ATVs",
      role: "Montado / Apoyo Ligero",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["MONTADO", "ALA DE CUERVO", "MOUNTED", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 5, sv: "3+", inv: "-", h: 8, l: "6+", co: 2 },
      pointsOptions: [
        { models: 1, points: 65 },
        { models: 2, points: 130 }
      ],
      rangedWeapons: [
        { name: "Cañón Multifuón", range: "18\"", a: 2, bs: "3+", f: 9, ap: -4, d: "D6", keywords: ["Fusión 2", "Melta 2"] },
        { name: "Cañón Gatling Onslaught", range: "24\"", a: 8, bs: "3+", f: 5, ap: 0, d: 1, keywords: ["Heridas Devastadoras"] }
      ],
      meleeWeapons: [
        { name: "Ruedas Pesadas", range: "Combate", a: 3, ws: "4+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Fuego de Cobertura Retributivo: Puede disparar en respuesta si una unidad amiga a 6\" es atacada."],
      leaderOf: [],
      notes: "Vehículo todoterreno de fuego de apoyo del Ala de Cuervo."
    },
    {
      id: "sm_scout_bikes",
      name: "Escuadra de Batidores en Moto",
      originalName: "Scout Bike Squad",
      role: "Montado / Explorador",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["MONTADO", "ALA DE CUERVO", "EXPLORADOR", "MOUNTED", "RAVENWING", "SCOUT", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "12\"", r: 5, sv: "4+", inv: "-", h: 3, l: "6+", co: 1 },
      pointsOptions: [{ models: 3, points: 70 }],
      rangedWeapons: [
        { name: "Escopeta Astartes", range: "18\"", a: 2, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Asalto"] }
      ],
      meleeWeapons: [
        { name: "Arma de Combate", range: "Combate", a: 2, ws: "3+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Exploradores 9\" (Scouts 9\")."],
      leaderOf: [],
      notes: "Pioneros del Ala de Cuervo en reconocimiento avanzado."
    },
    {
      id: "sm_storm_speeder_thunderstrike",
      name: "Storm Speeder Atronador",
      originalName: "Storm Speeder Thunderstrike",
      role: "Vehículo / Cazador de Blindados",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "DESLIZADOR", "VOLAR", "ALA DE CUERVO", "VEHICLE", "SPEEDER", "FLY", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "14\"", r: 8, sv: "3+", inv: "-", h: 11, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 140 }],
      rangedWeapons: [
        { name: "Láser Cazador Stormstrike", range: "48\"", a: 2, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] },
        { name: "Lanzamisiles de Doble Icarus", range: "48\"", a: 4, bs: "3+", f: 8, ap: -1, d: 2, keywords: ["Anti-Aeronave 2+"] }
      ],
      meleeWeapons: [
        { name: "Embestida", range: "Combate", a: 3, ws: "4+", f: 6, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Designador de Blancos de Impacto: Los aliados que disparen a un objetivo impactado por este speeder obtienen +1 para herir contra Monstruos o Vehículos."],
      leaderOf: [],
      notes: "Deslizador pesado con láser de alto calibre del Ala de Cuervo."
    },
    {
      id: "sm_storm_speeder_hailstrike",
      name: "Storm Speeder Granizador",
      originalName: "Storm Speeder Hailstrike",
      role: "Vehículo / Supresión Ligera",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "DESLIZADOR", "VOLAR", "ALA DE CUERVO", "VEHICLE", "SPEEDER", "FLY", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "14\"", r: 8, sv: "3+", inv: "-", h: 11, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 110 }],
      rangedWeapons: [
        { name: "Cañón Gatling Onslaught Pesado", range: "36\"", a: 12, bs: "3+", f: 6, ap: -1, d: 1, keywords: [] }
      ],
      meleeWeapons: [
        { name: "Embestida", range: "Combate", a: 3, ws: "4+", f: 6, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Fuego de Supresión: Concede +1 FP a las unidades amigas que disparen al objetivo alcanzado."],
      leaderOf: [],
      notes: "Deslizador de saturación de infantería."
    },
    {
      id: "sm_storm_speeder_hammerstrike",
      name: "Storm Speeder Martillador",
      originalName: "Storm Speeder Hammerstrike",
      role: "Vehículo / Destructor de Búnkeres",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "DESLIZADOR", "VOLAR", "ALA DE CUERVO", "VEHICLE", "SPEEDER", "FLY", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "14\"", r: 8, sv: "3+", inv: "-", h: 11, l: "6+", co: 2 },
      pointsOptions: [{ models: 1, points: 125 }],
      rangedWeapons: [
        { name: "Lanzador de Fusión Hammerstrike", range: "18\"", a: 3, bs: "3+", f: 9, ap: -4, d: "D6", keywords: ["Fusión 2"] }
      ],
      meleeWeapons: [
        { name: "Embestida", range: "Combate", a: 3, ws: "4+", f: 6, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Rompefortalezas: Niega el beneficio de cobertura al blanco."],
      leaderOf: [],
      notes: "Deslizador de demolición a corta distancia."
    },
    {
      id: "sm_brutalis_dreadnought",
      name: "Dreadnought Brutalis",
      originalName: "Brutalis Dreadnought",
      role: "Bípode / Choque Frontal",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "BÍPODE", "DREADNOUGHT", "ALA DE MUERTE", "VEHICLE", "WALKER", "DREADNOUGHT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "8\"", r: 10, sv: "2+", inv: "-", h: 12, l: "6+", co: 4 },
      pointsOptions: [{ models: 1, points: 160 }],
      rangedWeapons: [
        { name: "Cañones Gatling pesados gemelos", range: "24\"", a: 10, bs: "3+", f: 6, ap: 0, d: 1, keywords: [] },
        { name: "Rifles Multifuón gemelos", range: "18\"", a: 2, bs: "3+", f: 9, ap: -4, d: "D6", keywords: ["Fusión 2"] }
      ],
      meleeWeapons: [
        { name: "Garras Brutalis - Golpe desgarrador", range: "Combate", a: 6, ws: "3+", f: 12, ap: -2, d: 3, keywords: ["Golpes Letales"] },
        { name: "Garras Brutalis - Barrido", range: "Combate", a: 10, ws: "3+", f: 7, ap: -2, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Carga Brutal: Al completar una carga inflige heridas mortales masivas con tirada de dado."],
      leaderOf: [],
      notes: "El temible Dreadnought de asalto de corta distancia de la 1ª Compañía."
    },
    {
      id: "sm_ballistus_dreadnought",
      name: "Dreadnought Ballistus",
      originalName: "Ballistus Dreadnought",
      role: "Bípode / Apoyo Pesado",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "BÍPODE", "DREADNOUGHT", "ALA DE MUERTE", "VEHICLE", "WALKER", "DREADNOUGHT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "8\"", r: 10, sv: "2+", inv: "-", h: 12, l: "6+", co: 4 },
      pointsOptions: [{ models: 1, points: 150 }],
      rangedWeapons: [
        { name: "Cañón láser Ballistus", range: "48\"", a: 2, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] },
        { name: "Lanzamisiles Ballistus (Perforante)", range: "48\"", a: 2, bs: "3+", f: 9, ap: -2, d: "D6", keywords: [] },
        { name: "Lanzamisiles Ballistus (Fragmentación)", range: "48\"", a: "2D6", bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Área"] }
      ],
      meleeWeapons: [
        { name: "Pies Acorazados", range: "Combate", a: 5, ws: "4+", f: 7, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Fuego de Precisión Ballistus: Repite tiradas para impactar contra objetivos que no estén por debajo de la mitad de su fuerza."],
      leaderOf: [],
      notes: "Plataforma de artillería andante de largo alcance del Ala de Muerte."
    },
    {
      id: "sm_redemptor_dreadnought",
      name: "Dreadnought Redentor",
      originalName: "Redemptor Dreadnought",
      role: "Bípode / Asedio",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "BÍPODE", "DREADNOUGHT", "ALA DE MUERTE", "VEHICLE", "WALKER", "DREADNOUGHT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "8\"", r: 10, sv: "2+", inv: "-", h: 12, l: "6+", co: 4 },
      pointsOptions: [{ models: 1, points: 170 }],
      rangedWeapons: [
        { name: "Macro Incinerador de Plasma (Sobrecargado)", range: "36\"", a: "D6+1", bs: "3+", f: 9, ap: -4, d: 3, keywords: ["Área", "Peligrosa", "Blast", "Hazardous"] },
        { name: "Cañón Gatling pesado Onslaught", range: "36\"", a: 8, bs: "3+", f: 6, ap: -1, d: 1, keywords: ["Heridas Devastadoras"] }
      ],
      meleeWeapons: [
        { name: "Puño Redemptor", range: "Combate", a: 5, ws: "3+", f: 12, ap: -2, d: "D6+1", keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Blindaje Reforzado: Reduce en 1 todo el daño sufrido (mínimo 1)."],
      leaderOf: [],
      notes: "El dreadnought multipropósito por excelencia, veterano de la 1ª Compañía."
    },
    {
      id: "sm_dreadnought",
      name: "Dreadnought Clásico / Venerable",
      originalName: "Dreadnought",
      role: "Bípode / Soporte",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "BÍPODE", "DREADNOUGHT", "ALA DE MUERTE", "VEHICLE", "WALKER", "DREADNOUGHT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "6\"", r: 9, sv: "2+", inv: "-", h: 8, l: "6+", co: 3 },
      pointsOptions: [{ models: 1, points: 135 }],
      rangedWeapons: [
        { name: "Cañón Láser Doble", range: "48\"", a: 2, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] }
      ],
      meleeWeapons: [
        { name: "Puño Dreadnought", range: "Combate", a: 5, ws: "3+", f: 10, ap: -2, d: 3, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Sabiduría de los Antiguos (Aura): Unidades de infantería a 6\" repiten tiradas de 1 para impactar y herir."],
      leaderOf: [],
      notes: "Casta venerable de antiguos héroes del Capítulo."
    },
    {
      id: "sm_venerable_dreadnought",
      name: "Dreadnought Venerable",
      originalName: "Venerable Dreadnought",
      role: "Bípode / Soporte Veterano",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "BÍPODE", "DREADNOUGHT", "ALA DE MUERTE", "VEHICLE", "WALKER", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "6\"", r: 9, sv: "2+", inv: "-", h: 8, l: "6+", co: 3 },
      pointsOptions: [{ models: 1, points: 135 }],
      rangedWeapons: [
        { name: "Cañón Láser Doble", range: "48\"", a: 2, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] }
      ],
      meleeWeapons: [
        { name: "Puño Dreadnought Acorazado", range: "Combate", a: 5, ws: "3+", f: 10, ap: -2, d: 3, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Resolución Venerable: No Hay Dolor 6+ y aura de repetición de tiradas de 1."],
      leaderOf: [],
      notes: "Casta venerable de antiguos héroes del Capítulo."
    },
    {
      id: "sm_thunderhawk_gunship",
      name: "Cañonera Thunderhawk",
      originalName: "Thunderhawk Gunship",
      role: "Titánico / Aeronave Pesada",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["TITÁNICO", "AERONAVE", "VEHÍCULO", "TRANSPORTE", "VOLAR", "ALA DE CUERVO", "TITANIC", "AIRCRAFT", "VEHICLE", "TRANSPORT", "FLY", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "20+\"", r: 12, sv: "2+", inv: "-", h: 30, l: "6+", co: 0 },
      pointsOptions: [{ models: 1, points: 850 }],
      rangedWeapons: [
        { name: "Cañón Turbo-láser", range: "96\"", a: "D3+1", bs: "3+", f: 20, ap: -4, d: "D6+6", keywords: ["Área", "Blast"] },
        { name: "Cañones Láser pesados (x2)", range: "48\"", a: 4, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] },
        { name: "Bólteres Pesados dobles (x4)", range: "36\"", a: 12, bs: "3+", f: 5, ap: -1, d: 2, keywords: [] }
      ],
      meleeWeapons: [],
      abilities: ["Juramento de Momento", "Supremacía Titánica: Capacidad de transporte de 32 miniaturas o hasta 3 Dreadnoughts."],
      leaderOf: [],
      notes: "Superpesado titánico aerotransportado del Capítulo."
    },
    {
      id: "sm_land_raider_standard",
      name: "Land Raider",
      originalName: "Land Raider",
      role: "Vehículo / Transporte Blindado",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "HUMO", "TRANSPORTE", "ALA DE MUERTE", "VEHICLE", "SMOKE", "TRANSPORT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "10\"", r: 12, sv: "2+", inv: "-", h: 16, l: "6+", co: 5 },
      pointsOptions: [{ models: 1, points: 245 }],
      rangedWeapons: [
        { name: "Cañón Láser Doble Godhammer (x2)", range: "48\"", a: 4, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] },
        { name: "Bólter Pesado gemelo", range: "36\"", a: 3, bs: "3+", f: 5, ap: -1, d: 2, keywords: ["Doble Enlace"] }
      ],
      meleeWeapons: [
        { name: "Orugas Acorazadas", range: "Combate", a: 6, ws: "4+", f: 8, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Rampa de Asalto (Assault Ramp): Las unidades que desembarquen tras un movimiento normal pueden declarar una carga.", "Capacidad: 12 miniaturas."],
      leaderOf: [],
      notes: "El vehículo de asedio y transporte definitivo del Ala de Muerte con cañones láser Godhammer."
    },
    {
      id: "sm_land_raider_crusader",
      name: "Land Raider Cruzado",
      originalName: "Land Raider Crusader",
      role: "Vehículo / Transporte de Asalto",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "HUMO", "TRANSPORTE", "ALA DE MUERTE", "EXPLOSIVOS", "VEHICLE", "SMOKE", "TRANSPORT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "10\"", r: 12, sv: "2+", inv: "-", h: 16, l: "6+", co: 5 },
      pointsOptions: [{ models: 1, points: 230 }],
      rangedWeapons: [
        { name: "Bólteres Huracán gemelos (x2)", range: "24\"", a: 24, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Doble Enlace", "Twin-linked"] },
        { name: "Cañón de Asalto gemelo", range: "24\"", a: 6, bs: "3+", f: 6, ap: 0, d: 1, keywords: ["Heridas Devastadoras"] }
      ],
      meleeWeapons: [
        { name: "Orugas Acorazadas", range: "Combate", a: 6, ws: "4+", f: 8, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Rampa de Asalto (Assault Ramp): Desembarco y carga en el mismo turno.", "Capacidad: 16 miniaturas de infantería o 8 Exterminadores."],
      leaderOf: [],
      notes: "Variante creada expresamente para asaltar con escuadras masivas de Exterminadores."
    },
    {
      id: "sm_land_raider_redeemer",
      name: "Land Raider Redentor",
      originalName: "Land Raider Redeemer",
      role: "Vehículo / Transporte Flamígero",
      wing: "Ala de Muerte",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "HUMO", "TRANSPORTE", "ALA DE MUERTE", "VEHICLE", "SMOKE", "TRANSPORT", "DEATHWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "10\"", r: 12, sv: "2+", inv: "-", h: 16, l: "6+", co: 5 },
      pointsOptions: [{ models: 1, points: 245 }],
      rangedWeapons: [
        { name: "Cañones Tormenta Flamestorm (x2)", range: "12\"", a: "2D6+6", bs: "N/A", f: 6, ap: -2, d: 2, keywords: ["Torrente", "Ignora Cobertura", "Torrent", "Ignores Cover"] },
        { name: "Cañón de Asalto gemelo", range: "24\"", a: 6, bs: "3+", f: 6, ap: 0, d: 1, keywords: ["Heridas Devastadoras"] }
      ],
      meleeWeapons: [
        { name: "Orugas Acorazadas", range: "Combate", a: 6, ws: "4+", f: 8, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Rampa de Asalto: Desembarca y carga de forma inmediata.", "Capacidad: 14 miniaturas."],
      leaderOf: [],
      notes: "El destructor de trincheras definitivo con lanzallamas de plasma pesado."
    },
    {
      id: "sm_repulsor",
      name: "Tanque Repulsor",
      originalName: "Repulsor",
      role: "Vehículo / Transporte Pesado",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "TRANSPORTE", "DESLIZADOR", "VEHICLE", "TRANSPORT", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "10\"", r: 12, sv: "3+", inv: "-", h: 16, l: "6+", co: 5 },
      pointsOptions: [{ models: 1, points: 190 }],
      rangedWeapons: [
        { name: "Cañón láser pesado gemelo", range: "48\"", a: 1, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: ["Doble enlace"] },
        { name: "Cañón Gatling pesado", range: "24\"", a: 8, bs: "3+", f: 5, ap: 0, d: 1, keywords: [] }
      ],
      meleeWeapons: [
        { name: "Embestida acorazada", range: "Combate", a: 6, ws: "4+", f: 8, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Salida de Emergencia: Si una unidad amiga desembarcada es cargada, puede reembarcar inmediatamente.", "Capacidad: 14 miniaturas."],
      leaderOf: [],
      notes: "Transporte gravítico blindado multipropósito."
    },
    {
      id: "sm_repulsor_executioner",
      name: "Repulsor Ejecutor",
      originalName: "Repulsor Executioner",
      role: "Vehículo / Cazador de Tanques Pesado",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "TRANSPORTE", "DESLIZADOR", "VEHICLE", "TRANSPORT", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "10\"", r: 12, sv: "3+", inv: "-", h: 16, l: "6+", co: 5 },
      pointsOptions: [{ models: 1, points: 260 }],
      rangedWeapons: [
        { name: "Destructor Láser Pesado", range: "72\"", a: 2, bs: "3+", f: 16, ap: -4, d: "D6+4", keywords: ["Pesada"] },
        { name: "Incinerador Macroplasma", range: "36\"", a: "D6+1", bs: "3+", f: 9, ap: -4, d: 3, keywords: ["Área", "Peligrosa"] }
      ],
      meleeWeapons: [
        { name: "Embestida Acorazada", range: "Combate", a: 6, ws: "4+", f: 8, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Puntería de Verdugo: +1 para impactar contra objetivos por debajo de la mitad de su fuerza.", "Capacidad: 6 miniaturas."],
      leaderOf: [],
      notes: "El destructor acorazado más potente de los Marines Espaciales."
    },
    {
      id: "sm_gladiator_lancer",
      name: "Gladiator Lancero",
      originalName: "Gladiator Lancer",
      role: "Vehículo / Antitanque",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["VEHÍCULO", "DESLIZADOR", "VEHICLE", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "10\"", r: 10, sv: "3+", inv: "-", h: 12, l: "6+", co: 3 },
      pointsOptions: [{ models: 1, points: 160 }],
      rangedWeapons: [
        { name: "Cañón láser Lancer", range: "72\"", a: 2, bs: "3+", f: 14, ap: -4, d: "D6+3", keywords: ["Pesada"] }
      ],
      meleeWeapons: [
        { name: "Embestida", range: "Combate", a: 3, ws: "4+", f: 6, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Fuego de Precisión: Repite 1 impacto, 1 herida y 1 dado de daño por fase."],
      leaderOf: [],
      notes: "Cazatanques de larga distancia."
    },
    {
      id: "sm_stormraven_gunship",
      name: "Cañonera Stormraven",
      originalName: "Stormraven Gunship",
      role: "Aeronave / Transporte Pesado",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["AERONAVE", "VEHÍCULO", "TRANSPORTE", "VOLAR", "ALA DE CUERVO", "AIRCRAFT", "VEHICLE", "TRANSPORT", "FLY", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "20+\"", r: 10, sv: "3+", inv: "-", h: 14, l: "6+", co: 0 },
      pointsOptions: [{ models: 1, points: 280 }],
      rangedWeapons: [
        { name: "Cañón Láser Doble", range: "48\"", a: 2, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] },
        { name: "Cañón de Plasma Pesado", range: "36\"", a: "D3", bs: "3+", f: 8, ap: -3, d: 2, keywords: ["Área"] }
      ],
      meleeWeapons: [],
      abilities: ["Juramento de Momento", "Transporte Aéreo: Puede transportar hasta 12 miniaturas de infantería Y 1 Dreadnought simultáneamente."],
      leaderOf: [],
      notes: "Transporte aéreo de asalto acorazado."
    },
    {
      id: "sm_stormtalon_gunship",
      name: "Cañonera Stormtalon",
      originalName: "Stormtalon Gunship",
      role: "Aeronave / Escolta",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["AERONAVE", "VEHÍCULO", "VOLAR", "ALA DE CUERVO", "AIRCRAFT", "VEHICLE", "FLY", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "20+\"", r: 8, sv: "3+", inv: "-", h: 10, l: "6+", co: 0 },
      pointsOptions: [{ models: 1, points: 170 }],
      rangedWeapons: [
        { name: "Cañón de Asalto gemelo", range: "24\"", a: 6, bs: "3+", f: 6, ap: 0, d: 1, keywords: ["Heridas Devastadoras"] }
      ],
      meleeWeapons: [],
      abilities: ["Juramento de Momento", "Escolta de Intercepción: Suma +1 para impactar contra objetivos sin la clave Volar."],
      leaderOf: [],
      notes: "Caza de apoyo aéreo cercano."
    },
    {
      id: "sm_stormhawk_interceptor",
      name: "Interceptor Stormhawk",
      originalName: "Stormhawk Interceptor",
      role: "Aeronave / Superioridad Aérea",
      wing: "Ala de Cuervo",
      isEpicHero: false,
      keywords: ["AERONAVE", "VEHÍCULO", "VOLAR", "ALA DE CUERVO", "AIRCRAFT", "VEHICLE", "FLY", "RAVENWING", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "20+\"", r: 8, sv: "3+", inv: "-", h: 10, l: "6+", co: 0 },
      pointsOptions: [{ models: 1, points: 160 }],
      rangedWeapons: [
        { name: "Cañones Láser gemelos", range: "48\"", a: 2, bs: "3+", f: 12, ap: -3, d: "D6+1", keywords: [] }
      ],
      meleeWeapons: [],
      abilities: ["Juramento de Momento", "Cazador de Vuelo: +1 para impactar contra unidades con Volar."],
      leaderOf: [],
      notes: "Caza de combate para derribar aeronaves rivales."
    },
    {
      id: "sm_intercessors",
      name: "Escuadra de Intercesores",
      originalName: "Intercessor Squad",
      role: "Línea / Infantería",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "LÍNEA", "TACTICUS", "INFANTRY", "BATTLELINE", "TACTICUS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "-", h: 2, l: "6+", co: 2 },
      pointsOptions: [
        { models: 5, points: 85 },
        { models: 10, points: 170 }
      ],
      rangedWeapons: [
        { name: "Rifle Bólter", range: "24\"", a: 2, bs: "3+", f: 4, ap: -1, d: 1, keywords: ["Asalto", "Pesada", "Assault", "Heavy"] }
      ],
      meleeWeapons: [
        { name: "Arma de combate", range: "Combate", a: 3, ws: "3+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Objetivo Asegurado: Controlan objetivos incluso tras alejarse de ellos."],
      leaderOf: [],
      notes: "Núcleo versátil de la infantería del Capítulo."
    },
    {
      id: "sm_assault_intercessors",
      name: "Escuadra de Intercesores de Asalto",
      originalName: "Assault Intercessor Squad",
      role: "Línea / Combate",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "LÍNEA", "TACTICUS", "ASALTO", "INFANTRY", "BATTLELINE", "TACTICUS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "-", h: 2, l: "6+", co: 2 },
      pointsOptions: [
        { models: 5, points: 85 },
        { models: 10, points: 170 }
      ],
      rangedWeapons: [
        { name: "Pistola Pesada Bólter", range: "18\"", a: 1, bs: "3+", f: 4, ap: -1, d: 1, keywords: ["Pistola", "Pistol"] }
      ],
      meleeWeapons: [
        { name: "Espada Sierra Astartes", range: "Combate", a: 4, ws: "3+", f: 4, ap: -1, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Carga Destructora: Repite tiradas para herir de 1 en combate cuerpo a cuerpo (o repite todas contra enemigos en objetivos)."],
      leaderOf: [],
      notes: "Infantería de choque cuerpo a cuerpo."
    },
    {
      id: "sm_hellblasters",
      name: "Escuadra de Revientainfiernos (Hellblasters)",
      originalName: "Hellblaster Squad",
      role: "Infantería / Plasma",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "TACTICUS", "PLASMA", "INFANTRY", "TACTICUS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "-", h: 2, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 115 },
        { models: 10, points: 230 }
      ],
      rangedWeapons: [
        { name: "Incinerador de Plasma (Estándar)", range: "24\"", a: 2, bs: "3+", f: 7, ap: -2, d: 1, keywords: ["Asalto", "Pesada", "Assault", "Heavy"] },
        { name: "Incinerador de Plasma (Sobrecargado)", range: "24\"", a: 2, bs: "3+", f: 8, ap: -3, d: 2, keywords: ["Peligrosa", "Hazardous"] }
      ],
      meleeWeapons: [
        { name: "Arma de combate", range: "Combate", a: 3, ws: "3+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Dispara al Morir: Con una tirada de 3+, una miniatura eliminada puede disparar inmediatamente antes de ser retirada."],
      leaderOf: [],
      notes: "Especialistas devotos del plasma, en perfecta sinergia con el Capítulo."
    },
    {
      id: "sm_infernus",
      name: "Escuadra Infernus",
      originalName: "Infernus Squad",
      role: "Infantería / Lanzallamas",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "TACTICUS", "LANZALLAMAS", "INFANTRY", "TACTICUS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "-", h: 2, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 95 },
        { models: 10, points: 190 }
      ],
      rangedWeapons: [
        { name: "Pirólisis (Pyreblaster)", range: "12\"", a: "D6", bs: "N/A", f: 5, ap: 0, d: 1, keywords: ["Torrente", "Ignora Cobertura", "Torrent", "Ignores Cover"] }
      ],
      meleeWeapons: [
        { name: "Arma de combate", range: "Combate", a: 3, ws: "3+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Fuego Purgador: Si inflige impactos a una unidad enemiga, esta debe realizar un chequeo de Acobardamiento."],
      leaderOf: [],
      notes: "Purificadores con lanzallamas de alta presión."
    },
    {
      id: "sm_infiltrators",
      name: "Escuadra de Infiltradores",
      originalName: "Infiltrator Squad",
      role: "Infantería / Sigilo",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "PHOBOS", "INFILTRADOR", "HUMO", "INFANTRY", "PHOBOS", "SMOKE", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "6\"", r: 4, sv: "3+", inv: "-", h: 2, l: "6+", co: 1 },
      pointsOptions: [
        { models: 5, points: 85 },
        { models: 10, points: 150 }
      ],
      rangedWeapons: [
        { name: "Carabina Bólter Marksman", range: "24\"", a: 2, bs: "3+", f: 4, ap: 0, d: 1, keywords: ["Pesada", "Golpes Letales", "Heavy", "Lethal Hits"] }
      ],
      meleeWeapons: [
        { name: "Arma de combate", range: "Combate", a: 3, ws: "3+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Infiltradores (Despliegue a >9\")", "Red Omni-scrambler: Las reservas y refuerzos enemigos no pueden desplegar a 12\" o menos de esta unidad."],
      leaderOf: [],
      notes: "La mejor unidad para denegar el despliegue rápido enemigo."
    },
    {
      id: "sm_eradicators",
      name: "Escuadra de Erradicadores",
      originalName: "Eradicator Squad",
      role: "Infantería Pesada / Fusión",
      wing: "Compañía Verde",
      isEpicHero: false,
      keywords: ["INFANTERÍA", "GRAVIS", "FUSIÓN", "INFANTRY", "GRAVIS", "ADEPTUS ASTARTES", "IMPERIUM"],
      stats: { m: "5\"", r: 6, sv: "3+", inv: "-", h: 3, l: "6+", co: 1 },
      pointsOptions: [
        { models: 3, points: 100 },
        { models: 6, points: 200 }
      ],
      rangedWeapons: [
        { name: "Fusil de Fusión Melta", range: "18\"", a: 1, bs: "3+", f: 9, ap: -4, d: "D6", keywords: ["Fusión 2", "Melta 2"] }
      ],
      meleeWeapons: [
        { name: "Arma de combate", range: "Combate", a: 3, ws: "3+", f: 4, ap: 0, d: 1, keywords: [] }
      ],
      abilities: ["Juramento de Momento", "Exterminación Total: Repite todas las tiradas para impactar, herir y daño contra Monstruos o Vehículos."],
      leaderOf: [],
      notes: "Cazadores acorazados en servoarmadura Gravis."
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
