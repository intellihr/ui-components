import classNames from 'classnames'
import React from 'react'
import ReactTable, { TableProps } from 'react-table'

import { Props } from '../../../../common'
import { Callout } from '../../../Callouts'
import { Spinner } from '../../../Spinners/Spinner'
import { IBaseDataTableProps } from '../types'
import { DataTablePagination, IDataTablePaginationProps } from '../DataTablePagination'
const style = require('../DataTable.scss')

interface IAsyncDataTableProps extends IBaseDataTableProps {
  /** The total number of data entries */
  totalCount: number
  /**  The number of entries to be displayed at once */
  pageSize: number
  /**  Whether the component is waiting for data */
  loading: boolean
  /** The current page index to optionally control the component */
  page?: number
  /**
   * Callback to set new page data when the user navigates to
   * a new page
   * @param pageIndex The new page number the user has selected
   */
  onPageChange: (pageIndex: number) => void
  /** The component context */
  componentContext?: string
}

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
  const NoDataComponent = (props: any): JSX.Element => {
    if (noDataComponent) { return noDataComponent }

    return (
      <Callout type='no-data' shouldFocus={false} >
        {props.children}
      </Callout>
    )
  }

  const PaginationComponent = (props: IDataTablePaginationProps): JSX.Element | null => {
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
      NoDataComponent,
      PaginationComponent
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
    <div className={`-loading ${props.loading ? '-active' : ''}`} >
      <div className='-loading-inner'>
        <Spinner
          type='three-bounce'
          position='center'
        />
        <div className='loading-title'>Loading</div>
      </div>
    </div >
  )
}

export {
  AsyncDataTable
}
