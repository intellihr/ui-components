#### Filter Tag

```jsx
initialState = {
  tags: [
    { 
      fieldName: 'Type',
      operator: 'is',
      value: 'Product Training'
    },
    {
      fieldName: 'Training Provider',
      operator: 'is',
      value: 'AWS'
    }
  ]
};

<FilterTag
  tags = {state.tags}
  onTagDeleted = {(selectedTag) => { setState({ tags: state.tags.filter(tag => !Object.is(tag, selectedTag)) }) }}
/>
```
