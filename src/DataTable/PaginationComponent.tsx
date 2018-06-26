import React from 'react'
import classNames from 'classnames'

export default class ReactTablePagination extends React.Component<any, any> {
  constructor (props: any) {
    super(props)

    this.state = {
      page: props.page
    }
  }

  componentWillReceiveProps (nextProps: any) {
    this.setState({ page: nextProps.page })
  }

  getSafePage = (newPage: any) => {
    const {
      pages,
      page
    } = this.props

    if (Number.isNaN(newPage)) {
      newPage = page
    }
    return Math.min(Math.max(newPage, 0), pages - 1)
  }

  changePage = (newPage: any) => {
    const {
      page,
      onPageChange
    } = this.props

    newPage = this.getSafePage(newPage)
    this.setState({ newPage })
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

  get generatePagination () {
    const {
      pages,
      page,
    } = this.props

    let startPage, endPage
    if (pages <= 8) {
      startPage = 1;
      endPage = pages;
    } else {
      if (page <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (page + 5 > pages) {
        startPage = pages - 5;
        endPage = pages;
      } else {
        startPage = page - 1;
        endPage = page + 2;
      }
    }

    let response = []
    for (let i = startPage; i <= endPage; i++ ) {
      response.push(
        <button
          key={i}
          className={classNames({'current': i === page+1}, 'page-button', '-btn')}
          onClick={() => this.changePage(i - 1)}
        >
          {i}
        </button>
      )
    }

    if(pages > endPage+1) {
        response.push(
          <span className='ellipsis' key='endEllipsis'>...</span>
          ,<button
            key={pages}
            className= 'page-button -btn'
            onClick={() => this.changePage(pages - 1)}
          >
            {pages}
          </button>
        )
    }

    if(startPage > 1) {
      response = response.slice(1)
      response = [
        <button
          key={1}
          className= 'page-button -btn'
          onClick={() => this.changePage(0)}
        >
          1
        </button>,
        <span className='ellipsis' key='startEllipsis'>
          ...
        </span>
      ].concat(response)
    }
    return response
  }

  get pageDetails () {
    const {
      page,
      pageSize,
      data
    } = this.props

    const entryCount = data.length
    const nextPage = page+1
    const maxPossibleCurrentPageIndex = nextPage * pageSize
    const maxActualCurrentPageIndex = maxPossibleCurrentPageIndex > entryCount ? entryCount : maxPossibleCurrentPageIndex
    const pageStartingIndex = page*pageSize || 1

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

    if (showPageSizeOptions) {
      return (
        <span className="select-wrap -pageSizeOptions">
          <label>{"Show "}
            <select onChange={e => onPageSizeChange(Number(e.target.value))} value={pageSize}>
              {pageSizeOptions.map((option: any, i: number) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {" entries"}
          </label>
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
      nextText,
      style
    } = this.props

    return (
      <div className={classNames(className, '-pagination')} style={style}>
        {this.pageDetails}
        {this.pageSizeOptions}
        <div className='page-navigation'>
          <button
            type="button"
            className="-btn"
            onClick={this.decrementPage}
            disabled={!canPrevious}
          >
            {previousText}
          </button>
          {this.generatePagination}
          <button
            type="button"
            className="-btn"
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
