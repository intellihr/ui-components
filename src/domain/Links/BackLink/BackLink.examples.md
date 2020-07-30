#### Back link

Back Links are a control to help the user navigate back to a higher-level page.

```jsx
<BackLink
    href='#'
    onClick={()=> console.log('Back To Wonka Component Library')}
  >
Back to Wonka Component Library
</BackLink>
```

### Best Practices
A Back Link should:
* Appear in the top left of the layout, near the layout title
* Include name of the page the user will travel to if possible
* Display in the format of "Back to {the page name}"
