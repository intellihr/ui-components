import React from 'react'
import classNames from 'classnames'
import { Row } from 'react-styled-flexboxgrid'
import { Anchor } from '@Domain/Internals'

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
  /** Anchor props passthrough */
  anchorComponentProps?: {
    [i: string]: any
  }
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
      <Row
        className={classNames(
          'item-row',
          `cursor-${cursor}`,
          wrapperClassName,
          className
        )}
        onClick={handleClick}
        style={{display: hideRow ? 'none' : 'flex'}}
      >
        {children}
      </Row>
    )
  }

  public render (): JSX.Element {
    const {
      to,
      href,
      anchorComponentProps
    } = this.props

    if (to || href) {
      return (
        <Anchor
          href={href || to}
          anchorComponentProps={anchorComponentProps}
        >
          {this.listRow}
        </Anchor>
      )
    }

    return this.listRow
  }
}
