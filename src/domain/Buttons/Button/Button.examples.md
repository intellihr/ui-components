#### Functional Color Buttons

```jsx
<div>
  <div>
    <h3>Enabled</h3>
    <Button type='primary' onClick={() => alert('primary')}>
      primary
    </Button>
    <Button type='secondary' onClick={() => alert('secondary')}>
      secondary
    </Button>
    <Button type='success' onClick={() => alert('success')}>
      success
    </Button>
    <Button type='warning' onClick={() => alert('warning')}>
      warning
    </Button>
    <Button type='alert' onClick={() => alert('alert')}>
      alert
    </Button>
    <Button type='neutral' onClick={() => alert('neutral')}>
      neutral
    </Button> 
    <Button type='highlight' onClick={() => alert('highlight')}>
      highlight
    </Button>
    <Button type='light' onClick={() => alert('light')}>
      light
    </Button>
    <Button type='dark' onClick={() => alert('dark')}>
      dark
    </Button>  
  </div>
  <div>
    <h3>Disabled</h3>
    <Button type='primary' disabled onClick={() => alert('primary')}>
      primary
    </Button>
    <Button type='secondary' disabled onClick={() => alert('secondary')}>
      secondary
    </Button>
    <Button type='warning' disabled onClick={() => alert('warning')}>
      warning
    </Button>
    <Button type='alert' disabled onClick={() => alert('alert')}>
      alert
    </Button>
    <Button type='neutral' disabled onClick={() => alert('neutral')}>
      neutral
    </Button> 
    <Button type='highlight' disabled onClick={() => alert('highlight')}>
      highlight
    </Button>
    <Button type='light' disabled onClick={() => alert('light')}>
      light
    </Button>
    <Button type='dark' disabled onClick={() => alert('dark')}>
      dark
    </Button>  
  </div>
</div>
```

#### Borderless Buttons

```jsx
<div>
  <div>
    <h3>Enabled</h3>
    <Button type='primary-borderless' onClick={() => alert('primary-borderless')}>
      primary-borderless
    </Button>
    <Button type='secondary-borderless' onClick={() => alert('secondary-borderless')}>
      secondary-borderless
    </Button>
    <Button type='success-borderless' onClick={() => alert('success-borderless')}>
      success-borderless
    </Button>
    <Button type='warning-borderless' onClick={() => alert('warning-borderless')}>
      warning-borderless
    </Button>
    <Button type='alert-borderless' onClick={() => alert('alert-borderless')}>
      alert-borderless
    </Button>
    <Button type='neutral-borderless' onClick={() => alert('neutral-borderless')}>
      neutral-borderless
    </Button> 
    <Button type='highlight-borderless' onClick={() => alert('highlight-borderless')}>
      highlight-borderless
    </Button>
    <Button type='light-borderless' onClick={() => alert('light-borderless')}>
      light-borderless
    </Button>
    <Button type='dark-borderless' onClick={() => alert('dark-borderless')}>
      dark-borderless
    </Button>  
  </div>
  <div>
    <h3>Disabled</h3>
    <Button type='primary-borderless' disabled onClick={() => alert('primary-borderless')}>
      primary-borderless
    </Button>
    <Button type='secondary-borderless' disabled onClick={() => alert('secondary-borderless')}>
      secondary-borderless
    </Button>
    <Button type='warning-borderless' disabled onClick={() => alert('warning-borderless')}>
      warning-borderless
    </Button>
    <Button type='alert-borderless' disabled onClick={() => alert('alert-borderless')}>
      alert-borderless
    </Button>
    <Button type='neutral-borderless' disabled onClick={() => alert('neutral-borderless')}>
      neutral-borderless
    </Button> 
    <Button type='highlight-borderless' disabled onClick={() => alert('highlight-borderless')}>
      highlight-borderless
    </Button>
    <Button type='light-borderless' disabled onClick={() => alert('light-borderless')}>
      light-borderless
    </Button>
    <Button type='dark-borderless' disabled onClick={() => alert('dark-borderless')}>
      dark-borderless
    </Button>  
    </div>
</div>
```

