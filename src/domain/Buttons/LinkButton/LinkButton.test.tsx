import { shallow } from 'enzyme'
import React from 'react'

import { FontAwesomeIcon } from '../../Icons'
import { LinkButton } from './LinkButton'

describe('<LinkButton />', () => {
  it(`should render a link button with a simple text`, () => {
    const wrapper = shallow(
      <LinkButton id='test-link-button-simple'>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a disabled link button`, () => {
    const wrapper = shallow(
      <LinkButton id='test-link-button-disabled' disabled>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a link button with a type delete-subtle`, () => {
    const wrapper = shallow(
      <LinkButton id='test-link-button-delete' type='delete-subtle'>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a link button with a size large`, () => {
    const wrapper = shallow(
      <LinkButton id='test-link-button-large' size='large'>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a link button with an icon`, () => {
    const wrapper = shallow(
      <LinkButton
        id='test-link-button-icon'
        icon={<FontAwesomeIcon type='solid' icon='star' />}
        type='primary'
        href='test'
      >
        Link Button with Icon
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a link button with manual extra props for the anchor', () => {
    const wrapper = shallow(
      <LinkButton
        id='test-link-button-icon'
        icon={<FontAwesomeIcon type='solid' icon='star' />}
        type='primary'
        href='test'
        anchorComponentProps={{
          someProp: false
        }}
      >
        Link Button with Icon
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
