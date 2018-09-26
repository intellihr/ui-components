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
  onClick?: (option: IOptionProps) => void
  /** Applys distinct style to selected option */
  selected?: boolean
  /** Any other option property that will get passed with the onClick callback */
  [x: string]: any
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

    return map(options, (option, idx) => {
      const {
        onClick,
        selected,
        leftComponent,
        rightComponent,
        text
      } = option

      const handleClick = () => onClick ? onClick(option) : null

      return (
        <OptionListButton
          key={idx}
          onClick={handleClick}
          selected={selected}
          hidden={query ? !toLower(option.text).includes(toLower(query)) : false}
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
}

export {
  OptionList,
  IOptionListProps,
  IOptionProps
}
