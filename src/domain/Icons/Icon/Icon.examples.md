#### Basic FontAwesome Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='solid'
    icon='star'
  />
```

#### Basic Intelli Icon

```jsx
import { IntelliIcon } from '@Domain/Icons';

  <IntelliIcon
    icon='smile'
  />
```

#### Extra large Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='light'
    icon='star'
    size='xlarge'
  />
```

#### Duotone Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';
  <FontAwesomeIcon
    type='duotone'
    icon='layer-group'
    size='xlarge'
  />
```

#### Duototone Icon with custom colors 

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

<>
  <FontAwesomeIcon
    type='duotone'
    icon='cash-register'
    size='xlarge'
    duotoneColors={{
      primaryColor: 'rgba(52, 158, 235, 1)',
      secondaryColor: '#eba313'
    }}
  />
  </>
```

#### Spinning Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='regular'
    icon='star'
    isSpinning
  />
```

#### Coloured Icon

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='solid'
    icon='star'
    color='rgb(204,204,0)'
  />
```

#### Mix and match

Icon props can be used together!

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <FontAwesomeIcon
    type='regular'
    icon='star'
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
      type='light'
      icon='inbox'
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
      type='regular'
      icon='inbox'
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
      type='solid'
      icon='inbox'
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
      type='solid'
      icon='inbox'
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
      type='regular'
      icon='inbox'
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
      type='light'
      icon='inbox'
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
