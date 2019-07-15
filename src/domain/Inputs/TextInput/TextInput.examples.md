#### Basic Text Input

```jsx
initialState = { textValue: 'I am a text input' };

<TextInput
  value={state.textValue}
  onChange={(value) => {setState({textValue: value})}}
/>
```

#### Invalid Text Input

```jsx
initialState = { textValue: 'I am invalid' };

<TextInput
  isInvalid
  value={state.textValue}
  onChange={(value) => {setState({textValue: value})}}
/>
```

#### Disabled Text Input

```jsx
initialState = { textValue: 'I am disabled and cannot change' };

<TextInput
  isDisabled
  value={state.textValue}
  onChange={(value) => {setState({textValue: value})}}
/>
```

#### Text Input with Placeholder

```jsx
initialState = { value: '' };

<TextInput
  value={state.value}
  placeholder='Input some text here...'
  onChange={(value) => {setState({value})}}
/>
```

#### Text Input with HandleClear

```jsx
initialState = { value: 'I have a clear button' };

<TextInput
  value={state.value}
  handleClear={() => {setState({value: ''}); alert('clear value')}} 
  onChange={(value) => {setState({value})}}
/>
```

#### Text Input with HandleBlur

```jsx
initialState = { value: '' };

<TextInput
  value={state.value}
  placeholder='What is your name?'
  handleBlur={() => {setState({value: `Yo! ${state.value}`}); alert('blur value')}} 
  onChange={(value) => {setState({value})}}
/>
```

#### Text Input with Icon

```jsx
import { FontAwesomeIcon, IntelliIcon } from '@Domain/Icons';

initialState = { textValue1: '', textValue2: ''  };

<div>
  FontAwesomeIcon
  <TextInput
    value={state.textValue1}
    icon={<FontAwesomeIcon type='facebook' />}
    onChange={(value) => {setState({textValue1: value})}}
  />
  IntelliIcon
  <TextInput
    value={state.textValue2}
    icon={<IntelliIcon type='search' />}
    onChange={(value) => {setState({textValue2: value})}}
  />
</div>
```

#### Text Input with Disable Prefix Text

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = { value: '' };

<TextInput
  value={state.value}
  icon={<FontAwesomeIcon type='facebook' />}
  disabledPrefix='Welcome To Facebook!' 
  placeholder='Input your name...'
  onChange={(value) => {setState({value})}}
/>
```

#### Text Input with HighlightOnFocus

```jsx
initialState = { value: 'I will be highlighted when you focus on me' };

<TextInput
  value={state.value}
  highlightOnFocus
  onChange={(value) => {setState({value})}}
/>
```

#### Text Input with Custom Width

```jsx
initialState = { value: 'I have a custom width 500px' };

<TextInput
  value={state.value}
  width='500'
  onChange={(value) => {setState({value})}}
/>
```

