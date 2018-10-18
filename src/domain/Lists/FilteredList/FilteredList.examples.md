#### Simple Filtered List

```jsx
const { TextInput } = require('@Domain/Inputs');

initialState = {
  value: 'aus'
};

<div>
  <TextInput
    value={state.value}
    handleChange={(event) => setState({value: event.target.value})}
  />
  <FilteredList
    rowCallback={row => <div>{row.row.value}</div>}
    noDataComponent='could not find any results for your query'
    filters={[
        {
          kind: 'valueFilter',
          paths: ['value'],
          caseSensitive: false,
          filterValue: state.value
        }
      ]}
    rowData={[
      {
        value: 'Australia'
      },
      {
        value: 'New Zealand'
      },
      {
        value: 'United States'
      },
      {
        value: 'Europe'
      }
    ]}
  />
</div>
```

#### Multiple Filtered List

```jsx
const { TextInput, InputLabel } = require('@Domain/Inputs');

initialState = {
  value1: '',
  value2: ''
};

<div>
  <InputLabel>
    value
  </InputLabel>
  <TextInput
    value={state.value1}
    handleChange={(event) => setState({value1: event.target.value})}
  />
  <InputLabel>
    type
  </InputLabel>
  <TextInput
    value={state.value2}
    handleChange={(event) => setState({value2: event.target.value})}
  />
  <FilteredList
    rowCallback={
      row =>
       <div>
        <Text isInline={false} type='heading'>{row.row.value}</Text>
        <Text isInline={false} >{row.row.type}</Text>
      </div>
    }
    noDataComponent='could not find any results for your query'
    filters={[
        {
          kind: 'valueFilter',
          paths: ['value'],
          caseSensitive: false,
          filterValue: state.value1
        },
        {
          kind: 'valueFilter',
          paths: ['type'],
          caseSensitive: false,
          filterValue: state.value2
        }
      ]}
    rowData={[
      {
        value: 'Australia',
        type: 'country'
      },
      {
        value: 'New Zealand',
        type: 'country'
      },
      {
        value: 'United States',
        type: 'country'
      },
      {
        value: 'Europe',
        type: 'continent'
      }
    ]}
  />
</div>
```

#### Filtered List with no filters

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

<FilteredList
  rowCallback={row => <div>{row.row.value}</div>}
  rowData={[
    {
      value: 1
    },
    {
      value: 2
    },
    {
      value: 3
    },
    {
      value: 4
    }
  ]}
/>
```

#### Async Filtered List

```jsx
const { TextInput } = require('@Domain/Inputs');

initialState = {
  value: 'aus',
  promise: () => new Promise((resolve, reject) => {
     resolve([
       {
         value: 'Australia'
       },
       {
         value: 'New Zealand'
       },
       {
         value: 'United States'
       },
       {
         value: 'Europe'
       }
     ])
   })
};


<div>
  <TextInput
      value={state.value}
      handleChange={(event) => 
        new Promise((resolve, reject) => {
          resolve(setState({value: event.target.value}))
        })
      }
    />
  <FilteredList
    rowCallback={row => <div>{row.row.value}</div>}
    noDataComponent='could not find any results for your query'
    filters={[
        {
          kind: 'valueFilter',
          paths: ['value'],
          caseSensitive: false,
          filterValue: state.value
        }
      ]}
    rowData={state.promise}
  />
</div>
```

#### Async Filtered List with error

```jsx
const { TextInput } = require('@Domain/Inputs');

initialState = {
  value: 'type to error',
  promise: (data) => new Promise((resolve, reject) => {
     if (data[0].filterValue === 'type to error') {
      resolve([
        {
          value: 'type to error'
        }
      ])
     }
     
     reject('rejected')
   })
};


<div>
  <TextInput
      value={state.value}
      handleChange={(event) => 
        new Promise((resolve, reject) => {
          resolve(setState({value: event.target.value}))
        })
      }
    />
  <FilteredList
    rowCallback={row => <div>{row.row.value}</div>}
    noDataComponent='could not find any results for your query'
    errorComponent={(error) => `error: ${error}`}
    filters={[
        {
          kind: 'valueFilter',
          paths: ['value'],
          caseSensitive: false,
          filterValue: state.value
        }
      ]}
    rowData={state.promise}
  />
</div>
```
