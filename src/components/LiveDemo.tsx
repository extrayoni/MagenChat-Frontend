import React, { useEffect, useRef, useState } from 'react';

const BASE_MSGS = [
  { isIn: true, name: 'נועה', nameColor: '#1F8A70', text: 'מישהי יודעת מתי המבחן באנגלית? 📚', time: '11:38' },
  { isVoice: true, name: 'מאיה', nameColor: '#C2185B', dur: '0:09', time: '11:38' },
  { isImage: true, name: 'נועה', nameColor: '#1F8A70', time: '11:39' },
];
const BAD = { name: 'מאיה', nameColor: '#C2185B', text: 'נועה את אפסית, אף אחת לא רוצה אותך פה 🤮', time: '11:40' };

const FRAMES = [
  { n: 1, dur: 1700 },
  { n: 2, dur: 1700 },
  { n: 3, dur: 1800 },
  { n: 3, bad: 'written', dur: 3200 },
  { n: 3, bad: 'deleted', bot: true, dur: 3000 },
  { n: 3, bad: 'deleted', bot: true, reply: true, dur: 4400 },
];

const WAVE = [6, 13, 9, 17, 7, 14, 10, 16, 6, 11, 8, 13];

export default function LiveDemo() {
  const [frameIdx, setFrameIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const tick = (idx: number) => {
      timerRef.current = setTimeout(() => {
        const next = (idx + 1) % FRAMES.length;
        setFrameIdx(next);
        tick(next);
      }, FRAMES[idx].dur);
    };
    tick(0);
    return () => clearTimeout(timerRef.current);
  }, []);

  const frame = FRAMES[frameIdx] as any;
  const visible: any[] = BASE_MSGS.slice(0, frame.n).map((m: any) => ({ ...m }));
  if (frame.bad === 'written') visible.push({ isBad: true, ...BAD });
  if (frame.bad === 'deleted') visible.push({ isDeleted: true, name: BAD.name, nameColor: BAD.nameColor, time: BAD.time });
  if (frame.bot) visible.push({ isBot: true, time: '11:40' });
  if (frame.reply) visible.push({ isOut: true, text: 'נו די, מספיק עם זה 🙏', time: '11:41' });

  return (
    <section id="demo" style={{ padding: '96px 6vw', background: '#0E1C16', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(700px 400px at 15% 10%, rgba(14,125,94,.45) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 360px', gap: 60, alignItems: 'center', maxWidth: 1080, margin: '0 auto' }} className="demo-grid">
        <div>
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
                  if (m.isIn) return (
                    <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '86%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)', animation: 'mcFadeUp .35s ease both' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor }}>{m.name}</div>
                      <div style={{ fontSize: 13.5, color: '#1F2A24', lineHeight: 1.35 }}>{m.text}</div>
                      <div style={{ textAlign: 'left', fontSize: 10, color: '#9AA59F', marginTop: 1 }}>{m.time}</div>
                    </div>
                  );
                  if (m.isVoice) return (
                    <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '88%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)', animation: 'mcFadeUp .35s ease both' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor }}>{m.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                        <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: '#0E7D5E', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>▶</span>
                        <span style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 2, height: 20 }}>
                          {WAVE.map((h, j) => (
                            <span key={j} style={{ width: 3, height: h, background: (j === 1 || j === 2) ? '#0E7D5E' : '#B7C4BD', borderRadius: 2 }} />
                          ))}
                        </span>
                        <span style={{ flexShrink: 0, fontSize: 10, color: '#9AA59F' }}>{m.dur}</span>
                      </div>
                    </div>
                  );
                  if (m.isImage) return (
                    <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '66%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: 4, boxShadow: '0 1px 1px rgba(0,0,0,.1)', animation: 'mcFadeUp .35s ease both' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor, padding: '3px 6px 5px' }}>{m.name}</div>
                      <img src="/noa-image.jpg" alt="תמונה" style={{ display: 'block', width: '100%', height: 92, borderRadius: 7, objectFit: 'cover' }} />
                    </div>
                  );
                  if (m.isBad) return (
                    <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '88%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)', animation: 'mcFadeUp .35s ease both' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor }}>{m.name}</div>
                      <div style={{ fontSize: 13.5, color: '#1F2A24', lineHeight: 1.35 }}>{m.text}</div>
                      <div style={{ textAlign: 'left', fontSize: 10, color: '#9AA59F', marginTop: 1 }}>{m.time}</div>
                    </div>
                  );
                  if (m.isDeleted) return (
                    <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '92%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)', animation: 'mcFadeUp .35s ease both' }}>
                      <div style={{ fontWeight: 700, fontSize: 12.5, color: m.nameColor }}>{m.name}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8A938C', fontStyle: 'italic', fontSize: 12.5 }}><span>🚫</span> ההודעה נמחקה על ידי המנהל מגןצ'אט</div>
                      <div style={{ textAlign: 'left', fontSize: 10, color: '#9AA59F', marginTop: 1 }}>{m.time}</div>
                    </div>
                  );
                  if (m.isBot) return (
                    <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '94%', background: '#fff', borderRadius: '9px 9px 9px 2px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)', animation: 'mcPop .4s ease both' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 1 }}>
                        <img src="/cropped-LOGO.jpg" alt="" style={{ width: 16, height: 16, borderRadius: 4, objectFit: 'contain' }} />
                        <span style={{ fontWeight: 700, fontSize: 12.5, color: '#E25433' }}>מגןצ'אט</span>
                      </div>
                      <div style={{ fontSize: 13.5, color: '#1F2A24', lineHeight: 1.4 }}>⚠️ זוהתה שפה לא מכבדת. ההודעה הוסרה ודווחה לאחראים.</div>
                      <div style={{ textAlign: 'left', fontSize: 10, color: '#9AA59F', marginTop: 1 }}>{m.time}</div>
                    </div>
                  );
                  if (m.isOut) return (
                    <div key={i} style={{ alignSelf: 'flex-end', maxWidth: '80%', background: '#DCF8C6', borderRadius: '9px 9px 2px 9px', padding: '6px 10px 5px', boxShadow: '0 1px 1px rgba(0,0,0,.1)', animation: 'mcFadeUp .35s ease both' }}>
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
