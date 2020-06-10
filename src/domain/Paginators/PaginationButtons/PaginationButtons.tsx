import React from 'react'

import { Props, Variables } from '../../../common'
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

export class PaginationButtons extends React.PureComponent<IPaginationButtonsProps, { isMobile: boolean }> {

  private currentlyMounted: boolean = false

  constructor (props: IPaginationButtonsProps) {
    super(props)

    this.state = {
      isMobile: this.isMobile
    }
  }

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

  public componentDidMount () {
    this.currentlyMounted = true

    window.addEventListener('resize', this.onWindowUpdate)
  }

  public componentWillUnmount () {
    this.currentlyMounted = false

    window.removeEventListener('resize', this.onWindowUpdate)
  }

  private onWindowUpdate = () => {
    // This allows the menu to reposition correctly when the window changes
    if (this.currentlyMounted) {
      this.setState({ isMobile: this.isMobile })
    }
  }

  private get isMobile () {
    return window.innerWidth < Variables.Breakpoint.breakpointTablet
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
          <FontAwesomeIcon type='solid' icon='chevron-left' />
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
          <FontAwesomeIcon type='solid' icon='chevron-right' />
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
    const pagesAtEnds = this.state.isMobile ? 3 : 5
    const pagesInMiddle = this.state.isMobile ? 0 : 1

    // Pagination with ellipse
    if (totalPages > (pagesAtEnds + 2)) {

      // Ellipse by the end (1 2 3 4 5 ... 10)
      if (currentPage <= pagesAtEnds) {
        for (let i = 0; i < pagesAtEnds; i++) {
          pageNumberArray.push(this.buttonForPage(i + 1))
        }
        pageNumberArray.push(<EllipsisWrapper key={`pagination-ellipsis`}>...</EllipsisWrapper>)
        pageNumberArray.push(this.buttonForPage(totalPages))

        return pageNumberArray
      }

      // Ellipse in the beginning (1 ... 6 7 8 9 10)
      if (currentPage <= totalPages && currentPage >= (totalPages - pagesAtEnds + 1)) {
        pageNumberArray.push(this.buttonForPage(1))
        pageNumberArray.push(<EllipsisWrapper key={`pagination-ellipsis`}>...</EllipsisWrapper>)

        for (let i = (totalPages - pagesAtEnds); i < totalPages; i++) {
          pageNumberArray.push(this.buttonForPage(i + 1))
        }

        return pageNumberArray
      }

      // Ellipse in the middle (1 ... 59 60 61 ... 100)
      pageNumberArray.push(this.buttonForPage(1))
      pageNumberArray.push(<EllipsisWrapper key={`pagination-ellipsis-1`}>...</EllipsisWrapper>)
      for (let i = (currentPage - pagesInMiddle - 1); i < (currentPage + pagesInMiddle); i++) {
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
        type='button'
      >
        {pageNumber}
      </StylePaginationButton>
    )
  }
}
