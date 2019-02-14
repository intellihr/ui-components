import { shallow } from 'enzyme'
import React from 'react'

import { Variables } from '../../../common'
import { ReportInfo } from './ReportInfo'

describe('<ReportInfo />', () => {
  it('should render a ReportInfo', () => {
    const wrapper = shallow(
      <ReportInfo
        description='Info.'
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a ReportInfo with text color', () => {
    const wrapper = shallow(
      <ReportInfo
        description='Hello! I am blue report info.'
        textColor={Variables.Color.i400}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a ReportInfo with highlights', () => {
    const wrapper = shallow(
      <ReportInfo
        description='Hello! I am blue report info.'
        highlights={[
          {
            caption: 'I am Highlight 1.',
            title: 'highlight 1 title',
            imageUrl: 'https://i1.wp.com/www.foot.com/wp-content/uploads/2017/03/placeholder.gif?ssl=1'
          },
          {
            caption: 'I am Highlight 2.',
            title: 'highlight 2 title',
            imageUrl: 'https://i1.wp.com/www.foot.com/wp-content/uploads/2017/03/placeholder.gif?ssl=1'
          }
        ]}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
