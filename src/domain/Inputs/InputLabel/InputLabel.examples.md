#### Basic Input Label

```jsx
const { TextInput } = require('../TextInput');

<div>
  <InputLabel>
    Hello boys!
  </InputLabel>
  <TextInput name='example-input1' />
</div>
```

#### Input Label with `htmlFor`

```jsx
const { TextInput } = require('../TextInput');

<div>
  <InputLabel
    htmlFor='example-input2'
  >
    Hello ladies!
  </InputLabel>
  <TextInput name='example-input2' />
</div>
```

#### Input Label with isInvalid

```jsx
const { TextInput } = require('../TextInput');

<div>
  <InputLabel
    isInvalid
  >
    Gentlemen...
  </InputLabel>
  <TextInput name='example-input3' isInvalid />
</div>
```
