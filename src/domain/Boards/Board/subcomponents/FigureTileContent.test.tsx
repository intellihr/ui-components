import { shallow } from 'enzyme'
import React from 'react'

import { FigureTileContent } from './FigureTileContent'

describe('<FigureTileContent />', () => {
  it(`should render a figure tile content with nothing`, () => {
    const wrapper = shallow(
      <FigureTileContent  />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a figure tile content with label`, () => {
    const wrapper = shallow(
      <FigureTileContent
        label='dummy label'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a figure tile content with normal headings`, () => {
    const wrapper = shallow(
      <FigureTileContent
        heading='dummy heading'
        headingFigure='1'
        subheading='dummy subheading'
        subheadingFigure='35'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a figure tile content with warning headings`, () => {
    const wrapper = shallow(
      <FigureTileContent
        heading='dummy heading'
        headingFigure='1'
        subheading='dummy subheading'
        subheadingFigure='35'
        isHeadingWarning
        isSubheadingWarning
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a figure tile content with heading only`, () => {
    const wrapper = shallow(
      <FigureTileContent
        heading='dummy heading'
        headingFigure='1'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a figure tile content with subheading only`, () => {
    const wrapper = shallow(
      <FigureTileContent
        subheading='dummy subheading'
        subheadingFigure='35'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
