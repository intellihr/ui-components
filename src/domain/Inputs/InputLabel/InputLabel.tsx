import React from 'react'
import { StyledInputLabel } from './style'
import classNames from 'classnames'

interface IInputLabelProps {
  /** ID of input to attach to */
  htmlFor?: string
  /** If true, adds 'required' text to the label */
  isRequired?: boolean
}

class InputLabel extends React.PureComponent<IInputLabelProps> {
  public static defaultProps = {
    isRequired: false
  }

  public render (): JSX.Element {
    const {
      htmlFor,
      children,
      isRequired
    } = this.props

    return (
      <StyledInputLabel
        htmlFor={htmlFor}
        isRequired={isRequired!}
      >
        {children}
      </StyledInputLabel>
    )
  }
}

export {
  InputLabel,
  IInputLabelProps
}
