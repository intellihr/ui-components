import { mount } from 'enzyme'
import React from 'react'

import { Button } from './Button'
import { FontAwesomeIcon } from '@Domain/Icons'

describe('<Button />', () => {
  it(`should render a button with a simple text`, () => {
    const wrapper = mount(
      <Button
        id='test-button'
        onClick={() => alert('yo')}
      >
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a disabled button`, () => {
    const wrapper = mount(
      <Button
        id='test-button-disabled'
        disabled onClick={() => alert('yo')}
      >
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button with a type delete-subtle`, () => {
    const wrapper = mount(
      <Button
        id='test-button-delete-subtle'
        type='delete-subtle'
        onClick={() => alert('yo')}
      >
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button with a size large`, () => {
    const wrapper = mount(
      <Button id='test-button-large' size='large' onClick={() => alert('yo')}>
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a button with an icon', () => {
    const wrapper = mount(
      <Button
        id='test-button-icon'
        icon={<FontAwesomeIcon type='star' />}
        iconAlignment='right'
        type='primary-hollow'
      >
        primary-hollow
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
