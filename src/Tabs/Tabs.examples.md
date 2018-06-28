#### Standard list of tabs

```jsx
const { FontAwesomeIcon } = require('../Icon');

<Tabs
  tabs={[
    {
      title: 'Tab 1',
      content: 'Some cool content'
    },
    {
      title: 'Tab 2',
      content: 'Some more cool content'
    },
    {
      title: 'Tab 3',
      leftIconComponent: <FontAwesomeIcon type='hand-o-right' />,
      rightIconComponent: <FontAwesomeIcon type='hand-o-left' />,
      content: <h2>BOO</h2>
    }
  ]}
/>
```
