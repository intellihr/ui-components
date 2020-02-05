#### Generic Menu

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';
import { DefaultsProvider } from '@Domain/Defaults';
initialState = { value: 5};

<DefaultsProvider
  value={{
    AnchorComponent: React.memo(({ anchorComponentProps, children, href }) => {
     return (<a href={href} onClick={anchorComponentProps && anchorComponentProps.onClick}>{children}</a>)
    })
  }}
>
  <Menu>
    <Menu.Item
      icon={<FontAwesomeIcon type='solid' icon='star' />}
      label='Item 1'
    >
      <Menu.Item
        href='/#/UI%20Components/Menus/Menu'
        label='Item 1A'
        isActive={state.value === 1}
        anchorComponentProps={{
          onClick:() => {
              setState({ value: 1 })
          }
        }}
      />
      <Menu.Item
        href='/#/UI%20Components/Menus/Menu'
        label='Item 1B'
        isActive={state.value === 2}
        anchorComponentProps={{
          onClick: () => {
              setState({ value: 2 })
          }
        }}
      />
    </Menu.Item>
    <Menu.Item
      isActive={true}
      href='/#/UI%20Components/Menus/Menu'
      label='Item 2'
      isActive={state.value === 3}
      anchorComponentProps={{
        onClick:() => {
            setState({ value: 3 })
        }
      }}
    />
    <Menu.Item
      isOpen={true}
      label='Item 3'
    >
      <Menu.Item
        href='/#/UI%20Components/Menus/Menu'
        label='Item 3A'
        isActive={state.value === 4}
        anchorComponentProps={{
          onClick:() => {
              setState({ value: 4 })
          }
        }}
      />
      <Menu.Item
        href='/#/UI%20Components/Menus/Menu'
        label='Item 3B'
        isActive={state.value === 5}
        anchorComponentProps={{
          onClick:() => {
              setState({ value: 5 })
          }
        }}
      />
      <Menu.Item
        isOpen
        label='Item 3C'
        overflowWhenOpen='visible'
      >
        <div
          style={{
            position: 'relative',
            height: '1.5rem',
            backgroundColor: '#eee'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '5px',
              left: '5rem',
              width: '5rem',
              height: '3rem',
              backgroundColor: 'lightblue',
              padding: '.25rem'
            }}
          >
            Overflow
          </div>
        </div>
      </Menu.Item>
      <Menu.Item
        label='Item 3D'
      />
    </Menu.Item>
  </Menu>
</DefaultsProvider>
```

#### Menu with loading menu item

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

<Menu>
  <Menu.Item
    icon={<FontAwesomeIcon type='solid' icon='star' />}
    label='Item 1'
  >
    <Menu.Item
      href='#'
      label='Item 1A'
    />
    <Menu.Item
      href='#'
      label='Item 1B'
    />
  </Menu.Item>
  <Menu.Item
    isActive={true}
    isLoading={true}
    href='#'
    label='Item 2'
  />
  <Menu.Item
    isOpen={true}
    label='Item 3'
  >
    <Menu.Item
      href='#'
      label='Item 3A'
    />
    <Menu.Item
      href='#'
      label='Item 3B'
      className='active'
    />
  </Menu.Item>
</Menu>
```
