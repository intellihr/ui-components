import React from 'react'

import { Props, Variables } from '../../../common'
import { Button } from '../../Buttons/Button'
import { Inline } from '../../Layouts/Inline'
import { InlineAlign } from '../../Layouts/Inline/Inline'
import { Margin } from '../../Spacers/Margin'
import { Text } from '../../Typographies'
import { StyledReactModal } from './style'

interface IDialogProps {
  isOpen: boolean
  handleClose: (event: (MouseEvent | KeyboardEvent | React.MouseEvent<HTMLButtonElement>)) => void
  title: string
  onPrimaryActionClick: (event: (React.MouseEvent<HTMLElement, MouseEvent>)) => void
  primaryActionLabel: string
  onSecondaryActionClick?: (event: (React.MouseEvent<HTMLElement, MouseEvent>)) => void
  secondaryActionLabel?: string
  variant: DialogVariant
  componentContext: string
}

enum DialogVariant {
  Positive = 'positive',
  Negative = 'negative'
}

const Dialog: React.FC<IDialogProps> = ({
  isOpen,
  handleClose,
  title,
  children,
  onPrimaryActionClick,
  primaryActionLabel,
  onSecondaryActionClick,
  secondaryActionLabel,
  variant,
  componentContext
}) => {

  return (
    <StyledReactModal
      data-component-type={Props.ComponentType.Dialog}
      data-component-context={componentContext}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      overlayClassName='dialog-overlay'
      className='dialog'
      style={{
        overlay: {
          zIndex: Variables.ZIndex.zIndexDialog
        },
        content: {
          zIndex: Variables.ZIndex.zIndexDialog + 1
        }
      }}
    >
      <Text
        isInline={false}
        margins={{bottom: Variables.Spacing.sXSmall }}
        type={Props.TypographyType.Heading}
      >
        {title}
      </Text>
      <Margin margins={{bottom: Variables.Spacing.sMedium }}>
        {children}
      </Margin>
      <Inline align={InlineAlign.Right}>
        {onSecondaryActionClick && secondaryActionLabel && (
          <Button
            onClick={onSecondaryActionClick}
          >
            {secondaryActionLabel}
          </Button>
        )}
        <Button
          onClick={onPrimaryActionClick}
          type={variant === DialogVariant.Positive ? 'primary' : 'alert'}
        >
          {primaryActionLabel}
        </Button>
      </Inline>
    </StyledReactModal>
  )
}

export {
  IDialogProps,
  Dialog,
  DialogVariant
}
