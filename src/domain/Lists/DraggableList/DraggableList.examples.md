#### Draggable List

```jsx

initialState = {
    items: [
    'lisa',
    'needs',
    'braces',
    'dental plan!',
  ]
};

  <DraggableList items={state.items} setItems={(items) => setState({ items })}>
    {state.items.map(item => (
        <div>
          {item}
        </div>
    ))}
  </DraggableList>
```

