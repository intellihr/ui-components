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

#### Text Input with placeholder

```jsx
initialState = { textValue: '' };

<TextInput
  value={state.textValue}
  placeholder='Input some text here...'
  onChange={(value) => {setState({textValue: value})}}
/>
```

#### Input with handleClear

```jsx
initialState = { textValue: 'I have a clear button' };

<TextInput
  value={state.textValue}
  handleClear={() => {setState({textValue: ''}); alert('clear value')}} 
  onChange={(value) => {setState({textValue: value})}}
/>
```

#### Input with handleBlur

```jsx
initialState = { textValue: '' };

<TextInput
  value={state.textValue}
  placeholder='What is your name?'
  handleBlur={() => {setState({textValue: `Yo! ${state.textValue}`}); alert('blur value')}} 
  onChange={(value) => {setState({textValue: value})}}
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

#### Text Input with Disable Prefix text

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

initialState = { textValue: '' };

<TextInput
  value={state.textValue}
  icon={<FontAwesomeIcon type='facebook' />}
  disabledPrefix='Welcome To Facebook!' 
  placeholder='Input your name...'
  onChange={(value) => {setState({textValue: value})}}
/>
```

#### Text Input with highlightOnFocus

```jsx
initialState = { textValue: 'I will be highlighted when you focus on me' };

<TextInput
  value={state.textValue}
  highlightOnFocus
  onChange={(value) => {setState({textValue: value})}}
/>
```

#### Text Input with custom width

```jsx
initialState = { textValue: 'I have a custom width 500px' };

<TextInput
  value={state.textValue}
  width='500'
  onChange={(value) => {setState({textValue: value})}}
/>
```