#### hollow Buttons
```jsx
<div>
  <div>
    <h3>Enabled</h3>
    <Button type='primary-hollow' onClick={() => alert('primary-hollow')}>
      primary-hollow
    </Button>
    <Button type='secondary-hollow' onClick={() => alert('secondary-hollow')}>
      secondary-hollow
    </Button>
    <Button type='success-hollow' onClick={() => alert('success-hollow')}>
      success-hollow
    </Button>
    <Button type='warning-hollow' onClick={() => alert('warning-hollow')}>
      warning-hollow
    </Button>
    <Button type='alert-hollow' onClick={() => alert('alert-hollow')}>
      alert-hollow
    </Button>
    <Button type='neutral-hollow' onClick={() => alert('neutral-hollow')}>
      neutral-hollow
    </Button> 
    <Button type='highlight-hollow' onClick={() => alert('highlight-hollow')}>
      highlight-hollow
    </Button>
    <Button type='light-hollow' onClick={() => alert('light-hollow')}>
      light-hollow
    </Button>
    <Button type='dark-hollow' onClick={() => alert('dark-hollow')}>
      dark-hollow
    </Button>
  </div>
  <div>
    <h3>Disabled</h3>
    <Button type='primary-hollow' disabled onClick={() => alert('primary-hollow')}>
      primary-hollow
    </Button>
    <Button type='secondary-hollow' disabled onClick={() => alert('secondary-hollow')}>
      secondary-hollow
    </Button>
    <Button type='warning-hollow' disabled onClick={() => alert('warning-hollow')}>
      warning-hollow
    </Button>
    <Button type='alert-hollow' disabled onClick={() => alert('alert-hollow')}>
      alert-hollow
    </Button>
    <Button type='neutral-hollow' disabled onClick={() => alert('neutral-hollow')}>
      neutral-hollow
    </Button> 
    <Button type='highlight-hollow' disabled onClick={() => alert('highlight-hollow')}>
      highlight-hollow
    </Button>
    <Button type='light-hollow' disabled onClick={() => alert('light-hollow')}>
      light-hollow
    </Button>
    <Button type='dark-hollow' disabled onClick={() => alert('dark-hollow')}>
      dark-hollow
    </Button>
  </div>
</div>
```

#### Special Case Buttons

```jsx
<div>
  <div>
    <h3>Enabled</h3>
    <Button type='add' onClick={() => alert('add')}>
      add
    </Button>
    <Button type='add-subtle' onClick={() => alert('add-subtle')}>
      add-subtle
    </Button>
    <Button type='delete' onClick={() => alert('delete')}>
      delete
    </Button>
    <Button type='delete-subtle' onClick={() => alert('delete-subtle')}>
      delete-subtle
    </Button>
    <Button type='resolve' onClick={() => alert('resolve')}>
      resolve
    </Button> 
    <Button type='skip' onClick={() => alert('skip')}>
      skip
    </Button>
    <Button type='cancel' onClick={() => alert('cancel')}>
      cancel
    </Button>
    <Button type='menu-action' onClick={() => alert('menu-action')}>
      menu-action
    </Button>
  </div>
  <div>
    <h3>Disabled</h3>
    <Button type='add' disabled onClick={() => alert('add')}>
      add
    </Button>
    <Button type='add-subtle' disabled onClick={() => alert('add-subtle')}>
      add-subtle
    </Button>
    <Button type='delete' disabled onClick={() => alert('delete')}>
      delete
    </Button>
    <Button type='delete-subtle' disabled onClick={() => alert('delete-subtle')}>
      delete-subtle
    </Button>
    <Button type='resolve' disabled onClick={() => alert('resolve')}>
      resolve
    </Button> 
    <Button type='skip' disabled onClick={() => alert('skip')}>
      skip
    </Button>
    <Button type='cancel' disabled onClick={() => alert('cancel')}>
      cancel
    </Button>
    <Button type='menu-action' disabled onClick={() => alert('menu-action')}>
      menu-action
    </Button>
  </div>
</div>
```


#### Button sizes
```jsx
<div>
  <Button size='small' onClick={() => alert('small')}>
    small
  </Button>
  <Button size='medium' onClick={() => alert('medium')}>
    medium
  </Button>
  <Button size='large' onClick={() => alert('large')}>
    large
  </Button>
</div>
```

#### Buttons with Icons
```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

<div>
  <div>
    <Button 
      icon={<FontAwesomeIcon type='star' />}
      type='primary-hollow' 
      onClick={() => alert('primary-hollow')}
    >
      primary-hollow
    </Button>
    <Button 
      icon={<FontAwesomeIcon type='star' />}
      iconAlignment='right'
      type='primary-hollow' 
      onClick={() => alert('primary-hollow')}
    >
      primary-hollow
    </Button>
  </div>
</div>
```
