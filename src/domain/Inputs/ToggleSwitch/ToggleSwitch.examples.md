#### Basic Toggle Switch

```jsx
import { Variables } from '@Common';

initialState = {
  checkbox: false
};


<ToggleSwitch
  name='checkbox2'
  title='This is a Toggle Switch'
  value={state.checkbox}
  onChange={(value) => setState({checkbox: value})}
  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
/>
```
