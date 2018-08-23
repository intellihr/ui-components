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
  <div>
    <Text color='blue'>
      Hello! I am blue text
    </Text>
  </div>
```

#### Upper

```jsx
  <Text isUpper>
    Hello! I am text
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
<div>
  <Text isInline={false} color='red'>
    Hello!
  </Text>
  <Text type='small' weight='heavy' isUpper>
    I am text
  </Text>
</div>
```

#### Skeleton Text

```jsx
  <Text
    skeletonOptions={{
      showSkeleton: true,
      shape: 'line',
      width: 200
    }}
  >
    Hello! I am text
  </Text>
```
