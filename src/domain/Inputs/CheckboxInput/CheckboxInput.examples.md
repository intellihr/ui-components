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
initialState = { star: false };
const { FontAwesomeIcon } = require('../../Icons');

<CheckboxInput
  name='star-checkbox'
  label={<div><FontAwesomeIcon type='star' /> I am a star</div>}
  value={state.star}
  handleChange={() => setState({star: !state.star})}
/>
```
