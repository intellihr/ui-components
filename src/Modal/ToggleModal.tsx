import React from 'react'
import { Button, IButtonProps } from '../Button'
import { Modal, IModalProps } from './Modal'

interface IToggleArguments {
  toggle: () => void
}

interface IToggleModalProps {
  toggleComponent: (toggleArguments: IToggleArguments) => JSX.Element
  children: JSX.Element
}

interface IToggleModalState {
  isOpen: boolean
}

class ToggleModal extends React.PureComponent<IToggleModalProps & IModalProps, IToggleModalState> {
  public state = {
    isOpen: false
  }

  public render (): JSX.Element {
    const {
      isOpen
    } = this.state

    const {
      toggleComponent
    } = this.props

    return (
      <React.Fragment>
        {toggleComponent({toggle: this.toggle})}
        <Modal
          isOpen={isOpen}
          handleClose={this.toggle}
          {...this.props}
        >
          {this.props.children}
        </Modal>
      </React.Fragment>
    )
  }

  private toggle = () => {
    const {
      isOpen
    } = this.state

    this.setState({ isOpen: !isOpen })
  }
}

export {
  IToggleArguments,
  IToggleModalProps,
  IToggleModalState,
  ToggleModal
}
