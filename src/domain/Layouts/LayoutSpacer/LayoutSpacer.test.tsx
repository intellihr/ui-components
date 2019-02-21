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
