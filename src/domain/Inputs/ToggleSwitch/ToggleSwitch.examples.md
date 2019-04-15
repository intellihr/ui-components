#### Basic Toggle Switch

```jsx
import { Variables } from '@Common';

initialState = {
  checkbox: false
};


<ToggleSwitch
  name='checkbox2'
  title='This is a Toggle Switch'
  checked={state.checkbox}
  onChange={() => setState({checkbox: !state.checkbox})}
  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
/>
```

#### Grouped Toggle Switch

```jsx
import { Variables } from '@Common';

initialState = {
  checkbox: {
    child1: true,
    child2: false,
    child3: true
  }
};


const allChecked = (name) => {
  return Object.values(state[name]).every(item => item)
}


const toggleAll = (name) => {
  if (allChecked(name)) {
    return setState({
      checkbox: {
        child1: false,
        child2: false,
        child3: false
      }
    })
  }
  
   return setState({
      checkbox: {
        child1: true,
        child2: true,
        child3: true
      }
    })
}


const toggleOne = (name) => {
  setState((state) => ({
    checkbox: {
      ...state.checkbox,
      [name]: !state.checkbox[name]
    }
  }))
}

<>
  <ToggleSwitch
    name='checkbox'
    title='This is a Toggle Switch'
    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    checked={allChecked('checkbox')}
    onChange={() => toggleAll('checkbox')}
    margins={{
      bottom: Variables.Spacing.sSmall
    }}
  >
    <ToggleSwitch
      isChild
      name='example-checkbox-child1'
      title='This is a Child Toggle Switch'
      checked={state.checkbox.child1}
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      onChange={() => toggleOne('child1')}
    />
    <ToggleSwitch
      isChild
      name='example-checkbox-child2'
      title='This is a Child Toggle Switch'
      checked={state.checkbox.child2}
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      onChange={() => toggleOne('child2')}
    />
    <ToggleSwitch
      isChild
      name='example-checkbox-child3'
      title='This is a Child Toggle Switch'
      checked={state.checkbox.child3}
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      onChange={() => toggleOne('child3')}
    />
  </ToggleSwitch>
</>
```
