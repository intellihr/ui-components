import styled, {css, keyframes} from 'styled-components'
import {Utils, Variables} from '../../../../common'
import { TableCheckboxInputValue } from './TableCheckboxInput'
import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'
import {StyledRow} from '../style'

interface IStyledTableCheckboxInputProps {
  labelValue: TableCheckboxInputValue
}

interface IStyledTableCheckboxLabelProps {
  value: TableCheckboxInputValue
}

const StyledTableCheckboxInput = styled.input`
  line-height: 16px;
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;

  margin: 0;

  &::-ms-clear {
    display: none;
  }

  &:disabled + label {
    color: ${Variables.Color.n500};
    cursor: not-allowed;

    &::before {
      background-color: ${Variables.Color.n150};
      border-color: ${Variables.Color.n300};
    }
  }

  &:focus + label {
    &.checkbox {
      border-color: ${Variables.Color.i400};

      &::before {
        background-color: ${Variables.Color.n300};
        border-color: ${Variables.Color.i400};
      }
    }

    &.checkbox-button {
      background-color: ${Variables.Color.n200};
      border-color: ${Variables.Color.i400};
    }
  }

  &:checked + label {
    border-color: ${Variables.Color.i600};

    &::before {
      border-color: ${Variables.Color.i400};
    }

    &:hover {
      border-color: ${Variables.Color.i400};

      &::before {
        border-color: ${Variables.Color.i400};
      }
    }
  }

  ${(props: IStyledTableCheckboxInputProps) => props.labelValue === TableCheckboxInputValue.PartialTrue && css`
    & + label {
      border-color: ${Variables.Color.i600};

      &::before {
        border-color: ${Variables.Color.i400};
      }

      &:hover {
        border-color: ${Variables.Color.i400};

        &::before {
          border-color: ${Variables.Color.i400};
        }
      }
    }
  `}
`

const StyledTableCheckboxLabel = styled.label`
  width:20px;
  height:20px;
  position: relative;
  cursor: pointer;
  transition: .25s ease-out;

  &::before {
      background-color: ${Variables.Color.n150};
      border: 2px solid  ${Variables.Color.n400};
      border-radius: ${Variables.Style.borderRadius}px;
      content: '';
      display: inline-block;
      height: 20px;
      left: 0;
      position: absolute;
      top: 4px;
      transition: .25s ease-out, color .25s ease-out;
      vertical-align: top;
      width: 20px;
    }

  &:hover {

    &::before {
      background-color: ${Variables.Color.n300};
      border-color: ${Variables.Color.n600};
    }
  }

  ${(props: IStyledTableCheckboxLabelProps) => props.value === TableCheckboxInputValue.False && css`
    ${StyledRow}:hover & {
      &::before {
        background-color: ${Variables.Color.n300};
        border-color: ${Variables.Color.n600};
        transition: .25s ease-out, color .25s ease-out;
      }
    }
`}
`

const styledFontAwesomeIconAnimation = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`

const StyledFontAwesomeIcon =  styled(FontAwesomeIcon)`
  ${Utils.mediaQueryBetweenSizes({ maxPx: Variables.Breakpoint.breakpointTablet })} {
    display: none;
  }

  position: absolute;
  width: 21px;
  height: 20px;
  top: 9px;
  animation-name: ${styledFontAwesomeIconAnimation};
  animation-duration: .25s;
`

export {
  StyledTableCheckboxInput,
  StyledTableCheckboxLabel,
  StyledFontAwesomeIcon
}