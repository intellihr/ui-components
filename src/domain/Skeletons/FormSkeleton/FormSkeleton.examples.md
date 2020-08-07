**Form Skeleton** shows a form-like skeleton

It supports 1 column and 2 column form styles 

```jsx
  <FormSkeleton />
```

### Best Practices
* Match the skeleton styling to what your form actually looks like

<br />

Two Column Variant:

```jsx
  <FormSkeleton variant={FormSkeleton.Variant.TwoColumn} />
```

The `showButtonSkeleton` is useful for displaying skeletons for forms in Modals
and other cases places where the submit button will not sit on the bottom left

```jsx
  <FormSkeleton showButtonSkeleton={false} />
```
