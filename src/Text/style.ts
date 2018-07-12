import styled, { css } from 'styled-components'
import { getColor } from '../Color'

export interface TextWrapperProps {
  color?: string
  inline?: boolean
  upper?: boolean
  heavy?: boolean
  size?: 'small' | 'medium' |'large'
  truncated?: boolean
  subtle?: boolean
}

export const TextWrapper = styled.span`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: TextWrapperProps) => props.color && css`
    color: ${props.color};
  `}

  ${(props: TextWrapperProps) => props.heavy && css`
    font-weight: 600;
  `}

  ${(props: TextWrapperProps) => props.upper && css`
    text-transform: uppercase;
  `}

  ${(props: TextWrapperProps) => props.truncated && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${(props: TextWrapperProps) => !props.inline && css`
    display: block;
  `}

  ${(props: TextWrapperProps) => props.subtle && css`
    color: ${getColor('main-text-light')};
  `}

  ${(props: TextWrapperProps) => {
    switch (props.size) {
      case 'small':
        return `
          font-size: .8125rem;
        `
      case 'medium':
      return `
        font-size: 1rem;
      `
      case 'large':
        return `
          font-size: 1.125rem;
        `
    }
  }}
`
