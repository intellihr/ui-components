import classNames from 'classnames'
import React from 'react'
import ReactTable, { TableProps } from 'react-table'

import { Callout } from '../../../Callouts'
import { DataTablePagination, IDataTablePaginationProps } from '../DataTablePagination'
import { IAsyncDataTableProps } from "../types"
import { Spinner } from "../../../Spinners/Spinner"
const style = require('../DataTable.scss')

class AsyncDataTable extends React.Component<IAsyncDataTableProps> {
  public static defaultProps: Partial<IAsyncDataTableProps> = {
    showVerticalLines: false,
    tableId: 'datatable'
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

  public paginationComponent = (props: IDataTablePaginationProps): JSX.Element | null => {
    const { totalCount, pageSize } = this.props

    if (totalCount > pageSize) {
      return (
        <DataTablePagination
          key='pagination'
          totalCount={totalCount}
          {...props}
        />
      )
    }
    return null
  }

  get defaultReactTableProps(): Partial<TableProps> {
    return {
      resizable: false,
      minRows: 0,
      showPaginationTop: false,
      showPaginationBottom: true,
      NoDataComponent: this.noDataComponent,
      PaginationComponent: this.paginationComponent
    }
  }

  get classNames(): string {
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

  public render(): JSX.Element {
    const {
      data,
      columns,
      totalCount,
      pageSize,
      loading,
      onPageChange,
      reactTableOverrides
    } = this.props

    return (
      <ReactTable
        {...this.defaultReactTableProps}
        className={this.classNames}
        columns={columns}
        data={data}
        pages={Math.ceil(totalCount / pageSize)}
        pageSize={pageSize}
        onPageChange={onPageChange}
        loading={loading}
        LoadingComponent={TableSpinner}
        showPageSizeOptions={false}
        sortable={false}
        manual
        {...reactTableOverrides}
      />
    )
  }
}

const TableSpinner = (props: any) => {
  return (
    <div className={`-loading ${props.loading ? "-active" : ""}`} >
      <div className="-loading-inner">
        <Spinner
          type='three-bounce'
          position='center'
        />
        <div className="loading-title">Loading</div>
      </div>
    </div >
  )
}

export {
  AsyncDataTable
}
