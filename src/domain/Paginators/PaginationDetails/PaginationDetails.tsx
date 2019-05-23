import React from 'react'

import { Props, Variables } from '../../../common'
import { Text } from '../../Typographies/Text'

interface IPaginationDetailsProps {
  /** Current selected page number */
  currentPage: number
  /** Total page number */
  totalPages: number
  /** Total count of item */
  totalCount: number
  /** Row size per page */
  pageSize: number
  /** The data-component-context */
  componentContext?: string
}

export class PaginationDetails extends React.PureComponent<IPaginationDetailsProps> {
  public render (): JSX.Element {
    const {
      currentPage,
      pageSize,
      totalCount,
      componentContext
    } = this.props

    const pageStartingIndex = (currentPage - 1) * pageSize + 1
    const maxCurrentPageIndex = currentPage * pageSize
    const maxActualCurrentPageIndex = maxCurrentPageIndex <= totalCount ? maxCurrentPageIndex : totalCount

    return (
      <Text
        color={Variables.Color.n600}
        type={Props.TypographyType.Small}
        data-component-type={Props.ComponentType.PaginationDetails}
        data-component-context={componentContext}
      >
        Showing {pageStartingIndex.toString()} to {maxActualCurrentPageIndex.toString()} of {totalCount.toString()} entries
      </Text>
    )
  }
}
