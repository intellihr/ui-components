import styled, { css } from 'styled-components'
import { getColor } from '../Color'

export interface TextWrapperProps {
  color?: string
  isInline?: boolean
  isUpper?: boolean
  isHeavy?: boolean
  isSmall?: boolean
  isLarge?: boolean
  isTruncated?: boolean
  isSubtle?: boolean
}

export const TextWrapper = styled.span`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: TextWrapperProps) => props.color && css`
    color: ${props.color};
  `}

  ${(props: TextWrapperProps) => props.isHeavy && css`
    font-weight: 600;
  `}

  ${(props: TextWrapperProps) => props.isUpper && css`
    text-transform: uppercase;
  `}

  ${(props: TextWrapperProps) => props.isSmall && css`
    font-size: .8125rem;
  `}

  ${(props: TextWrapperProps) => props.isLarge && css`
    font-size: 1.125rem;
  `}

  ${(props: TextWrapperProps) => props.isTruncated && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${(props: TextWrapperProps) => !props.isInline && css`
    display: block;
  `}

  ${(props: TextWrapperProps) => props.isSubtle && css`
    color: ${getColor('main-text-light')};
  `}
`
