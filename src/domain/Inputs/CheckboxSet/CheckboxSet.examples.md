#### Vertical Checkbox Set

```jsx

initialState = { option1: false, option2: false, option3: false, option4: false};

<CheckboxSet
  handleChange={(event) => setState({[event.target.name]: !state[event.target.name]})}
  options={[
      {
        name: 'option1',
        label:'this is option 1',
        value: state.option1
      },
      {
        name: 'option2',
        label:'this is option 2',
        value: state.option2
      },
      {
        name: 'option3',
        label:'this is option 3 (I am disabled)',
        value: state.option3,
        isDisabled: true
      },
      {
        name: 'option4',
        label:'this is option 4 (I have a special action)',
        value: state.option4,
        handleChange: (event) => { setState({[event.target.name]: !state[event.target.name]});  alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Checkbox Button Set

```jsx

initialState = { button1: false, button2: false, button3: false, button4: false};

<CheckboxSet
  useButtonStyle
  handleChange={(event) => setState({[event.target.name]: !state[event.target.name]})}
  options={[
      {
        name: 'button1',
        label:'this is option 1',
        value: state.button1
      },
      {
        name: 'button2',
        label:'this is option 2',
        value: state.button2
      },
      {
        name: 'button3',
        label:'this is option 3 (I am disabled)',
        value: state.button3,
        isDisabled: true
      },
      {
        name: 'button4',
        label:'this is option 4 (I have a special action)',
        value: state.button4,
        handleChange: (event) => { setState({[event.target.name]: !state[event.target.name]});  alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Horizontal Checkbox Set

```jsx

const { Props } = require('@Common');
initialState = { horizontal1: false, horizontal2: false, horizontal3: false, horixontal4: false, horixontal5: false};

<CheckboxSet
  orientation={Props.Orientation.Horizontal}
  handleChange={(event) => setState({[event.target.name]: !state[event.target.name]})}
  options={[
      {
        name: 'horizontal1',
        label:'this is option 1',
        value: state.horizontal1
      },
      {
        name: 'horizontal2',
        label:'this is option 2',
        value: state.horizontal2
      },
      {
        name: 'horizontal3',
        label:'this is option 3 (I am disabled)',
        value: state.horizontal3,
        isDisabled: true
      },
      {
        name: 'horizontal4',
        label:'this is option 4 (I have a special action)',
        value: state.horizontal4,
        handleChange: (event) => { setState({[event.target.name]: !state[event.target.name]});  alert('I have a custom onClick handler!');}
      },
      {
        name: 'horizontal5',
        label:'final option is very looooooooooong',
        value:state.horizontal5,
      }
    ]}
/>
```
