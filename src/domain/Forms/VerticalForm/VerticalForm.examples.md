Basic field

```jsx
const { TextInput } = require('../../Inputs');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <Button
       type='primary'
    >
      Submit me :)
    </Button>
  </VerticalForm>
```

Field with description

```jsx
const { TextInput } = require('../../Inputs');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      label='This is a test input'
      description='This is a test description'
      isRequired
    >
      <TextInput
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <Button
       type='primary'
    >
      Submit me :)
    </Button>
  </VerticalForm>
```

Field with errors & required

```jsx
const { TextInput } = require('../../Inputs');
const initialState = { textInputValue: '' };

  <VerticalForm
    onSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    <VerticalForm.Field
      inputName='testInput'
      isRequired
      label='This is a test input'
      errorMessages={[
        'You can pass in an array of error messages. (Or just a single string)',
        'Each error will be on a separate line :)'  
      ]}
    >
      <TextInput
        isInvalid={true}
        isRequired={true}
        name='testInput'
        handleChange={(e) => setState({ textInputValue: e.target.value })}
      />
    </VerticalForm.Field>
    <Button
       type='primary'
    >
      Submit me :)
    </Button>
  </VerticalForm>
```
