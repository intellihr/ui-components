#### A simple comment
```jsx
import { Props } from '@Common';
import { Avatar } from '@Domain/Avatars';
import { Pill } from '@Domain/Pills';

<Comment
  commentBodyText='A very recent comment'
  commentHeaderText='Example Person Name'
  dateComponent={<span>just now</span>}
  pillComponent={ <Pill text='pill' />}
  avatarComponent={<Avatar size={Props.AvatarSize.Small} initials='EN' />}
/>
```

#### A focused comment
```jsx
import { Props } from '@Common';
import { Avatar } from '@Domain/Avatars';
import { Pill } from '@Domain/Pills';

<Comment
  focused
  commentBodyText='A very recent comment'
  commentHeaderText='Example Person Name'
  dateComponent={<span>just now</span>}
  pillComponent={ <Pill text='pill' />}
  avatarComponent={<Avatar size={Props.AvatarSize.Small} initials='EN' />}
/>
```

#### Comment with some actions attached to it
```jsx
import { Props } from '@Common';
import { Avatar } from '@Domain/Avatars';
import { Pill } from '@Domain/Pills';

<Comment
  commentBodyText='A very recent comment'
  commentHeaderText='Example Person Name'
  dateComponent={<span>just now</span>}
  pillComponent={ <Pill text='pill' />}
  avatarComponent={<Avatar size={Props.AvatarSize.Small} initials='EN' />}
  actions={[{
    text: 'Edit',
    onClick: () => { alert('Edit handler') }
  },{
    component: <hr />
  },{
    text: 'Delete',
    onClick: () => { alert('Delete handler') },
    sectionType: 'alert'
  }]}
  loggedInUser={{
    id: 'sampleCommentPersonId'
  }}
/>
```

#### Header Comment

Comments that have a header Component will not render actionMenu and will be considered a system generated comment
```jsx
import { Props, Variables } from '@Common';
import { Avatar } from '@Domain/Avatars';
import { Pill } from '@Domain/Pills';
import { Text } from '@Domain/Typographies';

<Comment
  commentHeaderText='Example Person Name'
  avatarComponent={<Avatar size={Props.AvatarSize.Small} initials='EN' />}
  dateComponent={<span>just now</span>}
  headerComponent={(
    <span style={{ marginLeft: '5px' }}>
      has
      <Text
        isHeavy
        color={Variables.Color.g400}
      >
        approved 
      </Text> 
      Joshua Brady's
      <Text
        isHeavy
        color={Variables.Color.i400}
      >
        qualification 
      </Text> 
      with a very long message to test how a long message would look.
    </span>
  )}
/>
```
