#### Text link

```jsx
<div>
  <TextLink
    textType='xsmall'
    href='#'
  >
  xSmall Link
  </TextLink>
  <br />
  <TextLink
    textType='small'
    href='#'
  >
    Small Link
  </TextLink>
  <br />
  <TextLink
    textType='body'
    href='#'
  >
    Body Link
  </TextLink>
  <br />
  <TextLink
    textType='heading'
    href='#'
  >
    Heading Link
  </TextLink>
  <br />
  <TextLink
    textType='display'
    href='#'
  >
    Display Link
  </TextLink>
  <br />
  <TextLink
    textType='display-large'
    href='#'
  >
    Display Large Link
  </TextLink>
  <br />
</div>
```

#### Inline (false)

```jsx
<div>
  <TextLink
    textType='body'
    isInline={false}
  >
    Block TextLink 1
  </TextLink>
  <TextLink
    textType='body'
    isInline={false}
  >
    Block TextLink 2
  </TextLink>
</div>
```

#### Underline on hover
```jsx
  <TextLink
    href='#'
    underlineOnHover
  >
    I'm underlined when you hover over me!
  </TextLink>
```

#### Using a default component

Since `TextLink` is an implementation of `Anchor` it will use the `AnchorComponent` that
can be provided to the `DefaultsProvider` as follows.
```jsx
import { DefaultsProvider } from '@Domain/Defaults';

<DefaultsProvider
  value={{
    AnchorComponent: 'i'
  }}
>
  <TextLink
    href='#'
  >
    Your text here
  </TextLink>
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
  <TextLink
    href='#'
    anchorComponentProps={{ realHref: 'http://betterurl' }}
  >
    Your text here
  </TextLink>
</DefaultsProvider>
```
