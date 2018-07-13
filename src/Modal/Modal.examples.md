#### Simple Modal Implementation

```jsx
const React = require('react')
const { Size } = require('../')

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

    return (
      <React.Fragment>
        <div
          onClick={this.handleClick}
        >
          Click Me
        </div>
        <Modal
          isOpen={isOpen}
          handleClose={this.handleClick}
          size={Size.Medium}
        >
          <h1>Hello this is a Modal</h1>
        </Modal>
      </React.Fragment>
    )
  }
}

<ModalExample />
```
