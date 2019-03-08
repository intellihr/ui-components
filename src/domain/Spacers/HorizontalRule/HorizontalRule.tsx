import React from 'react'

import { Props, Variables } from '../../../common'
import { HRSpacing, StyledHR } from './style'

interface IHorizontalRuleProps {
  topBottomSpacing?: HRSpacing | { top: HRSpacing, bottom: HRSpacing }
  leftRightSpacing?: HRSpacing | { left: HRSpacing, right: HRSpacing }
  componentContext?: string
}

const HorizontalRule: React.SFC<IHorizontalRuleProps> = (props) => {
  return (
    <StyledHR
      topBottomSpacing={props.topBottomSpacing || Variables.Layout.lSmall}
      leftRightSpacing={props.leftRightSpacing || 'none'}
      data-component-type={Props.ComponentType.HorizontalRule}
      data-component-context={props.componentContext}
    />
  )
}

export {
  IHorizontalRuleProps,
  HorizontalRule
}
