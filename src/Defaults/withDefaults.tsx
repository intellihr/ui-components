import React from 'react'
import { Subtract } from '../Typescript'
import { Defaults, DefaultsConsumer } from './Defaults'

interface IWithDefaults {
  defaults: Defaults
}

const withDefaults = <P extends {}>(DefaultsAwareComponent: React.ComponentType<P & Partial<IWithDefaults>>) => (
  class extends React.PureComponent<Subtract<P, IWithDefaults>> {
    public render (): JSX.Element {
      return (
        <DefaultsConsumer>
          {(defaults: Defaults) =>
            <DefaultsAwareComponent
              {...this.props}
              defaults={defaults}
            />
          }
        </DefaultsConsumer>
      )
    }
  }
)

export {
  IWithDefaults,
  withDefaults
}
