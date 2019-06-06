#### Pagination

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

#### Pagination without details

```jsx
  import { PaginationButtons } from '@Domain/Paginators';
  
  initialState = { page: 1 };

  <PaginationButtons
    currentPage={state.page}
    totalPages={10}
    handlePageChange={(page) => setState({page})}
  />
```

#### Pagination with margins

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
                          margins={{ top: 20, left: 20, bottom: 20 }}
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
                          margins={{ top: 20, right: 20, bottom: 20 }}
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

