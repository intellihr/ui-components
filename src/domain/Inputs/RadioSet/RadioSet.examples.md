#### Vertical Radio Set

```jsx
initialState = { value: 'option 1' };

<RadioSet
  name='example-radio-set'
  value={state.value}
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        value:'option 1',
      },
      {
        label:'this is option 2 (I am disabled)',
        value:'option 2',
        isDisabled:true
      },
      {
        label:'this is option 3',
        value:'option 3',
      },
      {
        label:'this is option 4 (I have a special action)',
        value:'option 4',
        onChange: (value) => { setState({value}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Radio Set with tight spacing

```jsx
initialState = { value: 'option 1' };

<RadioSet
  name='example-radio-set-tight'
  spacing='tight'
  value={state.value}
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        value:'option 1',
      },
      {
        label:'this is option 2 (I am disabled)',
        value:'option 2',
        isDisabled:true
      },
      {
        label:'this is option 3',
        value:'option 3',
      },
      {
        label:'this is option 4 (I have a special action)',
        value:'option 4',
        onChange: (value) => { setState({value}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Radio Button Set

```jsx
initialState = { value: 'option 1' };

<RadioSet
  name='example-radio-set-button'
  value={state.value}
  useButtonStyle
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        value:'option 1'
      },
      {
        label:'this is option 2 (I am disabled)',
        value:'option 2',
        isDisabled:true
      },
      {
        label:'this is option 3',
        value:'option 3',
      },
      {
        label:'this is option 4 (I have a special action)',
        value:'option 4',
        handleChange: (value) => { setState({value}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Horizontal Radio Set

```jsx
import { Props } from '@Common';

initialState = { value: 'option 1' };

<div>
  Horizontal Radio Set
  <RadioSet
    name='example-radio-set-horizontal'
    value={state.value}
    orientation={Props.Orientation.Horizontal}
    onChange={(value) => setState({value})}
    options={[
        {
          label:'this is option 1',
          value:'option 1'
        },
        {
          label:'this is option 2 (I am disabled)',
          value:'option 2',
          isDisabled:true
        },
        {
          label:'this is option 3',
          value:'option 3'
        },
        {
          label:'this is option 4 (I have a special action)',
          value:'option 4',
          isDisabled:false,
          onChange: (value) => { setState({value}); alert('I have a custom onClick handler!');}
        },
        {
          label:'final option is very looooooooooong',
          value:'option 5'
        },
      ]}
  />
</div>
```

#### Horizontal Radio Set with tight spacing

```jsx
import { Props } from '@Common';

initialState = { value: 'option 1' };

<div>
  Horizontal Radio Set
  <RadioSet
    name='example-radio-set-horizontal-tight'
    value={state.value}
    spacing='tight'
    orientation={Props.Orientation.Horizontal}
    onChange={(value) => setState({value})}
    options={[
        {
          label:'this is option 1',
          value:'option 1'
        },
        {
          label:'this is option 2 (I am disabled)',
          value:'option 2',
          isDisabled:true
        },
        {
          label:'this is option 3',
          value:'option 3'
        },
        {
          label:'this is option 4 (I have a special action)',
          value:'option 4',
          isDisabled:false,
          onChange: (value) => { setState({value}); alert('I have a custom onClick handler!');}
        },
        {
          label:'final option is very looooooooooong',
          value:'option 5'
        },
      ]}
  />
</div>
```
