#### Simple Tooltip

```jsx
<Tooltip
  message='Tooltip message'
>
 <div>This div should have a tooltip</div>
</Tooltip>
```

#### Simple Tooltip with a set width

```jsx
<Tooltip
  message='This div should have a tooltip that will be a maximum of 250px wide.'
  width={250}
>
 <div>This div should have a tooltip</div>
</Tooltip>
```

#### Simple Tooltip with on show event

```jsx
<Tooltip
  message='Tooltip message'
  onShow={() => console.log('I have just appeared')}
>
 <div>This div should have a tooltip</div>
</Tooltip>
```

#### Tooltip with JSX Elements as content

```jsx
import { Variables } from '@Common';
import { Text } from '@Domain/Typographies';

<Tooltip
  message={
    <>
      <Text type='heading' isInline={false} color={Variables.Color.n100}>Tooltip Heading</Text>
      <Text type='small' color={Variables.Color.n100}>Some explanation of an element</Text>
    </>
  }
>
 <div>This div should have a tooltip</div>
</Tooltip>
```


#### Tooltip with icon

```jsx
<Tooltip
  message='Tooltip message'
  withIcon
>
 <span>This div should not have a tooltip</span>
</Tooltip>
```
