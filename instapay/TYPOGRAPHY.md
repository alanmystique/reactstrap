# InstaPay DS 2.1 optical typography

**Source:** [Figma typography page](https://www.figma.com/design/1z3vwnijVhrhUoiKqHvdys/InstaPay-DS-2-0?node-id=16-9).

All **62 text styles** use size-aware line heights and tracking while retaining original Figma style IDs, font sizes, style names and weight variants. The canonical machine-readable values are in [typography-spec.json](./typography-spec.json), implemented as opt-in CSS in [typography.css](./typography.css).

Large headlines get tighter lines, small headlines gain space, smaller body and labels lose excessive negative tracking, and all labels/capitals have explicit leading. The 14 legacy Zalando Sans annotations on the reference page were also aligned with Inter.

**Styles:** Heading (10 sizes × Medium/Semibold), Body (5 sizes × Regular/Medium/Semibold/Bold), Label (5 sizes × same four weights), Capital (2 sizes × Medium).

## Optical values

| Role | Size (px) | Leading (px) | Tracking |
| --- | ---: | ---: | ---: |
| heading / Display 1 | 64 | 72 | -3.2% |
| heading / Display 2 | 56 | 64 | -3.1% |
| heading / Display 3 | 48 | 56 | -3% |
| heading / H1 | 40 | 48 | -2.8% |
| heading / H2 | 36 | 44 | -2.7% |
| heading / H3 | 32 | 40 | -2.6% |
| heading / H4 | 28 | 36 | -2.4% |
| heading / H5 | 24 | 32 | -2.2% |
| heading / H6 | 20 | 28 | -1.8% |
| heading / H7 | 18 | 26 | -1.6% |
| body / Large | 18 | 28 | -1.8% |
| body / Medium | 16 | 24 | -1.5% |
| body / Small | 14 | 21 | -1% |
| body / XSmall | 12 | 18 | 0% |
| body / XXSmall | 11 | 17 | 0% |
| label / Large | 18 | 24 | -1.5% |
| label / Medium | 16 | 22 | -1.3% |
| label / Small | 14 | 20 | -1% |
| label / XSmall | 12 | 17 | 0% |
| label / XXSmall | 11 | 16 | 0% |
| capital / Small | 14 | 20 | +1% |
| capital / Xsmall | 12 | 18 | +1.5% |

## Use in Reactstrap

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap/instapay/typography.css';

<h1 className="ip-type ip-type--h1 ip-weight--semibold">Account activity</h1>
<p className="ip-type ip-type--body-medium ip-weight--regular">Transactions at a glance.</p>
<span className="ip-type ip-type--label-small ip-weight--medium">Recipient</span>
<span className="ip-type ip-type--capital-xsmall">New</span>
```

This is an **opt-in type system**, not a global override of Reactstrap. In Storybook, the optical comparison control previews the previous uniform -3% tracking and proportional leading without changing source styles. Always validate long-form and multilingual content separately, and avoid using tiny text for essential interactions.
