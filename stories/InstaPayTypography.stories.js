import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from '../src';
import opticalSpec from '../instapay/typography-spec.json';

export default {
  title: 'InstaPay DS 2.1/Typography',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Optically corrected Inter type scale; all 62 Figma styles mapped to tokenized, pixel-precise line heights.' } } },
};

const families = [
  { key: 'heading', title: 'Display & heading scale', subtitle: '10 sizes × 2 weights = 20 styles', weight: 'headingWeight' },
  { key: 'body', title: 'Body scale', subtitle: '5 sizes × 4 weights = 20 styles', weight: 'bodyWeight' },
  { key: 'label', title: 'Label scale', subtitle: '5 sizes × 4 weights = 20 styles', weight: 'bodyWeight' },
  { key: 'capital', title: 'Capital scale', subtitle: '2 sizes × 1 weight = 2 styles', weight: 'medium' },
];

function TypeRow({ entry, family, weight, text, legacy }) {
  const name = family === 'heading' ? entry.slug : `${family}-${entry.slug}`;
  const before = legacy ? {
    lineHeight: family === 'heading' ? 1.2 : family === 'body' ? 1.5 : 'normal',
    letterSpacing: family === 'capital' ? 0 : '-0.03em',
  } : undefined;
  const caption = legacy
    ? (family === 'heading' ? '120% / -3%' : family === 'body' ? '150% / -3%' : family === 'label' ? 'auto / -3%' : 'auto / 0%')
    : `${entry.lineHeight}px / ${entry.trackingPercent > 0 ? '+' : ''}${entry.trackingPercent}%`;
  return (
    <React.Fragment>
      <div className="ip-type-gallery-meta">
        <div className="ip-activity-name">{entry.name}</div>
        <div>{entry.size}px · {caption}</div>
        <div className="ip-code-hint">{`ip-type--${name}`}</div>
      </div>
      <div className="ip-type-gallery-sample">
        <p className={`ip-type ip-type--${name} ip-weight--${weight}`} style={before}>{text}</p>
      </div>
      <div className="ip-type-gallery-rule" />
    </React.Fragment>
  );
}
TypeRow.propTypes = {
  entry: PropTypes.shape({ slug: PropTypes.string, name: PropTypes.string, size: PropTypes.number, lineHeight: PropTypes.number, trackingPercent: PropTypes.number }).isRequired,
  family: PropTypes.oneOf(['heading', 'body', 'label', 'capital']).isRequired,
  weight: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  legacy: PropTypes.bool.isRequired,
};

export function TypeScale() {
  const [sample, setSample] = useState('Clarity in every interaction.');
  const [headingWeight, setHeadingWeight] = useState('medium');
  const [bodyWeight, setBodyWeight] = useState('regular');
  const [legacy, setLegacy] = useState(false);
  const sentence = sample || 'Clarity in every interaction.';
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline">
        <div className="ip-lab-brand"><span className="ip-lab-mark">i</span> InstaPay <span className="ip-lab-slash">/</span><span className="ip-lab-subbrand">Typography</span></div>
        <span className="ip-lab-status">62 optically tuned styles</span>
      </header>
      <div className="ip-section-top"><div><span className="ip-eyebrow">Foundation · Type</span><h2>Typography with intention.</h2><p>Inter, carefully tuned. Compare the previous uniform leading and tracking with our new optical scale.</p></div></div>
      <div className="ip-grid">
        <section className="ip-panel ip-col-4">
          <div className="ip-panel-header"><h3>The optical principle</h3><span className="ip-pill">Figma synchronized</span></div>
          <div className="ip-type ip-type--h3 ip-weight--semibold" style={{ color: '#22106b' }}>Aa</div>
          <hr className="ip-rule" />
          <div className="ip-activity-name">Large type · compact leading</div>
          <p className="ip-type-gallery-note">Display 1 uses 64/72px. Tracking relaxes as headings get smaller.</p>
          <hr className="ip-rule" />
          <div className="ip-activity-name">Body · comfortable rhythm</div>
          <p className="ip-type-gallery-note">Body text uses readable, fixed line boxes and gentler tracking below 14px.</p>
          <hr className="ip-rule" />
          <div className="ip-activity-name">Labels & uppercase</div>
          <p className="ip-type-gallery-note">Labels have controlled leading; capitals receive positive tracking.</p>
        </section>
        <section className="ip-panel ip-col-8">
          <div className="ip-panel-header"><h3>Live optical tester</h3><span className="ip-panel-subtitle">Edit text, switch weights, compare before/after</span></div>
          <Label for="ip-type-optical-sample">Preview sentence</Label>
          <Input id="ip-type-optical-sample" value={sample} onChange={(e) => setSample(e.target.value)} />
          <div className="ip-form-grid" style={{ marginTop: 22 }}>
            <div><Label for="ip-head-weight">Heading weight</Label><Input id="ip-head-weight" type="select" value={headingWeight} onChange={(e) => setHeadingWeight(e.target.value)}><option value="medium">Medium · 500</option><option value="semibold">Semibold · 600</option></Input></div>
            <div><Label for="ip-body-weight">Body / label weight</Label><Input id="ip-body-weight" type="select" value={bodyWeight} onChange={(e) => setBodyWeight(e.target.value)}><option value="regular">Regular · 400</option><option value="medium">Medium · 500</option><option value="semibold">Semibold · 600</option><option value="bold">Bold · 700</option></Input></div>
          </div>
          <Label for="ip-legacy-optical" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <Input id="ip-legacy-optical" type="checkbox" checked={legacy} onChange={e => setLegacy(e.target.checked)} style={{ position: 'static', margin: 0 }} />
            Compare against previous uniform typography
          </Label>
          <div style={{ marginTop: 24, borderTop: '1px solid #eff1f6', paddingTop: 24 }}>
            <p className="ip-type ip-type--h5 ip-weight--semibold">{sentence}</p>
            <p className="ip-type ip-type--body-medium ip-weight--regular" style={{ marginTop: 16 }}>Optical rhythm, with room to read.</p>
          </div>
        </section>
      </div>
      {families.map(({ key, title, subtitle, weight }) => (
        <section className="ip-section" key={key}>
          <div className="ip-section-top">
            <div><span className="ip-eyebrow">{key}</span><h2>{title}</h2><p>{subtitle}. Precise pixel leading and size-aware tracking.</p></div>
            <span className="ip-section-meta">{legacy ? 'Previous values' : 'Optical DS 2.1'}</span>
          </div>
          <div className="ip-panel"><div className="ip-type-gallery-grid">
            {opticalSpec[key].map(entry => (
              <TypeRow key={entry.slug} family={key} entry={entry} text={sentence} legacy={legacy} weight={weight === 'medium' ? 'medium' : weight === 'headingWeight' ? headingWeight : bodyWeight} />
            ))}
          </div></div>
        </section>
      ))}
      <p className="ip-workflow-note" style={{ marginTop: 28 }}>Optical values come from typography-spec.json and match the 62 original Figma styles. Compare mode changes only the demo, never production tokens.</p>
    </main>
  );
}
