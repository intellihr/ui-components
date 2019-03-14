#### Basic Input

 ```jsx
initialState = { value: 'No' };

<div>
  <RadioInput
   name='yes'
   label='Yes'
   value='Yes'
   isChecked={state.value === 'Yes'}
   handleChange={(event) => setState({value: event.target.value})}
  />
  <RadioInput
   name='no'
   label='No'
   value='No'
   isChecked={state.value === 'No'}
   handleChange={(event) => setState({value: event.target.value})}
  />
  <RadioInput
    isDisabled
    name='no-comment'
    label='No comment (disabled radio)' 
    isChecked={state.value === 'No comment'}
    handleChange={(event) => setState({value: event.target.value})}
  />
</div>
```

#### Input Button

```jsx
initialState = { button: 'No' };

<div>
  <RadioInput
   isButton
   name='button-yes'
   label='Yes'
   value='Yes'
   isChecked={state.button === 'Yes'}
   handleChange={(event) => setState({button: event.target.value})}
  />
  <RadioInput
   isButton
   name='button-no'
   label='No'
   value='No'
   isChecked={state.button === 'No'}
   handleChange={(event) => setState({button: event.target.value})}
  />
  <RadioInput
    isButton
    isDisabled
    name='button-no-comment'
    label='No comment (disabled radio)' 
    isChecked={state.button === 'No comment'}
    handleChange={(event) => setState({button: event.target.value})}
  />
</div>
```

 #### Input with JSX

 ```jsx
import { FontAwesomeIcon } from '@Domain/Icons';
import { Emoji } from '@Domain/Typographies';

initialState = { star: 'Yes' };

<div>
  <RadioInput
   name='star-yes'
   label={<div><FontAwesomeIcon type='star' /> I have a star!</div>}
   value='Yes'
   isChecked={state.star === 'Yes'}
   handleChange={(event) => setState({star: event.target.value})}
  />
  <RadioInput
   name='star-no'
   label={<div><Emoji emoji='cry' /> I don't have a star </div>}
   value='No'
   isChecked={state.star === 'No'}
   handleChange={(event) => setState({star: event.target.value})}
  />
</div>
```
