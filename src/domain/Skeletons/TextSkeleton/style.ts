import styled, { keyframes } from 'styled-components'
import { Props, Variables } from '../../../common'
import { styleForTypographyType } from '../../Typographies/services/textStyles'

export interface ITextSkeletonWrapperProps {
  width?: number,
  textType?: Props.TypographyType
}

const progress = keyframes`
  0% {
    background-position: -200px 0;
  }

  100% {
    background-position: calc(200px + 100%) 0;
  }
`

export const TextSkeletonWrapper = styled.span`
  animation: ${progress} 1.2s ease-in-out infinite;
  background-color: ${Variables.Color.n200};
  background-image: linear-gradient(90deg, ${Variables.Color.n200}, ${Variables.Color.n300}, ${Variables.Color.n200});
  background-repeat: no-repeat;
  background-size: 200px 100%;
  border: 1px solid ${Variables.Color.n200};
  border-radius: 4px;
  display: inline-flex;
  width: ${(props: ITextSkeletonWrapperProps) => props.width ? `${props.width}px` : '100%'};
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: ITextSkeletonWrapperProps) => styleForTypographyType(props.textType)}
`
