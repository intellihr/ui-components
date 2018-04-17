# Radar Chart

## Basic Radar Chart

```jsx
<RadarChart
  dataLabelColour='rgb(100,100,100)'
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
      colour: 'rgb(255,0,0)'
    },
    {
      label: 'Dataset 2',
      data: [2, 2, 4, 5, 1],
      colour: 'rgb(0,0,255)'
    }
  ]}
/>
```

## Radar Chart with labelled data points

```jsx
<RadarChart
  dataLabels={{
    1: 'The first one',
    2: 'Second label',
    3: 'Third!!',
    5: 'There was no fourth label'
  }}
  dataLabelColour='rgb(100,100,100)'
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
      colour: 'rgb(255,0,0)'
    },
    {
      label: 'Dataset 2',
      data: [2, 2, 4, 5, 1],
      colour: 'rgb(0,0,255)'
    }
  ]}
/>
```

## Radar Chart with custom min, max, and step values

```jsx
<RadarChart
  dataLabels={{
    100: 'This is where 100 label goes',
    200: '200 is the max value',
  }}
  dataLabelColour='rgb(100,100,100)'
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
      colour: 'rgb(255,0,0)'
    },
    {
      label: 'Dataset 2',
      data: [90, 60, 75, 175, 50],
      colour: 'rgb(0,0,255)'
    }
  ]}
  minValue={50}
  maxValue={200}
  stepSize={50}
/>
