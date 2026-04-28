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
