import classNames from 'classnames'
import React, { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, memo, useCallback, useEffect, useRef, useState } from 'react'

import { Props } from '../../../common'
import { StyledClearButton, StyledSuggestableTextInput, StyledSuggestion, StyledSuggestions, StyledTextInput } from './style'

import style from '../style.scss'

interface ISuggestion {
  text: string
  href: string
  anchorComponentProps?: Record<string, any>
}

interface ISuggestionState extends ISuggestion {
  active: boolean
}

interface ISuggestableTextInputProps {
  /** ID of the input */
  id?: string
  /** Name of the input */
  name: string
  /** Value of the input */
  value?: string
  /** Placeholder text to display when input is empty */
  placeholder?: string
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Add autofocus attribute to input */
  autoFocus?: boolean
  /** Add autocomplete attribute to input */
  autoComplete?: string
  /** The component context */
  componentContext?: string

  /** A list of suggestions */
  suggestions: ISuggestion[]
  /** A key for the component to determine if it needs to update the suggestions */
  cacheKey: string
  /** Handle request to update suggestions */
  handleUpdateSuggestions?: ChangeEventHandler<HTMLInputElement>

  /** Function passed to `onChange` prop */
  handleChange?: ChangeEventHandler<HTMLInputElement>
  /** Called when the input is changed */
  onChange?: (value: string) => void
  /** Handle blur event */
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>, value?: string | number) => void
  /** Handle key down events */
  handleKeyDown?: KeyboardEventHandler<HTMLInputElement>
  /** Handle clear button events */
  handleClear?: MouseEventHandler<HTMLButtonElement>
}

const ACCEPTED_KEY_CODES = [13, 27, 38, 40]

let timeoutID: NodeJS.Immediate | null = null
let manualChangeTimeStamp = 0

const getInitializedSuggestions = (suggestions: ISuggestion[]): ISuggestionState[] => (
  suggestions.slice(0, 6).map((suggestion, i) => ({ ...suggestion, active: i === 0 }))
)

/**
 * This component is currently under testing.
 * It lacks certain functionality compared to TextInput and it hasn't gone through unit testing yet.
 * Please use TextInput if you don't need auto-suggest feature.
 * Use it at your own risk if you absolutely have to.
 */
