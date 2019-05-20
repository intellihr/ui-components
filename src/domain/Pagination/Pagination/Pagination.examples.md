#### Pagination

```jsx
  initialState = { page: 1 };

  <Pagination
    currentPage={state.page}
    totalCount={105}
    pageSize={10}
    totalPages={10}
    handlePageChange={(page) => setState({page})}
  />
```

#### Pagination without details

```jsx
  initialState = { page: 1 };

  <Pagination
    currentPage={state.page}
    totalPages={10}
    handlePageChange={(page) => setState({page})}
  />
```

