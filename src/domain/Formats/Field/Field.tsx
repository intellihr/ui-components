import React, { Fragment } from 'react'
import { isString, isNumber } from 'lodash'
import { Text } from '../../Typographies/Text'

export interface IField {
  /** Label text */
  label: string
}

export class Field extends React.PureComponent <IField> {
  get formattedChildren (): (JSX.Element)[] {
    const {
      children
    } = this.props

    return React.Children.map(
      children,
      (child) => isString(child) || isNumber(child) ? <Text>{child}</Text> : child
    )
  }

  render (): JSX.Element {
    const {
      label
    } = this.props

    return (
      <Fragment>
        <Text
          size='small'
          color='#434E59'
          isInline={false}
        >
          {label}
        </Text>
        {this.formattedChildren}
      </Fragment>
    )
  }
}
