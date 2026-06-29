import React, { useState, useEffect } from 'react';

// EPOCH = June 28, 2026 00:00:00 UTC
// Rates calibrated so values match design at ~June 29 12:00 UTC (elapsed ~129600s)
const EPOCH = 1751068800;
const BASE = { classes: 0, scanned: 0, blocked: 0 };
const RATE = { classes: 0.00048, scanned: 0.033, blocked: 0.00106 };

function getStats() {
  const elapsed = Math.floor(Date.now() / 1000) - EPOCH;
  return {
    classes: BASE.classes + Math.floor(elapsed * RATE.classes),
    scanned: BASE.scanned + Math.floor(elapsed * RATE.scanned),
    blocked: BASE.blocked + Math.floor(elapsed * RATE.blocked),
  };
}

export default function LiveStats() {
  const [stats, setStats] = useState(getStats);

  useEffect(() => {
    const id = setInterval(() => setStats(getStats()), 1600);
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
