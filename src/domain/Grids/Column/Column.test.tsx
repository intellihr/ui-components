import React from 'react'
import { shallow } from 'enzyme'
import { Column } from './Column'

describe('<Column />', () => {
  describe('Simple Column behaviour', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(
        <Column sm={6} md={3} lg={3} xlg={3} xxlg={3} />
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should default values if nothing provided', () => {
      const wrapper = shallow(
        <Column />
      )
      expect(wrapper).toMatchSnapshot()
    })

    it('should default values if partial value provided', () => {
      const wrapper = shallow(
        <Column md={8} />
      )
      expect(wrapper).toMatchSnapshot()
    })
  })
})
