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
