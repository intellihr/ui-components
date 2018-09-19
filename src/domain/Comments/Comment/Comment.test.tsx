import { shallow } from 'enzyme'
import React from 'react'

import { Comment } from './Comment'

describe('<Comment />', () => {
  it(`should render a simple comment`, () => {
    const wrapper = shallow(
      <Comment
        comment='A very recent comment'
        submitter='Example Person Name'
        createdDateText={<span>just now</span>}
        pill={ <div>pill</div>}
        avatar={<div>avatar</div>}
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
        comment='A very recent comment'
        submitter='Example Person Name'
        createdDateText={<span>just now</span>}
        pill={ <div>pill</div>}
        avatar={<div>avatar</div>}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a header and no actions`, () => {
    const wrapper = shallow(
      <Comment
        submitter='Example Person Name'
        createdDateText={<span>just now</span>}
        avatar={<div>avatar</div>}
        header={<div>header</div>}
        actions={[{
          text: 'Edit',
          onClick: () => { alert('Edit handler') }
        }]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
