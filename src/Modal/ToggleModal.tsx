import React from 'react'
import { Button, IButtonProps } from '../Button'
import { Modal, IModalProps } from './Modal'

interface IToggleArguments {
  toggle: () => void
}

interface IToggleModalProps {
  /** A trigger component which opens or closes the modal */
  trigger: (toggleArguments: IToggleArguments) => JSX.Element

  /** The children inside the Modal component */
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
      trigger
    } = this.props

    return (
      <React.Fragment>
        {trigger({toggle: this.toggle})}
        <Modal
          isOpen={isOpen}
          handleClose={this.toggle}
          {...this.props}
        />
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
