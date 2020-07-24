The **Inline** is a compositional component that will space each child element an equal distance apart.
The align prop can be used to align items to the left, center, or right of a box.

```jsx
import { LinkButton, Button } from '@Domain/Buttons';

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
