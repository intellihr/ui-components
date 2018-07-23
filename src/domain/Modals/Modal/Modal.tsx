import React from 'react'
import classNames from 'classnames'
import { StyledReactModal } from './style'
import { Props } from '../../../common/types'
import Size = Props.Size

enum ReactModalSize {
  medium = 'fixed-medium-up',
  large = 'fixed-large-up',
  xxlarge = 'fixed-xxlarge-up'
}

interface IModalProps {
  /** Show Modal */
  isOpen: boolean

  /**
   * Show close button at the top right if handleClose is set.
   * Callback to call on close; receives event
   * */
  handleClose?: (event: (MouseEvent | KeyboardEvent | React.MouseEvent<HTMLButtonElement>)) => void

  /** Extra classes to apply */
  className?: string

  /** Component that will be inserted into the modal */
  children?: JSX.Element

  /** Modal Size */
  size?: Size.Medium | Size.Large | Size.XXLarge

  /** The deep level */
  modalZLevel?: number
}

class Modal extends React.PureComponent<IModalProps> {
  public static defaultProps: Partial<IModalProps> = {
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
      'modal',
      ReactModalSize[size!],
      className
    )
  }

  get closeButton (): JSX.Element | undefined {
    const {
      handleClose
    } = this.props

    if (handleClose) {
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

  render (): JSX.Element {
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
  IModalProps,
  Modal
}
