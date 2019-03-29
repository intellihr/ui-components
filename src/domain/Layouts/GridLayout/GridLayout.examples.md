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

<GridLayout
  cells={[
    {
      size: 10,
      content: <div style={style}/>
    },
    {
      size: 2,
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

<GridLayout
  cells={[
    {
      size: { desktop: 3, min: 'fullWidth' },
      content: <div style={style}/>
    },
    {
      size: { desktop: 6, min: 'fullWidth' },
      content: <div style={style}/>
    },
    {
      size: { desktop: 3, min: 'fullWidth' },
      content: <div style={style}/>
    }
  ]}
/>
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
  cells={[
    {
      size: 10,
      content: <div style={style}/>
    },
    {
      size: 2,
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
import { Variables } from '@Common';


const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';

<GridLayout
  gutterPaddingX={Variables.Spacing.sSmall}
  gutterPaddingY={Variables.Spacing.sSmall}
  cells={[
    {
      size: 4,
      content: text
    },
    {
      size: 4,
      content: text
    },
    {
      size: 4,
      content: text
    },
    {
      size: 4,
      content: text
    },
    {
      size: 4,
      content: text
    }
  ]}
/>
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
    cells={[
      {
        size: 6,
        content: <div style={style}>spacing-2xsmall gutters</div>
      },
      {
        size: 6,
        content: <div style={style}/>
      }
    ]}
  />
  <GridLayout
    gutterMarginX={Variables.Spacing.sMedium}
    cells={[
      {
        size: 6,
        content: <div style={style}>spacing-medium gutters</div>
      },
      {
        size: 6,
        content: <div style={style}/>
      }
    ]}
  />
  <GridLayout
    gutterMarginX={Variables.Layout.lLarge}
    cells={[
      {
        size: 6,
        content: <div style={style}>layout-large gutters</div>
      },
      {
        size: 6,
        content: <div style={style}/>
      }
    ]}
  />
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
  cells={[
    {
      size: 10,
      content: <div style={style}/>
    },
    {
      size: 2,
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

<GridLayout
  cells={[
    {
      size: 4,
      offset: { desktop: 7 },
      content: <div style={style}/>
    },
    {
      size: 1,
      content: <div style={style}/>
    }
  ]}
/>
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
  <GridLayout
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to</div>
      },
      {
        size: 4,
        content: <div style={style}>the left (default)</div>
      }
    ]}
  />
  <GridLayout
    horizontalAlignment={GridLayout.HorizontalAlignment.Right}
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to</div>
      },
      {
        size: 4,
        content: <div style={style}>the right</div>
      }
    ]}
  />
  <GridLayout
    horizontalAlignment={GridLayout.HorizontalAlignment.Center}
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to</div>
      },
      {
        size: 4,
        content: <div style={style}>the center</div>
      }
    ]}
  />
  <GridLayout
    horizontalAlignment={GridLayout.HorizontalAlignment.Justify}
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to</div>
      },
      {
        size: 4,
        content: <div style={style}>push to the edges</div>
      }
    ]}
  />
  <GridLayout
    horizontalAlignment={GridLayout.HorizontalAlignment.Spaced}
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to</div>
      },
      {
        size: 4,
        content: <div style={style}>spread evenly</div>
      }
    ]}
  />
</>
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
  <GridLayout
    verticalAlignment={GridLayout.VerticalAlignment.Top}
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to the top</div>
      },
      {
        size: 4,
        content: <div style={style}>{text}</div>
      }
    ]}
  />
  <GridLayout
    verticalAlignment={GridLayout.VerticalAlignment.Middle}
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to the middle</div>
      },
      {
        size: 4,
        content: <div style={style}>{text}</div>
      }
    ]}
  />
  <GridLayout
    verticalAlignment={GridLayout.VerticalAlignment.Bottom}
    cells={[
      {
        size: 4,
        content: <div style={style}>Aligned to the bottom</div>
      },
      {
        size: 4,
        content: <div style={style}>{text}</div>
      }
    ]}
  />
  <GridLayout
    verticalAlignment={GridLayout.VerticalAlignment.Stretch}
    cells={[
      {
        size: 4,
        content: <div style={style}>Stretched to have the same height (default behaviour)</div>
      },
      {
        size: 4,
        content: <div style={style}>{text}</div>
      }
    ]}
  />
</>
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

<GridLayout
  gridColumns={20}
  cells={[
    {
      size: 10,
      content: <div style={style}/>
    },
    {
      size: 2,
      content: <div style={style}/>
    },
    {
      size: { desktop: 3, tablet: 7 },
      content: <div style={style}/>
    },
    {
      size: { desktop: 5, tablet: 1 },
      content: <div style={style}/>
    }
  ]}
/>
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

<GridLayout
  gutterMarginY='large'
  cells={[
    {
      size: 'fullWidth',
      content: <div style={style}>{text}</div>
    },
    {
      size: 'fullWidth',
      content: <div style={style}>{text}</div>
    },
    {
      size: 'fullWidth',
      content: <div style={style}>{text}</div>
    },
    {
      size: 'fullWidth',
      content: <div style={style}>{text}</div>
    }
  ]}
/>
```

#### Animation

Cells can be animated with transitions when added or removed from the gridlayout. Animations can be specified per
cell or for the entire grid.

```jsx
import { Variables } from '@Common';
import { Button } from '@Domain/Buttons';

const style = {
  backgroundColor: Variables.Color.n400,
  minHeight: '2rem',
  height: '100%',
  width: '100%'
};

initialState = { cells: [
  {
    size: 6,
    content: <div style={style} />
  },
  {
    size: 6,
    content: <div style={style} />
  },
  {
    size: 6,
    content: <div style={style} />
  }
] };

<>
  <Button onClick={() => {
      const newCells = [
        ...state.cells,
        {
          size: 6,
          content: <div style={style} />
        }
      ]
      
      setState({ cells: newCells })
    }}
  >
    Add Cell
  </Button>
  <Button onClick={() => {
      const newCells = [
        ...state.cells,
        {
          size: 6,
          content: <div style={style} />,
          animationStyle: 'zoomInOut'
        }
      ]
      
      setState({ cells: newCells })
    }}
  >
    Add ZOOMER Cell
  </Button>
  <Button 
    onClick={() => {
      const newCells = [...state.cells]
      newCells.pop()
      
      setState({ cells: newCells })
    }}
  >
    Remove Cell
  </Button>
  <GridLayout
    gutterMarginX={Variables.Layout.lLarge}
    gutterMarginY={Variables.Layout.lSmall}
    cells={state.cells}
    animationStyle='fadeInOut'
  />
</>
```
