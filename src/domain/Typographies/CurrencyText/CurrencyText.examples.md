#### Basic Currency Text

```jsx
  <CurrencyText
    value={1000.499}
    prefix='AUD'
    decimalPlace={2}
   />
```

#### Colored Currency Text

```jsx
  const { Variables } = require('@Common');

  <CurrencyText
    value={1000.499}
    prefix='AUD'
    prefixColor={Variables.Color.g400}
    color={Variables.Color.r400}
    decimalPlace={2}
   />
```

#### Styled Currency Text

```jsx
   <div>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='xsmall'
      type='heading'
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='body'
      type='xsmall'
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='display-large'
      type='display'
    />
  </div>
```

#### Flex Aligned Currency Text

```jsx
   <div>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='xsmall'
      type='heading'
      flexAlign
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='body'
      type='xsmall'
      flexAlign
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='display-large'
      type='display'
      flexAlign
    />
  </div>
```

#### Empty Currency Text

```jsx
  <CurrencyText />
```

