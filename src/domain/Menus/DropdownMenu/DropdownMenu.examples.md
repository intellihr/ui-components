#### Basic DropdownMenu

```jsx
<DropdownMenu
  sections={[
    {
      text: 'Item 1',
      onClick: () => alert('Item 1')
    },
    {
      text: 'Item 2',
      href: 'https://www.intellihr.com.au'
    }
  ]}
/>
```


#### DropdownMenu inside overflow: hidden, position: relative bounding box

```jsx
<div
  style={{
    height: 90,
    width: 90,
    border: '1px black solid',
    padding: 10,
    overflow: 'hidden',
    position: 'relative'
  }}
>
  <DropdownMenu
    sections={[
      {
        text: 'Item 1',
        onClick: () => alert('Item 1')
      },
      {
        text: 'Item 2',
        href: 'https://www.intellihr.com.au'
      }
    ]}
  />
</div>
```

#### Dropdown Menu using strip colors

```jsx
<DropdownMenu
  toggleComponent={<Button>Colored Dropdown</Button>}
  sections={[
    {
      text: 'Alert',
      onClick: () => alert('Test'),
      sectionType: 'stripAlert'
    },
    {
      text: 'Success',
      href: 'https://www.intellihr.com.au',
      sectionType: 'stripSuccess'
    },
    {
      text: 'Warning',
      onClick: () => alert('Test'),
      sectionType: 'stripWarning'
    },
    {
      text: 'Primary',
      onClick: () => alert('Test'),
      sectionType: 'stripPrimary'
    },
    {
      text: 'Secondary',
      onClick: () => alert('Test'),
      sectionType: 'stripSecondary'
    },
    {
      text: 'Neutral',
      onClick: () => alert('Test'),
      sectionType: 'stripNeutral'
    },
  ]}
/>
```

#### Dropdown Alignment

By default, dropdowns will be positioned according to their location on the page.
They will default to flipping direction after reaching a 2/3 cutoff on the page window.

Optionally, you can manually define the alignment for the dropdown.
Specify a corner on the toggle component and a corner on the dropdown itself
and the two will be anchored when the dropdown is displayed.

Alignment also determines the animation direction for showing and
hiding the dropdown.

```jsx
<React.Fragment>
  <DropdownMenu
    toggleComponent={<Button>Anchored bottom left</Button>}
    sections={[
      {
        text: 'Item 1'
      },
      {
        text: 'Item 2'
      }
    ]}
    parentAnchorPosition={{
      xPos: 'left',
      yPos: 'bottom'
    }}
    dropdownAnchorPosition={{
      xPos: 'left',
      yPos: 'top'
    }}
  />
  <DropdownMenu
    toggleComponent={<Button>Anchored bottom right</Button>}
    sections={[
      {
        text: 'Item 1'
      },
      {
        text: 'Item 2'
      }
    ]}
    parentAnchorPosition={{
      xPos: 'right',
      yPos: 'bottom'
    }}
    dropdownAnchorPosition={{
      xPos: 'right',
      yPos: 'top'
    }}
  />
  <DropdownMenu
    toggleComponent={<Button>Drop upwards, top left</Button>}
    sections={[
      {
        text: 'Item 1'
      },
      {
        text: 'Item 2'
      }
    ]}
    parentAnchorPosition={{
      xPos: 'left',
      yPos: 'top'
    }}
    dropdownAnchorPosition={{
      xPos: 'left',
      yPos: 'bottom'
    }}
  />
  <DropdownMenu
    toggleComponent={<Button>Anchored top right, open to right</Button>}
    sections={[
      {
        text: 'Item 1'
      },
      {
        text: 'Item 2'
      }
    ]}
    parentAnchorPosition={{
      xPos: 'right',
      yPos: 'top'
    }}
    dropdownAnchorPosition={{
      xPos: 'left',
      yPos: 'top'
    }}
  />
  <DropdownMenu
    toggleComponent={<Button>Anchored bottom left, open to left upwards</Button>}
    sections={[
      {
        text: 'Item 1'
      },
      {
        text: 'Item 2'
      }
    ]}
    parentAnchorPosition={{
      xPos: 'left',
      yPos: 'bottom'
    }}
    dropdownAnchorPosition={{
      xPos: 'right',
      yPos: 'bottom'
    }}
  />
</React.Fragment>
```

