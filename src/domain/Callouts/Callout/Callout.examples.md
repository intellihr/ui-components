#### Default Callout

This default callout should not be required! Try using another type.

```jsx
<Callout>
  Neutral
</Callout>
```

#### Information Callout

Used when there is a message for the user.

```jsx
<Callout type="info">
  <div className="title">
  Information!
  </div>
  Bringing you the latest news.
</Callout>
```

#### Success Callout

Used when an action is successfully performed.

```jsx
<Callout type="success">
  <div className="title">
  Well done!
  </div>
  You've successfully read this important alert message.
</Callout>
```

#### Warning Callout

Used when an action might have an undesired effect.

```jsx
<Callout type="warning">
  <div className="title">
  Warning!
  </div>
  Better check yourself, you're not looking too good.
</Callout>
```

#### Error Message

Used when an error has occurred.

```jsx
<Callout type="error">
  <div className="title">
  Oh snap!
  </div>
  Change a few things up and try submitting again.
</Callout>
```

#### Preview Mode

Used when showing a preview of a form.

```jsx
<Callout type="preview-mode">
  Preview Mode
</Callout>
```

#### Edit Mode

Used when in the edit mode of a page or form.

```jsx
<Callout type="edit-mode">
  Edit Mode
</Callout>
```

#### No Data Callout
##### DEPRECATED: Please use EmptyState component instead

Used in place of an element when there is no data to be shown.

```jsx
<Callout type="no-data">
  No Data
</Callout>
```

#### Legacy Callouts

Callouts can be used in blade pages by using the `callout` class name as well as modifier classes.

```jsx
<div>
  <div class='callout error'>
    Error
  </div>
  <div class='callout'>
    Neutral
  </div>
</div>
```
