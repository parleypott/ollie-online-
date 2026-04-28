
/* ===== newpress/game-data.jsx ===== */
/* ============================================================
   ¡PALABRA! — Game Data
   Spanish quiz arcade for 4th graders
   ============================================================ */

// ----- Collectible Characters ("Amigos") -----
// Drawn as inline SVG cartoons. Each has a Spanish name + theme.
const AMIGOS = [
  { id: 'churro',  name: 'El Churro',     rarity: 'común',     color: '#C68642', tag: 'food',    desc: 'Crujiente y dulce.' },
  { id: 'llama',   name: 'La Llama',      rarity: 'rara',      color: '#E8C9A0', tag: 'animal',  desc: 'De los Andes.' },
  { id: 'tigre',   name: 'El Tigre',      rarity: 'épica',     color: '#FF8C42', tag: 'animal',  desc: 'Rey de la selva.' },
  { id: 'tortuga', name: 'La Tortuga',    rarity: 'común',     color: '#0D5921', tag: 'animal',  desc: 'Lenta pero sabia.' },
  { id: 'taco',    name: 'El Taco',       rarity: 'común',     color: '#FFBF00', tag: 'food',    desc: 'Picante y feliz.' },
  { id: 'sol',     name: 'El Sol',        rarity: 'rara',      color: '#FFBF00', tag: 'nature',  desc: 'Brilla mucho.' },
  { id: 'luna',    name: 'La Luna',       rarity: 'rara',      color: '#D9D9D9', tag: 'nature',  desc: 'Por la noche.' },
  { id: 'gato',    name: 'El Gato',       rarity: 'común',     color: '#121118', tag: 'animal',  desc: 'Maullido suave.' },
  { id: 'mango',   name: 'El Mango',      rarity: 'común',     color: '#FFBF00', tag: 'food',    desc: 'Dulce y jugoso.' },
  { id: 'dragon',  name: 'El Dragón',     rarity: 'legendaria',color: '#DD2C1E', tag: 'mythic',  desc: '¡Cuidado fuego!' },
  { id: 'abeja',   name: 'La Abeja',      rarity: 'común',     color: '#FFBF00', tag: 'animal',  desc: 'Hace miel rica.' },
  { id: 'pulpo',   name: 'El Pulpo',      rarity: 'épica',     color: '#520004', tag: 'animal',  desc: 'Ocho brazos.' },
];

// ----- Question Banks (4th grade Spanish) -----
const QUESTIONS = {
  // Vocab — pick the Spanish word for the English (or vice versa)
  vocab: [
    { q: 'What is "dog" in Spanish?', a: 'el perro', wrong: ['el gato', 'el pájaro', 'el caballo'], topic: 'Animales' },
    { q: 'What is "apple" in Spanish?', a: 'la manzana', wrong: ['la pera', 'la naranja', 'la fresa'], topic: 'Comida' },
    { q: 'What is "sister" in Spanish?', a: 'la hermana', wrong: ['la madre', 'la tía', 'la prima'], topic: 'Familia' },
    { q: 'What is "cat" in Spanish?', a: 'el gato', wrong: ['el perro', 'el ratón', 'el conejo'], topic: 'Animales' },
    { q: 'What is "bread" in Spanish?', a: 'el pan', wrong: ['la leche', 'el queso', 'el arroz'], topic: 'Comida' },
    { q: 'What is "father" in Spanish?', a: 'el padre', wrong: ['el hermano', 'el abuelo', 'el tío'], topic: 'Familia' },
    { q: 'What is "house" in Spanish?', a: 'la casa', wrong: ['la escuela', 'la tienda', 'la calle'], topic: 'Lugares' },
    { q: 'What is "water" in Spanish?', a: 'el agua', wrong: ['el jugo', 'la leche', 'el café'], topic: 'Bebidas' },
    { q: 'What is "book" in Spanish?', a: 'el libro', wrong: ['el lápiz', 'el papel', 'la mesa'], topic: 'Escuela' },
    { q: 'What is "horse" in Spanish?', a: 'el caballo', wrong: ['la vaca', 'el cerdo', 'la oveja'], topic: 'Animales' },
    { q: 'What is "milk" in Spanish?', a: 'la leche', wrong: ['el agua', 'el jugo', 'el queso'], topic: 'Bebidas' },
    { q: 'What is "school" in Spanish?', a: 'la escuela', wrong: ['la casa', 'el parque', 'la tienda'], topic: 'Lugares' },
    { q: 'What is "friend" in Spanish?', a: 'el amigo', wrong: ['el primo', 'el vecino', 'el maestro'], topic: 'Personas' },
    { q: 'What is "red" in Spanish?', a: 'rojo', wrong: ['azul', 'verde', 'amarillo'], topic: 'Colores' },
    { q: 'What is "blue" in Spanish?', a: 'azul', wrong: ['verde', 'rojo', 'morado'], topic: 'Colores' },
  ],
  // Reverse — pick the English for a Spanish word
  reverse: [
    { q: '¿Qué significa "el sol"?', a: 'sun', wrong: ['moon', 'star', 'sky'], topic: 'Naturaleza' },
    { q: '¿Qué significa "la luna"?', a: 'moon', wrong: ['sun', 'cloud', 'night'], topic: 'Naturaleza' },
    { q: '¿Qué significa "el árbol"?', a: 'tree', wrong: ['flower', 'leaf', 'bush'], topic: 'Naturaleza' },
    { q: '¿Qué significa "el queso"?', a: 'cheese', wrong: ['milk', 'butter', 'egg'], topic: 'Comida' },
    { q: '¿Qué significa "la mariposa"?', a: 'butterfly', wrong: ['bee', 'bird', 'fly'], topic: 'Animales' },
    { q: '¿Qué significa "el zapato"?', a: 'shoe', wrong: ['hat', 'shirt', 'sock'], topic: 'Ropa' },
    { q: '¿Qué significa "la cabeza"?', a: 'head', wrong: ['hand', 'foot', 'arm'], topic: 'Cuerpo' },
    { q: '¿Qué significa "feliz"?', a: 'happy', wrong: ['sad', 'angry', 'tired'], topic: 'Emociones' },
    { q: '¿Qué significa "grande"?', a: 'big', wrong: ['small', 'tall', 'wide'], topic: 'Adjetivos' },
    { q: '¿Qué significa "pequeño"?', a: 'small', wrong: ['big', 'short', 'tiny'], topic: 'Adjetivos' },
  ],
  // Pronouns + verb rules
  pronouns: [
    { q: 'Which pronoun means "I"?', a: 'yo', wrong: ['tú', 'él', 'nosotros'], topic: 'Pronombres' },
    { q: 'Which pronoun means "you" (informal)?', a: 'tú', wrong: ['yo', 'usted', 'ellos'], topic: 'Pronombres' },
    { q: 'Which pronoun means "we"?', a: 'nosotros', wrong: ['vosotros', 'ellos', 'ustedes'], topic: 'Pronombres' },
    { q: 'Which pronoun means "she"?', a: 'ella', wrong: ['él', 'usted', 'ellas'], topic: 'Pronombres' },
    { q: '"Yo ___ feliz." (I am happy)', a: 'soy', wrong: ['eres', 'es', 'somos'], topic: 'Ser' },
    { q: '"Tú ___ mi amigo." (You are my friend)', a: 'eres', wrong: ['soy', 'es', 'son'], topic: 'Ser' },
    { q: '"Nosotros ___ estudiantes."', a: 'somos', wrong: ['soy', 'son', 'eres'], topic: 'Ser' },
    { q: '"Ella ___ muy alta." (She is very tall)', a: 'es', wrong: ['soy', 'eres', 'son'], topic: 'Ser' },
    { q: '"Yo ___ una manzana." (I eat an apple)', a: 'como', wrong: ['comes', 'come', 'comemos'], topic: 'Verbos' },
    { q: '"Tú ___ español." (You speak Spanish)', a: 'hablas', wrong: ['hablo', 'habla', 'hablan'], topic: 'Verbos' },
  ],
  // Negative sentences
  negative: [
    { q: 'How do you say "I do not eat"?', a: 'Yo no como', wrong: ['Yo como no', 'No yo como', 'Yo nada como'], topic: 'Negativos' },
    { q: 'How do you say "She does not run"?', a: 'Ella no corre', wrong: ['Ella corre no', 'No ella corre', 'Ella nunca'], topic: 'Negativos' },
    { q: 'Where does "no" go in: "Yo ___ hablo ___"?', a: 'Yo no hablo', wrong: ['Yo hablo no', 'No hablo yo', 'Yo hablo nada'], topic: 'Negativos' },
    { q: '"We do not have" in Spanish:', a: 'Nosotros no tenemos', wrong: ['Nosotros tenemos no', 'No nosotros tenemos', 'Nosotros nada'], topic: 'Negativos' },
    { q: 'Which sentence is correctly negative?', a: 'Él no es alto', wrong: ['Él es no alto', 'No él es alto', 'Él alto no es'], topic: 'Negativos' },
  ],
};

