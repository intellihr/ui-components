#### Basic DropdownMenu

```jsx
<DropdownMenu
  toggleComponent={<Button>Basic Dropdown</Button>}
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

#### Colored Dropdown Menu

```jsx
const { FontAwesomeIcon, IntelliIcon } = require('../Icon');


<DropdownMenu
  toggleComponent={<Button>Colored Dropdown</Button>}
  sections={[
    {
      text: 'Alert',
       leftComponent: <FontAwesomeIcon type='camera-outline' />,
      onClick: () => alert('Test'),
      color: 'alert'
    },
    {
      text: 'Success',
      href: 'https://www.intellihr.com.au',
      color: 'success'
    },
    {
      text: 'Warning',
      onClick: () => alert('Test'),
      color: 'warning'
    },
    {
      text: 'Primary',
      onClick: () => alert('Test'),
      color: 'primary'
    },
    {
      text: 'Secondary',
      onClick: () => alert('Test'),
      color: 'secondary'
    },
    {
      text: 'Neutral',
      onClick: () => alert('Test'),
      color: 'neutral'
    },
  ]}
/>
```

#### Dropdown Alignment

```jsx
<React.Fragment>
  <DropdownMenu
    toggleComponent={<Button>Left</Button>}
    dropdownOverrides={{
      align:'left'
    }}
    sections={[
      {
        onClick: () => alert('Test'),
        text: 'Item 1'
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
        onClick: () => alert('Test'),
        text: 'Item 1'
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
        onClick: () => alert('Test'),
        text: 'Item 1'
      }
    ]}
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

#### Non Clickable Component

```jsx
<DropdownMenu
   toggleComponent={<Button>Non Clickable Component</Button>}
   sections={[
     {
       text: 'no click'
     }
   ]}
/>
```

#### Alert Component

```jsx
<DropdownMenu
   toggleComponent={<Button>Alert</Button>}
   sections={[
     {
       text: 'hover over me',
       onClick: () => alert('Test'),
       hoverAlert: true
     }
   ]}
/>
```

#### left and right Components

```jsx
const { FontAwesomeIcon } = require('../Icon');

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
       style: {'fontWeight':600}
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
       leftComponent: <FontAwesomeIcon type='camera-outline' />,
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
       hoverAlert: true
     }
   ]}
/>
```
