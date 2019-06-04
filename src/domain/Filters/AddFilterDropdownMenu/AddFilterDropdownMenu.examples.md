#### Filter Dropdown

```jsx
import { Button } from '@Domain/Buttons';

initialState = {
  filters: [
      { 
        fieldName: 'Type',
        type: 'SINGLE_SELECT',
        selectOptions: [
          {
            label: 'Product Training',
            value: 'Product Training'
          },
          {
            label: 'Personal Development',
            value: 'Personal Development'
          },
          {
            label: 'Soft Skill',
            value: 'Soft Skill'
          }
        ]
      },
      {
        fieldName: 'Training Provider',
        type: 'SINGLE_SELECT',
        selectOptions: [
          {
            label: 'Internal',
            value: 'Internal'
          },
          {
            label: 'External',
            value: 'External'
          },
          {
            label: 'Others',
            value: 'Others'
          }
        ]
      }
    ]
};

<AddFilterDropdownMenu
  filterMessage='Show all training where:'
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
  onFilterAdded = {(filter) => alert(`Filter Applied: ${filter.fieldName} ${filter.operator} ${filter.value}`)}
/>
```
