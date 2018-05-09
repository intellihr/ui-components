import { shallow } from 'enzyme'
import React from 'react'
import { lineObject } from './sampleData'
import { TimeBasedLineChart } from './'

describe('<TimeBasedLineChart />', () => {
  it('Renders the TimeBasedLineChart with gradient', () => {
    const wrapper = shallow(<TimeBasedLineChart
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

