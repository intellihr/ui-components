import React from 'react'
import { take, filter, size, isEmpty, every, isNil } from 'lodash'
import { Children, cloneElement } from 'react'
import classNames from 'classnames'
import { Callout } from '../Callout'
import { Spinner } from '../Spinner'
import { ListClickableColumn } from './ListClickableColumn'
import { ListRow } from './ListRow'

const style = require('./style.scss')

export interface ISmartList {
  data: any,
  children: any,
  handleRowClick?: (rowObject?: object, event?: any) => void,
  emptyListText?: string,
  title?: string,
  loading?: boolean,
  cursor: 'auto' | 'pointer',
  limit: number,
  showHeaderRow?: boolean,
  showHoverBg: boolean,
  hideHeaderOnSmall: boolean,
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

  constructor (props: ISmartList) {
    super(props)

    this.cloneTableElement = this.cloneTableElement.bind(this)
    this.togglePagination = this.togglePagination.bind(this)
  }

  cloneTableElement (rowIndex = 0, isHeader = false): JSX.Element[] {
    const {
      children,
      data
    } = this.props

    let colIndex = 0

    return Children.map(
      children,
      (child: any) => {
        let props: any = {
          isHeader,
          rowIndex,
          data,
          colIndex: colIndex++,
          size: child.props.size,
          header: child.props.header
        }

        if (child.type === ListClickableColumn) {
          props.children = Children.map(
            child.props.children,
            (child: any) => cloneElement(child, {
              isHeader,
              rowIndex,
              data,
              colIndex: colIndex++,
              size: child.props.size,
              header: child.props.header
            })
          )
        }

        return cloneElement(child, props)
      }
    )
  }

  togglePagination (): void {
    this.setState({
      paginationButton: !this.state.paginationButton
    })
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

  get itemRows (): JSX.Element | JSX.Element[] {
    const {
      data,
      emptyListText,
      loading,
      handleRowClick,
      cursor,
      limit,
      rowWrapper
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

    let rows: JSX.Element[] = []

    let displayData = data

    for (let i = 0; i < displayData.length; i++) {
      const defaultProps = {
        cursor,
        data: displayData[i],
        hideRow: displayData[i].hide,
        index: i,
        handleClick: (e: any) =>
          handleRowClick && handleRowClick(displayData[i], e)
      }

      if (rowWrapper) {
        rows.push(rowWrapper({
          defaultProps,
          row: displayData[i],
          children: this.cloneTableElement(i)
        }))
      } else {
        rows.push(
          <ListRow
            {...defaultProps}
            key={displayData[i].id}
          >
            {this.cloneTableElement(i)}
          </ListRow>
        )
      }
    }

    if (this.canLimitData) {
      if (this.state.paginationButton) {
        rows = take(filter(rows, ['props.hideRow', false]), limit)
      }

      const visibleRowsCount = size(filter(data, item => !item.hide))

      if (visibleRowsCount > 0 && visibleRowsCount > limit) {
        rows.push(
          <div
            className={classNames(
              style,
              'smart-list',
              'cursor-pointer',
              'show-all-row'
            )}
            key='pagination-button'
            onClick={this.togglePagination}
          >
            {this.showAllRowContent(visibleRowsCount)}
          </div>
        )
      }
    }

    return rows
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
      <div className={
        classNames(
          style,
          'smart-list',
          { 'hover-bg': showHoverBg }
        )
      }>
        {this.title}

        {this.headerRow}
        <div className='smart-list-rows'>
          {this.itemRows}
        </div>
      </div>
    )
  }
}
