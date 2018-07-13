#### Basic Heading

```jsx
<div>
  <Heading
    type='page'
  >
    Hello! I am a PAGE HEADING! h1
  </Heading>
  <Heading
    type='section'
  >
    Hello! I am a SECTION HEADING! h2
  </Heading>
  <Heading
    type='subsection'
  >
    Hello! I am a SUBSECTION HEADING! h3
  </Heading>
</div>
```

#### Inline Heading

```jsx
<div>
  <Heading
    type='page'
    inline={true}
  >
    Inline!
  </Heading>
  <Heading
    type='section'
    inline={true}
  >
    Inline!
  </Heading>
</div>
```

#### Skeleton Heading

```jsx
  <Heading
    skeletonOptions={{
      showSkeleton: true,
      shape: 'line',
      width: 200
    }}
  >
    Hello! I am a HEADING!
  </Heading>
```
