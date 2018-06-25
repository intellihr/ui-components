# DataTable

## Basic DataTable

```jsx
<DataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
/>
```

## Basic DataTable with no data

```jsx
<DataTable
  data={[]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
/>
```

## Sortable DataTable

```jsx
<DataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  sortable={true}
/>
```

## Default Sorted DataTable

```jsx
<DataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  defaultSorted={[
    {
      id: 'age',
      desc: true
    }
  ]}
/>
```

## Filterable DataTable

```jsx
<DataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  filterable={true}
/>
```

## Paginated DataTable

```jsx
<DataTable
  data={[
    {
      name: 'Tanner Linsley',
      age: 26
    },
    {
      name: 'Jason Maurer',
      age: 23
    }
  ]}
  columns={[
    {
      Header: 'Name',
      accessor: 'name'
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  showPaginationBottom={true}
  showPageSizeOptions={true}
/>
```
