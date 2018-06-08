import React from 'react'
import uuid from 'uuid'
import { times, map, take, filter, size, isEmpty, every, isNil } from 'lodash'
import { cloneElement } from 'react'
import classNames from 'classnames'
import { Callout } from '../Callout'
import { Spinner } from '../Spinner'
import { ListClickableColumn } from './ListClickableColumn'
import { ListRow } from './ListRow'

const style = require('./style.scss')

export interface ISmartList {
  id?: string,
  data: any,
  children: any,
  handleRowClick?: (rowObject?: object, event?: any) => void,
  emptyListText?: string,
  title?: string,
  loading?: boolean,
  cursor?: 'auto' | 'pointer',
  limit?: number,
  showHeaderRow?: boolean,
  showHoverBg?: boolean,
  hideHeaderOnSmall?: boolean,
  rowWrapper?: (props: object) => JSX.Element
}

export interface SmartListState {
  paginationButton: boolean
}

export class SmartList extends React.PureComponent<ISmartList, SmartListState> {
  public static defaultProps: Partial<ISmartList> = {
    emptyListText: 'No Results found.',
    loading: false,
    cursor: 'auto',
    showHeaderRow: true,
    showHoverBg: true,
    hideHeaderOnSmall: false,
    limit: 5
  }

  public state: SmartListState = { paginationButton: true }

  cloneTableElement = (rowIndex = 0, isHeader = false): JSX.Element[] => {
    const {
      id,
      children,
      data
    } = this.props

    let columnIndex = 0

    const listItemProps = (item: any) => ({
      key: id ? `${id}-list-item-${rowIndex}-${columnIndex}` : uuid.v4(),
      isHeader,
      rowIndex,
      data,
      colIndex: columnIndex++,
      size: item.props.size,
      header: item.props.header
    })

    return map(
      children,
      (child: any) => {
        const props: any = listItemProps(child)

        if (child.type === ListClickableColumn) {
          props.children = map(
            child.props.children,
            (child: any) => cloneElement(child, listItemProps(child))
          )
        }

        return cloneElement(child, props)
      }
    )
  }

  togglePagination = (): void => {
    this.setState({ paginationButton: !this.state.paginationButton })
  }

  get headerRow (): JSX.Element | undefined {
    const {
      showHeaderRow,
      hideHeaderOnSmall
    } = this.props

    if (showHeaderRow) {
      return (
        <div className={classNames(
          'header-row grid-x grid-padding-x',
          {'hide-for-small-only': hideHeaderOnSmall}
        )}>
          {this.cloneTableElement(0, true)}
        </div>
      )
    }
  }

  get canLimitData (): boolean {
    const {
      data,
      limit
    } = this.props

    return !isNil(limit) && limit < data.length
  }

  listRow (index: number): JSX.Element {
    const {
      id,
      handleRowClick,
      cursor,
      rowWrapper,
      data
    } = this.props

    const listItem = data[index]
    const key = id ? `${id}-list-row-${index}` : uuid.v4()

    const defaultProps = {
      key,
      cursor,
      data: listItem,
      hideRow: listItem.hide,
      index: index,
      handleClick: (e: any) =>
        handleRowClick && handleRowClick(listItem, e)
    }

    if (rowWrapper) {
      return (
        rowWrapper({
          defaultProps,
          row: listItem,
          children: this.cloneTableElement(index)
        })
      )
    }

    return (
      <ListRow {...defaultProps}>
        {this.cloneTableElement(index)}
      </ListRow>
    )
  }

  get listRowsContent (): JSX.Element[] {
    const {
      data,
      limit
    } = this.props

    let rows: JSX.Element[] = times(data.length, i => this.listRow(i))

    if (this.canLimitData) {
      if (this.state.paginationButton) {
        rows = take(filter(rows, ['props.hideRow', false]), limit)
      }

      const visibleRowsCount = size(filter(data, item => !item.hide))

      if (!isNil(limit) && visibleRowsCount > 0 && visibleRowsCount > limit) {
        rows.push(
          <div
            key='pagination-button'
            className={classNames(
              style,
              'smart-list',
              'cursor-pointer',
              'show-all-row'
            )}
            onClick={this.togglePagination}
          >
            {this.showAllRowContent(visibleRowsCount)}
          </div>
        )
      }
    }

    return rows
  }

  get listContent (): JSX.Element | JSX.Element[] {
    const {
      data,
      emptyListText,
      loading
    } = this.props

    if (loading) {
      return (
        <Spinner
          type='three-bounce'
          size={15}
          position='center'
        />
      )
    }

    if (isEmpty(data) || every(data, ['hide', true])) {
      return (
        <Callout type='' shouldFocus={false}>
          {emptyListText}
        </Callout>
      )
    }

    return this.listRowsContent
  }

  showAllRowContent (visibleRowsCount: number) {
    if (this.state.paginationButton) {
      return `Show All (${visibleRowsCount})`
    }

    return 'Collapse'
  }

  get title (): JSX.Element | undefined  {
    const {
      title
    } = this.props

    if (title) {
      return (
        <div className='list-title'>
          {title}
        </div>
      )
    }
  }

  public render (): JSX.Element {
    const {
      showHoverBg
    } = this.props

    return (
      <div className={classNames(
        style.SmartList,
        'smart-list',
        { 'hover-bg': showHoverBg }
      )}>
        {this.title}
        {this.headerRow}

        <div className='smart-list-rows'>
          {this.listContent}
        </div>
      </div>
    )
  }
}
