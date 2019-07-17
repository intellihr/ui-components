#### Basic Input

```jsx
initialState = { value: false, value2: false };

<div>
  <CheckboxInput
    name='example-checkbox'
    label='This is a checkbox input'
    value={state.value}
    handleChange={() => setState({value: !state.value})}
  />
  <CheckboxInput
    isDisabled
    name='example-disabled-checkbox'
    label='This is a disabled checkbox input'
    value={state.value2}
    handleChange={() => setState({value2: !state.value2})}
  />
</div>
```

#### Input Button

```jsx
initialState = { button: false, button2: false };

<div>
  <CheckboxInput
    isButton
    name='button-checkbox'
    label='This is a checkbox input button'
    value={state.button}
    handleChange={() => setState({button: !state.button})}
  />
  <CheckboxInput
    isButton
    isDisabled
    name='button-disabled-checkbox'
    label='This is a disabled checkbox input button'
    value={state.button2}
    handleChange={() => setState({button2: !state.button2})}
  />
</div>
```

#### Input with JSX

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = { star: false };

<CheckboxInput
  name='star-checkbox'
  label={<div><FontAwesomeIcon type='solid' icon='star' /> I am a star</div>}
  value={state.star}
  handleChange={() => setState({star: !state.star})}
/>
```
