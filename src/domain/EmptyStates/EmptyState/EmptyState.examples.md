#### EmptyState

Used in place of an element when there is no data to be shown.


### Default behaviour for EmptyState
Empty state default behaviour

```jsx
<EmptyState />
```

### EmptyState when primary and secondary message is provided
The below message will be shown if both primary and secondary message is provided.

```jsx
<EmptyState
  primaryMessage='This is the primary no data callout message'
  secondaryMessage='This is the secondary no data callout message' 
/>
```

### EmptyState message with buttonComponentProps provided
When a buttonComponentProps is provided to the EmptyState component it will be shown accordingly.

```jsx.
const { Text } = require('../../Typographies/Text');
const { Props } = require('../../../common/types/props');
const { Variables } = require('../../../common');

<EmptyState
  buttonComponent=<LinkButton
                     size='small'
                     href='www.google.com.au'
                     anchorComponentProps={{
                       useReactRouter: false
                     }}
                   >
                     Add Address
                   </LinkButton>

>
  
</EmptyState>
```
