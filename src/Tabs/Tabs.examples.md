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
      leftComponent: <FontAwesomeIcon type='hand-o-right' />,
      rightComponent: <FontAwesomeIcon type='hand-o-left' />,
      content: <h2>BOO</h2>
    }
  ]}
/>
```

#### Open to a specific tab

```jsx
const { FontAwesomeIcon } = require('../Icon');

<Tabs
  tabs={[
    {
      title: 'Tab 1',
      content: 'Some cool content'
    },
    {
      title: 'Default to this tab',
      content: 'Some more cool content',
      anchorId: 'default'
    },
    {
      title: 'Tab 3',
      content: 'Uncool content'
    }
  ]}
  startTab={1}
/>
```
