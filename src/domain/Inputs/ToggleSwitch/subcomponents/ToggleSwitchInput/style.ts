import styled, {css} from 'styled-components'

import { Variables } from '../../../../../common'

interface IToggler {
  checked: boolean
}

interface ISwitch {
  checked: boolean
  disabled?: boolean
}

interface IFocus {
  focused: boolean
}

const StyledToggleInput = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
  margin: 0;
`

const StyledSwitch = styled.label<ISwitch>`
  box-sizing: content-box;
  transition: background-color 0.15s ease-in;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  display: inline-block;

  ${(props: ISwitch) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;
        background-color: ${Variables.Color.n400};
      `
    }

    if (props.checked) {
      return css`
        &:hover {
          background-color: ${Variables.Color.n600};
        }

        cursor: pointer;
        background-color: ${Variables.Color.i400};
      `
    }

    return css`
      &:hover {
        background-color: ${Variables.Color.n600};
      }

      cursor: pointer;
      background-color: ${Variables.Color.n500};
    `
  }}
`

const StyledToggler = styled.div<IToggler>`
  width: 14px;
  height: 14px;
  margin: 3px;
  border-radius: 14px;
  background: white;
  position: relative;
  transition: left 0.15s ease-in;

  ${(props: IToggler) => {
    if (props.checked) {
      return css`
          left: 20px;
        `
    }

    return css`
      left: 0;
    `
  }}
`

const StyledFocus = styled.div<IFocus>`
  display: inline-block;
  padding: 2px;
  border-radius: 17px;
  width: 46px;
  height: 26px;
  border: 1px solid transparent;

  ${(props: IFocus) => {
    if (props.focused) {
      return css`
        border-color: ${Variables.Color.i400};
      `
    }
  }}
`

export {
  StyledFocus,
  StyledSwitch,
  StyledToggler,
  StyledToggleInput
}
