#### Avatar using Initials

```jsx
<div>
  <Avatar
    initials='JW'
    size='xlarge'
  />
  <Avatar
    initials='JW'
    size='large'
  />
  <Avatar
    initials='JW'
    size='medium'
  />
  <Avatar
    initials='JW'
    size='small'
  />
</div>
```

#### Avatar using ImageUrl

```jsx
<div>
  <Avatar
    initials='JW'
    size='xlarge'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
  <Avatar
    initials='JW'
    size='large'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
  <Avatar
    initials='JW'
    size='medium'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
  <Avatar
    initials='JW'
    size='small'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
  />
</div>
```

#### Avatar using statusDot

```jsx
<div>
  <div>
    <Avatar
      initials='JW'
      size='xlarge'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='primary'
    />
    <Avatar
      initials='JW'
      size='large'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='primary'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='primary'
    />
    <Avatar
      initials='JW'
      size='small'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='primary'
    />
  </div>
  <div>
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='primary'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='secondary'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='success'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='warning'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='alert'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='highlight'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='neutral'
    />
    <Avatar
      initials='JW'
      size='medium'
      imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      statusDot='dark'
    />
  </div>
</div>
```

#### Avatar using status icon

```jsx

const { Variables } = require('@Common');
const { FontAwesomeIcon } = require('@Domain/Icons');

<div>
    <div>
      <Avatar
        initials='JW'
        size='medium'
        statusIcon={<FontAwesomeIcon type='solid' icon='arrow-right' color={Variables.Color.i400} size='small'/>}
      />
    </div>
    <div>
      <Avatar
        initials='JW'
        size='medium'
        statusDot='success'
        statusIcon={<FontAwesomeIcon type='solid' icon='arrow-right' color={Variables.Color.i400} size='small' />}
      />
    </div>
</div>

```

#### Avatar using hover props

```jsx
<div>
  <Avatar
    initials='JW'
    size='xlarge'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
  <Avatar
    initials='JW'
    size='large'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
  <Avatar
    initials='JW'
    size='medium'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
  <Avatar
    initials='JW'
    size='small'
    imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
    hoverIcon='camera'
    hoverLabel='Change Picture'
    handleClick={() => {}}
  />
</div>
```
