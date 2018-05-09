import { shallow } from 'enzyme'
import React from 'react'
import { lineObject } from './sampleData'
import { TimelineBasedChart } from './'

describe('<TimelineBasedChart />', () => {
  it('Renders the TimelineBasedChart with gradient', () => {
    const wrapper = shallow(<TimelineBasedChart
      data={[lineObject]}
      maxYTick={10}
      yTickStepSize={1}
      timeToolTipFormat='ll'
      timeUnit='month'
      timeDisplayFormat='MMM'
      dateFormat='DD/MM/YYYY'
      getColour={() => 'rgb(15, 104, 250)'}
    />)

    expect(wrapper).toMatchSnapshot()
  })
})

