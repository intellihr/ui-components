import React from 'react'
import { shallow } from 'enzyme'
import { ActionList } from './ActionList'

describe('<ActionList />', () => {
  it('should render a simple action list with multiple actions', () => {
    const wrapper = shallow(
      <ActionList
        actions={[
          {
            title: 'Test Title 1'
          },
          {
            title: 'Test Title 2',
            description: 'Test description'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple action list with a single action', () => {
    const wrapper = shallow(
      <ActionList
        action={{
          title: 'Contact our customer support',
          description: 'Test description'
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple action list with a header', () => {
    const wrapper = shallow(
      <ActionList
        headerMessage='Test header message'
        action={{
          title: 'Contact our customer support',
          description: 'Test description'
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple action list with a link', () => {
    const wrapper = shallow(
      <ActionList
        headerMessage='Test header message'
        action={{
          title: 'Test Title',
          description: 'Test description',
          actionLinks: [
            {
              linkText: 'Test Link Text',
              linkUrl: '/test-url'
            }
          ]
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
