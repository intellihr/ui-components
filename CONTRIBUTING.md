# Contributing to UI-Components

![Big Hug](https://imgur.com/WV8Hlbe.gif)

:+1: :tada: First of all, thanks for taking the time to contribute! :tada: :+1:

This file contains a set of guidelines for contributing to UI-Components. Guidelines can be updated from time to time so don't forget to come back and check this file again.

## Table of Contents

[Code Standard](#code-standard)
  * [Folder Structure](#folder-structure)
      * [Structure Overview](#structure-overview)
      * [Structure Explained](#structure-explained)
  * [Styleguide Structure](#styleguide-structure)
  * [Child Component](#child-component)
  * [Request Change of Code Standard](#request-change-of-code-standard)

## Code Standard

### Folder Structure

#### Structure Overview

```
/src
  /common 🡓 Children folders are always plural, PascalCase
    /index.ts
    /types
    /sass
  /domain 🡓 Children folders are always plural, PascalCase
    /index.ts
    /Pills 🡐 Always create even if there is only one component
      /index.ts
      /Pill 🡐 Always singular, PascalCase
        /index.ts
    /Timelines 🡐 Must be generic/high level
      /index.ts
      /VerticalTimeline
        /index.ts
        /VerticalTimelineEvent
          /index.ts
    /Buttons
      /index.ts
      /BaseButton
        /index.ts
      /LinkButton
        /index.ts
    /Charts
      /index.ts
      /RadarChart
        /index.ts
      /TimeBasedLineChart
        /index.ts
```

#### Structure Explained

**Common**

Common folder stores all non-component specific files such as helpers, global sass, types, etc.

It does NOT mean that you should put your file in the common
if it is being used in other components,

When your file can be put inside a component,
you should group it together with your component (e.g. `getColor `in `Color` component).

You should only create your files here when you are having difficulty to classify it by component.

Import by alias is possible

```typescript
import { Props } from '@Common/types'
```

**Domain**

Domain folder stores all components and group them by their domain such as Inputs, Buttons, etc

You should always create your component within a given domain or create one.

Each domain exports its publicly available resource using `index.ts`.

The use of `export *` is allowed in Domain level given it has a proper control in the Component level.

Import by alias is possible

```typescript
import { Button } from '@Domain/Buttons'
```

### Styleguide Structure

Your Styleguide Structure should always follow its folder structure,
however, you can choose not to if putting elsewhere makes more sense (e.g. `Defaults`).

This can help us developers to look for the source code of the component.

If you created a new domain, please also create a new section for it.

### Child Component

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
