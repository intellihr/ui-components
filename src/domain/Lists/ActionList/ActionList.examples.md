#### Simple Action list with header message

```jsx
<div>
   <ActionList
    headerMessage='This is a header message'
    actions={[
      {
       title: 'This is a first item'
      }, 
      {
       title: 'This is a second item',
       description: 'With a description'
      }
    ]}
  />
</div>
```

#### Action list with link

```jsx
<div>
   <ActionList
    headerMessage='This is a header message'
    action={{
      title: 'Test Title',
      description: 'Test Description',
      actionLinks: [
        {
          linkText: 'This is a link',
          linkUrl: '/'
        },
        {
          linkText: 'This is a link with some other props',
          linkUrl: '/',
          anchorComponentProps: {
            someProp: true
          }
        }
      ]
    }}
  />
</div>
```

#### Action list used in callout with default header message

```jsx
import { Callout } from '@Domain/Callouts';

<div>
  <Callout
    type='warning'
  >
    Test callout description
    
    <ActionList
      actions={[
        {
         title: 'This is a first item'
        }, 
        {
         title: 'This is a second item',
         description: 'With a description'
        }
      ]}
    />
  </Callout>
</div>
```


