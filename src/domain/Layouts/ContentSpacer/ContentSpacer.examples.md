#### Content Spacer

The content spacer is used to add a margin to the bottom of content items to space them out using standardised spacing.

```jsx
const { Variables } = require('@Common');

<ContentSpacer
  contentItems={[
    {
      content: <div style={{backgroundColor: Variables.Color.n300, height: '200px'}}/>,
      size: 'small'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n500, height: '200px'}}/>,
      size: 'medium'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n600, height: '200px'}}/>,
      size: 'large'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n700, height: '200px'}}/>
    }
  ]}
/>
```
