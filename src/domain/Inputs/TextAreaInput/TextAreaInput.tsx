import classNames from 'classnames'
import React, { useContext } from 'react'

import { Props } from '../../../common'
import { DefaultsContext } from '../../Defaults'
import { StyledAutosizeTextarea, StyledTextAreaContainer } from '../../Inputs/TextAreaInput/style'
import { GifSection } from './GifSection'
import { TenorGifSelector } from './TenorGifSelector'

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
  handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  /** Called when the input is changed */
  onChange?: (value: string) => void
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
  /** Value of the selected gif url */
  gifUrl?: string
  /** Gives parent access to the gif url when it is selected */
  handleGifChange?: (url: string) => void
  /** Margins around the text area */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
  /** Label for accessibility */
  'aria-label'?: string
}

const handleInputChange = (onChange?: ITextAreaInputProps['onChange'], handleChange?: ITextAreaInputProps['handleChange']) => (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  if (onChange) {
    onChange(event.target.value)
  } else if (handleChange) {
    handleChange(event)
  }
}

const TextAreaInput: React.FC<ITextAreaInputProps> = ({
  id,
  className,
  name,
  placeholder,
  value,
  handleChange,
  onChange,
  rows = 2,
  isInvalid,
  isDisabled,
  isHTML5Required,
  gifUrl,
  handleGifChange,
  margins,
  componentContext,
  'aria-label': label
}) => {
  const { tenorApiKey } = useContext(DefaultsContext)
  const hasGif = gifUrl !== ''
  const gifsEnabled = (gifUrl !== undefined) && (handleGifChange !== undefined) && (tenorApiKey !== undefined)
  const showGifs = !isDisabled && gifsEnabled

  const clearGif = () => {
    if (handleGifChange !== undefined) {
      handleGifChange('')
    }
  }

  const classes = classNames(className, {
    'is-invalid-input': isInvalid
  })

  return (
    <StyledTextAreaContainer
      data-component-type={Props.ComponentType.TextAreaInput}
      data-component-context={componentContext}
      margins={margins}
    >
      <StyledAutosizeTextarea
        className={classes}
        id={id || name}
        name={name}
        onChange={handleInputChange(onChange, handleChange)}
        value={value}
        disabled={isDisabled}
        rows={rows}
        placeholder={placeholder}
        required={isHTML5Required}
        gifsEnabled={showGifs}
        hasGif={hasGif}
        aria-label={label}
      />
      {showGifs &&
        <>
          <GifSection
            clearGif={clearGif}
            handleGifChange={handleGifChange!}
            gifUrl={gifUrl!}
          />
          <TenorGifSelector
            apiKey={tenorApiKey!}
            handleGifChange={handleGifChange!}
          />
        </>
      }
    </StyledTextAreaContainer>
  )
}

export {
  ITextAreaInputProps,
  TextAreaInput
}
