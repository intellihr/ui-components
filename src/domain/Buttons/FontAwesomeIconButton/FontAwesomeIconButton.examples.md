#### FontAwesome Icon Button

```jsx
<div>
  <FontAwesomeIconButton
    icon='check'
    type='regular'
    onClick={() => alert('clicked!')}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    icon='times'
    type='regular'
    onClick={() => alert('clicked!')}
    variant='red'
    tooltipText='this is a tooltip'
  />
</div>
```
#### FontAwesome Icon Button that has been selected
```jsx
<div>
  <FontAwesomeIconButton
    icon='check'
    type='regular'
    onClick={() => alert('clicked!')}
    isSelected={true}
    tooltipText='this is a tooltip'
  />
  <FontAwesomeIconButton
    icon='times'
    type='regular'
    onClick={() => alert('clicked!')}
    isSelected={true}
    variant='red'
    tooltipText='this is a tooltip'
  />
</div>
```
