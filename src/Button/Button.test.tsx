import { shallow } from 'enzyme'
import React from 'react'

import { Button } from './Button'
import { FontAwesomeIcon } from '../Icon'

describe('<Button />', () => {
  it(`should render a button with a simple text`, () => {
    const wrapper = shallow(
      <Button onClick={() => alert('yo')}>
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a disabled button`, () => {
    const wrapper = shallow(
      <Button disabled onClick={() => alert('yo')}>
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button with a type delete-subtle`, () => {
    const wrapper = shallow(
      <Button type='delete-subtle' onClick={() => alert('yo')}>
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a button with a size large`, () => {
    const wrapper = shallow(
      <Button size='large' onClick={() => alert('yo')}>
        testing testing 123
      </Button>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a button with an icon', () => {
    const wrapper = shallow(
      <Button
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
