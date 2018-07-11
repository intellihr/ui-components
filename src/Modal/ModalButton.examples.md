#### Modal Button

```jsx
<ModalButton
  buttonContent='Click Me'
>
  Hello this is a Modal
</ModalButton>
```

#### Using Other Button

```jsx
const { LinkButton } = require('../Button');

<ModalButton
  buttonComponent={LinkButton}
  buttonContent='Click Me'
  buttonProps={{
    href: '#!/ModalButton'
  }}
>
  Hello this is a Modal
</ModalButton>
```
