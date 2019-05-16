#### Basic LegacyAsyncDataTable

```jsx
import { useState } from 'react'

const userData = [{
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
    "age":"13"
  }];

function MockDataProvider() {
    const pageSize = 10
    const totalCount = userData.length

    const [data, setData] = useState(userData.slice(0, pageSize))
    const [loading, setLoading] = useState(false)

    function mockFetch(pageIndex) {
        setLoading(true)
        setTimeout(() => {
          const offSet = pageIndex * pageSize
          setData(userData.slice(offSet, offSet + pageSize))
          setLoading(false)
        }, 650)
    }

    return (
      <LegacyAsyncDataTable
        data={data}
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
        pageSize={pageSize}
        totalCount={totalCount}
        loading={loading}
        onPageChange={pageIndex => mockFetch(pageIndex)}
      />
    )
}

<MockDataProvider/>
```

#### Empty LegacyAsyncDataTable
```jsx
<LegacyAsyncDataTable
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
  pageSize={1}
  totalCount={0}
  loading={false}
  onPageChange={pageIndex => {}}
/>
```
