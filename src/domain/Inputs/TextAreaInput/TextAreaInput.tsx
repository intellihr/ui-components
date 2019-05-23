import classNames from 'classnames'
import React, { ChangeEventHandler } from 'react'

import { Button } from '../../Buttons'
import { StyledAutosizeTextarea, StyledGif, StyledMainGifContainer, StyledTextAreaContainer } from '../../Inputs/TextAreaInput/style'
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
  /** tenorApiKey */
  tenorApiKey?: string
  /** Value of the selected gif url */
  gifUrl?: string
  /** Gives parent access to the gif url when it is selected */
  handleGifChange?: (url: string) => void
}

const TextAreaInput: React.FC<ITextAreaInputProps> = ({
  className,
  isInvalid,
  id,
  name,
  value,
  handleChange,
  isDisabled,
  placeholder,
  isHTML5Required,
  rows = 2,
  gifUrl,
  handleGifChange,
  tenorApiKey
}) => {
  const gifsEnabled = (gifUrl !== undefined) && (handleGifChange !== undefined) && (tenorApiKey !== undefined)
  const showGifs = !isDisabled && gifsEnabled

  const getClassNames = () => {
    return classNames(className, {
      'is-invalid-input': isInvalid
    })
  }

  const clearGif = () => {
    if (handleGifChange !== undefined) {
      handleGifChange('')
    }
  }

  return (
    <StyledTextAreaContainer>
      <StyledAutosizeTextarea
        id={id || name}
        name={name}
        onChange={handleChange}
        value={value}
        className={getClassNames()}
        disabled={isDisabled}
        rows={rows}
        placeholder={placeholder}
        required={isHTML5Required}
        gifsEnabled={showGifs}
      />
      {showGifs && (
        <>
          <StyledMainGifContainer hasGif={gifUrl !== ""}>
            {gifUrl !== '' && (
              <>
                <StyledGif src={gifUrl} />
                <Button className='button remove' onClick={clearGif}>
                  <span className='fa fa-times' />
                </Button>
              </>
            )}
          </StyledMainGifContainer>
          <TenorGifSelector
            apiKey={tenorApiKey!}
            setGif={handleGifChange!}
          />
        </>
      )}
    </StyledTextAreaContainer>
  )
}

export {
  TextAreaInput,
  ITextAreaInputProps
}
