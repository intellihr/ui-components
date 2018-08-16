import { shallow } from 'enzyme'
import React from 'react'
import { SelectInput } from './SelectInput'

describe('<SelectInput />', () => {
  it('should render a select box with options', () => {
    const wrapper = shallow(
      <SelectInput
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

  it('should render a multi select box with options', () => {
    const wrapper = shallow(
      <SelectInput
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
        multi={true}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a select box with promise options', () => {
    const promiseOptions = () => new Promise(resolve => [
      {
        label: 'option1',
        value: 'value1'
      },
      {
        label: 'option2',
        value: 'value2'
      }
    ])

    const wrapper = shallow(
      <SelectInput
        name='test'
        value=''
        promiseOptions={promiseOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a creatable select box', () => {
    const wrapper = shallow(
      <SelectInput
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
        handleNewOption={console.log}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
