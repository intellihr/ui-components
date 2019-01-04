import { shallow } from 'enzyme'
import React from 'react'

import { RadioInput } from './RadioInput'
import { Props } from '../../../common'

const dummyClick = () => console.log('hey')

const exampleOptions =[{
    label:'123123',
    value:'option 1',
    isDisabled:false
  },
  {
    label:'this is option 2 (I am disabled)',
    value:'option 2',
    isDisabled:true
  },
  {
    label:'this is option 3',
    value:'option 3',
    isDisabled:false
  },
  {
    label:'this is option 4',
    value:'option 4',
    isDisabled:false
  }]

describe('<RadioInput />', () => {
  it(`should render a radio input`, () => {
    const wrapper = shallow(
      <RadioInput
        id='key'
        handleChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a radio input with horizontal buttons`, () => {
    const wrapper = shallow(
      <RadioInput
        id='key'
        handleChange={dummyClick}
        options={exampleOptions}
        orientation={Props.Orientation.Horizontal}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
