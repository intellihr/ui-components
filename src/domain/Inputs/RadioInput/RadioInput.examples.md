#### Basic Input

 ```jsx
<RadioInput
  name='example-radio'
  label='This is a radio input'
/>
```

#### Disable Input

 ```jsx
<RadioInput
  isDisabled
  name='disable-radio'
  label='This is a disabled radio input'
/>
```

 #### Input Button

 ```jsx
<RadioInput
  isButton
  name='button-checkbox'
  label='This is a radio input button'
/>
```

 #### Disabled Input Button

 ```jsx
<RadioInput
  isButton
  isDisabled
  name='button-disabled-checkbox'
  label='This is a disabled radio input button'
/>
```

 #### Input with JSX

 ```jsx
const { FontAwesomeIcon } = require('../../Icons');
 <RadioInput
  name='star-checkbox'
  label={<div><FontAwesomeIcon type='star' /> I am a star</div>}
/>
