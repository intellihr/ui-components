import { mount } from 'enzyme'
import React from 'react'

import { Header } from './Header'

describe('<Header />', () => {
  it('should render modal header', () => {
    const wrapper = mount(
      <Header>
        Header Text
      </Header>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render modal header with right component and dropdown sections', () => {
    const wrapper = mount(
      <Header
        rightComponent={<div>testing right component</div>}
        dropdownSections={[
          {
            text: 'Edit',
            href: 'https://www.google.com.au',
            stopPropagation: true
          },
          {
            text: 'Delete',
            onClick: (event) => { alert('Delete action for the item') },
            sectionType: 'alert',
            stopPropagation: true
          }
        ]}
      >
        Header Text
      </Header>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
