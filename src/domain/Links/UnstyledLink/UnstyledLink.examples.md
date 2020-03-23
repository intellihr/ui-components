#### Unstyled link
Unstyled links simply don't apply any style (including colors) to the link contained within.

```jsx
<UnstyledLink
  href='#'
>
Your text here
</UnstyledLink>
```

#### Using a default component

Since `UnstyledLink` is an implementation of `Anchor` it will use the `AnchorComponent` that
can be provided to the `DefaultsProvider` as follows.
```jsx
import { DefaultsProvider } from '@Domain/Defaults';

<DefaultsProvider
  value={{
    AnchorComponent: 'i'
  }}
>
  <UnstyledLink
    href='#'
  >
    Your text here
  </UnstyledLink>
</DefaultsProvider>
```

You can also provide props down to the `AnchorComponent` the same way that is done for `Anchor`
by using the `anchorComponentProps` key, for example.

```jsx
import { DefaultsProvider } from '@Domain/Defaults';

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
