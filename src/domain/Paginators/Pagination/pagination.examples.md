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
               horizontalAlignment: { desktop: GridLayout.HorizontalAlignment.Left, min: GridLayout.HorizontalAlignment.Center }
             },
             {
               size: { desktop: 6, min: 12 },
               content: <PaginationButtons
                          currentPage={state.page}
                          totalPages={props.totalPages}
                          handlePageChange={(page) => setState({page})}
                        />,
               horizontalAlignment: { desktop: GridLayout.HorizontalAlignment.Right ,min: GridLayout.HorizontalAlignment.Center }
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

