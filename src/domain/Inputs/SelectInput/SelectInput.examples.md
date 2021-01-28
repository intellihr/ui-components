#### Select Input

Select inputs are used when choosing between several known options with labels and values.

```jsx
initialState = { value: '' };

<SelectInput
  placeholder='Select an option!'
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
  onChange={value => setState({ value })}
/>
```

They have a disabled state:

```jsx
<SelectInput
  name='testInput'
  value={20}
  isDisabled
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
/>
```

And an invalid state:

```jsx
<SelectInput
  name='testInput'
  value={20}
  isInvalid
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
/>
```

And disabled typing on input

```jsx
initialState = { value: '' };
<SelectInput
  name='testInput'
  value={state.value}
  isSearchable={false}
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
  onChange={value => {setState({ value })}}
/>
```

#### Multiselect Input

They can also be used as a multiselect. In this case, their value is a `string[]` array:

```jsx

initialState = { value: [] };

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
  onChange={value => setState({ value })}
  isMultiSelect
/>
```

It's possible to have a variation where options are not removed from the list once selected:

```jsx

initialState = { value: [] };

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
  onChange={value => setState({ value })}
  isMultiSelect
  shouldRemoveElementsFromMultiSelect={false}
/>
```


#### Select Input with ability to create new elements

The following will log to the console when an element is attempted to be created:

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

initialState = { value: '' };

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
  onChange={value => setState({ value })}
  onNewOptionCreated={option => console.log('New option created', option)}
/>
```

#### Async options implementation

Select input can work asynchronously using an `onInputChange` prop to pass back
the search text state:

```jsx
import { includes, reduce } from 'lodash';

const backendOptions = [
  {
    label: 'Hello World',
    value: 20
  },
  {
    label: 'Try selecting me',
    value: 40
  }
];

const simulateServerSideFiltering = (input) => new Promise((resolve, reject) => {
  setState({ isFetching: true })

  setTimeout(() => {
    const matchedOptions = !input ? backendOptions : reduce(backendOptions, (result, option) => {
      if (includes(option.label.toLowerCase(), input)) {
        result.push(option)
      }
      return result
    }, [])
    
    setState({ isFetching: false, options: matchedOptions })
    
    resolve(matchedOptions)
  }, 1000)
});

initialState = { options: backendOptions, isFetching: false, value: '' };

<SelectInput
  name='testInput'
  placeholder='Type to async filter...'
  value={state.value}
  isFetching={state.isFetching}
  shouldFilteringBePerformed={false}
  options={state.options}
  onInputChange={simulateServerSideFiltering}
  onChange={value => setState({ value })}
/>
```

#### Select Input with margins

```jsx
const { Variables } = require('@Common');

initialState = { value: '' };

<SelectInput
  placeholder='Select an option!'
  name='testInput'
  value={state.value}
  margins={{
    top: Variables.Spacing.sSmall,
    bottom: Variables.Spacing.s2XSmall
  }}
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
  onChange={value => setState({ value })}
/>
```
