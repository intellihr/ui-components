import { mount } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { LayoutSpacer } from './LayoutSpacer'

describe('<LayoutSpacer />', () => {
  it(`should render a layout spacer with varying spacing sizes`, () => {
    const wrapper = mount(
      <LayoutSpacer
        contentItems={[
          {
            content: <div>c</div>,
            spacingSize: Variables.Layout.l2XSmall
          },
          {
            content: <div>d</div>,
            spacingSize: Variables.Layout.lXSmall
          },
          {
            content: <div>e</div>,
            spacingSize: Variables.Layout.lSmall
          },
          {
            content: <div>f</div>,
            spacingSize: Variables.Layout.lMedium
          },
          {
            content: <div>g</div>,
            spacingSizeOverride: 56
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
            spacingSize: Variables.Layout.lSmall

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
