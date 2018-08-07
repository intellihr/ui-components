Anchor will render an anchor using the default anchor component for the repository,
or a provided one if given in the props. If no default is specified it will fall back on
the default `<a></a>` tags.

#### Default behaviour

```jsx
<Anchor
  href='#'
>
  Your text here
</Anchor>
```

#### Using a default component

```jsx
const { DefaultsProvider } = require("@Domain/Defaults");

<DefaultsProvider
  value={{
    AnchorComponent: ({ children }) => <i>{children}</i>
  }}
>
  <Anchor
    href='#'
  >
    Your text here
  </Anchor>
</DefaultsProvider>
```

The component will be given the `anchorComponentProps` key, which is useful when you
need to extend certain components such as `UnstyledLink` to use tools like react-router,
for example.

```jsx
const { DefaultsProvider } = require("@Domain/Defaults");

<DefaultsProvider
  value={{
    AnchorComponent: ({ anchorComponentProps, children }) => <a href={anchorComponentProps.realHref}>{children}</a>
  }}
>
  <UnstyledLink
    href='#'
    anchorComponentProps={{ realHref: 'http://betterurl' }}
  >
    Your text here
  </UnstyledLink>
</DefaultsProvider>
```

#### Using a prop

```jsx
<Anchor
  href='#'
  anchorComponent={({ children }) => <Button>{children}</Button>}
>
  Your text here
</Anchor>
```
