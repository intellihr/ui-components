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
  <div>
    <ModalExample buttonText='Simple default modal implementation'>
      <h1>Hello this is a Modal</h1>
    </ModalExample>
  </div>
  
  <div>
    <ModalExample buttonText='No close button' showCloseButton={false}>
      I don't have a close button but you can still hide me by pressing escape, clicking outside, or handling your own close state.
    </ModalExample>
  </div>
  
  <div>
    <ModalExample buttonText='Lots of content' showCloseButton={false}>
      Modals will expand infinitely vertically to match their content, no matter how large it is
      
      <div style={{height: 2000, backgroundImage: 'linear-gradient(to bottom right, red, yellow)'}}>
        The following is a dummy space to fill out the modal
      </div>
    </ModalExample>
  </div>
  
  <div>
    <ModalExample buttonText='Size = large' size={Props.Size.Large}>
      Large modals are sized to the standard desktop browser width (1024px)
    </ModalExample>
  </div>
  
  <div>
    <ModalExample buttonText='Size = xLarge' size={Props.Size.XLarge}>
      Extra large modals are sized to the big desktop browser width (1440px)
    </ModalExample>
  </div>
</div>
```

#### Long pages
```jsx

<div style={{height: 2000}}>
  The following is a dummy space to fill out the page and ensure it doesn't scroll when a modal is open
</div>
```
