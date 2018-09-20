import { shallow } from 'enzyme'
import React from 'react'

import { Comment } from './Comment'

describe('<Comment />', () => {
  it(`should render a simple comment`, () => {
    const wrapper = shallow(
      <Comment
        commentBodyText='A very recent comment'
        commentHeaderText='Example Person Name'
        dateComponent={<span>just now</span>}
        pillComponent={ <div>pill</div>}
        avatarComponent={<div>avatar</div>}
        actions={[{
          text: 'Edit',
          onClick: () => { alert('Edit handler') }
        }]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a focused comment`, () => {
    const wrapper = shallow(
      <Comment
        focused
        commentBodyText='A very recent comment'
        commentHeaderText='Example Person Name'
        dateComponent={<span>just now</span>}
        pillComponent={ <div>pill</div>}
        avatarComponent={<div>avatar</div>}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a header and no actions`, () => {
    const wrapper = shallow(
      <Comment
        commentHeaderText='Example Person Name'
        dateComponent={<span>just now</span>}
        avatarComponent={<div>avatar</div>}
        headerComponent={<div>header</div>}
        actions={[{
          text: 'Edit',
          onClick: () => { alert('Edit handler') }
        }]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
