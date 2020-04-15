import { shallow } from 'enzyme'
import React from 'react'

import {TableRowVariant} from './services/colors'
import {ColumnAlignment, ColumnSize, ColumnSortDirection, Table, TableTouchType} from './Table'

const onSelectionChanged = jest.fn()
const onSortChange = jest.fn()
const onRowClick = jest.fn()
const emptyState = <div>empty</div>
const contentOverride = () => [<div key={0}>override</div>, <div key={1}>override</div>]
const rowContentOverride = () => <div>override</div>
const columns = [
  {
    name: 'fileName',
    title: 'file name',
    size: ColumnSize.Auto,
    content: (data: any) => <div>{data.fileName}</div>,
    alignment: ColumnAlignment.Left
  },
  {
    name: 'createAt',
    title: 'created at',
    size: ColumnSize.Shrink,
    content: (data: any) => <div>{data.createAt}</div>,
    alignment: ColumnAlignment.Right
  }
]
const rows = [
  {
    id: '0',
    data: {fileName: 'fail.pdf', createAt: '05/01/2018', size: '8.2', fileType: 'PDF'},
    isSelectable: false,
    isRemovable: true,
    variant: TableRowVariant.Red,
    onClick: onRowClick,
    rowContentOverride
  },
  {
    id: '1',
    data: {fileName: 'uploading.pdf', createAt: '05/01/2018', size: '99', fileType: 'PDF'},
    isSelectable: false,
    isRemovable: true,
    progress: 0.7,
    contentOverride
  },
  {
    id: '2',
    data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
    isSelectable: false,
    isRemovable: true,
    progress: 0.5,
    contentOverride
  },
  {
    id: '3',
    data: {fileName: 'test.pdf', createAt: '05/01/2018', size: '2.2', fileType: 'PDF'},
    isSelectable: true
  },
  {
    id: '4',
    data: {fileName: 'test1.pdf', createAt: '05/01/2018', size: '1.5', fileType: 'PDF'},
    isSelectable: true
  }
]

describe('<Table />', () => {
  it('should render a table', () => {
    const wrapper = shallow(
      <Table
        hasLeftAction
        onSelectionChanged={onSelectionChanged}
        rows={rows}
        sort={{createAt: ColumnSortDirection.Down}}
        onSortChange={onSortChange}
        emptyState={emptyState}
        columns={columns}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a mobile table', () => {
    const wrapper = shallow(
      <Table
        touchType={TableTouchType.Swipe}
        onSelectionChanged={onSelectionChanged}
        rows={rows}
        sort={{createAt: ColumnSortDirection.Down}}
        onSortChange={onSortChange}
        emptyState={emptyState}
        columns={columns}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an empty table', () => {
    const wrapper = shallow(
      <Table
        onSelectionChanged={onSelectionChanged}
        rows={[]}
        sort={{createAt: ColumnSortDirection.Down}}
        onSortChange={onSortChange}
        emptyState={emptyState}
        columns={columns}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
