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
    size='noramlCompact'
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
  <AvatarEntity
    size='smallCompact'
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
    tertiaryText='I have a very very long position title and I do not want the style to break because of it'
  />
```

#### Legacy

Old pages used the `.person-tag`, `.profile-picture-badge` and `.badge-{size}` classes.
These should be avoided where possible, but are provided as legacy non-javascript support.

```jsx
<div>
  <div class="grid-x person-tag">
    <div class="avatar-container">
       <span class="profile-picture-badge badge-medium">
         <img src="http://www.gamasutra.com/db_area/images/news/2015/Oct/256722/KojimaCasualCloseUp.jpg" />
         <p>HK</p>
       </span>
    </div>
    <div class="display-name">
      <a href="https://www.google.com">
        Hideo Kojima
      </a>
      <div class="position-title">
        A Hideo Kojima Position Title
      </div>
    </div>
  </div>
  <div class="grid-x person-tag">
    <div class="avatar-container">
      <span class="initials-badge badge-medium">
        HK
        <span class="extended-leave-circle"></span>
      </span>
    </div>
    <div class="display-name">
      Hideo Kojima
      <div class="position-title">
        A Hideo Kojima Position Title
      </div>
    </div>
  </div>
</div>
```
