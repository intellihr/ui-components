#### Basic action link

```jsx
<ActionLink
  href='#'
>
Your text here
</ActionLink>
```

#### Action link with alternate anchor tag

```jsx
const { DefaultsProvider } = require("../Defaults");

<DefaultsProvider
  value={{
    AnchorComponent: 'i'
  }}
>
  <ActionLink
    href='#'
  >
    Your text here
  </ActionLink>
</DefaultsProvider>
```
