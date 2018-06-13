import { shallow } from 'enzyme'
import React from 'react'
import { SelectBoxInput } from './SelectBoxInput'

describe('<SelectBoxInput />', () => {
  it(`should render a select box with options`, () => {
    const wrapper = shallow(
      <SelectBoxInput
        name='test'
        value=''
        options={[
          {
            label: 'option1',
            value: 'value1'
          },
          {
            label: 'option2',
            value: 'value2'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a multi select box with options`, () => {
    const wrapper = shallow(
      <SelectBoxInput
        name='test'
        value=''
        options={[
          {
            label: 'option1',
            value: 'value1'
          },
          {
            label: 'option2',
            value: 'value2'
          }
        ]}
        multi
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a select box with promise options`, () => {
    const wrapper = shallow(
      <SelectBoxInput
        name='test'
        value=''
        promiseOptions={() => new Promise(resolve => [
          {
            label: 'option1',
            value: 'value1'
          },
          {
            label: 'option2',
            value: 'value2'
          }
        ])}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
