#### Dual Input

```jsx
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Menus/DropdownMenu');
const { FontAwesomeIcon } = require('../../Icons');

const _ = require('lodash');
let textInput;

initialState = { selectedOption: {value: 1, label: 'AUD'}, inputValue: '' };

class ThingList extends React.PureComponent {
  get options () {
    const { options, query } = this.props
    
    return _.filter(options, option => {  
      return _.toLower(option.label).includes(query)
    })
  }
  
  render () {
    const { handleClick } = this.props
  
    return _.map(this.options, (option) => {    
      return <div key={option.value}><Button onClick={() => handleClick(option)}>{option.label}</Button></div>
    })
  }
}

<InputGroup>
  <DropdownMenu
    toggleComponent={
    <InputGroup.Button
      type='input' 
      className='group-left'
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
