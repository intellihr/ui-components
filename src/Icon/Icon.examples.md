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
