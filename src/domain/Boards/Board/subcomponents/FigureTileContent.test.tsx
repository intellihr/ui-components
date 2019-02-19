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
        headingStyle='warning'
        subheadingStyle='warning'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a figure tile content with alert headings`, () => {
    const wrapper = shallow(
      <FigureTileContent
        heading='dummy heading'
        headingFigure='1'
        subheading='dummy subheading'
        subheadingFigure='35'
        headingStyle='alert'
        subheadingStyle='alert'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a figure tile content with success headings`, () => {
    const wrapper = shallow(
      <FigureTileContent
        heading='dummy heading'
        headingFigure='1'
        subheading='dummy subheading'
        subheadingFigure='35'
        headingStyle='success'
        subheadingStyle='success'
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
