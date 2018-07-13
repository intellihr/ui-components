### Toggle Modal

Toggle Modal provides you a basic toggle function to
show or hide a modal without the need to implement
by yourself.

#### Toggle Modal with Button

```jsx
const { Button } = require('../Button');

<ToggleModal
  toggleComponent={({toggle}) => (
    <Button
      type='primary'
      onClick={toggle}
    >
      Click Me
    </Button>
  )}
>
  Hello this is a Modal
</ToggleModal>
```

#### Toggle Modal with Anchor

```jsx
const { Anchor } = require('../Anchor');

<ToggleModal
  toggleComponent={({toggle}) => (
    <Anchor
      href='#!/ToggleModal'
      onClick={toggle}
    >
      Click Me
    </Anchor>
  )}
>
  Hello this is a Modal
</ToggleModal>
```
