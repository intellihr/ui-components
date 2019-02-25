#### Basic Text

```jsx
  <Text>
    Hello! I am text
  </Text>
```

#### Types

```jsx
  <div>
    <Text isInline={false} type='xsmall'>
      X-Small
    </Text>
    <Text isInline={false} type='small'>
      Small
    </Text>
    <Text isInline={false} type='body'>
      Body (default)
    </Text>
    <Text isInline={false} type='heading'>
      Heading
    </Text>
    <Text isInline={false} type='display'>
      Display
    </Text>
    <Text isInline={false} type='display-large'>
      Display Large
    </Text>
  </div>
```

#### Tags
A tag can be provided to turn any of the Text options into a Heading, or paragraph tag. By default Text is a span.

```jsx
  <div>
    <Text tag='h1' type='display-large'>
      Inspect me! I'm a h1 tag
    </Text>
    <Text tag='p' type='body'>
      Inspect me! I'm a p tag
    </Text>
  </div>
```

#### Weight

```jsx
  <div>
    <Text isInline={false} weight='normal'>
      Normal (default)
    </Text>
    <Text weight='heavy'>
      Heavy
    </Text>
  </div>
```

#### Color

```jsx
const { Variables } = require('../../../common');

  <div>
    <Text color={Variables.Color.b400}>
      Hello! I am blue text
    </Text>
  </div>
```

#### Upper

```jsx
  <Text isUpper>
    Hello! You will see me in all caps
  </Text>
```

#### Inline (false)

```jsx
<div>
  <Text isInline={false}>
    Hello!
  </Text>
  <Text>
    I am text
  </Text>
</div>
```

#### Mix and Match

```jsx
import { Variables } from '@Common';

<div>
  <Text isInline={false} color={Variables.Color.r400}>
    Hello!
  </Text>
  <Text type='small' weight='heavy' isUpper>
    I am text
  </Text>
</div>
```

#### Data attribute

```jsx
  <Text
    dataAttributes={{
      role: 'myRole',
      otherKey: 'myOtherKey',
    }}
  >
    Hello! I am text with data attributes
  </Text>
```

#### Hint (Tooltip)
```jsx
  <Text
    hintComponentProps={{
      hint: 'I can be a string or a JSX Element!'
    }}
  >
    Hover me
  </Text>
```

#### Hint (Popover)
```jsx
  const { Props } = require('@Common');

  <Text
    hintComponentProps={{
      hint: 'I can be a string or a JSX Element!',
      hintType: Props.HintWrapperType.Popover
    }}
  >
    Hover me
  </Text>
```
