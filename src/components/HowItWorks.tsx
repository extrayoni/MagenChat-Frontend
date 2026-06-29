import React, { useState } from 'react';

const steps = [
  { n: 1, title: "מוסיפים את מגןצ'אט", desc: "שומרים את מספר מגןצ'אט באנשי הקשר שלכם." },
  { n: 2, title: 'מצרפים לקבוצה', desc: 'מוסיפים אותו כחבר בקבוצת הוואטסאפ של הילד/ה.' },
  { n: 3, title: 'הופכים למנהל', desc: 'ממנים אותו כמנהל כדי שיוכל להסיר הודעות.' },
  { n: 4, title: 'וזהו — ההגנה פעילה', desc: 'הוא סורק כל הודעה בזמן אמת. אתם נרגעים.' },
];

function Step1Phone() {
  return (
    <div style={{ flex: 1, background: '#fff', padding: '28px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 18 }} className="mc-fade-up">
      <img src="/cropped-LOGO.jpg" alt="מגןצ'אט" style={{ width: 84, height: 84, objectFit: 'contain', borderRadius: 22 }} />
      <div style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 18 }}>מגןצ'אט</div>
      <div style={{ background: '#F3F6F4', borderRadius: 12, padding: '12px 18px', fontSize: 17, letterSpacing: 1, color: '#16261F', fontWeight: 700 }}>053-000-0000</div>
      <div style={{ background: '#0E7D5E', color: '#fff', fontWeight: 700, padding: '11px 30px', borderRadius: 999, fontSize: 15 }}>שמירה באנשי הקשר</div>
    </div>
  );
}

function Step2Phone() {
  return (
    <div style={{ flex: 1, background: '#fff', padding: 14, display: 'flex', flexDirection: 'column', gap: 4 }} className="mc-fade-up">
      {[{ emoji: '👩', name: "אמא של נועה", color: '#7FD3B6' }, { emoji: '👨', name: "אבא של איתי", color: '#FFD7A8' }].map(p => (
        <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10 }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.emoji}</div>
          <div style={{ fontWeight: 600 }}>{p.name}</div>
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10, background: '#E8F6EF', borderRadius: 14, border: '1.5px solid #2BC48A' }}>
        <img src="/cropped-LOGO.jpg" alt="מגןצ'אט" style={{ width: 42, height: 42, objectFit: 'contain', borderRadius: '50%' }} />
        <div>
          <div style={{ fontWeight: 700 }}>מגןצ'אט</div>
          <div style={{ fontSize: 12, color: '#0A5E47' }}>נוסף לקבוצה ✓</div>
        </div>
      </div>
    </div>
  );
}

function Step3Phone() {
  return (
    <div style={{ flex: 1, background: '#fff', padding: '24px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }} className="mc-fade-up">
      <img src="/cropped-LOGO.jpg" alt="מגןצ'אט" style={{ width: 76, height: 76, objectFit: 'contain', borderRadius: 20, marginTop: 6 }} />
      <div style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 18 }}>מגןצ'אט</div>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F3F6F4', borderRadius: 14, padding: '14px 16px' }}>
        <span style={{ fontWeight: 600 }}>מנהל קבוצה</span>
        <span style={{ width: 46, height: 26, background: '#2BC48A', borderRadius: 999, position: 'relative', display: 'inline-block' }}>
          <span style={{ position: 'absolute', right: 3, top: 3, width: 20, height: 20, background: '#fff', borderRadius: '50%' }} />
        </span>
      </div>
      <div style={{ color: '#5C6B64', fontSize: 13, lineHeight: 1.5, textAlign: 'center' }}>הרשאת מנהל מאפשרת למגןצ'אט להסיר הודעות פוגעניות מיד.</div>
    </div>
  );
}

