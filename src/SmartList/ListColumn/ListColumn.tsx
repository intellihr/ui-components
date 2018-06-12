import React from 'react'
import { isNil, merge } from 'lodash'
import classNames from 'classnames'
import { Col } from 'react-styled-flexboxgrid'
import { ListHeader } from '../ListHeader'

export interface ISize {
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number
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
  /** Size of the column */
  size?: ISize
  /** Flag to select if the text should be aligned right */
  alignRight?: boolean
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
      tooltipText
    } = this.props

    if (isHeader) {
      return (
        <ListHeader
          label={header}
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

  get sizeParams (): ISize {
    const {
      size
    } = this.props

    return merge({
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12
    }, size)
  }

  public render (): JSX.Element {
    const {
      alignRight,
      size
    } = this.props

    const content = (
      <div className={classNames(
        'list-column',
        this.cellClassNames,
        {
          'text-right': alignRight
        }
      )}>
        {this.cellContent}
      </div>
    )

    if (size) {
      return (
        <Col {...this.sizeParams}>
          {content}
        </Col>
      )
    }

    return content
  }
}
