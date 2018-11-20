### Version Control

Version Control is based on the version label of the release PR.
intelliBot will automatically attach the corresponding label.

Available Versions:

* `major`: Changes with backward incompatibility
* `minor`: Extra functionality with backward compatible changes
* `patch`: Bug fixes or improvements with backward compatible changes

### Folder Structure

#### Structure Overview

```
/docs - Any miscellaneous pages for the styleguide
/src
  /common - Do not add new folders here
    /index.ts
    /sass
    /types
  /domain - Children folders are always plural, PascalCase
    /index.ts
    /Buttons
      /index.ts
      /BaseButton
        /index.ts
      /LinkButton
        /index.ts
    /Pills - Always create even if there is only one component
      /index.ts
      /Pill
        /index.ts
    /Timelines - Must be generic/high level
      /index.ts
      /VerticalTimeline
        /index.ts
        /VerticalTimelineEvent
          /index.ts
```

#### Structure Explained

**Common**
The `common` folder stores all non-component specific files such as helpers, global design system
variables, types, etc.

Just because a component is used by other components doesn't mean they should be in `common`.
Instead, save `common` for things like generic helper functions and sass which cannot be
classified as a component.
You should only create your files here when you are having difficulty classifing it by component.

If your file is related to a single component, you should instead group it together with your component
(e.g. `styles.ts ` files, or subcomponents like `MenuItem ` in the `Menu` component).

***Common Types***

Two type objects are provided from common. `Props` contains enums for standard prop types (e.g.
`Size` or `PositionXY`). `Variables` contains enums for the design system variables, like `Color`
and `ZIndex`.

```typescript
import { Props, Variables } from '../../common'
```

**Domain**

Domain folder stores all components and group them by their domains such as `Input`, `Button`, etc

Components must always have a domain. Either place your component into an existing domain or create a new one.

Each domain exports its publicly available resources using `index.ts`. The only exception is the `Internals`
domain, which is for components only used within `ui-components` and shouldn't be available to consumers.

```typescript
import { Button } from '../../domain/Buttons'
```

Exports in `src/domain/index.ts` are necessary for library consumers.
However when used internally, you should always specify the domain.

Good:

```typescript
import { Button } from '../../domain/Button'
```

Bad:

```typescript
import { Button } from '../../domain'
```

**Path Mapping**

Path Mapping is allowed only in `.examples.md` or `.test.tsx` files.

```typescript
import { XXX } from '@Domain/XXX'
import { YYY } from '@Common/YYY'
```

#### Styled Components vs Sass Modules

We have two kinds of component implementation within `ui-components`. Some components use styled-components
as a CSS-in-JS solution, while others are using external `.scss` files loaded using sass-loader. Using
styled-components is *highly encouraged*, but there are several reasons to prefer to use `.scss`:

1.    If your component also provides legacy support for non-React files. As an example, `Button` exports some
      legacy classes to style older pages which are not using javascript. If your component is likely to need
      to be used on old `.blade.php` pages, then you can export both a js-specific class and a global classname
      as follows:

      ```scss
      %my-component {
        // Your properties here
        color: red;
      }

      :local(.my-component) {
        @extend %%my-component;
      }

      .global-my-component-class {
        @extend %%my-component;
      }
      ```

2.    If your component relies on a third-party library which uses its own css. You should never mix css/scss
      and styled components in the same component. Ideally, look at the css for the library and see if you can
      recreate it yourself, but don't try to override properties using styled-components, and use `.scss` if
      there are no other options.

Aside: **NEVER** use class names from foundation or legacy sass to style your component. All styles for a component
should be self-contained.

Similarly, **NEVER** use one component to restyle another component. For example, if `Button` doesn't have the right
color for your needs, add a new kind of `Button` instead of using specific css to override its style.

#### Styleguide Structure

Your Styleguide Structure should always follow its folder structure,
however, you can choose not to if putting elsewhere makes more sense (e.g. `Defaults`).

This can help us developers to look for the source code of the component.

If you created a new domain, please also create a new section for it.

#### Child Components

A Child Component means a component which can only be used under
a specific component (e.g. `VerticalTimelineEvent` under `VerticalTimeline`)

You should export the child component using public static property
of the parent class.

```typescript
import { VerticalTimelineEvent } from '../VerticalTimelineEvent'

class VerticalTimeline extends React.PureComponent<VerticalTimelineProps> {
  public static Event = VerticalTimelineEvent
}

// Usage
const Example = (
  <VerticalTimeline>
    <VerticalTimeline.Event /> // Can only be used within VerticalTimeline
  </VerticalTimeline>
)
```

#### Request Change of Code Standard

You should create a PR/MR against this file
and explain the reason behind it in the description.

When majority of the team members are agreed,
your PR/MR will be merged and become our new standard.
