```jsx
const React = require('react')
const { Props } = require('../../../')

class ModalExample extends React.PureComponent {
  constructor () {
    this.state = {
      isOpen: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {
      isOpen
    } = this.state

    this.setState({
      isOpen: !isOpen
    })
  }

  render () {
    const {
      isOpen
    } = this.state
    const {
      showCloseButton,
      children,
      buttonText,
      size
    } = this.props

    return (
      <React.Fragment>
        <Button
          onClick={this.handleClick}
        >
          {buttonText}
        </Button>
        <Modal
          isOpen={isOpen}
          handleClose={this.handleClick}
          size={size || Props.Size.Medium}
          showCloseButton={showCloseButton}
        >
          {children}
        </Modal>
      </React.Fragment>
    )
  }
}

ModalExample.defaultProps = { showCloseButton: true };

<div>
  <ModalExample buttonText='Simple default modal implementation'>
    <h1>Hello this is a Modal</h1>
  </ModalExample>
  
  <ModalExample buttonText='No close button' showCloseButton={false}>
    I don't have a close button but you can still hide me by pressing escape, clicking outside, or handling your own close state.
  </ModalExample>
  
  <ModalExample buttonText='Size = large' size={Props.Size.Large}>
    Large modals are sized to the standard desktop browser width (1024px)
  </ModalExample>
  
  <ModalExample buttonText='Size = xLarge' size={Props.Size.XLarge}>
    Extra large modals are sized to the big desktop browser width (1440px)
  </ModalExample>
</div>
```
