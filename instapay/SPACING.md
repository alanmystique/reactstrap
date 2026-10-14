# InstaPay DS 2.1 — Optical spacing, first-pass candidate

The source of this first pass is the **Account Activity** row in the Storybook overview. The old row used a 34px avatar, an ad-hoc 10px gap, and inline text with a `<br />` creating unpredictable baseline spacing.

The candidate row instead uses a grid with three columns, centered avatar and title/subtitle stack, explicitly controlled two-line leading, and equal top/bottom insets.

| Relationship | Initial candidate |
| --- | ---: |
| Avatar | 36px |
| Avatar to text | 12px |
| Title-to-subtitle gap | 2px |
| Title | 13px / 18px |
| Subtitle | 12px / 16px |
| Row top and bottom | 8px each |
| Card interior inset | 24px |
| Text optical Y shift | 0px |
| Avatar corner radius | 10px |

`36px` avatar matches a `18 + 2 + 16 = 36px` text stack, so both units share their vertical center. The row has 8px of vertical whitespace above and below the taller content. A 1px divider is drawn between rows.

## Spacing primitives

Use **4 / 8 / 12 / 16 / 24 / 32** as the first semantic spacing scale. Exception values are allowed for optical correction when justified by typography, not as ad-hoc layout constants.

The live [Spacing Lab](https://alanmystique.github.io/reactstrap/?path=/story/instapay-ds-2-1-spacing-lab--spacing-calibration) exposes interactive controls for the row before this candidate is promoted to a reusable component.

## Scope and safety

- This is **not approved** as a global InstaPay spacing specification.
- It changes only the preview Account Activity row and lab.
- It does not alter Figma components, production Input CSS, or Reactstrap APIs.
- After visual approval, encode the accepted relationship-based spacing in DS tokens and validate long content and narrow layouts.
