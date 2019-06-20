#### Default AvatarGroup

```jsx
  <AvatarGroup
    avatars={[
      {
        initials: 'JW',
        imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      },
      {
        initials: 'JW',
        imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      },
      {
        initials: 'BD',
        imageUrl: 'badimageurl'
      },
      {
        initials: 'AB',
        imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      },
      {
        initials: 'JW',
        imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      },
      {
        initials: 'JW',
        imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      },
      {
        initials: 'JW',
        imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      },
      {
        initials: 'JW',
        imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      }
    ]}
    componentContext='example1'
  />
```

#### Configuring AvatarGroup counts

```jsx
  <AvatarGroup
    avatars={new Array(10).fill().map(() => ({
      initials: 'JW',
      imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    }))}
    maxAvatarCount={3}
  />
```

`AvatarGroup` can optionally hide the overflow count if desired:

```jsx
  <AvatarGroup
    avatars={new Array(10).fill().map(() => ({
      initials: 'JW',
      imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    }))}
    showOverflowCount={false}
  />
```

Or the limit can be removed entirely:

```jsx
<div style={{ overflowX: 'scroll', width: '100%' }}>
  <AvatarGroup
    avatars={new Array(50).fill().map(() => ({
      initials: 'JW',
      imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    }))}
    maxAvatarCount={null}
  />
</div>
```

#### Example of using small size with dropdowns

`AvatarGroup` is designed to be used inline with a body of text. It offers several sizes and
supports many dropdown props.

```jsx
import { Variables } from '@Common';
import { DropdownMenu } from '@Domain/Popovers';
import { Brick, Text } from '@Domain/Typographies';

const avatarInfo = [
  {
    initials: 'JW',
    imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg',
    text: 'John Wick',
    onClick: () => alert('Test')
  },
  {
    initials: 'JW',
    imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg',
    text: 'John Wick',
    onClick: () => alert('Test')
  },
  {
    initials: 'BD',
    imageUrl: 'badimageurl',
    text: 'Bad Image',
    onClick: () => alert('Test')
  },
  {
    initials: 'AB',
    text: 'Abe Babe',
    onClick: () => alert('Test')
  },
  {
    initials: 'JW',
    imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg',
    text: 'John Wick',
    onClick: () => alert('Test')
  },
  {
    initials: 'JW',
    imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg',
    text: 'John Wick',
    onClick: () => alert('Test')
  },
  {
    initials: 'JW',
    imageUrl: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg',
    text: 'John Wick',
    onClick: () => alert('Test')
  }
];

<div>
  <Text
    weight={Variables.FontWeight.fwSemiBold}
  >
    Direct Reports
  </Text>
  {' '}
  <Brick
    color='secondary'
  >
    assigned to Lyanna Moreton
  </Brick>
  {' '}
  <DropdownMenu
    toggleComponent={({ toggleMenu, toggleComponentRef, ariaProps }) =>
      <AvatarGroup
        avatars={avatarInfo}
        size='small'
        isHoverable
        onClick={toggleMenu}
        wrapperRef={toggleComponentRef}
        wrapperOverrides={ariaProps}
      />
    }
    sections={avatarInfo}
  />
</div>
```
