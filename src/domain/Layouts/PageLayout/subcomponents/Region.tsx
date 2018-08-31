import React from 'react'

export interface IPageRegionProps {
  /** What to display in the layout. */
  children?: React.ReactNode
  /** If the component to display is the top or bottom component */
  regionType: 'header' | 'content' | 'top-left' | 'top-right'
}

export class Region extends React.Component<IPageRegionProps> {
  public render (): JSX.Element | null {
    const { children, regionType } = this.props
    return (
      <div
        className={`page-${regionType}-outer`}
      >
        <div className={`page-${regionType}-inner`}>
          {children}
        </div>
      </div>
    )
  }
}
