import React from 'react'
import { isNil, map } from 'lodash'
import classNames from 'classnames'
import { ListHeader } from '../ListHeader'

export interface SizeShape {
  small: 'auto' | 'shrink' | 'stretch',
  medium: 'auto' | 'shrink' | 'stretch',
  large: 'auto' | 'shrink' | 'stretch',
  xlarge: 'auto' | 'shrink' | 'stretch',
  xxlarge: 'auto' | 'shrink' | 'stretch',
  [key: string]: string
}

export interface IListColumn {
  cell: (rowObject: any) => JSX.Element | string,
  cellClassNames?: (rowObject: any) => string,
  data?: any,
  rowIndex?: number,
  isHeader?: boolean,
  header?: string | object,
  classNames?: string,
  size: ('auto' | 'shrink' | 'stretch') | number | SizeShape
  alignRight?: boolean,
  tooltipId?: string,
  tooltipText?: string,
  behave?: string,
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
