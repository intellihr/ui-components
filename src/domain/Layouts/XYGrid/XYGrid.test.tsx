import { mount } from 'enzyme'
import React from 'react'

import { XYGrid } from './XYGrid'

describe('<XYGrid />', () => {
  it(`should render an XYGrid`, () => {
    const wrapper = mount(
      <XYGrid gutterMarginX gutterPaddingY>
        <XYGrid.Cell size={{ min: 10 }}>
          <div>1</div>
        </XYGrid.Cell>
        <XYGrid.Cell size={{ min: 2 }}>
          <div>2</div>
        </XYGrid.Cell>
        <XYGrid.Cell size={{ desktop: 3, tablet: 4 }} offset={{ tablet: 2 }}>
          <div>3</div>
        </XYGrid.Cell>
        <XYGrid.Cell size={{ desktop: 6, tablet: 4 }}>
          <div>4</div>
        </XYGrid.Cell>
        <XYGrid.Cell size='auto'>
          <div>5</div>
        </XYGrid.Cell>
      </XYGrid>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
