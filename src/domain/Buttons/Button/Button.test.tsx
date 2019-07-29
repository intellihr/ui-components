import { mount } from 'enzyme'
import React from 'react'

import { FontAwesomeIcon } from '../../Icons'
import { Button } from './Button'

describe('<Button />', () => {
  it(`should render a button with a simple text`, () => {
    const wrapper = mount(
      <Button
        id='test-button'
        buttonOverrides={{
          onClick: () => alert('yo')
        }}
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
        buttonOverrides={{
          onClick: () => alert('yo'),
          disabled: true
        }}
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
        buttonOverrides={{
          onClick: () => alert('yo')
        }}
      >
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button with a size large`, () => {
    const wrapper = mount(
      <Button
        id='test-button-large'
        size='large'
        buttonOverrides={{
          onClick: () => alert('yo')
        }}
      >
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a button with an icon', () => {
    const wrapper = mount(
      <Button
        id='test-button-icon'
        icon={<FontAwesomeIcon type='solid' icon='star' />}
        iconAlignment='right'
        type='primary-hollow'
      >
        primary-hollow
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })
})

it('should render a button with a spinner', () => {
  const wrapper = mount(
    <Button
      id='test-button-spinner'
      showSpinner
    >
      test
    </Button>
  )

  expect(wrapper).toMatchSnapshot()
})
