## Comment
### Someone else's comment
#### Should add more examples when there will be time
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

### Own comment
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