// Flatten + tag with topic for easy mixing
const ALL_QUESTIONS = [
  ...QUESTIONS.vocab,
  ...QUESTIONS.reverse,
  ...QUESTIONS.pronouns,
  ...QUESTIONS.negative,
];

// Pick N random questions
function pickQuestions(n = 8) {
  const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n).map(q => ({
    ...q,
    options: [q.a, ...q.wrong].sort(() => Math.random() - 0.5),
  }));
}

// Fake other players for the lobby
const FAKE_PLAYERS = [
  { name: 'Sofía',    amigo: 'llama'   },
  { name: 'Mateo',    amigo: 'tigre'   },
  { name: 'Lucía',    amigo: 'taco'    },
  { name: 'Diego',    amigo: 'gato'    },
  { name: 'Valentina',amigo: 'mango'   },
  { name: 'Santi',    amigo: 'tortuga' },
  { name: 'Camila',   amigo: 'churro'  },
  { name: 'Leo',      amigo: 'sol'     },
  { name: 'Isa',      amigo: 'luna'    },
  { name: 'Mile',     amigo: 'abeja'   },
  { name: 'Emma',     amigo: 'pulpo'   },
];

// Game modes
const GAME_MODES = [
  { id: 'cafe',    name: 'Tower Café',         es: 'Café Torre',        emoji: '🌮', desc: 'Sirve tacos antes de que se vayan los clientes.', accent: '#DD2C1E' },
  { id: 'fish',    name: 'Big Fish',           es: 'Pez Gordo',         emoji: '🐟', desc: 'Pesca la palabra correcta.',                        accent: '#004CFF' },
  { id: 'match',   name: 'Mercado Match',      es: 'Mercado Match',     emoji: '🃏', desc: 'Empareja español con inglés.',                      accent: '#0D5921' },
  { id: 'race',    name: 'Donkey Race',        es: 'Carrera de Burros', emoji: '🐴', desc: 'Corre — respuesta correcta = velocidad.',           accent: '#FFBF00' },
  { id: 'bingo',   name: 'Loco Bingo',         es: 'Bingo Loco',        emoji: '🎲', desc: 'Marca tu cartón antes que nadie.',                  accent: '#520004' },
  { id: 'pinata',  name: 'Piñata Smash',       es: 'Piñata Loca',       emoji: '🪅', desc: 'Rompe la piñata correcta.',                         accent: '#520004' },
  { id: 'loteria', name: 'Lotería',            es: 'Lotería',           emoji: '🎴', desc: 'El locutor canta — marca tu tabla.',                accent: '#412C27' },
  { id: 'balloon', name: 'Globos',             es: 'Globos al Cielo',   emoji: '🎈', desc: 'Pop the balloon with the right answer.',            accent: '#004CFF' },
  { id: 'soccer',  name: 'Penalty Kick',       es: 'Penalti',           emoji: '⚽', desc: 'Patea la pelota a la respuesta correcta.',          accent: '#0D5921' },
];

window.AMIGOS = AMIGOS;
window.QUESTIONS = QUESTIONS;
window.ALL_QUESTIONS = ALL_QUESTIONS;
window.pickQuestions = pickQuestions;
window.FAKE_PLAYERS = FAKE_PLAYERS;
window.GAME_MODES = GAME_MODES;

/* ===== newpress/amigo-art.jsx ===== */
/* ============================================================
   Cartoon SVG art for collectible Amigos
   Cute, chunky, 4th-grade-friendly. Drawn at 100x100 viewBox.
   ============================================================ */

