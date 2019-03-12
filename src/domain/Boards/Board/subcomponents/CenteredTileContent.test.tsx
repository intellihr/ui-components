import { shallow } from 'enzyme'
import React from 'react'

import { IntelliIcon } from '../../../Icons'
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

  it('should render a centered tile with an image, heading, subheading and a text', () => {
    const wrapper = shallow(
      <CenteredTileContent
        image='an.example.url/to/an/image'
        heading='An example heading'
        subheading='Oh look there is a subheading'
        text='When a merge isn’t resolved automatically, git leaves the index and the working tree in a special state that gives you all the information you need to help resolve the merge.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a centerd tile with an icon instead of an image', () => {
    const wrapper = shallow(
      <CenteredTileContent
        iconType='intelli-icon-smile'
        heading='Jeffrey'
        subheading='Harmless guy'
        text='Oh, it is a bit of this, a bit of that. It is called a Jeffrey.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
