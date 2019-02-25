```jsx
import { Avatar } from '@Domain/Avatars';

<VerticalTimeline
  year='2007'
>
  <VerticalTimeline.Event
    eventDate='Apr 16'
  >
    Hey, whats up. This is the timeline component. First you need a VerticalTimeline component and inside that all you need are VerticalTimeline.Event components.
  </VerticalTimeline.Event>
  <VerticalTimeline.Event
    eventDate='Apr 19'
  >
    Each timeline event will show up separately.
  </VerticalTimeline.Event>
  <VerticalTimeline.Event
    eventDate='Jun 2'
  >
    Like this!
  </VerticalTimeline.Event>
  <VerticalTimeline.Event
    eventDate='Jun 2'
    markerComponent={
      <Avatar
        initials='JW'
        size='small'
      />
    }
  >
    You can also override the default event marker with a component like Avatar
  </VerticalTimeline.Event>
  <VerticalTimeline.Event
    eventDate='Jun 2'
    markerComponent={
      <Avatar 
        size='small'
        imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      />
    }
  >
    And display a picture!
  </VerticalTimeline.Event>
</VerticalTimeline>
```
