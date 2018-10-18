#### Basic Telephone Text

```jsx
  <div>
    <TelephoneText
      phoneNumber='123123'
      countryCode='se'
      dialCode='46'
     />
    <br/>
    <TelephoneText
      phoneNumber='1231234'
      countryCode='is'
      dialCode='354'
     />
    <br/>
    <TelephoneText
      phoneNumber='12341234'
      countryCode='hk'
      dialCode='852'
     />
     <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='au'
      dialCode='61'
     />
     <br/>
    <TelephoneText
      phoneNumber='1300123123'
      countryCode='au'
      dialCode='61'
     />
  </div>
```

#### Telephone Text with Types

```jsx
  <div>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='au'
      dialCode='61'
      type='xsmall'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='au'
      dialCode='61'
      type='small'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='au'
      dialCode='61'
      type='body'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='au'
      dialCode='61'
      type='heading'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='au'
      dialCode='61'
      type='display'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='au'
      dialCode='61'
      type='display-large'
     />
  </div>
```

#### Telephone Text with color

```jsx
const { Variables } = require('../../../common');

  <TelephoneText
    phoneNumber='412341234'
    countryCode='au'
    dialCode='61'
    color={Variables.Color.i400}
   />
```

#### Telephone Text without flag

```jsx
const { Variables } = require('../../../common');

  <TelephoneText
    phoneNumber='412341234'
    countryCode='au'
    dialCode='61'
    isFlagDisplayed={false}
   />
```

#### Telephone Text without prefix

```jsx
  <TelephoneText
    phoneNumber='+61412341234'
   />
```
