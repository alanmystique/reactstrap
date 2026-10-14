import React, { useState } from 'react';
import '../instapay/spacing.css';

export default {
  title: 'InstaPay DS 2.1/Spacing Lab',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Optical spacing calibration for repeated activity rows. Preview proposal only; Figma and shipped component spacing are unchanged.',
      },
    },
  },
};

const rows = [
  { initials: 'DT', title: 'Demo transfer', subtitle: 'Payment received', amount: '+ $2,450.00' },
  { initials: 'SI', title: 'Sample invoice', subtitle: 'Subscription', amount: '- $128.00' },
  { initials: 'BU', title: 'Balance update', subtitle: 'Account transfer', amount: '+ $840.00' },
];

const starting = {
  avatar: 36,
  columnGap: 12,
  copyGap: 2,
  rowInset: 8,
  panelInset: 24,
  opticalShift: 0,
};

function OpticalRow({ row }) {
  return (
    <li className="ip-activity-row">
      <span className="ip-avatar" aria-hidden="true">{row.initials}</span>
      <span className="ip-activity-copy">
        <span className="ip-activity-name">{row.title}</span>
        <span className="ip-activity-time">{row.subtitle}</span>
      </span>
      <span className="ip-activity-amount">{row.amount}</span>
    </li>
  );
}

import PropTypes from 'prop-types';

OpticalRow.propTypes = {
  row: PropTypes.shape({
    initials: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    amount: PropTypes.string,
  }).isRequired,
};

