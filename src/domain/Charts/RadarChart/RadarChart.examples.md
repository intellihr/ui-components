#### Basic Radar Chart

```jsx
const { Variables } = require('@Common');

<RadarChart
  pointLabels={[
    'Quality',
    'Teamwork',
    'Values',
    'Compliance',
    'Productivity'
  ]}
  datasets={[
    {
      label: 'Dataset 1',
      data: [3, 2, 3, 3, 3],
      colour: Variables.Color.r400
    },
    {
      label: 'Dataset 2',
      data: [2, 2, 4, 5, 1],
      colour: Variables.Color.i400
    }
  ]}
/>
```

#### Radar Chart with labelled data points

```jsx
const { Variables } = require('@Common');

<RadarChart
  dataLabels={{
    1: 'The first one',
    2: 'Second label',
    3: 'Third!!',
    5: 'There was no fourth label'
  }}
  pointLabels={[
    'Quality',
    'Teamwork',
    'Values',
    'Compliance',
    'Productivity'
  ]}
  datasets={[
    {
      label: 'Dataset 1',
      data: [3, 2, 3, 3, 3],
      colour: Variables.Color.r400
    },
    {
      label: 'Dataset 2',
      data: [2, 2, 4, 5, 1],
      colour: Variables.Color.i400
    }
  ]}
/>
```

#### Radar Chart with custom min, max, and step values

```jsx
const { Variables } = require('@Common');

<RadarChart
  dataLabels={{
    100: 'This is where 100 label goes',
    200: '200 is the max value',
  }}
  pointLabels={[
    'Quality',
    'Teamwork',
    'Values',
    'Compliance',
    'Productivity'
  ]}
  datasets={[
    {
      label: 'Dataset 1',
      data: [80, 50, 100, 100, 150],
      colour: Variables.Color.r400
    },
    {
      label: 'Dataset 2',
      data: [90, 60, 75, 175, 50],
      colour: Variables.Color.i400
    }
  ]}
  minValue={50}
  maxValue={200}
  stepSize={50}
/>
```

#### Basic Radar Chart with custom height

```jsx
const { Variables } = require('@Common');

<RadarChart
  pointLabels={[
    'Quality',
    'Teamwork',
    'Values',
    'Compliance',
    'Productivity'
  ]}
  datasets={[
    {
      label: 'Dataset 1',
      data: [3, 2, 3, 3, 3],
      colour: Variables.Color.r400
    },
    {
      label: 'Dataset 2',
      data: [2, 2, 4, 5, 1],
      colour: Variables.Color.i400
    }
  ]}
  height={200}
/>
```
