#### Basic Currency Text

```jsx
  <CurrencyText
    value={1000}
    prefix='AUD'
   />
```

#### Formatted Currency Code

```jsx
   <div>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='xsmall'
      isPrefixFormatted
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='body'
      isPrefixFormatted
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='display'
      isPrefixFormatted
    />
  </div>
```

#### Empty Currency Text

```jsx
  <CurrencyText />
```
