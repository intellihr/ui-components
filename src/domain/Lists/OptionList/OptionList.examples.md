#### Simple Option List

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

<OptionList
  options={[
    {
      text: 'Georgia Lari (GEL)',
      onClick: () => alert('Selected GEL'),
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/ge.png?raw=true' />
    },
    {
      text: 'Malaysia Ringgit (MYR)',
      onClick: () => alert('Selected MYR'),
      selected: true,
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/my.png?raw=true' />
    },
    {
      text: 'New Zealand Dollar (NZD)',
      onClick: () => alert('Selected NZD'),
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/nz.png?raw=true' />
    },
    {
      text: 'Australian Dollar (AUD)',
      onClick: () => alert('Selected AUD'),
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/au.png?raw=true' />,
      rightComponent: <FontAwesomeIcon type='star' />
    }
  ]}
/>
```

#### Filtered Option List

```jsx
const { FilteredOptionList } = require('./FilteredOptionList');
const { FontAwesomeIcon } = require('@Domain/Icons');

<FilteredOptionList
  textInputProps={{
    icon: <FontAwesomeIcon type='search' />,
    placeholder: 'Type here to filter currencies'
  }}
  options={[
    {
      text: 'Georgia Lari (GEL)',
      onClick: () => alert('Selected GEL'),
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/ge.png?raw=true' />
    },
    {
      text: 'Malaysia Ringgit (MYR)',
      onClick: () => alert('Selected MYR'),
      selected: true,
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/my.png?raw=true' />
    },
    {
      text: 'New Zealand Dollar (NZD)',
      onClick: () => alert('Selected NZD'),
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/nz.png?raw=true' />
    },
    {
      text: 'Australian Dollar (AUD)',
      onClick: () => alert('Selected AUD'),
      leftComponent: <img src='https://github.com/markjames/famfamfam-flag-icons/blob/master/icons/png/au.png?raw=true' />,
      rightComponent: <FontAwesomeIcon type='star' />
    }
  ]}
/>
```
