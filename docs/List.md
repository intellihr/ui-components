List are used for listing items on page

Page content generally takes the forms of lists of items. 
As a general rule, we display data using paginated lists of 10 [Card](/#/Content/Cards/Card) components per page.
There are exceptions but please run this through the frontend/design guild before committing to any designs.

List pages contain the following elements, typically in this order:
- Filter and sort section
- Statistic tiles
- cards
- Pagination section

There is sLarge spacing between each section and sXSmall between Cards

![list page](./image/ListPage.png)

We generally don't use tabs - instead we use filter bars. You can apply default filters on the page where necessary.

![list with default filter](./image/ListWithDefaultFilter.png)

If tab is in this list, please make sure it is in a correct position with its context as below:
The filter and sort section that work across tabs should sit above the tabs, while the filter and sort section that are unique for each tab should sit within the tab content

Tabs should be limited to one line on mobile view

<br />

### Filter and sort section
Lists of user generated data that are expected to have more than a page of data should always have filter and search functionality
Sort function would be depend on case but highly recommend if page has any call for action or stress level like compliance

Filter and search section consists of
- filter section (filter button, search input and date range filter)
- sort section
- other special action section

There is sMedium spacing between each section and sXSmall spacing within section

#### Filter section
Filter section should have sXSmall spacing between each item within the section
Filter button will always be joined to the left of the search bar
Search bar placeholder text should inform the user what they can search on
Search should only search on free text fields like names and descriptions while things like categories and types should be managed by filters

Filter section should have sXSmall spacing between tags and filter controller

#### Sort section
Sort by will always sit to the right of the filter section
Sort section should have sXSmall spacing between label and input

#### Actions section
Actions section should have sXSmall spacing between each button

Actions are displayed in icon with a dark style tooltip popover in default button style.
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
                        iconAlignment='center'
                        onClick={() => alert('archive action')}
                      />
                      <Button
                        icon={<FontAwesomeIcon type='solid' icon='download' />}
                        iconAlignment='center'
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
Keep statistics concise so the label and value both only take up one line. Always keep these in a Carousel for a good mobile experience

The high stress level status statistic order from left to right.

```jsx
import { Carousel } from '@Domain/Layouts';
import { Statistic } from '@Domain/Formats';

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

```

```jsx
import { Carousel } from '@Domain/Layouts';
import { Statistic } from '@Domain/Formats';

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
```


### Pagination section
Lists of user generated data that are expected to have more than a page of data should always have [Pagination](/#/Interaction/Pagination) functionality
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
The following values will typically work for most content, but depending on the size of your content they may need minor adjustments.

Filter Section: sLarge spacing height
sLarge spacing between section
Statistics: 200px wide | 90px height | sXSmall spacing between each tile skeletons
sLarge spacing between section
Cards: Match your actual card height | sXSmall spacing between each card skeletons

No skeleton for pagination bar

Only display the minimum number of Statistics/Cards that the page can load with. If it always has 6 Statistics, then show 6 skeletons. For lists of Cards, display as many as a full page of results (typically 10) unless the content is unlikely to reach a full page of results.

```jsx
import { BlockSkeleton } from '@Domain/Skeletons';
import { Inline, Carousel } from '@Domain/Layouts';
import { Variables } from '@Common';

<>
  <BlockSkeleton margins={{ bottom: Variables.Spacing.sLarge}} height={Variables.Spacing.s2XLarge}/>
  <Carousel margins={{ bottom: Variables.Spacing.sLarge}}>
    <BlockSkeleton display='inline-block' margins={{ right: Variables.Spacing.sXSmall}} height={90} width={200}/>
    <BlockSkeleton display='inline-block' margins={{ right: Variables.Spacing.sXSmall}} height={90} width={200}/>
    <BlockSkeleton display='inline-block' height={90} width={200}/>
  </Carousel>
  <Inline collapse>
      <BlockSkeleton height={78}/>
      <BlockSkeleton height={78}/>
      <BlockSkeleton height={78}/>
  </Inline>
  
</>
```
