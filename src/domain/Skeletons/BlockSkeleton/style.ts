import styled from 'styled-components'

import { SkeletonWrapper } from '../style'

export interface IBlockSkeletonWrapperProps {
  width?: string,
  height?: string
}

export const BlockSkeletonWrapper = styled(SkeletonWrapper)`
  border-radius: 4px;
  line-height: 1rem;
  width: ${(props: IBlockSkeletonWrapperProps) => props.width ? `${props.width}` : '100%'};
  height: ${(props: IBlockSkeletonWrapperProps) => props.height ? `${props.height}` : '1rem'};
`
