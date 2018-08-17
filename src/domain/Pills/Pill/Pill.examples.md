#### Styling of pills

```jsx
<div>
  <Pill
    text='Defaults to neutral'
  />
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

  <Pill
    text='Highlight'
    color='highlight'
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

#### Combining styles

```jsx
<Pill
  text="A small alert"
  size='small'
  color='alert'
/>
```

#### Legacy pills

For backwards compatibility, a legacy `label` className is provided to be used without javascript.

```jsx
<div>
  <span className='label primary'>Primary</span>
  <span className='label'>No class = neutral</span>
  <span className='label large abandoned'>Combining classes</span>
</div>
```
