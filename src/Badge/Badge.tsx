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
  /** Enforced badge guideline sizes */
  tSize?: 's' | 'm' | 'l'
}

class Badge extends React.PureComponent<IBadgeProps> {
  public static defaultProps: Partial<IBadgeProps> = {
    tSize: 's'
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
      tSize
    } = this.props

    return (
      <BadgeWrapper
        color={color}
        tSize={tSize}
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
