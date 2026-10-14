import React, { useState } from 'react';
import InstaPayTextField from '../src/InstaPayTextField';
import '../instapay/calibration.css';

/**
 * Experimental optical playground only. Do not change the Figma component set
 * or production DS CSS until the variants have been visually approved.
 */
export default {
  title: 'InstaPay DS 2.1/Input Calibration',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Experimental three-size optical calibration. No production component or Figma variants are modified by these controls.',
      },
    },
  },
};

const variants = [
  {
    key: 'expanded', label: 'Expanded', height: 52, font: 15, line: 22,
    icon: 20, use: 'Onboarding and prominent financial forms',
  },
  {
    key: 'standard', label: 'Standard', height: 44, font: 14, line: 20,
    icon: 18, use: 'Default transaction and account forms',
  },
  {
    key: 'compact', label: 'Compact', height: 36, font: 13, line: 18,
    icon: 16, use: 'Dashboard filters and tighter controls',
  },
];

const personIcon = (
  <svg viewBox="0 0 24 24" className="ip-cal__glyph" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
  </svg>
);

export function OpticalPlayground() {
  const [weight, setWeight] = useState(450);
  const [tracking, setTracking] = useState(-0.3);
  const [offset, setOffset] = useState(0);
  const [iconGap, setIconGap] = useState(10);
  const [guides, setGuides] = useState(false);
  const [entries, setEntries] = useState({});
  const [copyStatus, setCopyStatus] = useState('');

  const tokens = [
    '/* InstaPay input optical calibration candidate — NOT approved */',
    ':root {',
    `  --ip-input-weight: ${weight};`,
    `  --ip-input-tracking: ${(tracking / 100).toFixed(4)}em;`,
    `  --ip-input-optical-offset: ${offset}px;`,
    `  --ip-input-icon-gap: ${iconGap}px;`,
    '  --ip-input-radius: 10px;',
    '  --ip-input-padding-text: 16px;',
    '  --ip-input-padding-icon: 12px;',
    '}',
    '/* Height, type size, line height, symmetric inner insets */',
    ...variants.map(v => `/* ${v.label}: ${v.height}px / ${v.font}px / ${v.line}px / ${(v.height - v.line - 2) / 2}px */`),
  ].join('\n');

  const reset = () => {
    setWeight(450);
    setTracking(-0.3);
    setOffset(0);
    setIconGap(10);
    setGuides(false);
    setCopyStatus('');
  };

  const copyValues = async () => {
    try {
      await navigator.clipboard.writeText(tokens);
      setCopyStatus('Copied! You can paste these values here for review.');
    } catch (error) {
      setCopyStatus('Clipboard blocked by browser. Select and copy the CSS below instead.');
    }
  };

  const style = {
    '--ip-cal-weight': weight,
    '--ip-cal-tracking': `${(tracking / 100).toFixed(4)}em`,
    '--ip-cal-shift': `${offset}px`,
    '--ip-cal-icon-gap': `${iconGap}px`,
  };

  return (
    <main className="ip-cal" style={style} data-guides={guides ? 'true' : 'false'}>
      <div className="ip-cal__shell">
        <header className="ip-cal__masthead">
          <div className="ip-cal__identity">
            <span className="ip-cal__mark">i</span>
            InstaPay <span className="ip-cal__mark-sep">/</span>
            <span className="ip-cal__identity-detail">Optical Input Lab</span>
          </div>
          <span className="ip-cal__status">Experimental · DS 2.1</span>
        </header>
        <div className="ip-cal__eyebrow">Foundation / Input system</div>
        <h1 className="ip-cal__headline">Find the weight that feels right.</h1>
        <p className="ip-cal__intro">
          Tune the actual Inter Variable weight, tracking, icon gap and vertical glyph position.
          Compare the same settings across three fixed-height input sizes, with and without an icon.
          Nothing here changes production or Figma.
        </p>

        <div className="ip-cal__layout">
          <aside className="ip-cal__card">
            <h2 className="ip-cal__card-title">Optical adjustments</h2>
            <p className="ip-cal__card-description">Changes apply instantly to all six example fields.</p>

            <div className="ip-cal__control-group">
              <div className="ip-cal__control-heading">
                <label className="ip-cal__control-label" htmlFor="ip-cal-weight">Font weight</label>
                <span className="ip-cal__value">{weight}</span>
              </div>
              <input id="ip-cal-weight" type="range" min="425" max="475" step="5" value={weight} onChange={e => setWeight(Number(e.target.value))} />
              <div className="ip-cal__limits"><span>425 · lighter</span><span>475 · stronger</span></div>
            </div>

            <div className="ip-cal__control-group">
              <div className="ip-cal__control-heading">
                <label className="ip-cal__control-label" htmlFor="ip-cal-tracking">Letter spacing</label>
                <span className="ip-cal__value">{tracking.toFixed(1)}%</span>
              </div>
              <input id="ip-cal-tracking" type="range" min="-1.5" max="1" step="0.1" value={tracking} onChange={e => setTracking(Number(e.target.value))} />
              <div className="ip-cal__limits"><span>-1.5% · tight</span><span>+1% · loose</span></div>
            </div>

            <div className="ip-cal__control-group">
              <div className="ip-cal__control-heading">
                <label className="ip-cal__control-label" htmlFor="ip-cal-offset">Vertical optical shift</label>
                <span className="ip-cal__value">{offset > 0 ? '+' : ''}{offset.toFixed(2)}px</span>
              </div>
              <input id="ip-cal-offset" type="range" min="-2" max="2" step="0.25" value={offset} onChange={e => setOffset(Number(e.target.value))} />
              <div className="ip-cal__limits"><span>-2px · up</span><span>0 · centered</span><span>+2px · down</span></div>
            </div>

            <div className="ip-cal__control-group">
              <div className="ip-cal__control-heading">
                <label className="ip-cal__control-label" htmlFor="ip-cal-gap">Icon-to-text gap</label>
                <span className="ip-cal__value">{iconGap}px</span>
              </div>
              <input id="ip-cal-gap" type="range" min="6" max="14" step="1" value={iconGap} onChange={e => setIconGap(Number(e.target.value))} />
              <div className="ip-cal__limits"><span>6px · compact</span><span>14px · airy</span></div>
            </div>

            <hr className="ip-cal__rule" />
            <label className="ip-cal__guide-toggle" htmlFor="ip-cal-guides">
              <input type="checkbox" id="ip-cal-guides" checked={guides} onChange={e => setGuides(e.target.checked)} />
              Show vertical line-box guides
            </label>
            <p className="ip-cal__secondary" style={{ marginTop: 12 }}>
              Guides show the mathematically centered line box. The optical shift moves the glyphs
              without changing the fixed field height or top/bottom balance.
            </p>

            <div className="ip-cal__buttons">
              <button className="ip-cal__button ip-cal__button--primary" type="button" onClick={copyValues}>Copy values</button>
              <button className="ip-cal__button" type="button" onClick={reset}>Reset</button>
            </div>
            <div className="ip-cal__copy-status" role="status">{copyStatus}</div>
          </aside>

          <section className="ip-cal__card">
            <div className="ip-cal__size-header">
              <div>
                <h2 className="ip-cal__card-title">Three fixed sizes</h2>
                <p className="ip-cal__card-description" style={{ marginBottom: 0 }}>Focus, type and compare. Try single letters, numbers and long names.</p>
              </div>
              <span className="ip-cal__section-note">Radius 10px · Inter Variable</span>
            </div>

            {variants.map(variant => {
              const inset = (variant.height - variant.line - 2) / 2;
              return (
                <div className="ip-cal__size" data-size={variant.key} key={variant.key}>
                  <div className="ip-cal__size-header">
                    <h3 className="ip-cal__size-name">{variant.label}</h3>
                    <span className="ip-cal__size-meta">{variant.height}px height · {variant.font}px type · {variant.line}px line</span>
                  </div>
                  <div className="ip-cal__pair">
                    {['leading', 'plain'].map(mode => {
                      const withIcon = mode === 'leading';
                      const id = `ip-cal-${variant.key}-${mode}`;
                      return (
                        <div className="ip-cal__field" key={id}>
                          <label className="ip-cal__field-label" htmlFor={id}>{withIcon ? 'With leading icon' : 'Without icon'}</label>
                          <div className="ip-cal__fieldbox" data-icon={withIcon ? 'true' : 'false'}>
                            <span className="ip-cal__guide" aria-hidden="true" />
                            {withIcon && personIcon}
                            <input
                              id={id}
                              className="ip-cal__input"
                              type="text"
                              autoComplete="off"
                              aria-label={`${variant.label} ${withIcon ? 'with icon' : 'without icon'}`}
                              placeholder="Enter account name"
                              value={entries[id] || ''}
                              onChange={e => setEntries(previous => ({ ...previous, [id]: e.target.value }))}
                            />
                          </div>
                          <div className="ip-cal__measure-note">
                            Equal vertical inset: {inset}px · left edge: {withIcon ? '12px (icon)' : '16px (text)'}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="ip-cal__measure-note" style={{ marginTop: 10 }}>{variant.use}</p>
                </div>
              );
            })}

            <div className="ip-cal__safety">
              Calibration only. Size variants are fixed presets, not resized inputs.
              At mobile widths, 13–15px focused text can trigger Safari auto-zoom;
              we will test a 16px mobile editing treatment before production.
            </div>
            <details className="ip-cal__reference">
              <summary>Compare against current DS 2.1 fields (unchanged)</summary>
              <div className="ip-cal__reference-grid">
                <div>
                  <InstaPayTextField id="ip-cal-current-lg" label="Current Large · 48px" placeholder="Enter account name" startIcon={personIcon} />
                  <p>Existing production-ready library component.</p>
                </div>
                <div>
                  <InstaPayTextField id="ip-cal-current-md" size="medium" label="Current Medium · 40px" placeholder="Enter account name" />
                  <p>Existing component uses its current font and spacing tokens.</p>
                </div>
              </div>
            </details>
          </section>
        </div>

        <section className="ip-cal__card" style={{ marginTop: 16 }}>
          <div className="ip-cal__size-header">
            <div>
              <h2 className="ip-cal__card-title">Your candidate tokens</h2>
              <p className="ip-cal__card-description" style={{ marginBottom: 0 }}>
                Copy this snippet or send the chosen numbers back so we can lock them into Figma.
              </p>
            </div>
          </div>
          <label className="ip-cal__code-label" htmlFor="ip-cal-code">Live CSS values</label>
          <textarea id="ip-cal-code" className="ip-cal__code" readOnly value={tokens} onFocus={e => e.target.select()} />
          <div className="ip-cal__footnote">Nothing changes in the 30 Figma input variants or the shipped Reactstrap input styles until you approve this calibration.</div>
        </section>
      </div>
    </main>
  );
}
