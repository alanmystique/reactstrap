import fs from 'fs';
import path from 'path';
import spec from '../../instapay/typography-spec.json';

describe('InstaPay optical typography', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../instapay/typography.css'), 'utf8');
  const preview = fs.readFileSync(path.resolve(__dirname, '../../instapay/preview.css'), 'utf8');
  const families = ['heading', 'body', 'label', 'capital'];

  it('maps exactly 62 Figma variants and all 22 unique roles', () => {
    expect(families.reduce((n, f) => n + spec[f].length * spec.weights[f].length, 0)).toBe(62);
    expect(families.reduce((n, f) => n + spec[f].length, 0)).toBe(22);
  });

  it('keeps every optical leading and tracking value in the production stylesheet', () => {
    families.forEach((f) => spec[f].forEach(({ slug, size, lineHeight, trackingPercent }) => {
      const name = f === 'heading' ? slug : `${f}-${slug}`;
      const em = (trackingPercent / 100).toFixed(3).replace(/^-0\.000$/, '0');
      expect(css).toContain(`.ip-type.ip-type--${name} { font-size: var(--ip-type-${size}); line-height: ${lineHeight}px; letter-spacing: ${em}em;`);
    }));
  });

  it('prevents generic preview copy from overriding .ip-type specimens', () => {
    expect(preview).not.toMatch(/\.ip-section\s+p\s*\{/);
    expect(preview).toContain('.ip-section p:not(.ip-type)');
  });

  it('keeps critical small body and label tracking legible', () => {
    ['body', 'label'].forEach(f => spec[f].filter(x => x.size <= 12).forEach(x => {
      expect(x.trackingPercent).toBeGreaterThanOrEqual(0);
    }));
  });
});
