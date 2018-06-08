import React from 'react'
import { mount } from 'enzyme'
import { SmartList } from './SmartList'
import { ListColumn } from './ListColumn'

export interface ISmartListItem {
  name: string,
  issuingOrganisation: string,
  expiryDate: string,
  status: string
}

const items = [
  {
    name: 'Blue Card',
    issuingOrganisation: 'Queensland Gov.',
    expiryDate: '11 Nov 2004',
    status: 'Expired'
  },
  {
    name: 'Green Card',
    issuingOrganisation: 'Western Australia Gov.',
    expiryDate: '05 Feb 2017',
    status: 'Current'
  }
]

describe('<SmartList />', () => {
  it(`should render an Smart List displaying the right data with the right headers`, () => {
    const wrapper = mount(
      <SmartList
        id='test-smart-list'
        data={items}
      >
        <ListColumn
          size={6}
          header='Qualification'
          cell={(row: ISmartListItem) =>
            <div>
              <b>{row.name}</b>
              <div>{row.issuingOrganisation}</div>
            </div>
          }
        />
        <ListColumn
          size={3}
          header='Expiry Date'
          cell={(row: ISmartListItem) => row.expiryDate}
        />
        <ListColumn
          size={3}
          header='Status'
          cell={(row: ISmartListItem) => row.status}
        />
      </SmartList>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render a headerless Smart List displaying the right data with the right title`, () => {
    const wrapper = mount(
      <SmartList
        id='test-smart-list'
        title='My List Title'
        data={items}
      >
        <ListColumn
          size={6}
          cell={(row: ISmartListItem) =>
            <div>
              <b>{row.name}</b>
              <div>{row.issuingOrganisation}</div>
            </div>
          }
        />
        <ListColumn
          size={3}
          cell={(row: ISmartListItem) => row.expiryDate}
        />
        <ListColumn
          size={3}
          cell={(row: ISmartListItem) => row.status}
        />
      </SmartList>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it(`should render an empty Smart List displaying the right data empty list text`, () => {
    const wrapper = mount(
      <SmartList
        id='test-smart-list'
        data={[]}
      >
        <ListColumn
          size={6}
          cell={(row: ISmartListItem) =>
            <div>
              <b>{row.name}</b>
              <div>{row.issuingOrganisation}</div>
            </div>
          }
        />
        <ListColumn
          size={3}
          cell={(row: ISmartListItem) => row.expiryDate}
        />
        <ListColumn
          size={3}
          cell={(row: ISmartListItem) => row.status}
        />
      </SmartList>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
