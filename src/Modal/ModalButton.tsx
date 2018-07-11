import React from 'react'
import { Button, IButtonProps } from '../Button'
import { Modal, IModalProps } from './Modal'

interface IModalButtonProps {
  buttonContent: JSX.Element
  buttonProps?: IButtonProps
  modalProps?: IModalProps
  buttonComponent?: React.ComponentType<IButtonProps>
  children: JSX.Element
}

interface IModalButtonState {
  isOpen: boolean
}

class ModalButton extends React.PureComponent<IModalButtonProps, IModalButtonState> {
  public static defaultProps: Partial<IModalButtonProps> = {
    buttonComponent: Button,
    buttonProps: {
      type: 'primary'
    }
  }

  public state = {
    isOpen: false
  }

  public get buttonProps () {
    const {
      buttonProps
    } = this.props

    return {
      ...ModalButton.defaultProps.buttonProps,
      ...buttonProps
    }
  }

  public render (): JSX.Element {
    const {
      isOpen
    } = this.state

    const {
      buttonProps,
      buttonComponent,
      buttonContent,
      modalProps
    } = this.props

    const ButtonComponent = buttonComponent!

    return (
      <React.Fragment>
        <ButtonComponent
          onClick={this.handleClick}
          {...this.buttonProps}
        >
          {buttonContent}
        </ButtonComponent>
        <Modal
          isOpen={isOpen}
          handleClose={this.handleClick}
          {...modalProps}
        >
          {this.props.children}
        </Modal>
      </React.Fragment>
    )
  }

  private handleClick = () => {
    const {
      isOpen
    } = this.state

    this.setState({ isOpen: !isOpen })
  }
}

export {
  IModalButtonProps,
  IModalButtonState,
  ModalButton
}
