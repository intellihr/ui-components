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

#### Margin Component

There is also a standard margin component which can be used when trying 
to use margins on components that do not support margin props.

```jsx
import { Variables } from '@Common';

<div style={{ backgroundColor: Variables.Color.n400, overflow: 'auto', width: 'fit-content', height: 'fit-content' }}>
    <Margin
      margins={{
        top: Variables.Spacing.sXLarge,
        right: Variables.Spacing.sXLarge,
        left: Variables.Spacing.sXLarge,
        bottom: Variables.Spacing.sXLarge
      }}
    >
      <div style={{ height: 200, width: 200, backgroundColor: Variables.Color.n600 }}/>
    </Margin>
</div>
```
