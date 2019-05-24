import classNames from 'classnames'
import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
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
  /** A tenor api key to access the endpoint */
  tenorApiKey?: string
  /** Value of the selected gif url */
  gifUrl?: string
  /** Gives parent access to the gif url when it is selected */
  handleGifChange?: (url: string) => void
  /** The component context */
  componentContext?: string
}

const TextAreaInput: React.FC<ITextAreaInputProps> = ({
  id,
  className,
  name,
  placeholder,
  value,
  handleChange,
  rows = 2,
  isInvalid,
  isDisabled,
  isHTML5Required,
  gifUrl,
  handleGifChange,
  tenorApiKey,
  componentContext
}) => {
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
    >
      <StyledAutosizeTextarea
        className={classes}
        id={id || name}
        name={name}
        onChange={handleChange}
        value={value}
        disabled={isDisabled}
        rows={rows}
        placeholder={placeholder}
        required={isHTML5Required}
        gifsEnabled={showGifs}
        hasGif={hasGif}
      />
      {showGifs && (
        <>
          {hasGif && (
            <StyledMainGifContainer>
              <>
                <StyledGif src={gifUrl} />
                <Button
                  className='button remove'
                  onClick={clearGif}
                >
                  <span className='fa fa-times' />
                </Button>
              </>
            </StyledMainGifContainer>
          )}
          <TenorGifSelector
            apiKey={tenorApiKey!}
            handleGifChange={handleGifChange!}
          />
        </>
      )}
    </StyledTextAreaContainer>
  )
}

export {
  ITextAreaInputProps,
  TextAreaInput
}
