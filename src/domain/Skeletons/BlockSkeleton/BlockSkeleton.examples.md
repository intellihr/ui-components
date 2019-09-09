#### Default Block Skeleton

```jsx
<BlockSkeleton/>
```

#### Block Skeleton with provided Width and Height
Provide width and height either as a number to be converted to px, or as a string containing the measurement (eg. 50%)
```jsx
<BlockSkeleton
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
      width={100}
      height={50}
    />
    <BlockSkeleton
      display='block'
      width={100}
      height={50}
    />
  </div>
  <div>
    <h2>Inline Block</h2>
    <BlockSkeleton
      display='inline-block'
      width={100}
      height={50}
    />
    <BlockSkeleton
      display='inline-block'
      width={100}
      height={50}
    />
  </div>
</div>
```
