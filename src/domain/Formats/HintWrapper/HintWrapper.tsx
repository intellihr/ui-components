import React from 'react'
import { Props } from '../../../common'
import { StyledHintWrapper } from './style'
import { Tooltip } from '../../Tooltips/Tooltip'

export interface IHintWrapperProps {
  /** The hint text to display on hover */
  hint: string
  /** The data-component-context */
  componentContext?: string
}

export class HintWrapper extends React.PureComponent<IHintWrapperProps> {
  public render (): JSX.Element {
    const {
      componentContext,
      children,
      hint
    } = this.props

    return (
      <StyledHintWrapper
        data-component-type={Props.ComponentType.HintWrapper}
        data-component-context={componentContext}
      >
        <Tooltip
          message={hint}
        >
          {children}
        </Tooltip>
      </StyledHintWrapper>
    )
  }
}
