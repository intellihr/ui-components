import React, { ChangeEvent } from 'react'
import ReactTable, { TableProps, Column, SortingRule } from 'react-table'
import classNames from 'classnames'
import {
  get,
  filter,
  isString,
  isFunction,
  lowerCase
} from 'lodash'
import { Callout } from '../Callout'
import { DataTablePagination, DataTablePaginationProps } from './DataTablePagination'
import { TextInput } from '../Input/TextInput'
const style = require('./DataTable.scss')

export interface DataTableState {
  /** Currently applied search filter */
  searchFilter: string | null
}

export interface DataTableProps {
  /** Name for this table */
  tableId?: string

  /** List of all row data */
  data: any[]
  /** Column definitions for the table */
  columns: Column[]

  /** Whether the table can be sorted on its columns */
  sortable?: boolean
  /** Default sorting properties */
  defaultSorted?: SortingRule[]
  /** Whether the table should be paginated */
  showPagination?: boolean

  /** Whether we should add a search filter  */
  showSearchFilter?: boolean

  /** Easy replacement for when there is no data  */
  noDataComponent?: JSX.Element

  /**
   * Overrides for react-table props which can be applied to this table.
   * Supports all options from https://www.npmjs.com/package/react-table.
   * Use this if you need to provide any custom alterations to how the table works.
   * */
  reactTableOverrides?: Partial<TableProps>
}

export class DataTable extends React.Component<DataTableProps, DataTableState> {
  public static defaultProps: Partial<DataTableProps> = {
    sortable: false,
    showPagination: false,
    showSearchFilter: false,
    defaultSorted: [],
    tableId: 'datatable'
  }

  constructor (props: DataTableProps) {
    super(props)

    this.state = {
      searchFilter: null
    }
  }

  updateSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchFilter: event.target.value
    })
  }

  shouldFilterRow = (row: object): boolean => {
    const { columns } = this.props
    const { searchFilter } = this.state
    const needle = lowerCase(searchFilter || '')

    for (const column of columns) {
      let columnValue = ''

      if (isString(column.accessor)) {
        columnValue = get(row, column.accessor, '')
      }

      if (isFunction(column.accessor)) {
        columnValue = column.accessor(row) || ''
      }

      columnValue = lowerCase(columnValue)

      if (columnValue.includes(needle)) {
        return true
      }
    }

    return false
  }

  get filteredData (): any[] {
    const { data, showSearchFilter } = this.props
    const { searchFilter } = this.state

    if (!showSearchFilter || !searchFilter) {
      return data
    }

    return filter(data, this.shouldFilterRow)
  }

  get searchFilter (): JSX.Element | undefined {
    const {
      showSearchFilter,
      tableId
    } = this.props

    if (showSearchFilter) {
      return (
        <span className='search-filter'>
          <label>Search:</label>
          <TextInput
            handleChange={this.updateSearchFilter}
            name={`${tableId}-search-filter`}
          />
        </span>
      )
    }
  }

  noDataComponent = (props: any): JSX.Element => {
    const {
      noDataComponent
    } = this.props

    if (noDataComponent) return noDataComponent

    return (
      <Callout type='no-data' shouldFocus={false} >
        {props.children}
      </Callout>
    )
  }

  paginationComponent = (props: DataTablePaginationProps): JSX.Element => {
    return (
      <DataTablePagination
        key='pagination'
        {...props}
        customComponent={this.searchFilter}
      />
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
      NoDataComponent: this.noDataComponent,
      PaginationComponent: this.paginationComponent
    }
  }

  get classNames (): string {
    const {
      sortable,
      tableId
    } = this.props

    return classNames(
      style.DataTable,
      `data-table-${tableId}`,
      {sortable}
    )
  }

  public render (): JSX.Element {
    const {
      columns,
      showPagination,
      sortable,
      defaultSorted,
      reactTableOverrides
    } = this.props

    const filteredData = this.filteredData

    return <ReactTable
      {...this.defaultReactTableProps}
      data={filteredData}
      columns={columns}
      className={this.classNames}
      showPagination={showPagination}
      showPaginationBottom={filteredData.length > 0}
      showPageSizeOptions={showPagination}
      pageSize={showPagination ? undefined : filteredData.length}
      sortable={sortable}
      defaultSorted={defaultSorted}
      {...reactTableOverrides}
    />
  }
}
