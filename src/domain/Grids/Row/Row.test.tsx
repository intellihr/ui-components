import React from 'react'
import { shallow } from 'enzyme'
import { Row } from './Row'

describe('<Row />', () => {
  describe('Simple Row behaviour', () => {
    const wrapper = shallow(
      <Row
      />
    )

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
