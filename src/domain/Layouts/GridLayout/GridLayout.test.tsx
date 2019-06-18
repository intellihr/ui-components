import { mount } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { GridLayout } from './GridLayout'

describe('<GridLayout />', () => {
  it(`should render a GridLayout`, () => {
    const wrapper = mount(
      <GridLayout
        margins={{
          top: Variables.Spacing.s2XSmall,
          left: Variables.Spacing.s2XSmall,
          right: Variables.Spacing.s2XSmall,
          bottom: Variables.Spacing.s2XSmall
        }}
        horizontalAlignment={GridLayout.HorizontalAlignment.Center}
        verticalAlignment={GridLayout.VerticalAlignment.Stretch}
        gutterMarginX={Variables.Spacing.s2XSmall}
        gutterPaddingY={{ min: Variables.Layout.l2XSmall, desktop: 'none' }}
        cells={[
          {
            size: 10,
            content: <div>1</div>
          },
          {
            size: 2,
            content: <div>2</div>,
            displayType: 'flex',
            flexHorizontalAlignment: { desktop: GridLayout.HorizontalAlignment.Right, min: GridLayout.HorizontalAlignment.Center }
          },
          {
            size: { desktop: 3, tablet: 4 },
            offset: { tablet: 2 },
            content: <div>3</div>
          },
          {
            size: { desktop: 6, tablet: 4 },
            content: <div>4</div>
          },
          {
            size: 'auto',
            offset: 3,
            content: <div>5</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
