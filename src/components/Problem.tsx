import React from 'react';

export default function Problem() {
  return (
    <section style={{ padding: '96px 6vw', background: '#13110F', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(800px 500px at 85% 0%, rgba(226,84,51,.18) 0%, transparent 60%)' }} />
      <div style={{
        position: 'relative', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60,
        alignItems: 'center', maxWidth: 1120, margin: '0 auto',
      }} className="problem-grid">
        <div>
          <span style={{ fontFamily: "'Rubik'", color: '#FF7A59', fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>הכאב האמיתי</span>
          <h2 style={{
            fontFamily: "'Rubik'", fontWeight: 800, fontSize: 'clamp(32px,4vw,48px)',
            lineHeight: 1.1, letterSpacing: '-1.5px', margin: '14px 0 0', color: '#fff',
          }}>
            אתם לא יכולים להיות שם<br />
            <span style={{ color: '#FF7A59' }}>בכל שנייה.</span>
          </h2>
          <p style={{ fontSize: 20, color: '#B9B2A8', lineHeight: 1.65, margin: '22px 0 0', maxWidth: 500 }}>
            בזמן שאתם בעבודה, בפגישה או ישנים —{' '}
            <strong style={{ color: '#fff' }}>מאות הודעות</strong> זורמות בקבוצות של הילד. קללה אחת נכתבת ונמחקת תוך שניות, אבל הילד כבר ראה.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 38, flexWrap: 'wrap' }}>
            {[
              { stat: 'מאות', label: 'הודעות ביום בקבוצה אחת' },
              { stat: '5+', label: 'קבוצות במקביל לכל ילד' },
              { stat: '24/7', label: 'וזה לא מחכה שתתפנו' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ background: '#1F1B17', border: '1px solid #322C25', borderRadius: 18, padding: '20px 24px', flex: 1, minWidth: 140 }}>
                <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 38, color: '#FF7A59', lineHeight: 1 }}>{stat}</div>
                <div style={{ color: '#9A938A', fontSize: 14, marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Night flood visual */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 330, background: '#1C1813', border: '1px solid #322C25', borderRadius: 26, padding: 18, boxShadow: '0 40px 80px -30px rgba(0,0,0,.7)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#8A837A', fontSize: 13, fontWeight: 600 }}>🌙 02:14 בלילה</div>
              <span style={{ background: '#E25433', color: '#fff', fontSize: 12, fontWeight: 700, padding: '4px 10px', borderRadius: 999 }}>23 חדשות</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ alignSelf: 'flex-start', maxWidth: '82%', background: '#2A2620', color: '#D7D1C8', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', fontSize: 13.5 }}>
                מי בקבוצה? כולם ערים? 👀
              </div>
              <div style={{ alignSelf: 'flex-start', maxWidth: '90%', background: '#2A1A16', border: '1px solid #5C2A1E', padding: '9px 12px', borderRadius: 12, position: 'relative', overflow: 'hidden' }}>
                <div style={{ filter: 'blur(4px)', color: '#FF9D85', fontSize: 13.5, userSelect: 'none' }}>אתה כזה ××× מטומטם תעוף</div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF7A59', fontWeight: 700, fontSize: 12 }}>שפה פוגענית</div>
              </div>
              <div style={{ alignSelf: 'flex-start', maxWidth: '70%', background: '#2A2620', color: '#D7D1C8', padding: '8px 12px', borderRadius: '12px 12px 12px 2px', fontSize: 13.5 }}>חחח</div>
              <div style={{ alignSelf: 'flex-start', maxWidth: '88%', background: '#2A1A16', border: '1px solid #5C2A1E', padding: '9px 12px', borderRadius: 12, position: 'relative', overflow: 'hidden' }}>
                <div style={{ filter: 'blur(4px)', color: '#FF9D85', fontSize: 13.5, userSelect: 'none' }}>אף אחד לא רוצה אותך בקבוצה ×××</div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF7A59', fontWeight: 700, fontSize: 12 }}>חרם / פגיעה</div>
              </div>
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, background: '#13110F', borderRadius: 14, padding: '12px 14px' }}>
              <span style={{ fontSize: 20 }}>😴</span>
              <div style={{ color: '#8A837A', fontSize: 13, lineHeight: 1.4 }}>אתם ישנים. הילד.ה לבד מול זה.</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.problem-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
