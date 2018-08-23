#### Basic status indicator

```jsx
<StatusIndicator
  text='Approved'
/>
```

#### Status Indicator with subtitle text

```jsx
<StatusIndicator
  text='Approved'
  subtitleText='25 days ago'
/>
```

#### Hollow dot

```jsx
<StatusIndicator
  text='Approved'
  isHollow
/>
```

#### Coloured dot

```jsx
const { Variables } = require('@Common');

<div>
  <StatusIndicator
    text='Approved'
    subtitleText='25 days ago'
    color={Variables.Color.r400}
  />

  <StatusIndicator
    text='Approved'
    subtitleText='25 days ago'
    color={Variables.Color.r400}
    isHollow
  />
</div>
```

#### Coloured text

```jsx
const { Variables } = require('@Common');

<StatusIndicator
  text='Approved'
  subtitleText='25 days ago'
  textColor={Variables.Color.g400}
/>
```

#### Coloured text and dot

```jsx
const { Variables } = require('@Common');

<StatusIndicator
  text='Approved'
  subtitleText='25 days ago'
  color={Variables.Color.g400}
  textColor={Variables.Color.o400}
/>
```
