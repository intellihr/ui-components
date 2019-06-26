#### Filter Dropdown

```jsx
import { Button } from '@Domain/Buttons';

const filters = [
            { 
              fieldName: 'type',
              label: 'Type',
              type: 'SINGLE_SELECT',
              selectOptions: [
                {
                  label: 'Product Training',
                  value: 'product_training'
                },
                {
                  label: 'Personal Development',
                  value: 'personal_development'
                },
                {
                  label: 'Soft Skill',
                  value: 'soft_skill'
                }
              ]
            },
            {
              fieldName: 'training_provider',
              label: 'Training Provider',
              type: 'SINGLE_SELECT',
              selectOptions: [
                {
                  label: 'Internal',
                  value: 'internal'
                },
                {
                  label: 'External',
                  value: 'external'
                },
                {
                  label: 'Others',
                  value: 'others'
                }
              ]
            }
          ];

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
  filters = {filters}
  onFilterAdded = {(addedFilter) => alert(`Filter Applied on ${addedFilter.filter.label}:  ${addedFilter.value}`)}
/>
```
