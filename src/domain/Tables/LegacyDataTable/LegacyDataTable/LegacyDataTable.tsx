import classNames from 'classnames'
import filter from 'lodash/filter'
import get from 'lodash/get'
import isFunction from 'lodash/isFunction'
import isString from 'lodash/isString'
import lowerCase from 'lodash/lowerCase'
import React, { ChangeEvent } from 'react'
import ReactTable, { DefaultFilterFunction, Filter, SortingRule, TableProps } from 'react-table'

import { Props } from '../../../../common'
import { Callout } from '../../../Callouts'
import { TextInput } from '../../../Inputs'
import {
  AlignmentOption,
  IDataTableColumn
} from '../types'
import { IBaseDataTableProps } from '../types'
import { DataTablePagination, IDataTablePaginationProps } from '../DataTablePagination'

import { useTranslateFunction } from '../../../Defaults/Defaults/Defaults'
import style from '../DataTable.scss'

type PageSizeOption = 10 | 25 | 50 | 100

interface IDataTableState {
  /** Currently applied search filter */
  searchFilter: string | null
}

interface IDataTableProps extends IBaseDataTableProps {
  /** Whether the table can be sorted on its columns */
  sortable?: boolean
  /** Default sorting properties */
  defaultSorted?: SortingRule[]
  /** Whether the table should be paginated */
  showPagination?: boolean
  /** Default page size (only applicable if paginated) */
  defaultPageSize?: PageSizeOption
  /** Whether we should add a search filter - requires pagination  */
  showSearchFilter?: boolean
}

class LegacyDataTable extends React.Component<IDataTableProps, IDataTableState> {
  public static defaultProps: Partial<IDataTableProps> = {
    sortable: false,
    showPagination: false,
    showSearchFilter: false,
    showVerticalLines: false,
    defaultSorted: [],
    tableId: 'datatable'
  }

  constructor (props: IDataTableProps) {
    super(props)

    this.state = {
      searchFilter: null
    }
  }

  public defaultFilterMethod = (
    columnFilter: Filter,
    row: any,
    column: IDataTableColumn
  ): boolean => {
    // We filter either by the global state filter or by the individual column filter if it exists
    let { searchFilter } = this.state
    if (columnFilter.value) {
      searchFilter = columnFilter.value
    }

    const needle = lowerCase(searchFilter || '')

    let columnValue = ''

    if (isString(column.accessor)) {
      columnValue = get(row, column.accessor, '')
    }

    if (isFunction(column.accessor)) {
      columnValue = column.accessor(row) || ''
    }

    columnValue = lowerCase(columnValue)

    return columnValue.includes(needle)
  }

  public shouldFilterRow = (row: any): boolean => {
    const { searchFilter } = this.state
    const { columns } = this.props

    for (const column of columns) {
      const currentFilter = {
        id: column.id || '',
        value: searchFilter
      }

      const filterMethod: DefaultFilterFunction = column.filterMethod || this.defaultFilterMethod

      if (filterMethod(currentFilter, row, column)) {
        return true
      }
    }

    return false
  }

  get filteredData (): readonly any[] {
    const { data, showSearchFilter } = this.props
    const { searchFilter } = this.state

    if (!showSearchFilter || !searchFilter) {
      return data
    }

    return filter(data, this.shouldFilterRow)
  }

  get columns (): IDataTableColumn[] {
    const { columns } = this.props

    return columns.map((column) => {
      return {
        filterMethod: this.defaultFilterMethod,
        ...column,
        headerClassName: classNames(this.columnClassName(column.headerAlignment), column.headerClassName),
        className: classNames(this.columnClassName(column.columnAlignment), column.className)
      }
    })
  }

  public columnClassName (alignment: AlignmentOption | undefined): string | undefined {
    switch (alignment) {
      case Props.Position.Right:
        return 'content-right'
      case Props.Position.Center:
        return 'content-center'
    }
  }

  public updateSearchFilter = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchFilter: event.target.value
    })
  }

  public noDataComponent = (props: any): JSX.Element => {
    const {
      noDataComponent
    } = this.props

    if (noDataComponent) { return noDataComponent }

    return (
      <Callout type='no-data' shouldFocus={false} >
        {props.children}
      </Callout>
    )
  }

  public paginationComponent = (paginationProps: IDataTablePaginationProps): JSX.Element => {
    return (
      <DataTablePagination
        key='pagination'
        {...paginationProps}
        totalCount={paginationProps.totalCount ?? this.props.data.length}
        customComponent={<SearchFilterComponent
          showSearchFilter={this.props.showSearchFilter}
          tableId={this.props.tableId}
          handleChange={this.updateSearchFilter}
        />}
      />
    )
  }

  get defaultReactTableProps (): Partial<TableProps> {
    return {
      resizable: false,
      minRows: 0,
      pageSizeOptions: [10, 25, 50, 100],
      showPaginationTop: true,
      showPaginationBottom: true,
      NoDataComponent: this.noDataComponent,
      PaginationComponent: this.paginationComponent
    }
  }

  get classNames (): string {
    const {
      tableId,
      showVerticalLines
    } = this.props

    return classNames(
      style.DataTable,
      `data-table-${tableId}`,
      {
        'show-vertical-lines': showVerticalLines
      }
    )
  }

  public render (): JSX.Element {
    const {
      showPagination,
      defaultPageSize,
      sortable,
      defaultSorted,
      reactTableOverrides,
      noDataText
    } = this.props

    const filteredData = this.filteredData

    return (
      <ReactTable
        {...this.defaultReactTableProps}
        data={filteredData as any[]}
        noDataText={noDataText}
        columns={this.columns}
        className={this.classNames}
        showPagination={showPagination}
        showPaginationBottom={filteredData.length > 0}
        showPageSizeOptions={showPagination}
        defaultPageSize={defaultPageSize ? defaultPageSize : 25}
        pageSize={showPagination ? undefined : filteredData.length}
        sortable={sortable}
        defaultSorted={defaultSorted}
        {...reactTableOverrides}
      />
    )
  }
}

const SearchFilterComponent: React.FC<any> = ({showSearchFilter, tableId, handleChange}) => {
  const t = useTranslateFunction()

  if (showSearchFilter) {
    return (
      <span className='search-filter'>
          <label>{t('legacyDataTable.search', {defaultValue: 'Search:'})}</label>
          <TextInput
            handleChange={handleChange}
            name={`${tableId}-search-filter`}
          />
        </span>
    )
  }

  return null
}

export {
  LegacyDataTable
}
