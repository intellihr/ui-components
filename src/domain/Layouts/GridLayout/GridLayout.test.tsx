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
        gutterPaddingY={Variables.Layout.l2XSmall}
        cells={[
          {
            size: { min: 10 },
            content: <div>1</div>
          },
          {
            size: { min: 2 },
            content: <div>2</div>
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
            content: <div>5</div>
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
