#### Basic Input Group

```jsx
const { NumberInput } = require('../NumberInput');
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Popovers/DropdownMenu');

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
const { DropdownMenu } = require('../../Popovers/DropdownMenu');

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
const { FilteredOptionList } = require('../../Lists/OptionList');
const { TextInput } = require('../TextInput');
const { DropdownMenu } = require('../../Popovers/DropdownMenu');
const { FontAwesomeIcon } = require('../../Icons');

const { map, filter, toLower } = require('lodash');
let textInput;

initialState = {
  selectedOption: {
    text: 'Georgia Lari (GEL)',
    value: 1,
    onClick: (option) => {setState({selectedOption: option}); closeMenu()},
    leftComponent: <Emoji emoji='flag-ge' />,
    buttonText: 'GEL'
  }
};

<InputGroup>
  <DropdownMenu
    toggleComponent={({ toggleMenu, toggleComponentRef, ariaProps }) =>
      <InputGroup.Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        groupPosition='left'
        leftComponent={state.selectedOption.leftComponent}
        {...ariaProps}
      >
         {state.selectedOption.buttonText}
      </InputGroup.Button>
    }
  >
  {({closeMenu}) => 
    <FilteredOptionList
      selectedValue={state.selectedOption.value}
      handleClick={(option) => {
        setState({selectedOption: option})
        closeMenu()
      }}
      textInputProps={{
        icon: <FontAwesomeIcon type='search' />,
        placeholder: 'Search country!',
        width: 300
      }}
      options={[
        {
          text: 'Georgia Lari (GEL)',
          value: 1,
          leftComponent: <Emoji emoji='flag-ge' />,
          buttonText: 'GEL'
        },
        {
          text: 'Malaysia Ringgit (MYR)',
          value: 2,
          leftComponent: <Emoji emoji='flag-my' />,
          buttonText: 'MYR'
        },
        {
          text: 'New Zealand Dollar (NZD)',
          value: 3,
          leftComponent: <Emoji emoji='flag-nz' />,
          buttonText: 'NZD'
        },
        {
          text: 'Australian Dollar (AUD)',
          value: 4,
          onClick: (option) => {alert('I have a custom onClick handler!'); setState({selectedOption: option}); closeMenu()},
          leftComponent: <Emoji emoji='flag-au' />,
          rightComponent: <FontAwesomeIcon type='star' />,
          buttonText: 'AUD'
        }
      ]}
    />
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
const { DropdownMenu } = require('../../Popovers/DropdownMenu');
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
    toggleComponent={({ toggleMenu, toggleComponentRef, ariaProps }) =>
      <InputGroup.Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        groupPosition='left'
        {...ariaProps}
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
const { DropdownMenu } = require('../../Popovers/DropdownMenu');
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
    toggleComponent={({ toggleMenu, toggleComponentRef, ariaProps }) =>
      <InputGroup.Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        groupPosition='left'
        {...ariaProps}
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
    toggleComponent={({ toggleMenu, toggleComponentRef, ariaProps }) =>
      <InputGroup.Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        groupPosition='middle'
        {...ariaProps}
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
    toggleComponent={({ toggleMenu, toggleComponentRef, ariaProps }) =>
      <InputGroup.Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        groupPosition='right'
        {...ariaProps}
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
