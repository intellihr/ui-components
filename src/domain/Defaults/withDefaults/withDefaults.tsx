import React from 'react'
import { Subtract } from 'utility-types'
import { IDefaults, DefaultsConsumer } from '../Defaults'

interface IWithDefaults {
  defaults: IDefaults
}

const withDefaults = <P extends IWithDefaults>(DefaultsAwareComponent: React.ComponentType<P>) => (
  class extends React.PureComponent<Subtract<P, IWithDefaults>> {
    public render (): JSX.Element {
      return (
        <DefaultsConsumer>
          {(defaults: IDefaults) =>
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
