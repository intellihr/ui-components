import React from 'react'
import { FontAwesomeIcon } from '@Domain/Icons'
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
  /** Enforced badge guideline sizes */
  size?: 'small' | 'medium' | 'large'
}

class Badge extends React.PureComponent<IBadgeProps> {
  public static defaultProps: Partial<IBadgeProps> = {
    size: 'small'
  }

  get label (): number | string | JSX.Element | undefined {
    const {
      pending,
      label
    } = this.props

    if (pending) {
      return (
        <FontAwesomeIcon
          type='refresh'
          isSpinning={true}
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
      size
    } = this.props

    return (
      <BadgeWrapper
        color={color}
        size={size}
        backgroundColor={backgroundColor}
      >
        {this.label}
      </BadgeWrapper>
    )
  }
}

export {
  Badge
}
