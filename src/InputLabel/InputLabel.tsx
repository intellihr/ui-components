import React from 'react'
import { StyledInputLabel } from './style'
import classNames from 'classnames'

export interface InputLabelProps {
  /** ID of input to attach to */
  htmlFor?: string
  /** If true, adds invalid label class to component */
  isInvalid?: boolean
}

export class InputLabel extends React.PureComponent<InputLabelProps> {
  public render (): JSX.Element {
    const {
      htmlFor,
      children,
      isInvalid
    } = this.props

    return (
      <StyledInputLabel
        htmlFor={htmlFor}
        className={classNames(
          { 'is-invalid-label': isInvalid }
        )}
      >
        {children}
      </StyledInputLabel>
    )
  }
}
