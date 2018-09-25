#### Simple Option List

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

<OptionList
  options={[
    {
      text: 'Georgia Lari (GEL)',
      onClick: () => alert('Selected GEL'),
      leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/Georgia-Flag.png' />
    },
    {
      text: 'Malaysia Ringgit (MYR)',
      onClick: () => alert('Selected MYR'),
      selected: true,
      leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/Malaysia-Flag.png' />
    },
    {
      text: 'New Zealand Dollar (NZD)',
      onClick: () => alert('Selected NZD'),
      leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/New-Zealand-Flag.png' />
    },
    {
      text: 'Australian Dollar (AUD)',
      onClick: () => alert('Selected AUD'),
      leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/Australia-Flag.png' />,
      rightComponent: <FontAwesomeIcon type='star' />
    }
  ]}
/>
```

