import React from 'react'
import ReactTable from 'react-table'

const style = require('./DataTable.scss')

class Pagination extends React.Component {

  // get pageSizeSelectOptions () {
  //   const {
  //     pageSizeOptions
  //   } = this.props

  //   return pageSizeOptions.map(option => <option value={option}>{option}</option>)
  // }

  render () {
    console.log(this.props)
    return (
      <div>
        <div>Showing 1 to 25 of 25 entries</div>
        <div>
          <label>Show
              <select>
                {/* {this.pageSizeSelectOptions} */}
              </select>
             entries
            </label>
        </div>
      </div>
    )
  }
}

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
    filterable?: boolean
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
    filterable: false
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
      filterable
    } = this.props

    return <ReactTable
      data={data}
      columns={columns}

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

      PaginationComponent={Pagination}
    />
  }
}
