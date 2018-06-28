#### Basic Label

```jsx
<Pill
  text='Hello world!'
/>
```

#### Styling of pills

```jsx
<div>
  <Pill
    text='Alert!!!'
    color='alert'
  />

  <Pill
    text='Success'
    color='success'
  />

  <Pill
    text='Warning!'
    color='warning'
  />

  <Pill
    text='Primary'
    color='primary'
  />

  <Pill
    text='Neutral'
    color='neutral'
  />

  <Pill
    text='Secondary'
    color='secondary'
  />
</div>
```

#### Sizing of pills

```jsx
<div>
  <Pill
    text='Small'
    size='small'
  />

  <Pill
    text='Medium'
    size='medium'
  />

  <Pill
    text='Large'
    size='large'
  />
</div>
```

#### Hollow pills

```jsx
<Pill
  text="I'm Hollow"
  isHollow
/>
```

#### Combining styles

```jsx
<Pill
  text="A small Hollow Alert"
  size='small'
  color='alert'
  isHollow
/>
```
