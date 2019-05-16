Margins is a prop that can be provided to some components that will define the margin they
have around them. It can be used as a cleaner alternative to layoutSpacer for simple component
arrangements. 

#### Simple margins

Buttons are one of the components that support margins. As seen below when you provide the
margins prop with any combination of top, bottom, left, or right it will apply the spacing
to the component.

```jsx
import { Variables } from '@Common';
import { Button } from '@Domain/Buttons';

<>
  <Button
    margins={{
      top: Variables.Spacing.sSmall,
      bottom: Variables.Spacing.sLarge,
      left: Variables.Spacing.sSmall,
      right: Variables.Spacing.sLarge,
    }}
  >
    Spaced Button
  </Button>
  <Button
    margins={{
      top: Variables.Spacing.sSmall,
      right: Variables.Spacing.sSmall
    }}
  >
    Spaced Button
  </Button>
</>
```


#### Breakpoint margins

You can also provide breakpoints for margins so that it can have a different spacing on
mobile vs desktop.

```jsx
import { Variables } from '@Common';
import { Button } from '@Domain/Buttons';

<Button
  margins={{
    top: {
      min: Variables.Spacing.sLarge,
      tablet: 'none',
      desktop: Variables.Spacing.sSmall
    },
    bottom: Variables.Spacing.sLarge,
    left: Variables.Spacing.sSmall,
    right: Variables.Spacing.sLarge,
  }}
>
  Spaced Button
</Button>
```

#### Supported Components

The components that support breakpoints are:
* Button
* Brick
* Callout
