import React from 'react'
import classNames from 'classnames'
import { Cell } from './subcomponents/Cell'

const style = require('./style.scss')

interface IXYGridProps {
  /** Adds gutters between cells as margin in the x direction */
  gutterMarginX?: boolean
  /** Adds gutters between cells as margin in the y direction */
  gutterMarginY?: boolean
  /** Adds gutters between cells as padding in the x direction */
  gutterPaddingX?: boolean
  /** Adds gutters between cells as padding in the y direction */
  gutterPaddingY?: boolean
  /** Makes the grid a vertical grid */
  vertical?: boolean
}

export class XYGrid extends React.PureComponent<IXYGridProps, never> {
  public static Cell = Cell

  public static defaultProps = {
    vertical: false,
    gutterMarginX: false,
    gutterMarginY: false,
    gutterPaddingX: false,
    gutterPaddingY: false
  }

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

  private get classNames(): string {
    const {
      vertical,
      gutterMarginX,
      gutterMarginY,
      gutterPaddingX,
      gutterPaddingY
    } = this.props

    const gridClass = vertical ? style.ihrGridY : style.ihrGridX

    return classNames(
      gridClass,
      {
        'grid-margin-x': gutterMarginX,
        'grid-margin-y': gutterMarginY,
        'grid-padding-x': gutterPaddingX,
        'grid-padding-y': gutterPaddingY
      }
    )
  }
}
