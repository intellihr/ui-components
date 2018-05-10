# ActionLink

## Basic action link

```jsx
<ActionLink
  href='#'
>
Your text here
</ActionLink>
```

## Action link with alternate anchor tag

```jsx
const { DefaultsProvider } = require("../DefaultsContext");

<DefaultsProvider
  value={{
    AnchorComponent: (props) => <a href="/bananafailedlink"> {...props} />
  }}
>
  <ActionLink
    href='#'
  >
    Your text here
  </ActionLink>
</DefaultsProvider>
```
