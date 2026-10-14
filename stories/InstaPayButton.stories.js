import React from 'react';
import { InstaPayButton } from '../src';
import '../instapay/ds-2.1.css';

export default {
  title: 'InstaPay DS 2.1/Buttons',
  parameters: {
    docs: {
      description: {
        component:
          'Opt-in InstaPay styling over Reactstrap Button. Match Figma at 100% zoom: 132:1835.',
      },
    },
  },
};

const sizes = ['large', 'medium', 'small', 'xsmall'];
const variants = ['primary', 'secondary', 'tertiary'];

export function ButtonMatrix() {
  return (
    <div style={{ display: 'grid', gap: 28, padding: 32 }}>
      {variants.map((variant) => (
        <section key={variant}>
          <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 16 }}>
            {variant}
          </h3>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <InstaPayButton key={size} variant={variant} size={size}>
                Continue
              </InstaPayButton>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export function States() {
  return (
    <div style={{ display: 'grid', gap: 24, padding: 32 }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <InstaPayButton variant={variant}>Default</InstaPayButton>
          <InstaPayButton variant={variant} disabled>Disabled</InstaPayButton>
        </div>
      ))}
      <p style={{ fontSize: 12 }}>
        Hover and keyboard Tab focus to inspect elevation and focus ring.
      </p>
    </div>
  );
}

export function IconOnly() {
  const plus = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
  return (
    <div style={{ display: 'grid', gap: 24, padding: 32 }}>
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {sizes.map((size) => (
            <InstaPayButton
              key={size}
              variant={variant}
              size={size}
              iconOnly
              aria-label="Add payment"
              startIcon={plus}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
