import React from 'react'
import classNames from 'classnames'

export interface DataTablePaginationState {
  /** Currently selected page - stored here to allow async changes */
  page: number
}

export interface DataTablePaginationProps {
  /** Data to paginate - only used to get total number of rows */
  data: any[]

  /** Currently selected page */
  page: number

  /** Page count */
  pages: number

  /** Row size per page */
  pageSize: number

  /** List of page size options */
  pageSizeOptions: number[]

  /** Show the ability to change page size? */
  showPageSizeOptions: boolean

  /** Can we go to the next page? */
  canNext: boolean

  /** Can we go to the previous page? */
  canPrevious: boolean

  /** Classnames */
  className?: string

  /** Back button text */
  previousText?: string

  /** Forward button text */
  nextText?: string

  /** Page changing callback */
  onPageChange: (page: number) => void

  /** Page size change callback */
  onPageSizeChange: (newPageSize: number, newPage: number) => void
}

export class DataTablePagination extends React.Component<DataTablePaginationProps, DataTablePaginationState> {
  public static defaultProps: Partial<DataTablePaginationProps> = {
    previousText: 'Previous',
    nextText: 'Next'
  }

  constructor (props: DataTablePaginationProps) {
    super(props)

    this.state = {
      page: props.page
    }
  }

  componentWillReceiveProps (nextProps: DataTablePaginationProps) {
    this.setState({
      page: nextProps.page
    })
  }

  getSafePage = (newPage: number) => {
    const {
      pages
    } = this.props

    return Math.min(Math.max(newPage, 0), pages - 1)
  }

  changePage = (newPage: number) => {
    const {
      page,
      onPageChange
    } = this.props

    newPage = this.getSafePage(newPage)
    this.setState({ page: newPage })

    if (page !== newPage) {
      onPageChange(newPage)
    }
  }

  incrementPage = () => {
    const {
      page,
      canNext
    } = this.props

    if (canNext) {
      return this.changePage(page + 1)
    }
  }

  decrementPage = () => {
    const {
      page,
      canPrevious
    } = this.props

    if (canPrevious) {
      return this.changePage(page - 1)
    }
  }

  shouldPaginatePage = (pageNo: number) => {
    const { pages } = this.props
    const { page } = this.state

    // Always paginate start and end
    if (pageNo === 0 || pageNo + 1 === pages) {
      return true
    }

    // Paginate next and previous
    if (page - 1 <= pageNo && pageNo <= page + 1) {
      return true
    }

    // Paginate near start
    if (pageNo < 5 && page < 4) {
      return true
    }

    // Paginate near end
    if (pageNo > pages - 6 && page > pages - 5) {
      return true
    }

    return false
  }

  buttonForPage = (pageNo: number, key: number) => {
    const { page } = this.state

    return (
      <button
        key={key}
        className={classNames({'current': page === pageNo}, 'page-button', '-btn')}
        onClick={() => this.changePage(pageNo)}
      >
        {pageNo + 1}
      </button>
    )
  }

  get pagination () {
    const { pages } = this.props
    const { page } = this.state

    let response = []
    let hasStartEllipses = false
    let hasEndEllipses = false
    let key = 0 // Using a common key prevents jumpiness when changing pages
    for (let i = 0; i < pages; i++) {
      if (this.shouldPaginatePage(i)) {
        response.push(
          this.buttonForPage(i, key)
        )
        key++
      } else if (!hasStartEllipses && i < page) {
        response.push(
          <span className='ellipsis' key={key}>...</span>
        )
        hasStartEllipses = true
        key++
      } else if (!hasEndEllipses && i > page) {
        response.push(
          <span className='ellipsis' key={key}>...</span>
        )
        hasEndEllipses = true
        key++
      }
    }

    return response
  }

  get pageDetails () {
    const {
      pageSize,
      data
    } = this.props
    const { page } = this.state

    const entryCount = data.length
    const nextPage = page + 1
    const maxPossibleCurrentPageIndex = nextPage * pageSize
    const maxActualCurrentPageIndex = Math.min(entryCount, maxPossibleCurrentPageIndex)
    const pageStartingIndex = page * pageSize || 1

    return (
      <div className='page-details'>
        Showing {pageStartingIndex} to {maxActualCurrentPageIndex} of {entryCount} entries
      </div>
    )
  }

  get pageSizeOptions () {
    const {
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      onPageSizeChange
    } = this.props
    const { page } = this.state

    if (showPageSizeOptions) {
      const pageSizeSelect = (
        <select
          onChange={e => onPageSizeChange(Number(e.target.value), page)}
          value={pageSize}
        >
          {pageSizeOptions.map((option: number) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )

      return (
        <span className='select-wrap -pageSizeOptions'>
          <label>Show {pageSizeSelect} entries</label>
        </span>
      )
    }
  }

  render () {
    const {
      canPrevious,
      canNext,
      className,
      previousText,
      nextText
    } = this.props

    return (
      <div className={classNames(className, '-pagination')} >
        {this.pageDetails}
        {this.pageSizeOptions}
        <div className='page-navigation'>
          <button
            type='button'
            className='previous -btn'
            onClick={this.decrementPage}
            disabled={!canPrevious}
          >
            {previousText}
          </button>
          {this.pagination}
          <button
            type='button'
            className='next -btn'
            onClick={this.incrementPage}
            disabled={!canNext}
          >
            {nextText}
          </button>
        </div>
      </div>
    )
  }
}
