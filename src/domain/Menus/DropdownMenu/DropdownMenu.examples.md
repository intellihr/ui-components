#### Basic DropdownMenu

```jsx
<DropdownMenu
  sections={[
    {
      text: 'Item 1',
      onClick: () => alert('Item 1')
    },
    {
      text: 'Item 2',
      href: 'https://www.intellihr.com.au'
    }
  ]}
  dropdownAnchorPosition={{
    xPos: 'right',
    yPos: 'top'
  }}
  parentAnchorPosition={{
    xPos: 'right',
    yPos: 'bottom'
  }}
/>
```


#### DropdownMenu inside bounding box

```jsx
<div
  style={{
    height: 90,
    width: 90,
    overflow: 'hidden',
    border: '1px black solid',
    padding: 10
  }}
>
  <DropdownMenu
    sections={[
      {
        text: 'Item 1',
        onClick: () => alert('Item 1')
      },
      {
        text: 'Item 2',
        href: 'https://www.intellihr.com.au'
      }
    ]}
  />
</div>
```
