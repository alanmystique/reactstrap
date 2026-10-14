import fs from 'fs';
import path from 'path';

describe('InstaPay preview spacing', () => {
  const css = fs.readFileSync(path.resolve(__dirname, '../../instapay/spacing.css'), 'utf8');
  const overview = fs.readFileSync(path.resolve(__dirname, '../../stories/InstaPayOverview.stories.js'), 'utf8');

  it('keeps avatar/text relationships explicit in the candidate component', () => {
    expect(css).toContain('--ip-activity-avatar: 36px');
    expect(css).toContain('--ip-activity-column-gap: 12px');
    expect(css).toContain('--ip-activity-copy-gap: 2px');
    expect(css).toContain('--ip-activity-row-inset: 8px');
  });

  it('uses a real text stack instead of a line break in the overview row', () => {
    expect(overview).toContain('className="ip-activity-copy"');
    expect(overview).not.toMatch(/<br\s*\/>.*ip-activity-time/);
    expect(css).toContain('grid-template-columns: var(--ip-activity-avatar) minmax(0, 1fr) auto;');
  });
});
