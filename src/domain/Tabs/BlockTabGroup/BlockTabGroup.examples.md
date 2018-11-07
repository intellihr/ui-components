#### List of two tabs

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

initialState = {
  openTab: 0
};

<BlockTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabs={[
      { title: 'Tab 1' },
      { title: 'Tab 2' }
    ]}
/>
```

#### Standard list of tabs

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

initialState = {
  openTab: 0
};

<BlockTabGroup
  onTabChange={(tab, index) => setState({ openTab: index })}
  currentTab={state.openTab}
  tabs={[
      { title: 'Tab 1' },
      { title: 'Tab 2' },
      { title: 'Tab 3'}
    ]}
/>
```

#### Tabs with anchors

Anchors can be used instead of onTabChange callbacks. This is useful for
page-level tabs, where your SPA router can get the tab state from the url
rather than storing it in the parent.

Note that this doesn't work in the styleguide as anchors are used to link
between pages.

```jsx
<BlockTabGroup
  currentTab='#tab2'
  tabs={[
    {
      title: 'Tab 1',
      anchorId: '#tab1'
    },
    {
      title: 'Tab 2',
      anchorId: '#tab2'
    }
  ]}
  anchorsUpdateUrl
/>
```
