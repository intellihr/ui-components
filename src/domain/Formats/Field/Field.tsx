import React, { Fragment } from 'react'
import { isString, isNumber } from 'lodash'
import { Text } from '@Domain/Typographies/Text'
const style = require('./Field.scss')

export interface IField {
  /** Label text */
  label: string
  labelRightComponent?: JSX.Element
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

  get label (): (JSX.Element) {
    const {
      label,
      labelRightComponent
    } = this.props

    if (labelRightComponent) {
      return (
        <div>
          <Text
            size='small'
            color='#434E59'
            className='label-right-component'
          >
            {label}
          </Text>
          {labelRightComponent}
        </div>
      )
    }

    return (
      <Text
        size='small'
        color='#434E59'
        isInline={false}
      >
        {label}
      </Text>
    )
  }

  render (): JSX.Element {
    return (
      <div className={style.Field}>
        {this.label}
        {this.formattedChildren}
      </div>
    )
  }
}
