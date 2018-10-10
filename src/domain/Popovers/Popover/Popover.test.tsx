import React from 'react'
import { shallow } from 'enzyme'
import { Popover } from './Popover'

describe('<Popover />', () => {
  describe('Popover rendering when closed', () => {
    const wrapper = shallow(
      <Popover
        parentRef={React.createRef()}
        id='testId'
        isOpen={false}
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Popover rendering when open', () => {
    const wrapper = shallow(
      <Popover
        parentRef={React.createRef()}
        id='testId'
        isOpen
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
