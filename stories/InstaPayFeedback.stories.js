import React, { useState } from 'react';
import { Alert, Badge } from '../src';
import InstaPayButton from '../src/InstaPayButton';

export default {
  title: 'InstaPay DS 2.1/Feedback',
  parameters: { layout: 'fullscreen' },
};

export function AlertsAndLabels() {
  const [dismissed, setDismissed] = useState(false);
  return (
    <main className="ip-lab">
      <header className="ip-lab-topline"><div className="ip-lab-brand"><span className="ip-lab-mark">i</span>InstaPay <span className="ip-lab-slash">/</span><span className="ip-lab-subbrand">Feedback</span></div><span className="ip-lab-status">DS 2.1 preview</span></header>
      <div className="ip-section-top"><div><span className="ip-eyebrow">System feedback</span><h2>Reassurance, not noise.</h2><p>Quiet, readable alerts and semantic labels.</p></div></div>
      <div className="ip-grid">
        <div className="ip-panel ip-col-7">
          <div className="ip-panel-header"><h3>Alerts</h3><span className="ip-panel-subtitle">Figma: 6px radius</span></div>
          <Alert color="primary"><strong>Everything is on track.</strong><div>We've received your request and will keep you updated.</div></Alert>
          <Alert color="secondary" className="ip-notice"><strong>Before you continue</strong><div>Double-check your recipient information.</div></Alert>
          <hr className="ip-rule" />
          {!dismissed ? <Alert color="primary" toggle={() => setDismissed(true)}>This notification can be dismissed.</Alert> : <InstaPayButton variant="tertiary" onClick={() => setDismissed(false)}>Show notification again</InstaPayButton>}
        </div>
        <div className="ip-panel ip-col-5">
          <div className="ip-panel-header"><h3>Labels & status</h3><span className="ip-panel-subtitle">Semantic hierarchy</span></div>
          <div className="ip-variants"><Badge color="primary">Brand</Badge><Badge color="secondary">Pending</Badge><Badge color="success">Completed</Badge><Badge color="warning">Review</Badge></div>
          <hr className="ip-rule" />
          <p style={{ fontSize: 12, color: '#697184', lineHeight: 1.7 }}>Keep the message visible. Reserve prominent color for important decisions or genuine state changes.</p>
        </div>
      </div>
      <p className="ip-workflow-note" style={{ marginTop: 25 }}>Alert palettes reference the Figma Default and Brand alert variants. Additional semantic colors remain Bootstrap reference styling until reviewed.</p>
    </main>
  );
}
