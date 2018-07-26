import React from 'react'
import { Modal, IBaseModalProps } from '../Modal'

interface IToggleArguments {
  toggle: () => void
}

interface IToggleModalProps extends IBaseModalProps {
  /** A trigger component which opens or closes the modal */
  trigger: (toggleArguments: IToggleArguments) => JSX.Element
}

interface IToggleModalState {
  isOpen: boolean
}

class ToggleModal extends React.PureComponent<IToggleModalProps, IToggleModalState> {
  public state = {
    isOpen: false
  }

  public render (): JSX.Element {
    const {
      isOpen
    } = this.state

    const {
      trigger,
      ...props
    } = this.props

    return (
      <React.Fragment>
        {trigger({toggle: this.toggle})}
        <Modal
          isOpen={isOpen}
          handleClose={this.toggle}
          {...props}
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
