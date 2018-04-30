# Vertical Timeline

## Basic Vertical Timeline

```jsx
<VerticalTimeline
  year='2007'
>
  <VerticalTimelineEvent
    eventDate='Apr 16'
  >
    Hey, whats up. This is the timeline component. First you need a VerticalTimeline component and inside that all you need are VerticalTimelineEvent components.
  </VerticalTimelineEvent>
  <VerticalTimelineEvent
    eventDate='Apr 19'
  >
    Each timeline event will show up separately.
  </VerticalTimelineEvent>
  <VerticalTimelineEvent
    eventDate='Jun 2'
  >
    Like this!
  </VerticalTimelineEvent>
  <VerticalTimelineEvent
    eventDate='Jun 2'
    markerComponent={
      <AvatarComponent 
        initials='JW'
        size='small'
      />
    }
  >
    You can also override the default event marker with a component like Avatar
  </VerticalTimelineEvent>
  <VerticalTimelineEvent
    eventDate='Jun 2'
    markerComponent={
      <AvatarComponent 
        size='small'
        imageUrl='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
      />
    }
  >
    And display a picture!
  </VerticalTimelineEvent>
</VerticalTimeline>
```
