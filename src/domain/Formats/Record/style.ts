import styled, { css } from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const FieldLabelWrapper = styled.div`
  margin-bottom: 4px;
  .label-component {
    padding-right: .25rem;
  }
`

interface IRecordWrapperProps {
  margins?: Props.IMargins
}

const RecordWrapper = styled.div<IRecordWrapperProps>`
  ${(props) => styleForMargins(props.margins)}
`

export {
  FieldLabelWrapper,
  RecordWrapper
}
