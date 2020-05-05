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

```jsx
import { LinkButton } from '@Domain/Buttons';

<EmptyState
  buttonComponent={
   <LinkButton
     size='small'
     href='www.google.com.au'
     anchorComponentProps={{
       useReactRouter: false
     }}
   >
     My Link
   </LinkButton>
  }
>
</EmptyState>
```

### EmptyState message with image provided
When an imageUrl is provided to the EmptyState component, the corrosponding image will be rendered underneath the message and button content

The default image width is 400px

```jsx
<EmptyState
  image={{
    url: 'https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg',
    width: 350
  }}
/>
```

### EmptyState message with null messages
Hide the default messages by providing `null` as the value

```jsx
<div>
  <EmptyState
    primaryMessage={null}
  >
  </EmptyState>
  <EmptyState
    secondaryMessage={null}
  >
  </EmptyState>
</div>
```

### EmptyState message with primary message and button

```jsx
import { LinkButton } from '@Domain/Buttons';

  <EmptyState
    primaryMessage={'Add the things'}
    secondaryMessage={null}
     buttonComponent={
      <LinkButton
        size='small'
        href='www.google.com.au'
        anchorComponentProps={{
          useReactRouter: false
        }}
      >
        My Link
      </LinkButton>
    }
  >
  </EmptyState>
```

### EmptyState with a transparent background
```jsx
<EmptyState
    isBackgroundTransparent={true}
/>
```

### EmptyState support for legacy pages
The empty state supports legacy pages

```jsx
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

