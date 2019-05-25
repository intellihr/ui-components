The GridLayout is a layout component inspired by Foundation's [XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html) with
support for being used within react components.

#### Simple sizing (different screen sizes)

GridLayout works using a 12 position-based grid.
Any cells exceeding this will be positioned on the next row.

Sizes can be given for all screen breakpoints, or can be
individualised per breakpoint using `{ min: X, tablet: Y}` setup.

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout>
    <GridLayout.Cell size={10}>
      <div style={style}/>
    </GridLayout.Cell>
    <GridLayout.Cell size={2}>
      <div style={style}/>
    </GridLayout.Cell>
    <GridLayout.Cell size={{  desktop: 3, tablet: 4 }}>
      <div style={style}/>
    </GridLayout.Cell>
    <GridLayout.Cell size={{  desktop: 6, tablet: 4 }}>
      <div style={style}/>
    </GridLayout.Cell>
    <GridLayout.Cell size={{  desktop: 3, tablet: 4 }}>
      <div style={style}/>
    </GridLayout.Cell>
</GridLayout>
```

#### Auto, shrink and fullWidth cells

`shrink` will fit the cell to its content. `auto` will expand the cell to the rest of its row,
shared between every cell with auto sizing.
These options can be provided on a per-breakpoint basis or as an overall size across all
breakpoints.

```jsx
import { Variables } from '@Common';

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

<GridLayout>
  <GridLayout.Cell size = {{  desktop: 'shrink', min: 'auto' }}>
    <div style={styleSmall}>I shrink to my content :)</div>
  </GridLayout.Cell>
  <GridLayout.Cell size = {'auto'}>
    <div style={style} />
  </GridLayout.Cell>
</GridLayout>
```

`size: 'fullWidth'` is a synonym for `size: 12` and can be semantically used wherever a full
width cell is desired. The following will be three fullWidth cells on tablet or lower sizes:

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout>
  <GridLayout.Cell size = {{  desktop: 3, min: 'fullWidth' }}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 6, min: 'fullWidth' }}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 3, min: 'fullWidth' }}>
    <div style={style} />
  </GridLayout.Cell>
</GridLayout>
```

#### Gutters

Gutters can be added as margins and/or as padding between cells. Generally, you'll want to use margins,
as these won't change the width of the underlying cells (so elements will size correctly to their parents.)

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout
  gutterMarginX={Variables.Spacing.sMedium}
  gutterMarginY={Variables.Spacing.sSmall}
>
  <GridLayout.Cell size = {10}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {2}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 3, tablet: 4 }}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 6, tablet: 4 }}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 3, tablet: 4 }}>
    <div style={style} />
  </GridLayout.Cell>
</GridLayout>
```

Padding can be useful for spacing text and other elements without needing wrappers, but should generally be
avoided unless you have a good use case:

```jsx
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';

<GridLayout
  gutterPaddingX={Variables.Spacing.sSmall}
  gutterPaddingY={Variables.Spacing.sSmall}
>
  <GridLayout.Cell size = {4}>
    {text}
  </GridLayout.Cell>
  <GridLayout.Cell size = {4}>
    {text}
  </GridLayout.Cell>
  <GridLayout.Cell size = {4}>
    {text}
  </GridLayout.Cell>
  <GridLayout.Cell size = {4}>
    {text}
  </GridLayout.Cell>
  <GridLayout.Cell size = {4}>
    {text}
  </GridLayout.Cell>
</GridLayout>
```

Gutters support all sizes taken from `Spacing` and `Layout`:

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<>
  <GridLayout
    gutterMarginX={Variables.Spacing.s2XSmall}
  >
    <GridLayout.Cell size={6}>
      <div style={style}>spacing-2xsmall gutters</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={6}>
       <div style={style}/>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout
    gutterMarginX={Variables.Spacing.sMedium}
  >
    <GridLayout.Cell size={6}>
      <div style={style}>spacing-medium gutters</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={6}>
       <div style={style}/>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout
    gutterMarginX={Variables.Layout.lLarge}
  >
    <GridLayout.Cell size={6}>
      <div style={style}>layout-large gutters</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={6}>
       <div style={style}/>
    </GridLayout.Cell>
  </GridLayout>
</>
```

