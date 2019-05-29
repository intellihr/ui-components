#### Filter Dropdown

```jsx
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
  handleFilter = {(filter) => { setState({ tags:  state.tags.concat(filter) }) }}
  handleTagDelete = {(selectedTag) => { setState({ tags: state.tags.filter(tag => !Object.is(tag, selectedTag)) }) }}
  handleSearchChange = {(event) => { setState({ searchValue: event.target.value }); console.log(event.target.value) }}
/>
```
