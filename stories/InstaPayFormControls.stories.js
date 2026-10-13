import React, { useState } from 'react';
import { FormGroup, Label, Input } from '../src';
import InstaPayButton from '../src/InstaPayButton';
import InstaPayTextField from '../src/InstaPayTextField';

export default {
  title: 'InstaPay DS 2.1/Form Controls',
  parameters: { layout: 'fullscreen' },
};

export function InputsAndSelection() {
  const [name, setName] = useState('');
  const [method, setMethod] = useState('bank');
  const [notify, setNotify] = useState(true);
  const [remember, setRemember] = useState(false);
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline"><div className="ip-lab-brand"><span className="ip-lab-mark">i</span>InstaPay <span className="ip-lab-slash">/</span> <span className="ip-lab-subbrand">Form Controls</span></div><span className="ip-lab-status">Interactive prototype</span></header>
      <div className="ip-section-top"><div><span className="ip-eyebrow">Fields & controls</span><h2>Focus on the task.</h2><p>40px medium inputs, 48px large inputs, 6px radius and brand-purple focus state.</p></div></div>
      <div className="ip-grid">
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Text inputs</h3><span className="ip-pill">Figma dimensions</span></div>
          <div className="ip-form-grid">
            <InstaPayTextField id="ip-field-name" label="Account name" size="medium" value={name} placeholder="Enter a name" onChange={(e) => setName(e.target.value)} hint="Medium · 40px" />
            <InstaPayTextField id="ip-field-large" label="Account number" size="large" placeholder="0000 0000 0000" hint="Large · 48px" />
            <InstaPayTextField id="ip-field-filled" label="Filled state" size="medium" defaultValue="InstaPay Wallet" />
            <InstaPayTextField id="ip-field-disabled" label="Disabled state" size="medium" disabled defaultValue="Unavailable" />
          </div>
          <InstaPayTextField id="ip-field-note" label="Message" type="textarea" placeholder="Add an optional note..." />
        </section>
        <section className="ip-panel ip-col-6">
          <div className="ip-panel-header"><h3>Select & preferences</h3><span className="ip-panel-subtitle">Try changing values</span></div>
          <FormGroup>
            <Label for="ip-select-method">Payment method</Label>
            <Input id="ip-select-method" type="select" value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="bank">Bank account</option><option value="card">Debit card</option><option value="wallet">InstaPay Wallet</option>
            </Input>
            <div className="ip-form-help">Current selection: {method}</div>
          </FormGroup>
          <hr className="ip-rule" />
          <div className="ip-form-row"><div><div className="ip-activity-name">Payment notifications</div><div className="ip-form-help">Keep me updated about activity</div></div><FormGroup switch style={{ marginBottom: 0 }}><Input type="switch" role="switch" aria-label="Payment notifications" checked={notify} onChange={(e) => setNotify(e.target.checked)} /></FormGroup></div>
          <hr className="ip-rule" />
          <FormGroup check><Input id="ip-check-remember" type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /><Label check for="ip-check-remember">Remember this payment method</Label></FormGroup>
          <div className="ip-form-row" style={{ justifyContent: 'flex-start', gap: 22, marginTop: 20 }}>
            <FormGroup check><Input type="radio" name="ip-review" id="ip-radio-one" defaultChecked /><Label check for="ip-radio-one">Personal</Label></FormGroup>
            <FormGroup check><Input type="radio" name="ip-review" id="ip-radio-two" /><Label check for="ip-radio-two">Business</Label></FormGroup>
          </div>
          <hr className="ip-rule" />
          <InstaPayButton variant="primary">Save preferences</InstaPayButton>
        </section>
      </div>
      <p className="ip-workflow-note" style={{ marginTop: 25 }}>Text fields use InstaPayTextField and the updated Figma optical specification. Other selection controls remain Reactstrap preview styles until approved.</p>
    </main>
  );
}
