import React from 'react'
import { isString, isNumber } from 'lodash'
import { Text } from '../../Typographies/Text'
import { FieldLabelWrapper } from './style'
import { Props, Variables } from '../../../common'
import { ITooltipPopoverProps, TooltipPopover } from '../../Popovers/TooltipPopover'

interface IRecordProps {
  /** Label text */
  name: string
  /** The data-component-context */
  componentContext?: string
  /** Component to sit to the right of the Label */
  tooltipContent?: JSX.Element | string
  /** any extra tooltip props */
  tooltipProps?: ITooltipPopoverProps
}

class Record extends React.PureComponent <IRecordProps> {
  get formattedChildren (): JSX.Element[] {
    const {
      children
    } = this.props

    return React.Children.map(
      children,
      this.formattedChild
    )
  }

  get tooltip () {
    const {
      tooltipContent,
      tooltipProps
    } = this.props

    if (tooltipContent) {
      return <TooltipPopover {...tooltipProps}>{tooltipContent}</TooltipPopover>
    }
  }

  get label (): JSX.Element {
    const {
      name,
      componentContext
    } = this.props

    return (
      <FieldLabelWrapper
        data-component-type={Props.ComponentType.RecordName}
        data-component-context={componentContext}
      >
        <Text
          type={Props.TypographyType.Small}
          color={Variables.Color.n700}
          className='label-component'
          componentContext={componentContext}
        >
          {name}
        </Text>
        {this.tooltip}
      </FieldLabelWrapper>
    )
  }

  public render (): JSX.Element {
    const {
      componentContext
    } = this.props

    return (
      <div
        data-component-type={Props.ComponentType.Record}
        data-component-context={componentContext}
      >
        {this.label}
        {this.formattedChildren}
      </div>
    )
  }

  private formattedChild = (child: string | number | JSX.Element) : JSX.Element => {
    const {
      componentContext
    } = this.props

    if (isString(child) || isNumber(child)) {
      return (
        <Text
          color={Variables.Color.n800}
          componentContext={componentContext}
        >
          {child}
        </Text>
      )
    }

    return child
  }
}

export {
  IRecordProps,
  Record
}
