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
