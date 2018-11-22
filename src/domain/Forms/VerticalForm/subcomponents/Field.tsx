import React from 'react'
import { map, isString } from 'lodash'
import { ErrorMessage, FieldWrapper, StyledInputLabel, StyledDescription } from './style'

interface IVerticalFormFieldProps {
  /** HTML name of the input */
  inputName?: string
  /** If true, marks the input as a required field */
  isRequired?: boolean
  /** Text displayed above the input */
  label?: string
  /** Descriptive text displayed above the input */
  description?: string
  /** action text link displayed below the input */
  actionMessage?: JSX.Element
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

  private get inputLabel (): JSX.Element | null {
    const {
      inputName,
      isRequired,
      label
    } = this.props

    if (label) {
      return (
        <StyledInputLabel
          htmlFor={inputName}
          isRequired={isRequired!}
        >
          {label}
        </StyledInputLabel>
      )
    }

    return null
  }

  private get description (): JSX.Element | null {
    const {
      description
    } = this.props

    if (description) {
      return (
        <StyledDescription>
          {description}
        </StyledDescription>
      )
    }

    return null
  }

  public static defaultProps = {
    isRequired: false
  }

  public render (): JSX.Element {
    const {
      children,
      actionMessage
    } = this.props

    return (
      <FieldWrapper>
        {this.inputLabel}
        {this.description}
        {children}
        {this.errorMessages}
        {actionMessage}
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
