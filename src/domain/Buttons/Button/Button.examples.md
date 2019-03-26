#### Functional Color Buttons

```jsx
import { ButtonGroup } from '@Domain/Buttons';

<div>
  <div>
    <h3>Enabled</h3>
    <ButtonGroup>
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
    </ButtonGroup>
  </div>
  <div>
    <h3>Disabled</h3>
    <ButtonGroup>
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
    </ButtonGroup>
  </div>
</div>
```

#### Borderless Buttons

```jsx
import { ButtonGroup } from '@Domain/Buttons';

<div>
  <div>
    <h3>Enabled</h3>
    <ButtonGroup>
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
    </ButtonGroup>
  </div>
  <div>
    <h3>Disabled</h3>
    <ButtonGroup>
      <Button type='primary-borderless' disabled onClick={() => alert('primary-borderless')}>
        primary-borderless
      </Button>
      <Button type='secondary-borderless' disabled onClick={() => alert('secondary-borderless')}>
        secondary-borderless
      </Button>
      <Button type='success-borderless' disabled onClick={() => alert('success-borderless')}>
        success-borderless
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
    </ButtonGroup>
    </div>
</div>
```

#### hollow Buttons
```jsx
import { ButtonGroup } from '@Domain/Buttons';

<div>
  <div>
    <h3>Enabled</h3>
    <ButtonGroup>
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
    </ButtonGroup>
  </div>
  <div>
    <h3>Disabled</h3>
    <ButtonGroup>
      <Button type='primary-hollow' disabled onClick={() => alert('primary-hollow')}>
        primary-hollow
      </Button>
      <Button type='secondary-hollow' disabled onClick={() => alert('secondary-hollow')}>
        secondary-hollow
      </Button>
      <Button type='success-hollow' disabled onClick={() => alert('success-hollow')}>
        success-hollow
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
    </ButtonGroup>
  </div>
</div>
```

#### Special Case Buttons

```jsx
import { ButtonGroup } from '@Domain/Buttons';

<div>
  <div>
    <h3>Enabled</h3>
    <ButtonGroup>
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
      <Button type='back' onClick={() => alert('back')}>
        back
      </Button>
      <Button type='menu-action' onClick={() => alert('menu-action')}>
        menu-action
      </Button>
    </ButtonGroup>
  </div>
  <div>
    <h3>Disabled</h3>
    <ButtonGroup>
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
      <Button type='back' disabled onClick={() => alert('back')}>
        back
      </Button>
      <Button type='menu-action' disabled onClick={() => alert('menu-action')}>
        menu-action
      </Button>
    </ButtonGroup>
  </div>
</div>
```


#### Button sizes
```jsx
import { ButtonGroup } from '@Domain/Buttons';

<div>
  <ButtonGroup>
    <Button size='small' onClick={() => alert('small')}>
      small
    </Button>
    <Button size='medium' onClick={() => alert('medium')}>
      medium
    </Button>
    <Button size='large' onClick={() => alert('large')}>
      large
    </Button>
  </ButtonGroup>
</div>
```

#### Buttons with Icons
```jsx
import { ButtonGroup } from '@Domain/Buttons';
import { FontAwesomeIcon } from '@Domain/Icons';

<div>
  <div>
    <ButtonGroup>
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
    </ButtonGroup>
  </div>
  <div>
    <ButtonGroup>
      <Button
        icon={<FontAwesomeIcon type='star' />}
        size='small'
      >
        small
      </Button>
      <Button
        icon={<FontAwesomeIcon type='star' />}
        size='medium'
      >
        medium
      </Button>
      <Button
        icon={<FontAwesomeIcon type='star' />}
        size='large'
      >
        large
      </Button>
    </ButtonGroup>
  </div>
</div>
```

#### Spinner buttons