Gutters also support being customised per breakpoint. The following will have large gutters
on desktop but small gutters on mobile:

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout
  gutterMarginX={{ desktop: Variables.Spacing.sLarge, min: Variables.Spacing.sSmall }}
  gutterMarginY={{ desktop: Variables.Spacing.sLarge, min: Variables.Spacing.sSmall }}
>
  <GridLayout.Cell size = {10}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {2}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 3, tablet: 4 }}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 6, tablet: 4 }}>
    <div style={style} />
  </GridLayout.Cell>
  <GridLayout.Cell size = {{  desktop: 3, tablet: 4 }}>
    <div style={style} />
  </GridLayout.Cell>
</GridLayout>
```
#### Offsets

Offsets can be added to cells to position them at a column distance from the side of the grid.
These offsets can optionally change depending upon the breakpoints as well.

The following will be offset on desktop, but not on smaller sizes:

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout>
  <GridLayout.Cell size={4} offset={{  desktop: 7 }}>
    <div style={style}/>
  </GridLayout.Cell>
  <GridLayout.Cell size={1}>
    <div style={style}/>
  </GridLayout.Cell>
</GridLayout>
```

#### Horizontal Alignment

Horizontal alignment can be applied to the grid to affect the items within it.

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  width: '100%',
  textAlign: 'center'
};

<>
  <GridLayout>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
      <div style={style}>the left (default)</div>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Right}>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
      <div style={style}>the right</div>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Center}>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
        <div style={style}>the center</div>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Justify}>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
        <div style={style}>push to the edges</div>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout horizontalAlignment={GridLayout.HorizontalAlignment.Spaced}>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
        <div style={style}>spread evenly</div>
    </GridLayout.Cell>
  </GridLayout>
</>

```
Horizontal alignment also support being customised per breakpoint. The following will have left horizontal alignment
on desktop but right horizontal alignment on mobile:

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  width: '100%',
  textAlign: 'center'
};

<GridLayout horizontalAlignment={{ desktop: GridLayout.HorizontalAlignment.Left, min: GridLayout.HorizontalAlignment.Right }}>
  <GridLayout.Cell size={4}>
    <div style={style}>Aligned to Left in desktop</div>
  </GridLayout.Cell>
  <GridLayout.Cell size={4}>
    <div style={style}>right in mobile</div>
  </GridLayout.Cell>
</GridLayout>

```
#### Vertical Alignment

Vertical alignment can be applied to the grid to affect the items within it.

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  width: '100%',
  height: '100%',
  textAlign: 'center'
};
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros consequat ex faucibus pellentesque nec non ipsum. Nulla facilisis libero vitae nisi varius ultricies. Nullam aliquet sollicitudin luctus. Donec sit amet risus et est pellentesque consectetur. Cras eu nisl est. Quisque auctor magna at nulla ultrices, non molestie tortor iaculis.';

<>
  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Top}>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to the top</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to the middle</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Bottom}>
    <GridLayout.Cell size={4}>
      <div style={style}>Aligned to the bottom</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
  </GridLayout>

  <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Stretch}>
    <GridLayout.Cell size={4}>
      <div style={style}>Stretched to have the same height (default behaviour)</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
  </GridLayout>
</>
```

Vertical alignment also support being customised per breakpoint. The following will have top vertical alignment
on desktop but bottom vertical alignment on mobile:

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  width: '100%',
  height: '100%',
  textAlign: 'center'
};
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros consequat ex faucibus pellentesque nec non ipsum. Nulla facilisis libero vitae nisi varius ultricies. Nullam aliquet sollicitudin luctus. Donec sit amet risus et est pellentesque consectetur. Cras eu nisl est. Quisque auctor magna at nulla ultrices, non molestie tortor iaculis.';

<GridLayout verticalAlignment={{ desktop: GridLayout.VerticalAlignment.Top, min: GridLayout.VerticalAlignment.Bottom }}>
    <GridLayout.Cell size={4}>
      <div style={style}>Alignment change with breakpoint</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={4}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
</GridLayout>
```

#### Cell Alignment

