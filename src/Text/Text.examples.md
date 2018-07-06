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
  <Text isHeavy>
    Hello! I am text
  </Text>
```

#### Upper

```jsx
  <Text isUpper>
    Hello! I am text
  </Text>
```

#### Small

```jsx
  <Text isSmall>
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
  <Text isSmall isHeavy isUpper> 
    I am text
  </Text>
</div>
```
