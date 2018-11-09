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
      { title: 'Tab 2' }
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

#### Standard list of tabs

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
      { title: 'Tab 3'}
    ]}
/>
```

#### Legacy support for BlockTabGroup

```jsx

<div class='ihr-block-tab-group'>
  <ul role='tablist'>
    <li role='tab'>
       <button
         class='active medium'
         onClick={this.handleClickTab}
         aria-selected
         data-tabindex='0'
       >
          First Tab
       </button>
    </li>
    <li role='tab'>
       <button
          class='medium'
          onClick={this.handleClickTab}
          aria-selected='false'
          data-tabindex='1'
        >
          Second Tab
       </button>
    </li>
  </ul>
</div>
```
