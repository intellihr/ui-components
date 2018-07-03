#### Grid system organisation

***This is an attempt at using a new grid system for front-end components.
It should only be used within the `ui-components` repository until it has been 
proven that it fulfills all the requirements.***


React Context API is used through `styled-components`'s Theme Provider 
(https://www.styled-components.com/docs/advanced) to allow the consumer to 
pass the breakpoints and other parameters used in the grid system to the 
ui-component code base.

In order for a top level component to be aware of those parameters, it has to 
be wrapped in the `withGrid` HOC.

```
  class Test extends React.PureComponent {
    render () {
      return (
        <div>
          I want to know about those breakpoints!
        </div>
      )
    }
  }
  
  const BreakpointAwareTest = withGrid(Test)
```

The npm package used for the grid system is *react-styled-flexboxgrid* 
(https://github.com/LoicMahieu/react-styled-flexboxgrid).
This package is build on top of *react-flexbox-grid* (https://github.com/roylee0704/react-flexbox-grid)
and because it is built using `styled-components` it gives us the ability 
to pass some parameters through the ThemeProvider.

The two main components of the grid system are `Row` and `Col`.

A `Row` is a wrapper that will handle the alignment of all the `Col` children
that are passed to it.

`Col` components will take a set of properties (`xs`, `sm`, `md`, `lg`) that 
will define what portion of the row (out of 12 by default) the column should 
take for each breakpoint.

```jsx
  class TestWithGrid {
    render () {
      return (
        <BreakpointAwareTest>
          <Row>
            <Col xs={6} md={3}>
              Hello, world!
            </Col>
            
            <Col xs={6} md={3}>
              World, hello!
            </Col>
          </Row>
        </BreakpointAwareTest>
      )
    }
  }
```

In this example, a row has two columns that will take half of the width of the 
row on `xs` screens, and 1/4 of the width on `md` screens
