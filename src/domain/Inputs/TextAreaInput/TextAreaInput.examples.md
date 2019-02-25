#### Text Area Input

```jsx
initialState = { value: '' };

<div>
  <TextAreaInput
    value={state.value}
    handleChange={(e) => setState({value: e.value})}
  />
</div>
```

#### Disabled text area

```jsx
initialState = { value: '' };

<div>
  <TextAreaInput
    value={state.value}
    handleChange={(e) => setState({value: e.value})}
    isDisabled
    value="Text area is disabled so you can't change this text"
  />
</div>
```

#### Customize with props

```jsx
initialState = { value: '' };

<div>
  <TextAreaInput
    value={state.value}
    handleChange={(e) => setState({value: e.value})}
    rows={8}
    placeholder="Hey I'm placeholder text. Hodor. John Wick."
  />
</div>
```
