#### No Data Callout

Used in place of an element when there is no data to be shown.


### Default message for callout
The below message will be shown if nothing is provided.

```jsx
<NoDataCallout />
```

### No data callout when primary and secondary message is provided
The below message will be shown if nothing is provided.

```jsx
<NoDataCallout
  primaryMessage='This is the primary no data callout message'
  secondaryMessage='This is the secondary no data callout message' 
/>
```

### No callout message with children provided
When a children is provided to the NoDataCallout component it will be shown accordingly.

```jsx.
const { Text } = require('../../Typographies/Text');
const { Props } = require('../../../common/types/props');
const { Variables } = require('../../../common');

<NoDataCallout>
  <Text type={Props.TypographyType.Heading} tag='h3' color={Variables.Color.n700}>
    No address added
  </Text>
  <Text color={Variables.Color.n600} tag='p'>
   Personal and postal addresses can be added here.
  </Text>
  <LinkButton
    size='small'
    href='www.google.com.au'
    anchorComponentProps={{
      useReactRouter: false
    }}
  >
    Add Address
  </LinkButton>
</NoDataCallout>
```
