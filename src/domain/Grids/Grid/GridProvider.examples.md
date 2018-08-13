#### Grid system organisation

React Context API is used through `styled-components`'s Theme Provider 
(https://www.styled-components.com/docs/advanced) to allow the consumer to 
pass the breakpoints and other parameters used in the grid system to the 
ui-component code base.

The npm package used for the grid system is *react-styled-flexboxgrid* 
(https://github.com/LoicMahieu/react-styled-flexboxgrid).
This package is build on top of *react-flexbox-grid* (https://github.com/roylee0704/react-flexbox-grid)
and because it is built using `styled-components` it gives us the ability 
to pass some parameters through the ThemeProvider.

The two main components of the grid system are `Row` and `Column`.

A `Row` is a wrapper that will handle the alignment of all the `Column` children
that are passed to it.

`Column` components will take a set of properties (`sm`, `md`, `lg`) that 
will define what portion of the row (out of 12 by default) the column should 
take for each breakpoint.

### Responsive
Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution 
at sm, md & lg viewport widths.

```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight:'1rem',
  border:'1px solid #fff'
};
<div>
<Row>
  <Column sm={12} md={2} style={style}/>
  <Column sm={12} md={8} style={style}/>
  <Column sm={12} md={2} style={style}/>
</Row>
<Row>
  <Column sm={3} md={2} style={style}/>
  <Column sm={9} md={10} style={style}/>
</Row>
<Row>
  <Column sm={12} md={8} style={style}/>
  <Column sm={12} md={4} style={style}/>
</Row>
</div>
```

### Offsets
Offset a column.

```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight:'1rem',
  border:'1px solid #fff'
};

<Row>
  <Column mdOffset={11} md={1} style={style}></Column>
  <Column mdOffset={10} md={2} style={style}></Column>
  <Column mdOffset={9} md={3} style={style}></Column>
  <Column mdOffset={8} md={4} style={style}></Column>
  <Column mdOffset={7} md={5} style={style}></Column>
  <Column mdOffset={6} md={6} style={style}></Column>
  <Column mdOffset={5} md={7} style={style}></Column>
  <Column mdOffset={4} md={8} style={style}></Column>
  <Column mdOffset={3} md={9} style={style}></Column>
  <Column mdOffset={2} md={10} style={style}></Column>
  <Column mdOffset={1} md={11} style={style}></Column>
</Row>
```

### Auto Width
Add any number of auto sizing columns to a row. Let the grid figure it out.
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight:'1rem',
  border:'1px solid #fff'
};
<div>
  <Row>
    <Column md style={style}/>
    <Column md style={style}/>
  </Row>
  <Row>
    <Column md style={style}/>
    <Column md style={style}/>
    <Column md style={style}/>
  </Row>
</div>
```

### Alignment
Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column

.start-
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight:'1rem',
  border:'1px solid #fff'
};
<Row>
  <Column md={12}>
    <Row start="md">
      <Column md={6} style={style}/>
    </Row>
  </Column>
</Row>
```
.center-
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight:'1rem',
  border:'1px solid #fff'
};
<Row>
  <Column md={12}>
    <Row center="md">
      <Column md={6} style={style}/>
    </Row>
  </Column>
</Row>
```

.end-
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight:'1rem',
  border:'1px solid #fff'
};
<Row>
  <Column md={12}>
    <Row end="md">
      <Column md={6} style={style}/>
    </Row>
  </Column>
</Row>
```

.top-
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const styleLeftColumn = {
  backgroundColor:'#432DF3',
  minHeight: '8rem',
  borderRight:'1px solid #fff'
};
const styleRightColumn = {
  backgroundColor:'#432DF3',
  minHeight:'1rem'
};
<Row top="md">
  <Column md={6} style={styleLeftColumn}>Column 1 </Column>
  <Column md={6} style={styleRightColumn}>Column 2 </Column>
</Row>
```
.middle-
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const styleLeftColumn = {
  backgroundColor:'#432DF3',
  minHeight: '8rem',
  borderRight:'1px solid #fff'
};
const styleRightColumn = {
  backgroundColor:'#432DF3',
  minHeight:'1rem'
};
<Row middle="md">
  <Column md={6} style={styleLeftColumn}/>
  <Column md={6} style={styleRightColumn}/>
</Row>
```

.bottom-
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const styleLeftColumn = {
  backgroundColor:'#432DF3',
  minHeight: '8rem',
  borderRight:'1px solid #fff'
};
const styleRightColumn = {
  backgroundColor:'#432DF3',
  minHeight:'1rem'
};
<Row bottom="md">
  <Column md={6} style={styleLeftColumn}/>
  <Column md={6} style={styleRightColumn}/>
</Row>
```

### Distribution
Add classes to distribute the contents of a row or column.

.around-
```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight: '1rem',
  borderRight:'1px solid #fff'
};
<Row around="md">
  <Column md={2} style={style}/>
  <Column md={2} style={style}/>
  <Column md={2} style={style}/>
</Row>
```
.between-

```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight: '1rem',
  borderRight:'1px solid #fff'
};
<Row between="md">
  <Column md={2} style={style}/>
  <Column md={2} style={style}/>
  <Column md={2} style={style}/>
</Row>
```

Hide

You can simply hide some elements for a given breakpoint by passing `false` to the breakpoint properties.

```jsx
const { Row } = require('../Row');
const { Column } = require('../Column');
const style = {
  backgroundColor:'#432DF3',
  minHeight: '1rem',
  borderRight:'1px solid #fff'
};
<Row>
  <Column sm={12} md={6} style={style}/>
  <Column md={false} sm={6} style={style}/>
</Row>
```
