ShowForSizes is a component that can be used to only show a component between particular breakpoints.
It can also be provided as a prop to some components that will do the same behaviour. It should be more
performant than having to do this in js and is simpler than having to define it manually in css.
 
#### ShowForSizes Component

```jsx
import { Variables } from '@Common';

<>
  <ShowForSizes
    upper={Variables.Breakpoint.breakpointTablet}
  >
    Display size is mobile
  </ShowForSizes>
  <ShowForSizes
    lower={Variables.Breakpoint.breakpointTablet}
    upper={Variables.Breakpoint.breakpointDesktop}
  >
    Display size is tablet
  </ShowForSizes>
  <ShowForSizes
    lower={Variables.Breakpoint.breakpointDesktop}
  >
    Display size is desktop
  </ShowForSizes>
</>
```

#### ShowForSizes Prop
You can also use it as a prop, this icon should only be visible on desktop
```jsx
import { Variables } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';

<FontAwesomeIcon
  type='light'
  icon='star'
  size='xlarge'
  showForSizes={{lower: Variables.Breakpoint.breakpointDesktop}}
/>
```

#### Supported Components

The components that support showForSizes are:
* Icon
