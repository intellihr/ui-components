import styled, { css } from 'styled-components'

export interface TextWrapperProps {
  color?: string
}

export const TextWrapper = styled.span`
  ${(props: TextWrapperProps) => props.color && css`
    color: ${props.color};
  `}

  &.heavy {
    font-weight: 600;
  }

  &.heading {
    display: block;
    font-weight: 600;
    font-family: 'Open Sans', Arial, sans-serif;
  }

  &.upper {
    text-transform: uppercase;
  }

  &.small {
    font-size: .8125rem;
  }
  
  &.truncated {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  &.block {
    display: block;
  }
`
