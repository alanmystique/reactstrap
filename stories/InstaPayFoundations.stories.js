import React from 'react';

export default {
  title: 'InstaPay DS 2.1/Foundations',
  parameters: { layout: 'fullscreen' },
};

const swatches = [
  { label: 'Brand / Primary', color: '#5926f0', detail: 'Primary actions' },
  { label: 'Brand / Hover', color: '#3b17a8', detail: 'Elevated interaction' },
  { label: 'Ink / Deep', color: '#22106b', detail: 'Emphasized copy' },
  { label: 'Ink / Strong', color: '#1b1f2a', detail: 'Field labels' },
  { label: 'Surface / Neutral', color: '#eff1f6', detail: 'Secondary actions' },
  { label: 'Surface / Muted', color: '#f8f9fc', detail: 'Quiet containers' },
  { label: 'Brand / Soft', color: '#f2eeff', detail: 'Brand alerts' },
  { label: 'Brand / Line', color: '#e4dbff', detail: 'Brand border' },
];

export function PaletteAndTypography() {
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline">
        <div className="ip-lab-brand"><span className="ip-lab-mark">i</span>InstaPay <span className="ip-lab-slash">/</span> <span className="ip-lab-subbrand">Foundations</span></div>
        <span className="ip-lab-status">DS 2.1</span>
      </header>
      <section className="ip-section-top">
        <div><span className="ip-eyebrow">Color system</span><h2>A considered palette</h2><p>Brand purple, supportive neutrals, a precise hierarchy.</p></div>
      </section>
      <div className="ip-grid">
        {swatches.map((token) => (
          <article className="ip-panel ip-col-3" key={token.label}>
            <div style={{ background: token.color, height: 104, borderRadius: 9, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.04)', marginBottom: 16 }} />
            <div className="ip-activity-name">{token.label}</div>
            <div className="ip-code-hint" style={{ marginTop: 5 }}>{token.color.toUpperCase()}</div>
            <div className="ip-panel-subtitle" style={{ marginTop: 7 }}>{token.detail}</div>
          </article>
        ))}
      </div>
      <section className="ip-section">
        <div className="ip-section-top"><div><span className="ip-eyebrow">Typography</span><h2>Inter · Soft precision</h2><p>Purposeful density and restrained tracking.</p></div></div>
        <div className="ip-panel">
          <div className="ip-type-line"><span className="ip-type-display">Design that feels effortless.</span><span className="ip-code-hint">Display / -7.5% preview</span></div>
          <div className="ip-type-line"><span className="ip-type-title">Clear, careful, considered.</span><span className="ip-code-hint">Heading</span></div>
          <div className="ip-type-line"><span className="ip-type-body">Make every interaction feel precise and intuitive.</span><span className="ip-code-hint">Inter Medium / -3%</span></div>
          <div className="ip-type-line"><span className="ip-type-small">Labels, captions and support information</span><span className="ip-code-hint">Caption</span></div>
        </div>
      </section>
      <p className="ip-workflow-note" style={{ marginTop: 26 }}>These are the shared visual foundations of the preview. Only finalized DS component specifications are considered production-ready.</p>
    </main>
  );
}