Cell alignment can be applied to the grid cell to affect the cell content.
```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem'
};

<GridLayout
  cells={[
          {
            size: 4,
            displayType: 'flex',
            content: <div style={style}>aligned to left</div>,
            flexHorizontalAlignment: GridLayout.HorizontalAlignment.Left
          },
          {
            size: 4,
            displayType: 'flex',
            content: <div style={style}>aligned to center</div>,
            flexHorizontalAlignment: GridLayout.HorizontalAlignment.Center
          },
          {
            size: 4,
            displayType: 'flex',
            content: <div style={style}>aligned to right</div>,
            flexHorizontalAlignment: GridLayout.HorizontalAlignment.Right
          }
        ]}
/>
```

Cell alignment also support being customised per breakpoint. The following will have right cell alignment
on desktop but center cell alignment on mobile:
```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem'
};

<GridLayout
  cells={[
          {
            size: 2,
            content: <div style={style}>normal content</div>
          },
          {
            size: 10,
            displayType: 'flex',
            content: <div style={style}>right in desktop, center in mobile</div>,
            flexHorizontalAlignment: { desktop: GridLayout.HorizontalAlignment.Right, min: GridLayout.HorizontalAlignment.Center}
          }
        ]}
/>
```

#### Alternate grid patterns

Grids don't __have__ to be 12 grids. The `gridColumns` prop lets you specify the number
of columns cells are given in. Note that giving numbers smaller than the cells will
cause funky behaviour.

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

<GridLayout gridColumns={20}>
    <GridLayout.Cell size={10}>
      <div style={style}/>
    </GridLayout.Cell>
    <GridLayout.Cell size={2}>
      <div style={style}/>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ desktop: 3, tablet: 7 }}>
      <div style={style}/>
    </GridLayout.Cell>
    <GridLayout.Cell size={{ desktop: 5, tablet: 1 }}>
      <div style={style}/>
    </GridLayout.Cell>
</GridLayout>
```

You can design some makeshift vertical stacks using full widths:

```jsx
import { Variables } from '@Common';

const style = {
  backgroundColor: Variables.Color.n400,
  border: `2px solid ${Variables.Color.n100}`,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id eros consequat ex faucibus pellentesque nec non ipsum. Nulla facilisis libero vitae nisi varius ultricies. Nullam aliquet sollicitudin luctus. Donec sit amet risus et est pellentesque consectetur. Cras eu nisl est. Quisque auctor magna at nulla ultrices, non molestie tortor iaculis.';

<GridLayout jgutterMarginY='large'>
    <GridLayout.Cell size={'fullWidth'}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={'fullWidth'}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={'fullWidth'}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
    <GridLayout.Cell size={'fullWidth'}>
      <div style={style}>{text}</div>
    </GridLayout.Cell>
</GridLayout>
```

#### Animation

Cells can be animated with transitions when added or removed from the gridlayout. Animations can be specified per
cell or for the entire grid.

```jsx
import { useState } from "react";
import { Variables } from '@Common';
import { Button } from '@Domain/Buttons';

const style = {
  backgroundColor: Variables.Color.n400,
  minHeight: '2rem',
  height: '100%',
  width: '100%',
  padding: '10px'
};

function ParentComponent() {
  const [data, setData] = useState([
    {
      size: 6,
      content: "Hello"
    },
    {
      size: 6,
      content: "Grid"
    },
    {
      size: 6,
      content: "Layout"
    }
  ])

  return (
    <>
      <Button onClick={() => {
          const newData = [...data, { size: 6, content: "Content" }]
          setData(newData)
        }}
      >
        Add Cell
      </Button>
      <Button onClick={() => {
          const newData = [...data, { 
              size: 6,
              content: "Zoomy Content",
              animationStyle: 'zoomInOut'
           }]
          setData(newData)
        }}
      >
        Add ZOOMER Cell
      </Button>
      <Button 
        onClick={() => {
          const newData = [...data]
          newData.pop()
          setData(newData)
        }}
      >
        Remove Cell
      </Button>
      <br />
      <br />
      <GridLayout
        gutterMarginX={Variables.Layout.lSmall}
        gutterMarginY={Variables.Layout.lSmall}
        cells={state.cells}
        animationStyle='fadeInOut'
      >
        {data.map((item, index) => {
          return (
            <GridLayout.Cell key={index} size={item.size} animationStyle={item.animationStyle}>
              <div style={style}>{item.content}</div>
            </GridLayout.Cell>
          )
        })}
      </GridLayout>
    </>
  )
}

<ParentComponent />
```
