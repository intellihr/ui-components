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
import { Variables } from '@Common';

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
import { Variables } from '@Common';

<StatusIndicator
  text='Approved'
  subtitleText='25 days ago'
  textColor={Variables.Color.g400}
/>
```

#### Coloured text and dot

```jsx
import { Variables } from '@Common';

<StatusIndicator
  text='Approved'
  subtitleText='25 days ago'
  color={Variables.Color.g400}
  textColor={Variables.Color.o400}
/>
```

#### Typed and Weighted text

```jsx
import { Props, Variables } from '@Common';

<StatusIndicator
  text='Approved'
  textType={Props.TypographyType.XSmall}
  textWeight={Variables.FontWeight.fwBold}
  subtitleText='25 days ago'
  subtitleTextType={Props.TypographyType.XSmall}
  subtitleTextWeight={Variables.FontWeight.fwBold}
/>
```
