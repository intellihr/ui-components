import React from 'react'
import classNames from 'classnames'
import { StyledReactModal } from './style'

enum Size {
  Medium = 'fixed-medium-up',
  Large = 'fixed-medium-up',
  Xxlarge = 'fixed-xxlarge-up'
}

interface IModalProps {
  /** Show Modal */
  isOpen: boolean

  /** Callback to call on close; receives event */
  handleClose(event: (MouseEvent | KeyboardEvent | React.MouseEvent<HTMLButtonElement>)): void

  /** Extra classes to apply */
  className?: string

  /** Component that will be inserted into the modal */
  children?: JSX.Element

  /** Modal Size */
  size?: Size.Medium | Size.Large | Size.Xxlarge

  /** Show Close Button */
  showCloseButton?: boolean

  /** The deep level */
  modalZLevel?: number
}

class Modal extends React.PureComponent<IModalProps> {
  public static defaultProps: Partial<IModalProps> = {
    showCloseButton: true,
    size: Size.Medium,
    modalZLevel: 0
  }

  static BASE_Z_INDEX = 1010

  get classNames (): string {
    const {
      className,
      size
    } = this.props

    return classNames(
      size,
      className
    )
  }

  get closeButton (): JSX.Element | undefined {
    const {
      handleClose,
      showCloseButton
    } = this.props

    if (showCloseButton) {
      return (
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

  render () {
    const {
      children,
      className,
      isOpen,
      handleClose,
      size,
      modalZLevel
    } = this.props

    const overlayZIndex = Modal.BASE_Z_INDEX + 2 * modalZLevel!

    return (
      <StyledReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={handleClose}
        overlayClassName='modal-overlay'
        className={classNames('modal', size || null, className)}
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
}

export {
  Size,
  IModalProps,
  Modal
}
