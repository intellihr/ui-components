## TimeBasedLineChart with filled graph

```jsx
const { lineObject } = require('./sampleData');

<TimeBasedLineChart
  data={[lineObject]}
  maxYTick={10}
  yTickStepSize={1}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'

/>
```

## TimeBasedLineChart with more than 1 line

```jsx
const { lineObject2, lineObject3 } = require('./sampleData');

<TimeBasedLineChart
  data={[lineObject2, lineObject3]}
  maxYTick={300}
  yTickStepSize={20}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'

/>
```
