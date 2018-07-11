import styled, { css } from 'styled-components'

export interface HeadingWrapperProps {
  inline?: boolean
}

export const HeadingWrapper = styled.h1`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: HeadingWrapperProps) => props.inline && css`
    display: inline-block;
  `}
`
