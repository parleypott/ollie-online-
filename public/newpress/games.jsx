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
