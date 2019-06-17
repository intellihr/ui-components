import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForSkeletons } from '../style'

export interface IBlockSkeletonWrapperProps {
  width?: string,
  height?: string
  margins?: Props.IMargins
}

export const BlockSkeletonWrapper = styled.span`
  border-radius: 4px;
  line-height: 1rem;
  width: ${(props: IBlockSkeletonWrapperProps) => props.width ? `${props.width}` : '100%'};
  height: ${(props: IBlockSkeletonWrapperProps) => props.height ? `${props.height}` : '1rem'};
  ${(props: IBlockSkeletonWrapperProps) => styleForSkeletons(props.margins)};
`
