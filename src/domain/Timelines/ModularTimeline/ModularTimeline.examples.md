#### Example timeline with context

```jsx
const { Props } = require('@Common');

<ModularTimeline
  events={[
    {
      title: <Text weight='heavy'>Upcoming</Text>,
      eventType: 'major',
      markerColor: 'none',
      timelineLineStyle: 'none'
    },
    {
      title: <Text type='small'>Effective from 1 Jan 2019</Text>,
      eventType: 'minor',
      markerColor: 'primary',
      timelineLineStyle: 'dashed',
      bodyContent: 'Some content goes here',
      componentContext: 'example context for event'
    },
    {
      title: <Text type='small'>Effective from 1 Dec 2018</Text>,
      eventType: 'minor',
      markerColor: 'primary',
      timelineLineStyle: 'dashed',
      bodyContent: 'Some content goes here'
    },
    {
      title: <Text weight='heavy'>Today, 6 Nov 2018</Text>,
      eventType: 'major',
      markerColor: 'primary'
    },
    {
      title: <Text weight='heavy'>2011</Text>,
      eventType: 'major'
    },
    {
      title: <Text type='small'>Effective from 1 Jul 2011</Text>,
      eventType: 'minor',
      bodyContent: 'Some content goes here'
    },
    {
      title: <Text type='small'>Effective from 1 Jul 2011</Text>,
      eventType: 'minor',
      bodyContent: 'Some content goes here'
    },
    {
      title: <Text weight='heavy'>2010</Text>,
      eventType: 'major'
    },
    {
      title: <Text type='small'>Effective from 1 Jul 2011</Text>,
      eventType: 'minor',
      bodyContent: 'Last bit of content here'
    }
  ]}
  componentContext='example'
/>
```
