import { mount } from 'enzyme'
import React from 'react'

import { ContentSpacer } from './ContentSpacer'

describe('<ContentSpacer />', () => {
  it(`should render a content spacer with varying spacing sizes`, () => {
    const wrapper = mount(
      <ContentSpacer
        contentItems={[
          {
            content: <div>a</div>,
            spacingSize: 'small'
          },
          {
            content: <div>b</div>,
            spacingSize: 'medium'
          },
          {
            content: <div>c</div>,
            spacingSize: 'large'
          },
          {
            content: <div>d</div>,
            spacingSize: 'xlarge'
          },
          {
            content: <div>e</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a content spacer with no spacing sizes defined`, () => {
    const wrapper = mount(
      <ContentSpacer
        contentItems={[
          {
            content: <div>a</div>
          },
          {
            content: <div>b</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
