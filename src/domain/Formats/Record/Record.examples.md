#### Basic Record

```jsx
  <Record
    name='Position Title'
  >
    Chief Executive Officer
  </Record>
```

#### Record with no Children

   ```jsx
     <Record
       name='Position Title'
     />
   ```

#### Record with a custom label for when no children are provided

```jsx
  <Record
    name='Position Title'
    noChildrenText= 'No Position Title'
  />
```

#### Record with a Component Child

```jsx
const { Button } = require('@Domain/Buttons');
const { FontAwesomeIcon } = require('@Domain/Icons');

  <Record
    name='Position Title'
  >
    <Button
      size='small'
      type='primary-borderless'
      icon={<FontAwesomeIcon type='plus' />}
      onClick={() => alert('test')}
    >
      Add a Position Title
    </Button>
  </Record>
```


#### Record with a Tooltip

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');

  <Record
    name='Position Title'
    tooltipContent={
      <Record
        name='Tooltip'
      >
        Record in a Record
      </Record>
    }
  >
    Chief Executive Officer
  </Record>
```

#### Record with a Tooltip and custom tooltip trigger

```jsx
const { FontAwesomeIcon } = require('@Domain/Icons');
const { Variables } = require('@Common');

  const toggleComponent = (
    <span
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
      ref={toggleComponentRef}
      {...ariaProps}
    >
      <FontAwesomeIcon type='solid' icon='exclamation-triangle' color={Variables.Color.o400} />
    </span>
  )

  <Record
    name='Position Title'
    tooltipProps={{ toggleComponent: ({ openMenu, closeMenu, toggleComponentRef, ariaProps }) => toggleComponent }}
    tooltipContent={
      <Record
        name='Tooltip'
      >
        Record in a Record
      </Record>
    }
  >
    Chief Executive Officer
  </Record>
```

## Margin Support

```jsx
  <Record
    name='Position Title'
    margins={{
      top: 50,
      left: 50,
      right: 50,
      bottom: 50
    }}
  >
    Chief Executive Officer
  </Record>
```
