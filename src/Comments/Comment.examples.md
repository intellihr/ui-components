## Comment
### Someone else's comment
```jsx
  <Comment
    comment={{
      id: 'sampleCommentId',
      comment: 'This is the first comment ever',
      personDisplayName: 'Testing Preson Name',
      personFirstName: 'Culkin',
      personPreferredOrFirstName: 'McKooley',
      createdAt: '2017-01-02 08:10:59',
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
      comment: 'This is the first comment ever',
      personDisplayName: 'Testing Preson Name',
      personFirstName: 'Culkin',
      personPreferredOrFirstName: 'McKooley',
      createdAt: '2017-01-02 08:10:59',
      personId: 'sampleCommentPersonId'
    }}
    loggedInUser={{
      id: 'sampleCommentPersonId'
    }}
    idx={1}
  />
```

### Own comment with a header
```jsx
  <Comment
    comment={{
      id: 'sampleCommentId',
      comment: 'This is the first comment ever',
      header: <div></div>
      personDisplayName: 'Testing Preson Name',
      personFirstName: 'Culkin',
      personPreferredOrFirstName: 'McKooley',
      createdAt: '2017-01-02 08:10:59',
      personId: 'sampleCommentPersonId'
    }}
    loggedInUser={{
      id: 'sampleCommentPersonId'
    }}
    idx={1}
  />
```