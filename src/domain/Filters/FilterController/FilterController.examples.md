#### Filter Controller

```jsx
import { isEqual } from 'lodash';

initialState = {
  searchValue: '',
  tags: []
};

const filters = [
            { 
              fieldName: 'type',
              label: 'Type',
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
              fieldName: 'training_provider',
              label: 'Training Provider',
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
          ];
          
const handleAddFilter = (addedFilter) => {
  const tagsOnExistingField = state.tags.find(tag => tag.fieldName === addedFilter.filter.fieldName);
  if (tagsOnExistingField) {
    const oldFieldValues = tagsOnExistingField.fieldValues.find(val => val.value === addedFilter.value);
    if (!oldFieldValues) {
        tagsOnExistingField.fieldValues.push(addedFilter.filter.selectOptions.find(option => option.value === addedFilter.value));
        setState({tags: state.tags.filter(tag => tag.fieldName !== addedFilter.filter.fieldName).concat(tagsOnExistingField)});
      }
  } else {
    setState({tags: [...state.tags, {fieldName: addedFilter.filter.fieldName, label:addedFilter.filter.label, type: 'equality', fieldValues: [addedFilter.filter.selectOptions.find(option => option.value === addedFilter.value)]}]});
  }
}

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search training'
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onFilterAdded= {(addedFilter) => { handleAddFilter(addedFilter)}}
  onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
/>
```

#### Filter Controller with right component

```jsx
import { isEqual } from 'lodash';
import { DateRangeInput } from '@Domain/Inputs';
import { Button } from '@Domain/Buttons';

const style = {
    display: 'flex',
    alignItems: 'center'
};

initialState = {
  startDate: null,
  endDate:null,
  searchValue: '',
  tags: []
};

const filters = [
            { 
              field: 'type',
              label: 'Type',
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
              field: 'training_provider',
              label: 'Training Provider',
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
          ];

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search training'
  onFilterAdded={(filter) => { setState({ tags: (state.tags.filter(tag => tag.fieldName !== filter.fieldName)).concat(filter) }) }}
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
  rightComponent={ <div style={style}>
                       <DateRangeInput
                       name='filter-date-picker'
                       startDate={state.startDate}
                       endDate={state.endDate}
                       startDatePlaceholder='Start Date'
                       endDatePlaceholder='End Date'
                       handleDatesChange={(dates) => { setState({ startDate: dates.startDate, endDate: dates.endDate })}}
                      />
                      <Button margins={{ left: 8 }} type='neutral' onClick={() => alert('other action')}>Other Action</Button>
                     </div>
                   }
/>
```
