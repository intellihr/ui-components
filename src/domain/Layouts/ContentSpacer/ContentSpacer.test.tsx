import { mount } from 'enzyme'
import React from 'react'

import { ContentSpacer } from './ContentSpacer'

describe('<ContentSpacer />', () => {
  it(`should render a content spacer with varying sizes`, () => {
    const wrapper = mount(
      <ContentSpacer
        contentItems={[
          {
            content: <div>a</div>,
            size: 'small'
          },
          {
            content: <div>b</div>,
            size: 'medium'
          },
          {
            content: <div>c</div>,
            size: 'large'
          },
          {
            content: <div>d</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a content spacer with no sizes defined`, () => {
    const wrapper = mount(
      <ContentSpacer
        contentItems={[
          {
            content: <div>a</div>
          },
          {
            content: <div>b</div>
          },
          {
            content: <div>c</div>
          },
          {
            content: <div>d</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
