#### Filter Dropdown

```jsx
import { Button } from '@Domain/Buttons';

initialState = {
  options: [
    { 
      field: 'Type',
      type: 'select',
      value: [
        'Product Training',
        'Personal Development',
        'Soft Skill'
      ]
    },
    {
      field: 'Training Provider',
      type: 'select',
      value: [
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
  options = {state.options}
  handleFilter = {(option) => alert(`Filter Applied: ${option.field} ${option.operator} ${option.value}`)}
/>
```
