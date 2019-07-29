#### Basic Input

```jsx
import { CheckboxInput, NumberInput, TextInput } from '@Domain/Inputs';

initialState = { value: false };

<div>
  Text
  <TextInput />
  Number
  <NumberInput />
  Checkbox
  <CheckboxInput
    name='example-checkbox'
    label='This is a checkbox input :)'
    value={state.value}
    handleChange={() => setState({value: !state.value})}
  />
</div>
```

#### Input with Attributes

```jsx
import { NumberInput, TextInput } from '@Domain/Inputs';

<div>
  Text
  <TextInput
   maxlength={3}
  />
  Number
  <NumberInput
    min={0}
    max={5}
    step={0.5}
    placeholder={2.5}
  />
</div>
```

#### Input with Icon

```jsx
import { NumberInput, TextInput } from '@Domain/Inputs';
import { FontAwesomeIcon, IntelliIcon } from '@Domain/Icons';

<div>
  Text
  <TextInput
    icon={<FontAwesomeIcon type='solid' icon='cube' />}
  />
  Number
  <NumberInput
    icon={<IntelliIcon type='solid' icon='search' />}
  />
</div>
```

#### Input with Disable Prefix text

```jsx
import { NumberInput, TextInput } from '@Domain/Inputs';
import { FontAwesomeIcon } from '@Domain/Icons';

<div>
  Text
  <TextInput
    icon={<FontAwesomeIcon type='solid' icon='cube' />}
    disabledPrefix='Hello!' 
  />
  Number
  <NumberInput
    disabledPrefix='(123)' 
  />
</div>
```

#### Input with highlightOnFocus

```jsx
import { NumberInput, TextInput } from '@Domain/Inputs';

<div>
  Text
  <TextInput
    value='Blah blah I am text'
    highlightOnFocus
  />
  Number
  <NumberInput
    value={3}
    highlightOnFocus
  />
</div>
```

#### Input with onChange

```jsx
import { NumberInput, TextInput } from '@Domain/Inputs';

<div>
  Text
  <TextInput
    value='Blur me!'
    onChange={(value) => alert(`
      value: ${value}
    `)}
  />
  Number
  <NumberInput
    value={987654321}
    onChange={(value) => alert(`
      value: ${value}
    `)}
  />
</div>
```

#### Invalid Input

```jsx
import { TextInput } from '@Domain/Inputs';

<TextInput
  isInvalid
/>
```

#### Disabled Input

```jsx
import { TextInput } from '@Domain/Inputs';

<TextInput
  isDisabled
  value="Disabled input. Can't change this text"
/>
```

#### Input with handleClear

```jsx
import { TextInput } from '@Domain/Inputs';

initialState = { textValue: 'I have a clear button' };

<TextInput
    value={state.textValue}
    handleClear={() => {setState({textValue: ''}); alert('clear value')}} 
    onChange={(value) => {setState({textValue: value})}}
  />
```

#### Input with margins

```jsx
import { CheckboxInput, NumberInput, TextInput } from '@Domain/Inputs';

initialState = { value: false };

<div>
  <TextInput
   margins={{
     top: 20,
     left: 20,
     right: 20,
     bottom: 20
   }}
 />
</div>
```
