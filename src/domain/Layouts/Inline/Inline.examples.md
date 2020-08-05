The **Inline** is a compositional component that will space each child element an equal distance apart.
The align prop can be used to align items to the left, center, or right of a box.

```jsx
<div style={{width: 166}}>
  <Inline align='left'>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>1</div>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>2</div>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>3</div>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>4</div>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>5</div>
  </Inline>
</div>
```

```jsx
import { LinkButton, Button } from '@Domain/Buttons';

<div>
  <Inline align='left'>
    <Button type='neutral'>
      Archive
    </Button>
    <Inline.Item fill>
      <Button fullWidth type='primary'>
        Create Goal Template
      </Button>
    </Inline.Item>
  </Inline>
</div>
```

When creating responsive layouts, you may want to use the `collapse` prop:

```jsx
<div style={{width: 166}}>
  <Inline align='left' collapse>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>1</div>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>2</div>
    <div style={{width: 50, height: 50, backgroundColor: 'lightblue'}}>3</div>
  </Inline>
</div>
```
