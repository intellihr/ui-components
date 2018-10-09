`Popover` can be used with some state management as a generic box
anchored to some other component on the page.

To do fancy management of this component, see the `DropdownMenu` component
implementation.

```jsx
class PopoverExample extends React.PureComponent {
  constructor () {
    this.state = {
      isOpen: false
    }

    this.anchorRef = React.createRef()
  }

  render () {
    const {
      isOpen
    } = this.state

    return (
      <React.Fragment>
        <Button
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          buttonOverrides={{
            'aria-haspopup': true,
            'aria-expanded': isOpen,
            'aria-owns': 'popover-example'
          }}
        >
          Toggle Menu
        </Button>
        <div
          style={{
            border: '1px black solid',
            float: 'right',
            padding: 10,
            width: 200
          }}
          ref={this.anchorRef}
        >
          The popover will be anchored to this box
        </div>
        <Popover
          id='popover-example'
          isOpen={this.state.isOpen}
          parentRef={this.anchorRef}
        >
          <div
            style={{
              border: '1px black dashed',
              padding: 10,
              width: 400
            }}
          >
            This is the content of the popover.
            By default the popover will be anchored as best
            it can to the parent element.
          </div>
        </Popover>
      </React.Fragment>
    )
  }
}

<PopoverExample />

```
