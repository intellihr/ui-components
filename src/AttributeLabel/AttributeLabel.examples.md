## Basic Label

```jsx
<AttributeLabel
  text='Hello world!'
/>
```

## Styling of labels

```jsx
<div>
  <AttributeLabel
    text='Alert!!!'
    color='alert'
  />

  <AttributeLabel
    text='Success'
    color='success'
  />

  <AttributeLabel
    text='Warning!'
    color='warning'
  />

  <AttributeLabel
    text='Primary'
    color='primary'
  />

  <AttributeLabel
    text='Neutral'
    color='neutral'
  />

  <AttributeLabel
    text='Secondary'
    color='secondary'
  />
</div>
```

## Sizing of labels

```jsx
<div>
  <AttributeLabel
    text='Small'
    size='small'
  />

  <AttributeLabel
    text='Medium'
    size='medium'
  />

  <AttributeLabel
    text='Large'
    size='large'
  />
</div>
```

## Hollow labels

```jsx
<AttributeLabel
  text="I'm Hollow"
  isHollow
/>
```

## Combining styles

```jsx
<AttributeLabel
  text="A small Hollow Alert"
  size='small'
  color='alert'
  isHollow
/>
```
