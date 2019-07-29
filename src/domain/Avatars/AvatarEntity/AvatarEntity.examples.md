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
const { Variables } = require('@Common');
const { FontAwesomeIcon } = require('@Domain/Icons');

  <AvatarEntity
    initials='JW'
    statusDot='primary'
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
  <AvatarEntity
    initials='JW'
    statusDot='success'
    primaryText='John Wick'
    isCompact
  />
```


```jsx
const { Variables } = require('@Common');
const { FontAwesomeIcon } = require('@Domain/Icons');

  <AvatarEntity
    initials='JW'
    statusDot='success'
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
const { Variables } = require('@Common');
const { FontAwesomeIcon } = require('@Domain/Icons');

  <AvatarEntity
    initials='JW'
    statusDot='primary'
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
const { FontAwesomeIcon } = require('@Domain/Icons');

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
     <AvatarEntity
       initials='JW'
       statusDot='primary'
       primaryText='John Wick'
       secondaryText='Guy Killer'
       isHoverable
       primaryTextType='small'
       secondaryTextType='small'
       isCompact
     />
```

```jsx
     <AvatarEntity
       initials='JW'
       statusDot='primary'
       primaryText='John Wick'
       secondaryText='Guy Killer'
       tertiaryText='Job Ending in 3 days'
       isHoverable
        primaryTextType='heading'
        secondaryTextType='body'
        tertiaryTextType='small'
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
