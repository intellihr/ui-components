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
#### Subtitle Heading

```jsx
<div>
  <Heading
    isSubtitle={true}
  >
    Hello! I am a SUBTITLE HEADING!
  </Heading>
</div>
```

#### Inline Heading

```jsx
<div>
  <Heading
    type='page'
    isInline={true}
  >
    Inline!
  </Heading>
  <Heading
    type='section'
    isInline={true}
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
