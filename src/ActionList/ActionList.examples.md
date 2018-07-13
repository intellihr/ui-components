#### Action list used in callout

```jsx
<div>
  <Callout
    type='warning'
  >
    There are no qualification library items configured.
    
    <ActionList
      actions={[
        {
         title: 'Please try to refresh the page and try again'
        }, 
        {
         title: 'Contact our customer support',
         description: `If the error persists, please contact our customer support with the Error ID`
        }
      ]}
    />
  </Callout>
</div>
```
