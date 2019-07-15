#### Vertical Checkbox Set

```jsx

initialState = { value:{option1: true, option2: false, option3: false} };

<CheckboxSet
  value={state.value}
  name='option'
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        identifier:'option1'
      },
      {
        label:'this is option 2',
        identifier:'option2'
      },
      {
        label:'this is option 3 (I am disabled)',
        identifier:'option3',
        isDisabled: true
      }
    ]}
/>
```

#### Vertical Checkbox Set with tight spacing

```jsx

initialState = { value:{tight1: false, tight2: true, tight3: false} };

<CheckboxSet
  value={state.value}
  name='tight'
  spacing='tight'
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        identifier:'tight1'
      },
      {
        label:'this is option 2',
        identifier:'tight2'
      },
      {
        label:'this is option 3 (I am disabled)',
        identifier:'tight3',
        isDisabled: true
      }
    ]}
/>
```

#### Vertical Checkbox Button Set

```jsx

initialState = { value: {button1: false, button2: false, button3: false} };

<CheckboxSet
  value={state.value}
  name='button'
  useButtonStyle
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        identifier:'button1'
      },
      {
        label:'this is option 2',
        identifier:'button2'
      },
      {
        label:'this is option 3 (I am disabled)',
        identifier:'button3',
        isDisabled: true
      }
    ]}
/>
```

#### Horizontal Checkbox Set

```jsx
import { Props } from '@Common';

initialState = { value:{horizontal1: false, horizontal2: false, horizontal3: false, horizontal4: false, horizontal5: false} };

<CheckboxSet
  value={state.value}
  name='horizontal'
  orientation={Props.Orientation.Horizontal}
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        identifier:'horizontal1'
      },
      {
        label:'this is option 2',
        identifier:'horizontal2'
      },
      {
        label:'this is option 3 (I am disabled)',
        identifier:'horizontal3',
        isDisabled: true
      },
      {
        label:'this is option 4',
        identifier:'horizontal4'
      },
      {
        label:'final option is very looooooooooong',
        identifier:'horizontal5'
      }
    ]}
/>
```

#### Horizontal Checkbox Set with tight spacing

```jsx
import { Props } from '@Common';

initialState = { value:{horizontalTight1: false, horizontalTight2: false, horizontalTight3: false, horizontalTight4: false, horizontalTight5: false} };

<CheckboxSet
  value={state.value}
  name='horizontal-tight'
  orientation={Props.Orientation.Horizontal}
  spacing='tight'
  onChange={(value) => setState({value})}
  options={[
      {
        label:'this is option 1',
        identifier:'horizontalTight1'
      },
      {
        label:'this is option 2',
        identifier:'horizontalTight2'
      },
      {
        label:'this is option 3 (I am disabled)',
        identifier:'horizontalTight3',
        isDisabled: true
      },
      {
        label:'this is option 4',
        identifier:'horizontalTight4'
      },
      {
        label:'final option is very looooooooooong',
        identifier:'horizontalTight5'
      }
    ]}
/>
```
