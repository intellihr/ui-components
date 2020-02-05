import styled, { css } from 'styled-components'

const CollapsibleChildrenWrapper = styled.div<{height: number, transitionState: string}>`
  margin: 0;
  transition: height 250ms linear 0s;
  overflow: hidden;

  a, a:focus  {
    padding-left: 2.8rem;
  }

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

const CollapsibleControllerWrapper = styled.div<{isOpen?: boolean}>`
  position: relative;

  ${({isOpen}) => {
    if (isOpen) {
      return css`
        a, a:focus  {
          font-weight: 600;
        }
      `
     }
  }}
`

const CollapsibleIconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
`

export {
  CollapsibleControllerWrapper,
  CollapsibleIconWrapper,
  CollapsibleChildrenWrapper
}
