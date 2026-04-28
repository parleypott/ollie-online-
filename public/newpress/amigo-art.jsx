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
