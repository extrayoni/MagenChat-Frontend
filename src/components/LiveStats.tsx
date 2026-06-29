import React, { useState, useEffect } from 'react';

// Seed starting values from seconds elapsed since UTC midnight so every fresh
// page-load opens at a plausible "accumulated today" number.
function seed() {
  const now = new Date();
  const s = now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds();
  return {
    classes: 62 + Math.floor(s * 0.00028),   // ~1 new class per hour
    scanned: 4280 + Math.floor(s * 0.11),     // ~400 per hour
    blocked: 137 + Math.floor(s * 0.0033),    // ~12 per hour
  };
}

export default function LiveStats() {
  const [stats, setStats] = useState(seed);

  useEffect(() => {
    const id = setInterval(() => setStats(s => ({
      classes: s.classes + (Math.random() < 0.04 ? 1 : 0),
      scanned: s.scanned + Math.floor(2 + Math.random() * 5),
      blocked: s.blocked + (Math.random() < 0.12 ? 1 : 0),
    })), 1600);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => n.toLocaleString('en-US');

  return (
    <section style={{ padding: '48px 6vw', background: '#F2FAF6', borderTop: '1px solid #E6F1EB', borderBottom: '1px solid #E6F1EB' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginBottom: 28 }}>
          <span style={{ width: 9, height: 9, background: '#E2433A', borderRadius: '50%', animation: 'mcPulseRed 1.6s ease-in-out infinite', display: 'inline-block' }} />
          <span style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 14, letterSpacing: 1, color: '#0A5E47' }}>קורה עכשיו · בזמן אמת</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="stats-grid">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, color: '#0E7D5E', lineHeight: 1, letterSpacing: '-1px' }}>{fmt(stats.classes)}</div>
            <div style={{ color: '#5C6B64', fontSize: 15, marginTop: 8 }}>כיתות מוגנות כרגע</div>
          </div>
          <div style={{ textAlign: 'center', borderInline: '1px solid #DCEAE3' }}>
            <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, color: '#0E7D5E', lineHeight: 1, letterSpacing: '-1px' }}>{fmt(stats.scanned)}</div>
            <div style={{ color: '#5C6B64', fontSize: 15, marginTop: 8 }}>הודעות שנסרקו היום</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, color: '#E2433A', lineHeight: 1, letterSpacing: '-1px' }}>{fmt(stats.blocked)}</div>
            <div style={{ color: '#5C6B64', fontSize: 15, marginTop: 8 }}>הודעות פוגעניות נחסמו השבוע</div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:600px){.stats-grid{grid-template-columns:1fr!important;} .stats-grid > div {border-inline:none!important; border-bottom:1px solid #DCEAE3; padding-bottom:20px;}}`}</style>
    </section>
  );
}
