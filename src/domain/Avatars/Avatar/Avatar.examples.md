#### Avatar using Initials

```jsx
import { Props } from '@Common';

<div>
  <Avatar
    initials='JW'
    size={Props.AvatarSize.XLarge}
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Large}
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Medium}
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Small}
  />
</div>
```

#### Avatar using ImageUrl

```jsx
import { Props } from '@Common';

<div>
  <Avatar
    initials='JW'
    size={Props.AvatarSize.XLarge}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Large}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Medium}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Small}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
</div>
```

#### Avatar using statusDot

```jsx
import { Props } from '@Common';

<div>
  <div>
    <Avatar
      initials='JW'
      size={Props.AvatarSize.XLarge}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Indigo}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Large}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Indigo}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Indigo}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Small}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Indigo}
    />
  </div>
  <div>
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Indigo}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Blue}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Green}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Orange}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Red}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Cyan}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Neutral}
    />
    <Avatar
      initials='JW'
      size={Props.AvatarSize.Medium}
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot={Props.AvatarStatusDotColor.Dark}
    />
  </div>
</div>
```

#### Avatar using status icon

```jsx
const { Props, Variables } = require('@Common');
const { FontAwesomeIcon } = require('@Domain/Icons');

<div>
    <div>
      <Avatar
        initials='JW'
        size={Props.AvatarSize.Medium}
        statusIcon={<FontAwesomeIcon type='solid' icon='arrow-right' color={Variables.Color.i400} size='small'/>}
      />
    </div>
    <div>
      <Avatar
        initials='JW'
        size={Props.AvatarSize.Medium}
        statusDot={Props.AvatarStatusDotColor.Green}
        statusIcon={<FontAwesomeIcon type='solid' icon='arrow-right' color={Variables.Color.i400} size='small' />}
      />
    </div>
</div>

```

#### Avatar using hover props

```jsx
import { Props } from '@Common';

<div>
  <Avatar
    initials='JW'
    size={Props.AvatarSize.XLarge}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Large}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Medium}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
  <Avatar
    initials='JW'
    size={Props.AvatarSize.Small}
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
</div>
```
