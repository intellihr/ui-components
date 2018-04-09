import { shallow } from 'enzyme'
import React from 'react'

import { RadarChart } from '../RadarChart'

const dataLabels = {
  1: 'Needs Help',
  2: 'Getting There',
  3: 'Satisfactory',
  4: 'Doing Well',
  5: 'Outstanding'
}

const pointLabels = ['Quality', 'Teamwork', 'Values', 'Compliance', 'Productivity']

const datasets = [
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
]

describe('<RadarChart />', () => {
  it(`should display a donut chart with the right values`, () => {
    const wrapper = shallow(
      <RadarChart
        dataLabels={dataLabels}
        pointLabels={pointLabels}
        datasets={datasets}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