```jsx
import { ButtonGroup } from '@Domain/Buttons';
import { FontAwesomeIcon } from '@Domain/Icons';

<div>
  <div>
    <h3>Enabled</h3>
    <ButtonGroup>
      <Button showSpinner type='primary' onClick={() => alert('primary')}>
        primary
      </Button>
      <Button showSpinner type='secondary' onClick={() => alert('secondary')}>
        secondary
      </Button>
      <Button showSpinner type='success' onClick={() => alert('success')}>
        success
      </Button>
      <Button showSpinner type='warning' onClick={() => alert('warning')}>
        warning
      </Button>
      <Button showSpinner type='alert' onClick={() => alert('alert')}>
        alert
      </Button>
      <Button showSpinner type='neutral' onClick={() => alert('neutral')}>
        neutral
      </Button>
      <Button showSpinner type='highlight' onClick={() => alert('highlight')}>
        highlight
      </Button>
      <Button showSpinner type='light' onClick={() => alert('light')}>
        light
      </Button>
      <Button showSpinner type='dark' onClick={() => alert('dark')}>
        dark
      </Button>
    </ButtonGroup>
  </div>
  <div>
    <h3>Disabled</h3>
    <ButtonGroup>
      <Button showSpinner type='primary' disabled onClick={() => alert('primary')}>
        primary
      </Button>
      <Button showSpinner type='secondary' disabled onClick={() => alert('secondary')}>
        secondary
      </Button>
      <Button showSpinner type='success' disabled onClick={() => alert('success')}>
        success
      </Button>
      <Button showSpinner type='warning' disabled onClick={() => alert('warning')}>
        warning
      </Button>
      <Button showSpinner type='alert' disabled onClick={() => alert('alert')}>
        alert
      </Button>
      <Button showSpinner type='neutral' disabled onClick={() => alert('neutral')}>
        neutral
      </Button>
      <Button showSpinner type='highlight' disabled onClick={() => alert('highlight')}>
        highlight
      </Button>
      <Button showSpinner type='light' disabled onClick={() => alert('light')}>
        light
      </Button>
      <Button showSpinner type='dark' disabled onClick={() => alert('dark')}>
        dark
      </Button>
    </ButtonGroup>
  </div>
  <div>
    <h3>Borderless Disabled</h3>
    <ButtonGroup>
      <Button showSpinner disabled type='primary-borderless' disabled onClick={() => alert('primary-borderless')}>
        primary-borderless
      </Button>
      <Button showSpinner disabled type='secondary-borderless' disabled onClick={() => alert('secondary-borderless')}>
        secondary-borderless
      </Button>
      <Button showSpinner disabled type='success-borderless' disabled onClick={() => alert('success-borderless')}>
        success-borderless
      </Button>
      <Button showSpinner disabled type='warning-borderless' disabled onClick={() => alert('warning-borderless')}>
        warning-borderless
      </Button>
      <Button showSpinner disabled type='alert-borderless' disabled onClick={() => alert('alert-borderless')}>
        alert-borderless
      </Button>
      <Button showSpinner disabled type='neutral-borderless' disabled onClick={() => alert('neutral-borderless')}>
        neutral-borderless
      </Button>
      <Button showSpinner disabled type='highlight-borderless' disabled onClick={() => alert('highlight-borderless')}>
        highlight-borderless
      </Button>
      <Button showSpinner disabled type='light-borderless' disabled onClick={() => alert('light-borderless')}>
        light-borderless
      </Button>
      <Button showSpinner disabled type='dark-borderless' disabled onClick={() => alert('dark-borderless')}>
        dark-borderless
      </Button>
    </ButtonGroup>
  </div>
  <div>
    <h3>Hollow Disabled</h3>
    <ButtonGroup>
      <Button showSpinner type='primary-hollow' disabled onClick={() => alert('primary-hollow')}>
        primary-hollow
      </Button>
      <Button showSpinner type='secondary-hollow' disabled onClick={() => alert('secondary-hollow')}>
        secondary-hollow
      </Button>
      <Button showSpinner type='success-hollow' disabled onClick={() => alert('success-hollow')}>
        success-hollow
      </Button>
      <Button showSpinner type='warning-hollow' disabled onClick={() => alert('warning-hollow')}>
        warning-hollow
      </Button>
      <Button showSpinner type='alert-hollow' disabled onClick={() => alert('alert-hollow')}>
        alert-hollow
      </Button>
      <Button showSpinner type='neutral-hollow' disabled onClick={() => alert('neutral-hollow')}>
        neutral-hollow
      </Button>
      <Button showSpinner type='highlight-hollow' disabled onClick={() => alert('highlight-hollow')}>
        highlight-hollow
      </Button>
      <Button showSpinner type='light-hollow' disabled onClick={() => alert('light-hollow')}>
        light-hollow
      </Button>
      <Button showSpinner type='dark-hollow' disabled onClick={() => alert('dark-hollow')}>
        dark-hollow
      </Button>
    </ButtonGroup>
  </div>
  <div>
    <h3>Special Case Diabled</h3>
    <ButtonGroup>
      <Button showSpinner type='add' disabled onClick={() => alert('add')}>
        add
      </Button>
      <Button showSpinner type='add-subtle' disabled onClick={() => alert('add-subtle')}>
        add-subtle
      </Button>
      <Button showSpinner type='delete' disabled onClick={() => alert('delete')}>
        delete
      </Button>
      <Button showSpinner type='delete-subtle' disabled onClick={() => alert('delete-subtle')}>
        delete-subtle
      </Button>
      <Button showSpinner type='resolve' disabled onClick={() => alert('resolve')}>
        resolve
      </Button>
      <Button showSpinner type='skip' disabled onClick={() => alert('skip')}>
        skip
      </Button>
      <Button showSpinner type='cancel' disabled onClick={() => alert('cancel')}>
        cancel
      </Button>
      <Button showSpinner type='back' disabled onClick={() => alert('back')}>
        back
      </Button>
      <Button showSpinner type='menu-action' disabled onClick={() => alert('menu-action')}>
        menu-action
      </Button>
    </ButtonGroup>
  </div>
  <div>
    <h3>Sizes</h3>
    <ButtonGroup>
      <Button showSpinner size='small' type='primary'  onClick={() => alert('small')}>
        small
      </Button>
      <Button showSpinner size='medium' type='primary'  onClick={() => alert('medium')}>
        medium
      </Button>
      <Button showSpinner size='large' type='primary'  onClick={() => alert('large')}>
        large
      </Button>
    </ButtonGroup>
  </div>
</div>
```

