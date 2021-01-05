import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import React from 'react'

import {Props, Variables} from '../../../common'
import {ITooltipPopoverProps, TooltipPopover} from '../../Popovers/TooltipPopover'
import {Text} from '../../Typographies/Text'
import {FieldLabelWrapper, RecordVariant, RecordWrapper} from './style'

interface IRecordProps {
  /** Label text */
  name: string
  /** If no children,  this will be displayed instead of the 'name' prop */
  noChildrenText?: string
  /** The data-component-context */
  componentContext?: string
  /** If true, will display a tooltip to the right of the 'name' containing this content */
  tooltipContent?: JSX.Element | string
  /** any extra tooltip props */
  tooltipProps?: ITooltipPopoverProps
  /** Margins */
  margins?: Props.IMargins
  /** What style variant of record to display */
  variant?: RecordVariant
}

class Record extends React.PureComponent <IRecordProps> {
  public static Variant = RecordVariant
  public static defaultProps: Partial<IRecordProps> = {
    noChildrenText: 'Not Provided',
    variant: RecordVariant.LabelAbove
  }

  get formattedChildren (): JSX.Element[] | JSX.Element | null | undefined {
    const {
      children,
      noChildrenText
    } = this.props

    if (!children) {
      return (
        <Text color={Variables.Color.n500} isInline={false}>
          {noChildrenText}
        </Text>
      )
    }

    return React.Children.map<any, React.ReactNode>(
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
      componentContext,
      variant
    } = this.props

    return (
      <FieldLabelWrapper
        data-component-type={Props.ComponentType.RecordName}
        data-component-context={componentContext}
        variant={variant}
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
      componentContext,
      margins,
      variant
    } = this.props

    return (
      <RecordWrapper
        data-component-type={Props.ComponentType.Record}
        data-component-context={componentContext}
        margins={margins}
        variant={variant}
      >
        {this.formattedChildren}
        {this.label}
      </RecordWrapper>
    )
  }

  private formattedChild = (child?: React.ReactNode) => {
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