const SuggestableTextInput = memo<ISuggestableTextInputProps>(({
  id, name, value, placeholder, isDisabled, autoFocus, autoComplete, componentContext,
  suggestions: suggestionsProp, cacheKey: cacheKeyProp, handleUpdateSuggestions = () => null,
  handleChange, onChange, handleKeyDown, handleClear, handleBlur = () => null
}) => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const [shouldShowSuggestions, setShouldShowSuggestions] = useState<boolean>(false)
  const [cacheKey, setCacheKey] = useState<string>(cacheKeyProp)
  const [suggestions, setSuggestions] = useState<ISuggestionState[]>(getInitializedSuggestions(suggestionsProp))

  useEffect(() => {
    if (cacheKey === cacheKeyProp) {
      return
    }

    setCacheKey(cacheKeyProp)
    setSuggestions(getInitializedSuggestions(suggestionsProp))
  }, [cacheKeyProp, suggestionsProp, cacheKey, setCacheKey, setSuggestions])

  const displayClearButton = !!value && !!handleClear
  const displaySuggestions = shouldShowSuggestions && suggestions.length > 1

  const showSuggestions = useCallback((v: boolean = true, resetSuggestions: boolean = false) => {
    setShouldShowSuggestions(v)
    if (resetSuggestions) {
      setSuggestions(getInitializedSuggestions(suggestions))
    }
  }, [suggestions, setSuggestions, setShouldShowSuggestions])

  const handleFieldFocus = useCallback(() => {
    if (timeoutID) {
      clearImmediate(timeoutID)
      timeoutID = null
    }

    if (!shouldShowSuggestions) {
      showSuggestions()
    }
  }, [shouldShowSuggestions, showSuggestions])

  const handleFieldBlur = useCallback(() => {
    timeoutID = setImmediate(() => {
      if (shouldShowSuggestions) {
        showSuggestions(false, true)
      }
    })
  }, [shouldShowSuggestions, showSuggestions])

  const handleFieldBlurWithoutResetting = useCallback(() => {
    timeoutID = setImmediate(() => {
      if (shouldShowSuggestions) {
        showSuggestions(false)
      }
    })
  }, [shouldShowSuggestions, showSuggestions])

  const handleFieldKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((event) => {
    if (!shouldShowSuggestions) {
      return
    }

    const keyCode = event.which || event.keyCode

    if (!ACCEPTED_KEY_CODES.includes(keyCode)) {
      return handleFieldFocus()
    }

    if (keyCode === 13 || keyCode === 27) {
      return handleFieldBlurWithoutResetting()
    }

    event.preventDefault()

    const currentActiveIndex = suggestions.findIndex(({ active }) => active)
    let newActiveIndex = 0

    if (keyCode === 38) {
      newActiveIndex = currentActiveIndex - 1
      if (newActiveIndex < 0) {
        newActiveIndex = suggestions.length - 1
      }
    }

    if (keyCode === 40) {
      newActiveIndex = currentActiveIndex + 1
      if (newActiveIndex >= suggestions.length) {
        newActiveIndex = 0
      }
    }

    const newSuggestions = suggestions.slice()

    newSuggestions[currentActiveIndex].active = false
    newSuggestions[newActiveIndex].active = true

    setSuggestions(newSuggestions)

    const { current: textInputElem } = textInputRef
    if (!textInputElem) {
      return
    }

    const { set: nativeInputValueSetter = null } = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value') || {}
    if (!nativeInputValueSetter) {
      return
    }

    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('change', true, false)
    manualChangeTimeStamp = evt.timeStamp

    nativeInputValueSetter.call(textInputElem, newSuggestions[newActiveIndex].text)

    return textInputElem.dispatchEvent(evt)
  }, [shouldShowSuggestions, handleFieldFocus, handleFieldBlurWithoutResetting, suggestions, setSuggestions, textInputRef])

  const handleTextInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    if (onChange) {
      onChange(event.currentTarget.value)
    } else if (handleChange) {
      handleChange(event)
    }

    if (event.timeStamp !== manualChangeTimeStamp) {
      handleUpdateSuggestions(event)
    }
  }, [onChange, handleChange, handleUpdateSuggestions])

  const handleTextInputBlur = useCallback<FocusEventHandler<HTMLInputElement>>((event) => {
    handleBlur(event, value)
  }, [handleBlur, value])

  const handleClearButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event) => {
    if (textInputRef.current) {
      textInputRef.current.focus()
    }

    handleFieldBlurWithoutResetting()

    if (handleClear) {
      handleClear(event)
    }
  }, [textInputRef, handleFieldBlurWithoutResetting, handleChange])

  return (
    <StyledSuggestableTextInput
      displayClearButton={displayClearButton}
      onFocus={handleFieldFocus}
      onBlur={handleFieldBlur}
      onKeyDown={handleFieldKeyDown}
      onClick={handleFieldFocus}
      onTouchEnd={handleFieldFocus}
      onChange={handleFieldFocus}
    >
      <StyledTextInput
        key='suggestable-text-input'
        id={id || name}
        name={name}
        type='text'
        className={classNames(style.input)}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        data-component-type={Props.ComponentType.TextInput}
        data-component-context={componentContext}
        onChange={handleTextInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleTextInputBlur}
        displaySuggestions={displaySuggestions}
        ref={textInputRef}
      />
      {
        displayClearButton && (
          <StyledClearButton
            key='clear-button'
            type='button'
            onClick={handleClearButtonClick}
          >
            x
          </StyledClearButton>
        )
      }
      {
        displaySuggestions && (
          <StyledSuggestions key='suggestions'>
            {suggestions.map(({ text, ...suggestionProps }, i) => (
              <StyledSuggestion key={`${text}-${i}`} hidden={i === 0} {...suggestionProps}>
                {text}
              </StyledSuggestion>
            ))}
          </StyledSuggestions>
        )
      }
    </StyledSuggestableTextInput>
  )
})

export {
  SuggestableTextInput
}
