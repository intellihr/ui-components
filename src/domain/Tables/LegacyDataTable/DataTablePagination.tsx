import classNames from 'classnames'
import React from 'react'

import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'

export interface IDataTablePaginationState {
  /** Currently selected page - stored here to allow async changes */
  page: number
}

export interface IDataTablePaginationProps {
  totalCount: number
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
  /** Custom component to render within this component */
  customComponent?: JSX.Element
  /** Page changing callback */
  onPageChange: (page: number) => void
  /** Page size change callback */
  onPageSizeChange: (newPageSize: number, newPage: number) => void
}

export class DataTablePagination extends React.Component<IDataTablePaginationProps, IDataTablePaginationState> {
  constructor (props: IDataTablePaginationProps) {
    super(props)

    this.state = {
      page: props.page
    }
  }

  public UNSAFE_componentWillReceiveProps (nextProps: IDataTablePaginationProps) {
    this.setState({
      page: nextProps.page
    })
  }

  public getSafePage = (newPage: number) => {
    const {
      pages
    } = this.props

    return Math.min(Math.max(newPage, 0), pages - 1)
  }

  public changePage = (newPage: number) => {
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

  public incrementPage = () => {
    const {
      page,
      canNext
    } = this.props

    if (canNext) {
      return this.changePage(page + 1)
    }
  }

  public decrementPage = () => {
    const {
      page,
      canPrevious
    } = this.props

    if (canPrevious) {
      return this.changePage(page - 1)
    }
  }

  public shouldPaginatePage = (pageNo: number) => {
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

  public buttonForPage = (pageNo: number, key: number) => {
    const { page } = this.state

    const clickHandler = () => this.changePage(pageNo)

    return (
      <button
        key={key}
        className={classNames({ current: page === pageNo }, 'page-button', '-btn')}
        type='button'
        onClick={clickHandler}
      >
        {pageNo + 1}
      </button>
    )
  }

  get pagination () {
    const { pages } = this.props
    const { page } = this.state

    const response = []
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

  get paginationComponents () {
    const {
      canPrevious,
      canNext,
      totalCount
    } = this.props

    if (totalCount > 0) {
      return (
        <div className='page-navigation'>
          <button
            type='button'
            className='previous -btn'
            onClick={this.decrementPage}
            disabled={!canPrevious}
          >
            <FontAwesomeIcon type='solid' icon='chevron-left'/>
          </button>
          {this.pagination}
          <button
            type='button'
            className='next -btn'
            onClick={this.incrementPage}
            disabled={!canNext}
          >
            <FontAwesomeIcon type='solid' icon='chevron-right'/>
          </button>
        </div>
      )
    }

    return null
  }

  public render () {
    const {
      className,
      customComponent,
      showPageSizeOptions,
      pageSizeOptions,
      pageSize,
      onPageSizeChange,
      totalCount
    } = this.props

    return (
      <div className={classNames(className, '-pagination')} >
        {customComponent}
        <PageSizeOptions
          showPageSizeOptions={showPageSizeOptions}
          pageSizeOptions={pageSizeOptions}
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          page={this.state.page}
        />
        <PageDetails
          pageSize={pageSize}
          totalCount={totalCount}
          page={this.state.page}
        />
        {this.paginationComponents}
      </div>
    )
  }
}

const PageDetails: React.FC<any> = ({pageSize, totalCount, page}) => {
  const t = useTranslateFunction()

  const entryCount = totalCount
  const nextPage = page + 1
  const maxPossibleCurrentPageIndex = nextPage * pageSize
  const maxActualCurrentPageIndex = Math.min(entryCount, maxPossibleCurrentPageIndex)
  const pageStartingIndex = page * pageSize || 1

  return (
    <div className='page-details'>
      {t('pagination.details', {
        defaultValue: 'Showing {{firstItemOnPage}} to {{lastItemOnPage}} of {{totalItems}} entries',
        firstItemOnPage: pageStartingIndex,
        lastItemOnPage: maxActualCurrentPageIndex,
        totalItems: entryCount
      })}
    </div>
  )
}

const PageSizeOptions: React.FC<any> = ({showPageSizeOptions, pageSizeOptions, pageSize, onPageSizeChange, page}) => {
  const t = useTranslateFunction()

  if (showPageSizeOptions) {
    const pageSizeSelect = (
      <select
        // tslint:disable-next-line:jsx-no-lambda
        onChange={(e) => onPageSizeChange(Number(e.target.value), page)}
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
      <span className='page-size-options'>
        <label>{pageSizeSelect} {t('pagination.entriesPerPage', {defaultValue: 'entries per page'})}</label>
      </span>
    )
  }

  return null
}
