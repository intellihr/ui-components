import React from 'react'
import classNames from 'classnames'
import { isNil } from 'lodash'
import { Anchor } from '@Domain/Internals'

const style = require('./style.scss')

export interface IListClickableColumn {
  /** Dataset used to generate the list rows */
  data: any
  /** Index of the row being iterated on */
  rowIndex: number
  /** Flag to state if the column cell is the header or not */
  isHeader?: boolean
  /** Callback that gets triggered when clicking on a list row */
  handleClick?: (rowObject: object) => void
  /** Callback that gets triggered when left clicking on a list row */
  handleLeftClick?: (rowObject: object) => void
  /** Url to redirect to when row has been clicked */
  urlForRow?: (rowObject: object) => string
  /** Wrapper for child component */
  childrenWrapper?: (rowObject: object, children: any) => JSX.Element
  /** Column components passed to the list */
  children: JSX.Element
  /** Anchor props passthrough */
  anchorComponentProps?: any
}

export class ListClickableColumn extends React.PureComponent<IListClickableColumn> {
  public static defaultProps: Partial<IListClickableColumn> = {
    isHeader: false
  }

  get isRowValid (): boolean {
    const {
      data,
      rowIndex,
      isHeader
    } = this.props

    return !isNil(rowIndex) && data[rowIndex] && !isHeader
  }

  get children (): JSX.Element {
    const {
      data,
      rowIndex,
      childrenWrapper,
      children
    } = this.props

    if (childrenWrapper && this.isRowValid) {
      return childrenWrapper(data[rowIndex], children)
    }

    return children
  }

  handleClick = (): void | undefined => {
    const {
      data,
      rowIndex,
      handleClick
    } = this.props

    if (handleClick && this.isRowValid) {
      return handleClick(data[rowIndex])
    }
  }

  get getUrl (): string | undefined {
    const {
      data,
      rowIndex,
      urlForRow
    } = this.props

    if (urlForRow && this.isRowValid) {
      return urlForRow(data[rowIndex])
    }
  }

  public render (): JSX.Element {
    const {
      anchorComponentProps
    } = this.props

    return (
      <Anchor
        className={classNames(
          style.ListClickableColumns,
          'clickable-columns',
          'cell auto grid-x grid-padding-x'
        )}
        href={this.getUrl}
        onClick={this.handleClick}
        anchorComponentProps={anchorComponentProps}
      >
        {this.children}
      </Anchor>
    )
  }
}
