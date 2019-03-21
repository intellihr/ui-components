import { map, toLower } from 'lodash'
import React from 'react'

import { Props } from '../../../common'
import { Text } from '../../Typographies/Text'
import {
  OptionListButton,
  OptionListLeftComponent,
  OptionListRightComponent,
  OptionListWrapper,
  StyledEmptyState
} from './style'

type OptionClickCallback = (option: IOptionProps) => void

type OptionValue = string | number | boolean

interface IOptionProps {
  /** A component that is shown to the left of the text */
  leftComponent?: JSX.Element
  /** A component that is shown to the right of the text */
  rightComponent?: JSX.Element
  /** Text to display */
  text: string
  /** Value of the option */
  value: OptionValue
  /** Callback when option is clicked. Overrides OptionList handleClick. */
  onClick?: OptionClickCallback
  /** Any other option property that will get passed with the onClick callback */
  [x: string]: any
}

interface IOptionListProps {
  /** Array of options to display in the list */
  options: IOptionProps[]
  /** Query string to filter the options by */
  query?: string
  /** Default callback when an option is selected */
  handleClick: OptionClickCallback
  /** Currently selected value */
  selectedValue?: OptionValue
  /** Maximum height of the list */
  maxHeight?: number
  /** Fixed width of the list. If undefined, auto width will be used */
  width?: string,
  /** whether the text in the options should truncate */
  truncatedText?: boolean
}

class OptionList extends React.PureComponent<IOptionListProps> {
  public static defaultProps: Partial<IOptionListProps> = {
    truncatedText: false
  }

  public hiddenOptions = {
    query: '',
    hidden: 0
  }

  public hideOption = (optionText: string, query?: string) => {
    if (query !== this.hiddenOptions.query) {
      this.hiddenOptions = {
        query: query || '',
        hidden: 0
      }
    }

    if (query && !toLower(optionText).includes(toLower(query))) {
      this.hiddenOptions.hidden++

      return true
    }

    return false
  }

  get options (): JSX.Element[] {
    const {
      options,
      query,
      selectedValue,
      truncatedText
    } = this.props

    return map(options, (option, idx) => {
      const {
        leftComponent,
        rightComponent,
        text,
        value
      } = option

      const callback = () => this.onClickCallback(option)

      return (
        <OptionListButton
          key={idx}
          type='button'
          onClick={callback}
          truncatedText={truncatedText}
          selected={value === selectedValue}
          hidden={this.hideOption(option.text, query)}
        >
          {leftComponent && <OptionListLeftComponent>{leftComponent}</OptionListLeftComponent>}
          {text}
          {rightComponent && <OptionListRightComponent>{rightComponent}</OptionListRightComponent>}
        </OptionListButton>
      )
    })
  }

  get content (): JSX.Element[] | JSX.Element {
    const {
      options
    } = this.props

    if (options.length === 0) {
      return (
        <StyledEmptyState>
          <Text type={Props.TypographyType.Small}>
            Sorry, We couldn't find any options
          </Text>
        </StyledEmptyState>
      )
    }

    const filteredOptions = this.options

    if (this.hiddenOptions.hidden === options.length) {
      return (
        <StyledEmptyState>
          <Text type={Props.TypographyType.Small}>
            Unfortunately, we couldn't find anything from your search
          </Text>
        </StyledEmptyState>
      )
    }

    return filteredOptions
  }

  public render (): JSX.Element {
    const {
      maxHeight,
      width
    } = this.props

    return (
      <OptionListWrapper
        maxHeight={maxHeight}
        width={width}
      >
        {this.content}
      </OptionListWrapper>
    )
  }

  private onClickCallback = (option: IOptionProps) => {
    const {
      handleClick
    } = this.props

    if (option.onClick) {
      return option.onClick(option)
    }

    return handleClick(option)
  }
}

export {
  OptionList,
  OptionClickCallback,
  IOptionListProps,
  IOptionProps
}
