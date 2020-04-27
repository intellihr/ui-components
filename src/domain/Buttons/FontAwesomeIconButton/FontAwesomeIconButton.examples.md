#### FontAwesome Icon Button

```jsx
initialState = { isIconChecked: false, isRedIconChecked: true};

<div>
  <FontAwesomeIconButton
    icon='check'
    type='regular'
    onClick={() => setState({ isIconChecked: !state.isIconChecked })}
    isSelected={state.isIconChecked}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    icon='times'
    type='regular'
    onClick={() => setState({ isRedIconChecked: !state.isRedIconChecked })}
    isSelected={state.isRedIconChecked}
    variant='red'
    tooltipText='this is a tooltip'
  />
</div>
```

#### FontAwesome Icon Button with different size

```jsx
initialState = { isIconChecked: false, isLargeIconChecked: false, isRedIconChecked: false};

<div>
  <FontAwesomeIconButton
    icon='check'
    type='regular'
    onClick={() => setState({ isIconChecked: !state.isIconChecked })}
    isSelected={state.isIconChecked}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    size='large'
    icon='file-download'
    type='solid'
    onClick={() => setState({ isLargeIconChecked: !state.isLargeIconChecked })}
    isSelected={state.isLargeIconChecked}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    size='large'
    icon='times'
    type='regular'
    onClick={() => setState({ isRedIconChecked: !state.isRedIconChecked })}
    isSelected={state.isRedIconChecked}
    variant='red'
    tooltipText='this is a tooltip'
  />
</div>
```
