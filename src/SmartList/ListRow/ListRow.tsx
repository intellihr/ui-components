import React from 'react'
import { isEmpty } from 'lodash'
import classNames from 'classnames'
import { Anchor } from '../../Anchor'

export interface IListRow {
  /** Column elements passed to the row */
  children: any
  /** Wrapper Class name to apply to each row */
  wrapperClassName?: string
  /** Class name to apply to each row */
  className?: string
  /** Callback triggered when the row has been clicked */
  handleClick?:
    (rowObject?: object, event?: React.MouseEvent<HTMLDivElement>) => void
  /** Index of the row in the list */
  index?: number
  /** Style for cursor */
  cursor?: 'auto' | 'pointer'
  /** Flag to state if the row should be hidden */
  hideRow?: boolean
  /** Redirect url used for React Router */
  to?: string
  /** Redirect url used for window location */
  href?: string
}

export class ListRow extends React.PureComponent<IListRow> {
  public static defaultProps: Partial<IListRow> = {
    cursor: 'auto',
    hideRow: false
  }

  get listRow (): JSX.Element {
    const {
      wrapperClassName,
      handleClick,
      cursor,
      children,
      hideRow,
      className
    } = this.props

    return (
      <div
        className={classNames(
          'item-row',
          `cursor-${cursor}`,
          'grid-x',
          'grid-padding-x',
          wrapperClassName,
          className
        )}
        onClick={handleClick}
        style={{display: hideRow ? 'none' : 'flex'}}
      >
        {children}
      </div>
    )
  }

  public render (): JSX.Element {
    const {
      to,
      href
    } = this.props

    if (to || href) {
      return (
        <Anchor
          useReactRouter={isEmpty(href)}
          href={href || to}
        >
          {this.listRow}
        </Anchor>
      )
    }

    return this.listRow
  }
}
