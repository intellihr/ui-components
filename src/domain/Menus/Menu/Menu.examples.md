#### Generic Menu

```jsx
const { MenuItem } = require('./MenuItem');
const { FontAwesomeIcon } = require('@Domain/Icons');

<Menu>
  <MenuItem
    icon={<FontAwesomeIcon type='star' />}
    label='Item 1'
  >
    <MenuItem
      url='#'
      label='Item 1A'
    />
    <MenuItem
      url='#'
      label='Item 1B'
    />
  </MenuItem>
  <MenuItem
    isActive={true}
    url='#'
    label='Item 2'
  /> 
  <MenuItem 
    isOpen={true}
    label='Item 3'
  >
    <MenuItem
      url='#'
      label='Item 3A'
    />
    <MenuItem
      url='#'
      label='Item 3B'
      className='active'
    />
  </MenuItem>
</Menu>
```

#### Menu with loading menu item

```jsx
const { MenuItem } = require('./MenuItem');
const { FontAwesomeIcon } = require('@Domain/Icons');

<Menu>
  <MenuItem
    icon={<FontAwesomeIcon type='star' />}
    label='Item 1'
  >
    <MenuItem
      url='#'
      label='Item 1A'
    />
    <MenuItem
      url='#'
      label='Item 1B'
    />
  </MenuItem>
  <MenuItem
    isActive={true}
    isLoading={true}
    url='#'
    label='Item 2'
  /> 
  <MenuItem 
    isOpen={true}
    label='Item 3'
  >
    <MenuItem
      url='#'
      label='Item 3A'
    />
    <MenuItem
      url='#'
      label='Item 3B'
      className='active'
    />
  </MenuItem>
</Menu>
```
