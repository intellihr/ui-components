import { shallow } from 'enzyme'
import React from 'react'

import { Props } from '../../../common'
import { CheckboxSet } from './CheckboxSet'

const dummyClick = () => console.log('hey')

const exampleOptions = [
  {
    identifier: 'option-1',
    label:'123123'
  },
  {
    identifier: 'option-2',
    label:'this is option 2 (I am disabled)',
    isDisabled:true
  },
  {
    identifier: 'option-3',
    label:'this is option 3'
  },
  {
    identifier: 'option-4',
    label:'this is option 4'
  }]

describe('<CheckboxSet />', () => {
  it(`should render a checkbox set`, () => {
    const wrapper = shallow(
      <CheckboxSet
        name='option'
        onChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox button set`, () => {
    const wrapper = shallow(
      <CheckboxSet
        useButtonStyle
        name='key'
        onChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox set with tight spacing`, () => {
    const wrapper = shallow(
      <CheckboxSet
        spacing='tight'
        name='key'
        onChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox set with horizontal buttons`, () => {
    const wrapper = shallow(
      <CheckboxSet
        name='key'
        onChange={dummyClick}
        options={exampleOptions}
        orientation={Props.Orientation.Horizontal}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
