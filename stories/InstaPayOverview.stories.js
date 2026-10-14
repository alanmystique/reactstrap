import React, { useState } from 'react';
import { Alert, Input, Label, FormGroup, Badge } from '../src';
import InstaPayButton from '../src/InstaPayButton';

export default {
  title: 'InstaPay DS 2.1/Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The live, design-system-first preview. Brand language, interaction patterns and UI primitives are grounded in InstaPay Figma.',
      },
    },
  },
};

export function Overview() {
  const [recipient, setRecipient] = useState('');
  const [success, setSuccess] = useState(false);
  const activity = [
    { name: 'Demo transfer', type: 'Payment received', amount: '+ $2,450.00', initials: 'DT' },
    { name: 'Sample invoice', type: 'Subscription', amount: '- $128.00', initials: 'SI' },
    { name: 'Balance update', type: 'Account transfer', amount: '+ $840.00', initials: 'BU' },
  ];
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline">
        <div className="ip-lab-brand">
          <span className="ip-lab-mark">i</span>
          InstaPay <span className="ip-lab-slash">/</span> <span className="ip-lab-subbrand">Design System 2.1</span>
        </div>
        <span className="ip-lab-status">Live component preview</span>
      </header>

      <section className="ip-hero">
        <div className="ip-hero-copy">
          <span className="ip-eyebrow">InstaPay · Interface foundations</span>
          <h1>Soft precision.<br />Every interaction<span>.</span></h1>
          <p>A quieter, more intentional fintech interface. Subtle elevation, compact elegance and the familiar confidence of InstaPay purple.</p>
          <div className="ip-action-row">
            <InstaPayButton variant="primary" onClick={() => document.getElementById('ip-overview-components')?.scrollIntoView({ behavior: 'smooth' })}>Explore components</InstaPayButton>
            <InstaPayButton variant="secondary" tag="a" href="https://www.figma.com/design/1z3vwnijVhrhUoiKqHvdys/InstaPay-DS-2-0?node-id=132-1835" target="_blank" rel="noreferrer">View Figma source</InstaPayButton>
          </div>
        </div>
        <div className="ip-hero-decoration" aria-hidden="true">
          <div className="ip-hero-ring" />
          <div className="ip-float-card">
            <div className="ip-float-card-label"><span>Available balance</span><span>•••</span></div>
            <div className="ip-float-card-amount">$24,680<span style={{ fontSize: 15, fontWeight: 500, color: '#9ca3b3' }}>.50</span></div>
            <span className="ip-float-chip">↗ &nbsp;+12.8% this month</span>
            <div className="ip-float-progress"><span /></div>
          </div>
        </div>
      </section>

      <section className="ip-section">
        <div className="ip-grid">
          <div className="ip-panel ip-col-3"><div className="ip-info-kpi">96</div><span className="ip-info-label">Button variants mapped in Figma</span></div>
          <div className="ip-panel ip-col-3"><div className="ip-info-kpi">04</div><span className="ip-info-label">Size scales · 44 / 36 / 32 / 28px</span></div>
          <div className="ip-panel ip-col-3"><div className="ip-info-kpi">03</div><span className="ip-info-label">Button intents · primary to tertiary</span></div>
          <div className="ip-panel ip-col-3"><div className="ip-info-kpi">Inter</div><span className="ip-info-label">Medium weight · optical -3% tracking</span></div>
        </div>
      </section>

      <section className="ip-section" id="ip-overview-components">
        <div className="ip-section-top">
          <div><span className="ip-eyebrow">Component library</span><h2>Made for real interfaces</h2><p>Interactive patterns based on our Figma library. Try the controls yourself.</p></div>
          <span className="ip-section-meta">Reactstrap 9 · Bootstrap 5 · DS 2.1</span>
        </div>
        <div className="ip-grid">
          <div className="ip-panel ip-col-7">
            <div className="ip-panel-header"><h3>Button family</h3><span className="ip-pill">Figma matched</span></div>
            <div className="ip-variants" style={{ marginBottom: 18 }}>
              <InstaPayButton variant="primary">Continue</InstaPayButton>
              <InstaPayButton variant="secondary">Review details</InstaPayButton>
              <InstaPayButton variant="tertiary">Learn more</InstaPayButton>
            </div>
            <hr className="ip-rule" />
            <div className="ip-variants">
              <InstaPayButton variant="primary" size="large">Large · 44</InstaPayButton>
              <InstaPayButton variant="primary" size="medium">Medium · 36</InstaPayButton>
              <InstaPayButton variant="primary" size="small">Small · 32</InstaPayButton>
              <InstaPayButton variant="primary" size="xsmall">XS · 28</InstaPayButton>
            </div>
          </div>
          <div className="ip-panel ip-col-5">
            <div className="ip-panel-header"><h3>Make a transfer</h3><span className="ip-panel-subtitle">Interaction preview</span></div>
            <FormGroup>
              <Label for="ip-overview-recipient">Recipient</Label>
              <Input id="ip-overview-recipient" type="email" placeholder="name@company.com" value={recipient} onChange={(e) => { setRecipient(e.target.value); setSuccess(false); }} />
              <div className="ip-form-help">A sample interaction — no payment is submitted.</div>
            </FormGroup>
            <InstaPayButton variant="primary" size="medium" onClick={() => setSuccess(true)} disabled={!recipient.trim()}>Continue</InstaPayButton>
            {success && <Alert color="primary" style={{ marginTop: 16, marginBottom: 0 }}>Preview only — recipient entered: {recipient}</Alert>}
          </div>
          <div className="ip-panel ip-col-5">
            <div className="ip-panel-header"><h3>Foundation palette</h3><span className="ip-panel-subtitle">Token selection</span></div>
            <div className="ip-token-row">
              {[['Brand', '#5926f0'], ['Ink', '#1b1f2a'], ['Muted', '#697184'], ['Neutral', '#eff1f6'], ['Canvas', '#f8f9fc']].map(([label, hex]) => (
                <span className="ip-token" key={hex}><i className="ip-token-dot" style={{ background: hex }} />{label}</span>
              ))}
            </div>
            <hr className="ip-rule" />
            <span className="ip-panel-subtitle">Quiet, useful elevation. Brand purple where intent matters.</span>
          </div>
          <div className="ip-panel ip-col-7 ip-activity-panel">
            <div className="ip-panel-header"><h3>Account activity</h3><Badge color="primary">Demo content</Badge></div>
            <ul className="ip-mini-activity">
              {activity.map((row) => (
                <li key={row.name} className="ip-activity-row">
                  <span className="ip-avatar" aria-hidden="true">{row.initials}</span>
                  <span className="ip-activity-copy">
                    <span className="ip-activity-name">{row.name}</span>
                    <span className="ip-activity-time">{row.type}</span>
                  </span>
                  <span className="ip-activity-amount">{row.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <footer className="ip-lab-footer"><span>InstaPay Design System · v2.1</span><span>Built on Reactstrap. Grounded in Figma.</span></footer>
    </main>
  );
}
