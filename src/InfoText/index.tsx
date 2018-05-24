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

const ArrowIcon = () => (
  <span>
    <i className='intelli-icon-arrow-down' />
  </span>
)

export enum InfoTextStatus {
  initial = 0,
  hover,
  clicked,
  hoverAfterClicked
}

export interface IInfoText {
  primaryText: string
  secondaryText: string
  handleClick: () => void
}

export interface InfoTextState {
  isHover: boolean
  status: InfoTextStatus
}

export class InfoText extends React.PureComponent<IInfoText, InfoTextState> {
  constructor (props: IInfoText) {
    super(props)
    this.state = {
      isHover: false,
      status: InfoTextStatus.initial
    }
  }

  // Hover in
  onMouseEnter = () => {
    const {
      status
    } = this.state

    if (status === InfoTextStatus.initial) {
      this.setState({
        status: InfoTextStatus.hover
      })
    }
  }

  // Hover out
  onMouseLeave = () => {
    const {
      status
    } = this.state

    if (status === InfoTextStatus.hover) {
      this.setState({
        status: InfoTextStatus.initial
      })
    }

    if (status === InfoTextStatus.hoverAfterClicked) {
      this.setState({
        status: InfoTextStatus.clicked
      })
    }
  }

  handleClick = () => {
    const {
      status
    } = this.state

    const {
      handleClick
    } = this.props

    handleClick()

    if (status === InfoTextStatus.initial) {
      return this.setState({
        status: InfoTextStatus.hover
      })
    }

    if (status === InfoTextStatus.clicked) {
      return this.setState({
        status: InfoTextStatus.initial
      })
    }

    return this.setState({
      status: InfoTextStatus.clicked
    })
  }

  get text (): string {
    const {
      primaryText,
      secondaryText
    } = this.props

    const {
      status
    } = this.state

    switch (status) {
      case InfoTextStatus.initial:
        return ''
      case InfoTextStatus.hover:
        return primaryText
      case InfoTextStatus.clicked:
        return secondaryText
      default:
        return ''
    }
  }

  get icon () {
    const {
      status
    } = this.state

    if (status === InfoTextStatus.clicked) {
      return <ArrowIcon />
    }

    return <InfoIcon />
  }

  render () {
    const {
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
        <p> {this.text } </p>
        { this.icon }
      </Wrapper>
    )
  }
}
