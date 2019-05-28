#### Filter Tag

```jsx
initialState = {
  options: [
    { 
      field: 'Type',
      operator: 'is',
      value: 'Product Training'
    },
    {
      field: 'Training Provider',
      operator: 'is',
      value: 'AWS'
    }
  ]
};

<FilterTag
  options = {state.options}
  handleDelete = {(selectedOption) => { setState({ options: state.options.filter(option => !Object.is(option, selectedOption)) }) }}
/>
```