const AmigoArt = ({ id, size = 80 }) => {
  const props = { width: size, height: size, viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' };
  const stroke = { stroke: '#121118', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

  switch (id) {
    case 'churro':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="85" rx="30" ry="5" fill="#121118" opacity="0.15"/>
          {/* churro body — wavy stick */}
          <path d="M 25 70 Q 35 60, 30 50 T 40 30 T 70 25" fill="none" stroke="#C68642" strokeWidth="14" strokeLinecap="round"/>
          <path d="M 25 70 Q 35 60, 30 50 T 40 30 T 70 25" fill="none" stroke="#8B5A2B" strokeWidth="14" strokeLinecap="round" strokeDasharray="2 6" opacity="0.6"/>
          {/* sugar dots */}
          <circle cx="35" cy="50" r="1.5" fill="#FFF"/>
          <circle cx="55" cy="32" r="1.5" fill="#FFF"/>
          <circle cx="45" cy="40" r="1.5" fill="#FFF"/>
          {/* face */}
          <circle cx="62" cy="26" r="1.5" fill="#121118"/>
          <circle cx="70" cy="22" r="1.5" fill="#121118"/>
          <path d="M 63 32 Q 67 35, 71 30" {...stroke} fill="none"/>
        </svg>
      );

    case 'llama':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="92" rx="28" ry="4" fill="#121118" opacity="0.15"/>
          {/* body */}
          <ellipse cx="50" cy="65" rx="25" ry="20" fill="#E8C9A0" {...stroke}/>
          {/* legs */}
          <rect x="32" y="78" width="6" height="14" fill="#E8C9A0" {...stroke}/>
          <rect x="62" y="78" width="6" height="14" fill="#E8C9A0" {...stroke}/>
          {/* neck */}
          <rect x="55" y="30" width="12" height="35" fill="#E8C9A0" {...stroke}/>
          {/* head */}
          <ellipse cx="62" cy="28" rx="14" ry="11" fill="#E8C9A0" {...stroke}/>
          {/* ears */}
          <path d="M 53 22 L 50 12 L 58 18 Z" fill="#E8C9A0" {...stroke}/>
          <path d="M 70 22 L 73 12 L 66 18 Z" fill="#E8C9A0" {...stroke}/>
          {/* face */}
          <circle cx="58" cy="27" r="1.5" fill="#121118"/>
          <circle cx="68" cy="27" r="1.5" fill="#121118"/>
          <ellipse cx="63" cy="33" rx="3" ry="1.5" fill="#DD8888"/>
          {/* fluffy tuft */}
          <circle cx="63" cy="14" r="3" fill="#FFF8E7" {...stroke}/>
        </svg>
      );

    case 'tigre':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="92" rx="30" ry="4" fill="#121118" opacity="0.15"/>
          {/* head circle */}
          <circle cx="50" cy="50" r="32" fill="#FF8C42" {...stroke}/>
          {/* stripes */}
          <path d="M 25 35 Q 30 40, 28 50" fill="none" stroke="#121118" strokeWidth="3"/>
          <path d="M 75 35 Q 70 40, 72 50" fill="none" stroke="#121118" strokeWidth="3"/>
          <path d="M 35 22 L 40 30" stroke="#121118" strokeWidth="3"/>
          <path d="M 65 22 L 60 30" stroke="#121118" strokeWidth="3"/>
          {/* ears */}
          <path d="M 30 25 L 28 12 L 42 22 Z" fill="#FF8C42" {...stroke}/>
          <path d="M 70 25 L 72 12 L 58 22 Z" fill="#FF8C42" {...stroke}/>
          <path d="M 32 22 L 35 16 L 39 21" fill="#FFD9B5" stroke="none"/>
          <path d="M 68 22 L 65 16 L 61 21" fill="#FFD9B5" stroke="none"/>
          {/* face */}
          <ellipse cx="50" cy="55" rx="14" ry="10" fill="#FFF8E7"/>
          <circle cx="40" cy="45" r="2.5" fill="#121118"/>
          <circle cx="60" cy="45" r="2.5" fill="#121118"/>
          <path d="M 47 55 L 50 58 L 53 55" {...stroke} fill="#121118"/>
          <path d="M 50 58 Q 45 63, 42 60" {...stroke} fill="none"/>
          <path d="M 50 58 Q 55 63, 58 60" {...stroke} fill="none"/>
          {/* whiskers */}
          <path d="M 35 55 L 25 53 M 35 58 L 25 60" stroke="#121118" strokeWidth="1"/>
          <path d="M 65 55 L 75 53 M 65 58 L 75 60" stroke="#121118" strokeWidth="1"/>
        </svg>
      );

    case 'tortuga':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="88" rx="30" ry="4" fill="#121118" opacity="0.15"/>
          {/* shell */}
          <ellipse cx="50" cy="55" rx="32" ry="22" fill="#0D5921" {...stroke}/>
          {/* shell pattern */}
          <path d="M 30 50 L 45 45 L 50 55 L 45 65 L 30 60 Z" fill="#1F7A35" stroke="#0a3d17" strokeWidth="1.5"/>
          <path d="M 55 45 L 70 50 L 70 60 L 55 65 L 50 55 Z" fill="#1F7A35" stroke="#0a3d17" strokeWidth="1.5"/>
          {/* head */}
          <circle cx="80" cy="55" r="10" fill="#0D5921" {...stroke}/>
          <circle cx="83" cy="52" r="1.5" fill="#FFF"/>
          <circle cx="83" cy="52" r="0.8" fill="#121118"/>
          <path d="M 84 58 Q 87 60, 88 56" {...stroke} fill="none"/>
          {/* legs */}
          <ellipse cx="25" cy="68" rx="6" ry="4" fill="#0D5921" {...stroke}/>
          <ellipse cx="72" cy="72" rx="6" ry="4" fill="#0D5921" {...stroke}/>
        </svg>
      );

    case 'taco':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="88" rx="30" ry="4" fill="#121118" opacity="0.15"/>
          {/* shell */}
          <path d="M 15 70 Q 50 25, 85 70 Q 50 60, 15 70 Z" fill="#FFBF00" {...stroke}/>
          {/* fillings */}
          <path d="M 25 65 Q 50 50, 75 65" fill="none" stroke="#0D5921" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="35" cy="60" r="2.5" fill="#DD2C1E"/>
          <circle cx="50" cy="55" r="2.5" fill="#DD2C1E"/>
          <circle cx="65" cy="60" r="2.5" fill="#DD2C1E"/>
          <circle cx="42" cy="62" r="2" fill="#FFF8E7"/>
          <circle cx="58" cy="62" r="2" fill="#FFF8E7"/>
          {/* face */}
          <circle cx="40" cy="72" r="1.8" fill="#121118"/>
          <circle cx="60" cy="72" r="1.8" fill="#121118"/>
          <path d="M 44 76 Q 50 80, 56 76" {...stroke} fill="none"/>
          <circle cx="35" cy="76" r="2" fill="#FF8888" opacity="0.6"/>
          <circle cx="65" cy="76" r="2" fill="#FF8888" opacity="0.6"/>
        </svg>
      );

    case 'sol':
      return (
        <svg {...props}>
          {/* rays */}
          {[0,45,90,135,180,225,270,315].map(a => (
            <line key={a} x1="50" y1="50" x2={50 + Math.cos(a*Math.PI/180)*42} y2={50 + Math.sin(a*Math.PI/180)*42}
              stroke="#FFBF00" strokeWidth="6" strokeLinecap="round"/>
          ))}
          <circle cx="50" cy="50" r="25" fill="#FFBF00" {...stroke}/>
          <circle cx="42" cy="46" r="2.5" fill="#121118"/>
          <circle cx="58" cy="46" r="2.5" fill="#121118"/>
          <path d="M 42 56 Q 50 62, 58 56" {...stroke} fill="none"/>
          <circle cx="38" cy="54" r="2.5" fill="#FF8888" opacity="0.7"/>
          <circle cx="62" cy="54" r="2.5" fill="#FF8888" opacity="0.7"/>
        </svg>
      );

    case 'luna':
      return (
        <svg {...props}>
          <path d="M 65 20 A 32 32 0 1 0 65 80 A 24 24 0 1 1 65 20 Z" fill="#E8E6D8" {...stroke}/>
          <circle cx="42" cy="35" r="2" fill="#C8C4B0"/>
          <circle cx="35" cy="55" r="3" fill="#C8C4B0"/>
          <circle cx="48" cy="65" r="1.5" fill="#C8C4B0"/>
          <circle cx="40" cy="48" r="2" fill="#121118"/>
          <circle cx="52" cy="46" r="2" fill="#121118"/>
          <path d="M 42 56 Q 47 60, 52 56" {...stroke} fill="none"/>
          <circle cx="20" cy="20" r="1.5" fill="#FFBF00"/>
          <circle cx="85" cy="85" r="1.5" fill="#FFBF00"/>
          <circle cx="15" cy="75" r="1" fill="#FFBF00"/>
        </svg>
      );

    case 'gato':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="92" rx="25" ry="4" fill="#121118" opacity="0.15"/>
          <circle cx="50" cy="55" r="28" fill="#121118" {...stroke}/>
          <path d="M 28 38 L 22 18 L 42 30 Z" fill="#121118" {...stroke}/>
          <path d="M 72 38 L 78 18 L 58 30 Z" fill="#121118" {...stroke}/>
          <path d="M 30 35 L 28 25 L 36 30" fill="#FF8888"/>
          <path d="M 70 35 L 72 25 L 64 30" fill="#FF8888"/>
          <ellipse cx="40" cy="50" rx="3" ry="4" fill="#FFBF00"/>
          <ellipse cx="60" cy="50" rx="3" ry="4" fill="#FFBF00"/>
          <ellipse cx="40" cy="51" rx="1" ry="3" fill="#121118"/>
          <ellipse cx="60" cy="51" rx="1" ry="3" fill="#121118"/>
          <path d="M 47 60 L 50 63 L 53 60" {...stroke} fill="#FF8888"/>
          <path d="M 50 63 Q 46 67, 43 64 M 50 63 Q 54 67, 57 64" {...stroke} fill="none"/>
          <path d="M 32 60 L 22 58 M 32 63 L 22 65" stroke="#FFF" strokeWidth="1"/>
          <path d="M 68 60 L 78 58 M 68 63 L 78 65" stroke="#FFF" strokeWidth="1"/>
        </svg>
      );

    case 'mango':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="92" rx="25" ry="4" fill="#121118" opacity="0.15"/>
          <ellipse cx="50" cy="55" rx="28" ry="32" fill="#FFBF00" {...stroke}/>
          <path d="M 35 35 Q 40 25, 50 30" fill="#FF8C42" stroke="none"/>
          {/* leaf */}
          <ellipse cx="55" cy="20" rx="10" ry="5" fill="#0D5921" {...stroke} transform="rotate(-30 55 20)"/>
          <circle cx="42" cy="50" r="2" fill="#121118"/>
          <circle cx="58" cy="50" r="2" fill="#121118"/>
          <path d="M 42 60 Q 50 66, 58 60" {...stroke} fill="none"/>
          <circle cx="37" cy="58" r="2" fill="#FF8888" opacity="0.7"/>
          <circle cx="63" cy="58" r="2" fill="#FF8888" opacity="0.7"/>
        </svg>
      );

    case 'dragon':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="92" rx="30" ry="4" fill="#121118" opacity="0.15"/>
          {/* body */}
          <ellipse cx="50" cy="55" rx="28" ry="22" fill="#DD2C1E" {...stroke}/>
          {/* spikes */}
          <path d="M 30 38 L 35 28 L 40 38 L 45 28 L 50 38 L 55 28 L 60 38 L 65 28 L 70 38" fill="#520004" {...stroke}/>
          {/* belly */}
          <ellipse cx="50" cy="60" rx="14" ry="10" fill="#FFBF00"/>
          {/* eyes */}
          <circle cx="40" cy="48" r="3" fill="#FFF"/>
          <circle cx="60" cy="48" r="3" fill="#FFF"/>
          <circle cx="40" cy="48" r="1.5" fill="#121118"/>
          <circle cx="60" cy="48" r="1.5" fill="#121118"/>
          {/* nose */}
          <circle cx="46" cy="58" r="1" fill="#121118"/>
          <circle cx="54" cy="58" r="1" fill="#121118"/>
          {/* fire */}
          <path d="M 78 55 Q 85 50, 90 55 Q 86 58, 82 55" fill="#FFBF00" stroke="#DD2C1E" strokeWidth="1.5"/>
          <path d="M 82 55 Q 86 53, 88 55" fill="#FFF" />
        </svg>
      );

    case 'abeja':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="92" rx="22" ry="3" fill="#121118" opacity="0.15"/>
          {/* wings */}
          <ellipse cx="32" cy="38" rx="14" ry="10" fill="#FFF" stroke="#121118" strokeWidth="2" opacity="0.85"/>
          <ellipse cx="68" cy="38" rx="14" ry="10" fill="#FFF" stroke="#121118" strokeWidth="2" opacity="0.85"/>
          {/* body */}
          <ellipse cx="50" cy="55" rx="22" ry="20" fill="#FFBF00" {...stroke}/>
          {/* stripes */}
          <path d="M 30 50 Q 50 45, 70 50" stroke="#121118" strokeWidth="5" fill="none"/>
          <path d="M 32 62 Q 50 58, 68 62" stroke="#121118" strokeWidth="5" fill="none"/>
          {/* face */}
          <circle cx="44" cy="52" r="2" fill="#121118"/>
          <circle cx="56" cy="52" r="2" fill="#121118"/>
          <path d="M 46 58 Q 50 62, 54 58" {...stroke} fill="none"/>
          {/* antennae */}
          <path d="M 46 35 L 42 25" {...stroke}/>
          <path d="M 54 35 L 58 25" {...stroke}/>
          <circle cx="42" cy="25" r="2" fill="#121118"/>
          <circle cx="58" cy="25" r="2" fill="#121118"/>
          {/* stinger */}
          <path d="M 50 75 L 50 82" stroke="#121118" strokeWidth="3"/>
        </svg>
      );

    case 'pulpo':
      return (
        <svg {...props}>
          <ellipse cx="50" cy="92" rx="30" ry="3" fill="#121118" opacity="0.15"/>
          {/* head */}
          <ellipse cx="50" cy="40" rx="25" ry="22" fill="#520004" {...stroke}/>
          {/* tentacles */}
          <path d="M 28 55 Q 22 70, 28 82" fill="none" stroke="#520004" strokeWidth="6" strokeLinecap="round"/>
          <path d="M 38 60 Q 35 75, 42 85" fill="none" stroke="#520004" strokeWidth="6" strokeLinecap="round"/>
          <path d="M 50 62 Q 50 78, 50 88" fill="none" stroke="#520004" strokeWidth="6" strokeLinecap="round"/>
          <path d="M 62 60 Q 65 75, 58 85" fill="none" stroke="#520004" strokeWidth="6" strokeLinecap="round"/>
          <path d="M 72 55 Q 78 70, 72 82" fill="none" stroke="#520004" strokeWidth="6" strokeLinecap="round"/>
          {/* spots */}
          <circle cx="35" cy="32" r="2" fill="#7A0008"/>
          <circle cx="65" cy="32" r="2" fill="#7A0008"/>
          {/* eyes */}
          <circle cx="40" cy="40" r="4" fill="#FFF"/>
          <circle cx="60" cy="40" r="4" fill="#FFF"/>
          <circle cx="41" cy="40" r="2" fill="#121118"/>
          <circle cx="61" cy="40" r="2" fill="#121118"/>
          <path d="M 45 50 Q 50 53, 55 50" {...stroke} fill="none"/>
        </svg>
      );

    default:
      return <svg {...props}><rect x="10" y="10" width="80" height="80" fill="#FFBF00" {...stroke}/></svg>;
  }
};

