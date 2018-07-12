#### Basic Text

```jsx
  <Text>
    Hello! I am text
  </Text>
```

#### Sizes

```jsx
  <div>
    <Text inline={false} size='small'>
      Small
    </Text>
    <Text inline={false} size='medium'>
      Medium (default)
    </Text>
    <Text size='large'>
      Large
    </Text>
  </div>
```

#### Heavy

```jsx
  <Text heavy>
    Hello! I am text
  </Text>
```

#### Subtle

```jsx
  <Text subtle>
    Hello! I am text
  </Text>
```

#### Upper

```jsx
  <Text upper>
    Hello! I am text
  </Text>
```

#### Inline (false)

```jsx
<div>
  <Text inline={false}>
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
  <Text inline={false} color='red'>
    Hello!
  </Text>
  <Text size='small' heavy upper>
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
