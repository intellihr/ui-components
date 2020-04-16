import { shallow } from 'enzyme'
import React from 'react'

import {IFontAwesomeIconButtonProps} from '../../Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import {FontAwesomeIconValue} from '../../Icons/Icon/FontAwesomeIconTypes'
import { TableRowVariant } from './services/colors'
import { ColumnAlignment, ColumnSize, ColumnSortDirection, Table, TableInteractionType } from './Table'

const onSelectedRowChange = jest.fn()
const onSortChange = jest.fn()
const onRowClick = jest.fn()
const emptyState = <div>empty</div>
const contentOverride = () => [<div key={0}>override</div>, <div key={1}>override</div>]
const rowContentOverride = () => <div>override</div>
const actions: IFontAwesomeIconButtonProps[] = ([
  {
    icon:'link',
    type:'solid',
    tooltipText:'Copy Link',
    onClick: () => alert('copy link')
  },
  {
    icon:'pencil-alt',
    type:'solid',
    tooltipText:'Rename',
    onClick: () => alert('rename')
  },
  {
    icon:'file-download',
    type:'solid',
    tooltipText:'Download',
    onClick: () => alert('download')
  },
  {
    icon:'trash',
    type:'solid',
    tooltipText:'Delete',
    onClick: () => alert('delete')
  }
])
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
    variant: TableRowVariant.Error,
    onClick: onRowClick,
    actions,
    rowContentOverride
  },
  {
    id: '1',
    data: {fileName: 'uploading.pdf', createAt: '05/01/2018', size: '99', fileType: 'PDF'},
    isSelectable: false,
    isRemovable: true,
    progress: 0.7,
    actions,
    contentOverride
  },
  {
    id: '2',
    data: {fileName: 'success.pdf', createAt: '05/01/2018', size: '3.7', fileType: 'PDF'},
    isSelectable: false,
    isRemovable: true,
    progress: 0.5,
    actions,
    contentOverride
  },
  {
    id: '3',
    data: {fileName: 'test.pdf', createAt: '05/01/2018', size: '2.2', fileType: 'PDF'},
    actions,
    isSelectable: true
  },
  {
    id: '4',
    data: {fileName: 'test1.pdf', createAt: '05/01/2018', size: '1.5', fileType: 'PDF'},
    actions,
    isSelectable: true
  }
]

describe('<Table />', () => {
  it('should render a table', () => {
    const wrapper = shallow(
      <Table
        <{fileName: string, createAt: string, size: string, fileType: string}>
        hasLeftAction
        onSelectedRowChange={onSelectedRowChange}
        rows={rows}
        sort={{createAt: ColumnSortDirection.Ascending}}
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
        <{fileName: string, createAt: string, size: string, fileType: string}>
        interactionType={TableInteractionType.Swipe}
        onSelectedRowChange={onSelectedRowChange}
        rows={rows}
        sort={{createAt: ColumnSortDirection.Ascending}}
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
        <{fileName: string, createAt: string, size: string, fileType: string}>
        onSelectedRowChange={onSelectedRowChange}
        rows={[]}
        sort={{createAt: ColumnSortDirection.Ascending}}
        onSortChange={onSortChange}
        emptyState={emptyState}
        columns={columns}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
