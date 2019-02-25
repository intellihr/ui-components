#### Tooltip Hint
A hint wrapper can be applied to any element - by default it will be styled as a tooltip

```jsx
import { Brick } from '@Domain/Typographies';

<div>
  <HintWrapper
    hint='Never trust a cat'
  >
    <Brick>
      Hover me for a tip :)
    </Brick>
  </HintWrapper>
</div>
```

#### Popover Hint
The content for both the tooltip and popover style of hint can take either a string, or a JSX Element
```jsx
import { Variables } from '@Common';
import { Brick, Text } from '@Domain/Typographies';

<div>
  <HintWrapper
    hint={
      <>
        <Text type='heading' isInline={false}>Tooltip Heading</Text>
        <Text type='small'>Some explanation of an element</Text>
      </>
    }
    hintType='popover'
  >
    <Text>
      Hover me for a tip :)
    </Text>
  </HintWrapper>
</div>
```

#### Hint with a Custom Width
```jsx
import { Brick, Text } from '@Domain/Typographies';

<div>
  <HintWrapper
    hint='Never trust a cat said the man with the hat'
    width={200}
  >
    <Text>
      Hover me for a tip :)
    </Text>
  </HintWrapper>
</div>
```
