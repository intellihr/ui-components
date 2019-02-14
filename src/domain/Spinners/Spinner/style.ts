import styled from 'styled-components'

export const SpinnerWrapper = styled.div`
  &.page {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.left {
    float: left
  }

  &.center {
    display: flex;
    justify-content: center;
  }

  &.right {
    float: right;
  }

  &.inline {
    display: inline-block;
    vertical-align: middle;
  }
`
