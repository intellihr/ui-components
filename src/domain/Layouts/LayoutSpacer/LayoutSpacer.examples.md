#### Content Spacer

The content spacer is used to add a margin to the bottom of content items to space them out using standardised spacing.

The null content and the last content item will always have no spacing (even if a spacing size is defined); this is to accomodate for situations where the last item may not be rendered (eg. because the user doesn't have permission to see it).

Note: This is intended for spacing out high level components on a page

```jsx
const { Variables } = require('@Common');

<LayoutSpacer
  contentItems={[
    {
      content: <div style={{backgroundColor: Variables.Color.n200, height: '100px'}}>No bottom margin</div>
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n250, height: '100px'}}>Small - 24px bottom margin</div>,
      spacingSize: 'small'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n300, height: '100px'}}>Medium - 32px bottom margin</div>,
      spacingSize: 'medium'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n400, height: '100px'}}>Large - 40px bottom margin</div>,
      spacingSize: 'large'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n500, height: '100px'}}>XLarge - 56px bottom margin</div>,
      spacingSize: 'xlarge'
    },
    {
      content: <div style={{backgroundColor: Variables.Color.n600, height: '100px'}}>Last item always has no bottom margin</div>,
      spacingSize: 'large'
    }
  ]}
/>
```
