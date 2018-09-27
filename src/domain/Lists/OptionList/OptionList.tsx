import React from 'react'
import { toLower, map } from 'lodash'
import { OptionListButton, OptionListLeftComponent, OptionListRightComponent } from './style'

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
}

class OptionList extends React.PureComponent<IOptionListProps> {
  get content (): JSX.Element[] {
    const {
      options,
      query,
      selectedValue
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
          onClick={callback}
          selected={value === selectedValue}
          hidden={query ? !toLower(option.text).includes(toLower(query)) : false}
        >
          {leftComponent && <OptionListLeftComponent>{leftComponent}</OptionListLeftComponent>}
          {text}
          {rightComponent && <OptionListRightComponent>{rightComponent}</OptionListRightComponent>}
        </OptionListButton>
      )
    })
  }

  public render (): JSX.Element {
    return (
      <>
        {this.content}
      </>
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
