import React from 'react'
import { filter, toLower, map } from 'lodash'
import { OptionListButton } from './style'

interface IOptionProps {
  /** A component that is shown to the left of the text */
  leftComponent?: JSX.Element
  /** A component that is shown to the right of the text */
  rightComponent?: JSX.Element
  /** Text to display */
  text: string
  /** Event handler when the section is clicked */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /** Applys distinct style to selected option */
  selected?: boolean
}

interface IOptionListProps {
  options: IOptionProps[]
  query?: string
}

class OptionList extends React.PureComponent<IOptionListProps> {
  get content (): JSX.Element[] {
    const {
      options,
      query
    } = this.props

    return map(this.filteredOptions(options, query), (option, idx) => {
      const {
        onClick,
        selected,
        leftComponent,
        rightComponent,
        text
      } = option

      return (
        <OptionListButton
          key={idx}
          onClick={onClick}
          selected={selected}
        >
          {leftComponent && <span className='left-component'>{leftComponent}</span>}
          {text}
          {rightComponent && <span className='right-component'>{rightComponent}</span>}
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

  private filteredOptions = (options: IOptionProps[], query?: string) => {
    if (query) {
      return filter(options, option => {
        return toLower(option.text).includes(query)
      })
    }

    return options
  }
}

export {
  OptionList,
  IOptionListProps,
  IOptionProps
}
