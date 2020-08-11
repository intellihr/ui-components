import React from 'react'

import { Props, Variables } from '../../../common'
import { Button } from '../../Buttons/Button'
import { Inline } from '../../Layouts/Inline'
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
  /** If true, will close when esc is pressed */
  shouldCloseOnEsc?: boolean
  /** If true, will close when overlay is clicked */
  shouldCloseOnOverlayClick?: boolean
}

enum DialogVariant {
  Default = 'default',
  Destructive = 'destructive'
}

const getPrimaryButtonVariant = (variant: DialogVariant) => {
  switch (variant) {
    case DialogVariant.Destructive:
      return 'alert'
    case DialogVariant.Default:
    default:
      return 'primary'
  }
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
  componentContext,
  shouldCloseOnEsc = true,
  shouldCloseOnOverlayClick = true
}) => {

  return (
    <StyledReactModal
      data-component-type={Props.ComponentType.Dialog}
      data-component-context={componentContext}
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
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
      <Inline align={Inline.Align.Right}>
        {onSecondaryActionClick && secondaryActionLabel && (
          <Button
            onClick={onSecondaryActionClick}
          >
            {secondaryActionLabel}
          </Button>
        )}
        <Button
          onClick={onPrimaryActionClick}
          type={getPrimaryButtonVariant(variant)}
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
