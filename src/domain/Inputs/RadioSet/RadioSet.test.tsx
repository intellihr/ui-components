import { shallow } from 'enzyme'
import React from 'react'

import { RadioSet } from './RadioSet'
import { Props } from '../../../common'

const dummyClick = () => console.log('hey')

const exampleOptions = [{
    label:'123123',
    value:'option 1'
  },
  {
    label:'this is option 2 (I am disabled)',
    value:'option 2',
    isDisabled:true
  },
  {
    label:'this is option 3',
    value:'option 3'
  },
  {
    label:'this is option 4',
    value:'option 4'
  }]

describe('<RadioSet />', () => {
  it(`should render a radio Set`, () => {
    const wrapper = shallow(
      <RadioSet
        name='radio-input-set'
        handleChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a radio Button Set`, () => {
    const wrapper = shallow(
      <RadioSet
        useButtonStyle
        name='radio-input-set'
        handleChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a radio set with horizontal buttons`, () => {
    const wrapper = shallow(
      <RadioSet
        name='radio-input-set'
        handleChange={dummyClick}
        options={exampleOptions}
        orientation={Props.Orientation.Horizontal}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