### Legacy Button Support

Buttons have a `hasLegacyMargins` Prop if the old margin support is required.

```jsx
<div>
  <Button hasLegacyMargins>
    Button 1
  </Button>
  <Button hasLegacyMargins>
    Button 2
  </Button>
  <Button hasLegacyMargins>
    Button 3
  </Button>
</div>
```


Buttons can be used in blade pages by using the `button` classname. This also adds a separate `holster` button type
for dropdowns. These buttons always have the legacy margins, and should not be used in a react context.

```jsx
<div>
  <div>
    <h3>Enabled</h3>
    <button className='button' onClick={() => alert('primary')}>
      default
    </button>
    <button className='button primary' onClick={() => alert('primary')}>
      primary
    </button>
    <button className='button secondary' onClick={() => alert('secondary')}>
      secondary
    </button>
    <button className='button success' onClick={() => alert('success')}>
      success
    </button>
    <button className='button warning' onClick={() => alert('warning')}>
      warning
    </button>
    <button className='button alert' onClick={() => alert('alert')}>
      alert
    </button>
    <button className='button neutral' onClick={() => alert('neutral')}>
      neutral
    </button>
    <button className='button highlight' onClick={() => alert('highlight')}>
      highlight
    </button>
    <button className='button primary-hollow' onClick={() => alert('highlight')}>
      primary-hollow
    </button>
    <button className='button primary' disabled onClick={() => alert('primary')}>
      disabled
    </button>
    <button className='button holster' onClick={() => alert('yo')}>
       <span class="fa fa-ellipsis-v"></span>
    </button>
    <button className='button remove' onClick={() => alert('remove')}>
       <span class="fa fa-times"></span>
    </button>
  </div>
</div>
```
