import { mount } from 'enzyme'
import React from 'react'

import { ActionLink } from './ActionLink'
import { DefaultsProvider } from '../DefaultsContext'

describe('<ActionLink />', () => {
  it(`should render an action link`, () => {
    const wrapper = mount(
      <ActionLink href='/lol'>
        Grrr I am action man
      </ActionLink>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an action link with a replacement anchor tag`, () => {
    const wrapper = mount(
      <DefaultsProvider
        value={{
          AnchorComponent: () => <a href="/allTheFeelsUgh" >Replacement default text</a>
        }}
      >
        <ActionLink
          href='#'
        >
          Your text here
        </ActionLink>
      </DefaultsProvider>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
