## Basic DropdownMenu

```jsx
<DropdownMenu
  toggleComponent={<Button>Basic Dropdown</Button>}
  options={[
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
  options={[
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
    align='left'
    options={[
      {
        text: 'Item 1',
      }
    ]}
  />
  <DropdownMenu
    toggleComponent={<Button>Center</Button>}
    align='center'
    options={[
      {
        text: 'Item 1',
      }
    ]}
  />
  <DropdownMenu
    toggleComponent={<Button>Right</Button>}
    align='right'
    options={[
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
   options={[
     {
       text: 'Item 1'
     },
     {
       component: 'hr'
     },
     {
       text: 'Item 2',
     },
     {
       text: 'Item 3',
       component: Callout
     }
   ]}
/>
```

## Non Clickable Component

```jsx
<DropdownMenu
   toggleComponent={<Button>Non Clickable Component</Button>}
   options={[
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
   options={[
     {
       text: 'hover over me',
       hoverAlert: true
     }
   ]}
/>
```

## Icon Component

```jsx
<DropdownMenu
   toggleComponent={<Button>Icons</Button>}
   options={[
     {
       leftIcon: <FontAwesomeIcon type='hand-o-right' />,
       rightIcon: <FontAwesomeIcon type='hand-o-left' />,
       text: 'Surrounded by icons'
     }
   ]}
/>
```

## Profile Menu Example

```jsx
<DropdownMenu
   toggleComponent={
     <Avatar
       initials='JD'
       size='medium'
     />
   }
   align='left'
   options={[
     {
       text: 'John Doe',
       nonClickable: true,
       style: {'fontWeight':600}
     },
     {
       component: 'hr'
     },
     {
       text: 'My Profile',
       leftIcon: <IntelliIcon type='avatar' />
     },
     {
       text: 'Change Password',
       leftIcon: <IntelliIcon type='security' />
     },
     {
       text: 'Update Profile Picture',
       leftIcon: <FontAwesomeIcon type='camera-outline' />
     },
     {
       text: 'User Disclaimer',
       leftIcon: <IntelliIcon type='shield' />
     },
     {
       component: 'hr'
     },
     {
       text: 'Log Out',
       leftIcon: <FontAwesomeIcon type='power-off' />,
       href: 'google.com',
       hoverAlert: true
     }
   ]}
/>
```
