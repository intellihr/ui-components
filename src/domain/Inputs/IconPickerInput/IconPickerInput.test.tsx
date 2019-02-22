import { shallow } from 'enzyme'
import React from 'react'

import { IconType } from '../../Icons/Icon'
import { IconPickerInput } from './IconPickerInput'

const dummyClick = () => console.log('hey')

const testIcons = [
  'intelli-icon-australia',
  'intelli-icon-card',
  'intelli-icon-book'
] as IconType[]

describe('<IconPickerInput />', () => {
  it(`should render an Icon Picker`, () => {
    const wrapper = shallow(
      <IconPickerInput
        name='icon-picker'
        onChange={dummyClick}
        value='intelli-icon-australia'
        icons={testIcons}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
