import React from 'react';
import { render, screen } from '@testing-library/react';
import { InstaPayTextField } from '..';

const personIcon = (
  <svg viewBox="0 0 24 24" role="img">
    <circle cx="12" cy="8" r="4" />
  </svg>
);

describe('InstaPayTextField (DS 2.1)', () => {
  it('associates the persistent label with the native control', () => {
    render(<InstaPayTextField id="recipient" label="Recipient" hint="Check the details" />);
    const input = screen.getByRole('textbox', { name: 'Recipient' });
    expect(input.id).toBe('recipient');
    expect(input.getAttribute('aria-describedby')).toBe('recipient-message');
    expect(screen.getByText('Check the details').id).toBe('');
  });

  it('uses the icon-present class and preserves icon-free optical padding', () => {
    const { rerender, container } = render(
      <InstaPayTextField id="user" label="Username" startIcon={personIcon} />,
    );
    expect(container.querySelector('.ip-field__control').className).toContain('ip-field__control--leading');
    expect(container.querySelector('.ip-field__leading').getAttribute('aria-hidden')).toBe('true');
    rerender(<InstaPayTextField id="user" label="Username" />);
    expect(container.querySelector('.ip-field__control').className).not.toContain('ip-field__control--leading');
    expect(container.querySelector('.ip-field__leading')).toBe(null);
  });

  it('uses native disabled behavior', () => {
    render(<InstaPayTextField id="locked" label="Locked" disabled defaultValue="Unavailable" />);
    const input = screen.getByRole('textbox', { name: 'Locked' });
    expect(input.disabled).toBe(true);
  });

  it('keeps invalid error text accessible', () => {
    render(<InstaPayTextField id="routing" label="Routing" invalid error="Invalid account number" />);
    const input = screen.getByRole('textbox', { name: 'Routing' });
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toBe('routing-message');
    expect(screen.getByRole('alert').textContent).toContain('Invalid account number');
  });

  it('uses native textarea for long text, with the multiline state', () => {
    const { container } = render(
      <InstaPayTextField id="note" label="Notes" type="textarea" placeholder="Add a note" />,
    );
    expect(screen.getByRole('textbox', { name: 'Notes' }).tagName).toBe('TEXTAREA');
    expect(container.querySelector('.ip-field__control').className).toContain('ip-field__control--multiline');
  });

  it('supports an accessible country-code selector prefix', () => {
    const { container } = render(
      <InstaPayTextField
        id="phone"
        label="Phone number"
        type="tel"
        prefix={<select aria-label="Country code"><option value="+44">+44</option></select>}
      />,
    );
    expect(screen.getByRole('combobox', { name: 'Country code' })).not.toBe(null);
    expect(container.querySelector('.ip-field__control').className).toContain('ip-field__control--prefix');
    expect(screen.getByRole('textbox', { name: 'Phone number' })).not.toBe(null);
  });

  it('disables country selector and trailing actions along with the field', () => {
    render(
      <InstaPayTextField
        id="disabled-phone"
        label="Phone"
        type="tel"
        disabled
        prefix={<select aria-label="Country calling code"><option value="+44">+44</option></select>}
        endAction={<button type="button" aria-label="Phone options">Options</button>}
      />,
    );
    expect(screen.getByRole('combobox', { name: 'Country calling code' }).closest('fieldset').disabled).toBe(true);
    expect(screen.getByRole('button', { name: 'Phone options' }).closest('fieldset').disabled).toBe(true);
    expect(screen.getByRole('textbox', { name: 'Phone' }).disabled).toBe(true);
  });

  it('supports the icon-free and external-label-free Figma example accessibly', () => {
    const { container } = render(
      <InstaPayTextField id="no-label" aria-label="Your username" placeholder="Placeholder" />,
    );
    expect(screen.getByRole('textbox', { name: 'Your username' })).not.toBe(null);
    expect(container.querySelector('.ip-field__control--leading')).toBe(null);
    expect(container.querySelector('.ip-field__label')).toBe(null);
  });

  it('preserves existing aria description plus generated message ID', () => {
    render(<InstaPayTextField id="email" label="Email" hint="Example" aria-describedby="external-description" />);
    expect(screen.getByRole('textbox', { name: 'Email' }).getAttribute('aria-describedby')).toBe('external-description email-message');
  });

  it('keeps sizing and input props isolated', () => {
    const { container } = render(
      <InstaPayTextField id="passport" size="medium" label="Passport" autoComplete="off" />,
    );
    expect(container.querySelector('.ip-field--medium')).not.toBe(null);
    expect(screen.getByRole('textbox', { name: 'Passport' }).getAttribute('autocomplete')).toBe('off');
  });
});
