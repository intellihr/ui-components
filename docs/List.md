List are used for listing items on page

[Card](/#/Content/Cards/Card) is used for list item instead of smart list
List should be limited to **10** cards each except person profile (20 cards)

Sections from top to bottom:
- Filter and sort section
- Statistic tiles
- cards
- Pagination section

There is sLarge spacing 24px between each section and sXSmall between Cards

![list page](./image/ListPage.png)

Tab is not recommended. You can consider to have default filter on the page to enable user focus on the more important content like extended leave.

![list with default filter](./image/ListWithDefaultFilter.png)

If tab is in this list, please make sure it is in a correct position with its context as below:
The filter and sort section that work across tabs should sit above the tabs, while the filter and sort section that are unique for each tab should sit within the tab content

Tabs should be limited to one line on mobile view

<br />

### Filter and sort section
All list should have filter (filter button and search bar) function when the page is customer facing
Sort function would be depend on case but highly recommend if page has any call for action or stress level like compliance

Filter and search section consists of
- filter section (filter button, search input and date range filter)
- sort section
- other special action section

There is sMedium spacing 16px between each section and sXSmall spacing 8 px within section

#### Filter section
Filter section should have sXSmall spacing 8px between each item within the section
Filter button will always br joined to the left of the search bar
search bar should indicate the searchable text in the placeholder

Filter section should have 8px between tags and filter controller

#### Sort section
Sort by will always sit to the right of the filter section
Sort section should have sXSmall spacing 8px between label and input

#### Actions section
Actions section should have sXSmall spacing 8px between rach button

Actions are displayed in icon with a dark style tooltip popver in default button style.
Most common used actions goes first from right to left.

If no icon fits the use case, use default button instead. Text on page action buttons should be limited to one line on mobile view

```jsx
import { isEqual } from 'lodash';
import { DateRangeInput, SelectInput } from '@Domain/Inputs';
import { Button } from '@Domain/Buttons';
import { Inline, GridLayout } from '@Domain/Layouts';
import { FilterController } from '@Domain/Filters';
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = {
  startDate: null,
  endDate:null,
  searchValue: '',
  tags: [],
  sortBy: 1
};


const style = {
    display: 'flex',
    alignItems: 'baseline'
    
};

const selectInputWrapperStyle = {
    width: '200px'
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

<>
<Inline spacing={Variables.Spacing.sMedium}>
  <Inline.Item fill>
    <FilterController
          filters={filters}
          tags={state.tags}
          searchValue={state.searchValue}
          filterMessage='Show all training where:'
          searchPlaceholder='Search by Training Name or Position Title'
          onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
          onFilterAdded= {handleFilterAdded}
          onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
          onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
          rightComponent={<DateRangeInput
                            name='filter-date-picker'
                            startDate={state.startDate}
                            endDate={state.endDate}
                            startDatePlaceholder='Start Date'
                            endDatePlaceholder='End Date'
                            handleDatesChange={(dates) => { setState({ startDate: dates.startDate, endDate: dates.endDate })}}
                           />}
        />
  </Inline.Item>
  <div style={style}>
     <Text
       type={Props.TypographyType.Small}
       margins={{ right: Variables.Spacing.sXSmall }}
     >
       Sort by: 
     </Text>
     <div style={selectInputWrapperStyle}>
         <SelectInput
           name='testInput'
           value={state.sortBy}
           options={[
             {
               label: 'Priority',
               value: 1
             },
             {
               label: 'Date - Latest',
               value: 2
             }
           ]}
           onChange={sortBy => setState({ sortBy })}
         />
    </div>
   </div>
</Inline>

<br/>

<Inline spacing={Variables.Spacing.sMedium}>
  <Inline.Item fill>
    <FilterController
          filters={filters}
          tags={state.tags}
          searchValue={state.searchValue}
          filterMessage='Show all training where:'
          searchPlaceholder='Search by Training Name or Position Title'
          onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
          onFilterAdded= {handleFilterAdded}
          onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
          onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
        />
  </Inline.Item>
  <div style={style}>
     <Text
       type={Props.TypographyType.Small}
       margins={{ right: Variables.Spacing.sXSmall }}
     >
       Sort by: 
     </Text>
     <div style={selectInputWrapperStyle}>
         <SelectInput
           name='testInput'
           value={state.sortBy}
           options={[
             {
               label: 'Priority',
               value: 1
             },
             {
               label: 'Date - Latest',
               value: 2
             }
           ]}
           onChange={sortBy => setState({ sortBy })}
         />
    </div>
   </div>
</Inline>

<br/>

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search by Training Name or Position Title'
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onFilterAdded= {handleFilterAdded}
  onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
  rightComponent={<Inline spacing={Variables.Spacing.sMedium}>
                    <DateRangeInput
                      name='filter-date-picker'
                      startDate={state.startDate}
                      endDate={state.endDate}
                      startDatePlaceholder='Start Date'
                      endDatePlaceholder='End Date'
                      handleDatesChange={(dates) => { setState({ startDate: dates.startDate, endDate: dates.endDate })}}
                    />
                    <Button type='neutral' onClick={() => alert('other action')}>Other Action</Button>
                  </Inline>}
/>

<br/>

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search by Training Name or Position Title'
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onFilterAdded= {handleFilterAdded}
  onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
  rightComponent={<Inline spacing={Variables.Spacing.sMedium}>
                    <DateRangeInput
                      name='filter-date-picker'
                      startDate={state.startDate}
                      endDate={state.endDate}
                      startDatePlaceholder='Start Date'
                      endDatePlaceholder='End Date'
                      handleDatesChange={(dates) => { setState({ startDate: dates.startDate, endDate: dates.endDate })}}
                    />
                    <Inline spacing={Variables.Spacing.sXSmall}>
                      <Button
                        icon={<FontAwesomeIcon type='solid' icon='archive' />}
                        iconAlignment='no'
                        onClick={() => alert('archive action')}
                      />
                      <Button
                        icon={<FontAwesomeIcon type='solid' icon='download' />}
                        iconAlignment='no'
                        onClick={() => alert('download action')}
                      />
                    </Inline>
                  </Inline>}
/>

<br/>

<FilterController
  filters={filters}
  tags={state.tags}
  searchValue={state.searchValue}
  filterMessage='Show all training where:'
  searchPlaceholder='Search by Training Name or Position Title'
  onTagDeleted={(deletedTag) => { setState({ tags: state.tags.filter(tag => !isEqual(tag, deletedTag)) }) }}
  onFilterAdded= {handleFilterAdded}
  onSearchUpdated={(event) => { setState({ searchValue: event.target.value }); console.log('search value updated:', event.target.value) }}
  onSearchCleared={(event) => { setState({ searchValue: '' }); alert('clear search value') }}
  rightComponent={<DateRangeInput
                    name='filter-date-picker'
                    startDate={state.startDate}
                    endDate={state.endDate}
                    startDatePlaceholder='Start Date'
                    endDatePlaceholder='End Date'
                    handleDatesChange={(dates) => { setState({ startDate: dates.startDate, endDate: dates.endDate })}}
                  />}
/>
</>
```
<br />

### Statistic section
The label text length should be limited to one line with additional info in ( )  The value should be in one line too.

The high stress level status statistic order from left to right.

```jsx
import { Carousel } from '@Domain/Layouts';
import { Statistic } from '@Domain/Formats';

<>
    <Carousel>
      <Carousel.Tile>
        <Statistic
          title='Overdue'
          value='2'
        />
      </Carousel.Tile>
      <Carousel.Tile>
        <Statistic
          title='Expiring Soon'
          value='1'
        />
      </Carousel.Tile>
      <Carousel.Tile>
        <Statistic
          title='Missing End Dates'
          value='3'
        />
      </Carousel.Tile>
    </Carousel>
    <Carousel>
      <Carousel.Tile>
        <Statistic
          title='Total Session'
          value='25'
        />
      </Carousel.Tile>
      <Carousel.Tile>
        <Statistic
          title='Total Hours'
          value='211'
        />
      </Carousel.Tile>
      <Carousel.Tile>
        <Statistic
          title='Total Cost (AUD)'
          prefix='AUD'
          value='54,118.00'
        />
      </Carousel.Tile>
      <Carousel.Tile>
        <Statistic
          title='Total Cost (DZD)'
          prefix='DZD'
          value='99.00'
        />
      </Carousel.Tile>
    </Carousel>
</>
```


### Pagination section
All list should have [Pagination](/#/Interaction/Pagination) when the page is customer facing
It should be hidden when there is no record (also no result when filtering)

```jsx
import { PaginationDetails, PaginationButtons } from '@Domain/Paginators';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';
  
  initialState = { page: 1 };
  
  const props = { totalPages: 11, totalCount: 105, pageSize: 10};
  
  <GridLayout
      gutterMarginY={Variables.Spacing.sXSmall}
      horizontalAlignment={GridLayout.HorizontalAlignment.Justify}
      verticalAlignment={GridLayout.VerticalAlignment.Middle}
    cells={[
            {
               size: { desktop: 6, min: 12 },
               content: <PaginationDetails
                          currentPage={state.page}
                          totalPages={props.totalPages}
                          totalCount={props.totalCount}
                          pageSize={props.pageSize}
                        />,
               displayType: 'flex',
               flexHorizontalAlignment: { desktop: GridLayout.HorizontalAlignment.Left, min: GridLayout.HorizontalAlignment.Center }
             },
             {
               size: { desktop: 6, min: 12 },
               content: <PaginationButtons
                          currentPage={state.page}
                          totalPages={props.totalPages}
                          handlePageChange={(page) => setState({page})}
                        />,
               displayType: 'flex',
               flexHorizontalAlignment: { desktop: GridLayout.HorizontalAlignment.Right, min: GridLayout.HorizontalAlignment.Center }
             }
           ]}
  />
```

### Loading state
List section (from top to bottom): filter and sort section, statistics tile, cards, pagination with sLarge spacing 24px in between

Filter and sort section goes together as a 40px height skeleton
Statistics tile would depend on the number of tile would the list have (It would be depend on minimum number of tile so it would not include the optional ones)
The skeleton would be 200 x 90 with 8 margin in between Cards section skeleton would have three cards only and the skeleton height would depend on the card height on that page

Pagination section would not have a skeleton for it

```jsx
import { BlockSkeleton } from '@Domain/Skeletons';
import { Inline } from '@Domain/Layouts';
import { Variables } from '@Common';

<>
  <BlockSkeleton margins={{ bottom: Variables.Spacing.sLarge}} height={Variables.Spacing.s2XLarge}/>
  <Inline
    margins={{ bottom: Variables.Spacing.sLarge}}
  >
    <BlockSkeleton height={90} width={200}/>
    <BlockSkeleton height={90} width={200}/>
    <BlockSkeleton height={90} width={200}/>
  </Inline>
  <Inline collapse>
      <BlockSkeleton height={78}/>
      <BlockSkeleton height={78}/>
      <BlockSkeleton height={78}/>
  </Inline>
  
</>
```
