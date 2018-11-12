#### Single Date Input

```jsx
<div>
  <SingleDateInput 
    name='test-date-picker1'
  />
</div>
```


##### isDisabled

```jsx
<SingleDateInput
  isDisabled
  name='test-date-picker2'
  dateFormat='DD/MM/YYYY'
/>
```

##### isInvalid

```jsx
<SingleDateInput
  isInvalid
  name='test-date-picker3'
  dateFormat='DD/MM/YYYY'
/>
```

##### Wrapped with InputGroup
```jsx
const { InputGroup } = require('../InputGroup');
const { TextInput } = require('../TextInput');

<InputGroup>
  <SingleDateInput
    name='test-date-picker4'
    dateFormat='DD/MM/YYYY'
    groupPosition='left'
  />
  <TextInput
    placeholder='Enter an amount'
    groupPosition='right'
  />
</InputGroup>
```

##### isMobile

```jsx
<div>
  <SingleDateInput 
    name='test-date-picker1'
    isMobile
  />
</div>
```
