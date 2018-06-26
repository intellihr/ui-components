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

    return <ReactTable
      multiSort
      showPaginationTop
      showPaginationBottom
      resizable={false}
      filterable={false}
      showPagination={false}
      defaultSortDesc={false}
      showPageSizeOptions={false}
      minRows={0}
      defaultPageSize={25}
      pageSizeOptions={[10, 25, 50, 100]}
      noDataText={'No data found!'}
      defaultSorted={[]}
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
