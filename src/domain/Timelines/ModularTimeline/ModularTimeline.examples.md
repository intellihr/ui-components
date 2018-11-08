#### Example timeline with context

```jsx
<ModularTimeline
  events={[
    {
      title: 'Upcoming',
      eventType: 'major',
      markerColor: 'none',
      timelineLineStyle: 'none'
    },
    {
      title: 'Effective from 1 Jan 2019',
      eventType: 'minor',
      markerColor: 'primary',
      timelineLineStyle: 'dashed',
      bodyContent: 'Some content goes here',
      componentContext: 'example context for event'
    },
    {
      title: 'Effective from 1 Dec 2018',
      eventType: 'minor',
      markerColor: 'primary',
      timelineLineStyle: 'dashed',
      bodyContent: 'Some content goes here'
    },
    {
      title: 'Today, 6 Nov 2018',
      eventType: 'major',
      markerColor: 'primary'
    },
    {
      title: '2011',
      eventType: 'major'
    },
    {
      title: 'Effective from 1 Jul 2011',
      eventType: 'minor',
      bodyContent: 'Some content goes here'
    },
    {
      title: 'Effective from 1 Jul 2011',
      eventType: 'minor',
      bodyContent: 'Some content goes here'
    },
    {
      title: '2010',
      eventType: 'major'
    },
    {
      title: 'Effective from 1 Jul 2011',
      eventType: 'minor',
      bodyContent: 'Last bit of content here'
    }
  ]}
  componentContext='example'
/>
```
