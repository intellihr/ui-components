#### Basic Checkbox Input

```jsx
initialState = { value: false, value2: false };

<div>
  <CheckboxInput
    name='example-checkbox'
    label='This is a checkbox input'
    value={state.value}
    onChange={(currentValue) => setState({value: !currentValue})}
  />
  <CheckboxInput
    isDisabled
    name='example-disabled-checkbox'
    label='This is a disabled checkbox input'
    value={state.value2}
    onChange={(currentValue) => setState({value2: !currentValue})}
  />
</div>
```

#### Checkbox Input Button

```jsx
initialState = { button: false, button2: false };

<div>
  <CheckboxInput
    isButton
    name='button-checkbox'
    label='This is a checkbox input button'
    value={state.button}
    onChange={(currentValue) => setState({button: !currentValue})}
  />
  <CheckboxInput
    isButton
    isDisabled
    name='button-disabled-checkbox'
    label='This is a disabled checkbox input button'
    value={state.button2}
    onChange={(currentValue) => setState({button2: !currentValue})}
  />
</div>
```

#### Checkbox Input with JSX

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = { star: false };

<CheckboxInput
  name='star-checkbox'
  label={<div><FontAwesomeIcon type='star' /> I am a star</div>}
  value={state.star}
  onChange={(currentValue) => setState({star: !currentValue})}
/>
```

#### Checkbox Input with HandleBlur

```jsx
initialState = { blur: false };

<CheckboxInput
  name='blur-checkbox'
  label='This is a checkbox input with handle blur'
  value={state.blur}
  onChange={(currentValue) => setState({blur: !currentValue})}
  handleBlur={() => {setState({blur: false}); alert('blur value')}} 
/>
```
