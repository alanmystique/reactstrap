# InstaPay DS 2.1 — typography contract

**Source of truth:** [Figma Typography page](https://www.figma.com/design/1z3vwnijVhrhUoiKqHvdys/InstaPay-DS-2-0?node-id=16-9)

Figma has **62 local text styles**. This opt-in CSS mirrors their roles, sizes, weights, tracking and line heights without changing Reactstrap's existing API.

## Usage

Load **Inter** from an approved font source or local assets. Import Bootstrap first, then the typography system:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap/instapay/typography.css';

<h1 className="ip-type ip-type--h1 ip-weight--semibold">Account activity</h1>
<p className="ip-type ip-type--body-medium ip-weight--regular">
  View the latest payments and account details.
</p>
<span className="ip-type ip-type--label-small ip-weight--medium">Recipient</span>
<span className="ip-type ip-type--capital-xsmall">New</span>
```

## Scale

| Family | Sizes (px) | Allowed weights | Tracking | Line height |
| --- | --- | --- | --- | --- |
| Display 1 / 2 / 3 | 64, 56, 48 | 500, 600 | -3% | 120% |
| Heading H1–H7 | 40, 36, 32, 28, 24, 20, 18 | 500, 600 | -3% | 120% |
| Body Large to XXSmall | 18, 16, 14, 12, 11 | 400, 500, 600, 700 | -3% | 150% |
| Label Large to XXSmall | 18, 16, 14, 12, 11 | 400, 500, 600, 700 | -3% | auto (normal) |
| Capital Small / Xsmall | 14, 12 | 500 | 0% | auto (normal) |

Use `ip-type--display-1`, `ip-type--display-2`, `ip-type--display-3`, `ip-type--h1` through `ip-type--h7`, `ip-type--body-large` through `ip-type--body-xxsmall`, `ip-type--label-large` through `ip-type--label-xxsmall`, and `ip-type--capital-small`/`ip-type--capital-xsmall`.

Weight modifiers: `ip-weight--regular`, `ip-weight--medium`, `ip-weight--semibold`, `ip-weight--bold`.

## Alignment and corrections

Four existing Figma styles were normalized in place, preserving style IDs and downstream references:
- `Heading/H3/Medium`: tracking 0 → -3%
- `Heading/H7/Semibold`: tracking 0 → -3%
- `Body/Large/Semibold`: tracking 0 → -3%
- `Body/Small/Regular`: line height AUTO → 150%

This produces consistent specifications across all 62 Figma styles. The [interactive Storybook Typography page](https://alanmystique.github.io/reactstrap/) uses the same CSS tokens.

## Implementation notes

- `instapay/typography.css` is **opt-in and suitable for integration**; it does not globally restyle Bootstrap text.
- `instapay/preview.css` is **storybook-only**; it aligns sample screens with the same typography choices.
- Heading line height is a CSS multiplier of 1.2; body line height is 1.5. Label `AUTO` maps to browser `normal`.
- The default `ip-type` weight is Medium. Set a weight modifier for body/label types where required.
- Headings with Medium/Semibold follow Figma; do not infer unsupported heading Regular/Bold variants.
- Avoid using 11px text for essential customer-facing information; follow accessibility and contrast guidelines.
