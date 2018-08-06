#### Basic Text

```jsx
  <Text>
    Hello! I am text
  </Text>
```

#### Sizes

```jsx
  <div>
    <Text isInline={false} size='xsmall'>
      X-Small
    </Text>
    <Text isInline={false} size='small'>
      Small
    </Text>
    <Text isInline={false} size='medium'>
      Medium (default)
    </Text>
    <Text size='large'>
      Large
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
    <Text isInline={false} color='subtle'>
      Hello! I am the system color for 'subtle'
    </Text>
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
  <Text size='small' weight='heavy' isUpper>
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
