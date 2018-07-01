## Basic DropdownMenu

```jsx
<DropdownMenu
  toggleComponent={<Button>Basic Dropdown</Button>}
  sections={[
    {
      text: 'Item 1',
      onClick: () => alert('Item 1'),
    },
    {
      text: 'Item 2',
      href: 'https://www.intellihr.com.au'
    }
  ]}
/>
```

## Colored Dropdown Menu

```jsx
<DropdownMenu
  toggleComponent={<Button>Colored Dropdown</Button>}
  sections={[
    {
      text: 'Alert',
      onClick: () => console.log('test'),
      color: 'alert'
    },
    {
      text: 'Success',
      href: 'https://www.intellihr.com.au',
      color: 'success'
    },
    {
      text: 'Warning',
      onClick: () => console.log('test'),
      color: 'warning'
    },
    {
      text: 'Primary',
      onClick: () => console.log('test'),
      color: 'primary'
    },
    {
      text: 'Secondary',
      onClick: () => console.log('test'),
      color: 'secondary'
    },
    {
      text: 'Neutral',
      onClick: () => console.log('test'),
      color: 'neutral'
    },
  ]}
/>
```

## Dropdown Alignment

```jsx
<React.Fragment>
  <DropdownMenu
    toggleComponent={<Button>Left</Button>}
    dropdownOverrides={{
      align:'left'
    }}
    sections={[
      {
        text: 'Item 1',
      }
    ]}
  />
  <DropdownMenu
    toggleComponent={<Button>Center</Button>}
    dropdownOverrides={{
      align:'center'
    }}
    sections={[
      {
        text: 'Item 1',
      }
    ]}
  />
  <DropdownMenu
    toggleComponent={<Button>Right</Button>}
    dropdownOverrides={{
      align:'right'
    }}
    sections={[
      {
        text: 'Item 1'
      }
    ]}
  />
</React.Fragment>
```

## Custom Components

```jsx
<DropdownMenu
   toggleComponent={<Button>Custom</Button>}
   sections={[
     {
       text: 'Item 1'
     },
     {
       component: <hr/>
     },
     {
       text: 'Item 2'
     },
     {
       text: 'Item 3',
       component: <Callout>asdf</Callout>
     }
   ]}
/>
```

## Non Clickable Component

```jsx
<DropdownMenu
   toggleComponent={<Button>Non Clickable Component</Button>}
   sections={[
     {
       text: 'no click',
       nonClickable: true
     }
   ]}
/>
```

## Alert Component

```jsx
<DropdownMenu
   toggleComponent={<Button>Alert</Button>}
   sections={[
     {
       text: 'hover over me',
       hoverAlert: true
     }
   ]}
/>
```

## left and right Components

```jsx
const { FontAwesomeIcon } = require('../Icon');

<DropdownMenu
   toggleComponent={<Button>Icons</Button>}
   sections={[
     {
       leftComponent: <FontAwesomeIcon type='hand-o-right' />,
       rightComponent: <FontAwesomeIcon type='hand-o-left' />,
       text: 'Surrounded by icons'
     }
   ]}
/>
```

## Profile Menu Example

```jsx
const { FontAwesomeIcon, IntelliIcon } = require('../Icon');

<DropdownMenu
   toggleComponent={
     <Avatar
       initials='JD'
       size='medium'
     />
   }
   dropdownOverrides={{
     align:'left'
   }}
   sections={[
     {
       text: 'John Doe',
       nonClickable: true,
       style: {'fontWeight':600}
     },
     {
       component: <hr/>
     },
     {
       text: 'My Profile',
       leftComponent: <IntelliIcon type='avatar' />
     },
     {
       text: 'Change Password',
       leftComponent: <IntelliIcon type='security' />
     },
     {
       text: 'Update Profile Picture',
       leftComponent: <FontAwesomeIcon type='camera-outline' />
     },
     {
       text: 'User Disclaimer',
       leftComponent: <IntelliIcon type='shield' />
     },
     {
       component: <hr/>
     },
     {
       text: 'Log Out',
       leftComponent: <FontAwesomeIcon type='power-off' />,
       href: 'google.com',
       hoverAlert: true
     }
   ]}
/>
```
