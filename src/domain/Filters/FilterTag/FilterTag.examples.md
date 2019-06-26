#### Filter Tag

```jsx
initialState = {
  tags: [
          { 
            field: 'type',
            label: 'Type',
            operator: 'is',
            fieldValues:[{
              label: 'Product Training',
              value: 'product_training_id'
            }, {
              label: 'IT Training',
              value: 'it_training_id'
            }]
          },
          { 
            field: 'complete_at',
            label: 'Complete date',
            operator: 'from',
            fieldValues:'01/01/2019,31/05/2019'
          }
        ]
};

<FilterTag
  tags = {state.tags}
  onTagDeleted = {(selectedTag) => { setState({ tags: state.tags.filter(tag => !Object.is(tag, selectedTag)) }) }}
/>
```
