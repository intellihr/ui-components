#### Generic Menu

```jsx
const { MenuItem } = require('./MenuItem');
const { SubMenu } = require('./SubMenu');
const { FontAwesomeIcon } = require('@Domain/Icons');

<Menu>
  <SubMenu triggerComponent={
    <MenuItem
      icon={<FontAwesomeIcon type='star' />}
      label='Item 1'
    />
  }>
    <MenuItem
      url='#'
      label='Item 1A'
    />
    <MenuItem
      url='#'
      label='Item 1B'
    />
  </SubMenu>
  <MenuItem
    isActive={true}
    url='#'
    label='Item 2'
  /> 
  <SubMenu 
    isOpen={true}
    triggerComponent={
      <MenuItem
        label='Item 3'
      />
    }
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
  </SubMenu>
</Menu>
```

#### Menu with loading menu item

```jsx
const { MenuItem } = require('./MenuItem');
const { SubMenu } = require('./SubMenu');
const { FontAwesomeIcon } = require('@Domain/Icons');

<Menu>
  <SubMenu triggerComponent={
    <MenuItem
      icon={<FontAwesomeIcon type='star' />}
      label='Item 1'
    />
  }>
    <MenuItem
      url='#'
      label='Item 1A'
    />
    <MenuItem
      url='#'
      label='Item 1B'
    />
  </SubMenu>
  <MenuItem
    isLoading={true}
    url='#'
    label='Item 2'
  /> 
  <SubMenu 
    isOpen={true}
    triggerComponent={
      <MenuItem
        label='Item 3'
      />
    }
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
  </SubMenu>
</Menu>
```
