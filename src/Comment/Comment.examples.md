#### Someone else's comment
```jsx
<Comment
  comment={{
    id: 'sampleCommentId',
    comment: 'A very recent comment',
    personDisplayName: 'Testing Preson Name',
    personLastName: 'Culkin',
    personPreferredOrFirstName: 'McKooley',
    createdDateText: <span>just now</span>,
    personId: 'sampleCommentPersonId'
  }}
  loggedInUser={{
    id: 'sampleLoggedUserId'
  }}
  idx={1}
/>
```

#### Own comment
```jsx
<Comment
  comment={{
    id: 'sampleCommentId',
    comment: 'This is some ancient comment',
    personDisplayName: 'Testing Preson Name',
    personLastName: 'Culkin',
    personPreferredOrFirstName: 'McKooley',
    createdDateText: <span>1st Jan 2017</span>,
    personProfilePictureId: 'http://www.multiplemayhemmamma.com/wp-content/uploads/2013/03/home-alone-150x150.jpg',
    personId: 'sampleCommentPersonId'
  }}
  loggedInUser={{
    id: 'sampleCommentPersonId'
  }}
  idx={1}
/>
```

### Own comment with some actions attached to it
```jsx
<Comment
  comment={{
    id: 'sampleCommentId',
    comment: 'This is some ancient comment',
    personDisplayName: 'Testing Preson Name',
    personLastName: 'Culkin',
    personPreferredOrFirstName: 'McKooley',
    createdDateText: <span>1st Jan 2017</span>,
    personProfilePictureId: 'http://www.multiplemayhemmamma.com/wp-content/uploads/2013/03/home-alone-150x150.jpg',
    personId: 'sampleCommentPersonId'
  }}
  actions={[{
    text: 'Edit',
    onClick: () => { alert('Edit handler') }
  },{
    component: <hr />
  },{
    text: 'Delete',
    onClick: () => { alert('Delete handler') },
    hoverAlert: true
  }]}
  loggedInUser={{
    id: 'sampleCommentPersonId'
  }}
  idx={1}
/>
```

### Comments that have a header defined will not render actionMenu and will be considered a system generated comment
```jsx
<Comment
  comment={{
    id: 'sampleCommentId',
    personDisplayName: 'Lyanna Moreton',
    personLastName: 'Moreton',
    personPreferredOrFirstName: 'Lyanna',
    createdDateText: <span>1st Jan 2017</span>,
    personProfilePictureId: 'http://www.multiplemayhemmamma.com/wp-content/uploads/2013/03/home-alone-150x150.jpg',
    personId: 'lyanna',
    header: <label style={{ marginLeft: '5px' }}>has <strong class="strong success">approved</strong> Joshua Brady's qualification</label>
  }}
  loggedInUser={{
    id: 'sampleCommentPersonId'
  }}
  idx={1}
/>
```
