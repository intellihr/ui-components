import { reduce } from 'lodash'
import React from 'react'

import { Props, Variables } from '../../../common'
import { HintWrapper, IHintWrapperProps } from '../../Formats/HintWrapper'
import { TextWrapper } from './style'
import { Link } from './subcomponents/Link'

export interface ITextProps {
  /** Text to display */
  children: string | string[] | number
  /** Custom class name to use */
  className?: string
  /** If true, displays the text in uppercase */
  isUpper?: boolean
  /** Specify the text font weight */
  weight?: Variables.FontWeight
  /** Specify the type of text to use */
  type?: Props.TypographyType
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will display the text inline */
  isInline?: boolean
  /** If true, will italicize the text */
  isItalic?: boolean
  /** Color of the text */
  color?: Variables.Color
  /** Optional header tag to render the element with */
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  /** HTML data attributes to display on the text tag */
  dataAttributes?: {
    [i: string]: any
  }
  /** The data-component-context */
  componentContext?: string
  /** The props for the hint to apply to the text */
  hintComponentProps?: IHintWrapperProps
  /** The margins around the component */
  margins?: Props.IMargins
}

export class Text extends React.PureComponent<ITextProps> {
  public static Link = Link
  public static defaultProps: Partial<ITextProps> = {
    isInline: true,
    type: Props.TypographyType.Body,
    tag: 'span'
  }

  get dataAttributes (): any {
    const {
      dataAttributes
    } = this.props

    return reduce(dataAttributes, (acc: any, dataValue: string, dataKey: string) => {
      acc[`data-${dataKey}`] = dataValue

      return acc
    }, {})
  }

  public render (): JSX.Element {
    const {
      children,
      className,
      type,
      weight,
      isUpper,
      isTruncated,
      isInline,
      isItalic,
      color,
      componentContext,
      hintComponentProps,
      margins,
      tag
    } = this.props

    const text = (
      <TextWrapper
        as={tag}
        margins={margins}
        textType={type}
        color={color}
        isInline={isInline}
        isItalic={isItalic}
        weight={weight}
        isUpper={isUpper}
        isTruncated={isTruncated}
        className={className}
        data-component-type={Props.ComponentType.Text}
        data-component-context={componentContext}
        {...this.dataAttributes}
      >
        {children}
      </TextWrapper>
    )

    if (hintComponentProps) {
      return (
        <HintWrapper
          {...hintComponentProps}
        >
          {text}
        </HintWrapper>
      )
    }

    return text
  }
}
