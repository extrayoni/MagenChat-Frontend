import React, { useState, useEffect } from 'react';

export default function LiveStats() {
  const [liveClasses, setLiveClasses] = useState(1247);
  const [liveScanned, setLiveScanned] = useState(2418600);
  const [liveBlocked, setLiveBlocked] = useState(18420);

  useEffect(() => {
    const id = setInterval(() => {
      setLiveScanned(n => n + Math.floor(25 + Math.random() * 95));
      setLiveBlocked(n => n + (Math.random() < 0.3 ? 1 : 0));
      setLiveClasses(n => n + (Math.random() < 0.1 ? 1 : 0));
    }, 950);
    return () => clearInterval(id);
  }, []);

  const fmt = (n: number) => Math.round(n).toLocaleString('en-US');

  return (
    <section style={{ padding: '48px 6vw', background: '#F2FAF6', borderTop: '1px solid #E6F1EB', borderBottom: '1px solid #E6F1EB' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, marginBottom: 28 }}>
          <span style={{ width: 9, height: 9, background: '#E2433A', borderRadius: '50%', animation: 'mcPulseRed 1.6s ease-in-out infinite', display: 'inline-block' }} />
          <span style={{ fontFamily: "'Rubik'", fontWeight: 700, fontSize: 14, letterSpacing: 1, color: '#0A5E47' }}>קורה עכשיו · בזמן אמת</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="stats-grid">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, color: '#0E7D5E', lineHeight: 1, letterSpacing: '-1px' }}>{fmt(liveClasses)}</div>
            <div style={{ color: '#5C6B64', fontSize: 15, marginTop: 8 }}>כיתות מוגנות כרגע</div>
          </div>
          <div style={{ textAlign: 'center', borderInline: '1px solid #DCEAE3' }}>
            <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, color: '#0E7D5E', lineHeight: 1, letterSpacing: '-1px' }}>{fmt(liveScanned)}</div>
            <div style={{ color: '#5C6B64', fontSize: 15, marginTop: 8 }}>הודעות שנסרקו היום</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rubik'", fontWeight: 800, fontSize: 46, color: '#E2433A', lineHeight: 1, letterSpacing: '-1px' }}>{fmt(liveBlocked)}</div>
            <div style={{ color: '#5C6B64', fontSize: 15, marginTop: 8 }}>הודעות פוגעניות נחסמו השבוע</div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:600px){.stats-grid{grid-template-columns:1fr!important;} .stats-grid > div {border-inline:none!important; border-bottom:1px solid #DCEAE3; padding-bottom:20px;}}`}</style>
    </section>
  );
}
