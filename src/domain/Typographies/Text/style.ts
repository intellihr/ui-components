import styled, { css } from 'styled-components'
import { getColor } from '../../../common/legacy'

const { n600 } = require('../../../common/sass/variables.scss')

export interface ITextWrapperProps {
  color?: string | 'subtle'
  isInline?: boolean
  isUpper?: boolean
  weight?: 'normal' | 'heavy'
  size?: 'xsmall' | 'small' | 'medium' |'large'
  isTruncated?: boolean
}

export const TextWrapper = styled.span`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: ITextWrapperProps) => {
    switch (props.color) {
      case 'subtle':
        return `
          color: ${n600};
        `
      default:
        return `
          color: ${props.color};
        `
    }
  }}

  ${(props: ITextWrapperProps) => {
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

  ${(props: ITextWrapperProps) => props.isUpper && css`
    text-transform: uppercase;
  `}

  ${(props: ITextWrapperProps) => props.isTruncated && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}

  ${(props: ITextWrapperProps) => !props.isInline && css`
    display: block;
  `}

  ${(props: ITextWrapperProps) => {
    switch (props.size) {
      case 'xsmall':
        return `
          font-size: .8125rem;
        `
      case 'small':
        return `
          font-size: .875rem;
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
