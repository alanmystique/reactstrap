import React, { useState } from 'react';
import InstaPayTextField from '../src/InstaPayTextField';
import InstaPayButton from '../src/InstaPayButton';

export default {
  title: 'InstaPay DS 2.1/Inputs',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Figma 131:2126. Uses optical 12px leading-icon / 16px icon-free padding, persistent labels and native Reactstrap inputs.',
      },
    },
  },
};

const userIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" /><path d="M4.5 20c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" />
  </svg>
);
const eyeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 12s3.6-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.6 5.5-9.5 5.5S2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3.1" />
  </svg>
);
const helperIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" />
  </svg>
);

export function OpticalTextFields() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('+44');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline">
        <div className="ip-lab-brand">
          <span className="ip-lab-mark">i</span> InstaPay
          <span className="ip-lab-slash">/</span>
          <span className="ip-lab-subbrand">Text Inputs 2.1</span>
        </div>
        <span className="ip-lab-status">Figma optical reference</span>
      </header>
      <div className="ip-section-top">
        <div>
          <span className="ip-eyebrow">Component family · 30 variants</span>
          <h2>Carefully spaced. Effortlessly clear.</h2>
          <p>Shared 10px corners. Icons sit at 12px; icon-free text starts at 16px. Every field keeps its meaning visible.</p>
        </div>
        <span className="ip-section-meta">Reactstrap Input · native functionality</span>
      </div>
      <div className="ip-grid">
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>With leading icon</h3><span className="ip-pill">12px</span></div>
          <InstaPayTextField
            id="ip-input-username"
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            startIcon={userIcon}
            endIcon={eyeIcon}
            helperIcon={helperIcon}
            hint="Use 6–12 characters, no spaces"
          />
          <hr className="ip-rule" />
          <InstaPayTextField
            id="ip-input-medium"
            size="medium"
            label="Username · medium"
            placeholder="Enter your username"
            startIcon={userIcon}
            hint="Compact 40px field"
          />
        </section>
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Without leading icon</h3><span className="ip-pill">16px</span></div>
          <InstaPayTextField
            id="ip-input-account"
            label="Account reference"
            placeholder="Enter a reference"
            endIcon={eyeIcon}
            hint="Same 48px container and typography"
          />
          <hr className="ip-rule" />
          <InstaPayTextField
            id="ip-input-no-label"
            aria-label="Username without visible label"
            placeholder="Placeholder"
            endIcon={eyeIcon}
          />
          <p className="ip-type-gallery-note" style={{ marginTop: 9 }}>Exact icon-free reference: no visible label, 16px text inset.</p>
          <hr className="ip-rule" />
          <InstaPayTextField
            id="ip-input-amount"
            size="medium"
            label="Amount"
            placeholder="0.00"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            hint="Always confirm the amount and currency"
          />
        </section>
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>States</h3><span className="ip-panel-subtitle">Default, focus, filled, disabled, error</span></div>
          <InstaPayTextField id="ip-input-filled" size="medium" label="Filled state" defaultValue="InstaPay Wallet" />
          <div style={{ height: 18 }} />
          <InstaPayTextField id="ip-input-disabled" size="medium" label="Disabled state" defaultValue="Unavailable" disabled />
          <div style={{ height: 18 }} />
          <InstaPayTextField
            id="ip-input-error"
            size="medium"
            label="Account number"
            defaultValue="12345"
            error="Please enter a valid account number"
          />
        </section>
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Password</h3><span className="ip-panel-subtitle">Accessible visibility toggle</span></div>
          <InstaPayTextField
            id="ip-input-password"
            label="Password"
            type={visible ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            hint="Use a unique password"
            endAction={
              <button type="button" aria-label={visible ? 'Hide password' : 'Show password'} onClick={() => setVisible(!visible)}>
                {eyeIcon}
              </button>
            }
          />
        </section>
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Multiline</h3><span className="ip-pill">120px</span></div>
          <InstaPayTextField
            id="ip-input-notes"
            type="textarea"
            label="Payment note"
            placeholder="Add an optional note…"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            startIcon={userIcon}
            hint="Optional context for the recipient"
          />
        </section>
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Phone number</h3><span className="ip-pill">Split field</span></div>
          <InstaPayTextField
            id="ip-input-phone"
            label="Phone number"
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            prefix={
              <select aria-label="Country calling code" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="+44">+44</option>
                <option value="+41">+41</option>
                <option value="+91">+91</option>
              </select>
            }
            hint="Double-check the country code"
          />
          <p className="ip-type-gallery-note" style={{ marginTop: 13 }}>
            The prefix remains separate from the editable phone number.
          </p>
        </section>
      </div>
      <div className="ip-section" style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <InstaPayButton variant="primary" onClick={() => setSubmitted(true)}>Try sample action</InstaPayButton>
        {submitted && <span style={{ fontSize: 12, color: '#697184' }}>Preview only — no financial data is submitted.</span>}
      </div>
      <p className="ip-workflow-note" style={{ marginTop: 28 }}>
        Persistent labels are the default for payments, identity and banking. The icon paths shown here are illustrative:
        product screens should use our existing Phosphor Outline-Regular icons.
      </p>
    </main>
  );
}
