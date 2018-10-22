import React from 'react'
import {
  toLower,
  map,
  filter as lodashFilter,
  every,
  debounce,
  some,
  get,
  partial
} from 'lodash'

interface IValueFilter {
  kind: 'valueFilter'
  /** String paths within the data to filter over */
  paths: string[]
  /** Case sensitive filtering? */
  caseSensitive: boolean
  /** Value to filter the above paths by */
  filterValue: string
}

// Support multiple filter types in future
type Filter = IValueFilter

type DataFetchCallback = (filters?: Filter[]) => Promise<any[]>

type RenderCallback = (args: IFilteredListProps | { row: any, filteredRows: any[], index: number }) => JSX.Element | null | undefined
type ErrorCallback = (errors: any) => JSX.Element | null | undefined

interface IFilteredListProps {
  /** Array of data to filter, or a promise callback for filter data */
  rowData: any[] | DataFetchCallback
  /** List of filters to apply to the data */
  filters?: Filter[]
  /** Row rendering callback */
  rowCallback?: RenderCallback
  /** What to show if there is no results returned */
  noDataComponent?: JSX.Element | string
  /** What to show if there is an async error */
  errorComponent?: ErrorCallback | JSX.Element | string
}

interface IFilteredListState {
  /** Array of data after fetching */
  rowData: any[]
  /** Array of filtered data */
  filteredData: any[]
  /** errors returned by the rowData callback */
  errors: any
}

class FilteredList extends React.Component<IFilteredListProps, IFilteredListState> {
  public state: IFilteredListState = {
    rowData: [],
    filteredData: [],
    errors: null
  }

  public componentDidMount () {
    return this.recalculateData()
  }

  public componentDidUpdate (prevProps: IFilteredListProps) {
    const {
      rowData: prevData,
      filters: prevFilters
    } = prevProps

    const {
      rowData,
      filters
    } = this.props

    if (prevData !== rowData || prevFilters !== filters) {
      return this.debounceRecalculateData()
    }
  }

  public render ():  Array<JSX.Element | null> | JSX.Element | string | null {
    const {
      filteredData: filteredRows,
      errors
    } = this.state

    const {
      rowCallback,
      noDataComponent,
      errorComponent
    } = this.props

    if (!rowCallback) {
      return noDataComponent || null
    }

    if (errors) {
      if (errorComponent) {
        if (typeof errorComponent === 'function') {
          return errorComponent(errors) || null
        }

        return errorComponent || null
      }
      return null
    }

    const results = map(filteredRows, this.renderRow)
    return results.length > 0 ? results : noDataComponent || null
  }

  private renderRow = (row: any, index: number): JSX.Element | null => {
    const {
      rowData,
      filteredData: filteredRows
    } = this.state

    const {
      rowCallback,
      filters
    } = this.props

    if (!rowCallback) {
      return null
    }

    return (
      <span key={index}>
        {rowCallback({
          filters,
          rowData,
          row,
          filteredRows,
          index
       }) || null}
       </span>
    )
  }

  private performValueFilter = (data: any, filter: IValueFilter) => {
    const dataGetter = partial(get, data)
    return some(map(filter.paths, dataGetter), (value: any) => {
      let compared = String(value)
      let filterValue = filter.filterValue

      if (!filter.caseSensitive) {
        compared = toLower(compared)
        filterValue = toLower(filter.filterValue)
      }

      return compared.includes(filterValue)
    })
  }

  private performFilter = (value: any, filter: Filter) => {
    switch (filter.kind) {
      case 'valueFilter':
        return this.performValueFilter(value, filter)
      default:
        return false
    }
  }

  private performFiltersOnRowData = (data: any[]) : any[] => {
    const {
      filters
    } = this.props

    return lodashFilter(data, (value) =>
      every(filters, (filter) => this.performFilter(value, filter))
    )
  }

  private recalculateData = () => {
    const {
      rowData,
      filters
    } = this.props

    if (typeof rowData === 'function') {
      return rowData(filters)
        .then(result => {
          const filteredData = this.performFiltersOnRowData(result)
          if (filteredData !== this.state.filteredData) {
            this.setState({
              rowData: result,
              filteredData,
              errors: null
            })
          }
        }).catch((errors) => this.setState({errors}))
    } else {
      const filteredData = this.performFiltersOnRowData(rowData)
      if (filteredData !== this.state.filteredData) {
        this.setState({rowData, filteredData})
      }
    }
  }

  // tslint:disable-next-line:member-ordering
  private debounceRecalculateData = debounce(this.recalculateData, 200, {maxWait: 1000, leading: true})
}

export {
  FilteredList
}
