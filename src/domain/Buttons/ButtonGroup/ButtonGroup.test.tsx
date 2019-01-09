import { mount } from 'enzyme'
import React from 'react'

import { ButtonGroup } from './ButtonGroup'
import { Button } from '../Button'
import { LinkButton } from '../LinkButton'

describe('<ButtonGroup />', () => {
  it(`should render a button group with buttons and link buttons`, () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button key='button1'>
          Button 1
        </Button>,
        <LinkButton key='button2'>
          Button 2
        </LinkButton>
      </ButtonGroup>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
