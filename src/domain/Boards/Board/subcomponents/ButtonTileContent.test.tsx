import { shallow } from 'enzyme'
import React from 'react'

import { ButtonTileContent } from './ButtonTileContent'

describe('<ButtonTileContent />', () => {
  it(`should render a button tile content with nothing`, () => {
    const wrapper = shallow(
      <ButtonTileContent  />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button tile content with label`, () => {
    const wrapper = shallow(
      <ButtonTileContent
        label='dummy label'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button tile content with a font awesome icon`, () => {
    const wrapper = shallow(
      <ButtonTileContent
        iconType='fa-star'
        buttonTitle='dummy button title'
        buttonDescription='dummy button description'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button tile content with an IntelliIcon`, () => {
    const wrapper = shallow(
      <ButtonTileContent
        iconType='intelli-icon-alert'
        buttonTitle='dummy button title'
        buttonDescription='dummy button description'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button tile content in the hollow style`, () => {
    const wrapper = shallow(
      <ButtonTileContent
        iconType='fa-star'
        buttonTitle='dummy button title'
        buttonDescription='dummy button description'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
