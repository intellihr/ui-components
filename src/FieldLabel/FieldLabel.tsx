import React from 'react'
import { StyledFieldLabel } from './style'
import classNames from 'classnames'

export interface FieldLabelProps {
  /** ID of input to attach to */
  htmlFor?: string
  /** If true, adds invalid label class to component */
  isInvalid?: boolean
}

export class FieldLabel extends React.PureComponent<FieldLabelProps> {
  public render (): JSX.Element {
    const {
      htmlFor,
      children,
      isInvalid
    } = this.props

    return (
      <StyledFieldLabel
        htmlFor={htmlFor}
        className={classNames(
          { 'is-invalid-label': isInvalid }
        )}
      >
        {children}
      </StyledFieldLabel>
    )
  }
}
