#### Filter Tag

```jsx
initialState = {
  tags: [
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
  tags = {state.tags}
  handleDelete = {(selectedTag) => { setState({ tags: state.tags.filter(tag => !Object.is(tag, selectedTag)) }) }}
/>
```
