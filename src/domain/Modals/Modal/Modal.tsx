import classNames from 'classnames'
import React from 'react'

import { Props, Variables } from '../../../common'
import { StyledReactModal } from './style'
import { Content } from './subcomponents/Content'
import { Footer } from './subcomponents/Footer'
import { Header } from './subcomponents/Header'

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
  size?: Props.Size.Medium | Props.Size.Large | Props.Size.XLarge | Props.Size.FullScreen
  /** The offset amount for the Z index of the modal */
  offsetZIndex?: number
  /** If true, will close when esc is pressed */
  shouldCloseOnEsc?: boolean
  /** If true, will close when overlay is clicked */
  shouldCloseOnOverlayClick?: boolean
  /** If true, will modify styles to work with subcomponents */
  useSubcomponents?: boolean
}

interface IModalProps extends IBaseModalProps {
  /** Show Modal */
  isOpen: boolean
}

class Modal extends React.PureComponent<IModalProps> {
  public static Header = Header
  public static Content = Content
  public static Footer = Footer

  public static defaultProps: Partial<IModalProps> = {
    size: Props.Size.Medium,
    offsetZIndex: 0,
    showCloseButton: true,
    useSubcomponents: false
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
      size,
      useSubcomponents
    } = this.props

    return classNames(
      'modal',
      `modal-size-${size}`,
      className,
      {
        'subcomponent-modal-style': useSubcomponents
      }
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
