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

export enum InfoTextStatus {
  initial = 0,
  hover,
  expanded,
  hoverAfterExpanded 
}

export interface IInfoText {
  primaryText: string
  clickedText: string
}

export class InfoText extends React.PureComponent<IInfoText, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      displayPrimaryText: false,
      isExpanded: false,
      isFocus: false,
      status: InfoTextStatus.initial
    }
  }

  onMouseEnter = () => this.setState({
    displayPrimaryText: true,
    isFocus: true,
    status: InfoTextStatus.hover
  })

  onMouseLeave = () => {
    const {
      isExpanded
    } = this.state

    if (isExpanded) {
      return
    }

    this.setState({
      displayPrimaryText: false,
      isFocus: false
    })
  }

  handleClick = () => {
    this.setState({
      displayPrimaryText: true,
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
      displayPrimaryText,
      isExpanded,
      isFocus,
      status
    } = this.state

    const {
      primaryText
    } = this.props

    return (
      <Wrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.handleClick}
      >
        { status=== InfoTextStatus.hover && <p> {primaryText} </p> }
        { this.icon }
      </Wrapper>
    )
  }
}
