#### List of tabs fitting content

```jsx

initialState = {
  openTab: 0
};

<BlockTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabs={[
      { title: 'One' },
      { title: 'One Two' },
      { title: 'One Two Three' }
    ]}
  tabSize='fit-content'
/>
```
#### List of tabs matching the width of the widest tab

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

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
      { title: 'Tab 3' }
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
