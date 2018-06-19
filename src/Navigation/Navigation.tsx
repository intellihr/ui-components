import React from 'react'
import { Menu } from '../Menu'
import './style.scss'

export class Navigation extends React.PureComponent <{}> {
  public render() {
    const {children} = this.props

    return (
      <div id="offCanvasLeft" className="off-canvas-wrapper off-canvas position-left reveal-for-large" data-off-canvas data-auto-focus={false}>

        <Menu
          id='menu'
          isAccordion
          className='ihr-nav vertical menu'
        >
          {children}
        </Menu>
      </div>
    )
  }
} 
