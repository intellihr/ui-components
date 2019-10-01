import { shallow } from 'enzyme'
import React from 'react'

import { Card } from './Card'

const dummyFunction = () => (alert('dummy'))

describe('<Card />', () => {
  it('should render a card with main content and dropdownSections ', () => {
    const wrapper = shallow(
      <Card
        mainContent={<div>test2</div>}
        extraContent={<div>test2</div>}
        onCardToggle={dummyFunction}
        isExpanded={false}
        dropdownSections={[
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

  it('should render a card with main content only', () => {
    const wrapper = shallow(
      <Card
        mainContent={<div>test2</div>}
        extraContent={<div>test2</div>}
        onCardToggle={dummyFunction}
        isExpanded={false}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a card with dropdownSections only', () => {
    const wrapper = shallow(
      <Card
        mainContent={<div>test2</div>}
        onCardToggle={dummyFunction}
        isExpanded={false}
        dropdownSections={[
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

  it('should render a card without main content and dropdownSections', () => {
    const wrapper = shallow(
      <Card
        mainContent={<div>test2</div>}
        onCardToggle={dummyFunction}
        isExpanded={false}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
