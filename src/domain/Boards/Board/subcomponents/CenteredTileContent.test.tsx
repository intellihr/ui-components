import { shallow } from 'enzyme'
import React from 'react'

import { Pill } from '../../../Pills'
import { CenteredTileContent } from './CenteredTileContent'

describe('<CenteredTileContent />', () => {
  it(`should render a centered tile content with nothing`, () => {
    const wrapper = shallow(
      <CenteredTileContent />
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

  it(`should render a centered tile content with a limited content width`, () => {
    const wrapper = shallow(
      <CenteredTileContent
        limitedContentWidth='small'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a centered tile with an image, heading, subheading and a description', () => {
    const wrapper = shallow(
      <CenteredTileContent
        imageSrc='an.example.url/to/an/image'
        heading='An example heading'
        subheading='Oh look there is a subheading'
        description='When a merge isn’t resolved automatically, git leaves the index and the working tree in a special state that gives you all the information you need to help resolve the merge.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a centered tile with an icon instead of an image', () => {
    const wrapper = shallow(
      <CenteredTileContent
        intelliIcon='smile'
        heading='Jeffrey'
        subheading='Harmless guy'
        description='Oh, it is a bit of this, a bit of that. It is called a Jeffrey.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a centerd tile with an icon instead of an image and a Pill in the top right corner', () => {
    const wrapper = shallow(
      <CenteredTileContent
        intelliIcon='smile'
        topRightComponent={
          <Pill
            text='Testing a pill component'
            color='success'
          />
        }
        heading='Jeffrey'
        subheading='Harmless guy'
        description='Oh, it is a bit of this, a bit of that. It is called a Jeffrey.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
