import React from 'react'
import { Grid } from '@Domain/Grids'

const sassGlobals = require('@Common/sass/globals.scss')

interface IDefaults {
  /** Breakpoints used for the grid layout */
  breakpoints: {
    xsmall: number
    small: number
    medium: number
    large: number
  }

  /** Anchor component used for clickable links */
  AnchorComponent?: React.ComponentType<any>
}

interface IDefaultsProviders {
  value?: Partial<IDefaults>
  children?: React.ReactNode
}

const defaults: IDefaults = {
  breakpoints: {
    xsmall: parseInt(sassGlobals['breakpoint-xsmall']),
    small: parseInt(sassGlobals['breakpoint-small']),
    medium: parseInt(sassGlobals['breakpoint-medium']),
    large: parseInt(sassGlobals['breakpoint-large'])
  }
}

const DefaultsContext: React.Context<IDefaults> = React.createContext(defaults)

const DefaultsConsumer = DefaultsContext.Consumer

class DefaultsProvider extends React.PureComponent<IDefaultsProviders> {
  public render (): JSX.Element {
    const {
      value,
      children
    } = this.props

    return (
      <DefaultsContext.Provider
        value={{
          ...defaults,
          ...value
        }}
      >
        <Grid defaults={defaults}>{children}</Grid>
      </DefaultsContext.Provider>
    )
  }
}

export {
  IDefaults,
  IDefaultsProviders,
  DefaultsConsumer,
  DefaultsProvider,
  defaults
}
