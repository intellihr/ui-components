import styled, { css } from 'styled-components'

export interface IHeadingWrapperProps {
  inline?: boolean
}

export const HeadingWrapper = styled.h1`
  font-family: 'Open Sans', Arial, sans-serif;

  ${(props: IHeadingWrapperProps) => props.inline && css`
    display: inline-block;
  `}
`
