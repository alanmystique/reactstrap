import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'InstaPay  /  Design System 2.1',
    brandUrl: 'https://github.com/alanmystique/reactstrap/tree/instapay/ds-2.1',
    colorPrimary: '#5926f0',
    colorSecondary: '#5926f0',
    appBg: '#f8f9fc',
    appContentBg: '#ffffff',
    appBorderColor: '#e3e6ee',
    appBorderRadius: 8,
    barBg: '#ffffff',
    barTextColor: '#5b6376',
    barSelectedColor: '#5926f0',
    textColor: '#1b1f2a',
    textInverseColor: '#ffffff',
    fontBase: 'Inter, system-ui, -apple-system, sans-serif',
    fontCode: 'ui-monospace, SFMono-Regular, Consolas, monospace',
    inputBg: '#ffffff',
    inputBorder: '#e1e5ee',
    inputTextColor: '#1b1f2a',
    inputBorderRadius: 6,
    booleanBg: '#e1e5ee',
    booleanSelectedBg: '#5926f0',
  }),
  sidebar: { showRoots: true },
});
