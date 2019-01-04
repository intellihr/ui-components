#### Vertical Radio Set

```jsx
initialState = { value: 'option 1' };

<RadioSet
  handleChange={(event) => setState({value: event.target.value})}
  options={[
      {
        name: 'option-1',
        label:'this is option 1',
        value:'option 1',
        isChecked:state.value === 'option 1',
      },
      {
        name: 'option-2',
        label:'this is option 2 (I am disabled)',
        value:'option 2',
        isChecked:state.value === 'option 2',
        isDisabled:true
      },
      {
        name: 'option-3',
        label:'this is option 3',
        value:'option 3',
        isChecked:state.value === 'option 3',
      },
      {
        name: 'option-4',
        label:'this is option 4 (I have a special action)',
        value:'option 4',
        isChecked:state.value === 'option 4',
        handleChange: (event) => { setState({value: event.target.value}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Radio Button Set

```jsx
initialState = { button: 'option 1' };

<RadioSet
  handleChange={(event) => setState({button: event.target.value})}
  options={[
      {
        name: 'button-option-1',
        label:'this is option 1',
        value:'option 1',
        isChecked:state.button === 'option 1',
        isButton: true
      },
      {
        name: 'button-option-2',
        label:'this is option 2 (I am disabled)',
        value:'option 2',
        isChecked:state.buton === 'option 2',
        isDisabled:true,
        isButton: true
      },
      {
        name: 'button-option-3',
        label:'this is option 3',
        value:'option 3',
        isChecked:state.button === 'option 3',
        isButton: true
      },
      {
        name: 'button-option-4',
        label:'this is option 4 (I have a special action)',
        value:'option 4',
        isChecked:state.button === 'option 4',
        handleChange: (event) => { setState({button: event.target.value}); alert('I have a custom onClick handler!');},
        isButton: true
      }
    ]}
/>
```

#### Horizontal Radio Set

```jsx
const { Props } = require('@Common');
initialState = { horizontalValue: 'option 1' };

<div>
  Horizontal Radio Set
  <RadioSet
    orientation={Props.Orientation.Horizontal}
    handleChange={(event) => setState({horizontalValue: event.target.value})}
    options={[
        {
          label:'this is option 1',
          value:'option 1',
          isChecked:state.horizontalValue === 'option 1',
        },
        {
          label:'this is option 2 (I am disabled)',
          value:'option 2',
          isChecked:state.horizontalValue === 'option 2',
          isDisabled:true
        },
        {
          label:'this is option 3',
          value:'option 3',
          isChecked:state.horizontalValue === 'option 3',
        },
        {
          label:'this is option 4 (I have a special action)',
          value:'option 4',
          isChecked:state.horizontalValue === 'option 4',
          isDisabled:false,
          handleChange: (event) => { setState({horizontalValue: event.target.value}); alert('I have a custom onClick handler!');}
        },
        {
          label:'final option is very looooooooooong',
          value:'option 5',
          isChecked:state.horizontalValue === 'option 5',
        },
      ]}
  />
</div>
```
