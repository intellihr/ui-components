import React from 'react'
import { GridProvider } from '@Domain/Grids'

const sassGlobals = require('@Common/sass/variables.scss')

interface IDefaults {
  /** Anchor component used for clickable links */
  AnchorComponent?: React.ComponentType<any>
}

interface IDefaultsProviders {
  value?: Partial<IDefaults>
  children?: React.ReactNode
}

const defaults: IDefaults = {
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
