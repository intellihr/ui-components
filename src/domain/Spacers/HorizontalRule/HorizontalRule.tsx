import { isNumber } from 'lodash'
import styled, { css, StyledFunction } from 'styled-components'

import { Variables } from '../../../common'
import { Anchor } from '../../Internals/Anchor'
import { IActionLinkProps } from '../../Links/ActionLink'

type SpaceVariable = Variables.Layout | Variables.Spacing | 'none'

interface IHorizontalRuleProps {
  topBottomSpacing?: SpaceVariable | { top: SpaceVariable, bottom: SpaceVariable }
  leftRightSpacing?: SpaceVariable | { left: SpaceVariable, right: SpaceVariable }
}

function getIntendedSpacing (propSpacing: any, subSpacing: string, defaultSpacing: number): number {
  if (isNumber(propSpacing)) {
    return propSpacing
  }

  if (propSpacing === 'none') {
    return 0
  }

  if (propSpacing) {
    if (isNumber(propSpacing)) {
      return propSpacing
    }

    if (propSpacing[subSpacing]) {
      return (propSpacing[subSpacing] === 'none') ? 0 : propSpacing[subSpacing]
    }
  }

  return defaultSpacing
}

const HorizontalRule = styled.hr`
  border-bottom: 1px solid ${Variables.Color.n400};

  ${(props: IHorizontalRuleProps) => {
    return css`
      margin-top: ${getIntendedSpacing(props.topBottomSpacing, 'top', Variables.Layout.lSmall)}px;
      margin-bottom: ${getIntendedSpacing(props.topBottomSpacing, 'bottom', Variables.Layout.lSmall)}px;
      margin-left: ${getIntendedSpacing(props.leftRightSpacing, 'left', 0)}px;
      margin-right: ${getIntendedSpacing(props.leftRightSpacing, 'right', 0)}px;
    `
  }}
`

HorizontalRule.displayName = 'HorizontalRule'

export {
  IHorizontalRuleProps,
  HorizontalRule
}
