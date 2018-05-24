## TimeBasedLineChart with filled graph

```jsx
const { lineObject } = require('./sampleData');

const { createGradient } = require('./createGradient');

<TimeBasedLineChart
  data={[lineObject]}
  maxYTick={10}
  yTickStepSize={1}
  timeToolTipFormat='ll'
  timeUnit='month'
  timeDisplayFormat='MMM'
  dateFormat='DD/MM/YYYY'
  height={500}
  backgroundColor={createGradient('rgb(67, 45, 243)')}
  yAxisLabel='Value'
  showYAxisLabel={true}
  xAxisLabel='Date'
  showXAxisLabel={true}
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
  height={360}
/>
```
