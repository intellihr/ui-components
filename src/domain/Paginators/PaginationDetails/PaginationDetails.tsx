import React from 'react'

import { Props, Variables } from '../../../common'
import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
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
  /** The margins around the component */
  margins?: Props.IMargins
}

export const PaginationDetails: React.FC<IPaginationDetailsProps> = ({
  currentPage,
  pageSize,
  totalCount,
  componentContext,
  margins
}) => {
  const t = useTranslateFunction()

  const pageStartingIndex = (currentPage - 1) * pageSize + 1
  const maxCurrentPageIndex = currentPage * pageSize
  const maxActualCurrentPageIndex = maxCurrentPageIndex <= totalCount ? maxCurrentPageIndex : totalCount

  return (
    <Text
      margins={margins}
      color={Variables.Color.n600}
      type={Props.TypographyType.Small}
      data-component-type={Props.ComponentType.PaginationDetails}
      data-component-context={componentContext}
    >
      {t('pagination.details', {
        defaultValue: 'Showing {{firstItemOnPage}} to {{lastItemOnPage}} of {{totalItems}} entries',
        firstItemOnPage: pageStartingIndex,
        lastItemOnPage: maxActualCurrentPageIndex,
        totalItems: totalCount
      })}
    </Text>
  )
}
