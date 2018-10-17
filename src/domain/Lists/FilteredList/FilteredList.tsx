import React from 'react'
import { toLower, map, filter as lodashFilter, every, pick, values } from 'lodash'

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

interface IFilteredListProps {
  /** Array of data to filter, or a promise callback for filter data */
  data: any[] | DataFetchCallback
  /** List of filters to apply to the data */
  filters?: Filter[]
  /** Row rendering callback */
  row?: RenderCallback,
  /** What to show if there is no results returned */
  noDataCallout?: JSX.Element | string
}

interface IFilteredListState {
  /** Array of data after fetching */
  data: any[]
  /** Array of filtered data */
  filteredData: any[]
}

class FilteredList extends React.Component<IFilteredListProps, IFilteredListState> {
  public state: IFilteredListState = {
    data: [],
    filteredData: []
  }

  public componentDidMount () {
    const {
      data,
      filters
    } = this.props

    if (typeof data === 'function') {
      return data(filters)
        .then(result => {
          this.setState({
            data: result,
            filteredData: this.filterData(result)
          })
        })
    }

    const filteredData = this.filterData(data)
    this.setState({data, filteredData})
  }

  public componentDidUpdate (prevProps: IFilteredListProps) {
    const {
      data: prevData,
      filters: prevFilters
    } = prevProps

    const {
      data,
      filters
    } = this.props

    if (prevData !== data || prevFilters !== filters) {
      if (typeof data === 'function') {
        return data(filters)
          .then(result => {
            const filteredData = this.filterData(result)
            if (filteredData !== this.state.filteredData) {
              this.setState({
                data: result,
                filteredData
              })
            }
          })
      } else {
        const filteredData = this.filterData(data)
        if (filteredData !== this.state.filteredData) {
          this.setState({data, filteredData})
        }
      }
    }
  }

  public render ():  Array<JSX.Element | null> | JSX.Element | string | null {
    const {
      filteredData: filteredRows
    } = this.state

    const {
      row: rowCallback,
      noDataCallout
    } = this.props

    if (!rowCallback) {
      return noDataCallout || null
    }

    const results = map(filteredRows, this.renderRow)
    return results.length > 0 ? results : noDataCallout || null
  }

  private renderRow = (rowData: any, index: number):  JSX.Element | null => {
    const {
      data,
      filteredData: filteredRows
    } = this.state

    const {
      row: rowCallback,
      filters
    } = this.props

    if (!rowCallback) {
      return null
    }

    return (
      <div key={index}>
        {rowCallback({
          filters,
          data,
          row: rowData,
          filteredRows,
          index
       }) || null}
       </div>
    )
  }

  private valueFilter (data: any, filter: IValueFilter) {
    return every(values(pick(data, filter.paths)), (value: any) => {
      let compared = String(value)
      let filterValue = filter.filterValue

      if (!filter.caseSensitive) {
        compared = toLower(compared)
        filterValue = toLower(filter.filterValue)
      }

      return compared.includes(filterValue)
    })
  }

  private filter (value: any, filter: Filter) {
    switch (filter.kind) {
      case 'valueFilter':
        return this.valueFilter(value, filter)
      default:
        return false
    }
  }

  private filterData (data: any[]) : any[] {
    const {
      filters
    } = this.props

    return lodashFilter(data, (value) =>
      every(filters, (filter) => this.filter(value, filter))
    )
  }
}

export {
  FilteredList
}
