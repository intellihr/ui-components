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
