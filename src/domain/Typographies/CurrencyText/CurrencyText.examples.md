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
      prefixType='small'
      isPrefixFormatted
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='medium'
      isPrefixFormatted
    />
    <br/>
    <CurrencyText
      value={1000}
      prefix='AUD'
      prefixType='large'
      isPrefixFormatted
    />
  </div>
```
