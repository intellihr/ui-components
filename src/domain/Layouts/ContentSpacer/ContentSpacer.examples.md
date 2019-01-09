#### Content Spacer

The content spacer is used to add a margin to the bottom of content items to space them out using standardised spacing.

The last item will always have no spacing (even if a spacing size is defined); this is to accomodate for situations where the last item may not be rendered (eg. because the user doesn't have permission to see it).

```jsx
const { Variables } = require('@Common');

<ContentSpacer
  contentItems={[
    {
      content: <div style={{backgroundColor: Variables.Color.n300, height: '200px'}}/>
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n400, height: '200px'}}/>,
      spacingSize: 'small'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n500, height: '200px'}}/>,
      spacingSize: 'medium'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n600, height: '200px'}}/>,
      spacingSize: 'large'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n700, height: '200px'}}/>,
      spacingSize: 'large'
    }
  ]}
/>
```
