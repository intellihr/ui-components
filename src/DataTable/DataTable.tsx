import React from 'react'
import ReactTable, { TableProps } from 'react-table'
import PaginationComponent from './PaginationComponent'
import classNames from 'classnames'
import NoDataComponent from './NoDataComponent'
const style = require('./DataTable.scss')

export interface DataTableProps {
  reactTableProps?: Partial<TableProps>,
  data: any,
  columns: any,
  sortable?: boolean
}

export class DataTable extends React.Component<DataTableProps> {
  public static defaultProps: Partial<DataTableProps> = {
    sortable: false
  }

  public render (): JSX.Element {
    const {
      reactTableProps,
      sortable,
      columns,
      data
    } = this.props

    console.log(this.props)
    return <ReactTable
      showPaginationTop
      showPaginationBottom
      showPagination={false}
      showPageSizeOptions={false}
      pageSizeOptions={[10, 25, 50, 100]}
      defaultPageSize={25}
      defaultSortDesc={false}
      resizable={false}
      multiSort
      defaultSorted={[]}
      minRows={0}
      filterable={false}
      noDataText={'No data found!'}
      NoDataComponent={NoDataComponent}
      PaginationComponent={PaginationComponent}
      {...reactTableProps}
      data={data}
      columns={columns}
      sortable={sortable}
      className={classNames({sortable}, style.reactTable)}
    />
  }
}
