import React from 'react'
import { FontAwesomeIcon } from '../Icon'
import { BadgeWrapper } from './style'

interface IBadgeProps {
  /** Label of the badge  */
  label?: number | string
  /** Is the badge content loading */
  pending?: boolean
  /** Background color of the badge */
  backgroundColor?: string
  /** Font color of the badge */
  color?: string
  /** Is the badge small */
  isSmall?: boolean
  /** Is the badge large */
  isLarge?: boolean
}

class Badge extends React.PureComponent<IBadgeProps> {
  get label (): number | string | JSX.Element | undefined {
    const {
      pending,
      label
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

    return label
  }

  public render (): JSX.Element {
    const {
      backgroundColor,
      color,
      isSmall,
      isLarge
    } = this.props

    return (
      <BadgeWrapper
        backgroundColor={backgroundColor}
        color={color}
        isSmall={isSmall}
        isLarge={isLarge}
      >
        {this.label}
      </BadgeWrapper>
    )
  }
}

export {
  Badge
}
