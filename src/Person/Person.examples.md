#### Basic Person 

```jsx
  <Person
    avatarInitials='JW'
    avatarStatusColor='primary'
    primaryText='John Wick'
  />
```

```jsx
  <Person
    avatarInitials='JW'
    avatarStatusColor='primary'
    primaryText='John Wick'
    secondaryText='Guy Killer'
  />
```

```jsx
const { FontAwesomeIcon } = require('../Icon');

  <Person
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
  <Person
    avatarInitials='JW'
    avatarStatusColor='success'
    primaryText='John Wick'
    isCompact
  />
```


```jsx
  <Person
    avatarInitials='JW'
    avatarStatusColor='success'
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
  />
```
