import { shallow } from 'enzyme'
import React from 'react'

import { Card } from './Card'

const dummyFunction = () => (alert('dummy'))

describe('<CardList />', () => {
  it('should render a simple expanded card with expanded component and actions ', () => {
    const wrapper = shallow(
      <Card
        collapsedComponent={<div>test2</div>}
        expandedComponent={<div>test2</div>}
        onCardToggle={dummyFunction}
        name='card1'
        isExpanded={false}
        actions={[
          {
            text: 'action1',
            href: 'https://www.google.com.au'
          },
          {
            text: 'action2',
            href: 'https://www.google.com.au'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a expanded card with expanded component only', () => {
    const wrapper = shallow(
      <Card
        collapsedComponent={<div>test2</div>}
        expandedComponent={<div>test2</div>}
        onCardToggle={dummyFunction}
        name='card1'
        isExpanded={false}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a expanded card with actions only', () => {
    const wrapper = shallow(
      <Card
        collapsedComponent={<div>test2</div>}
        onCardToggle={dummyFunction}
        name='card1'
        isExpanded={false}
        actions={[
          {
            text: 'action1',
            href: 'https://www.google.com.au'
          },
          {
            text: 'action2',
            href: 'https://www.google.com.au'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a expanded card without expand component and actions', () => {
    const wrapper = shallow(
      <Card
        collapsedComponent={<div>test2</div>}
        onCardToggle={dummyFunction}
        name='card1'
        isExpanded={false}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
