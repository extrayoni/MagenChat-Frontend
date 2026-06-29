import React from 'react';

const FLOOD_MSGS = [
  { name: 'שירה', c: '#7FB3D5', text: 'מישהי ערה?? 😴', time: '02:11' },
  { name: 'דנה', c: '#E29CC0', text: 'כולן ישנות חחח', time: '02:12' },
  { name: 'שירה', c: '#7FB3D5', text: 'נועה את אפסית, למה את בכלל בקבוצה הזאת', time: '02:13' },
  { name: 'דנה', c: '#E29CC0', text: 'חחחחח 💀', time: '02:13' },
  { name: 'שירה', c: '#7FB3D5', text: 'אף אחת לא סובלת אותך, תעופי מפה כבר 🤮', time: '02:14' },
  { name: 'דנה', c: '#E29CC0', text: 'ראיתן מה היא לבשה היום? 🤢', time: '02:16' },
  { name: 'מאיה', c: '#C9B6F0', text: 'שלחו לי סקרינשוט 📸', time: '02:17' },
  { name: 'שירה', c: '#7FB3D5', text: 'פותחות קבוצה חדשה בלי נועה', time: '02:18' },
];
const FLOOD = [...FLOOD_MSGS, ...FLOOD_MSGS];

export default function Problem() {
  return (
    <section style={{ padding: '96px 6vw', background: '#13110F', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(800px 500px at 85% 0%, rgba(226,84,51,.18) 0%, transparent 60%)' }} />
      <div style={{
        position: 'relative', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60,
        alignItems: 'center', maxWidth: 1120, margin: '0 auto',
      }} className="problem-grid">
        <div>
          <h2 style={{
            fontFamily: "'Rubik'", fontWeight: 800, fontSize: 'clamp(32px,4vw,48px)',
            lineHeight: 1.1, letterSpacing: '-1.5px', margin: '14px 0 0', color: '#fff',
          }}>
            אתם לא יכולים להיות שם<br />
            <span style={{ color: '#FF7A59' }}>בכל שנייה.</span>
          </h2>
          <p style={{ fontSize: 20, color: '#B9B2A8', lineHeight: 1.65, margin: '22px 0 0', maxWidth: 500 }}>
            בזמן שאתם בעבודה, בפגישה או ישנים —{' '}
            <strong style={{ color: '#fff' }}>מאות הודעות</strong> זורמות בקבוצות ואתם לא יכולים להיות שוטר. מגןצ'אט דואג למחוק תוכן רעיל בזמן אמת.{' '}
            <strong style={{ color: '#fff' }}>הגנה מלאה. שקט נפשי.</strong>
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

        {/* Night-flood phone mockup */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: -4, right: -10, zIndex: 3,
            background: '#1F1B17', border: '1px solid #3A332B', borderRadius: 15,
            padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 9,
            boxShadow: '0 18px 40px -16px rgba(0,0,0,.85)',
            animation: 'mcFloat 4s ease-in-out infinite',
          }}>
            <span style={{ fontSize: 18 }}>😴</span>
            <div style={{ color: '#E7E0D6', fontSize: 12.5, fontWeight: 600, lineHeight: 1.3 }}>02:14 — ואתם<br />ישנים</div>
          </div>

          <div style={{ width: 300, height: 592, background: '#000', borderRadius: 42, padding: 11, boxShadow: '0 44px 90px -28px rgba(0,0,0,.85)' }}>
            <div style={{ width: '100%', height: '100%', background: '#0B141A', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* WhatsApp dark header */}
              <div style={{ background: '#1F2C34', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: '#8696A0', fontSize: 22, lineHeight: 1 }}>‹</span>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#3B4A54', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>👧</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#E9EDEF', fontWeight: 600, fontSize: 14, fontFamily: "'Rubik'" }}>כיתה ו'3 — הבנות</div>
                  <div style={{ color: '#8696A0', fontSize: 11 }}>32 משתתפים</div>
                </div>
                <span style={{ color: '#8696A0', fontSize: 17 }}>⋮</span>
              </div>

              {/* Chat: animated flood */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#0B141A' }}>
                <div style={{ padding: '10px 9px 4px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <div style={{ alignSelf: 'center', background: '#182229', color: '#8696A0', fontSize: 10, padding: '4px 11px', borderRadius: 9 }}>היום</div>
                  <div style={{ alignSelf: 'center', background: '#2A1A1A', color: '#E89A93', fontSize: 10.5, padding: '4px 12px', borderRadius: 9 }}>🔴 23 הודעות שלא נקראו</div>
                </div>
                <div style={{ position: 'relative', flex: 1, overflow: 'hidden', WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 7%, #000 92%, transparent)', maskImage: 'linear-gradient(to bottom, transparent, #000 7%, #000 92%, transparent)' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', flexDirection: 'column', gap: 6, padding: '6px 9px', animation: 'mcFlood 20s linear infinite' }}>
                    {FLOOD.map((fm, i) => (
                      <div key={i} style={{ alignSelf: 'flex-start', maxWidth: '92%', background: '#202C33', borderRadius: '8px 8px 8px 2px', padding: '5px 9px 4px' }}>
                        <div style={{ fontWeight: 600, fontSize: 12, color: fm.c }}>{fm.name}</div>
                        <div style={{ fontSize: 13.5, color: '#E9EDEF', lineHeight: 1.35 }}>{fm.text}</div>
                        <div style={{ textAlign: 'left', fontSize: 9.5, color: '#8696A0', marginTop: 1 }}>{fm.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div style={{ background: '#0B141A', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, background: '#202C33', borderRadius: 999, padding: '8px 14px', color: '#8696A0', fontSize: 12.5 }}>הודעה</div>
                <span style={{ flexShrink: 0, width: 34, height: 34, borderRadius: '50%', background: '#00A884', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B141A', fontSize: 14 }}>➤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.problem-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
