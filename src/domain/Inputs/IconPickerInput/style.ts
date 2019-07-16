import styled, { css } from 'styled-components'

import { Variables } from '../../../common'
import { Icon } from '../../Icons/Icon'

interface IStyledIconAreaProps {
  isChecked: boolean
}

const StyledIconArea = styled.label<IStyledIconAreaProps>`
  width: 40px;
  height: 40px;
  border: 1px solid ${Variables.Color.n400};
  border-radius: 4px;
  margin: 0 !important;
  transition: .25s ease-out, color .25s ease-out;

  ${(props: IStyledIconAreaProps) => {
    if (props.isChecked) {
      return css`
        background: ${Variables.Color.i100};
        border-color: ${Variables.Color.i600};

        &:hover {
          border-color: ${Variables.Color.i400};
        }
      `
    }

    return css`
         &:hover {
          background: ${Variables.Color.n200};
        }
      `
  }}
`

const StyledIcon = styled(Icon)`
  width: 100%;
  vertical-align: middle;
`

const StyledIconInput = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;

  &:focus + label {
    border-color: ${Variables.Color.i400};
    background: ${Variables.Color.n200};
  }
`

export {
  StyledIconArea,
  StyledIcon,
  StyledIconInput
}
