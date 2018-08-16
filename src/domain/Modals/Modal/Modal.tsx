import React from 'react'
import classNames from 'classnames'
import { StyledReactModal } from './style'
import { Props } from '../../../common/types'

enum ReactModalSize {
  medium = 'fixed-medium-up',
  large = 'fixed-large-up',
  xxlarge = 'fixed-xxlarge-up'
}

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
  size?: Props.Size.Medium | Props.Size.Large | Props.Size.XXLarge
  /** The deep level */
  modalZLevel?: number
  /** Component that will be inserted into the modal */
  children?: JSX.Element | string
}

interface IModalProps extends IBaseModalProps {
  /** Show Modal */
  isOpen: boolean
}

class Modal extends React.PureComponent<IModalProps> {
  public static defaultProps: Partial<IModalProps> = {
    size: Props.Size.Medium,
    modalZLevel: 0,
    showCloseButton: true
  }

  public static BASE_Z_INDEX = 1010

  get classNames (): string {
    const {
      className,
      size
    } = this.props

    return classNames(
      'modal',
      ReactModalSize[size!],
      className
    )
  }

  get closeButton (): JSX.Element | undefined {
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

  public render (): JSX.Element {
    const {
      children,
      isOpen,
      handleClose,
      modalZLevel
    } = this.props

    const overlayZIndex = Modal.BASE_Z_INDEX + 2 * modalZLevel!

    return (
      <StyledReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={handleClose}
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
}

export {
  IBaseModalProps,
  IModalProps,
  Modal
}
