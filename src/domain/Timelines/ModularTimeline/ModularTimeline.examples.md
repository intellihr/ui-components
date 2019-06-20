#### Example timeline with context props

**NOTE: Be careful that your timeline title does not break onto multiple lines,
as it will screw up the line styling**

```jsx
import { Props, Variables } from '@Common';
import { Pill } from '@Domain/Pills';
import { Text } from '@Domain/Typographies';

function effectiveFromText (date) {
  return (
    <>
      <Text type='xsmall'>Effective from </Text>
      <Text type='xsmall' weight={Variables.FontWeight.fwSemiBold}>{date}</Text>
    </>
  )
}

<ModularTimeline
  events={[
    {
      title: <Text weight={Variables.FontWeight.fwSemiBold} size='small'>Upcoming</Text>,
      eventType: 'major',
      markerColor: 'transparent',
      timelineLineStyle: 'none'
    },
    {
      title: effectiveFromText('1 Jan 2019'),
      eventType: 'minor',
      markerColor: 'primary',
      timelineLineStyle: 'dashed',
      timelineLineColor: 'primary',
      body: {
        content: 'Some content goes here'
      },
      componentContext: 'example context for event'
    },
    {
      title: effectiveFromText('1 Dec 2018'),
      eventType: 'minor',
      markerColor: 'primary',
      timelineLineStyle: 'dashed',
      timelineLineColor: 'primary',
      body: {
        content: 'Some content goes here'
      }
    },
    {
      title: <Text weight={Variables.FontWeight.fwSemiBold} size='small'>Today, 6 Nov 2018</Text>,
      eventType: 'major',
      markerColor: 'primary'
    },
    {
      title: <Text weight={Variables.FontWeight.fwSemiBold} size='small'>2011</Text>,
      eventType: 'major'
    },
    {
      title: effectiveFromText('1 Jul 2011'),
      eventType: 'minor',
      body: {
        content: 'Some content goes here'
      }
    },
    {
      title: effectiveFromText('1 Jul 2011'),
      eventType: 'minor',
      body: {
        content: 'Some content goes here'
      }
    },
    {
      title: <Text weight={Variables.FontWeight.fwSemiBold} size='small'>2010</Text>,
      eventType: 'major'
    },
    {
      title: (
        <>
          {effectiveFromText('1 Jan 2011')} <Pill text='Start of Job' color='success' size='small' />
        </>
      ),
      eventType: 'minor',
      body: {
        content: 'Last bit of content here'
      }
    }
  ]}
  componentContext='example'
/>
```


#### Mix and match timeline styles

The timeline accepts line styles and colors in any order, allowing for many flexible kinds
of events to be supported.

```jsx
import { Props } from '@Common';
import { Pill } from '@Domain/Pills';
import { Text } from '@Domain/Typographies';

<ModularTimeline
  events={[
    {
      title: <Text weight={Variables.FontWeight.fwSemiBold}>Timeline 1</Text>,
      eventType: 'major',
      markerColor: 'transparent',
      timelineLineStyle: 'none'
    },
    {
      title: 'Body not required',
      eventType: 'minor',
      markerColor: 'primary',
      timelineLineStyle: 'dashed',
      timelineLineColor: 'primary',
    },
    {
      title: 'Mix marker and line colors',
      eventType: 'minor',
      markerColor: 'neutral',
      timelineLineStyle: 'solid',
      timelineLineColor: 'primary',
      body: {
        content: 'Some content goes here'
      }
    },
    {
      title: 'Last event can be specified with lineStyle: none',
      eventType: 'major',
      timelineLineStyle: 'none'
    },
    {
      title: <Text weight={Variables.FontWeight.fwSemiBold}>Timeline 2</Text>,
      eventType: 'major',
      markerColor: 'transparent',
      timelineLineStyle: 'none'
    },
    {
      title: 'Note that titles are required, while body is not',
      eventType: 'minor',
      timelineLineStyle: 'dashed',
      body: {
        content: 'Some content goes here. Bottom spacing is large too :)'
      },
      bottomSpacingSize: 'large'
    },
    {
      title: 'Multiple bodies, one event',
      eventType: 'minor',
      body: [
        {
          content: 'A single event can have multiple content bodies'
        },
        {
          content: 'To represent distinct items for a single point in time',
          type: 'red'
        },
        {
          content: '',
          type: 'green'
        },
        {
          content: '',
          type: 'cyan'
        },
        {
          content: ':)'
        }
      ]
    },
    {
      title: <Pill text='Title supports any component for rendering' />,
      eventType: 'minor',
      timelineLineStyle: 'none',
      bodyContent: <div style={{ height: 200, backgroundColor: 'white' }}>Body also supports any component or html</div>
    },
    {
      title: 'Markers can be used even with lineStyle: none',
      eventType: 'major',
      markerColor: 'primary',
      timelineLineStyle: 'none'
    },
    {
      title: 'Default lineStyle is solid, lineColor neutral',
      eventType: 'minor'
    },
    {
      title: 'The last event never has a line',
      eventType: 'minor'
    }
  ]}
/>
```
