import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Defaults, DefaultsConsumer } from '../DefaultsContext'

export interface IGridProps {
  /** Breakpoints to use for the grid layout */
  breakpoints?: {
    xs: number,
    sm: number,
    md: number,
    lg: number
  }
}

export class Grid extends React.PureComponent<IGridProps> {
  public static defaultProps: IGridProps = {
    breakpoints: {
      xs: 0,
      sm: 39.9375,
      md: 63.9375,
      lg: 74.9375
    }
  }

  private gridComponent (defaultValues: Defaults) {
    const {
      children,
      breakpoints
    } = this.props

    return (
      <ThemeProvider
        theme={{
          flexboxgrid: {
            breakpoints: defaultValues.breakpoints || breakpoints
          }
        }}
      >
        {children}
      </ThemeProvider>
    )
  }

  public render (): JSX.Element {
    return (
      <DefaultsConsumer>
        {defaultValues => this.gridComponent(defaultValues)}
      </DefaultsConsumer>
    )
  }
}
