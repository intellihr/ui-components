#### Vertical Radio Set

```jsx
initialState = { value: 'option 1' };

<RadioSet
  name='example-radio-set'
  value={state.value}
  handleChange={(event) => setState({value: event.target.value})}
  options={[
      {
        label:'this is option 1',
        value:'option 1',
      },
      {
        label:'this is option 2 (I am disabled)',
        value:'option 2',
        isDisabled:true
      },
      {
        label:'this is option 3',
        value:'option 3',
      },
      {
        label:'this is option 4 (I have a special action)',
        value:'option 4',
        handleChange: (event) => { setState({value: event.target.value}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Radio Button Set

```jsx
initialState = { value: 'option 1' };

<RadioSet
  name='example-radio-set-button'
  value={state.value}
  useButtonStyle
  handleChange={(event) => setState({value: event.target.value})}
  options={[
      {
        label:'this is option 1',
        value:'option 1'
      },
      {
        label:'this is option 2 (I am disabled)',
        value:'option 2',
        isDisabled:true
      },
      {
        label:'this is option 3',
        value:'option 3',
      },
      {
        label:'this is option 4 (I have a special action)',
        value:'option 4',
        handleChange: (event) => { setState({event: event.target.value}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Horizontal Radio Set

```jsx
const { Props } = require('@Common');
initialState = { value: 'option 1' };

<div>
  Horizontal Radio Set
  <RadioSet
    name='example-radio-set-horizontal'
    value={state.value}
    orientation={Props.Orientation.Horizontal}
    handleChange={(event) => setState({value: event.target.value})}
    options={[
        {
          label:'this is option 1',
          value:'option 1'
        },
        {
          label:'this is option 2 (I am disabled)',
          value:'option 2',
          isDisabled:true
        },
        {
          label:'this is option 3',
          value:'option 3'
        },
        {
          label:'this is option 4 (I have a special action)',
          value:'option 4',
          isDisabled:false,
          handleChange: (event) => { setState({value: event.target.value}); alert('I have a custom onClick handler!');}
        },
        {
          label:'final option is very looooooooooong',
          value:'option 5'
        },
      ]}
  />
</div>
```
