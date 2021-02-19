import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import React from 'react'

import { Props, Variables } from '../../../common'
import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
import { ITooltipPopoverProps, TooltipPopover } from '../../Popovers/TooltipPopover'
import { Text} from '../../Typographies/Text'
import { FieldLabelWrapper, RecordVariant, RecordWrapper } from './style'

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

const Record: React.FC<IRecordProps> & { Variant: typeof RecordVariant }  = ({
  componentContext,
  margins,
  variant = RecordVariant.LabelAbove,
  children,
  noChildrenText,
  tooltipContent,
  tooltipProps,
  name
}) => {
  const t = useTranslateFunction()

  return (
    <RecordWrapper
      data-component-type={Props.ComponentType.Record}
      data-component-context={componentContext}
      margins={margins}
      variant={variant}
    >
      <div>
        {children
          ? React.Children.map<any, React.ReactNode>(
              children,
              (child) => {
                if (isString(child) || isNumber(child)) {
                  return <Text color={Variables.Color.n800} componentContext={componentContext}>{child}</Text>
                }

                return child
              }
            )
          : <Text color={Variables.Color.n500} isInline={false}>{noChildrenText || t('notProvided')}</Text>
        }
      </div>
      <FieldLabelWrapper
        data-component-type={Props.ComponentType.RecordName}
        data-component-context={componentContext}
        variant={variant}
        hasTooltip={!!tooltipContent}
      >
        <Text
          type={Props.TypographyType.Small}
          color={Variables.Color.n700}
          className='label-component'
          componentContext={componentContext}
        >
          {name}
        </Text>
        {tooltipContent && (
          <TooltipPopover {...tooltipProps}>{tooltipContent}</TooltipPopover>
        )}
      </FieldLabelWrapper>
    </RecordWrapper>
  )
}

Record.Variant = RecordVariant

export {
  IRecordProps,
  Record
}
