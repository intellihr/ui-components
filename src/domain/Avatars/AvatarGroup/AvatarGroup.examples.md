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
  />
```

#### Example of using small size with dropdowns

```jsx
const avatars = [
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
    initials: 'AB'
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
];

const dropdownSections = [
  {
    text: 'John Wick',
    onClick: () => alert('Test')
  },
  {
    text: 'John Wick',
    href: 'https://www.intellihr.com.au'
  },
  {
    text: 'Bad Image',
    onClick: () => alert('Test')
  },
  {
    text: 'Abe Babe',
    onClick: () => alert('Test')
  },
  {
    text: 'John Wick',
    onClick: () => alert('Test')
  },
  {
    text: 'John Wick',
    onClick: () => alert('Test')
  }
];

<div>
  <Text
    weight='heavy'
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
        avatars={avatars}
        size='small'
        isHoverable
        onClick={toggleMenu}
        wrapperRef={toggleComponentRef}
        wrapperOverrides={ariaProps}
      />
    }
    sections={dropdownSections}
  />
</div>
```
