import React from 'react'
import ReactTable from 'react-table'

const style = require('./DataTable.scss')

export interface DataTableProps {
    data: Array<Object>
    columns: Array<Object>
    showPagination?: boolean
    showPaginationTop?: boolean
    showPaginationBottom?: boolean
    showPageSizeOptions?: boolean
    pageSizeOptions?: Array<number>
    defaultPageSize?: number
  }

export class DataTable extends React.Component<DataTableProps> {
  public static defaultProps: Partial<DataTableProps> = {
    showPageSizeOptions: false,
    showPagination: false,
    showPaginationTop: false,
    showPaginationBottom: true,
    pageSizeOptions: [10, 25, 50, 100],
    defaultPageSize: 25
  }

  public render (): JSX.Element {
    const {
      data,
      columns,
      showPagination,
      showPaginationTop,
      showPaginationBottom,
      defaultPageSize,
      pageSizeOptions,
      showPageSizeOptions
    } = this.props

    return <ReactTable
      data={data}
      columns={columns}
      showPagination={showPagination}
      showPaginationTop={showPaginationTop}
      showPaginationBottom={showPaginationBottom}
      defaultPageSize={defaultPageSize}
      showPageSizeOptions={showPageSizeOptions}
      pageSizeOptions={pageSizeOptions}
      minRows={1}
    />
  }
}
