## TimeLineBasedChart with filled graph

```jsx
const { lineObject } = require('./sampleData');

<TimelineBasedChart
  data={[lineObject]}
  maxYTick={10}
  yTickStepSize={1}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'
  getColour={(c) => c}
/>
```

## TimelineBasedChart with more than 1 line

```jsx
const { lineObject2, lineObject3 } = require('./sampleData');

<TimelineBasedChart
  data={[lineObject2, lineObject3]}
  maxYTick={300}
  yTickStepSize={20}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'
  getColour={(c) => c}
/>
```
