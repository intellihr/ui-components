#### Basic FontAwesome Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='star'
  />
```

#### Basic Intelli Icon

```jsx
import { IntelliIcon } from '@Domain/Icons';

  <IntelliIcon
    type='smile'
  />
```

#### Extra large Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='star'
    size='xlarge'
  />
```

#### Spinning Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='star'
    isSpinning
  />
```

#### Coloured Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='star'
    color='rgb(204,204,0)'
  />
```

#### Mix and match

Icon props can be used together!

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='star'
    color='rgb(204,204,0)'
    isSpinning
    size='large'
  />
```

#### Icon with badge

```jsx
import { Badge } from '@Domain/Badges';
import { FontAwesomeIcon } from '@Domain/Icons';

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
import { Badge } from '@Domain/Badges';
import { FontAwesomeIcon } from '@Domain/Icons';

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
