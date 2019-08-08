A `HighlightArea` should be used to contain things like form elements and other components. 
If you need to convey a message to the user please use the `Callout` component.

#### Basic HighlightArea

```jsx
import { Variables } from '@Common';

<div>
    <HighlightArea color="grey">
        Hello
    </HighlightArea>
    
    <HighlightArea color="blue">
        Hello
    </HighlightArea>
</div>
```