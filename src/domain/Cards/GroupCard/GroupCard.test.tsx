import { shallow } from 'enzyme'
import React from 'react'

import { GroupCard } from './GroupCard'

const dummyFunction = () => (alert('dummy'))

describe('<GroupCard />', () => {
  it('should render a group card with body contents and  their actions ', () => {
    const wrapper = shallow(
      <GroupCard
        isExpanded={false}
        onCardToggle={dummyFunction}
        headingContent={<div>headingContent</div>}
        bodyContents={[
          {
            mainContent: <div>mainContent</div>,
            extraContent: <div>mainContent</div>,
            dropdownSections: [
                {
                  text: 'action1',
                  href: 'https://www.google.com.au'
                },
                {
                  text: 'action2',
                  href: 'https://www.google.com.au'
                }
              ]
          },
          {
            mainContent: <div>mainContent</div>,
            extraContent: <div>mainContent</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a group card without body contents', () => {
    const wrapper = shallow(
      <GroupCard
        isExpanded={false}
        onCardToggle={dummyFunction}
        headingContent={<div>headingContent</div>}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
