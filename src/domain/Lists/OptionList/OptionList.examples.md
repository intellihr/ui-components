#### Simple Option List

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

initialState = {
  selectedOption: {
    text: 'Georgia Lari (GEL)',
    value: 1,
    onClick: (option) => {setState({selectedOption: option})},
    leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/ge.png?raw=true' />,
    buttonText: 'GEL'
  }
};

<OptionList
  selectedValue={state.selectedOption.value}
  handleClick={(option) => {
    setState({selectedOption: option})
  }}
  options={[
    {
      text: 'Georgia Lari (GEL)',
      value: 1,
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/ge.png?raw=true' />,
      buttonText: 'GEL'
    },
    {
      text: 'Malaysia Ringgit (MYR)',
      value: 2,
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/my.png?raw=true' />,
      buttonText: 'MYR'
    },
    {
      text: 'New Zealand Dollar (NZD)',
      value: 3,
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/nz.png?raw=true' />,
      buttonText: 'NZD'
    },
    {
      text: 'Australian Dollar (AUD)',
      value: 4,
      onClick: (option) => {alert('I have a custom onClick handler!'); setState({selectedOption: option});},
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/au.png?raw=true' />,
      rightComponent: <FontAwesomeIcon type='star' />,
      buttonText: 'AUD'
    }
  ]}
/>
```

#### Truncated Option List

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');
initialState = {
  selectedOption: 1
};

<OptionList
  truncatedText
  selectedValue={state.selectedOption}
  handleClick={(option) => {
    setState({selectedOption: option.value})
  }}
  options={[
    {
      value: 1,
      text: 'This is a very long option and should truncate on small screens',
    },
    {
      value: 2,
      text: 'This one is also very long and should also truncate on small screens'
    }
  ]}
/>
```


#### Filtered Option List

```jsx
const { FilteredOptionList } = require('./FilteredOptionList');
const { FontAwesomeIcon } = require('@Domain/Icons');

initialState = {
  selectedOption: {
    text: 'Georgia Lari (GEL)',
    value: 1,
    onClick: (option) => {setState({selectedOption: option})},
    leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/ge.png?raw=true' />,
    buttonText: 'GEL'
  }
};

<FilteredOptionList
  selectedValue={state.selectedOption.value}
  handleClick={(option) => {
    setState({selectedOption: option})
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
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/ge.png?raw=true' />,
      buttonText: 'GEL'
    },
    {
      text: 'Malaysia Ringgit (MYR)',
      value: 2,
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/my.png?raw=true' />,
      buttonText: 'MYR'
    },
    {
      text: 'New Zealand Dollar (NZD)',
      value: 3,
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/nz.png?raw=true' />,
      buttonText: 'NZD'
    },
    {
      text: 'Australian Dollar (AUD)',
      value: 4,
      onClick: (option) => {alert('I have a custom onClick handler!'); setState({selectedOption: option});},
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/au.png?raw=true' />,
      rightComponent: <FontAwesomeIcon type='star' />,
      buttonText: 'AUD'
    }
  ]}
/>
```
