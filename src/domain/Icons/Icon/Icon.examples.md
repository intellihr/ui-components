#### Basic FontAwesome Icon

```jsx
const { FontAwesomeIcon } = require('../FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
  />
```

#### Basic Intelli Icon

```jsx
const { IntelliIcon } = require('../IntelliIcon');
  <IntelliIcon
    type='smile'
  />
```

#### Extra large Icon

```jsx
const { FontAwesomeIcon } = require('../FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    size='xlarge'
  />
```

#### Spinning Icon

```jsx
const { FontAwesomeIcon } = require('../FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    isSpinning
  />
```

#### Coloured Icon

```jsx
const { FontAwesomeIcon } = require('../FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    color='rgb(204,204,0)'
  />
```

#### Mix and match

Icon props can be used together!

```jsx
const { FontAwesomeIcon } = require('../FontAwesomeIcon');
  <FontAwesomeIcon
    type='star'
    color='rgb(204,204,0)'
    isSpinning
    size='large'
  />
```

#### Icon with badge

```jsx
const { FontAwesomeIcon } = require('../FontAwesomeIcon');

<div>
  <div>
    <FontAwesomeIcon
      type='inbox'
      size='large'
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
      size='xlarge'
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
      size='xxlarge'
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
const { FontAwesomeIcon } = require('../FontAwesomeIcon');

<div>
  <div>
    <FontAwesomeIcon
      type='inbox'
      size='large'
      badge={
        <Badge
          label={6}
          backgroundColor='rgb(71, 82, 93)'
          color='white'
          pending
        />
      }
    />
  </div>

  <div>
    <FontAwesomeIcon
      type='inbox'
      size='xlarge'
      badge={
        <Badge
          label={6}
          backgroundColor='rgb(71, 82, 93)'
          color='white'
          pending
        />
      }
    />
  </div>

  <div>
    <FontAwesomeIcon
      type='inbox'
      size='xxlarge'
      badge={
        <Badge
          label={6}
          backgroundColor='rgb(71, 82, 93)'
          color='white'
          pending
        />
      }
    />
  </div>

</div>
```
