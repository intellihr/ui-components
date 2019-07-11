import styled, { css } from 'styled-components'

import { Props } from '../../../common'

interface ICheckboxSetWrapperProps {
  orientation: Props.Orientation
}

export const CheckboxSetWrapper = styled.div`
  display: inline-flex;
  max-width: 100%;

  ${(props: ICheckboxSetWrapperProps) => {
  if (props.orientation === Props.Orientation.Vertical) {
    return css`
        flex-direction: column
      `
  }
  return css`
      flex-direction: row;
      flex-wrap: wrap;

    `
}}
`
