import { shallow } from 'enzyme'
import React from 'react'
import reactRenderer from 'react-test-renderer'

import { Comment } from './Comment'

describe('Comment', () => {
  it('Renders successfully a test message', () => {
    const component = reactRenderer.create(
      <Comment
        comment='Testing'
      />
    )
  
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})