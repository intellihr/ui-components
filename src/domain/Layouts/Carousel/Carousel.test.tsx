import { mount, shallow } from 'enzyme'
import React from 'react'

import { Carousel } from './Carousel'

describe('<Carousel />', () => {
  describe('Standard Carousel', () => {
    const wrapper = shallow(
      <Carousel>
        <Carousel.Tile/>
        <Carousel.Tile/>
        <Carousel.Tile/>
        <Carousel.Tile/>
      </Carousel>
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Carousel with custom children', () => {
    const wrapper = shallow(
      <Carousel>
        <div/>
        <div/>
        <div/>
        <div/>
      </Carousel>
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Scrolling', () => {
    const onScrollUpdate = jest.fn()
    const wrapper = mount(
      <Carousel
        onScrollUpdate={onScrollUpdate}
      >
        <Carousel.Tile/>
        <Carousel.Tile/>
        <Carousel.Tile/>
        <Carousel.Tile/>
      </Carousel>
    )

    afterEach(() => jest.restoreAllMocks())

    it('should scroll left', async () => {
      const instance = wrapper.instance() as Carousel
      await instance.scrollLeft()

      expect(onScrollUpdate).toBeCalled()
    })

    it('should scroll right', async () => {
      const instance = wrapper.instance() as Carousel
      await instance.scrollRight()

      expect(onScrollUpdate).toBeCalled()
    })
  })
})
