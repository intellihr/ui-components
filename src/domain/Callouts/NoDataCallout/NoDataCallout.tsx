import React from 'react'
import { isNil } from 'lodash'
import { Text } from '../../Typographies/Text'
import { Props } from '../../../common/types/props'
import { Variables } from '../../../common'

const style = require('./style.scss')

export interface INoDataCalloutProps {
  children?: any
  primaryMessage?: string
  secondaryMessage?: string
  /** The data-component-context */
  componentContext?: string
}

export class NoDataCallout extends React.Component<INoDataCalloutProps> {

  get message () {
    const {
      primaryMessage: primaryMessageProp,
      secondaryMessage: secondaryMessageProp
    } = this.props

    const defaultPrimaryMessage = 'Opps... We couldn\'t find anything for this section.'
    const defaultSecondaryMessage = 'Please speak to your system admin or add information.'

    const primaryMessage = isNil(primaryMessageProp) ? defaultPrimaryMessage : primaryMessageProp
    const secondaryMessage = isNil(secondaryMessageProp) ? defaultSecondaryMessage : secondaryMessageProp


    return (
      <div>
        <Text type={Props.TypographyType.Heading} tag='h3' color={Variables.Color.n700}>
          {primaryMessage}
        </Text>
        <Text color={Variables.Color.n600} tag='p'>
          {secondaryMessage}
        </Text>
      </div>
    )
  }

  public render (): JSX.Element {
    const { children, componentContext } = this.props

    if (!children) {
      return (
        <div
          className={style.content}
          data-component-type={Props.ComponentType.NoDataCallout}
          data-component-context={componentContext}
        >
          {this.message}
        </div>
      )
    }

    return (
      <div
        className={style.content}
        data-component-type={Props.ComponentType.NoDataCallout}
        data-component-context={componentContext}
      >
        {children}
      </div>
    )
  }
}
