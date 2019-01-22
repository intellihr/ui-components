The GridLayout is a layout component inspired by Foundation's [XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html) with
support for being used within react components.

#### Simple sizing (different screen sizes)

GridLayout works off a 12 position based grid. Any cells going off this will be positioned on the next row.
Cell sizing work from the given size upwards, and will default to 12 otherwise.
To size for all screen positions, use `min: X`

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout
  cells={[
    {
      size: { min: 10 },
      content: <div style={style}/>
    },
    {
      size: { min: 2 },
      content: <div style={style}/>
    },
    {
      size: { desktop: 3, tablet: 4 },
      content: <div style={style}/>
    },
    {
      size: { desktop: 6, tablet: 4 },
      content: <div style={style}/>
    },
    {
      size: { desktop: 3, tablet: 4 },
      content: <div style={style}/>
    }
  ]}
/>
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

<GridLayout
  cells={[
    {
      size: { desktop: 'shrink', min: 'auto' },
      content: <div style={styleSmall}>I shrink to my content :)</div>
    },
    {
      size: 'auto',
      content: <div style={style} />
    }
  ]}
/>
```

#### Gutters

Gutters can be added as margins and/or as padding between cells. Generally, you'll want to use margins,
as these won't change the width of the underlying cells (so elements will size correctly to their parents.)

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout
  gutterMarginX='medium'
  gutterMarginY='small'
  cells={[
    {
      size: { min: 10 },
      content: <div style={style}/>
    },
    {
      size: { min: 2 },
      content: <div style={style}/>
    },
    {
      size: { desktop: 3, tablet: 4 },
      content: <div style={style}/>
    },
    {
      size: { desktop: 6, tablet: 4 },
      content: <div style={style}/>
    },
    {
      size: { desktop: 3, tablet: 4 },
      content: <div style={style}/>
    }
  ]}
/>
```

Padding can be useful for spacing text and other elements without needing wrappers, but should generally be
avoided unless you have a good use case:

```jsx
const { Variables } = require('@Common');

let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';

<GridLayout
  gutterMarginX='small'
  gutterMarginY='small'
  cells={[
    {
      size: { min: 4 },
      content: text
    },
    {
      size: { min: 4 },
      content: text
    },
    {
      size: { min: 4 },
      content: text
    },
    {
      size: { min: 4 },
      content: text
    },
    {
      size: { min: 4 },
      content: text
    }
  ]}
/>
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

<GridLayout
  cells={[
    {
      size: { min: 4 },
      offset: { desktop: 7 },
      content: <div style={style}/>
    },
    {
      size: { min: 1 },
      content: <div style={style}/>
    }
  ]}
/>
```

#### Horizontal Alignment

Horizontal alignment can be applied to the grid to affect the items within it.

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  width: '100%',
  textAlign: 'center'
};

<>
  <GridLayout>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>the left</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Right}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>the right</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Center}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>the center</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Justify}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>the edges</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Spaced}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>the space around</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
</>
```

#### Vertical Alignment

Vertical alignment can be applied to the grid to affect the items within it.

```jsx
const { Variables } = require('@Common');
const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  width: '100%',
  height: '100%',
  textAlign: 'center'
};

<>
  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Top}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to the top (default)</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros consequat ex faucibus pellentesque nec non ipsum. Nulla facilisis libero vitae nisi varius ultricies. Nullam aliquet sollicitudin luctus. Donec sit amet risus et est pellentesque consectetur. Cras eu nisl est. Quisque auctor magna at nulla ultrices, non molestie tortor iaculis.</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to the middle</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros consequat ex faucibus pellentesque nec non ipsum. Nulla facilisis libero vitae nisi varius ultricies. Nullam aliquet sollicitudin luctus. Donec sit amet risus et est pellentesque consectetur. Cras eu nisl est. Quisque auctor magna at nulla ultrices, non molestie tortor iaculis.</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Bottom}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Aligned to the bottom</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros consequat ex faucibus pellentesque nec non ipsum. Nulla facilisis libero vitae nisi varius ultricies. Nullam aliquet sollicitudin luctus. Donec sit amet risus et est pellentesque consectetur. Cras eu nisl est. Quisque auctor magna at nulla ultrices, non molestie tortor iaculis.</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Stretch}>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Stretched to have the same height</span>
      </div>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ min: 4 }}>
      <div style={style}>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros consequat ex faucibus pellentesque nec non ipsum. Nulla facilisis libero vitae nisi varius ultricies. Nullam aliquet sollicitudin luctus. Donec sit amet risus et est pellentesque consectetur. Cras eu nisl est. Quisque auctor magna at nulla ultrices, non molestie tortor iaculis.</span>
      </div>
    </GridLayout.Cell>
  </GridLayout>
</>
```
