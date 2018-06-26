import React from 'react'
import { Callout } from '../Callout'

export default class NoDataComponent extends React.Component<any, any> {
  render () {
    return (
      <Callout type='no-data' shouldFocus={false} >
        {this.props.children}
      </Callout>
    )
  }
}