#### Custom Components

```jsx
<DropdownMenu
   toggleComponent={<Button>Custom</Button>}
   sections={[
     {
       onClick: () => alert('Test'),
       text: 'Item 1'
     },
     {
       component: <hr/>
     },
     {
       onClick: () => alert('Test'),
       text: 'Item 2'
     },
     {
       text: 'Item 3',
       component: <Callout>asdf</Callout>
     }
   ]}
/>
```

#### Left and right section components

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

<DropdownMenu
   toggleComponent={<Button>Icons</Button>}
   sections={[
     {
       leftComponent: <FontAwesomeIcon type='hand-o-right' />,
       rightComponent: <FontAwesomeIcon type='hand-o-left' />,
       onClick: () => alert('Test'),
       text: 'Surrounded by icons'
     }
   ]}
/>
```

#### Profile Menu Example

```jsx
const { FontAwesomeIcon, IntelliIcon } = require('@Domain/Icons');

<DropdownMenu
   toggleComponent={
     <div style={{ cursor: 'pointer' }} >
       <Avatar
         initials='JD'
         size='medium'
       />
     </div>
   }
   sections={[
     {
       text: 'John Doe',
       componentProps: {
         style: {'fontWeight':600}
       }
     },
     {
       component: <hr/>
     },
     {
       text: 'My Profile',
       leftComponent: <IntelliIcon type='avatar' />,
       onClick: () => alert('Test')
     },
     {
       text: 'Change Password',
       leftComponent: <IntelliIcon type='security' />,
       onClick: () => alert('Test')
     },
     {
       text: 'Update Profile Picture',
       leftComponent: <FontAwesomeIcon type='camera' />,
       onClick: () => alert('Test')
     },
     {
       text: 'User Disclaimer',
       leftComponent: <IntelliIcon type='shield' />,
       onClick: () => alert('Test')
     },
     {
       component: <hr/>
     },
     {
       text: 'Log Out',
       leftComponent: <FontAwesomeIcon type='power-off' />,
       href: 'google.com',
       sectionType: 'alert'
     }
   ]}
/>
```

#### Manual Dropdown Menu

`DropdownMenu` provides a ManualMenu subcomponent, which can be used
to manually manage the toggling and hiding of a dropdown menu, as
well as specify its parent ref on the page.

```jsx
const { SelectInput } = require('@Domain/Inputs');

class ManualExample extends React.PureComponent {
  constructor () {
    this.state = {
      isOpen: false
    }

    this.anchorRef = React.createRef()
  }

  render () {
    const {
      isOpen
    } = this.state

    return (
      <React.Fragment>
        <Button
          onClick={() => this.setState({ isOpen: true })}
          buttonOverrides={{
            'aria-haspopup': true,
            'aria-expanded': isOpen,
            'aria-owns': 'manual-menu-example'
          }}
        >
          Show Menu
        </Button>
        <div
          style={{
            border: '1px black solid',
            float: 'right',
            padding: 10,
            width: 200
          }}
          ref={this.anchorRef}
        >
          The dropdown will be anchored to this box
        </div>
        <DropdownMenu.ManualMenu
          id='manual-menu-example'
          isDropdownOpen={this.state.isOpen}
          onDropdownClose={() => this.setState({ isOpen: false })}
          sections={[
            {
              text: 'Item 1',
              onClick: () => alert('Item 1')
            },
            {
              text: 'Item 2',
              href: 'https://www.intellihr.com.au'
            }
          ]}
          parentRef={this.anchorRef}
        />
      </React.Fragment>
    )
  }
}

<ManualExample />

```
