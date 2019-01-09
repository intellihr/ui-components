import { shallow } from 'enzyme'
import React from 'react'

import { EmptyState } from './EmptyState'
import { LinkButton } from '../../Buttons/LinkButton'

describe('EmptyState', () => {
  it('Renders default empty state', () => {
    const wrapper = shallow(
      <EmptyState />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders successfully with primaryMessage only', () => {
    const wrapper = shallow(
      <EmptyState primaryMessage='This is a primary message'/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders successfully with secondaryMessage only', () => {
    const wrapper = shallow(
      <EmptyState secondaryMessage='This is a secondary message'/>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders successfully with null messages', () => {
    const wrapper = shallow(
      <EmptyState
        primaryMessage={null}
        secondaryMessage={null}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('Renders successfully with both primaryMessage, secondaryMessage and buttonComponent', () => {
    const buttonComponent = (
      <LinkButton
        size='small'
        href='www.google.com.au'
        anchorComponentProps={{
          useReactRouter: false
        }}
      >
        Add Address
      </LinkButton>
    )

    const wrapper = shallow(
      <EmptyState
              primaryMessage='This is a primary message'
              secondaryMessage='This is a secondary message'
              buttonComponent={buttonComponent}
            />
    )
    expect(wrapper).toMatchSnapshot()
  })

})
