#### Basic Number Input

 ```jsx
initialState = { value: 2 };
 <NumberInput
  value={state.value}
  onChange={(value) => {setState({value})}}
/>
```

#### Invalid Number Input

```jsx
initialState = { value: -100 };
 <NumberInput
  isInvalid
  value={state.value}
  onChange={(value) => {setState({value})}}
/>
```

#### Disabled Number Input

```jsx
initialState = { value: 12.3 };
 <NumberInput
  isDisabled
  value={state.value}
  onChange={(value) => {setState({value})}}
/>
```

#### Number Input with Minimum, Maximum and Step

```jsx
initialState = { value: 2.5 };
 <NumberInput
  value={state.value}
  min={0}
  max={5}
  step={0.5}
  onChange={(value) => {setState({value})}}
/>
```

 #### Number Input with placeholder

```jsx
initialState = { value: '' };
 <NumberInput
  value={state.value}
  placeholder='Input some number here...'
  onChange={(value) => {setState({value})}}
/>
```

 #### Number Input with handleBlur

```jsx
initialState = { value: 0 };
 <NumberInput
  value={state.value}
  handleBlur={() => {setState({value: state.value + 1}); alert('blur value')}} 
  onChange={(value) => {setState({value})}}
/>
```

#### Number Input with Icon

```jsx
import { FontAwesomeIcon, IntelliIcon } from '@Domain/Icons';
 initialState = { value1: 123, value2: 404  };
 <div>
  FontAwesomeIcon
  <NumberInput
    value={state.value1}
    icon={<FontAwesomeIcon type='solid' icon='cube' />}
    onChange={(value) => {setState({value1: value})}}
  />
  IntelliIcon
  <NumberInput
    value={state.value2}
    icon={<IntelliIcon type='solid' icon='search' />}
    onChange={(value) => {setState({value2: value})}}
  />
</div>
```

#### Number Input with Disable Prefix text

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

 initialState = { value: '' };
 
 <NumberInput
  value={state.textValue}
  icon={<FontAwesomeIcon type='solid' icon='cube' />}
  disabledPrefix='+614' 
  placeholder='Input your phone number...'
  onChange={(value) => {setState({value: value})}}
/>
```

#### Number Input with highlightOnFocus

```jsx
initialState = { value: 100000 };

 <NumberInput
  value={state.value}
  highlightOnFocus
  onChange={(value) => {setState({value})}}
/>
```

#### Number Input with custom width

```jsx
initialState = { textValue: '500' };

<NumberInput
  value={state.textValue}
  width='500'
  onChange={(value) => {setState({textValue: value})}}
/>
```
