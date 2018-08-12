import styled, { css } from 'styled-components'

export interface IFieldLabelWrapperProps {
  labelRightComponent?: JSX.Element
}

export const FieldLabelWrapper = styled.div`
  ${(props: IFieldLabelWrapperProps) => props.labelRightComponent && css`
    .label-component {
      padding-right: .25rem;
    }
  `}
`
