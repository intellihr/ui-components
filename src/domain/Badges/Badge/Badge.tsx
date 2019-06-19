import React from 'react'

import { Props, Variables } from '../../../common'
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
  /** Margins around the component */
  margins?: Props.IMargins
}

const Badge: React.FC<IBadgeProps> = ({ size = 'small', hasBorder = true, pending, label, backgroundColor, color, margins }) => {
  return (
    <BadgeWrapper
      color={color}
      size={size}
      backgroundColor={backgroundColor}
      hasBorder={hasBorder}
      margins={margins}
    >
      {pending ? (
        <FontAwesomeIcon
          type='refresh'
          isSpinning
          className='refresh-icon'
        />
      ) : label}
    </BadgeWrapper>
  )
}

export {
  Badge
}
