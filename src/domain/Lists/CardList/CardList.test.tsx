import { shallow } from 'enzyme'
import React from 'react'

import { CardList } from './CardList'

const dummyFunction = () => (alert('dummy'))

describe('<CardList />', () => {
  it('should render a simple card list with expand component and actions', () => {
    const wrapper = shallow(
      <CardList
        onCardToggle={dummyFunction}
        cards={[
          {
            name: 'test1',
            collapseComponent: <div>test1</div>,
            expandComponent: <div>test1</div>,
            actions: [
              {
                text: 'action1',
                href: 'https://www.google.com.au',
              },
              {
                text: 'action2',
                href: 'https://www.google.com.au',
              }
            ]
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple card list with expand component only', () => {
    const wrapper = shallow(
      <CardList
        onCardToggle={dummyFunction}
        cards={[
          {
            name: 'test2',
            collapseComponent: <div>test2</div>,
            expandComponent: <div>test2</div>,
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple card list with actions only', () => {
    const wrapper = shallow(
      <CardList
        onCardToggle={dummyFunction}
        cards={[
          {
            name: 'test3',
            collapseComponent: <div>test3</div>,
            actions: [
              {
                text: 'action1',
                href: 'https://www.google.com.au',
              },
              {
                text: 'action2',
                href: 'https://www.google.com.au',
              }
            ]
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a simple card list without expand component and actions', () => {
    const wrapper = shallow(
      <CardList
        onCardToggle={dummyFunction}
        cards={[
          {
            name: 'test4',
            collapseComponent: <div>test4</div>,
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a card list skeleton', () => {
    const wrapper = shallow(
      <CardList
        showSkeleton
        cards={[]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
