#### Text Skeleton

```jsx
<TextSkeleton
  showSkeleton={true}
/>
```

#### Text Skeleton with Width Option
Provide width either as a number to be converted to px, or as a string containing the measurement (eg. 50%)
```jsx
<>
  <div>
    <TextSkeleton
      showSkeleton={true}
      width='50%'
    />
  </div>
  <div>
    <TextSkeleton
      showSkeleton={true}
      width={250}
    />
  </div>
</>
```

#### Text Skeleton for Different Text Types

```jsx
<>
  <div>
    <Text type='xsmall' isInline={false}>
      TextSkeleton for X-Small Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='xsmall'
    />
  </div>
  <div>
    <Text type='small' isInline={false}>
      TextSkeleton for Small Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='small'
    />
  </div>
  <div>
    <Text isInline={false}>
      TextSkeleton for Body Text (default)
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='body'
    />
  </div>
  <div>
    <Text type='heading' isInline={false}>
      TextSkeleton for Heading Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='heading'
    />
  </div>
  <div>
    <Text type='display' isInline={false}>
      TextSkeleton for Display Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='display'
    />
  </div>
  <div>
    <Text type='display-large' isInline={false}>
      TextSkeleton for Display Large Text
    </Text>
    <TextSkeleton
      showSkeleton={true}
      type='display-large'
    />
  </div>
</>
```
