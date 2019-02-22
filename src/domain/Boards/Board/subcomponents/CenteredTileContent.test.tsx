import { shallow } from 'enzyme'
import React from 'react'

import { CenteredTileContent } from './CenteredTileContent'

describe('<CenteredTileContent />', () => {
  it(`should render a centered tile content with nothing`, () => {
    const wrapper = shallow(
      <CenteredTileContent  />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a centered tile content with label`, () => {
    const wrapper = shallow(
      <CenteredTileContent
        label='dummy label'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a centered tile content with children`, () => {
    const wrapper = shallow(
      <CenteredTileContent>
        children
      </CenteredTileContent>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
