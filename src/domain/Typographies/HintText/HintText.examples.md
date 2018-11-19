#### Hint Text

```jsx
<div>
  <HintText
    hint='Never trust a cat'
  >
    Hover me for a tip :)
  </HintText>
</div>
```

#### CurrencyText as child

```jsx
const { CurrencyText } = require('../');

<div>
  <HintText
    hint='This value has been converted'
  >
    <CurrencyText
      value={1000}
      prefix='AUD'
    />
  </HintText>
</div>
```

#### Text as child

```jsx
const { Text } = require('../');

<div>
  <HintText
    hint='This value has been converted'
  >
    <Text
      type='display-large'
    >
      I am a BIG hint text
    </Text>
  </HintText>
</div>
```
