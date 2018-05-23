import React from 'react'
import classNames from 'classnames'
import { Icon } from '../Icon'
import { Wrapper } from './style'

const InfoIcon = () => (
  <span className='fa-stack'>
    <Icon
      type='info'
      size={1}
      isStacked
    />
    <Icon
      type='circle-thin'
      size={2}
      isStacked
    />
  </span>
)

const ArrowIcon = () => <i className="intelli-icon-arrow-down"/>

const headerStates = {
  initial: 0,
  hover: 1,
  expanded: 2,
  expandedAndHover: 3
}

export interface IInfoText {
  hoverText: string
  clickedText: string
}

export class InfoText extends React.PureComponent<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      displayHelperText: false,
      isExpanded: false,
      isFocus: false,
      status: headerStates.initial
    }
  }

  onMouseEnter = () => this.setState({
    displayHelperText: true,
    isFocus: true
  })

  onMouseLeave = () => {
    const {
      isExpanded
    } = this.state

    if (isExpanded) {
      return
    }

    this.setState({
      displayHelperText: false,
      isFocus: false
    })
  }

  handleClick = () => {
    this.setState({
      displayHelperText: true,
      isExpanded: !this.state.isExpanded
    })
  }

  get icon() {
    const { isExpanded } = this.state

    if (isExpanded) {
      return <ArrowIcon/>
    }

    return <InfoIcon />
  }

  render() {
    const {
      displayHelperText,
      isExpanded,
      isFocus
    } = this.state

    return (
      <Wrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.handleClick}
      >
        { displayHelperText && <p> How to Read this chart </p> }
        { this.icon }
      </Wrapper>
    )
  }
}
