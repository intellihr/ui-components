#### Basic Telephone Text

```jsx
  <div>
    <TelephoneText
      phoneNumber='123123123'
      countryCode='se'
     />
    <br/>
    <TelephoneText
      phoneNumber='622 2222'
      countryCode='is'
     />
    <br/>
    <TelephoneText
      phoneNumber='22342345'
      countryCode='hk'
     />
     <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='AU'
     />
     <br/>
    <TelephoneText
      phoneNumber='1300123123'
      countryCode='AU'
     />
    <br/>
    <TelephoneText
      phoneNumber='132012'
      countryCode='AU'
    />
  </div>
```

#### INVALID Telephone Text

If either of the following are true:
* `phoneNumber` isn't a valid phone number in `countryCode`
* `countryCode` is missing and the `phoneNumber` does not include a valid country dial code

`TelephoneText` will display `phoneNumber` as-is without any additional formatting. 

```jsx
  <div>
    <TelephoneText
      phoneNumber='1231231233333'
      countryCode='se'
    />
    <br/>
    <TelephoneText
      phoneNumber='122 2222'
      countryCode='is'
    />
    <br/>
    <TelephoneText
      phoneNumber='3 3 3 3 3 3 3 3'
      countryCode='AU'
    />
    <br/>
    <TelephoneText
      phoneNumber='0733333333'
    />
  </div>
```

#### Telephone Text with Types

```jsx
  <div>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='AU'
      type='xsmall'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='AU'
      type='small'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='AU'
      type='body'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='AU'
      type='heading'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='AU'
      type='display'
     />
    <br/>
    <TelephoneText
      phoneNumber='412341234'
      countryCode='AU'
      type='display-large'
     />
  </div>
```

#### Telephone Text with color

```jsx
const { Variables } = require('../../../common');

  <TelephoneText
    phoneNumber='412341234'
    countryCode='AU'
    color={Variables.Color.i400}
   />
```

#### Telephone Text without flag

```jsx
const { Variables } = require('../../../common');

  <TelephoneText
    phoneNumber='412341234'
    countryCode='AU'
    showFlag={false}
   />
```

#### Telephone Text without country information

```jsx
  <>
    With country dial code in phoneNumber:
    <br/>
    <TelephoneText
      phoneNumber='+61412341234'
     />
     <br/><br/>
     Without country dial code in phoneNumber:
     <br/>
     <TelephoneText
       phoneNumber='412341234'
     />
  </>
```
