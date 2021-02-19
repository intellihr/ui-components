import isString from 'lodash/isString'
import map from 'lodash/map'
import React from 'react'
import { IHintWrapperProps } from 'src/domain/Formats/HintWrapper'

import { Props } from '../../../../common'
import { useTranslateFunction } from '../../../Defaults/Defaults/Defaults'
import { HintWrapper } from '../../../Formats'
import { ITooltipPopoverProps, TooltipPopover } from '../../../Popovers/TooltipPopover'
import { Text } from '../../../Typographies/Text'
import {
  ErrorMessage,
  FieldWrapper,
  StyledDescription,
  StyledInputLabel,
  StyledLabelWrapper,
  StyledTooltipPopover
} from './style'

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
  /** Popover hint after the label */
  hintOptions?: {
    hint: JSX.Element | string
    label: string
    hintWrapperProps?: Partial<IHintWrapperProps>
  }
  margins?: Props.IMargins
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

  private get hint (): JSX.Element | null {
    const {
      hintOptions
    } = this.props

    if (hintOptions) {
      return (
        <HintWrapper
          hint={hintOptions.hint}
          hintType={Props.HintWrapperType.Popover}
          {...hintOptions.hintWrapperProps}
        >
          <Text type={Props.TypographyType.XSmall}>
            {hintOptions.label}
          </Text>
        </HintWrapper>
      )
    }

    return null
  }

  private get label (): JSX.Element | null {
    const {
      label,
      inputName,
      isRequired,
      tooltipProps,
      tooltipMessage
    } = this.props

    if (label) {
      return (
        <StyledLabelWrapper>
          <InputLabel
            inputName={inputName}
            isRequired={isRequired}
            label={label}
            tooltipProps={tooltipProps}
            tooltipMessage={tooltipMessage}
          />
          {this.hint}
        </StyledLabelWrapper>
      )
    }

    return null
  }

  public static defaultProps = {
    isRequired: false,
    showBottomMargin: true
  }

  public render (): JSX.Element {
    const {
      children,
      actionMessage,
      margins
    } = this.props

    return (
      <FieldWrapper margins={margins} >
        {this.label}
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

const InputLabel: React.FC<any> = ({
  inputName,
  isRequired,
  label,
  tooltipMessage,
  tooltipProps
}) => {
  const t = useTranslateFunction()

  if (label) {
    return (
      <StyledInputLabel
        htmlFor={inputName}
        isRequired={isRequired!}
        i18nRequiredSuffix={t('requiredSuffix')}
      >
        {label}
        {tooltipMessage && (
          <StyledTooltipPopover>
            <TooltipPopover {...tooltipProps}>
              {tooltipMessage}
            </TooltipPopover>
          </StyledTooltipPopover>
        )}
      </StyledInputLabel>
    )
  }

  return null
}

export {
  Field
}
