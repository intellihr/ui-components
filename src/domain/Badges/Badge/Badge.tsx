import React from 'react'

import { Variables } from '../../../common'
import { FontAwesomeIcon } from '../../Icons'
import { BadgeWrapper } from './style'

interface IBadgeProps {
  /** Label of the badge  */
  label?: number | string
  /** Is the badge content loading */
  pending?: boolean
  /** Background color of the badge */
  backgroundColor?: Variables.Color
  /** Font color of the badge */
  color?: Variables.Color
  /** Enforced badge guideline sizes */
  size?: 'small' | 'medium' | 'large'
  /** Show border */
  hasBorder?: boolean
}

class Badge extends React.PureComponent<IBadgeProps> {
  public static defaultProps: Partial<IBadgeProps> = {
    size: 'small',
    hasBorder: true
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
      size,
      hasBorder
    } = this.props

    return (
      <BadgeWrapper
        color={color}
        size={size}
        backgroundColor={backgroundColor}
        hasBorder={hasBorder}
      >
        {this.label}
      </BadgeWrapper>
    )
  }
}

export {
  Badge
}
