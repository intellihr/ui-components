import React from 'react'
import { shallow } from 'enzyme'
import { ListRow } from './ListRow'

describe('<ListRow />', () => {
  it(`should render a list row with relevant props`, () => {
    const wrapper = shallow(
      <ListRow
        wrapperClassName='wrapperClassName'
        cursor='pointer'
        children={<div>test</div>}
        index={0}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
