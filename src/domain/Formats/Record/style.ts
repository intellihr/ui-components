import styled, { css } from 'styled-components'

import {Props, Variables} from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

enum RecordVariant {
  LabelAbove = 'labelAbove',
  LabelBelow = 'labelBelow',
  LabelRight = 'labelRight'
}

interface IFieldLabelWrapperProps {
  variant: RecordVariant
  hasTooltip: boolean
}

const FieldLabelWrapper = styled.div`
  .label-component {
    ${(props: IFieldLabelWrapperProps) => props.hasTooltip && css`padding-right: .25rem;`}
  }

  ${(props: IFieldLabelWrapperProps) => {
  switch (props.variant) {
    case RecordVariant.LabelRight:
      return css`margin-left: ${Variables.Spacing.sXSmall}px;`
    case RecordVariant.LabelAbove:
      return css`margin-bottom: ${Variables.Spacing.s2XSmall}px;`
    default:
      return css`margins: 0px;`
  }
}}
`

interface IRecordWrapperProps {
  margins?: Props.IMargins
  variant: RecordVariant
}

const RecordWrapper = styled.div<IRecordWrapperProps>`
  display: flex;
  ${(props: IRecordWrapperProps) => {
  switch (props.variant) {
    case RecordVariant.LabelRight:
      return css`flex-direction: row;`
    case RecordVariant.LabelBelow:
      return css`flex-direction: column;`
    case RecordVariant.LabelAbove:
    default:
      return css`flex-direction: column-reverse;`
  }
}}
  ${(props) => styleForMargins(props.margins)}
`

export {
  FieldLabelWrapper,
  RecordWrapper,
  RecordVariant
}
