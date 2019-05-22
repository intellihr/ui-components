import { mount } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { GridLayout } from './GridLayout'

describe('<GridLayout />', () => {
  it(`should render a GridLayout`, () => {
    const wrapper = mount(
      <GridLayout
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
            alignment: {desktop: 'right', min: 'center'}
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
