import React from 'react'
import { Props } from '../../../common'
import { HintTextWrapper } from './style'
import { Tooltip } from '../../Tooltips/Tooltip'

export interface IHintTextProps {
  /** The hint text to display on hover */
  hint: string
  /** The data-component-context */
  componentContext?: string
}

export class HintText extends React.PureComponent<IHintTextProps> {
  public render (): JSX.Element {
    const {
      componentContext,
      children,
      hint
    } = this.props

    return (
      <HintTextWrapper
        data-component-type={Props.ComponentType.HintText}
        data-component-context={componentContext}
      >
        <Tooltip
          message={hint}
        >
          {children}
        </Tooltip>
      </HintTextWrapper>
    )
  }
}
