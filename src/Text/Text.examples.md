#### Basic Text

```jsx
  <Text>
    Hello! I am text
  </Text>
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

#### Small

```jsx
  <Text size='small'>
    Hello! I am text
  </Text>
```

#### Large

```jsx
  <Text size='large'>
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
