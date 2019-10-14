#### Single Date Input
```jsx
import moment from 'moment'

initialState = { value: moment() };

<div>
  <SingleDateInput 
    value={state.value}
    onChange={date => setState({ value: date })}
    name='test-date-picker1'
  />
</div>
```

#### Single Date Input with disable date choice
```jsx
import moment from 'moment'

initialState = { value: null};

<div>
  Disable current month
  <SingleDateInput 
    value={state.value}
    onChange={date => setState({ value: date })}
    name='test-date-picker-disable-range'
    isDisabledForDate={day => day.isAfter(moment().startOf('month')) && day.isBefore(moment().endOf('month'))}
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
import { InputGroup, TextInput } from '@Domain/Inputs';

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
