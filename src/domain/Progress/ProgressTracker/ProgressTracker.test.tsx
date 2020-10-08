import { mount, shallow } from 'enzyme'
import React from 'react'

import { ProgressTracker } from './ProgressTracker'

describe('<ProgressTracker />', () => {
  it('should render an progress tracker', () => {
    const mockHandleClick = jest.fn()
    const wrapper = mount(
      <ProgressTracker currentIndex={1}>
        <ProgressTracker.Step label='Report Issue' onClick={mockHandleClick}/>
        <ProgressTracker.Step label='Initiate Plan' onClick={mockHandleClick}/>
        <ProgressTracker.Step label='Add Cost and  Follow Up' onClick={mockHandleClick}/>
      </ProgressTracker>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an progress tracker in mobile style', () => {
    const mockHandleClick = jest.fn()
    const wrapper = mount(
      <ProgressTracker currentIndex={1} isMobile>
        <ProgressTracker.Step label='Report Issue' onClick={mockHandleClick}/>
        <ProgressTracker.Step label='Initiate Plan' onClick={mockHandleClick}/>
        <ProgressTracker.Step label='Add Cost and  Follow Up' onClick={mockHandleClick}/>
      </ProgressTracker>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
