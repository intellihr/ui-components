import { shallow } from 'enzyme'
import React from 'react'

import { CheckboxSet } from './CheckboxSet'
import { Props } from '../../../common'

const dummyClick = () => console.log('hey')

const exampleOptions = [
  {
    name: 'option-1',
    label:'123123',
    value:'option 1'
  },
  {
    name: 'option-2',
    label:'this is option 2 (I am disabled)',
    value:'option 2',
    isDisabled:true
  },
  {
    name: 'option-3',
    label:'this is option 3',
    value:'option 3'
  },
  {
    name: 'option-4',
    label:'this is option 4',
    value:'option 4'
  }]

describe('<CheckboxSet />', () => {
  it(`should render a checkbox Set`, () => {
    const wrapper = shallow(
      <CheckboxSet
        id='key'
        handleChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox set with horizontal buttons`, () => {
    const wrapper = shallow(
      <CheckboxSet
        id='key'
        handleChange={dummyClick}
        options={exampleOptions}
        orientation={Props.Orientation.Horizontal}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
