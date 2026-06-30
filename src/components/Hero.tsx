import React from 'react';

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Hero() {
  const label = 'הצטרפו לבטא, בחינם';

  return (
    <section id="top" style={{
      position: 'relative', padding: '70px 6vw 90px',
      background: 'radial-gradient(1200px 600px at 90% -10%, #E8F6EF 0%, #FFFFFF 55%)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56,
        alignItems: 'center', maxWidth: 1240, margin: '0 auto',
      }} className="hero-grid">
        {/* Text */}
        <div className="mc-fade-up">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#E8F6EF', color: '#0A5E47', fontWeight: 700, fontSize: 14,
            padding: '8px 16px', borderRadius: 999,
          }}>
            <span style={{ width: 8, height: 8, background: '#2BC48A', borderRadius: '50%', boxShadow: '0 0 0 4px rgba(43,196,138,.25)' }} />
            וואטסאפ בטוח לילדים
          </span>
          <h1 style={{
            fontFamily: "'Rubik',sans-serif", fontWeight: 800, fontSize: 'clamp(36px,5vw,58px)',
            lineHeight: 1.05, letterSpacing: '-1.5px', margin: '22px 0 0', color: '#16261F',
          }}>
            קבוצות הוואטסאפ שלהם,<br />
            <span style={{ color: '#0E7D5E' }}>בלי קללות ובלי פגיעות.</span>
          </h1>
          <p style={{ fontSize: 21, lineHeight: 1.55, color: '#46564E', margin: '22px 0 0', maxWidth: 520 }}>
            מגןצ'אט מסנן שפה פוגענית וקללות בקבוצות הוואטסאפ של הילדים, בזמן אמת, ישירות בוואטסאפ,{' '}
            <strong style={{ color: '#16261F' }}>בלי שום התקנה</strong> ובלי אפליקציה על הטלפון של הילד.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <a href="#how" onClick={e => { e.preventDefault(); scrollTo('how'); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#0E7D5E', color: '#fff', fontWeight: 700, fontSize: 18,
                padding: '16px 30px', borderRadius: 999, textDecoration: 'none',
                boxShadow: '0 14px 30px -10px rgba(14,125,94,.6)',
              }}>{label}</a>
            <a href="#demo" onClick={e => { e.preventDefault(); scrollTo('demo'); }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#fff', color: '#16261F', fontWeight: 700, fontSize: 18,
                padding: '16px 26px', borderRadius: 999, textDecoration: 'none',
                border: '1.5px solid #DCE7E1',
              }}>▶ ראו איך זה עובד</a>
          </div>
          <div style={{ display: 'flex', gap: 24, marginTop: 30, flexWrap: 'wrap' }}>
            {['ללא התקנה', 'בזמן אמת', 'פרטיות מלאה'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#46564E', fontWeight: 600, fontSize: 15 }}>
                <span style={{ color: '#0E7D5E' }}>✓</span> {t}
              </div>
            ))}
          </div>
        </div>

        {/* Phone mockup */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          {/* Floating badge */}
          <div className="mc-float" style={{
            position: 'absolute', top: 18, left: 6, zIndex: 3,
            background: '#fff', borderRadius: 18, padding: '12px 16px',
            boxShadow: '0 18px 40px -14px rgba(16,38,31,.3)',
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{
              width: 34, height: 34, borderRadius: 10, background: '#0E7D5E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="20" viewBox="0 0 38 42" fill="none">
                <path d="M19 1.5 L35.5 7 V21 C35.5 31.5 28 38.5 19 40.5 C10 38.5 2.5 31.5 2.5 21 V7 Z" fill="#fff" />
              </svg>
            </span>
            <div>
              <div style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 13, color: '#16261F' }}>הודעה נחסמה</div>
              <div style={{ fontSize: 12, color: '#7A8A82' }}>שפה פוגענית</div>
            </div>
          </div>

          {/* Phone frame */}
          <div style={{
            width: 300, height: 600, background: '#0E1C16', borderRadius: 42,
            padding: 11, boxShadow: '0 40px 80px -24px rgba(16,38,31,.45)', position: 'relative',
          }}>
            <div style={{
              width: '100%', height: '100%', background: '#ECE5DD', borderRadius: 32,
              overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ background: '#0E7D5E', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#7FD3B6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>👦</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, fontFamily: "'Rubik'" }}>כיתה ה'2 — הקבוצה</div>
                  <div style={{ color: '#CDEFE0', fontSize: 12 }}>28 משתתפים</div>
                </div>
                <span style={{ background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 9px', borderRadius: 999 }}>🛡️ מוגן</span>
              </div>
              <div style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 10, backgroundImage: 'radial-gradient(rgba(14,125,94,.04) 1px, transparent 1px)', backgroundSize: '18px 18px' }}>
                <div style={{ alignSelf: 'flex-start', maxWidth: '80%', background: '#fff', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', fontSize: 14, boxShadow: '0 1px 1px rgba(0,0,0,.05)' }}>מישהו ראה את שיעורי הבית במתמטיקה? 📚</div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '80%', background: '#fff', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', fontSize: 14, boxShadow: '0 1px 1px rgba(0,0,0,.05)' }}>תכף שולח לכם 👍</div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '92%', background: '#fff', padding: '7px 11px', borderRadius: '12px 12px 12px 2px', boxShadow: '0 1px 1px rgba(0,0,0,.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8A938C', fontStyle: 'italic', fontSize: 12.5 }}><span>🚫</span> ההודעה נמחקה על ידי המנהל מגןצ'אט</div>
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '94%', background: '#fff', padding: '8px 11px', borderRadius: '12px 12px 12px 2px', boxShadow: '0 1px 1px rgba(0,0,0,.05)' }} className="mc-pop">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                    <img src="/cropped-LOGO.jpg" alt="" style={{ width: 16, height: 16, borderRadius: 4, objectFit: 'contain' }} />
                    <span style={{ fontWeight: 700, fontSize: 12, color: '#E25433' }}>מגןצ'אט</span>
                  </div>
                  <div style={{ fontSize: 13, color: '#1F2A24', lineHeight: 1.4 }}>⚠️ זוהתה שפה לא מכבדת. ההודעה הוסרה ודווחה לאחראים.</div>
                </div>
                <div style={{ alignSelf: 'flex-start', maxWidth: '80%', background: '#fff', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', fontSize: 14, boxShadow: '0 1px 1px rgba(0,0,0,.05)' }}>מי בא לכדורגל אחרי הצהריים? ⚽</div>
                <div style={{ alignSelf: 'flex-end', maxWidth: '70%', background: '#DCF8C6', padding: '8px 12px', borderRadius: '12px 12px 2px 12px', fontSize: 14, boxShadow: '0 1px 1px rgba(0,0,0,.05)' }}>אני מגיע! 🙌</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
