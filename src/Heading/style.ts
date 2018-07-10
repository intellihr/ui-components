import styled, { css } from 'styled-components'
import { getColor } from '../Color'

export interface HeadingWrapperProps {
  isInline?: boolean
  isSubtitle?: boolean
}

export const HeadingWrapper = styled.h1`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: HeadingWrapperProps) => !props.isInline && css`
    display: block;
  `}

  ${(props: HeadingWrapperProps) => props.isInline && css`
    display: inline-block;
  `}

  ${(props: HeadingWrapperProps) => props.isSubtitle && css`
    color: ${getColor('main-text-light')};
    font-size: 1.125rem;
  `}
`
