#### Select Input

```jsx
initialState = { value: null };

<SelectInput
  name='testInput'
  value={state.value}
  options={[
    {
      label: 'Hello World',
      value: 20
    },
    {
      label: 'Try selecting me',
      value: 40
    }
  ]}
  handleChange={option => setState({ value: option.value })}
/>
```

#### Select Input with ability to create new elements

```jsx
const options = [
  {
    label: 'Hello World',
    value: 20
  },
  {
    label: 'Try selecting me',
    value: 40
  }
]

initialState = { value: null };

<SelectInput
  name='testInput'
  value={state.value}
  options={[
    {
      label: 'Hello World',
      value: 20
    },
    {
      label: 'Try selecting me',
      value: 40
    }
  ]}
  handleChange={option => setState({ value: option.value })}
  handleNewOption={option => console.log('New option created', option)}
/>
```

#### Async Options (Server-side filtering)

```jsx
const { includes, reduce } = require('lodash')

const options = [
  {
    label: 'Hello World',
    value: 20
  },
  {
    label: 'Try selecting me',
    value: 40
  }
]

initialState = { value: null }

const simulateServerSideFiltering = (input) => new Promise((resolve, reject) => {
  if (!input) {
    resolve(options)
  }

  setTimeout(() => {
    const matchedOptions = reduce(options, (result, option) => {
      if (includes(option.label.toLowerCase(), input)) {
        result.push(option)
      }
      return result
    }, [])
    resolve(matchedOptions)
  }, 1000)
});

<SelectInput
  name='testInput'
  value={state.value}
  handleChange={option => setState({ value: option.value })}
  asyncOptions={simulateServerSideFiltering}
/>
```
