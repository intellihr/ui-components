import React from 'react'
import './style.scss'

export class Navigation extends React.PureComponent <{}> {
  public render () {
    const {children} = this.props

    return (
      <div id='offCanvasLeft' className='off-canvas-wrapper off-canvas position-left reveal-for-large' data-off-canvas data-auto-focus={false}>
        {children}
      </div>
    )
  }
}
