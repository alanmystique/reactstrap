# InstaPay Design System 2.1 × Reactstrap

An **opt-in** design layer built directly into the InstaPay Reactstrap fork. Existing Reactstrap components remain unchanged.

- **Source:** [InstaPay Figma Buttons](https://www.figma.com/design/1z3vwnijVhrhUoiKqHvdys/InstaPay-DS-2-0?node-id=132-1835)
- **Branch:** `instapay/ds-2.1`
- **Base:** Reactstrap 9.2.3 (Bootstrap 5)
- **Status:** Button implementation added; developer app integration and visual/browser tests pending.

## Live preview

The [InstaPay DS 2.1 Preview workflow](https://github.com/alanmystique/reactstrap/actions/workflows/instapay-preview.yml) sends an update request whenever this branch changes. The [Pages publisher](https://github.com/alanmystique/reactstrap/actions/workflows/instapay-pages.yml) runs from `master`, checks out this development branch, builds Storybook and deploys it to **https://alanmystique.github.io/reactstrap/**. This arrangement respects the default-branch protection of GitHub Pages while keeping unfinished DS code outside `master`. This is a preview of the fork, not a published npm release.

## Use

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap/instapay/ds-2.1.css'; // for a built/packaged fork; CSS must load last
import { InstaPayButton } from 'reactstrap';

// The existing Button import continues to work unchanged.
<InstaPayButton variant="primary" size="medium">Continue</InstaPayButton>
<InstaPayButton variant="secondary" size="small">Cancel</InstaPayButton>
<InstaPayButton variant="tertiary" size="large">Learn more</InstaPayButton>
<InstaPayButton
  variant="primary"
  size="medium"
  iconOnly
  aria-label="Add payment"
  startIcon={<YourPhosphorPlusIcon />}
/>
```

When consuming **this repository from source** rather than a published package, use the CSS file's actual relative path. The `reactstrap/instapay/ds-2.1.css` import assumes a package built from this fork with `instapay` included in `package.json`'s `files` list.

## Decisions captured from Figma

| Size | Height | Radius | Horizontal padding | Icon | Gap |
| --- | ---: | ---: | ---: | ---: | ---: |
| large | 44px | 10px | 18px | 20px | 7px |
| medium | 36px | 8px | 14px | 18px | 7px |
| small | 32px | 8px | 12px | 16px | 6px |
| xsmall | 28px | 8px | 10px | 14px | 6px |

- Primary: brand purple with 12% purple elevation, 16% on hover.
- Secondary: neutral fill with restrained neutral elevation.
- Tertiary: transparent and flat by default; neutral hover fill.
- Disabled: no elevation. Focus: distinct visible keyboard focus indicator.
- Typography: Inter Medium, -3% tracking.
- Icons: use existing Phosphor Outline-Regular assets from the application. This fork does not bundle an icon library.

## DS 2.1 typography

Our 62 Figma text styles have been optically corrected for size-specific tracking and pixel leading. The canonical token mapping is `instapay/typography-spec.json`, with the matching opt-in `instapay/typography.css` implementation. See [TYPOGRAPHY.md](./TYPOGRAPHY.md) for sizes, weights, line heights, usage and mappings. The live Storybook has a separate interactive **Typography** page.

## Storybook design-system preview

The live site uses `instapay/preview.css` and the branded Storybook manager to present **InstaPay first**. The preview includes interactive stories for the DS foundations, Buttons, Forms, Navigation and Feedback. The original Reactstrap stories remain under Components and Reactstrap Reference.

**Production scope:** `InstaPayButton`, `instapay/ds-2.1.css` and `instapay/typography.css` are the opt-in component implementation. `instapay/preview.css` is **Storybook-only**: it skins Bootstrap-based reference components so the rest of the DS can be visually explored without silently changing the Reactstrap API or declaring unfinished Figma families complete.

## Important integration notes

- `InstaPayButton` is opt-in; the original `Button` API is not changed.
- Its `size` prop uses Figma values (`large`, `medium`, `small`, `xsmall`), **not** Bootstrap's `lg`/`sm`.
- `variant` is a DS intent, not Reactstrap's Bootstrap `color` prop.
- `iconOnly` buttons **must** receive a descriptive `aria-label`.
- Heights below 44px are intended for dense desktop layouts. Provide at least a 44px interactive hit area on touch layouts.
- Review contrast and hover/focus appearance against the actual deployed Bootstrap version.
- The app's installed Reactstrap and Bootstrap versions have not yet been confirmed. Do not replace its dependency without compatibility testing.
- No release is published. Do not assume a production package is ready.

See [COMPONENT-MAP.md](./COMPONENT-MAP.md) for the rest of the library mapping.
