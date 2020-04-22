HierarchicalSelectInput is a special variant of SelectInput for handling hierarchical sets of data.
It requires that the set of data be fully loaded first on the frontend (no async support).

```jsx
initialState = { value: '' };

<HierarchicalSelectInput
  placeholder='Select an option!'
  name='testInput'
  value={state.value}
  hierarchicalOptions={[
    {
      label: 'Australia',
      value: 10
    },
    {
      label: 'Queensland',
      value: 11,
      parentValue: 10
    },
    {
      label: 'NSW',
      value: 12,
      parentValue: 10
    },
    {
      label: 'United States',
      value: 20
    },
    {
      label: 'Victoria',
      value: 13,
      parentValue: 10
    },
    {
      label: 'New York',
      value: 21,
      parentValue: 20
    },
    {
      label: 'Texas',
      value: 22,
      parentValue: 20
    },
    {
      label: 'California',
      value: 23,
      parentValue: 20
    },
    {
      label: 'Brisbane',
      value: 113,
      parentValue: 11
    }
  ]}
  onChange={value => setState({ value })}
/>
```

They have a disabled state:

```jsx
<HierarchicalSelectInput
  name='testInput'
  value={11}
  isDisabled
  hierarchicalOptions={[
    {
      label: 'Parent Option 1',
      value: 10
    },
    {
      label: 'Child Option 1',
      value: 11,
      parentValue: 10
    },
    {
      label: 'Child Option 2',
      value: 12,
      parentValue: 10
    }
  ]}
/>
```

And an invalid state:

```jsx
<HierarchicalSelectInput
  name='testInput'
  value={11}
  isInvalid
  hierarchicalOptions={[
    {
      label: 'Parent Option 1',
      value: 10
    },
    {
      label: 'Child Option 1',
      value: 11,
      parentValue: 10
    },
    {
      label: 'Child Option 2',
      value: 12,
      parentValue: 10
    }
  ]}
/>
```

#### Multiselect Input

They can also be used as a multiselect. In this case, their value is a `string[]` array:

```jsx

initialState = { value: [] };

<HierarchicalSelectInput
  name='testInput'
  value={state.value}
  hierarchicalOptions={[
    {
      label: 'Parent Option 1',
      value: 10
    },
    {
      label: 'Child Option 1',
      value: 11,
      parentValue: 10
    },
    {
      label: 'Child Option 2',
      value: 12,
      parentValue: 10
    }
  ]}
  onChange={value => setState({ value })}
  isMultiSelect
/>
```
