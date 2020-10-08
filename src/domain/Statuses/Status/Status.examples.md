The **Status** visually label and indicate status.

### Status
```jsx
<>
  <Status variant={Status.Variant.Neutral}>Default</Status>
  <Status variant={Status.Variant.Success}>Success</Status>
  <Status variant={Status.Variant.Warning}>Warning</Status>
  <Status variant={Status.Variant.Critical}>Critical</Status>
  <Status variant={Status.Variant.Info}>Info</Status>
</>
```

### Small Status 
```jsx
<>
  <Status size={Status.Size.Small} variant={Status.Variant.Neutral}>Default Small</Status>
  <Status size={Status.Size.Small} variant={Status.Variant.Success}>Success Small</Status>
  <Status size={Status.Size.Small} variant={Status.Variant.Warning}>Warning Small</Status>
  <Status size={Status.Size.Small} variant={Status.Variant.Critical}>Critical Small</Status>
  <Status size={Status.Size.Small} variant={Status.Variant.Info}>Info Small</Status>
</>
```

### Best Practices
* Status should be used to represent the state of a record (eg. Not Started, In Progress, Completed)
* Keep labels to a single line of text, be short and concise (1-2 words).
* labels should be in Capital Case

<br />

### Related Components
* For displaying information like types, categories, and disciplines, use a [Brick](/#/Typography/Brick) instead.


