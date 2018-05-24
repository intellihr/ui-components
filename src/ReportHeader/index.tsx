import React from 'react'
import classNames from 'classnames'
import { Icon } from '../Icon'
import { Wrapper, TitleBox, HelpContentBox, IconBox } from './style'

const InfoIcon = () => (
  <IconBox>
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
  </IconBox>
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

export interface IReportHeader {
  title: string
  primaryText: string
  secondaryText: string
  renderHelperContent: () => JSX.Element
  displayInfo: boolean
}

export interface ReportHeaderState {
  status: InfoTextStatus,
  isExpanded: boolean
}

export class ReportHeader extends React.PureComponent<IReportHeader, ReportHeaderState> {
  constructor (props: IReportHeader) {
    super(props)
    this.state = {
      status: InfoTextStatus.initial,
      isExpanded: false
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

    let newStatus

    if (status === InfoTextStatus.initial) {
      newStatus = InfoTextStatus.hover
    } else if (status === InfoTextStatus.clicked) {
      newStatus = InfoTextStatus.initial
    } else {
      newStatus = InfoTextStatus.clicked
    }

    this.setState({
      status: newStatus,
      isExpanded: !this.state.isExpanded
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
      displayInfo
    } = this.props

    if (!displayInfo) {
      return null
    }

    const {
      status
    } = this.state

    if (status === InfoTextStatus.clicked) {
      return <ArrowIcon />
    }

    return <InfoIcon />
  }

  render() {
    const {
      status,
      isExpanded
    } = this.state

    const {
      primaryText,
      title,
      renderHelperContent,
      displayInfo
    } = this.props

    return (
      <div>
        <TitleBox>
          <h3> {title} </h3>
          {displayInfo && (<Wrapper
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.handleClick}
          >
            <p> {this.text} </p>
            {this.icon}
          </Wrapper>)}
        </TitleBox>
        {isExpanded && (<HelpContentBox>
          {renderHelperContent()}
        </HelpContentBox>)}
      </div>
    )
  }
}
