import classNames from 'classnames'
import isPlainObject from 'lodash/isPlainObject'
import isString from 'lodash/isString'
import kebabCase from 'lodash/kebabCase'
import reduce from 'lodash/reduce'
import React from 'react'

import style from '../style.scss'

type XYGridSizeNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type XYGridSize = XYGridSizeNumber | 'auto' | 'shrink'
type XYGridOffset = XYGridSizeNumber

interface ICellSize {
  min?: XYGridSize,
  tablet?: XYGridSize,
  desktop?: XYGridSize,
  bigDesktop?: XYGridSize
}

interface ICellOffset {
  min?: XYGridOffset,
  tablet?: XYGridOffset,
  desktop?: XYGridOffset,
  bigDesktop?: XYGridOffset
}

interface ICellProps {
  size?: ICellSize | 'auto' | 'shrink',
  offset?: ICellOffset
}

export class Cell extends React.PureComponent<ICellProps, never> {
  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <div className={this.classNames}>
        {children}
      </div>
    )
  }

  private get classNames (): string {
    return classNames(
      style.ihrCell,
      this.sizingClass,
      this.offsetClass
    )
  }

  private get sizingClass (): string | string[] | null {
    const {
      size
    } = this.props

    if (isString(size)) {
      return size
    }

    if (isPlainObject(size)) {
      return reduce(size, this.reduceSizeDict, [])
    }

    return null
  }

  private reduceSizeDict = (
    result: string[],
    sizeValue: XYGridSize | undefined,
    key: string
  ): string[] => {
    if (sizeValue) {
      result.push(`${kebabCase(key)}-${sizeValue}`)
    }

    return result
  }

  private get offsetClass (): string[] | null {
    const {
      offset
    } = this.props

    if (isPlainObject(offset)) {
      return reduce(offset, this.reduceOffsetDict, [])
    }

    return null
  }

  private reduceOffsetDict = (
    result: string[],
    offsetValue: XYGridOffset | undefined,
    key: string
  ): string[] => {
    if (offsetValue) {
      result.push(`${kebabCase(key)}-offset-${offsetValue}`)
    }

    return result
  }
}
