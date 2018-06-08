import React from 'react'
import { isNil, map } from 'lodash'
import classNames from 'classnames'
import { ListHeader } from '../ListHeader'

export interface SizeShape {
  /** Size action for "small" breakpoint */
  small: 'auto' | 'shrink' | 'stretch'
  /** Size action for "medium" breakpoint */
  medium: 'auto' | 'shrink' | 'stretch'
  /** Size action for "large" breakpoint */
  large: 'auto' | 'shrink' | 'stretch'
  /** Size action for "xlarge" breakpoint */
  xlarge: 'auto' | 'shrink' | 'stretch'
  /** Size action for "xxlarge" breakpoint */
  xxlarge: 'auto' | 'shrink' | 'stretch'
  [key: string]: string
}

export interface IListColumn {
  /** Content to display in each cell of the list column */
  cell: (rowObject: any) => JSX.Element | string
  /** Class names to use for each cell of the list column */
  cellClassNames?: (rowObject: any) => string
  /** Dataset used to generate the list content */
  data?: any
  /** Index of the row being iterated on */
  rowIndex?: number
  /** Flag to state if the column cell is the header or not */
  isHeader?: boolean
  /** Content to display in header */
  header?: string | object
  /** Class names to use for each row of the list */
  classNames?: string
  /** Size of the column */
  size: ('auto' | 'shrink' | 'stretch') | number | SizeShape
  /** Flag to select if the text should be aligned right */
  alignRight?: boolean
  /** ID for the column header tooltip */
  tooltipId?: string
  /** Text display in the column header tooltip */
  tooltipText?: string
  /** Foundation behave attribute */
  behave?: string
  /** Foundation order attribute */
  order?: any
}

export class ListColumn extends React.PureComponent<IListColumn> {
  public static defaultProps: Partial<IListColumn> = {
    rowIndex: 0,
    isHeader: false,
    header: '',
    alignRight: false
  }

  get cellContent (): JSX.Element | string | undefined {
    const {
      cell,
      data,
      rowIndex,
      isHeader,
      header,
      tooltipId,
      tooltipText
    } = this.props

    if (isHeader) {
      return (
        <ListHeader
          label={header}
          tooltipId={tooltipId}
          tooltipText={tooltipText}
        />
      )
    }

    if (!isNil(rowIndex) && data && data[rowIndex]) {
      return cell(data[rowIndex])
    }
  }

  get cellClassNames (): string | undefined {
    const {
      cellClassNames,
      data,
      rowIndex
    } = this.props

    if (!isNil(rowIndex) && data && data[rowIndex] && cellClassNames) {
      return cellClassNames(data[rowIndex])
    }
  }

  get columnSizeClasses () {
    const {
      behave,
      size
    } = this.props

    if (!size) {
      return []
    }

    if (behave) {
      return [behave]
    }

    if (typeof size === 'number') {
      return [`small-${size}`]
    }

    if (typeof size === 'string') {
      return [size]
    }

    return map(size, (v, k) => `${k}-${v}`)
  }

  get columnOrderClasses () {
    const {
      order
    } = this.props

    if (!order) {
      return []
    }

    if (typeof order === 'number') {
      return [`small-order-${order}`]
    }

    if (typeof order === 'string') {
      return [order]
    }

    return map(order, (v, k) => `${k}-order-${v}`)
  }

  public render (): JSX.Element | null {
    const {
      alignRight,
      classNames: customClasses
    } = this.props

    return (
      <div className={classNames(
        'list-column',
        'cell',
        customClasses,
        this.cellClassNames,
        ...this.columnSizeClasses,
        ...this.columnOrderClasses,
        {
          'text-right': alignRight
        }
      )}>
        {this.cellContent}
      </div>
    )
  }
}
