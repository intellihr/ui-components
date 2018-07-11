#### Modal

```jsx
const React = require('react');

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
        <button
          type='button'
          onClick={this.handleClick}
        >
          Click Me
        </button>
        <Modal
          isOpen={isOpen}
          handleClose={this.handleClick}
        >
          <h1>Hello this is a Modal</h1>
        </Modal>
      </React.Fragment>
    )
  }
}

<ModalExample />
```
