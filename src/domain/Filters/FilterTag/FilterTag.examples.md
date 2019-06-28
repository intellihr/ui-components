#### Filter Tag

```jsx
initialState = {
  tags: [
          { 
            fieldName: 'type',
            label: 'Type',
            type: 'equality',
            fieldValues:[{
              label: 'Product Training',
              value: 'product_training_id'
            }, {
              label: 'IT Training',
              value: 'it_training_id'
            }]
          },
          { 
            fieldName: 'complete_at',
            label: 'Complete date',
            type: 'range',
            fieldValues:[{
              label: '01/01/2019',
              value: '01/01/2019'
            }, {
              label: '31/05/2019',
              value: '31/05/2019'
            }]
          }
        ]
};

<FilterTag
  tags = {state.tags}
  onTagDeleted = {(selectedTag) => { setState({ tags: state.tags.filter(tag => !Object.is(tag, selectedTag)) }) }}
/>
```
