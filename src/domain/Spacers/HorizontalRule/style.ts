import { isNumber } from 'lodash'
import styled, { css } from 'styled-components'

import { Variables } from '../../../common'

type HRSpacing = Variables.Layout | Variables.Spacing | 'none'

interface IStyledHRProps {
  topBottomSpacing: HRSpacing | { top: HRSpacing, bottom: HRSpacing }
  leftRightSpacing: HRSpacing | { left: HRSpacing, right: HRSpacing }
}

function getIntendedSpacing (propSpacing: any, subSpacing: string): number {
  if (isNumber(propSpacing)) {
    return propSpacing
  }

  if (propSpacing === 'none') {
    return 0
  }

  if (isNumber(propSpacing)) {
    return propSpacing
  }

  if (propSpacing[subSpacing]) {
    return (propSpacing[subSpacing] === 'none') ? 0 : propSpacing[subSpacing]
  }

  return 0
}

const StyledHR = styled.hr<IStyledHRProps>`
  border-bottom: 1px solid ${Variables.Color.n400};

  ${(props: IStyledHRProps) => {
  return css`
      margin-top: ${getIntendedSpacing(props.topBottomSpacing, 'top')}px;
      margin-bottom: ${getIntendedSpacing(props.topBottomSpacing, 'bottom')}px;
      margin-left: ${getIntendedSpacing(props.leftRightSpacing, 'left')}px;
      margin-right: ${getIntendedSpacing(props.leftRightSpacing, 'right')}px;
    `
}}
`

export {
  StyledHR,
  HRSpacing
}
