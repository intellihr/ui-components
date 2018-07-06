import styled, { css } from 'styled-components'

interface NumberedBadgeLabelProps {
  backgroundColor?: string
  color?: string
}

const BadgeWrapper = styled.span`
  .refresh-icon {
    background-color: $main-background;
    border-radius: 20px;
    color: $primary-base;
    font-size: 20px;
    height: 20px;
    margin: 0;
    position: relative;
    top: 2px;
  }
`

const NumberedBadgeLabelWrapper = styled.span`
  ${(props: NumberedBadgeLabelProps) => props.backgroundColor && css`
    background-color: ${props.backgroundColor};  
  `}
  
  ${(props: NumberedBadgeLabelProps) => props.color && css`
    color: ${props.color};  
  `}
  
  border: 1px solid $neutral-base;
  border-radius: 50%;
  color: $neutral-text;
  display: inline-block;
  font-weight: 600;
  min-width: 1.4em;
  text-align: center;
`

export {
  BadgeWrapper,
  NumberedBadgeLabelWrapper
}
