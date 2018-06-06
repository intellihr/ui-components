# Spinner

## Three Bounce Spinner

```jsx
  <Spinner
    type='three-bounce'
    size={50}
  />
```

## Circle Spinner

```jsx
  <Spinner
    type='fading-circle'
    size={50}
  />
```

## Position Styles

### Left

```jsx
  <Spinner
    type='three-bounce'
    position='left'
  />
```

### Center

```jsx
  <Spinner
    type='three-bounce'
    position='center'
  />
```

### Right

```jsx
  <Spinner
    type='three-bounce'
    position='right'
  />
```

### Inline

```jsx
  <div>
      Hey this is some text
      <Spinner
        type='three-bounce'
        position='inline'
      />
      And look at me spin!
  </div>
```

### Page

```jsx
initialState = { showSpinner: false };

<div>
  <Button onClick={() => setState({ showSpinner: !state.showSpinner })}>{state.showSpinner ? 'Hide' : 'Show'} Page Spinner</Button>
  {state.showSpinner ? 
      <Spinner 
        type='three-bounce'
        position='page' 
        color='green' 
        size={100} 
      /> 
  : null}
</div>
```
