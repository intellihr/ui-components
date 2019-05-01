import classNames from 'classnames'
import React from 'react'
import ReactTable, { TableProps } from 'react-table'

import { Callout } from '../../../Callouts'
import { DataTablePagination, IDataTablePaginationProps } from '../DataTablePagination'
import { IAsyncDataTableProps } from "../types"
import { Spinner } from "../../../Spinners/Spinner"
import { Props } from '../../../../common';
const style = require('../DataTable.scss')

const AsyncDataTable: React.SFC<IAsyncDataTableProps> = ({
  componentContext,
  data,
  page,
  columns,
  totalCount,
  pageSize,
  loading,
  onPageChange,
  reactTableOverrides,
  noDataComponent,
  showVerticalLines = false,
  tableId = 'datatable'
}) => {
  const getNoDataComponent = (props: any): JSX.Element => {
    if (noDataComponent) { return noDataComponent }

    return (
      <Callout type='no-data' shouldFocus={false} >
        {props.children}
      </Callout>
    )
  }

  const getPaginationComponent = (props: IDataTablePaginationProps): JSX.Element | null => {
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

  const defaultReactTableProps = (): Partial<TableProps> => {
    return {
      resizable: false,
      minRows: 0,
      showPaginationTop: false,
      showPaginationBottom: true,
      NoDataComponent: getNoDataComponent,
      PaginationComponent: getPaginationComponent
    }
  }

  const getClassNames = (): string => {
    return classNames(
      style.DataTable,
      `data-table-${tableId}`,
      {
        'show-vertical-lines': showVerticalLines
      }
    )
  }

  return (
    <div
      data-component-type={Props.ComponentType.AsyncDataTable}
      data-component-context={componentContext}
    >
      <ReactTable
        {...defaultReactTableProps()}
        className={getClassNames()}
        columns={columns}
        data={data}
        page={page}
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
    </div>
  )
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
