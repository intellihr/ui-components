import React from 'react'
import { reduce } from 'lodash'
import { TextWrapper } from './style'
import { Props, Variables } from '../../../common'
import { HintWrapper, HintWrapperType } from '../../Formats/HintWrapper'

export interface ITextProps {
  /** Text to display */
  children: string | string[] | number
  /** Custom class name to use */
  className?: string
  /** If true, displays the text in uppercase */
  isUpper?: boolean
  /** Specify the text font weight */
  weight?: 'normal' | 'heavy'
  /** Specify the type of text to use */
  type?: Props.TypographyType
  /** If true, will truncate overflowing text */
  isTruncated?: boolean
  /** If true, will display the text inline */
  isInline?: boolean
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
  /** The content of the hint to pass through to HintWrapper */
  hint?: JSX.Element | string
  /** The type of hint to pass through to HintWrapper */
  hintType?: HintWrapperType
}

export class Text extends React.PureComponent<ITextProps> {
  public static defaultProps: Partial<ITextProps> = {
    isInline: true,
    type: Props.TypographyType.Body,
    tag: 'span'
  }

  get textTag (): any {
    const {
      tag
    } = this.props

    if (tag) {
      return TextWrapper.withComponent(tag)
    }

    return TextWrapper
  }

  get dataAttributes (): any {
    const {
      dataAttributes
    } = this.props

    return reduce(dataAttributes,(acc: any, dataValue: string, dataKey: string) => {
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
      color,
      componentContext,
      hint,
      hintType
    } = this.props

    const TextTag = this.textTag

    const text = (
      <TextTag
        textType={type}
        color={color}
        isInline={isInline}
        weight={weight}
        isUpper={isUpper}
        isTruncated={isTruncated}
        className={className}
        data-component-type={Props.ComponentType.Text}
        data-component-context={componentContext}
        {...this.dataAttributes}
      >
        {children}
      </TextTag>
    )

    if (hint) {
      return (
        <HintWrapper
          hint={hint}
          hintType={hintType}
        >
          {text}
        </HintWrapper>
      )
    }

    return text
  }
}
