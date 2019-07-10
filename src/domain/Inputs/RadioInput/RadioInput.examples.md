#### Basic Radio Input

 ```jsx
initialState = { value: 'No' };

<div>
  <RadioInput
   name='yes'
   label='Yes'
   value='Yes'
   isChecked={state.value === 'Yes'}
   onChange={(value) => setState({value})}
  />
  <RadioInput
   name='no'
   label='No'
   value='No'
   isChecked={state.value === 'No'}
   onChange={(value) => setState({value})}
  />
  <RadioInput
    isDisabled
    name='no-comment'
    label='No comment (disabled radio)' 
    isChecked={state.value === 'No comment'}
    onChange={(value) => setState({value})}
  />
</div>
```

#### Radio Input Button

```jsx
initialState = { button: 'No' };

<div>
  <RadioInput
   isButton
   name='button-yes'
   label='Yes'
   value='Yes'
   isChecked={state.button === 'Yes'}
   onChange={(value) => setState({button: value})}
  />
  <RadioInput
   isButton
   name='button-no'
   label='No'
   value='No'
   isChecked={state.button === 'No'}
   onChange={(value) => setState({button: value})}
  />
  <RadioInput
    isButton
    isDisabled
    name='button-no-comment'
    label='No comment (disabled radio)' 
    isChecked={state.button === 'No comment'}
    onChange={(value) => setState({button: value})}
  />
</div>
```

 #### Radio Input with JSX

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
   onChange={(value) => setState({star: value})}
  />
  <RadioInput
   name='star-no'
   label={<div><Emoji emoji='cry' /> I don't have a star </div>}
   value='No'
   isChecked={state.star === 'No'}
   onChange={(value) => setState({star: value})}
  />
</div>
```

 #### Radio Input with HandleBlur

 ```jsx
initialState = { value: 'No' };

<div>
  <RadioInput
   handleBlur={() => {setState({value:''}); alert('blur value')}} 
   name='special-yes'
   label='Yes'
   value='Yes'
   isChecked={state.value === 'Yes'}
   onChange={(value) => setState({value})}
  />
  <RadioInput
     handleBlur={() => {setState({value:''}); alert('blur value')}} 
     name='special-no'
     label='No'
     value='No'
     isChecked={state.value === 'No'}
     onChange={(value) => setState({value})}
    />
</div>
```
