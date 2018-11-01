#### Basic Input

```jsx
const { TextInput } = require('../TextInput');
const { NumberInput } = require('../NumberInput');
const { CheckboxInput } = require('../CheckboxInput');

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
const { TextInput } = require('../TextInput');
const { NumberInput } = require('../NumberInput');

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
const { TextInput } = require('../TextInput');
const { NumberInput } = require('../NumberInput');
const { FontAwesomeIcon } = require('@Domain/Icons');
const { IntelliIcon } = require('@Domain/Icons');

<div>
  Text
  <TextInput
    icon={<FontAwesomeIcon type='facebook' />}
  />
  Number
  <NumberInput
    icon={<IntelliIcon type='search' />}
  />
</div>
```

#### Input with Disable Prefix text

```jsx
const { TextInput } = require('../TextInput');
const { NumberInput } = require('../NumberInput');
const { FontAwesomeIcon } = require('@Domain/Icons');

<div>
  Text
  <TextInput
    icon={<FontAwesomeIcon type='facebook' />}
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
const { TextInput } = require('../TextInput');
const { NumberInput } = require('../NumberInput');

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

#### Input with handleChange

```jsx
const { TextInput } = require('../TextInput');
const { NumberInput } = require('../NumberInput');

<div>
  Text
  <TextInput
    value='Blur me!'
    handleChange={(e) => alert(`
      event: ${e}
      value: ${e.target.value}
    `)}
  />
  Number
  <NumberInput
    value={987654321}
    handleChange={(e) => alert(`
      event: ${e}
      value: ${e.target.value}
    `)}
  />
</div>
```

#### Invalid Input

```jsx
const { TextInput } = require('../TextInput');

<TextInput
  isInvalid
/>
```

#### Disabled Input

```jsx
const { TextInput } = require('../TextInput');

<TextInput
  isDisabled
/>
```
