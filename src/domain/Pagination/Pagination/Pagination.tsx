import React from 'react'

import { Props } from '../../../common'
import { Button } from '../../Buttons'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import {GridLayout} from '../../Layouts/GridLayout'

interface IPaginationProps {
  /** Current selected page number */
  currentPage: number
  /** Total page number */
  totalPages: number
  /** Total count of item. It is required to display page details */
  totalCount?: number
  /** Row size per page. It is required to display page details */
  pageSize?: number
  /** Page changing callback */
  handlePageChange: (page: number) => void
  /** The data-component-context */
  componentContext?: string
  /** If true, display page detail */
  hasPageDetails?: boolean
  /** If there are any more pages after the current one */
  hasMorePages?: boolean
}

export class Pagination extends React.PureComponent<IPaginationProps> {
  public static defaultProps: Partial<IPaginationProps> = {
    hasPageDetails: true
  }

  get pageDetails () {
    const {
      currentPage,
      pageSize,
      totalCount,
      hasPageDetails
    } = this.props

    if (hasPageDetails && totalCount && pageSize) {
      const pageStartingIndex = (currentPage - 1) * pageSize + 1
      const maxCurrentPageIndex = currentPage * pageSize
      const maxActualCurrentPageIndex = maxCurrentPageIndex <= totalCount ? maxCurrentPageIndex : totalCount

      return (
        <div>
          Showing {pageStartingIndex} to {maxActualCurrentPageIndex} of {totalCount} entries
        </div>
      )
    }

    return null
  }

  get previousPageButton () {
    const {
      currentPage
    } = this.props

    return (
      <Button
        disabled={currentPage <= 1}
        onClick={this.changePage(currentPage - 1)}
      >
        <FontAwesomeIcon type='chevron-left' />
      </Button>
    )
  }

  get nextPageButton () {
    const {
      currentPage,
      totalPages,
      hasMorePages
    } = this.props

    return (
      <Button
        disabled={hasMorePages ? hasMorePages : totalPages <= currentPage}
        onClick={this.changePage(currentPage + 1)}
      >
        <FontAwesomeIcon type='chevron-right' />
      </Button>
    )
  }

  get paginationCells () {
    const pagination = (
      <>
        {this.previousPageButton}
        {this.paginationPageButtons}
        {this.nextPageButton}
      </>
    )

    if (this.pageDetails) {
      return ([{
        size: 6,
        content: this.pageDetails
      }, {
        size: 6,
        content: pagination
      }])
    }
    return ([{
      size: 6,
      content: pagination
    }])
  }

  get paginationPageButtons () {
    const {
      totalPages,
      currentPage
    } = this.props

    const pageNumberArray = []

    // Pagination with ellipse
    if (totalPages > 7 ) {

      // Ellipse by the end (1 2 3 4 5 ... 10)
      if (currentPage <= 5) {
        for (let i = 0; i < 5; i++) {
          pageNumberArray.push(this.buttonForPage(i + 1))
        }
        pageNumberArray.push(<span>...</span>)
        pageNumberArray.push(this.buttonForPage(totalPages))

        return pageNumberArray
      }

      // Ellipse in the beginning (1 ... 6 7 8 9 10)
      if (currentPage <= totalPages && currentPage >= (totalPages - 4)) {
        pageNumberArray.push(this.buttonForPage(1))
        pageNumberArray.push(<span>...</span>)

        for (let i = (totalPages - 5); i < totalPages; i++) {
          pageNumberArray.push(this.buttonForPage(i + 1))
        }

        return pageNumberArray
      }

      // Ellipse in the middle (1 ... 59 60 61 ... 100)
      pageNumberArray.push(this.buttonForPage(1))
      pageNumberArray.push(<span>...</span>)
      for (let i = (currentPage - 2); i < (currentPage + 1); i++) {
        pageNumberArray.push(this.buttonForPage(i + 1))
      }
      pageNumberArray.push(<span>...</span>)
      pageNumberArray.push(this.buttonForPage(totalPages))

      return pageNumberArray
    }

    // Pagination without ellipse
    for (let i = 0; i < totalPages; i++) {
      pageNumberArray.push(this.buttonForPage(i + 1))
    }

    return pageNumberArray
  }

  public render (): JSX.Element {
    const {
      componentContext
    } = this.props

    return (
      <GridLayout
        data-component-type={Props.ComponentType.Pagination}
        data-component-context={componentContext}
        cells={this.paginationCells}
      />
    )
  }

  private changePage = (pageNumber: number) => () => {
    const {
      handlePageChange
    } = this.props

    handlePageChange(pageNumber)
  }

  private buttonForPage = (pageNumber: number) => {
    const { currentPage } = this.props

    return (
      <Button
        key={`pagination-${pageNumber}`}
        type={currentPage === pageNumber ? 'primary' : undefined}
        onClick={this.changePage(pageNumber)}
      >
        {pageNumber}
      </Button>
    )
  }
}
