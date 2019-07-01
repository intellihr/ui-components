#### Default Block Skeleton

```jsx
<BlockSkeleton
  showSkeleton={true}
/>
```

#### Block Skeleton with provided Width and Height
Provide width and height either as a number to be converted to px, or as a string containing the measurement (eg. 50%)
```jsx
<BlockSkeleton
  showSkeleton={true}
  width='50%'
  height={200}
/>
```

#### Block Skeleton inline-block and block
Block skeletons can either be inline-block or block. They will default to block.
```jsx
<div>
  <div>
    <h2>Block</h2>
    <BlockSkeleton
      display='block'
      showSkeleton={true}
      width={100}
      height={50}
    />
    <BlockSkeleton
      display='block'
      showSkeleton={true}
      width={100}
      height={50}
    />
  </div>
  <div>
    <h2>Inline Block</h2>
    <BlockSkeleton
      display='inline-block'
      showSkeleton={true}
      width={100}
      height={50}
    />
    <BlockSkeleton
      display='inline-block'
      showSkeleton={true}
      width={100}
      height={50}
    />
  </div>
</div>
```
