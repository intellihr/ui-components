The **Attribute** is a small labels used to quickly convey simple binary (true/false) or ternary (required/optional/none) attribute states of a larger piece of data.

They have three variants: `true`, `false`, and `optional`. An appropriate variant should be chosen based the state of the attribute.

```jsx
  <>
    True:
    <Attribute
      iconType='solid'
      variant={Attribute.Variant.True}
      icon='exclamation-circle'
      primaryLabel='Business Critical'
    />
    <br/>
    Optional:
    <Attribute
      iconType='solid'
      variant={Attribute.Variant.Optional}
      icon='hashtag'
      primaryLabel='Registration Number is optional'
    />
    <br/>
    False:
    <Attribute
      iconType='solid'
      variant={Attribute.Variant.False}
      icon='info-circle'
      primaryLabel='Information is not required'
    />
    (It's supposed to be hidden)
  </>
```


#### Collapsed Attribute
Attributes can fit into small spaces with the `isCollapsed` prop. This is useful for displaying multiple attributes on a single card.
The icon will automatically turn into a tooltip that shows the label text on hover. DO NOT use `isCollapsed` on mobile screen widths.

```jsx
  <>
    <Attribute
      isCollapsed
      iconType='solid'
      variant={Attribute.Variant.True}
      icon='exclamation-circle'
      primaryLabel='Business Critical'
    />
     <Attribute
      isCollapsed
      iconType='solid'
      variant={Attribute.Variant.Optional}
      icon='hashtag'
      primaryLabel='Registration Number is optional'
     />
    <Attribute
      isCollapsed
      iconType='solid'
      variant={Attribute.Variant.False}
      icon='info-circle'
      primaryLabel='Information is not required'
    />
  </>
```

#### Attribute with secondary label
If you need to additionally display something like a related statistic with your attribute, use the `secondaryLabel` prop:

```jsx
  <>
    <Attribute
      iconType='solid'
      variant={Attribute.Variant.True}
      icon='calendar-check'
      primaryLabel='Expiry date is required'
      secondaryLabel='Notify 10 days before expiry'
    />
    <Attribute
      iconType='solid'
      variant={Attribute.Variant.Optional}
      icon='hashtag'
      primaryLabel='Registration Number is optional'
      secondaryLabel='Notify 10 days before expiry'
    />
    <Attribute
      isCollapsed
      iconType='solid'
      variant={Attribute.Variant.Optional}
      icon='hashtag'
      primaryLabel='Registration Number is optional'
      secondaryLabel='Notify 10 days before expiry'
    />
  </>
```

### Best Practices
* Keep labels to a single line of text with Title case
* The label text (both primary and secondary) should be kept as short as possible (under ~35 characters)
* Choose an appropriate icon to represent your attribute. 
* The label text should always explain the attribute. DO NOT rely on the icon to convey any additional meaning.
    Do: # Registration Number is required
    Dont: # Required
* Never use `isCollapsed` on mobile screen widths 

<br />

### Related Components
* For more non-boolean data, use a [Record](/#/Content/Record).