function Step4Phone() {
  return (
    <>
      <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 10 }} className="mc-fade-up">
        <div style={{ alignSelf: 'flex-start', maxWidth: '82%', background: '#fff', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', fontSize: 14 }}>בואו ניפגש בפארק אחרי בית הספר 🌳</div>
        <div style={{ alignSelf: 'flex-start', maxWidth: '92%', background: '#fff', padding: '7px 11px', borderRadius: '12px 12px 12px 2px', boxShadow: '0 1px 1px rgba(0,0,0,.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8A938C', fontStyle: 'italic', fontSize: 12.5 }}><span>🚫</span> ההודעה נמחקה על ידי המנהל מגןצ'אט</div>
        </div>
        <div style={{ alignSelf: 'flex-start', maxWidth: '94%', background: '#fff', padding: '8px 11px', borderRadius: '12px 12px 12px 2px', boxShadow: '0 1px 1px rgba(0,0,0,.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
            <img src="/cropped-LOGO.jpg" alt="" style={{ width: 16, height: 16, borderRadius: 4, objectFit: 'contain' }} />
            <span style={{ fontWeight: 700, fontSize: 12, color: '#E25433' }}>מגןצ'אט</span>
          </div>
          <div style={{ fontSize: 13, color: '#1F2A24', lineHeight: 1.4 }}>⚠️ זוהתה שפה לא מכבדת. ההודעה הוסרה ודווחה לאחראים.</div>
        </div>
        <div style={{ alignSelf: 'flex-start', maxWidth: '70%', background: '#fff', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', fontSize: 14 }}>מגניב! נתראה שם 😄</div>
        <div style={{ alignSelf: 'center', marginTop: 'auto', background: '#E8F6EF', color: '#0A5E47', fontWeight: 700, fontSize: 13, padding: '8px 16px', borderRadius: 999 }}>✓ ההגנה פעילה 24/7</div>
      </div>
    </>
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(1);

  return (
    <section id="how" style={{ padding: '96px 6vw', background: '#fff' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 44, letterSpacing: '-1px', margin: '14px 0 6px', color: '#16261F' }}>מוכן תוך שתי דקות</h2>
        <p style={{ fontSize: 19, color: '#5C6B64', margin: '0 auto', maxWidth: 560 }}>בלי הורדות, בלי הגדרות מסובכות. מוסיפים את מגןצ'אט לקבוצה — והוא עושה את השאר.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 56, alignItems: 'center', maxWidth: 1080, margin: '54px auto 0' }} className="how-grid">
        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {steps.map(s => {
            const isActive = s.n === active;
            return (
              <button key={s.n} onClick={() => setActive(s.n)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16, textAlign: 'right', cursor: 'pointer',
                  border: 'none', width: '100%', padding: '18px 20px', borderRadius: 18, transition: 'all .25s',
                  background: isActive ? '#E8F6EF' : '#fff',
                  boxShadow: isActive ? '0 12px 30px -16px rgba(14,125,94,.55)' : '0 4px 16px -12px rgba(16,38,31,.3)',
                  outline: isActive ? '2px solid #2BC48A' : '1.5px solid #EAF1ED',
                }}>
                <span style={{
                  flexShrink: 0, width: 42, height: 42, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Rubik'", fontWeight: 700, fontSize: 18,
                  background: isActive ? '#0E7D5E' : '#F2FAF6', color: isActive ? '#fff' : '#0E7D5E',
                }}>{s.n}</span>
                <span style={{ textAlign: 'right', flex: 1 }}>
                  <span style={{ display: 'block', fontFamily: "'Rubik'", fontWeight: 700, fontSize: 19, color: '#16261F' }}>{s.title}</span>
                  <span style={{ display: 'block', color: '#5C6B64', fontSize: 15, lineHeight: 1.5, marginTop: 3 }}>{s.desc}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Phone preview */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'sticky', top: 90 }}>
          <div style={{ width: 300, height: 600, background: '#0E1C16', borderRadius: 42, padding: 11, boxShadow: '0 40px 80px -28px rgba(16,38,31,.5)' }}>
            <div style={{ width: '100%', height: '100%', background: '#ECE5DD', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#0E7D5E', padding: '16px', color: '#fff', fontFamily: "'Rubik'", fontWeight: 700, fontSize: 15 }}>
                {active === 1 && 'איש קשר חדש'}
                {active === 2 && 'הוספת משתתפים'}
                {active === 3 && 'פרטי משתתף'}
                {active === 4 && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#7FD3B6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👦</div>
                    <span style={{ flex: 1, fontSize: 14 }}>כיתה ה'2 — הקבוצה</span>
                    <span style={{ background: 'rgba(255,255,255,.2)', fontSize: 11, padding: '4px 9px', borderRadius: 999 }}>🛡️ מוגן</span>
                  </div>
                )}
              </div>
              {active === 1 && <Step1Phone />}
              {active === 2 && <Step2Phone />}
              {active === 3 && <Step3Phone />}
              {active === 4 && <Step4Phone />}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.how-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
