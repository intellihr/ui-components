import React from 'react'

import style from '../style.scss'

export interface IPageRegionProps {
  /** What to display in the layout. */
  children?: React.ReactNode
  /** If the component to display is the top or bottom component */
  regionType: 'header' | 'content' | 'top'
}

export class Region extends React.Component<IPageRegionProps> {
  public render (): JSX.Element | null {
    const { children, regionType } = this.props
    return (
      <div
        className={style[regionType]}
      >
        {children}
      </div>
    )
  }
}
