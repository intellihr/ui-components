import React from 'react'
import classNames from 'classnames'
import { Props, Variables } from '../../../common'
import { StyledReactModal } from './style'

interface IBaseModalProps {
  /**
   * Show close button at the top right if handleClose is set.
   * Callback to call on close; receives event
   */
  handleClose?: (event: (MouseEvent | KeyboardEvent | React.MouseEvent<HTMLButtonElement>)) => void
  /** Shows the close button if true and handleClose is set */
  showCloseButton?: boolean
  /** Extra classes to apply */
  className?: string
  /** Modal Size */
  size?: Props.Size.Medium | Props.Size.Large | Props.Size.XLarge
  /** The offset amount for the Z index of the modal */
  offsetZIndex?: number
  /** Component that will be inserted into the modal */
  children?: JSX.Element | string
  /** If true, will close when esc is pressed */
  shouldCloseOnEsc?: boolean
  /** If true, will close when overlay is clicked */
  shouldCloseOnOverlayClick?: boolean
}

interface IModalProps extends IBaseModalProps {
  /** Show Modal */
  isOpen: boolean
}

class Modal extends React.PureComponent<IModalProps> {
  public static defaultProps: Partial<IModalProps> = {
    size: Props.Size.Medium,
    offsetZIndex: 0,
    showCloseButton: true
  }

  public render (): JSX.Element {
    const {
      children,
      isOpen,
      handleClose,
      offsetZIndex,
      shouldCloseOnEsc,
      shouldCloseOnOverlayClick
    } = this.props

    const modalOffsetBase = 2
    const overlayZIndex = Variables.ZIndex.zIndexModal + modalOffsetBase * offsetZIndex!

    return (
      <StyledReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={handleClose}
        shouldCloseOnEsc={shouldCloseOnEsc}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        overlayClassName='modal-overlay'
        className={this.classNames}
        style={{
          overlay: {
            zIndex: overlayZIndex
          },
          content: {
            zIndex: overlayZIndex + 1
          }
        }}
      >
        {children}
        {this.closeButton}
      </StyledReactModal>
    )
  }

  private get classNames (): string {
    const {
      className,
      size
    } = this.props

    return classNames(
      'modal',
      `modal-size-${size}`,
      className
    )
  }

  private get closeButton (): JSX.Element | undefined {
    const {
      handleClose,
      showCloseButton
    } = this.props

    if (handleClose && showCloseButton) {
      return (
        // We use button here on purpose because we don't want any intellihr style
        <button
          className='modal-close-button'
          type='button'
          onClick={handleClose}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      )
    }
  }
}

export {
  IBaseModalProps,
  IModalProps,
  Modal
}
