#### Basic FontAwesome Icon

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
  />
```

#### Basic Intelli Icon

```jsx
const { IntelliIcon } = require('./IntelliIcon');
  <IntelliIcon
    type='smile'
  />
```

#### Large Icon

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    isLarge
  />
```

#### 4x size Icon

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    size={4}
  />
```

#### Spinning Icon

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    isSpinning
  />
```

#### Coloured Icon

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    color='rgb(204,204,0)'
  />
```

#### Mix and match

Icon props can be used together!

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    color='rgb(204,204,0)'
    isSpinning
    size={3}
  />
```

#### Icon with badge

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');

<div>
  <div>
    <FontAwesomeIcon
      type='inbox'
      size={3}
      badge={
        <Badge
          label={6}
          backgroundColor='rgb(71, 82, 93)'
          color='white'
        />
      }
    />
  </div>
  
  <div>
    <FontAwesomeIcon
      type='inbox'
      size={4}
      badge={
        <Badge
          label={6}
          backgroundColor='rgb(71, 82, 93)'
          color='white'
        />
      }
    />
  </div>
  
  <div>
    <FontAwesomeIcon
      type='inbox'
      size={5}
      badge={
        <Badge
          label={6}
          backgroundColor='rgb(71, 82, 93)'
          color='white'
        />
      }
    />
  </div>
    
</div>
```

#### Icon fetching

```jsx
const { FontAwesomeIcon } = require('./FontAwesomeIcon');

<FontAwesomeIcon
  type='inbox'
  size={1}
  badge={
    <Badge
      label={6}
      backgroundColor='rgb(71, 82, 93)'
      color='white'
      pending
    />
  }
/>
```
