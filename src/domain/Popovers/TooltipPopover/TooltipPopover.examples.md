#### Basic TooltipPopover

```jsx
<TooltipPopover>
  Pretty basic
</TooltipPopover>
```

#### Custom Width TooltipPopover

```jsx
<TooltipPopover width={200}>
  This should have a width of 200 pixels
</TooltipPopover>
```

#### Custom Trigger
```jsx
  <TooltipPopover
    toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        Custom trigger component
      </span>
    }
  >
    Triggered Customly
  </TooltipPopover>

```

#### TooltipPopover Alignment

By default, popovers will be positioned according to their location on the page.
They will default to flipping direction after reaching a 2/3 cutoff on the page window.

Optionally, you can manually define the alignment for the popover.
Specify a corner on the toggle component and a corner on the popover itself
and the two will be anchored when the popover is displayed.

Alignment also determines the animation direction for showing and
hiding the popover.

```jsx
<React.Fragment>
  <TooltipPopover
    parentAnchorPosition={{
      xPos: 'left',
      yPos: 'bottom'
    }}
    popoverAnchorPosition={{
      xPos: 'left',
      yPos: 'top'
    }}
    toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        Anchored bottom left
      </span>
    }
  >
    Bottom Left
  </TooltipPopover>
  <br/>
  <TooltipPopover
    parentAnchorPosition={{
      xPos: 'right',
      yPos: 'bottom'
    }}
    popoverAnchorPosition={{
      xPos: 'right',
      yPos: 'top'
    }}
    toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        Anchored bottom right
      </span>
    }
  >
    Bottom Right
  </TooltipPopover>
  <br/>
  <TooltipPopover
    parentAnchorPosition={{
      xPos: 'left',
      yPos: 'top'
    }}
    popoverAnchorPosition={{
      xPos: 'left',
      yPos: 'bottom'
    }}
    toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        Drop upwards, top left
      </span>
    }
  >
    Up left
  </TooltipPopover>
  <br/>
  <TooltipPopover
    parentAnchorPosition={{
      xPos: 'right',
      yPos: 'top'
    }}
    popoverAnchorPosition={{
      xPos: 'left',
      yPos: 'top'
    }}
    toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        Anchored top right, open to right
      </span>
    }
  >
    Top Right
  </TooltipPopover>
  <br/>
  <TooltipPopover
    parentAnchorPosition={{
      xPos: 'left',
      yPos: 'bottom'
    }}
    popoverAnchorPosition={{
      xPos: 'right',
      yPos: 'bottom'
    }}
    toggleComponent={({ openMenu, closeMenu, toggleComponentRef, ariaProps }) =>
      <span
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        ref={toggleComponentRef}
        {...ariaProps}
      >
        Anchored bottom left, open to left upwards
      </span>
    }
  >
    Bottom Left Upwards
  </TooltipPopover>
  <br/>
</React.Fragment>
```
