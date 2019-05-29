#### Filter Dropdown

```jsx
import { Button } from '@Domain/Buttons';

initialState = {
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
  ]
};

<FilterDropdown
  tableName='training'
  toggleComponent={({ toggleMenu, toggleComponentRef, ariaProps }) =>
      <Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        buttonOverrides={{...ariaProps}}
      >
        Add filter
      </Button>
    }
  filters = {state.filters}
  handleFilter = {(filter) => alert(`Filter Applied: ${filter.field} ${filter.operator} ${filter.value}`)}
/>
```
