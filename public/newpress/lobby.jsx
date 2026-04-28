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
