#### Vertical Checkbox Set

```jsx

initialState = { option1: false, option2: false, option3: false, option4: false};

<CheckboxSet
  value={state}
  name='option'
  onChange={(checkedOptionIdentifier) => setState({[checkedOptionIdentifier]: !state[checkedOptionIdentifier]})}
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
      },
      {
        label:'this is option 4 (I have a special action)',
        identifier:'option4',
        onChange: () => { setState({option4: !state.option4}); alert('I have a custom onClick handler!'); }
      }
    ]}
/>
```

#### Vertical Checkbox Set with tight spacing

```jsx

initialState = { tight1: false, tight2: false, tight3: false, tight4: false};

<CheckboxSet
  value={state}
  name='tight'
  spacing='tight'
  onChange={(checkedOptionIdentifier) => setState({[checkedOptionIdentifier]: !state[checkedOptionIdentifier]})}
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
      },
      {
        label:'this is option 4 (I have a special action)',
        identifier:'tight4',
        onChange: () => {setState({tight4: !state.tight4}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Vertical Checkbox Button Set

```jsx

initialState = { button1: false, button2: false, button3: false, button4: false};

<CheckboxSet
  value={state}
  name='button'
  useButtonStyle
  onChange={(checkedOptionIdentifier) => setState({[checkedOptionIdentifier]: !state[checkedOptionIdentifier]})}
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
      },
      {
        label:'this is option 4 (I have a special action)',
        identifier:'button4',
        onChange: () => {setState({button4: !state.button4}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Horizontal Checkbox Set

```jsx
import { Props } from '@Common';

initialState = { horizontal1: false, horizontal2: false, horizontal3: false, horizontal4: false};

<CheckboxSet
  value={state}
  name='horizontal'
  orientation={Props.Orientation.Horizontal}
  onChange={(checkedOptionIdentifier) => setState({[checkedOptionIdentifier]: !state[checkedOptionIdentifier]})}
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
        label:'this is option 4 (I have a special action)',
        identifier:'horizontal4',
        onChange: () => {setState({horizontal4: !state.horizontal4}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```

#### Horizontal Checkbox Set with tight spacing

```jsx
import { Props } from '@Common';

initialState = { horizontalTight1: false, horizontalTight2: false, horizontalTight3: false, horizontalTight4: false};

<CheckboxSet
  value={state}
  name='horizontal-tight'
  orientation={Props.Orientation.Horizontal}
  spacing='tight'
  onChange={(checkedOptionIdentifier) => setState({[checkedOptionIdentifier]: !state[checkedOptionIdentifier]})}
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
        label:'this is option 4 (I have a special action)',
        identifier:'horizontalTight4',
        onChange: () => {setState({horizontalTight4: !state.horizontalTight4}); alert('I have a custom onClick handler!');}
      }
    ]}
/>
```
