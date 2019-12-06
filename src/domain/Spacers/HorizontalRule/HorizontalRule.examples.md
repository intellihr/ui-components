`HorizontalRule` is a standardized `<hr />` component with margins.

#### Basic Horizontal Rule

```jsx
<>
  HorizontalRule component without margins
  <HorizontalRule />
</>
```

#### Horizontal Rule with Margins

```jsx
import { Variables } from '@Common';
import { Text } from '@Domain/Typographies';

<>
  HorizontalRule component with margins
  <HorizontalRule
  margins={{
          top: 40,
          left: 20,
          right: 20,
          bottom: 20
        }}
  />
</>
```
