#### DefaultsProvider

DefaultsProvider can be used to supply a list of default values to ui components.
This is especially useful for having default configuration for common things,
such as the component to use for anchors throughout the design system:

```
const { DefaultsProvider } = require('./Defaults');

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

#### DefaultsConsumer

DefaultsConsumer can be used within ui components to access the values given
in the defaults provider. This works cross repositories and through any
depth in the react dom tree.

```
const { DefaultsProvider, DefaultsConsumer } = require('./Defaults');

<DefaultsProvider
  value={{
    coolKey: 'coolio'
  }}
>
  <div>
    <DefaultsConsumer>
      {defaultValues => <b>{defaultValues.coolKey}</b>}
    </DefaultsConsumer>
  </div>
</DefaultsProvider>
```
