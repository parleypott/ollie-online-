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
