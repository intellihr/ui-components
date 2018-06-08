import React from 'react'
import { isEmpty } from 'lodash'
import classNames from 'classnames'
import { Anchor } from '../../Anchor'

export interface IListRow {
  children: any,
  wrapperClassName?: string,
  className?: string,
  handleClick?:
    (rowObject?: object, event?: React.MouseEvent<HTMLDivElement>) => void,
  index?: number,
  cursor?: 'auto' | 'pointer',
  hideRow?: boolean,
  to?: string,
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
