# Form

```jsx
initialState = { textInputValue: '' };

  <Form
    handleSubmit={() => alert(`Test input: ${state.textInputValue}`)}
  >
    Test input
    <TextInput
      handleChange={(e) => setState({ textInputValue: e.target.value })}
    />
    <Button
       type='primary'
    >
      Submit me :)
    </Button>
  </Form>
```
