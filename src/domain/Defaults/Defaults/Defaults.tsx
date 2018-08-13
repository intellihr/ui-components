import React from 'react'
import { GridProvider } from '@Domain/Grids'

const sassGlobals = require('@Common/sass/variables.scss')

interface IDefaults {
  /** Breakpoints used for the grid layout */
  breakpoints: {
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
    small: parseInt(sassGlobals['breakpoint-min']) || 0,
    medium: parseInt(sassGlobals['breakpoint-tablet']) || 1,
    large: parseInt(sassGlobals['breakpoint-desktop']) || 2
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
        <GridProvider>{children}</GridProvider>
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
