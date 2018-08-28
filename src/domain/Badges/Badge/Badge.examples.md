#### Simple Badge

```jsx
const { Variables } = require('../../../common');

<div>
  <Badge
    label={6}
    size='small'
    backgroundColor={Variables.Color.n700}
    color={Variables.Color.n100}
  />

  <Badge
    label={6}
    size='medium'
    backgroundColor={Variables.Color.n700}
    color={Variables.Color.n100}
  />

  <Badge
    label={6}
    size='large'
    backgroundColor={Variables.Color.n700}
    color={Variables.Color.n100}
  />
</div>
```

#### Spinning Badge

```jsx
<div>
  <Badge
    pending
    label={6}
    size='small'
  />

  <Badge
    pending
    label={6}
    size='medium'
  />

  <Badge
    pending
    label={6}
    size='large'
  />
</div>
```
