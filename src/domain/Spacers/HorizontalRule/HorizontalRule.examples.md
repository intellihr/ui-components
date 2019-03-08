`HorizontalRule` is a standardized `<hr />` component with options for left
and right padding.

```jsx
import { Variables } from '@Common';
import { Text } from '@Domain/Typographies';

<>
  <Text>
    Here is a standard HorizontalRule component with no props:
  </Text>
  <HorizontalRule />
  <Text>
    HorizontalRule can customise the top and bottom sizes to different needed spacings:
  </Text>
  <HorizontalRule topBottomSpacing={Variables.Layout.lMedium} />
  <Text>
    These sizes can be customised individually, or removed using 'none':
  </Text>
  <HorizontalRule topBottomSpacing={{top: Variables.Layout.lSmall, bottom: 'none'}} />
  <Text>
    Left/right spacing can also be customised on an overall basis:
  </Text>
  <HorizontalRule leftRightSpacing={Variables.Layout.lSmall}  />
  <Text>
    Or individually:
  </Text>
  <HorizontalRule leftRightSpacing={{ left: Variables.Layout.lMedium, right: 'none'}}  />
  <Text>
    Pretty neat, huh?
  </Text>
</>
```
