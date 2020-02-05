import styled, { css } from 'styled-components'

const StyledCollapsibleChildren = styled.div<{height: number, transitionState: string}>`
  margin: 0;
  transition: height 250ms linear 0s;
  overflow: hidden;

  ${({transitionState, height}) => {
    if (transitionState === 'entering') {
      return css`
        height: ${height}px;
      `
    }

  if (transitionState === 'entered') {
    return css`
        height: auto;
      `
  }

  if (transitionState === 'exiting') {
    return css`
        height: ${height}px;
      `
  }

  return css`
      height: 0;
    `
  }}
`

const StyledCollapsibleController = styled.div`
  position: relative;
`

const StyledCollapsibleIcon = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
`

export {
  StyledCollapsibleController,
  StyledCollapsibleIcon,
  StyledCollapsibleChildren
}
