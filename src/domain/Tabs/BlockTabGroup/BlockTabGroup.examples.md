#### List of tabs matching the width of the widest tab

```jsx

initialState = {
  openTab: 0,
  tabs : [
    { title: 'One'},
    { title: 'One Two'},
    { title: 'One Two Three'},
  ]
};

<BlockTabGroup
  onTabChange={(tab, index) => {
    setState({ openTab: index })
  }}
  currentTab={state.openTab}
  tabs={state.tabs}
  tabSize='match-largest-tab'
/>
```

#### List of tabs with icons

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = {
  openTab: 0,
  tabs : [
    { icon: <FontAwesomeIcon icon='grip-vertical' type='solid' />},
    { icon: <FontAwesomeIcon icon='bars' type='solid' />}
  ]
};

<BlockTabGroup
  onTabChange={(tab, index) => {
    setState({ openTab: index })
  }}
  currentTab={state.openTab}
  tabs={state.tabs}
  tabSize='match-largest-tab'
/>
```

#### List of tabs with icons and titles

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = {
  openTab: 0,
  tabs : [
    { icon: <FontAwesomeIcon icon='grip-vertical' type='solid' />, title: 'Grid' },
    { icon: <FontAwesomeIcon icon='bars' type='solid' />, title: 'List'}
  ]
};

<BlockTabGroup
  onTabChange={(tab, index) => {
    setState({ openTab: index })
  }}
  currentTab={state.openTab}
  tabs={state.tabs}
  tabSize='match-largest-tab'
/>
```

#### List of small tabs

```jsx

initialState = {
  openTab: 0
};

<BlockTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabSize='small'
  tabs={[
      { title: 'Tab 1' },
      { title: 'Tab 2' }
    ]}
/>
```

#### List of standard tabs

```jsx

initialState = {
  openTab: 0
};

<BlockTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabs={[
      { title: 'Tab 1' },
      { title: 'Tab 2' },
      { title: 'Tab 3' },
      { title: 'Tab 4' },
      { title: 'Tab 5' },
      { title: 'Tab 6' },
    ]}
/>
```

#### List of large tabs

```jsx

initialState = {
  openTab: 0
};

<BlockTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabSize='large'
  tabs={[
      { title: 'Tab 1' },
      { title: 'Tab 2' }
    ]}
/>
```
