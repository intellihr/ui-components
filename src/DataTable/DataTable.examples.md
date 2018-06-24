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
