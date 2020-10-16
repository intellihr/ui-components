The **Status** visually label and indicate status.

### Status
```jsx
<>
  <Status variant={Status.Variant.Neutral} label='Neutral'/>
  <Status variant={Status.Variant.Success} label='Success'/>
  <Status variant={Status.Variant.Warning} label='Warning'/>
  <Status variant={Status.Variant.Critical} label='Critical'/>
  <Status variant={Status.Variant.Info} label='Info'/>
</>
```

### Small Status 
```jsx
<>
  <Status size={Status.Size.Small} variant={Status.Variant.Neutral} label='Neutral Small'/>
  <Status size={Status.Size.Small} variant={Status.Variant.Success} label='Success Small'/>
  <Status size={Status.Size.Small} variant={Status.Variant.Warning} label='Warning Small'/>
  <Status size={Status.Size.Small} variant={Status.Variant.Critical} label='Critical Small'/>
  <Status size={Status.Size.Small} variant={Status.Variant.Info} label='Info Small'/>
</>
```

### Pulsing
Status can use the `isPulsing` prop to draw attention to a particular status.
This should be used sparingly -- only in situations where visual feedback is required.
```jsx
<>
  <Status variant={Status.Variant.Critical} label='Needs Attention' isPulsing/>
    <br/>
  <Status variant={Status.Variant.Info} label='Processing' isPulsing/>
</>
```

### Best Practices
* Status should be used to represent the state of a record (eg. Not Started, In Progress, Completed)
* Keep labels to a single line of text, be short and concise (1-2 words).
* labels should be in Capital Case

<br />

### Related Components
* For displaying information like types, categories, and disciplines, use a [Brick](/#/Typography/Brick) instead.


