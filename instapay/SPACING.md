# InstaPay DS 2.1 — selected optical spacing calibration (candidate v2)

The user-selected settings below are applied to the **Storybook Account Activity preview** and used as the **default values in Spacing Lab**. This is not yet a globally approved spacing scale.

| Relationship | Candidate v2 |
| --- | ---: |
| Avatar | 36px |
| Avatar → text | 12px |
| Title → subtitle | **1px** |
| Row top and bottom inset | **12px each** |
| Card interior inset | **22px** |
| Text optical Y shift | **−0.25px** |
| Title typography | 13px size / 18px line |
| Subtitle typography | 12px size / 16px line |
| Avatar radius | 10px |

## Why these choices work together

The two-line text stack measures `18 + 1 + 16 = 35px`, while the avatar is 36px. Both blocks are centered in the same grid row. The **−0.25px optical shift** nudges the text stack upward to balance the letterforms visually, but does not affect its layout footprint. Every row has symmetric `12px` top/bottom spacing, and the activity card receives an independently controlled `22px` inset.

The total row content block is `36 + 12 + 12 = 60px` high before the optional 1px dividing stroke. The title and subtitle use explicit line heights and a real flex-column gap, never a `<br />`.

The older spacing was a 34px avatar, 10px avatar/text gap, a line break instead of an exact title/subtitle gap, and 13px vertical row padding.

## Spacing primitives

The baseline spacing ladder **4 / 8 / 12 / 16 / 24 / 32px** remains a provisional foundation, with deliberate **1px optical text gaps**, a **22px card inset**, and **−0.25px optical alignment** treated as *named contextual exceptions*. Don't force every layout relationship onto a global 4px grid.

## Verification / review

- [Spacing Lab](https://alanmystique.github.io/reactstrap/?path=/story/instapay-ds-2-1-spacing-lab--spacing-calibration)
- [InstaPay Overview](https://alanmystique.github.io/reactstrap/?path=/story/instapay-ds-2-1-overview--overview)

Evaluate repeated rows, long descriptions, currency alignments and narrow viewports before promoting these values to shared tokens.

**Scope:** Storybook presentation only. The Figma component library, production Reactstrap components, and the input optical calibration are not modified by this candidate.
