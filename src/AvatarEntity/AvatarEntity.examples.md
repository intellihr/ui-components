#### Basic AvatarEntity 

```jsx
  <AvatarEntity
    avatarInitials='JW'
    avatarStatusColor='primary'
    primaryText='John Wick'
  />
```

```jsx
  <AvatarEntity
    avatarInitials='JW'
    avatarStatusColor='primary'
    primaryText='John Wick'
    secondaryText='Guy Killer'
  />
```

```jsx
const { FontAwesomeIcon } = require('../Icon');

  <AvatarEntity
    avatarInitials='JW'
    avatarStatusColor='primary'
    avatarStatusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
```

#### Compact

```jsx
  <AvatarEntity
    avatarInitials='JW'
    avatarStatusColor='success'
    primaryText='John Wick'
    isCompact
  />
```


```jsx
const { FontAwesomeIcon } = require('../Icon');

  <AvatarEntity
    avatarInitials='JW'
    avatarStatusColor='success'
    avatarStatusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
  />
```

#### isHoverable

```jsx
const { FontAwesomeIcon } = require('../Icon');

  <AvatarEntity
    avatarInitials='JW'
    avatarStatusColor='primary'
    avatarStatusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
    isHoverable
  />
```

```jsx
const { FontAwesomeIcon } = require('../Icon');

  <AvatarEntity
    avatarInitials='JW'
    avatarStatusColor='success'
    avatarStatusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
    isHoverable
  />
```
