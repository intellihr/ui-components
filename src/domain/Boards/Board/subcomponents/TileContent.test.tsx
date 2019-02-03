import { shallow } from 'enzyme'
import React from 'react'

import { TileContent } from './TileContent'

describe('<TileContent />', () => {
  it(`should render a tile content with nothing`, () => {
    const wrapper = shallow(
      <TileContent  />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a tile content with label`, () => {
    const wrapper = shallow(
      <TileContent
        label='dummy label'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a tile content with headings`, () => {
    const wrapper = shallow(
      <TileContent
        heading='dummy heading'
        headingFigure='1'
        subheading='dummy subheading'
        subheadingFigure='35'
        isHeadingWarning
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a tile content button`, () => {
    const wrapper = shallow(
      <TileContent
        iconHref='dummy string'
        buttonTitle='dummy button title'
        buttonDescription='dummy button description'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
