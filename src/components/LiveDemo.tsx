import React, { useEffect, useRef, useState } from 'react';

const DEMO_MESSAGES = [
  { type: 'in', name: 'נועה', nameColor: '#1F8A70', text: 'מישהי יודעת מתי המבחן באנגלית? 📚', time: '11:38' },
  { type: 'voice', name: 'מאיה', nameColor: '#C2185B', dur: '0:09', time: '11:38' },
  { type: 'image', name: 'נועה', nameColor: '#1F8A70', time: '11:39' },
  { type: 'deleted', name: 'מאיה', nameColor: '#C2185B', time: '11:39' },
  { type: 'bot', time: '11:39' },
  { type: 'out', text: 'תכף שולחת לכן 💬', time: '11:40' },
];

export default function LiveDemo() {
  const [count, setCount] = useState(1);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const tick = () => {
      timerRef.current = setTimeout(() => {
        setCount(c => (c >= DEMO_MESSAGES.length ? 1 : c + 1));
        tick();
      }, count === 1 ? 700 : 2000);
    };
    tick();
    return () => clearTimeout(timerRef.current);
  }, []);

  const visible = DEMO_MESSAGES.slice(0, count);

  return (
    <section id="demo" style={{ padding: '96px 6vw', background: '#0E1C16', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(700px 400px at 15% 10%, rgba(14,125,94,.45) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 60, alignItems: 'center', maxWidth: 1080, margin: '0 auto' }} className="demo-grid">
        <div>
          <span style={{ fontFamily: "'Rubik'", color: '#2BC48A', fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>בזמן אמת</span>
          <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, letterSpacing: '-1px', lineHeight: 1.1, margin: '14px 0 0', color: '#fff' }}>
            ככה זה נראה<br />בקבוצה אמיתית
          </h2>
          <p style={{ fontSize: 19, color: '#9FB6AC', lineHeight: 1.6, margin: '22px 0 0', maxWidth: 440 }}>
            כל הודעה נסרקת ברגע שנשלחת. הודעות תקינות עוברות כרגיל — פוגעניות נחסמות לפני שהילדים רואים אותן.
          </p>
          <div style={{ display: 'flex', gap: 30, marginTop: 34 }}>
            <div>
              <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 40, color: '#2BC48A' }}>&lt;1 שנ'</div>
              <div style={{ color: '#7E948B', fontSize: 14 }}>זמן זיהוי וחסימה</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 40, color: '#2BC48A' }}>24/7</div>
              <div style={{ color: '#7E948B', fontSize: 14 }}>גם כשאתם ישנים</div>
            </div>
          </div>
        </div>

        {/* Demo phone */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 300, height: 560, background: '#000', borderRadius: 42, padding: 11, boxShadow: '0 40px 90px -20px rgba(0,0,0,.6)', position: 'relative' }}>
            <div style={{ width: '100%', height: '100%', background: '#ECE5DD', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#0E7D5E', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#7FD3B6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👧</div>
                <div style={{ flex: 1, color: '#fff', fontWeight: 700, fontFamily: "'Rubik'", fontSize: 14 }}>חברות הכיתה 💬</div>
                <span style={{ background: 'rgba(255,255,255,.2)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999 }}>🛡️</span>
              </div>
              <div style={{ flex: 1, padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
                {visible.map((m, i) => {
                  if (m.type === 'in') return (
                    <div key={i} className="mc-fade-up" style={{ alignSelf: 'flex-start', maxWidth: '86%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor }}>{m.name}</div>
                      <div style={{ fontSize: 13.5, color: '#1F2A24', lineHeight: 1.35 }}>{m.text}</div>
                      <div style={{ textAlign: 'left', fontSize: 10, color: '#9AA59F', marginTop: 1 }}>{m.time}</div>
                    </div>
                  );
                  if (m.type === 'voice') return (
                    <div key={i} className="mc-fade-up" style={{ alignSelf: 'flex-start', maxWidth: '88%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor }}>{m.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                        <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: '#0E7D5E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>▶</span>
                        <span style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2, height: 20 }}>
                          {[6,13,9,17,7,14,10,16,6,11,8,13].map((h, j) => (
                            <span key={j} style={{ width: 3, height: h, background: j < 3 ? '#0E7D5E' : '#B7C4BD', borderRadius: 2 }} />
                          ))}
                        </span>
                        <span style={{ flexShrink: 0, fontSize: 10, color: '#9AA59F' }}>{m.dur}</span>
                      </div>
                    </div>
                  );
                  if (m.type === 'image') return (
                    <div key={i} className="mc-fade-up" style={{ alignSelf: 'flex-start', maxWidth: '66%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: 4, boxShadow: '0 1px 1px rgba(0,0,0,.1)' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor, padding: '3px 6px 5px' }}>{m.name}</div>
                      <div style={{ height: 92, borderRadius: 7, background: 'linear-gradient(135deg,#7FD3B6 0%,#0E7D5E 100%)', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 7 }}>
                        <span style={{ fontSize: 22, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>📓</span>
                        <span style={{ fontSize: 10, color: 'rgba(255,255,255,.9)', position: 'relative' }}>📷 תמונה</span>
                      </div>
                    </div>
                  );
                  if (m.type === 'deleted') return (
                    <div key={i} className="mc-fade-up" style={{ alignSelf: 'flex-start', maxWidth: '92%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor }}>{m.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8A938C', fontStyle: 'italic', fontSize: 12.5 }}><span>🚫</span> ההודעה נמחקה על ידי המנהל מגןצ'אט</div>
                    </div>
                  );
                  if (m.type === 'bot') return (
                    <div key={i} className="mc-pop" style={{ alignSelf: 'flex-start', maxWidth: '94%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 1 }}>
                        <img src="/cropped-LOGO.jpg" alt="" style={{ width: 16, height: 16, borderRadius: 4, objectFit: 'contain' }} />
                        <span style={{ fontWeight: 700, fontSize: 12.5, color: '#E25433' }}>מגןצ'אט</span>
                      </div>
                      <div style={{ fontSize: 13.5, color: '#1F2A24', lineHeight: 1.4 }}>⚠️ זוהתה שפה לא מכבדת. ההודעה הוסרה ודווחה לאחראים.</div>
                      <div style={{ textAlign: 'left', fontSize: 10, color: '#9AA59F', marginTop: 1 }}>{m.time}</div>
                    </div>
                  );
                  if (m.type === 'out') return (
                    <div key={i} className="mc-fade-up" style={{ alignSelf: 'flex-end', maxWidth: '80%', background: '#DCF8C6', borderRadius: '9px 9px 2px 9px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)' }}>
                      <div style={{ fontSize: 13.5, color: '#1F2A24', lineHeight: 1.35 }}>{m.text}</div>
                      <div style={{ textAlign: 'left', fontSize: 10, color: '#7BAE73', marginTop: 1 }}>{m.time}</div>
                    </div>
                  );
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.demo-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