export function SpacingCalibration() {
  const [values, setValues] = useState(starting);
  const [guides, setGuides] = useState(false);
  const [feedback, setFeedback] = useState('');
  const set = (key, value) => setValues(v => ({ ...v, [key]: value }));
  const controls = [
    { key: 'avatar', label: 'Avatar size', min: 30, max: 44, step: 2 },
    { key: 'columnGap', label: 'Avatar → text', min: 6, max: 20, step: 1 },
    { key: 'copyGap', label: 'Title → subtitle', min: 0, max: 10, step: 1 },
    { key: 'rowInset', label: 'Row top / bottom', min: 4, max: 18, step: 1 },
    { key: 'panelInset', label: 'Card interior inset', min: 16, max: 36, step: 2 },
    { key: 'opticalShift', label: 'Text optical offset', min: -2, max: 2, step: .25 },
  ];

  const code = [
    '/* InstaPay spacing calibration — candidate, not approved */',
    ':root {',
    `  --ip-activity-avatar: ${values.avatar}px;`,
    `  --ip-activity-column-gap: ${values.columnGap}px;`,
    `  --ip-activity-copy-gap: ${values.copyGap}px;`,
    `  --ip-activity-row-inset: ${values.rowInset}px;`,
    `  --ip-spacing-card-inset: ${values.panelInset}px;`,
    `  --ip-activity-optical-shift: ${values.opticalShift}px;`,
    '}',
    '/* 13/18 title, 12/16 subtitle; 10px avatar radius. */',
  ].join('\n');
  const style = {
    '--ip-activity-avatar': `${values.avatar}px`,
    '--ip-activity-column-gap': `${values.columnGap}px`,
    '--ip-activity-copy-gap': `${values.copyGap}px`,
    '--ip-activity-row-inset': `${values.rowInset}px`,
    '--ip-spacing-card-inset': `${values.panelInset}px`,
    '--ip-activity-optical-shift': `${values.opticalShift}px`,
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setFeedback('Values copied. Paste them into our chat for review.');
    } catch {
      setFeedback('Clipboard permission unavailable. Select and copy the code below.');
    }
  };
  return (
    <main className="ip-spacing-lab" style={style}>
      <div className="ip-spacing-lab__shell">
        <header className="ip-spacing-lab__header">
          <div className="ip-spacing-lab__brand">
            <span className="ip-spacing-lab__brand-mark">i</span>
            InstaPay <span style={{ color: '#b6bfd0', fontWeight: 400 }}>/</span> Spacing Lab
          </div>
          <span className="ip-spacing-lab__muted">Experimental · DS 2.1</span>
        </header>
        <span className="ip-spacing-lab__eyebrow">Spatial foundation · Optical rhythm</span>
        <h1>Every pixel needs a reason.</h1>
        <p className="ip-spacing-lab__intro">
          The current Activity row uses a line break, an arbitrary 34px avatar and a 10px gap.
          Here the typography is a true two-line stack, centered as a unit with the avatar.
          Adjust the distances and judge what actually looks balanced.
        </p>
        <div className="ip-spacing-lab__grid">
          <aside className="ip-spacing-lab__card ip-spacing-lab__card--controls">
            <h2 className="ip-spacing-lab__card-title">Calibrate spacing</h2>
            <p className="ip-spacing-lab__caption">Change one dimension at a time. Every preview responds instantly.</p>
            {controls.map(control => (
              <div className="ip-spacing-lab__control" key={control.key}>
                <div className="ip-spacing-lab__label-row">
                  <span className="ip-spacing-lab__label" id={`ip-space-${control.key}-label`}>{control.label}</span>
                  <span className="ip-spacing-lab__value">{values[control.key] > 0 && control.key === 'opticalShift' ? '+' : ''}{values[control.key]}px</span>
                </div>
                <input
                  className="ip-spacing-lab__range"
                  type="range"
                  min={control.min}
                  max={control.max}
                  step={control.step}
                  value={values[control.key]}
                  aria-labelledby={`ip-space-${control.key}-label`}
                  onChange={e => set(control.key, Number(e.target.value))}
                />
                <div className="ip-spacing-lab__extremes"><span>{control.min}px</span><span>{control.max}px</span></div>
              </div>
            ))}
            <label className="ip-spacing-lab__text-settings">
              <input type="checkbox" checked={guides} onChange={e => setGuides(e.target.checked)} />
              Show alignment guides
            </label>
            <div className="ip-spacing-lab__actions">
              <button className="ip-spacing-lab__button ip-spacing-lab__button--primary" type="button" onClick={copy}>Copy values</button>
              <button className="ip-spacing-lab__button" type="button" onClick={() => { setValues(starting); setGuides(false); setFeedback(''); }}>Reset</button>
            </div>
            <span className="ip-spacing-lab__status" role="status">{feedback}</span>
          </aside>
          <div>
            <section className="ip-spacing-lab__card" style={{ marginBottom: 16 }}>
              <h2 className="ip-spacing-lab__card-title">Before · current overview</h2>
              <p className="ip-spacing-lab__sample-caption">34px avatar · 10px gap · HTML line break · uncontrolled text rhythm</p>
              <ul className="ip-spacing-lab__list ip-spacing-lab__legacy-list">
                {rows.map(row => (
                  <li key={row.initials}>
                    <span className="ip-spacing-lab__legacy-content">
                      <span className="ip-spacing-lab__legacy-avatar">{row.initials}</span>
                      <span>
                        <span className="ip-spacing-lab__legacy-title">{row.title}</span>
                        <br />
                        <span className="ip-spacing-lab__legacy-subtitle">{row.subtitle}</span>
                      </span>
                    </span>
                    <span className="ip-spacing-lab__legacy-amount">{row.amount}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className={`ip-spacing-lab__card ${guides ? 'ip-spacing-lab__guides' : ''}`}>
              <h2 className="ip-spacing-lab__card-title">After · proposed optical row</h2>
              <p className="ip-spacing-lab__sample-caption">
                A centered avatar, true two-line stack, explicit relationships and equal top/bottom inset.
              </p>
              <ul className="ip-spacing-lab__list">
                {rows.map(row => <OpticalRow key={row.initials} row={row} />)}
              </ul>
              <div className="ip-spacing-lab__chips">
                <span className="ip-spacing-lab__chip">Avatar {values.avatar}px</span>
                <span className="ip-spacing-lab__chip">H gap {values.columnGap}px</span>
                <span className="ip-spacing-lab__chip">Text gap {values.copyGap}px</span>
                <span className="ip-spacing-lab__chip">V inset {values.rowInset}px</span>
              </div>
            </section>
          </div>
        </div>
        <section className="ip-spacing-lab__card" style={{ marginTop: 16 }}>
          <h2 className="ip-spacing-lab__card-title">Calibration values</h2>
          <p className="ip-spacing-lab__caption">Adjust until the three rows feel equally balanced, then copy the exact result.</p>
          <span className="ip-spacing-lab__label" id="ip-spacing-code-label">Copyable token proposal</span>
          <textarea aria-labelledby="ip-spacing-code-label" className="ip-spacing-lab__code" value={code} readOnly onFocus={e => e.target.select()} />
          <p className="ip-spacing-lab__note">
            This is a Storybook-only candidate. It doesn't modify your Figma spacing or the released Reactstrap APIs.
            We'll promote the approved values into shared DS tokens only after reviewing them in real product density.
          </p>
        </section>
      </div>
    </main>
  );
}
