import React, { Fragment } from 'react'
import classNames from 'classnames'
import { Icon } from '../Icon'
import {
  Wrapper,
  TitleBox,
  HelpContentBox,
  IconBox,
  ArrowIcon,
  IconText
} from './style'

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
  constructor(props: IReportHeader) {
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

  get text(): string {
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

  get icon() {

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
      return <ArrowIcon className='intelli-icon-arrow-down' />
    }

    return <InfoIcon />
  }

  get helpContent(): JSX.Element | null {
    const {
      isExpanded
    } = this.state

    const {
      renderHelperContent
    } = this.props

    if (isExpanded) {
      return (
        <HelpContentBox>
          {renderHelperContent()}
        </HelpContentBox>
      )
    }

    return null
  }

  get wrapper() {
    const {
      displayInfo
    } = this.props

    if (displayInfo) {
      return (<Wrapper
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.handleClick}
      >
        <IconText>
          {this.text}
        </IconText>
        {this.icon}
      </Wrapper>)
    }

    return null
  }

  render() {
    const {
      status,
    } = this.state

    const {
      primaryText,
      title,
      renderHelperContent,
      displayInfo
    } = this.props

    return (
      <Fragment>
        <TitleBox>
          <h3> {title} </h3>
          {this.wrapper}
        </TitleBox>
        {this.helpContent}
      </Fragment>
    )
  }
}
