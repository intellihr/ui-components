import styled, { css } from 'styled-components'

export interface TextWrapperProps {
  color?: string
  isInline?: boolean
  isHeading?: boolean
  isUpper?: boolean
  isHeavy?: boolean
  isSmall?: boolean
  isTruncated?: boolean
}

export const TextWrapper = styled.span`
  ${(props: TextWrapperProps) => props.color && css`
    color: ${props.color};
  `}  
  
  ${(props: TextWrapperProps) => props.isHeavy && css`
    font-weight: 600;
  `}
  
  ${(props: TextWrapperProps) => props.isHeading && css`
    display: block;
    font-weight: 600;
    font-family: 'Open Sans', Arial, sans-serif;
  `}
  
  ${(props: TextWrapperProps) => props.isUpper && css`
    text-transform: uppercase;
  `}
  
  ${(props: TextWrapperProps) => props.isSmall && css`
    font-size: .8125rem;
  `}
  
  ${(props: TextWrapperProps) => props.isTruncated && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  
  ${(props: TextWrapperProps) => !props.isInline && css`
    display: block;
  `}
`
