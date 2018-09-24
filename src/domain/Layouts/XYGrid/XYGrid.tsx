import React from 'react'
import classNames from 'classnames'
import { Cell } from './subcomponents/Cell'

const style = require('./style.scss')

interface IXYGridProps {
  /** The horizontal alignment of the items within the grid */
  horizontalAlignment?: 'right' | 'center' | 'justify' | 'spaced'
  /** The vertical alignment of the items within the grid */
  verticalAlignment?: 'top' | 'middle' | 'bottom' | 'stretch'
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
      gutterPaddingY,
      horizontalAlignment,
      verticalAlignment
    } = this.props

    const gridClass = vertical ? style.ihrGridY : style.ihrGridX
    const horizontalAlignmentClass = horizontalAlignment && `align-${horizontalAlignment}`
    const verticalAlignmentClass = verticalAlignment && `align-${verticalAlignment}`

    return classNames(
      gridClass,
      {
        'grid-margin-x': gutterMarginX,
        'grid-margin-y': gutterMarginY,
        'grid-padding-x': gutterPaddingX,
        'grid-padding-y': gutterPaddingY
      },
      horizontalAlignmentClass,
      verticalAlignmentClass
    )
  }
}
