#### Basic AvatarEntity 

```jsx
  <AvatarEntity
    initials='JW'
    statusDot='primary'
    primaryText='John Wick'
  />
```

```jsx
  <AvatarEntity
    initials='JW'
    statusDot='primary'
    primaryText='John Wick'
    secondaryText='Guy Killer'
  />
```

```jsx
const { FontAwesomeIcon } = require('../Icon');

  <AvatarEntity
    initials='JW'
    statusDot='primary'
    statusIcon={
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
    initials='JW'
    statusDot='success'
    primaryText='John Wick'
    isCompact
  />
```


```jsx
const { FontAwesomeIcon } = require('../Icon');

  <AvatarEntity
    initials='JW'
    statusDot='success'
    statusIcon={
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
    initials='JW'
    statusDot='primary'
    statusIcon={
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
    initials='JW'
    statusDot='success'
    statusIcon={
      <FontAwesomeIcon type='arrow-right' color='#432df3' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
    isHoverable
  />
```
