#### Basic report info

```jsx
<ReportInfo
  description="Hello! I am report info."
/>
```

#### Report info with text color

```jsx
const { Variables } = require('../../../common');

<ReportInfo
  description="Hello! I am blue report info."
  textColor={Variables.Color.i400}
/>
```

#### Report info with highlights

```jsx
<ReportInfo
  description="Hello! I am report info with highlights"
  highlights={[
     {
       "caption": "I am Highlight 1.",
       "title": "highlight 1 title",
       "imageUrl": "https://i1.wp.com/www.foot.com/wp-content/uploads/2017/03/placeholder.gif?ssl=1",
     },
     {
       "caption": "I am Highlight 2.",
       "title": "highlight 2 title",
       "imageUrl": "https://i1.wp.com/www.foot.com/wp-content/uploads/2017/03/placeholder.gif?ssl=1",
     },
  ]}
/>
```
