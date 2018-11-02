#### Radio Input

```jsx
initialState = { value: 'option 2' };

<div>
  Radio
  <RadioInput
    handleChange={(event) => setState({value: event.target.value})}
    options={[
        {
          label:'this is option 1',
          value:'option 1',
          isChecked:state.value === 'option 1',
          isDisabled:false
        },
        {
          label:'this is option 2 (I am disabled)',
          value:'option 2',
          isChecked:state.value === 'option 2',
          isDisabled:true
        },
        {
          label:'this is option 3',
          value:'option 3',
          isChecked:state.value === 'option 3',
          isDisabled:false
        },
        {
          label:'this is option 4 (I have a special action)',
          value:'option 4',
          isChecked:state.value === 'option 4',
          isDisabled:false,
          handleChange: (event) => { setState({value: event.target.value}); alert('I have a custom onClick handler!'); closeMenu()}
        }
      ]}
  />
</div>
```
