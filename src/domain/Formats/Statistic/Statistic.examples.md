#### Basic Statistic

```jsx
  <Statistic
    title='Total Cost'
    value='99.00'
  />
```

#### Statistic with prefix

```jsx
  <Statistic
    title='Total Cost'
    prefix='AUD'
    value='99.00'
  />
```

#### Statistic with indicator

```jsx
import { Variables } from '@Common';

  <Statistic
    title='Total Non-compliant'
    value='17'
    indicatorColor={Variables.Color.r300}
  />
```

#### Statistic with prefix and indicator

```jsx
import { Variables } from '@Common';

  <Statistic
    title='Total Non-compliant'
    value='17'
    prefix='XD'
    indicatorColor={Variables.Color.r300}
  />
```
