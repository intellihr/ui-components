import { shallow } from 'enzyme'
import React from 'react'

import { Props } from '../../../common'
import { CheckboxSet } from './CheckboxSet'

const dummyClick = () => console.log('hey')

const exampleOptions = [
  {
    identifier: 'option1',
    label:'123123'
  },
  {
    identifier: 'option2',
    label:'this is option 2 (I am disabled)',
    isDisabled:true
  },
  {
    identifier: 'option3',
    label:'this is option 3'
  },
  {
    identifier: 'option4',
    label:'this is option 4'
  }]

describe('<CheckboxSet />', () => {
  it(`should render a checkbox set`, () => {
    const wrapper = shallow(
      <CheckboxSet
        name='option'
        value={{ option1: true,  option2: false, option3: false, option4: true }}
        onChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox set with parent`, () => {
    const wrapper = shallow(
      <CheckboxSet
        parentOption={{ label:'All options' }}
        name='option'
        value={{ option1: true,  option2: false, option3: false, option4: true }}
        onChange={dummyClick}
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a checkbox button set`, () => {
    const wrapper = shallow(
      <CheckboxSet
        value={{ option1: true,  option2: false, option3: false, option4: true }}
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
        value={{ option1: true,  option2: false, option3: false, option4: true }}
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
        value={{ option1: true,  option2: false, option3: false, option4: true }}
        name='key'
        onChange={dummyClick}
        options={exampleOptions}
        orientation={Props.Orientation.Horizontal}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
