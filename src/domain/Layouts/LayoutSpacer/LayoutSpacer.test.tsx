import { mount } from 'enzyme'
import React from 'react'

import { LayoutSpacer } from './LayoutSpacer'

describe('<LayoutSpacer />', () => {
  it(`should render a layout spacer with varying spacing sizes`, () => {
    const wrapper = mount(
      <LayoutSpacer
        contentItems={[
          {
            content: <div>a</div>,
            spacingSize: '3xsmall'
          },
          {
            content: <div>b</div>,
            spacingSize: '2xsmall'
          },
          {
            content: <div>c</div>,
            spacingSize: 'xsmall'
          },
          {
            content: <div>d</div>,
            spacingSize: 'small'
          },
          {
            content: <div>e</div>,
            spacingSize: 'medium'
          },
          {
            content: <div>f</div>,
            spacingSize: 'large'
          },
          {
            content: <div>g</div>,
            spacingSize: 'xlarge'
          },
          {
            content: <div>h</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a layout spacer with no spacing sizes defined`, () => {
    const wrapper = mount(
      <LayoutSpacer
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

  it(`should render a layout spacer with null content`, () => {
    const wrapper = mount(
      <LayoutSpacer
        contentItems={[
          {
            content: null,
            spacingSize: 'medium'

          },
          {
            content: <div>a</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
