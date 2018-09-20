#### Basic Input Label

```jsx
const { TextInput } = require('../TextInput');

<>
  <InputLabel>
    I am a basic input label
  </InputLabel>
  <TextInput name='example-input1' />
</>
```

#### Input Label with htmlFor

```jsx
const { TextInput } = require('../TextInput');

<>
  <InputLabel
    htmlFor='example-input2'
  >
    Click me and I'll focus my input ;)
  </InputLabel>
  <TextInput name='example-input2' />
</>
```

#### Input Label with isRequired

```jsx
const { TextInput } = require('../TextInput');

<>
  <InputLabel
    isRequired
  >
    This field is required!
  </InputLabel>
  <TextInput name='example-input3' isRequired />
</>
```
