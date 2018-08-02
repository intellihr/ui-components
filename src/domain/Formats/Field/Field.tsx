import React, { Fragment } from 'react'
import { isString, isNumber, isNil } from 'lodash'
import { Text } from '@Domain/Typographies/Text'
import { FieldLabelWrapper } from './style'

export interface IField {
  /** Label text */
  label: string
  labelRightComponent?: JSX.Element
}

export class Field extends React.PureComponent <IField> {
  get formattedChildren (): JSX.Element[] {
    const {
      children
    } = this.props

    return React.Children.map(
      children,
      (child) => isString(child) || isNumber(child) ? <Text>{child}</Text> : child
    )
  }

  get label (): JSX.Element {
    const {
      label,
      labelRightComponent
    } = this.props

    return (
      <FieldLabelWrapper labelRightComponent={labelRightComponent}>
        <Text
          size='small'
          color='subtle'
          isInline={!isNil(labelRightComponent)}
          className='label-component'
        >
          {label}
        </Text>
        {labelRightComponent}
      </FieldLabelWrapper>
    )
  }

  render (): JSX.Element {
    return (
      <Fragment>
        {this.label}
        {this.formattedChildren}
      </Fragment>
    )
  }
}
