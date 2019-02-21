#### Vertical Radio Set

```jsx
initialState = { value: 'option 1' };

<IconPicker
  name='icon-picker'
  value={state.value}
  handleChange={(event) => setState({value: event.target.value})}
  icons={['fa-apple', 'fa-archive', 'intelli-icon-australia', 'intelli-icon-avatar']}
/>
```
