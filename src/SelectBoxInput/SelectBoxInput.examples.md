# Select Box Input

```jsx
initialState = { value: null };

  <SelectBoxInput
    name='testInput'
    value={state.value}
    options={[
      {
        label: 'Hello World',
        value: 20
      },
      {
        label: 'Try selecting me',
        value: 40
      }
    ]}
    handleChange={(option) => {
      setState({ value: option.value })
    }}
  />
```
