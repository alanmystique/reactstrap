import '../instapay/ds-2.1.css';
import '../instapay/typography.css';
import '../instapay/inputs.css';
import '../instapay/preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    matchers: { date: /Date$/ },
  },
  options: {
    storySort: {
      order: [
        'InstaPay DS 2.1',
        ['Overview', 'Foundations', 'Typography', 'Buttons', 'Inputs', 'Input Calibration', 'Form Controls', 'Navigation', 'Feedback'],
        'Components',
        'Reactstrap Reference',
        '*',
      ],
    },
  },
  viewMode: 'story',
};
