import React, { useState } from 'react';
import { Input, Label } from '../src';

export default {
  title: 'InstaPay DS 2.1/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The Figma-defined 62-style type system. Source: Typography page 16:9. Uses reusable, opt-in instapay/typography.css classes.',
      },
    },
  },
};

const headingSizes = [
  ['Display 1', 'display-1', 64],
  ['Display 2', 'display-2', 56],
  ['Display 3', 'display-3', 48],
  ['H1', 'h1', 40],
  ['H2', 'h2', 36],
  ['H3', 'h3', 32],
  ['H4', 'h4', 28],
  ['H5', 'h5', 24],
  ['H6', 'h6', 20],
  ['H7', 'h7', 18],
];
const bodySizes = [
  ['Large', 'large', 18],
  ['Medium', 'medium', 16],
  ['Small', 'small', 14],
  ['XSmall', 'xsmall', 12],
  ['XXSmall', 'xxsmall', 11],
];

function TypographicRow({ label, cssClass, weight, pixels, text, caption }) {
  return (
    <React.Fragment>
      <div className="ip-type-gallery-meta">
        <div className="ip-activity-name">{label}</div>
        <div>{pixels}px · {caption}</div>
        <div className="ip-code-hint">{cssClass}</div>
      </div>
      <div className="ip-type-gallery-sample">
        <p className={`ip-type ${cssClass} ip-weight--${weight}`}>{text}</p>
      </div>
      <div className="ip-type-gallery-rule" />
    </React.Fragment>
  );
}

export function TypeScale() {
  const [headingWeight, setHeadingWeight] = useState('medium');
  const [bodyWeight, setBodyWeight] = useState('regular');
  const [sample, setSample] = useState('Clarity in every interaction.');
  const displayed = sample || 'Clarity in every interaction.';
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline">
        <div className="ip-lab-brand"><span className="ip-lab-mark">i</span> InstaPay <span className="ip-lab-slash">/</span> <span className="ip-lab-subbrand">Typography</span></div>
        <span className="ip-lab-status">62 Figma text styles</span>
      </header>
      <div className="ip-section-top">
        <div>
          <span className="ip-eyebrow">Foundation · Type system</span>
          <h2>Inter. Hierarchy without noise.</h2>
          <p>20 heading styles · 20 body styles · 20 label styles · 2 capital styles. All mapped from our Figma library.</p>
        </div>
      </div>
      <div className="ip-grid">
        <section className="ip-panel ip-col-4">
          <div className="ip-panel-header"><h3>Typography rules</h3><span className="ip-pill">Figma-matched</span></div>
          <div className="ip-type ip-type--h3 ip-weight--semibold" style={{ color: '#22106b' }}>Aa</div>
          <div className="ip-type-gallery-note">Inter · 400 / 500 / 600 / 700</div>
          <hr className="ip-rule" />
          <div className="ip-activity-name">Heading</div>
          <div className="ip-type-gallery-note">120% line height · -3% tracking · Medium / Semibold</div>
          <hr className="ip-rule" />
          <div className="ip-activity-name">Body</div>
          <div className="ip-type-gallery-note">150% line height · -3% tracking · Regular to Bold</div>
          <hr className="ip-rule" />
          <div className="ip-activity-name">Labels & Capitals</div>
          <div className="ip-type-gallery-note">Labels use natural line height and -3% tracking. Capitals are uppercase with neutral tracking.</div>
        </section>
        <section className="ip-panel ip-col-8">
          <div className="ip-panel-header"><h3>Interactive type tester</h3><span className="ip-panel-subtitle">Edit the sentence and weights</span></div>
          <Label for="ip-type-sample">Preview text</Label>
          <Input id="ip-type-sample" className="ip-type-gallery-input" value={sample} onChange={(e) => setSample(e.target.value)} />
          <div className="ip-form-grid" style={{ marginTop: 22 }}>
            <div>
              <Label for="ip-heading-weight">Heading weight</Label>
              <Input type="select" id="ip-heading-weight" value={headingWeight} onChange={(e) => setHeadingWeight(e.target.value)}>
                <option value="medium">Medium · 500</option>
                <option value="semibold">Semibold · 600</option>
              </Input>
            </div>
            <div>
              <Label for="ip-body-weight">Body & label weight</Label>
              <Input type="select" id="ip-body-weight" value={bodyWeight} onChange={(e) => setBodyWeight(e.target.value)}>
                <option value="regular">Regular · 400</option>
                <option value="medium">Medium · 500</option>
                <option value="semibold">Semibold · 600</option>
                <option value="bold">Bold · 700</option>
              </Input>
            </div>
          </div>
          <div style={{ marginTop: 30 }}>
            <div className="ip-type ip-type--h5 ip-weight--semibold ip-type-example" style={{ color: '#22106b' }}>A thoughtful financial experience</div>
            <div className={`ip-type ip-type--body-medium ip-weight--${bodyWeight} ip-type-example`}>{displayed}</div>
            <div className="ip-type ip-type--capital-xsmall" style={{ color: '#5926f0' }}>Designed for clarity</div>
          </div>
        </section>
      </div>
      <section className="ip-section">
        <div className="ip-section-top"><div><span className="ip-eyebrow">Heading styles</span><h2>Display & heading scale</h2><p>10 sizes × 2 weights = 20 styles. Test the hierarchy below.</p></div><span className="ip-section-meta">Heading · {headingWeight}</span></div>
        <div className="ip-panel"><div className="ip-type-gallery-grid">
          {headingSizes.map(([label, key, pixels]) => (
            <TypographicRow key={key} label={label} pixels={pixels} cssClass={`ip-type--${key}`} weight={headingWeight} caption="120% / -3%" text={displayed} />
          ))}
        </div></div>
      </section>
      <section className="ip-section">
        <div className="ip-section-top"><div><span className="ip-eyebrow">Body styles</span><h2>Readable at every density</h2><p>Five sizes × four weights = 20 styles. Body copy uses 150% line height.</p></div><span className="ip-section-meta">Body · {bodyWeight}</span></div>
        <div className="ip-panel"><div className="ip-type-gallery-grid">
          {bodySizes.map(([label, key, pixels]) => (
            <TypographicRow key={key} label={label} pixels={pixels} cssClass={`ip-type--body-${key}`} weight={bodyWeight} caption="150% / -3%" text={displayed} />
          ))}
        </div></div>
      </section>
      <section className="ip-section">
        <div className="ip-section-top"><div><span className="ip-eyebrow">Label & capital styles</span><h2>Short and intentional</h2><p>Labels retain natural line height; capitals use zero tracking.</p></div></div>
        <div className="ip-panel"><div className="ip-type-gallery-grid">
          {bodySizes.map(([label, key, pixels]) => (
            <TypographicRow key={key} label={`Label / ${label}`} pixels={pixels} cssClass={`ip-type--label-${key}`} weight={bodyWeight} caption="auto / -3%" text={displayed} />
          ))}
          <TypographicRow label="Capital / Small" pixels={14} cssClass="ip-type--capital-small" weight="medium" caption="auto / 0%" text={displayed} />
          <TypographicRow label="Capital / XSmall" pixels={12} cssClass="ip-type--capital-xsmall" weight="medium" caption="auto / 0%" text={displayed} />
        </div></div>
      </section>
      <p className="ip-workflow-note" style={{ marginTop: 28 }}>Typography CSS is opt-in for consuming apps; the Storybook theme applies these same tokens to the preview. The Figma style IDs and component links are unchanged.</p>
    </main>
  );
}
