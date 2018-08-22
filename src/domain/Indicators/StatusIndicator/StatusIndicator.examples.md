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
const { r400 } = require('@Common/sass/variables.scss');

<div>
  <StatusIndicator
    text='Approved'
    subtitleText='25 days ago'
    color={r400}
  />

  <StatusIndicator
    text='Approved'
    subtitleText='25 days ago'
    color={r400}
    isHollow
  />
</div>
```

#### Coloured text

```jsx
const { g400 } = require('@Common/sass/variables.scss');

<StatusIndicator
  text='Approved'
  subtitleText='25 days ago'
  textColor={g400}
/>
```

#### Coloured text and dot

```jsx
const { g400, o400 } = require('@Common/sass/variables.scss');

<StatusIndicator
  text='Approved'
  subtitleText='25 days ago'
  color={g400}
  textColor={o400}
/>
```
