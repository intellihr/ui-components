####The two main components of the grid system are `Row` and `Col`.

A `Row` is a wrapper build on top of `react-styled-flexboxgrid` that will handle the alignment of all the `Col` children
that are passed to it.

`Col` components will take a set of properties (`xs`, `sm`, `md`, `lg`) that 
will define what portion of the row (out of 12 by default) the column should 
take for each breakpoint.

```jsx
    <div>
   <Row>
      <Column xs={6} md={3}>My First Row</Column>
    </Row>
    <Row>
       <Column xs={6} md={3}>My Second Row</Column>
     </Row>
     </div>
```

In this example, a row has two columns which will each take half of the width of the 
row on `xs` screens, and 1/4 of the width on `md` screens.
