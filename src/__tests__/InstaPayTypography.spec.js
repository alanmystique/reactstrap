import fs from 'fs';
import path from 'path';

/**
 * Regression guard for Figma typography classes.
 * The Storybook preview intentionally styles ordinary paragraph copy, but
 * those selectors must not override the opt-in .ip-type--display-1 / H1 / etc.
 */
describe('InstaPay typography preview cascade', () => {
  const preview = fs.readFileSync(path.resolve(__dirname, '../../instapay/preview.css'), 'utf8');
  const typography = fs.readFileSync(path.resolve(__dirname, '../../instapay/typography.css'), 'utf8');

  it('excludes type specimens from generic section paragraph rules', () => {
    expect(preview).not.toMatch(/\.ip-section\s+p\s*\{/);
    expect(preview.match(/\.ip-section\s+p:not\(\.ip-type\)\s*\{/g)).toHaveLength(2);
  });

  it('maintains distinct Figma heading scales', () => {
    [
      ['display-1', 64],
      ['display-2', 56],
      ['display-3', 48],
      ['h1', 40],
      ['h2', 36],
      ['h3', 32],
      ['h4', 28],
      ['h5', 24],
      ['h6', 20],
      ['h7', 18],
    ].forEach(([name, pixels]) => {
      expect(typography).toContain(`--ip-type-${pixels}: ${pixels}px`);
      expect(typography).toContain(`.ip-type--${name} { font-size: var(--ip-type-${pixels}); }`);
    });
  });
});
