import React from 'react'
import ReactTable from 'react-table'
import PaginationComponent from './PaginationComponent'
import classNames = require('classnames')
import { Callout } from '../Callout'
import NoDataComponent from './NoDataComponent'

const style = require('./DataTable.scss')

export interface DataTableProps {
    data: Array<Object>
    columns: Array<Object>
    showPaginationTop?: boolean
    showPaginationBottom?: boolean
    showPageSizeOptions?: boolean
    pageSizeOptions?: Array<number>
    defaultPageSize?: number
    sortable?: boolean
    defaultSortDesc?: boolean
    defaultSorted?: Array<Object>
    filterable?: boolean,
    noDataText?: string,
    NoDataComponent?: any
  }

export class DataTable extends React.Component<DataTableProps> {
  public static defaultProps: Partial<DataTableProps> = {
    showPaginationTop: false,
    showPaginationBottom: false,
    showPageSizeOptions: false,
    pageSizeOptions: [10, 25, 50, 100],
    defaultPageSize: 25,
    sortable: false,
    defaultSortDesc: false,
    defaultSorted: [],
    filterable: false,
    noDataText: 'No data found!',
    NoDataComponent: NoDataComponent
  }

  public render (): JSX.Element {
    const {
      data,
      columns,
      showPaginationTop,
      showPaginationBottom,
      showPageSizeOptions,
      pageSizeOptions,
      defaultPageSize,
      sortable,
      defaultSortDesc,
      defaultSorted,
      filterable,
      noDataText
    } = this.props

    return <ReactTable
      data={data}
      className={classNames({sortable})}
      columns={columns}
      noDataText={noDataText}

      showPagination={showPaginationTop || showPaginationBottom}
      showPaginationTop={showPaginationTop}
      showPaginationBottom={showPaginationBottom}

      showPageSizeOptions={showPageSizeOptions}
      defaultPageSize={defaultPageSize}
      pageSizeOptions={pageSizeOptions}

      sortable={sortable}
      multiSort={true}

      defaultSortDesc={defaultSortDesc}
      defaultSorted={defaultSorted}

      filterable={filterable}

      minRows={0}
      resizable={false}

      PaginationComponent={PaginationComponent}
      NoDataComponent={NoDataComponent}
    />
  }
}
