#### EmptyState

Used in place of an element when there is no data to be shown.


### Default behaviour for EmptyState
Empty state default behaviour

```jsx
<EmptyState />
```

### EmptyState when primary and secondary message is provided
The below message will be shown if both primary and secondary message is provided.

```jsx
<EmptyState
  primaryMessage='This is the primary no data callout message'
  secondaryMessage='This is the secondary no data callout message' 
/>
```

### EmptyState message with buttonComponent provided
When a buttonComponent is provided to the EmptyState component it will be shown accordingly.

```jsx.
<EmptyState
  buttonComponent=
    <LinkButton
      size='small'
      href='www.google.com.au'
      anchorComponentProps={{
       useReactRouter: false
      }}
    >
     My Link
    </LinkButton>
>
  
</EmptyState>
```

### EmptyState support for legacy pages
The empty state supports legacy pages

```jsx.
<div class='ihr-empty-state'>
  <div class='ihr-primary-message'>
    This is my primary message
  </div>
  <div class='ihr-secondary-message'>
    This is my secondary message
  </div>
  <div class='ihr-button-component'>
    <a href='www.google.com'>
      <span>My Link</span>
    </a>
  </div>
</div>
```

