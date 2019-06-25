import { shallow } from 'enzyme'
import React from 'react'

import { Tile } from './Tile'

describe('<Tile />', () => {
  it(`should render a board tile with nothing`, () => {
    const wrapper = shallow(
      <Tile />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an anchor board tile`, () => {
    const wrapper = shallow(
      <Tile
        anchorHref='#dummy'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an anchor board tile in new tab if anchorOpenInNewTab is true`, () => {
    const wrapper = shallow(
      <Tile
        anchorHref='#dummy'
        anchorOpenInNewTab
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a large board tile`, () => {
    const wrapper = shallow(
      <Tile size='fullWidth' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a medium board tile`, () => {
    const wrapper = shallow(
      <Tile size='medium' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a small board tile`, () => {
    const wrapper = shallow(
      <Tile size='small' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a non-hoverable board tile`, () => {
    const wrapper = shallow(
      <Tile />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a hoverable board tile with hover label`, () => {
    const wrapper = shallow(
      <Tile
        isHoverable
        hoverLabel='hover label'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a hoverable board tile button with hover label`, () => {
    const wrapper = shallow(
      <Tile
        isHoverable
        isButton
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a hoverable board tile button in hollow style with hover label`, () => {
    const wrapper = shallow(
      <Tile
        isHoverable
        isButton
        type='hollow'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a board tile with an onClick`, () => {
    const mockHandleClick = jest.fn()

    const wrapper = shallow(
      <Tile
        onClick={mockHandleClick}
      />
    )
    expect(mockHandleClick.mock.calls.length).toBe(0)
    wrapper.simulate('click')
    expect(mockHandleClick.mock.calls.length).toBe(1)
  })
})
