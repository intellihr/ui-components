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

#### Input Button

```jsx
initialState = { button: false };

<CheckboxInput
  isButton
  name='button-checkbox'
  label='This is a checkbox input button'
  value={state.button}
  handleChange={() => setState({button: !state.button})}
/>
```

#### Input with JSX

```jsx
initialState = { star: false };
const { FontAwesomeIcon } = require('../../Icons');

<CheckboxInput
  name='star-checkbox'
  label={<div><FontAwesomeIcon type='star' /> I am a star</div>}
  value={state.star}
  handleChange={() => setState({star: !state.star})}
/>
```
