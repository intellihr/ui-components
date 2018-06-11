import React from 'react'
import { Defaults, DefaultsConsumer } from '../DefaultsContext'
import { ThemeProvider } from 'styled-components'

export interface IGridProps {
  /** Breakpoints to use for the grid layout */
  breakpoints?: string[]
}

export class Grid extends React.PureComponent<IGridProps> {
  public static defaultProps: IGridProps = {
    breakpoints: ['1em', '2em', '3em', '4em']
  }

  private gridComponent (defaultValues: Defaults) {
    const {
      children,
      breakpoints
    } = this.props

    return (
      <ThemeProvider
        theme={{
          breakpoints: defaultValues.breakpoints || breakpoints
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
