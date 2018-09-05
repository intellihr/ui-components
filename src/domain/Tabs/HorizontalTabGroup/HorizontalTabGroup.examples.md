#### Standard list of tabs

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

class HorizontalTabExample extends React.PureComponent {
  constructor () {
    this.state = {
      openTab: 0
    }
  }

  render () {
    const { isOpen } = this.state
    const { tabs } = this.props

    return (
      <HorizontalTabGroup
        onTabChange={(tab, index) => this.setState({ openTab: index })}
        currentTab={this.state.openTab}
        tabs={tabs}
      />
    )
  }
}

<HorizontalTabExample
  tabs={[
    {
      title: 'Tab 1'
    },
    {
      title: 'Tab 2'
    },
    {
      title: 'Tab 3'
    },
    {
      title: 'Tab 4'
    },
    {
      title: 'Tab 5',
      rightComponent: <FontAwesomeIcon type='check' />
    }
  ]}
/>
```

#### Many Tabs

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

class HorizontalTabExample extends React.PureComponent {
  constructor () {
    this.state = {
      openTab: 0
    }
  }

  render () {
    const { isOpen } = this.state
    const { tabs } = this.props

    return (
      <HorizontalTabGroup
        onTabChange={(tab, index) => this.setState({ openTab: index })}
        currentTab={this.state.openTab}
        tabs={tabs}
      />
    )
  }
}

<HorizontalTabExample
  tabs={[
    { title: 'Tab 1' },
    { title: 'Long Tab Title 2' },
    { title: 'Tab 3'},
    { title: 'Long Tab Title 4' },
    { title: 'Tab 5'},
    { title: 'Long Tab Title 6' },
    { title: 'Tab 7'},
    { title: 'Long Tab Title 8' },
    { title: 'Tab 9'},
    { title: 'Long Tab Title 10' },
    { title: 'Tab 11'}
  ]}
/>
```
