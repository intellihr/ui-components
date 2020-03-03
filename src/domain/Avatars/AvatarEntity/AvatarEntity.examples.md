#### Basic AvatarEntity

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
  />
```

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    secondaryText='Guy Killer'
  />
```

```jsx
import { Props, Variables } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';
import { FontAwesomeIcon } from '@Domain/Icons';

  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    statusIcon={
      <FontAwesomeIcon type='solid' icon='arrow-right' color={Variables.Color.i400} size='small'/>
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
  />
```

#### Compact

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Green}
    primaryText='John Wick'
    isCompact
  />
```


```jsx
import { Props, Variables } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';
import { FontAwesomeIcon } from '@Domain/Icons';

  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Green}
    statusIcon={
      <FontAwesomeIcon type='solid' icon='arrow-right' color={Variables.Color.i400} size='xsmall' />
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
  />
```

#### isHoverable

```jsx
import { Props, Variables } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';
import { FontAwesomeIcon } from '@Domain/Icons';

  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    statusIcon={
      <FontAwesomeIcon type='solid' icon='arrow-right' color={Variables.Color.i400} size='small'/>
    }
    primaryText='John Wick'
    secondaryText='Guy Killer'
    tertiaryText='Job Ending in 3 days'
    isHoverable
  />
```

```jsx
import { FontAwesomeIcon } from '@Domain/Icons';

  <AvatarEntity
    initials='JW'
    primaryText='John Wick'
    secondaryText='Guy Killer'
    isCompact
    isHoverable
  />
```

#### Customised text type

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

     <AvatarEntity
       initials='JW'
       statusDot={AvatarStatusDotColor.Indigo}
       primaryText='John Wick'
       secondaryText='Guy Killer'
       isHoverable
       primaryTextType={Props.TypographyType.Small}
       secondaryTextType={Props.TypographyType.Small}
       isCompact
     />
```

```jsx
import { Props } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

     <AvatarEntity
       initials='JW'
       statusDot={AvatarStatusDotColor.Indigo}
       primaryText='John Wick'
       secondaryText='Guy Killer'
       tertiaryText='Job Ending in 3 days'
       isHoverable
        primaryTextType={Props.TypographyType.Heading}
        secondaryTextType={Props.TypographyType.Body}
        tertiaryTextType={Props.TypographyType.Small}
     />
```

#### Very long name and position title

```jsx
  <AvatarEntity
    initials='JW'
    primaryText='I have a very very long name and I do not want the style to break because of my very very long name'
    secondaryText='I have a very very long position title and I do not want the style to break because of it'
  />
```

#### Colored & Weighted Text

```jsx
import { Props, Variables } from '@Common';
import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';

  <AvatarEntity
    initials='JW'
    statusDot={AvatarStatusDotColor.Indigo}
    primaryText='John Wick'
    primaryWeight={Variables.FontWeight.fwBold}
    primaryColor={Variables.Color.b600}
    secondaryText='Guy Killer'
    secondaryWeight={Variables.FontWeight.fwSemiBold}
    secondaryColor={Variables.Color.b300}
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
