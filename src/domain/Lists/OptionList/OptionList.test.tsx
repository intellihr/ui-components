import React from 'react'
import { shallow } from 'enzyme'
import { OptionList } from './OptionList'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'

const exampleOptions = [
  {
    text: 'Georgia Lari (GEL)',
    onClick: () => alert('Selected GEL'),
    leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/Georgia-Flag.png' />
  },
  {
    text: 'Malaysia Ringgit (MYR)',
    onClick: () => alert('Selected MYR'),
    selected: true,
    leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/Malaysia-Flag.png' />
  },
  {
    text: 'New Zealand Dollar (NZD)',
    onClick: () => alert('Selected NZD'),
    leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/New-Zealand-Flag.png' />
  },
  {
    text: 'Australian Dollar (AUD)',
    onClick: () => alert('Selected AUD'),
    leftComponent: <img src='http://www.senojflags.com/images/national-flag-icons/Australia-Flag.png' />,
    rightComponent: <FontAwesomeIcon type='star' />
  }
]

describe('<OptionList />', () => {
  it('should render a basic option list', () => {
    const wrapper = shallow(
      <OptionList
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an option list with filtered options', () => {
    const wrapper = shallow(
      <OptionList
        query='dollar'
        options={exampleOptions}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
