import React from 'react'
import { Subtract } from 'utility-types'
import { Defaults, DefaultsConsumer } from './Defaults'

interface IWithDefaults {
  defaults: Defaults
}

const withDefaults = <P extends IWithDefaults>(DefaultsAwareComponent: React.ComponentType<P>) => (
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
