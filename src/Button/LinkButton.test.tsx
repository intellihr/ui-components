import { shallow } from 'enzyme'
import React from 'react'

import { LinkButton } from './LinkButton'
import { FontAwesomeIcon } from '../Icon'

describe('<LinkButton />', () => {
  it(`should render a link button with a simple text`, () => {
    const wrapper = shallow(
      <LinkButton>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a disabled link button`, () => {
    const wrapper = shallow(
      <LinkButton disabled>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a link button with a type delete-subtle`, () => {
    const wrapper = shallow(
      <LinkButton type='delete-subtle'>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a link button with a size large`, () => {
    const wrapper = shallow(
      <LinkButton size='large'>
        testing testing 123
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a link button with an icon`, () => {
    const wrapper = shallow(
      <LinkButton
        icon={<FontAwesomeIcon type='star' />}
        type='primary'
        href='test'
      >
        Link Button with Icon
      </LinkButton>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
