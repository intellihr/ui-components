#### Select Input

```jsx
initialState = { value: null };

  <SelectInput
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

#### Select Input with ability to create new elements

```jsx
const options = [
  {
    label: 'Hello World',
    value: 20
  },
  {
    label: 'Try selecting me',
    value: 40
  }
]

initialState = { value: null };

  <SelectInput
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
    handleNewOption={option => {
      console.log('New option created', option)
    }}
  />
```
