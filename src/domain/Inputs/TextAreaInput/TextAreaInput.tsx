import classNames from 'classnames'
import React, { ChangeEventHandler, RefObject } from 'react'

import { StyledAutosizeTextarea, StyledGifButton } from '../../Inputs/TextAreaInput/style'
import { TenorGifSelector } from './TenorGifSelector'
// import { Tooltip } from "@Domain/ToolTips"

interface ITextAreaInputProps {
  /** ID of the input */
  id?: string
  /** Name of the input */
  name: string
  /** Custom classname to use */
  className?: string
  /** If true, adds invalid input class to component */
  isInvalid?: boolean
  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLTextAreaElement>
  /** Value of the input */
  value?: string
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Number of rows to initially display */
  rows?: number
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** If true, use HTML5 required attribute */
  isHTML5Required?: boolean
}

class TextAreaInput extends React.PureComponent<ITextAreaInputProps> {
  public static defaultProps: Partial<ITextAreaInputProps> = {
    rows: 2
  }

  get classNames (): string {
    const {
      className,
      isInvalid
    } = this.props

    return classNames(
      className,
      { 'is-invalid-input': isInvalid }
    )
  }

  public render (): JSX.Element {
    const {
      id,
      name,
      value,
      handleChange,
      isDisabled,
      rows,
      placeholder,
      isHTML5Required
    } = this.props

    const insertMarkdown = (markdown: string) => {
      console.log(markdown)
    }

    return (
      <div style={{ position: 'relative' }}>
        <StyledAutosizeTextarea
          id={id || name}
          name={name}
          onChange={handleChange}
          value={value}
          className={this.classNames}
          disabled={isDisabled}
          rows={rows}
          placeholder={placeholder}
          required={isHTML5Required}
        />
        {!isDisabled && (
          <TenorGifSelector
            apiKey='GKN6X4G4CUZJ'
            insertMarkdown={insertMarkdown}
          />
        )}
      </div>
    )
  }
}

export {
  TextAreaInput,
  ITextAreaInputProps
}
