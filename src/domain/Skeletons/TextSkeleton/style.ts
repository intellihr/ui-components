import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForTypographyType } from '../../Typographies/services/textStyles'
import { styleForSkeletons } from '../style'

export interface ITextSkeletonWrapperProps {
  width?: string,
  textType?: Props.TypographyType
  margins?: Props.IMargins
}

export const TextSkeletonWrapper = styled.span`
  border-radius: 4px;
  width: ${(props: ITextSkeletonWrapperProps) => props.width ? `${props.width}` : null};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  ${(props: ITextSkeletonWrapperProps) => styleForTypographyType(props.textType)};
  ${(props: ITextSkeletonWrapperProps) => styleForSkeletons(props.margins)};
`
