import React from 'react'
import { map, isString } from 'lodash'
import { ErrorMessage, FieldWrapper } from './style'
import { InputLabel } from '../../../Inputs/InputLabel'

interface IVerticalFormFieldProps {
  /** HTML name of the input */
  inputName?: string
  /** If true, marks the input as a required field */
  isRequired?: boolean
  /** Text displayed above the input */
  label?: string
  /** Array of error messages to display */
  errorMessages?: string | string[]
}

class Field extends React.PureComponent<IVerticalFormFieldProps, never> {

  private get errorMessages (): JSX.Element | JSX.Element[] | null {
    const {
      errorMessages
    } = this.props

    if (errorMessages) {
      if (isString(errorMessages)) {
        return this.errorMessageWrapper(errorMessages)
      }

      return map(errorMessages, (error: string) => {
        return this.errorMessageWrapper(error)
      })
    }

    return null
  }

  private get inputLabel (): JSX.Element {
    const {
      inputName,
      isRequired,
      label
    } = this.props

    return (
      <InputLabel
        htmlFor={inputName}
        isRequired={isRequired}
      >
        {label}
      </InputLabel>
    )
  }
  
  public static defaultProps = {
    isRequired: false
  }

  public render (): JSX.Element {
    const {
      children
    } = this.props

    return (
      <FieldWrapper>
        {this.inputLabel}
        {children}
        {this.errorMessages}
      </FieldWrapper>
    )
  }

  private errorMessageWrapper = (message: string) => {
    return (
      <ErrorMessage>
        {message}
      </ErrorMessage>
    )
  }
}

export {
  Field
}
