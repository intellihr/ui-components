import React from 'react'
import classNames from 'classnames'
import { Cell } from './subcomponents/Cell'

const style = require('./style.scss')

interface IXYGridProps {
  /** Adds gutters between cells as margins */
  gutterMargins?: boolean
  /** Adds gutters between cells as padding */
  gutterPadding?: boolean
  /** Makes the grid a vertical grid */
  vertical?: boolean
}

export class XYGrid extends React.PureComponent<IXYGridProps, never> {
  public static Cell = Cell

  public static defaultProps = {
    vertical: false,
    gutterMargins: false,
    gutterPadding: false
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
      gutterMargins,
      gutterPadding
    } = this.props

    const gridClass = vertical ? style.ihrGridY : style.ihrGridX
    const marginClass = vertical ? 'grid-margin-y' : 'grid-margin-x'
    const paddingClass = vertical ? 'grid-padding-y' : 'grid-padding-x'

    return classNames(
      gridClass,
      gutterMargins && marginClass,
      gutterPadding && paddingClass
    )
  }
}
