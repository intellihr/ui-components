import React from 'react'

import { Props  } from '../../../common'
import { StyledHR } from './style'

interface IHorizontalRuleProps {
  /** The margins around the component */
  margins?: Props.IMargins
  componentContext?: string
}

const HorizontalRule: React.SFC<IHorizontalRuleProps> = (props) => {
  return (
    <StyledHR
      margins={props.margins}
      data-component-type={Props.ComponentType.HorizontalRule}
      data-component-context={props.componentContext}
    />
  )
}

export {
  IHorizontalRuleProps,
  HorizontalRule
}
