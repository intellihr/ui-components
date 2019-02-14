import { isString, map } from 'lodash'
import React from 'react'

import { ITooltipPopoverProps, TooltipPopover } from '../../../Popovers/TooltipPopover'
import { ErrorMessage, FieldWrapper, StyledDescription, StyledInputLabel, StyledTooltipPopover } from './style'

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
  /** Message of tooltip to show */
  tooltipMessage?: JSX.Element | string
  /** any extra tooltip props */
  tooltipProps?: ITooltipPopoverProps

}

class Field extends React.PureComponent<IVerticalFormFieldProps, never> {
  private get errorMessages (): JSX.Element | Array<JSX.Element | null> | null {
    const {
      errorMessages
    } = this.props

    if (errorMessages) {
      if (isString(errorMessages)) {
        return this.errorMessageWrapper(errorMessages)
      }

      return map(errorMessages, (errorMessage: string, idx: number) => {
        return this.errorMessageWrapper(errorMessage, idx)
      })
    }

    return null
  }

  private get tooltip (): JSX.Element | null {
    const {
      tooltipMessage,
      tooltipProps
    } = this.props

    if (tooltipMessage) {
      return (
        <StyledTooltipPopover>
          <TooltipPopover {...tooltipProps}>
            {tooltipMessage}
          </TooltipPopover>
        </StyledTooltipPopover>
      )
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
          {this.tooltip}
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

  private errorMessageWrapper = (message: string, idx?: number) => {
    if (!message) {
      return null
    }

    return (
      <ErrorMessage
        key={idx || undefined}
      >
        {message}
      </ErrorMessage>
    )
  }
}

export {
  Field
}
