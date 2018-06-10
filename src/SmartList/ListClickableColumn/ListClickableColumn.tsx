import React from 'react'
import classNames from 'classnames'
import { isNil } from 'lodash'
import { Anchor } from '../../Anchor'

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
  /** Flag to state if navigation should be blocked on left click */
  blockNavigationOnLeftClick?: boolean
  /** Flag to select if React Router should be used or not */
  useReactRouter?: boolean
}

export class ListClickableColumn extends React.PureComponent<IListClickableColumn> {
  public static defaultProps: Partial<IListClickableColumn> = {
    blockNavigationOnLeftClick: false,
    useReactRouter: true,
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

  handleLeftClick = (): void | undefined => {
    const {
      data,
      rowIndex,
      handleLeftClick
    } = this.props

    if (handleLeftClick && this.isRowValid) {
      return handleLeftClick(data[rowIndex])
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

  get classNames (): string {
    return classNames(
      style.ListClickableColumns,
      'clickable-columns',
      'cell auto grid-x grid-padding-x'
    )
  }

  public render (): JSX.Element {
    const {
      blockNavigationOnLeftClick,
      useReactRouter
    } = this.props

    return (
      <Anchor
        blockNavigationOnLeftClick={blockNavigationOnLeftClick}
        className={this.classNames}
        href={this.getUrl}
        onClick={this.handleClick}
        onLeftClick={this.handleLeftClick}
        useReactRouter={useReactRouter}
      >
        {this.children}
      </Anchor>
    )
  }
}
