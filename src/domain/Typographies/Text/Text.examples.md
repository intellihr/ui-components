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
const { Variables } = require('../../../common');

  <div>
    <Text isInline={false} weight={Variables.FontWeight.fwNormal}>
      Normal (default)
    </Text>
    <Text isInline={false} weight={Variables.FontWeight.fwSemiBold}>
      Semi Bold
    </Text>
    <Text weight={Variables.FontWeight.fwBold}>
      Bold
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

#### Text.Link

Use Text to style your Text.Link!

```jsx
const { Variables } = require('../../../common');

<div>
  <b>Default</b>
  <div style={{padding: '20px', backgroundColor: 'whitesmoke'}}>
    <Text>
        Hello! <Text.Link href='https://www.google.com' underlineOnHover>I am link text</Text.Link> and <Text.Link onClick={()=> {alert('Hey!')}}>I have onClick!</Text.Link>
    </Text>
    <br/>
    <Text isTruncated type='display' weight={Variables.FontWeight.fwBold}>
        Hello! <Text.Link href='https://www.google.com' underlineOnHover>I am link text</Text.Link> and <Text type='xsmall'><Text.Link onClick={()=> {alert('Hey!')}}>I have onClick!</Text.Link></Text>
    </Text>
  </div>
    <br/><br/>
  <b>Unstyled</b>
  <br/>
  The unstyled variant will inherit from it's parent. Usage is not recommended but provides an escape hatch in some unlikely situations.
  <b>If there is a new design pattern for links, consider adding it as a new variant instead</b> 
  <div style={{padding: '20px', backgroundColor: 'whitesmoke'}}>
    <Text color='red'>
        Hello! <Text.Link href='https://www.google.com' variant='unstyled' underlineOnHover>I am an unstyled link</Text.Link>
    </Text>
  </div>
</div>
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
  <Text type='small' weight={Variables.FontWeight.fwSemiBold} isUpper>
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

#### Margin

```jsx
  <Text
    margins={{
         top: 20,
         left: 20,
         right: 20,
         bottom: 20
       }}
  >
    Hello! I have special margin
  </Text>
```
