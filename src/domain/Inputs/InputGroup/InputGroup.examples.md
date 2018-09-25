#### Basic Input Group

```jsx
const { NumberInput } = require('../NumberInput');
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Menus/DropdownMenu');

<InputGroup>
  <NumberInput
    placeholder='Enter an currency'
    groupPosition='left'
  />
  <TextInput
    placeholder='Enter an amount'
    groupPosition='right'
  />
</InputGroup>
```

#### Input Group with 5 inputs

```jsx
const { NumberInput } = require('../NumberInput');
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Menus/DropdownMenu');

<InputGroup>
  <NumberInput
    placeholder='Enter an currency'
    groupPosition='left'
  />
  <TextInput
    placeholder='Enter an amount'
    groupPosition='middle'
  />
  <NumberInput
    placeholder='Enter tax'
    groupPosition='middle'
  />
  <NumberInput
    placeholder='Enter quantity'
    groupPosition='middle'
  />
  <TextInput
    placeholder='Notes'
    groupPosition='right'
  />
</InputGroup>
```

#### Input Group with Dropdown Button

```jsx
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Menus/DropdownMenu');
const { FontAwesomeIcon } = require('../../Icons');

const { map, filter, toLower } = require('lodash');
let textInput;

initialState = { selectedOption: {value: 1, label: 'AUD'}, inputValue: '' };

class ThingList extends React.PureComponent {
  get options () {
    const { options, query } = this.props
    
    return filter(options, option => {  
      return toLower(option.label).includes(query)
    })
  }
  
  render () {
    const { handleClick } = this.props
  
    return map(this.options, (option) => {    
      return <div key={option.value}><Button onClick={() => handleClick(option)}>{option.label}</Button></div>
    })
  }
}

<InputGroup>
  <DropdownMenu
    toggleComponent={
    <InputGroup.Button
      type='input' 
      groupPosition='left'
      icon={<FontAwesomeIcon type='caret-down' />}
      iconAlignment='right'
    >
      {state.selectedOption.label}
    </InputGroup.Button>
    }
  >
  {({closeMenu}) => 
    <>
      <TextInput
        placeholder='Search country!'
        icon={<FontAwesomeIcon type='search' />}
        value={state.inputValue}
        handleChange={(e) => setState({inputValue: e.target.value})}
        width={300}
      />
      <ThingList
        query={state.inputValue}
        handleClick={(option) => {
          setState({selectedOption: option})
          closeMenu()
        }}
        options={[
          { value: 1, label: 'AUD' },
          { value: 2, label: 'USD' },
          { value: 3, label: 'NZD' }
        ]}
      />
    </>
  }
  </DropdownMenu>
  <TextInput
    placeholder='Enter an amount'
    groupPosition='right'
  />
</InputGroup>
```


#### Input Group with Dropdown Button and many inputs

```jsx
const { NumberInput } = require('../NumberInput');
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Menus/DropdownMenu');
const { FontAwesomeIcon } = require('../../Icons');

const { map, filter, toLower } = require('lodash');
let textInput;

initialState = { selectedOption: {value: 1, label: 'AUD'}, inputValue: '' };

class ThingList extends React.PureComponent {
  get options () {
    const { options, query } = this.props
    
    return filter(options, option => {  
      return toLower(option.label).includes(query)
    })
  }
  
  render () {
    const { handleClick } = this.props
  
    return map(this.options, (option) => {    
      return <div key={option.value}><Button onClick={() => handleClick(option)}>{option.label}</Button></div>
    })
  }
}

<InputGroup>
  <DropdownMenu
    toggleComponent={
    <InputGroup.Button
      type='input' 
      groupPosition='left'
      icon={<FontAwesomeIcon type='caret-down' />}
      iconAlignment='right'
    >
      {state.selectedOption.label}
    </InputGroup.Button>
    }
  >
  {({closeMenu}) => 
    <>
      <TextInput
        placeholder='Search country!'
        icon={<FontAwesomeIcon type='search' />}
        value={state.inputValue}
        handleChange={(e) => setState({inputValue: e.target.value})}
        width={300}
      />
      <ThingList
        query={state.inputValue}
        handleClick={(option) => {
          setState({selectedOption: option})
          closeMenu()
        }}
        options={[
          { value: 1, label: 'AUD' },
          { value: 2, label: 'USD' },
          { value: 3, label: 'NZD' }
        ]}
      />
    </>
  }
  </DropdownMenu>
  <TextInput
    placeholder='Enter an amount'
    groupPosition='middle'
  />
  <NumberInput
    placeholder='Enter tax'
    groupPosition='middle'
  />
  <NumberInput
    placeholder='Enter quantity'
    groupPosition='middle'
  />
  <TextInput
    placeholder='Notes'
    groupPosition='right'
  />
</InputGroup>
```


