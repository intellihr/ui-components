#### Basic report header

```jsx
<ReportHeader
  renderTitle='Hello'
/>
```

#### Report header with helper content

```jsx
<ReportHeader
  primaryText='How To Read This Chart'
  secondaryText='Hide Info'
  renderTitle='Hello'
  renderHelperContent={
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
  }
/>
```
