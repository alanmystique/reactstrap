# Figma ↔ Reactstrap component mapping

Reference: [InstaPay DS 2.0 / 2.1 Figma library](https://www.figma.com/design/1z3vwnijVhrhUoiKqHvdys/InstaPay-DS-2-0)

| Figma family | Figma component set | Reactstrap foundation | DS 2.1 status |
| --- | --- | --- | --- |
| Buttons | `132:1835` | `Button` | **Implemented**: `InstaPayButton` + CSS |
| Text Input | `131:2126` | `Input`, `Label`, `FormGroup` | **Opt-in implementation:** `InstaPayTextField` / 30 Figma variants |
| Dropdown | `139:3262` | `Dropdown`, `DropdownToggle`, `DropdownMenu`, `DropdownItem` | Pending |
| Search | `140:188` | `Input`, `InputGroup` | Pending |
| Checkbox | `140:263` | `Input type="checkbox"` | Pending |
| Radio Button | `140:326` | `Input type="radio"` | Pending |
| Toggle | `140:365` | `Input type="switch"` (Bootstrap 5) | Pending |
| Input - Code | `140:416` | Multiple `Input` elements | Custom behavior pending |
| Navbar | `137:1560` | `Navbar`, `Nav`, `NavItem`, `NavLink` | Pending |
| Navbar - Menus | `140:978` | `Nav`, `Collapse` | Custom composition pending |
| Segmented Control | `140:1042` | `ButtonGroup`, `Button` | Pending |
| Segmented Control - Item | `140:1068` | `Button` | Pending |
| Breadcrumbs | `140:1089` | `Breadcrumb`, `BreadcrumbItem` | Pending |
| Tab - Option | `140:1144` | `NavLink`, `TabPane` | Pending |
| Menus | `140:1303` | `Nav`, `Collapse` | Pending |
| Tab - Label | `140:1316` | `NavLink` | Pending |
| Tab | `140:1323` | `Nav`, `TabContent`, `TabPane` | Pending |
| Alert | `142:3331` | `Alert` | Pending |
| Label | `142:3374` | `Badge` | Pending |
| Label - Trend (Deprecated) | `142:3449` | No new mapping | Deprecated |

## Implementation principles

1. Preserve Reactstrap behavior and accessibility.
2. Prefer opt-in DS wrappers to globally altering Bootstrap components.
3. Keep Figma token values and code token values synchronized.
4. Preserve existing icon library and icon semantics.
5. Review each family at 100% zoom, including hover, keyboard focus, disabled, icon-only and responsive touch targets.
6. Verify developer app dependency versions before deploying this fork.