#### Input Group with Dropdown Button in any position

```jsx
const { NumberInput } = require('../NumberInput');
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Menus/DropdownMenu');
const { FontAwesomeIcon } = require('../../Icons');

const { map, filter, toLower } = require('lodash');
let textInput;

initialState = { selectedOption: {value: 1, label: 'AUD'}, inputValue: '' };

class ThingList extends React.PureComponent {
  get options () {
    const { options, query } = this.props
    
    return filter(options, option => {  
      return toLower(option.label).includes(query)
    })
  }
  
  render () {
    const { handleClick } = this.props
  
    return map(this.options, (option) => {    
      return <div key={option.value}><Button onClick={() => handleClick(option)}>{option.label}</Button></div>
    })
  }
}

<InputGroup>
  <DropdownMenu
    toggleComponent={
    <InputGroup.Button
      type='input' 
      groupPosition='left'
      icon={<FontAwesomeIcon type='caret-down' />}
      iconAlignment='right'
    >
      {state.selectedOption.label}
    </InputGroup.Button>
    }
  >
  {({closeMenu}) => 
    <>
      <TextInput
        placeholder='Search country!'
        icon={<FontAwesomeIcon type='search' />}
        value={state.inputValue}
        handleChange={(e) => setState({inputValue: e.target.value})}
        width={300}
      />
      <ThingList
        query={state.inputValue}
        handleClick={(option) => {
          setState({selectedOption: option})
          closeMenu()
        }}
        options={[
          { value: 1, label: 'AUD' },
          { value: 2, label: 'USD' },
          { value: 3, label: 'NZD' }
        ]}
      />
    </>
  }
  </DropdownMenu>
  <TextInput
    placeholder='Enter an amount'
    groupPosition='middle'
  />
  <DropdownMenu
    toggleComponent={
    <InputGroup.Button
      type='input' 
      groupPosition='middle'
      icon={<FontAwesomeIcon type='caret-down' />}
      iconAlignment='right'
    >
      {state.selectedOption.label}
    </InputGroup.Button>
    }
  >
  {({closeMenu}) => 
    <>
      <TextInput
        placeholder='Search country!'
        icon={<FontAwesomeIcon type='search' />}
        value={state.inputValue}
        handleChange={(e) => setState({inputValue: e.target.value})}
        width={300}
      />
      <ThingList
        query={state.inputValue}
        handleClick={(option) => {
          setState({selectedOption: option})
          closeMenu()
        }}
        options={[
          { value: 1, label: 'AUD' },
          { value: 2, label: 'USD' },
          { value: 3, label: 'NZD' }
        ]}
      />
    </>
  }
  </DropdownMenu>
  <NumberInput
    placeholder='Enter quantity'
    groupPosition='middle'
  />
  <DropdownMenu
    toggleComponent={
    <InputGroup.Button
      type='input' 
      groupPosition='right'
      icon={<FontAwesomeIcon type='caret-down' />}
      iconAlignment='right'
    >
      {state.selectedOption.label}
    </InputGroup.Button>
    }
  >
  {({closeMenu}) => 
    <>
      <TextInput
        placeholder='Search country!'
        icon={<FontAwesomeIcon type='search' />}
        value={state.inputValue}
        handleChange={(e) => setState({inputValue: e.target.value})}
        width={300}
      />
      <ThingList
        query={state.inputValue}
        handleClick={(option) => {
          setState({selectedOption: option})
          closeMenu()
        }}
        options={[
          { value: 1, label: 'AUD' },
          { value: 2, label: 'USD' },
          { value: 3, label: 'NZD' }
        ]}
      />
    </>
  }
  </DropdownMenu>
</InputGroup>
```
