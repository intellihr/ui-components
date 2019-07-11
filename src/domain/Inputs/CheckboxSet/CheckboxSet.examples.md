#### Vertical Checkbox Set

```jsx

initialState = { option1: false, option2: false, option3: false, option4: false};

<CheckboxSet
  handleOptionChange={(name, value) => setState({name: value})}
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
        onChange: (value) => { setState({option4: value});  alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Checkbox Set with tight spacing

```jsx

initialState = { optionTight1: false, optionTight2: false, optionTight3: false, optionTight4: false};

<CheckboxSet
  spacing='tight'
  handleOptionChange={(name, value) => setState({name: value})}
  options={[
      {
        name: 'optionTight1',
        label:'this is option 1',
        value: state.optionTight1
      },
      {
        name: 'optionTight2',
        label:'this is option 2',
        value: state.optionTight2
      },
      {
        name: 'optionTight3',
        label:'this is option 3 (I am disabled)',
        value: state.optionTight3,
        isDisabled: true
      },
      {
        name: 'optionTight4',
        label:'this is option 4 (I have a special action)',
        value: state.optionTight4,
        onChange: (value) => { setState({option4: value});  alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Checkbox Button Set

```jsx

initialState = { button1: false, button2: false, button3: false, button4: false};

<CheckboxSet
  useButtonStyle
  handleOptionChange={(name, value) => setState({name: value})}
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
        onChange: (value) => { setState({button4: value});  alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Horizontal Checkbox Set

```jsx
import { Props } from '@Common';

initialState = { horizontal1: false, horizontal2: false, horizontal3: false, horixontal4: false, horixontal5: false};

<CheckboxSet
  orientation={Props.Orientation.Horizontal}
  handleOptionChange={(name, value) => setState({name: value})}
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
        onChange: (value) => { setState({horizontal4: value});  alert('I have a custom onClick handler!');}
      },
      {
        name: 'horizontal5',
        label:'final option is very looooooooooong',
        value:state.horizontal5,
      }
    ]}
/>
```

#### Horizontal Checkbox Set with tight spacing

```jsx
import { Props } from '@Common';

initialState = { horizontalTight1: false, horizontalTight2: false, horizontalTight3: false, horizontalTight4: false, horizontalTight5: false};

<CheckboxSet
  spacing='tight'
  orientation={Props.Orientation.Horizontal}
  handleOptionChange={(name, value) => setState({name: value})}
  options={[
      {
        name: 'horizontalTight1',
        label:'this is option 1',
        value: state.horizontalTight1
      },
      {
        name: 'horizontalTight2',
        label:'this is option 2',
        value: state.horizontalTight2
      },
      {
        name: 'horizontalTight3',
        label:'this is option 3 (I am disabled)',
        value: state.horizontalTight3,
        isDisabled: true
      },
      {
        name: 'horizontalTight4',
        label:'this is option 4 (I have a special action)',
        value: state.horizontalTight4,
        onChange: (value) => { setState({horizontalTight4: value});  alert('I have a custom onClick handler!');}
      },
      {
        name: 'horizontalTight5',
        label:'final option is very looooooooooong',
        value:state.horizontalTight5,
      }
    ]}
/>
```
