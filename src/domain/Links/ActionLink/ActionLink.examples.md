# DEPRECATED

## Please use the <Text.Link> component instead

#### Basic action link

```jsx
<ActionLink
  href='#'
>
Your text here
</ActionLink>
```

#### Using a default component

Since `ActionLink` is an implementation of `Anchor` it will use the `AnchorComponent` that
can be provided to the `DefaultsProvider` as follows.
```jsx
import { DefaultsProvider } from '@Domain/Defaults';

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

You can also provide props down to the `AnchorComponent` the same way that is done for `Anchor`
by using the `anchorComponentProps` key, for example.

```jsx
import { DefaultsProvider } from '@Domain/Defaults';

<DefaultsProvider
  value={{
    AnchorComponent: ({ anchorComponentProps, children }) => <a href={anchorComponentProps.realHref}>{children}</a>
  }}
>
  <ActionLink
    href='#'
    anchorComponentProps={{ realHref: 'http://betterurl' }}
  >
    Your text here
  </ActionLink>
</DefaultsProvider>
```
