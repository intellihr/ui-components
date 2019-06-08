import React from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { ButtonsWrapper, ChevronIconWrapper, EllipsisWrapper, StylePaginationButton } from './style'

interface IPaginationButtonsProps {
  /** Current selected page number */
  currentPage: number
  /** Total page number */
  totalPages: number
  /** Page changing callback */
  handlePageChange: (page: number) => void
  /** The data-component-context */
  componentContext?: string
  /** If there are any more pages after the current one */
  hasMorePages?: boolean
  /** The margins around the component */
  margins?: Props.IMargins
}

export class PaginationButtons extends React.PureComponent<IPaginationButtonsProps> {

  public render (): JSX.Element {
    const {
      componentContext,
      margins
    } = this.props

    return (
      <ButtonsWrapper
        margins={margins}
        data-component-type={Props.ComponentType.PaginationButtons}
        data-component-context={componentContext}
      >
        {this.previousPageButton}
        {this.paginationPageButtons}
        {this.nextPageButton}
      </ButtonsWrapper>
    )
  }

  private get previousPageButton () {
    const {
      currentPage
    } = this.props

    return (
      <StylePaginationButton
        chevron='left'
        disabled={currentPage <= 1}
        onClick={this.changePage(currentPage - 1)}
      >
        <ChevronIconWrapper arrowDirection='left'>
          <FontAwesomeIcon  type='chevron-left' />
        </ChevronIconWrapper>
      </StylePaginationButton>
    )
  }

  private get nextPageButton () {
    const {
      currentPage,
      totalPages,
      hasMorePages
    } = this.props

    return (
      <StylePaginationButton
        chevron='right'
        disabled={hasMorePages ? hasMorePages : totalPages <= currentPage}
        onClick={this.changePage(currentPage + 1)}
      >
        <ChevronIconWrapper arrowDirection='right'>
          <FontAwesomeIcon  type='chevron-right' />
        </ChevronIconWrapper>
      </StylePaginationButton>
    )
  }

  private get paginationPageButtons () {
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
        pageNumberArray.push(<EllipsisWrapper key={`pagination-ellipsis`}>...</EllipsisWrapper>)
        pageNumberArray.push(this.buttonForPage(totalPages))

        return pageNumberArray
      }

      // Ellipse in the beginning (1 ... 6 7 8 9 10)
      if (currentPage <= totalPages && currentPage >= (totalPages - 4)) {
        pageNumberArray.push(this.buttonForPage(1))
        pageNumberArray.push(<EllipsisWrapper key={`pagination-ellipsis`}>...</EllipsisWrapper>)

        for (let i = (totalPages - 5); i < totalPages; i++) {
          pageNumberArray.push(this.buttonForPage(i + 1))
        }

        return pageNumberArray
      }

      // Ellipse in the middle (1 ... 59 60 61 ... 100)
      pageNumberArray.push(this.buttonForPage(1))
      pageNumberArray.push(<EllipsisWrapper key={`pagination-ellipsis-1`}>...</EllipsisWrapper>)
      for (let i = (currentPage - 2); i < (currentPage + 1); i++) {
        pageNumberArray.push(this.buttonForPage(i + 1))
      }
      pageNumberArray.push(<EllipsisWrapper key={`pagination-ellipsis-2`}>...</EllipsisWrapper>)
      pageNumberArray.push(this.buttonForPage(totalPages))

      return pageNumberArray
    }

    // Pagination without ellipse
    for (let i = 0; i < totalPages; i++) {
      pageNumberArray.push(this.buttonForPage(i + 1))
    }

    return pageNumberArray
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
      <StylePaginationButton
        key={`pagination-${pageNumber}`}
        isCurrent={currentPage === pageNumber}
        onClick={this.changePage(pageNumber)}
      >
        {pageNumber}
      </StylePaginationButton>
    )
  }
}
