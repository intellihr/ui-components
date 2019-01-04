#### Basic Input

```jsx
initialState = { value: false };

<CheckboxInput
  name='example-checkbox'
  label='This is a checkbox input'
  value={state.value}
  handleChange={() => setState({value: !state.value})}
/>
```

#### Input with JSX

```jsx
initialState = { value: false };
const { FontAwesomeIcon } = require('../../Icons');

<CheckboxInput
  name='example-checkbox'
  label={<div><FontAwesomeIcon type='star' /> I am a star</div>}
  value={state.value}
  handleChange={() => setState({value: !state.value})}
/>
```
