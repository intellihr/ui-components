#### Basic DataTable

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

#### Basic DataTable with no data

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

#### Sortable DataTable

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
  sortable
/>
```

#### Custom Column Components

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
      accessor: 'name',
      Cell: data => (
        <Callout>
          {data.row.name}
        </Callout>
      )
    },
    {
      Header: 'Age',
      accessor: 'age'
    }
  ]}
  sortable
/>
```

#### Default Sorted DataTable

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

#### Paginated DataTable

```jsx
<DataTable
  data={[{
    "name": "Frederigo Mallebone",
    "age": "15"
  }, {
    "name": "Dewain Treadgall",
    "age": "26"
  }, {
    "name": "Ranna Aberdeen",
    "age": "63"
  }, {
    "name": "Janelle Donisi",
    "age": "12"
  }, {
    "name": "Chaddy Labell",
    "age": "18"
  }, {
    "name": "Pepe Seman",
    "age": "32"
  }, {
    "name": "Loy Roseaman",
    "age": "37"
  }, {
    "name": "Roseline Bradburn",
    "age": "50"
  }, {
    "name": "Graig Franiak",
    "age": "72"
  }, {
    "name": "Eloisa Fernez",
    "age": "17"
  }, {
    "name": "Agnese Jagoe",
    "age": "34"
  }, {
    "name": "Broderick Trenouth",
    "age": "64"
  }, {
    "name": "Giffie Crankhorn",
    "age": "86"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Mona Dobsons",
    "age": "77"
  }, {
    "name": "Domenic Wyndham",
    "age": "86"
  }, {
    "name": "Chas Egel",
    "age": "28"
  }, {
    "name": "Chantal Dwyer",
    "age": "38"
  }, {
    "name": "Matthias McGuane",
    "age": "64"
  }, {
    "name": "Troy Salleir",
    "age": "87"
  }, {
    "name": "Hyacinthia Illing",
    "age": "30"
  }, {
    "name": "Erv Hinrichs",
    "age": "14"
  }, {
    "name": "Dorette Bearham",
    "age": "13"
  }, {
    "name": "Ave Dobrovolski",
    "age": "51"
  }, {
    "name": "Doe Giacomelli",
    "age": "85"
  }, {
    "name": "Sutherlan Caulfield",
    "age": "35"
  }]}
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
  showPagination
/>
```

#### DataTable with custom overrides

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
  reactTableOverrides={{
    filterable: true
  }}
/>
```
