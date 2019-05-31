#### Filter Controller

```jsx
import { isEqual } from 'lodash';

initialState = {
  searchValue: null,
  filters: [
    { 
      field: 'Type',
      type: 'select',
      selectOptions: [
        'Product Training',
        'Personal Development',
        'Soft Skill'
      ]
    },
    {
      field: 'Training Provider',
      type: 'select',
      selectOptions: [
        'Internal',
        'External',
        'Others'
      ]
    }
  ],
  tags: []
};

<FilterController
  tableName='training'
  filters = {state.filters}
  tags = {state.tags}
  searchValue = {state.searchValue}
  onFilterAdded = {(filter) => { setState({ tags: (state.tags.filter(tag => tag.field !== filter.field)).concat(filter) }) }}
  onTagDeleted = {(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onSearchUpdated = {(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared = {(event) => { setState({ searchValue: '' }); alert('clear search value') }}
/>
```
