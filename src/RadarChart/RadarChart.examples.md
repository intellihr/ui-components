# Radar Chart

## A Radar Chart

```jsx
<div>
  <RadarChart
    dataLabels={{
      1: 'Needs Help',
      2: 'Getting There',
      3: 'Satisfactory',
      4: 'Doing Well',
      5: 'Outstanding'
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
        label: 'Manager expectation',
        data: [3, 2, 3, 3, 3],
        colour: 'rgb(255,0,0)'
      },
      {
        label: 'Employee expectation',
        data: [2, 2, 4, 5, 1],
        colour: 'rgb(0,0,255)'
      }
    ]}
  />
</div>
