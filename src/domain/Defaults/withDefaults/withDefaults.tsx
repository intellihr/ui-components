import React from 'react'

import { DefaultsConsumer, IDefaults } from '../Defaults'

interface IWithDefaults {
  defaults: IDefaults
}

const withDefaults = <P extends IWithDefaults>(DefaultsAwareComponent: React.ComponentType<P>) => (
  class extends React.PureComponent<P> {
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
