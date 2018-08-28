import React from 'react'
import { isEmpty } from 'lodash'
import { FontAwesomeIcon } from '../../Icons'
import {
  Wrapper,
  TitleBox,
  HelpContentBox,
  IconBox,
  ArrowIcon,
  IconText,
  Title
} from './style'

const InfoIcon = () => (
  <IconBox>
    <FontAwesomeIcon
      type='info-circle'
      size='large'
    />
  </IconBox>
)

export enum InfoTextStatus {
  initial = 0,
  hover,
  clicked,
  hoverAfterClicked
}

export interface IReportHeader {
  renderTitle: JSX.Element
  primaryText: string
  secondaryText: string
  renderHelperContent?: JSX.Element
  onShown?: () => void
  showHelper?: boolean
}

export interface IReportHeaderState {
  status: InfoTextStatus,
  isExpanded: boolean
}

export class ReportHeader extends React.PureComponent<IReportHeader, IReportHeaderState> {
  public static defaultProps: Partial<IReportHeader> = {
    showHelper: true
  }

  constructor (props: IReportHeader) {
    super(props)
    this.state = {
      status: InfoTextStatus.initial,
      isExpanded: false
    }
  }

  // Hover in
  public onMouseEnter = () => {
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
  public onMouseLeave = () => {
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

  public handleClick = () => {
    const {
      status,
      isExpanded
    } = this.state

    const {
      onShown
    } = this.props

    let newStatus

    if (status === InfoTextStatus.clicked) {
      newStatus = InfoTextStatus.initial
    } else {
      newStatus = InfoTextStatus.clicked
    }

    if (onShown && !isExpanded) {
      onShown()
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
      status
    } = this.state

    if (status === InfoTextStatus.clicked) {
      return <ArrowIcon className='intelli-icon-arrow-down' />
    }

    return <InfoIcon />
  }

  get helpContent (): JSX.Element | null {
    const {
      isExpanded
    } = this.state

    const {
      showHelper,
      renderHelperContent
    } = this.props

    if (showHelper && isExpanded) {
      return (
        <HelpContentBox>
          {renderHelperContent}
        </HelpContentBox>
      )
    }

    return null
  }

  get wrapper () {
    const {
      showHelper,
      renderHelperContent
    } = this.props

    if (showHelper && !isEmpty(renderHelperContent)) {
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

  get title () {
    const {
      renderTitle
    } = this.props
    return (
      <Title>
        { renderTitle }
      </Title>
    )
  }

  public render () {
    return (
      <div>
        <TitleBox>
          {this.title}
          {this.wrapper}
        </TitleBox>
        {this.helpContent}
      </div>
    )
  }
}
