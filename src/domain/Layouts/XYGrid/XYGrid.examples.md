The XYGrid is a wrapper for Foundation's [XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html) with
support for being used within react components.

#### Simple sizing (different screen sizes)

XYGrid works off a 12 position based grid. Any cells going off this will be positioned on the next row.
Cell sizing work from the given size upwards, and will default to 12 otherwise.
To size for all screen positions, use `small: X`

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<XYGrid>
  <XYGrid.Cell size={{ min: 10 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ min: 2 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 3, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 6, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 3, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
</XYGrid>
```

#### Auto and shrink cells

`shrink` will fit the cell to its content. `auto` will expand the cell to the rest of its row,
shared between every cell with auto sizing.
These options can be provided on a size basis or for the entire size on every screen.

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};
const styleSmall = {
  backgroundColor: Variables.Color.g200,
  border: `2px solid ${Variables.Color.n100}`,
  color: Variables.Color.g600,
  padding: '6px'
};

<XYGrid>
  <XYGrid.Cell size={{ desktop: 'shrink', min: 'auto' }}>
    <div style={styleSmall}>I shrink to my content :)</div>
  </XYGrid.Cell>
  <XYGrid.Cell size='auto'>
    <div style={style} />
  </XYGrid.Cell>
</XYGrid>
```

#### Gutters

Gutters can be added as margins and/or as padding between cells

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<XYGrid
  gutterMarginX
  gutterMarginY
>
  <XYGrid.Cell size={{ min: 10 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ min: 2 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 3, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 6, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 3, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
</XYGrid>
```

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<XYGrid
  gutterPaddingX
  gutterPaddingY
>
  <XYGrid.Cell size={{ min: 10 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ min: 2 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 3, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 6, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ desktop: 3, tablet: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
</XYGrid>
```

#### Offsets

Offsets can be added to cells to position them at a column distance from the side of the grid.
These offsets can optionally change depending upon the breakpoints as well.

The following will be offset on desktop, but not on smaller sizes:

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<XYGrid>
  <XYGrid.Cell size={{ min: 4 }} offset={{ desktop: 2 }}>
    <div style={style}/>
  </XYGrid.Cell>
  <XYGrid.Cell size={{ min: 4 }}>
    <div style={style}/>
  </XYGrid.Cell>
</XYGrid>
```

#### Vertical Grids

Grids can be made vertical easily using the `vertical` prop.
Note that vertical grids behave slightly differently to horizontal grids - they do not stack
onto multiple columns, and any extra size over the default 12 will extend below the bottom
of the container.

Vertical grids will always expand to fit their container's height. If the parent has no defined
height, then they won't expand. This can be a bit of a gotcha, so be warned.

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};
const styleSmall = {
  backgroundColor: Variables.Color.g200,
  border: `2px solid ${Variables.Color.n100}`,
  color: Variables.Color.g600,
  padding: '6px'
};

<div style={{ height: '500px' }}>
  <XYGrid
    gutterMarginY
    vertical
  >
    <XYGrid.Cell size={{ min: 'shrink' }}>
      <div style={styleSmall}>This cell shrinks to fit</div>
    </XYGrid.Cell>
    <XYGrid.Cell size={{ min: 'auto' }}>
      <div style={style}/>
    </XYGrid.Cell>
    <XYGrid.Cell size={{ min: 'auto' }}>
      <div style={style}/>
    </XYGrid.Cell>
  </XYGrid>
</div>
```

Vertical grids can be used as a makeshift stack when no sizes are provided:
 
```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n200,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  padding: '6px',
  width: '100px'
};

<XYGrid
  gutterMarginY
  vertical
>
  <XYGrid.Cell>
    <div style={style}>cell</div>
  </XYGrid.Cell>
  <XYGrid.Cell>
    <div style={style}>cell</div>
  </XYGrid.Cell>
  <XYGrid.Cell>
    <div style={style}>cell</div>
  </XYGrid.Cell>
  <XYGrid.Cell>
    <div style={style}>cell</div>
  </XYGrid.Cell>
  <XYGrid.Cell>
    <div style={style}>cell</div>
  </XYGrid.Cell>
</XYGrid>
```

#### Legacy (non-react) support

Grids use the same classes as Foundation's XY grid, except instead of `grid-x`,
`grid-y` and `cell` the `ihr-grid-x`, `ihr-grid-y` and `ihr-cell` prefixes are used.

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<div class="ihr-grid-x grid-margin-x">
  <div class="ihr-cell min-10">
    <div style={style}/>
  </div>
  <div class="ihr-cell min-2">
    <div style={style}/>
  </div>
  <div class="ihr-cell desktop-3 tablet-4">
    <div style={style}/>
  </div>
  <div class="ihr-cell desktop-6 tablet-4">
    <div style={style}/>
  </div>
  <div class="ihr-cell desktop-3 tablet-4">
    <div style={style}/>
  </div>
</div>
```
