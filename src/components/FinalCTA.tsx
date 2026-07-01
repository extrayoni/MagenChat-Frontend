import React from 'react';

export default function FinalCTA() {
  return (
    <section style={{ padding: '80px 6vw' }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto',
        background: 'linear-gradient(135deg,#0E7D5E,#0A5E47)',
        borderRadius: 34, padding: '64px 48px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -40, left: -30, width: 200, height: 200, background: 'rgba(43,196,138,.25)', borderRadius: '50%', filter: 'blur(20px)' }} />
        <h2 style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, letterSpacing: '-1px', color: '#fff', margin: 0, position: 'relative' }}>
          תנו לילדים מרחב בטוח לדבר בו.
        </h2>
        <p style={{ fontSize: 20, color: '#BFEAD7', margin: '18px auto 0', maxWidth: 520, position: 'relative' }}>
          הגנו על הקבוצות שלהם תוך שתי דקות, בלי התקנה, בלי לפגוע בפרטיות.
        </p>
        <a href="#beta" onClick={e => { e.preventDefault(); document.getElementById('beta')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            display: 'inline-flex', marginTop: 30, background: '#fff', color: '#0E7D5E',
            fontWeight: 800, fontSize: 19, padding: '17px 38px', borderRadius: 999,
            textDecoration: 'none', position: 'relative', boxShadow: '0 16px 30px -12px rgba(0,0,0,.4)',
          }}>
          הצטרפו לבטא, בחינם
        </a>
      </div>
    </section>
  );
}
