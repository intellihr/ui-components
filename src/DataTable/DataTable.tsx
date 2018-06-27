import React from 'react'
import ReactTable, { TableProps, Column, SortingRule } from 'react-table'
import { DataTablePagination } from './DataTablePagination'
import classNames from 'classnames'
import { Callout } from '../Callout'
const style = require('./DataTable.scss')

export interface DataTableProps {
  /** List of all row data */
  data: any[],

  /** Column definitions for the table */
  columns: Column[],

  /** Whether the table can be sorted on its columns */
  sortable?: boolean

  /** Default sorting properties */
  defaultSorted?: SortingRule[]

  /** Whether the table should be paginated */
  showPagination?: boolean

  /**
   * Overrides for react-table props which can be applied to this table.
   * Supports all options from https://www.npmjs.com/package/react-table.
   * Use this if you need to provide any custom alterations to how the table works.
   * */
  reactTableOverrides?: Partial<TableProps>
}

export class DataTable extends React.Component<DataTableProps> {
  public static defaultProps: Partial<DataTableProps> = {
    sortable: false,
    showPagination: false,
    defaultSorted: []
  }

  get defaultNoDataComponent (): (props: any) => JSX.Element {
    return (props) => (
      <Callout type='no-data' shouldFocus={false} >
        {props.children}
      </Callout>
    )
  }

  get defaultReactTableProps (): Partial<TableProps> {
    return {
      resizable: false,
      minRows: 0,
      defaultPageSize: 25,
      pageSizeOptions: [10, 25, 50, 100],
      showPaginationTop: true,
      showPaginationBottom: true,
      noDataText: 'No data found',
      NoDataComponent: this.defaultNoDataComponent,
      PaginationComponent: DataTablePagination
    }
  }

  public render (): JSX.Element {
    const {
      columns,
      data,
      reactTableOverrides,
      showPagination,
      sortable,
      defaultSorted
    } = this.props

    return <ReactTable
      {...this.defaultReactTableProps}
      data={data}
      columns={columns}
      className={classNames({sortable}, style.reactTable)}
      showPagination={showPagination}
      showPageSizeOptions={showPagination}
      sortable={sortable}
      defaultSorted={defaultSorted}
      {...reactTableOverrides}
    />
  }
}
