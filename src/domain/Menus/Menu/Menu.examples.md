#### Generic Menu

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';
import { MenuItem } from './MenuItem';

<Menu>
  <MenuItem
    icon={<FontAwesomeIcon type='solid' icon='star' />}
    label='Item 1'
  >
    <MenuItem
      href='#'
      label='Item 1A'
    />
    <MenuItem
      href='#'
      label='Item 1B'
    />
  </MenuItem>
  <MenuItem
    isActive={true}
    href='#'
    label='Item 2'
  />
  <MenuItem
    isOpen={true}
    label='Item 3'
  >
    <MenuItem
      href='#'
      label='Item 3A'
    />
    <MenuItem
      href='#'
      label='Item 3B'
      className='active'
    />
    <MenuItem
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
    </MenuItem>
    <MenuItem
      label='Item 3D'
    />
  </MenuItem>
</Menu>
```

#### Menu with loading menu item

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';
import { MenuItem } from './MenuItem';

<Menu>
  <MenuItem
    icon={<FontAwesomeIcon type='solid' icon='star' />}
    label='Item 1'
  >
    <MenuItem
      href='#'
      label='Item 1A'
    />
    <MenuItem
      href='#'
      label='Item 1B'
    />
  </MenuItem>
  <MenuItem
    isActive={true}
    isLoading={true}
    href='#'
    label='Item 2'
  />
  <MenuItem
    isOpen={true}
    label='Item 3'
  >
    <MenuItem
      href='#'
      label='Item 3A'
    />
    <MenuItem
      href='#'
      label='Item 3B'
      className='active'
    />
  </MenuItem>
</Menu>
```
