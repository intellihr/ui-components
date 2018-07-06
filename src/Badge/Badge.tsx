import React from 'react'
import { FontAwesomeIcon } from '../Icon'
import { BadgeWrapper, NumberedBadgeLabelWrapper } from './style'

interface IBadgeProps {
  /** Label of the badge  */
  label: number | string
  /** Is the badge content loading */
  pending?: boolean
  /** Background color of the badge */
  backgroundColor?: string
  /** Font color of the badge */
  color?: string
}

class Badge extends React.PureComponent<IBadgeProps> {
  get label (): JSX.Element {
    const {
      pending,
      label,
      backgroundColor,
      color
    } = this.props

    if (pending) {
      return (
        <FontAwesomeIcon
          type='refresh'
          isSpinning
          className='refresh-icon'
        />
      )
    }

    return (
      <NumberedBadgeLabelWrapper
        backgroundColor={backgroundColor}
        color={color}
      >
        {label}
      </NumberedBadgeLabelWrapper>
    )
  }

  public render (): JSX.Element {
    return (
      <BadgeWrapper>
        {this.label}
      </BadgeWrapper>
    )
  }
}

export {
  Badge
}
