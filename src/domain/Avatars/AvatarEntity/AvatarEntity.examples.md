#### Basic AvatarEntity

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

<>
  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
  />
  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
  />
  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
</>
```

#### Small AvatarEntity

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

<>
  <AvatarEntity
    size='small'
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
  />
  <AvatarEntity
    size='small'
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
  />
  <AvatarEntity
    size='small'
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
</>
```

#### Compact AvatarEntity

Compact style will hide the tertiary text and put primary text and secondary text on one line

```jsx
import { Props, Variables } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';
import { FontAwesomeIcon } from '@Domain/Icons';

<>
  <AvatarEntity
    isCompact
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
  <AvatarEntity
    isCompact
    size='small'
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
</>
```

#### Hoverable AvatarEntity

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

<AvatarEntity
  initials='JW'
  statusDot={AvatarStatusDotColor.Green}
  primaryText='John Wick'
  isCompact
  isHoverable
/>
```

#### Label are truncated to support long text
It requires the parent has hidden override css style.

```jsx
  <AvatarEntity
    initials='JW'
    primaryText='I have a very very long name and I do not want the style to break because of my very very long name'
    secondaryText='I have a very very long position title and I do not want the style to break because of it'
  />
```
