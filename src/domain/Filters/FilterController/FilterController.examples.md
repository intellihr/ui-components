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
          
const handleFilterAdded = (filterInfo) => {
  const fieldName = filterInfo.filter.fieldName;
  const existingFilterTag = state.tags.find(tag => tag.fieldName === fieldName);
  
  if (existingFilterTag) {
    const oldFieldValues = existingFilterTag.fieldValues.find(val => val.value === filterInfo.addedOption.value);
    
    if (!oldFieldValues) {
        existingFilterTag.fieldValues.push(filterInfo.addedOption);
        
        setState({tags: [...state.tags.filter(tag => tag.fieldName !== fieldName), existingFilterTag]});
      }
  } else {
    const newTag = {
      fieldName: fieldName,
      label: filterInfo.filter.label,
      type: 'equality',
      fieldValues: [filterInfo.addedOption]
    };
  
    setState({tags: [...state.tags, newTag]});
  }
}

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search training'
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onFilterAdded= {handleFilterAdded}
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
    alignItems: 'center',
    width: '100%',
};

const dateRangeStyle = {
    width: '100%',
    flex: '1 1 0%'
};

initialState = {
  startDate: null,
  endDate:null,
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
          
const handleFilterAdded = (filterInfo) => {
  const fieldName = filterInfo.filter.fieldName;
  const existingFilterTag = state.tags.find(tag => tag.fieldName === fieldName);
  
  if (existingFilterTag) {
    const oldFieldValues = existingFilterTag.fieldValues.find(val => val.value === filterInfo.addedOption.value);
    
    if (!oldFieldValues) {
        existingFilterTag.fieldValues.push(filterInfo.addedOption);
        
        setState({tags: [...state.tags.filter(tag => tag.fieldName !== fieldName), existingFilterTag]});
      }
  } else {
    const newTag = {
      fieldName: fieldName,
      label: filterInfo.filter.label,
      type: 'equality',
      fieldValues: [filterInfo.addedOption]
    };
  
    setState({tags: [...state.tags, newTag]});
  }
}

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search training'
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onFilterAdded= {handleFilterAdded}
  onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
  rightComponent={<div style={style}>
                     <div style={dateRangeStyle}>
                       <DateRangeInput
                        name='filter-date-picker'
                        startDate={state.startDate}
                        endDate={state.endDate}
                        startDatePlaceholder='Start Date'
                        endDatePlaceholder='End Date'
                        handleDatesChange={(dates) => { setState({ startDate: dates.startDate, endDate: dates.endDate })}}
                       />
                       </div>
                    <Button margins={{ left: 8 }} type='neutral' onClick={() => alert('other action')}>Other Action</Button>
                   </div>}
/>
```

#### Filter Controller with right component with search bar hidden

```jsx
import { isEqual } from 'lodash';
import { DateRangeInput } from '@Domain/Inputs';
import { Button } from '@Domain/Buttons';

const style = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
};

const dateRangeStyle = {
    width: '100%',
    flex: '1 1 0%'
};

initialState = {
  startDate: null,
  endDate:null,
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
          
const handleFilterAdded = (filterInfo) => {
  const fieldName = filterInfo.filter.fieldName;
  const existingFilterTag = state.tags.find(tag => tag.fieldName === fieldName);
  
  if (existingFilterTag) {
    const oldFieldValues = existingFilterTag.fieldValues.find(val => val.value === filterInfo.addedOption.value);
    
    if (!oldFieldValues) {
        existingFilterTag.fieldValues.push(filterInfo.addedOption);
        
        setState({tags: [...state.tags.filter(tag => tag.fieldName !== fieldName), existingFilterTag]});
      }
  } else {
    const newTag = {
      fieldName: fieldName,
      label: filterInfo.filter.label,
      type: 'equality',
      fieldValues: [filterInfo.addedOption]
    };
  
    setState({tags: [...state.tags, newTag]});
  }
}

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search training'
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onFilterAdded= {handleFilterAdded}
  onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
  hideSearchBar
  rightComponent={<div style={style}>
                     <div style={dateRangeStyle}>
                       <DateRangeInput
                        name='filter-date-picker'
                        startDate={state.startDate}
                        endDate={state.endDate}
                        startDatePlaceholder='Start Date'
                        endDatePlaceholder='End Date'
                        handleDatesChange={(dates) => { setState({ startDate: dates.startDate, endDate: dates.endDate })}}
                       />
                       </div>
                    <Button margins={{ left: 8 }} type='neutral' onClick={() => alert('other action')}>Other Action</Button>
                   </div>}
/>
```
