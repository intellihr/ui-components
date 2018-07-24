#### withDefaults

withDefaults can be used to access the values given in the defaults provider.
It will inject `defaults` props in your component.
This works cross repositories and through any depth in the react dom tree.

```
const { DefaultsProvider, DefaultsConsumer } = require('../Defaults');

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
