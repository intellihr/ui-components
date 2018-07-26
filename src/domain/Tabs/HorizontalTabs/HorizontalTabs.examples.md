#### Standard list of tabs

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

<HorizontalTabs
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
const { FontAwesomeIcon } = require('@Domain/Icons');

<HorizontalTabs
  tabs={[
    {
      title: 'Tab 1',
      content: 'Some cool content'
    },
    {
      title: 'Default to this tab',
      content: 'Some more cool content',
      anchorId: '#default'
    },
    {
      title: 'Tab 3',
      content: 'Uncool content'
    }
  ]}
  defaultTab='#default'
/>
```

#### Use anchors to update URL

**You won't be able to use this in the style guide because it will navigate you away from the page**

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

<HorizontalTabs
  tabs={[
    {
      title: 'Tab with anchor',
      content: 'Some cool content',
      anchorId: '#anchor1'
    },
    {
      title: 'Tab without anchor',
      content: 'Some more cool content'
    }
  ]}
  useAnchors
/>
```

#### Callback on tab change

```jsx
const React = require('react')
const { Props } = require('../../../')

class TabsExample extends React.PureComponent {
  callbackExample (tab) {
    if (tab.title == 'Tab 1') {
      alert('Called an alert when you opened this tab!')
    }
  }

  render () {
    return (
      <HorizontalTabs
        onTabChange={this.callbackExample}
        tabs={[
          {
            title: 'Tab 1',
            content: 'Some cool content'
          },
          {
            title: 'Tab 2',
            content: 'Some more cool content'
          }
        ]}
      />
    )
  }
}
<TabsExample />
```
