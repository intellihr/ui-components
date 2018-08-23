#### Basic report info

```jsx
<ReportInfo
  description="Hello! I am report info."
/>
```

#### Report info with text color

```jsx
<ReportInfo
  description="Hello! I am blue report info."
  textColor="blue"
/>
```

#### Report info with highlights

```jsx
<ReportInfo
  description="Hello! I am report info with highlights"
  highlights={[
     {
       "caption": "I am Highlight 1.",
       "image": "highlight_1",
       "imageUrl": "https://i1.wp.com/www.foot.com/wp-content/uploads/2017/03/placeholder.gif?ssl=1",
     },
     {
       "caption": "I am Highlight 2.",
       "image": "highlight_2",
       "imageUrl": "https://i1.wp.com/www.foot.com/wp-content/uploads/2017/03/placeholder.gif?ssl=1",
     },
  ]}
/>
```
