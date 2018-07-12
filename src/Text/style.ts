import styled, { css } from 'styled-components'
import { getColor } from '../Color'

export interface TextWrapperProps {
  color?: string | 'subtle'
  inline?: boolean
  upper?: boolean
  weight?: 'normal' | 'heavy'
  size?: 'small' | 'medium' |'large'
  truncated?: boolean
}

export const TextWrapper = styled.span`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: TextWrapperProps) => {
    switch (props.color) {
      case 'subtle':
        return `
          color: ${getColor('main-text-light')};
        `
      default:
        return `
          color: ${props.color};
        `
    }
  }}

  ${(props: TextWrapperProps) => {
    switch (props.weight) {
      case 'normal':
        return `
          font-weight: 400;
        `
      case 'heavy':
        return `
          font-weight: 600;
        `
    }
  }}

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