window.AmigoArt = AmigoArt;

/* ===== newpress/lobby.jsx ===== */
/* ============================================================
   Lobby Screen — players gathering with code, mode preview
   ============================================================ */

const Lobby = ({ mode, onStart, currentAmigo, onChangeAmigo }) => {
  const [players, setPlayers] = React.useState([
    { name: 'TÚ',     amigo: currentAmigo, isYou: true },
    { name: 'Sofía',  amigo: 'llama'   },
    { name: 'Mateo',  amigo: 'tigre'   },
  ]);
  const [code] = React.useState('847 392');
  const [showAmigos, setShowAmigos] = React.useState(false);

  // Sync "you" amigo
  React.useEffect(() => {
    setPlayers(p => p.map(pl => pl.isYou ? {...pl, amigo: currentAmigo} : pl));
  }, [currentAmigo]);

  // Simulate players joining
  React.useEffect(() => {
    const pool = window.FAKE_PLAYERS.filter(fp => !['Sofía','Mateo'].includes(fp.name));
    let i = 0;
    const interval = setInterval(() => {
      if (i >= pool.length) { clearInterval(interval); return; }
      setPlayers(prev => [...prev, pool[i]]);
      i++;
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lobby">
      {/* Top bar — Newpress masthead-style */}
      <header className="lobby-top">
        <div className="lobby-top-left">
          <div className="np-eyebrow">¡Palabra! · Lobby</div>
          <div className="lobby-mode-name">{mode.name} <span className="lobby-mode-es">/ {mode.es}</span></div>
        </div>
        <div className="lobby-top-right">
          <div className="np-eyebrow" style={{color: 'var(--np-fg-muted)'}}>Game Code</div>
          <div className="lobby-code">{code}</div>
        </div>
      </header>

      <div className="lobby-grid">
        {/* LEFT — Game preview */}
        <section className="lobby-preview" style={{background: mode.accent}}>
          <div className="lobby-preview-inner">
            <div className="lobby-preview-eyebrow">Modo de Hoy</div>
            <div className="lobby-preview-emoji">{mode.emoji}</div>
            <h1 className="lobby-preview-title">{mode.name}</h1>
            <p className="lobby-preview-desc">{mode.desc}</p>

            <div className="lobby-stamp">
              <div className="lobby-stamp-line">4to Grado</div>
              <div className="lobby-stamp-line">Vocabulario</div>
              <div className="lobby-stamp-line">12 Preguntas</div>
            </div>
          </div>
          <div className="lobby-preview-tape">¡A JUGAR! · ¡A JUGAR! · ¡A JUGAR! · ¡A JUGAR! · ¡A JUGAR! ·</div>
        </section>

        {/* RIGHT — Players & your amigo */}
        <section className="lobby-side">
          {/* Your character card */}
          <div className="lobby-your-amigo">
            <div className="lobby-amigo-frame">
              <window.AmigoArt id={currentAmigo} size={140}/>
            </div>
            <div className="lobby-amigo-info">
              <div className="np-eyebrow">Tu Amigo</div>
              <div className="lobby-amigo-name">{window.AMIGOS.find(a => a.id === currentAmigo)?.name}</div>
              <div className="lobby-amigo-rarity">
                {window.AMIGOS.find(a => a.id === currentAmigo)?.rarity}
              </div>
              <button className="np-btn np-btn--small" onClick={() => setShowAmigos(true)}>Cambiar →</button>
            </div>
          </div>

          {/* Player list */}
          <div className="lobby-players">
            <div className="lobby-players-head">
              <div className="np-eyebrow">Jugadores</div>
              <div className="lobby-players-count">{players.length}/12</div>
            </div>
            <div className="lobby-players-grid">
              {players.map((p, i) => (
                <div key={i} className={`lobby-player ${p.isYou ? 'is-you' : ''}`}>
                  <div className="lobby-player-amigo"><window.AmigoArt id={p.amigo} size={48}/></div>
                  <div className="lobby-player-name">{p.name}</div>
                </div>
              ))}
              {Array.from({length: Math.max(0, 12 - players.length)}).map((_, i) => (
                <div key={`empty-${i}`} className="lobby-player lobby-player--empty">
                  <div className="lobby-player-empty-dot">·</div>
                </div>
              ))}
            </div>
          </div>

          {/* Start button */}
          <button className="lobby-start" onClick={onStart}>
            <span>¡Empezar!</span>
            <span className="lobby-start-arrow">→</span>
          </button>
        </section>
      </div>

      {/* Amigo picker overlay */}
      {showAmigos && (
        <div className="amigo-modal" onClick={() => setShowAmigos(false)}>
          <div className="amigo-modal-inner" onClick={e => e.stopPropagation()}>
            <div className="amigo-modal-head">
              <div>
                <div className="np-eyebrow">Tus Amigos</div>
                <h2 className="amigo-modal-title">Pick your <em>amigo</em></h2>
              </div>
              <button className="amigo-modal-close" onClick={() => setShowAmigos(false)}>×</button>
            </div>
            <div className="amigo-modal-grid">
              {window.AMIGOS.map(a => (
                <button key={a.id}
                  className={`amigo-card amigo-card--${a.rarity} ${currentAmigo === a.id ? 'is-active' : ''}`}
                  onClick={() => { onChangeAmigo(a.id); setShowAmigos(false); }}>
                  <div className="amigo-card-art"><window.AmigoArt id={a.id} size={90}/></div>
                  <div className="amigo-card-name">{a.name}</div>
                  <div className="amigo-card-rarity">{a.rarity}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

window.Lobby = Lobby;

/* ===== newpress/games.jsx ===== */
/* ============================================================
   Mini-games (5 modes) — all playable
   Each takes { questions, players, you, onFinish }
   ============================================================ */

// ---------- Shared question hook ----------
const useGameQuiz = (questions, onFinish) => {
  const [idx, setIdx] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [streak, setStreak] = React.useState(0);
  const [feedback, setFeedback] = React.useState(null); // 'correct' | 'wrong' | null

  const q = questions[idx];

  const answer = (choice) => {
    if (feedback) return;
    if (choice === q.a) {
      setFeedback('correct');
      setScore(s => s + 100 + streak * 25);
      setStreak(s => s + 1);
    } else {
      setFeedback('wrong');
      setStreak(0);
    }
    setTimeout(() => {
      if (idx + 1 >= questions.length) onFinish(score + (choice === q.a ? 100 + streak * 25 : 0));
      else { setIdx(i => i + 1); setFeedback(null); }
    }, 1100);
  };

  return { q, idx, score, streak, feedback, answer, total: questions.length };
};

// ============================================================
// 1. TOWER CAFÉ — customers walk in with English words; click the matching Spanish taco
// ============================================================
const CafeGame = ({ questions, onFinish }) => {
  const game = useGameQuiz(questions, onFinish);
  const { q, idx, score, streak, feedback, answer, total } = game;

  // Customer walks in animation key — restart per question
  const customerKey = idx + '-' + (feedback || 'live');

  return (
    <div className="game game--cafe">
      <GameHud title="Café Torre" score={score} streak={streak} idx={idx} total={total}/>

      <div className="cafe-stage">
        <div className="cafe-sky"></div>
        <div className="cafe-ground"></div>

        {/* Truck */}
        <div className="cafe-truck">
          <div className="cafe-truck-roof">TACOS</div>
          <div className="cafe-truck-body">
            <div className="cafe-truck-window">
              <div className="cafe-cook">👨‍🍳</div>
            </div>
          </div>
          <div className="cafe-truck-wheels">
            <div className="cafe-wheel"></div>
            <div className="cafe-wheel"></div>
          </div>
        </div>

        {/* Customer */}
        <div key={customerKey} className={`cafe-customer ${feedback === 'correct' ? 'happy' : ''} ${feedback === 'wrong' ? 'leaving' : ''}`}>
          <div className="cafe-customer-bubble">
            {q.q}
          </div>
          <div className="cafe-customer-body">🧍</div>
        </div>

        {/* Tacos */}
        <div className="cafe-tacos">
          {q.options.map((opt, i) => (
            <button key={i}
              className={`cafe-taco ${feedback && opt === q.a ? 'is-correct' : ''} ${feedback === 'wrong' && opt !== q.a ? 'is-dim' : ''}`}
              onClick={() => answer(opt)}
              disabled={!!feedback}>
              <div className="cafe-taco-shell">🌮</div>
              <div className="cafe-taco-label">{opt}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 2. BIG FISH — drop the hook; pick the right fish swimming by
// ============================================================
const FishGame = ({ questions, onFinish }) => {
  const game = useGameQuiz(questions, onFinish);
  const { q, idx, score, streak, feedback, answer, total } = game;

  return (
    <div className="game game--fish">
      <GameHud title="Pez Gordo" score={score} streak={streak} idx={idx} total={total}/>

      <div className="fish-stage">
        {/* Question on boat */}
        <div className="fish-boat">
          <div className="fish-boat-sign">{q.q}</div>
          <div className="fish-boat-hull">⛵</div>
          <div className="fish-line"></div>
          <div className="fish-hook">🪝</div>
        </div>

        {/* Water */}
        <div className="fish-water">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="fish-wave" style={{top: `${10 + i * 22}%`, animationDelay: `${i*0.4}s`}}/>
          ))}

          {/* Fish swim by */}
          <div className="fish-school" key={idx}>
            {q.options.map((opt, i) => (
              <button key={i}
                className={`fish ${feedback && opt === q.a ? 'is-correct' : ''} ${feedback === 'wrong' && opt !== q.a ? 'is-dim' : ''}`}
                style={{
                  top: `${15 + i * 20}%`,
                  animationDelay: `${i * 0.6}s`,
                  '--fish-color': ['#DD2C1E','#004CFF','#FFBF00','#0D5921'][i % 4],
                }}
                onClick={() => answer(opt)}
                disabled={!!feedback}>
                <svg viewBox="0 0 120 60" width="160" height="80">
                  <ellipse cx="55" cy="30" rx="40" ry="22" fill="var(--fish-color)" stroke="#121118" strokeWidth="2.5"/>
                  <path d="M 95 30 L 115 12 L 115 48 Z" fill="var(--fish-color)" stroke="#121118" strokeWidth="2.5"/>
                  <circle cx="35" cy="25" r="5" fill="#FFF"/>
                  <circle cx="36" cy="25" r="2.5" fill="#121118"/>
                  <path d="M 70 30 Q 80 25, 85 30" stroke="#121118" strokeWidth="1.5" fill="none"/>
                </svg>
                <div className="fish-label">{opt}</div>
              </button>
            ))}
          </div>

          {/* bubbles */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="fish-bubble" style={{
              left: `${10 + i * 11}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + (i%3)}s`
            }}/>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 3. MERCADO MATCH — memory match Spanish to English
// ============================================================
const MatchGame = ({ questions, onFinish }) => {
  const [score, setScore] = React.useState(0);
  const [round, setRound] = React.useState(0);

  // build pairs from first 6 questions where 'q' has ¿significa or 'What is'
  const pairs = React.useMemo(() => {
    return questions.slice(0, 6).map((q, i) => {
      // derive english + spanish from the question
      const english = (q.q.match(/"([^"]+)"/)?.[1]) || `Word ${i+1}`;
      const spanish = q.a;
      return { id: i, english, spanish };
    });
  }, [questions]);

  // Build cards
  const [cards, setCards] = React.useState(() => {
    const c = [];
    pairs.forEach(p => {
      c.push({ id: `e${p.id}`, pairId: p.id, label: p.english, type: 'en' });
      c.push({ id: `s${p.id}`, pairId: p.id, label: p.spanish, type: 'es' });
    });
    return c.sort(() => Math.random() - 0.5);
  });
  const [flipped, setFlipped] = React.useState([]);
  const [matched, setMatched] = React.useState([]);
  const [shake, setShake] = React.useState(false);

  React.useEffect(() => {
    if (matched.length === pairs.length * 2 && pairs.length > 0) {
      setTimeout(() => onFinish(score), 1200);
    }
  }, [matched, pairs.length]);

  const flip = (card) => {
    if (flipped.length >= 2 || flipped.find(f => f.id === card.id) || matched.includes(card.id)) return;
    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      const [a, b] = newFlipped;
      if (a.pairId === b.pairId && a.type !== b.type) {
        setTimeout(() => {
          setMatched(m => [...m, a.id, b.id]);
          setFlipped([]);
          setScore(s => s + 200);
        }, 600);
      } else {
        setShake(true);
        setTimeout(() => { setFlipped([]); setShake(false); }, 900);
      }
    }
  };

  return (
    <div className="game game--match">
      <GameHud title="Mercado Match" score={score} streak={0} idx={matched.length/2} total={pairs.length}/>

      <div className="match-stage">
        <div className="match-stand">
          <div className="match-stand-roof">
            <div className="match-stand-stripe" style={{background: '#DD2C1E'}}></div>
            <div className="match-stand-stripe" style={{background: '#FFF'}}></div>
            <div className="match-stand-stripe" style={{background: '#DD2C1E'}}></div>
            <div className="match-stand-stripe" style={{background: '#FFF'}}></div>
            <div className="match-stand-stripe" style={{background: '#DD2C1E'}}></div>
          </div>
          <div className="match-stand-sign">¡Mercado!</div>
        </div>

        <div className={`match-grid ${shake ? 'is-shake' : ''}`}>
          {cards.map(card => {
            const isFlipped = flipped.find(f => f.id === card.id) || matched.includes(card.id);
            const isMatched = matched.includes(card.id);
            return (
              <button key={card.id}
                className={`match-card ${isFlipped ? 'is-flipped' : ''} ${isMatched ? 'is-matched' : ''} match-card--${card.type}`}
                onClick={() => flip(card)}>
                <div className="match-card-inner">
                  <div className="match-card-face match-card-back">
                    <div className="match-card-back-pattern">¡?</div>
                  </div>
                  <div className="match-card-face match-card-front">
                    <div className="match-card-tag">{card.type === 'en' ? 'EN' : 'ES'}</div>
                    <div className="match-card-label">{card.label}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 4. DONKEY RACE — answer questions to boost on track vs others
// ============================================================
const RaceGame = ({ questions, onFinish }) => {
  const game = useGameQuiz(questions, onFinish);
  const { q, idx, score, streak, feedback, answer, total } = game;

  const [racers, setRacers] = React.useState(() => [
    { name: 'TÚ',     amigo: 'tigre',   pos: 0, isYou: true },
    { name: 'Sofía',  amigo: 'llama',   pos: 0 },
    { name: 'Mateo',  amigo: 'gato',    pos: 0 },
    { name: 'Lucía',  amigo: 'tortuga', pos: 0 },
  ]);

  // Move opponents on each new question
  React.useEffect(() => {
    setRacers(rs => rs.map(r => r.isYou ? r : {...r, pos: Math.min(95, r.pos + 6 + Math.random() * 10)}));
  }, [idx]);

  // Move you on correct answer
  React.useEffect(() => {
    if (feedback === 'correct') {
      setRacers(rs => rs.map(r => r.isYou ? {...r, pos: Math.min(100, r.pos + 12)} : r));
    } else if (feedback === 'wrong') {
      setRacers(rs => rs.map(r => r.isYou ? {...r, pos: Math.max(0, r.pos + 2)} : r));
    }
  }, [feedback]);

  return (
    <div className="game game--race">
      <GameHud title="Carrera de Burros" score={score} streak={streak} idx={idx} total={total}/>

      <div className="race-track">
        <div className="race-flag-start">SALIDA</div>
        <div className="race-flag-end">META 🏁</div>
        {racers.map((r, i) => (
          <div key={i} className={`race-lane ${r.isYou ? 'is-you' : ''}`}>
            <div className="race-lane-line"></div>
            <div className="race-lane-num">{i+1}</div>
            <div className="race-name">{r.name}</div>
            <div className="race-runner" style={{left: `calc(${r.pos}% + 4%)`}}>
              <window.AmigoArt id={r.amigo} size={56}/>
              <div className="race-dust"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="race-quiz">
        <div className="race-quiz-q">{q.q}</div>
        <div className="race-quiz-options">
          {q.options.map((opt, i) => (
            <button key={i}
              className={`race-option ${feedback && opt === q.a ? 'is-correct' : ''} ${feedback === 'wrong' && opt !== q.a ? 'is-dim' : ''}`}
              onClick={() => answer(opt)}
              disabled={!!feedback}>
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 5. LOCO BINGO — host calls Spanish words; mark your card
// ============================================================
const BingoGame = ({ questions, onFinish }) => {
  const [score, setScore] = React.useState(0);
  const [calledIdx, setCalledIdx] = React.useState(0);
  const [marked, setMarked] = React.useState(new Set());
  const [feedback, setFeedback] = React.useState(null);

  // Build a 4x4 card from question answers (Spanish words)
  const cardWords = React.useMemo(() => {
    const pool = [...new Set(questions.map(q => q.a))].slice(0, 16);
    while (pool.length < 16) pool.push(`palabra ${pool.length}`);
    return pool.sort(() => Math.random() - 0.5).slice(0, 16);
  }, [questions]);

  // Called words = subset that ARE on the card + some that aren't
  const callOrder = React.useMemo(() => {
    const onCard = cardWords.slice(0, 12).sort(() => Math.random() - 0.5);
    const distractors = ['el sombrero', 'la flor', 'el pájaro', 'la luna'].filter(d => !cardWords.includes(d));
    const interleaved = [];
    onCard.forEach((w, i) => {
      interleaved.push(w);
      if (i % 3 === 2 && distractors[i/3]) interleaved.push(distractors[i/3]);
    });
    return interleaved;
  }, [cardWords]);

  const currentCall = callOrder[calledIdx];
  const isOnCard = cardWords.includes(currentCall);

  const tap = (word, i) => {
    if (marked.has(i) || feedback) return;
    if (word === currentCall) {
      setMarked(m => new Set([...m, i]));
      setScore(s => s + 150);
      setFeedback('correct');
      setTimeout(() => {
        setFeedback(null);
        setCalledIdx(c => c + 1);
        // Find next call that's on card OR end
      }, 700);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 600);
    }
  };

  // Auto-advance if called word isn't on card
  React.useEffect(() => {
    if (currentCall && !isOnCard && !feedback) {
      const t = setTimeout(() => setCalledIdx(c => c + 1), 1800);
      return () => clearTimeout(t);
    }
  }, [currentCall, isOnCard, feedback]);

  // Win condition — all 12 marked
  React.useEffect(() => {
    if (marked.size >= 12) {
      setTimeout(() => onFinish(score + 500), 1500);
    } else if (calledIdx >= callOrder.length) {
      setTimeout(() => onFinish(score), 1000);
    }
  }, [marked.size, calledIdx]);

  return (
    <div className="game game--bingo">
      <GameHud title="Bingo Loco" score={score} streak={0} idx={marked.size} total={12}/>

      <div className="bingo-stage">
        {/* Caller */}
        <div className="bingo-caller">
          <div className="bingo-caller-eyebrow">El locutor llama…</div>
          <div className={`bingo-caller-word ${feedback === 'wrong' ? 'is-shake' : ''}`}>
            {currentCall || '...'}
          </div>
          <div className="bingo-caller-hint">{isOnCard ? '¡Está en tu cartón!' : 'No está en tu cartón…'}</div>
        </div>

        {/* Card */}
        <div className="bingo-card">
          <div className="bingo-card-header">¡BINGO!</div>
          <div className="bingo-grid">
            {cardWords.map((w, i) => (
              <button key={i}
                className={`bingo-cell ${marked.has(i) ? 'is-marked' : ''} ${feedback === 'correct' && w === currentCall ? 'is-flash' : ''}`}
                onClick={() => tap(w, i)}>
                <span className="bingo-cell-word">{w}</span>
                {marked.has(i) && <span className="bingo-cell-stamp">✕</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ----- Shared HUD -----
const GameHud = ({ title, score, streak, idx, total }) => (
  <header className="game-hud">
    <div className="game-hud-left">
      <div className="np-eyebrow">¡Palabra!</div>
      <div className="game-hud-title">{title}</div>
    </div>
    <div className="game-hud-center">
      <div className="game-hud-progress">
        <div className="game-hud-progress-bar" style={{width: `${(idx/total)*100}%`}}></div>
      </div>
      <div className="game-hud-progress-text">{idx} / {total}</div>
    </div>
    <div className="game-hud-right">
      {streak > 1 && <div className="game-hud-streak">🔥 {streak}</div>}
      <div className="game-hud-score">
        <div className="np-eyebrow">Puntos</div>
        <div className="game-hud-score-num">{score}</div>
      </div>
    </div>
  </header>
);

// ----- Results screen -----
const Results = ({ score, mode, onPlayAgain, onLobby, amigo }) => {
  const correct = Math.floor(score / 100);
  return (
    <div className="results">
      <div className="results-card" style={{background: mode.accent}}>
        <div className="results-eyebrow">¡FIN DEL JUEGO!</div>
        <div className="results-amigo">
          <window.AmigoArt id={amigo} size={140}/>
        </div>
        <div className="results-headline">¡Buen trabajo!</div>
        <div className="results-mode">{mode.name}</div>
        <div className="results-score-block">
          <div className="results-score-label">Puntaje Final</div>
          <div className="results-score-num">{score}</div>
        </div>
        <div className="results-stats">
          <div className="results-stat"><div className="results-stat-num">{correct}</div><div className="results-stat-lbl">correctas</div></div>
          <div className="results-stat"><div className="results-stat-num">+{Math.floor(score/50)}</div><div className="results-stat-lbl">XP</div></div>
        </div>
        <div className="results-actions">
          <button className="np-btn np-btn--ink" onClick={onLobby}>← Lobby</button>
          <button className="np-btn np-btn--filled" onClick={onPlayAgain}>Jugar Otra Vez →</button>
        </div>
      </div>
    </div>
  );
};

window.CafeGame = CafeGame;
window.FishGame = FishGame;
window.MatchGame = MatchGame;
window.RaceGame = RaceGame;
window.BingoGame = BingoGame;
window.Results = Results;

/* ===== newpress/games-extra.jsx ===== */
/* ============================================================
   Extra games — adds 4 new modes
   ============================================================ */

// ============================================================
// 6. PIÑATA SMASH — whack the right piñata
// ============================================================
const PinataGame = ({ questions, onFinish }) => {
  const game = useGameQuiz(questions, onFinish);
  const { q, idx, score, streak, feedback, answer, total } = game;
  const colors = ['#DD2C1E', '#004CFF', '#FFBF00', '#0D5921'];

  return (
    <div className="game game--pinata">
      <GameHud title="Piñata Loca" score={score} streak={streak} idx={idx} total={total}/>
      <div className="pinata-stage">
        <div className="pinata-sky-tape">¡FIESTA! · ¡FIESTA! · ¡FIESTA! · ¡FIESTA! ·</div>
        <div className="pinata-question">
          <div className="np-eyebrow" style={{color:'#FFBF00'}}>Whack the right one</div>
          <div className="pinata-question-text">{q.q}</div>
        </div>
        <div className="pinata-row">
          {q.options.map((opt, i) => {
            const broken = feedback && opt === q.a;
            const wrong = feedback === 'wrong' && opt !== q.a;
            return (
              <button key={i}
                className={`pinata ${broken ? 'is-broken' : ''} ${wrong ? 'is-dim' : ''}`}
                onClick={() => answer(opt)}
                disabled={!!feedback}
                style={{'--p-color': colors[i % 4]}}>
                <div className="pinata-rope"></div>
                <div className="pinata-body">
                  <svg viewBox="0 0 100 110" width="120" height="130">
                    <ellipse cx="50" cy="65" rx="36" ry="30" fill="var(--p-color)" stroke="#121118" strokeWidth="3"/>
                    {/* fringe */}
                    <path d="M 14 65 L 10 80 L 18 75 L 14 88 L 22 80 L 18 92" stroke="#FFBF00" strokeWidth="3" fill="none"/>
                    <path d="M 86 65 L 90 80 L 82 75 L 86 88 L 78 80 L 82 92" stroke="#FFBF00" strokeWidth="3" fill="none"/>
                    {/* spots */}
                    <circle cx="40" cy="60" r="4" fill="#FFF"/>
                    <circle cx="60" cy="65" r="4" fill="#FFF"/>
                    <circle cx="50" cy="50" r="3" fill="#FFBF00"/>
                    {/* face */}
                    <circle cx="42" cy="55" r="2" fill="#121118"/>
                    <circle cx="58" cy="55" r="2" fill="#121118"/>
                    <path d="M 44 70 Q 50 74, 56 70" stroke="#121118" strokeWidth="2" fill="none"/>
                    {/* tail */}
                    <path d="M 50 35 Q 55 25, 50 18" stroke="#121118" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
                <div className="pinata-label">{opt}</div>
                {broken && (
                  <div className="pinata-candy">
                    <span>🍬</span><span>🍭</span><span>🌟</span><span>🍫</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        {/* Bat indicator */}
        <div className="pinata-bat">🏏</div>
      </div>
    </div>
  );
};

// ============================================================
// 7. LOTERÍA — Mexican bingo with image cards
// ============================================================
const LoteriaGame = ({ questions, onFinish }) => {
  // Use first 12 questions; image=emoji + spanish answer
  const ICONS = ['🌵','⭐','🌙','☀️','🌹','🐓','🦁','🐠','🍎','🌽','🎸','💎','🎩','🌈','🍇','🦋'];
  const cards = React.useMemo(() => {
    const pool = [...new Set(questions.map(q => q.a))].slice(0, 16);
    while (pool.length < 16) pool.push(`palabra ${pool.length}`);
    return pool.slice(0, 16).map((word, i) => ({ word, icon: ICONS[i % ICONS.length] }));
  }, [questions]);

  const [calledIdx, setCalledIdx] = React.useState(0);
  const [marked, setMarked] = React.useState(new Set());
  const [score, setScore] = React.useState(0);
  const [feedback, setFeedback] = React.useState(null);

  // Caller cycles through cards (from your card mostly + some distractors)
  const callOrder = React.useMemo(() => {
    const onCard = cards.slice(0, 10).sort(() => Math.random() - 0.5);
    return onCard;
  }, [cards]);

  const current = callOrder[calledIdx];

  const tap = (card, i) => {
    if (marked.has(i) || feedback) return;
    if (current && card.word === current.word) {
      setMarked(m => new Set([...m, i]));
      setScore(s => s + 150);
      setFeedback('correct');
      setTimeout(() => {
        setFeedback(null);
        setCalledIdx(c => c + 1);
      }, 700);
    } else {
      setFeedback('wrong');
      setTimeout(() => setFeedback(null), 500);
    }
  };

  React.useEffect(() => {
    if (marked.size >= callOrder.length) {
      setTimeout(() => onFinish(score + 500), 1200);
    } else if (calledIdx >= callOrder.length) {
      setTimeout(() => onFinish(score), 1000);
    }
  }, [marked.size, calledIdx]);

  return (
    <div className="game game--loteria">
      <GameHud title="Lotería" score={score} streak={0} idx={marked.size} total={callOrder.length}/>
      <div className="loteria-stage">
        <div className="loteria-caller">
          <div className="loteria-caller-eyebrow">¡La Carta!</div>
          {current && (
            <div className={`loteria-caller-card ${feedback === 'wrong' ? 'is-shake' : ''}`}>
              <div className="loteria-caller-icon">{cards.find(c => c.word === current.word)?.icon}</div>
              <div className="loteria-caller-word">{current.word}</div>
            </div>
          )}
          <div className="loteria-caller-hint">Tap the matching card →</div>
        </div>
        <div className="loteria-card">
          <div className="loteria-card-title">Tu Tabla</div>
          <div className="loteria-grid">
            {cards.map((c, i) => (
              <button key={i}
                className={`loteria-cell ${marked.has(i) ? 'is-marked' : ''}`}
                onClick={() => tap(c, i)}>
                <div className="loteria-cell-icon">{c.icon}</div>
                <div className="loteria-cell-word">{c.word}</div>
                {marked.has(i) && <div className="loteria-cell-bean"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 8. HOT AIR BALLOON — pop the wrong answers, keep correct one
// ============================================================
const BalloonGame = ({ questions, onFinish }) => {
  const game = useGameQuiz(questions, onFinish);
  const { q, idx, score, streak, feedback, answer, total } = game;
  const colors = ['#DD2C1E', '#004CFF', '#FFBF00', '#0D5921'];

  return (
    <div className="game game--balloon">
      <GameHud title="Globos" score={score} streak={streak} idx={idx} total={total}/>
      <div className="balloon-stage">
        {/* clouds */}
        <div className="balloon-cloud" style={{top: '12%', left: '8%'}}>☁️</div>
        <div className="balloon-cloud" style={{top: '20%', right: '12%', animationDelay: '-2s'}}>☁️</div>
        <div className="balloon-cloud" style={{top: '50%', left: '20%', animationDelay: '-4s'}}>☁️</div>

        <div className="balloon-question">
          <div className="np-eyebrow" style={{color: '#FFF'}}>Pop the right balloon</div>
          <div className="balloon-question-text">{q.q}</div>
        </div>

        <div className="balloon-row">
          {q.options.map((opt, i) => {
            const isCorrect = feedback && opt === q.a;
            const isWrong = feedback === 'wrong' && opt !== q.a;
            return (
              <button key={i}
                className={`balloon ${isCorrect ? 'is-correct' : ''} ${isWrong ? 'is-popped' : ''}`}
                onClick={() => answer(opt)}
                disabled={!!feedback}
                style={{
                  '--b-color': colors[i % 4],
                  animationDelay: `${i * 0.3}s`,
                }}>
                <div className="balloon-body">
                  <svg viewBox="0 0 80 100" width="100" height="125">
                    <ellipse cx="40" cy="42" rx="35" ry="40" fill="var(--b-color)" stroke="#121118" strokeWidth="2.5"/>
                    <ellipse cx="28" cy="32" rx="8" ry="14" fill="rgba(255,255,255,0.4)"/>
                    <path d="M 35 80 L 45 80 L 42 88 L 38 88 Z" fill="#121118"/>
                    <line x1="40" y1="88" x2="40" y2="100" stroke="#121118" strokeWidth="1.5"/>
                  </svg>
                  <div className="balloon-label">{opt}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 9. SOCCER PENALTY — kick the ball into the right goal
// ============================================================
const SoccerGame = ({ questions, onFinish }) => {
  const game = useGameQuiz(questions, onFinish);
  const { q, idx, score, streak, feedback, answer, total } = game;
  const [kickTo, setKickTo] = React.useState(null);

  const kick = (opt, i) => {
    if (feedback) return;
    setKickTo(i);
    answer(opt);
  };

  React.useEffect(() => {
    if (!feedback) setKickTo(null);
  }, [idx]);

  return (
    <div className="game game--soccer">
      <GameHud title="Penalti" score={score} streak={streak} idx={idx} total={total}/>
      <div className="soccer-stage">
        <div className="soccer-stadium">
          {/* crowd */}
          <div className="soccer-crowd"></div>
          {/* field */}
          <div className="soccer-field">
            <div className="soccer-field-line"></div>
            <div className="soccer-goal">
              <div className="soccer-goal-net"></div>
              <div className="soccer-goal-zones">
                {q.options.map((opt, i) => {
                  const isCorrect = feedback && opt === q.a;
                  const isWrong = feedback === 'wrong' && opt !== q.a;
                  return (
                    <button key={i}
                      className={`soccer-zone ${isCorrect ? 'is-goal' : ''} ${isWrong && kickTo === i ? 'is-saved' : ''}`}
                      onClick={() => kick(opt, i)}
                      disabled={!!feedback}>
                      <div className="soccer-zone-label">{opt}</div>
                    </button>
                  );
                })}
              </div>
              {/* keeper */}
              <div className={`soccer-keeper ${feedback ? `dive-${kickTo}` : ''}`}>🧤</div>
            </div>
            <div className="soccer-question">{q.q}</div>
            <div className={`soccer-ball ${kickTo !== null ? `kick-${kickTo}` : ''} ${feedback === 'correct' ? 'is-goal' : ''}`}>⚽</div>
            <div className="soccer-spot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.PinataGame = PinataGame;
window.LoteriaGame = LoteriaGame;
window.BalloonGame = BalloonGame;
window.SoccerGame = SoccerGame;

/* ===== newpress/game-select.jsx ===== */
/* ============================================================
   Game Select Overlay — corner button + grid of all modes
   ============================================================ */

const GameSelect = ({ open, onClose, onPick, currentId }) => {
  if (!open) return null;
  return (
    <div className="gs-modal" onClick={onClose}>
      <div className="gs-modal-inner" onClick={e => e.stopPropagation()}>
        <div className="gs-modal-head">
          <div>
            <div className="np-eyebrow" style={{color: 'var(--pal-yellow)'}}>Selecciona un Juego</div>
            <h2 className="gs-modal-title">Pick a <em>game</em></h2>
          </div>
          <button className="gs-modal-close" onClick={onClose}>×</button>
        </div>
        <div className="gs-grid">
          {window.GAME_MODES.map(m => (
            <button key={m.id}
              className={`gs-card ${currentId === m.id ? 'is-active' : ''}`}
              style={{'--gs-accent': m.accent}}
              onClick={() => onPick(m.id)}>
              <div className="gs-card-emoji">{m.emoji}</div>
              <div className="gs-card-name">{m.name}</div>
              <div className="gs-card-es">{m.es}</div>
              <div className="gs-card-desc">{m.desc}</div>
              {currentId === m.id && <div className="gs-card-active-tag">SELECCIONADO</div>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const GameSelectButton = ({ onClick }) => (
  <button className="gs-fab" onClick={onClick} title="Game Select">
    <div className="gs-fab-grid">
      <span></span><span></span><span></span>
      <span></span><span></span><span></span>
      <span></span><span></span><span></span>
    </div>
    <span className="gs-fab-label">Juegos</span>
  </button>
);

window.GameSelect = GameSelect;
window.GameSelectButton = GameSelectButton;
