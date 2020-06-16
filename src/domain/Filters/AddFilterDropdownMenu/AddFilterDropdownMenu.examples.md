#### Filter Dropdown

```jsx
import { Button } from '@Domain/Buttons';

const filters = [
            { 
              fieldName: 'type',
              label: 'Type',
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
  onFilterAdded = {(filterInfo) => alert(
    `Filter Applied on ${filterInfo.filter.label}: ${filterInfo.addedOption.label} (internal value: ${filterInfo.addedOption.value})`
  )}
/>
```

#### Filter Dropdown using custom components

```jsx
import { Button } from '@Domain/Buttons';
import { HierarchicalSelectInput } from '@Domain/Inputs';

const filters = [
            { 
              fieldName: 'type',
              label: 'Type',
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
              fieldName: 'location',
              label: 'Location',
              customInputComponent: ({value, onChange}) => 
                <HierarchicalSelectInput
                  placeholder='Select an option!'
                  name='location'
                  value={value}
                  hierarchicalOptions={[
                    {
                      label: 'Australia',
                      value: 10
                    },
                    {
                      label: 'Queensland',
                      value: 11,
                      parentValue: 10
                    },
                    {
                      label: 'NSW',
                      value: 12,
                      parentValue: 10
                    },
                    {
                      label: 'United States',
                      value: 20
                    },
                    {
                      label: 'Victoria',
                      value: 13,
                      parentValue: 10
                    },
                    {
                      label: 'Brisbane',
                      value: 113,
                      parentValue: 11
                    }
                  ]}
                  onChange={onChange}
                />
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
  onFilterAdded = {(filterInfo) => alert(
    `Filter Applied on ${filterInfo.filter.label}: ${filterInfo.addedOption.label} (internal value: ${filterInfo.addedOption.value})`
  )}
/>
```
