import React, { ChangeEventHandler, RefObject } from 'react'
import { endsWith } from 'lodash'

interface ITimeInputProps {
  /** time to display */
  value: string
  /** action when time number input is changed */
  handleChange: (value: string) => void
  /** If true, displays the time with the am pm format */
  isTimeRange?: boolean
}

interface ITimeInputState {
  /** the time to use for update the input */
  value: string
  /** the cursorPosition to use for update the input */
  cursorPosition: number
  /** If true, user is focus on the input */
  isFocus: boolean
  /** the cursorPosition before handling change */
  position: number | null
  /** the added character when user inputs in the time input field */
  addedCharacter: string | null
  /** the character before the removed character when user backspaces in the time input field */
  beforeRemovedCharacter: string | null
}

class TimeInput extends React.PureComponent<ITimeInputProps, ITimeInputState> {
  public static defaultProps: Partial<ITimeInputProps> = {
    isTimeRange: false
  }

  public state: ITimeInputState = {
    value: this.props.value,
    cursorPosition: 0,
    isFocus: false,
    position: null,
    addedCharacter: null,
    beforeRemovedCharacter: null
  }

  private inputRef: RefObject<HTMLInputElement> = React.createRef()

  public componentDidUpdate () {
    const {
      cursorPosition
    } = this.state

    if (!this.inputRef.current) {
      // forceUpdate is required to for the ref to work
      this.forceUpdate()
    } else {
      this.inputRef.current.setSelectionRange(cursorPosition, cursorPosition)
    }
  }

  public render(): JSX.Element {
    const {
      value,
      isTimeRange
    } = this.props

    return <input
      type='text'
      name='timeNumber'
      value={isTimeRange? this.formattedTime(value!) : value}
      onChange={this.timeChange}
      onFocus={this.timeFocus}
      onBlur={this.timeBlur}
      ref={this.inputRef}
    />
  }

  private timeFocus = () => {
    this.setState({isFocus:true})
  }

  private timeBlur = () => {
    this.setState({isFocus:false})
  }

  // change the displayed value for the 12 hour format display
  private formattedTime = (value:string): string => {
    const {
      position,
      beforeRemovedCharacter,
      addedCharacter,
      isFocus
    } = this.state

    const editMode = (
      /** return true if the user backspaces the first character of the ime input */
      (position === 0 && beforeRemovedCharacter === undefined && addedCharacter === null) ||
      /** return true if the user backspaces and the removed character is 0 */
      (beforeRemovedCharacter === '0') ||
      /** return true if the user input character in front of the first character and the added character is 0, more than or equal to 2 or not a number */
      (position === 1 && (addedCharacter === '0' || !this.isNumber(addedCharacter) || Number(addedCharacter)>=2) )||
      /** return true if the user input character in front of the second character and the added character is 0 */
      (position === 2 && addedCharacter === '0')
    ) && isFocus
    const hourNumber = Number(value.substr(0,2))
    const timeWithoutHour = value.substr(2)

    if (value && value.length === 5) {
      // it converts to am when the hour is less than 12
      if (hourNumber < 12) {
        if (hourNumber === 0) {
          if (editMode){
            return `00${timeWithoutHour} am`
          }
          return `12${timeWithoutHour} am`
        }
        return `${value} am`
      }

      if (hourNumber === 12) {
        if (editMode){
          return `00${timeWithoutHour} pm`
        }
        return `${value} pm`
      }

      // it converts to pm when the hour is more than 12
      if (hourNumber > 12) {
        if (hourNumber <= 21) {
          return `0${hourNumber-12}${timeWithoutHour} pm`
        }
        return `${hourNumber-12}${timeWithoutHour} pm`
      }
    }

    return value
  }

  private isNumber = (value: string | null): boolean => {
    const num = Number(value)
    return !isNaN(num) && String(value) === String(num)
  }

  private formatTimeItem = (value: string): string => {
    return `${value || ''}00`.substr(0, 2)
  }

  private validateTimeAndCursor = (value: string, defaultValue: string, cursorPosition: number = 0) => {
    const [oldH, oldM] = defaultValue.split(':')

    let newCursorPosition = Number(cursorPosition)
    let [newH, newM] = value.split(':')

    newH = this.formatTimeItem(newH)
    if (Number(newH[0]) > 2) {
      newH = oldH
      newCursorPosition -= 1
    } else if (Number(newH[0]) === 2) {
      if (Number(oldH[0]) === 2 && Number(newH[1]) > 3) {
        newH = `2${oldH[1]}`
        newCursorPosition -= 2
      } else if (Number(newH[1]) > 3) {
        newH = '23'
      }
    }

    newM = this.formatTimeItem(newM)
    if (Number(newM[0]) > 5) {
      newM = oldM
      newCursorPosition -= 1
    }

    const validatedValue = `${newH}:${newM}`

    return [validatedValue, newCursorPosition]
  }

  private getTimeByAddedAmPm = (addedCharacter: string, oldValueHourNumber: number, oldValue: string, isPm: boolean): string => {
    if (isPm && addedCharacter === 'a') {
      // oldValue (in 24 hour) minus 12 to be the new hour, and add the 0 in front it if it just in one digit
      return `${oldValueHourNumber<22 ? '0' : ''}${(Number(oldValue.substr(0, 2))-12).toString()}${oldValue.substr(2)}`
    }
    if (!isPm && addedCharacter === 'p') {
      // oldValue (in 24 hour) plus 12 to be the new hour
      return `${(oldValueHourNumber+12)}${oldValue.substr(2)}`
    }
    return ''
  }

  private getTimeByAddedCharacterBeforeColon = (addedCharacter: string, inputValue: string, position: number , oldValue: string): string => {
    const hourValue = oldValue.substr(0, 2)
    return `${hourValue}:${addedCharacter}${inputValue.substr(position + 2, 1)}`
  }

  private getTimeByAddedMinuteCharacter = (addedMinuteCharacter: string, inputValue: string, position: number, oldValue: string): string => {
    return oldValue.substr(0, position - 1) + addedMinuteCharacter + inputValue.substr(position + 1)
  }

  private getTimeByNewAddedHourCharacter = (addedHourCharacter: string, inputValue: string, position: number, oldValue: string, isPm: boolean): string => {
    const {
      isTimeRange
    } = this.props

    const minuteValue = oldValue.substr(2, 3)
    let newHourValue = ''

    if (!isTimeRange) {
      return inputValue.substr(0, position - 1) + addedHourCharacter + inputValue.substr(position + 1)
    }

    if (position === 2) {
      const newHourNumber = Number(`${inputValue.substr(0,1)}${addedHourCharacter}`)
      if (newHourNumber <= 12  && newHourNumber >=1 ) {

        newHourValue = `${newHourNumber}`

        if (!isPm && newHourNumber < 10) {
          newHourValue = `0${newHourNumber}`
        }

        if (isPm && newHourNumber < 12) {
          newHourValue = `${newHourNumber + 12}`
        }

        if (!isPm && newHourNumber === 12) {
          newHourValue = `${newHourNumber - 12}`
        }

        return `${newHourValue}${minuteValue}`
      }
    }
    if (position === 1 && (addedHourCharacter === '0'|| addedHourCharacter === '1')) {
      const newHourNumber = Number(`${addedHourCharacter}${inputValue.substr(position + 1,1)}`)

      newHourValue = `${newHourNumber}`

      if (isPm) {
        newHourValue = `${newHourNumber + 12}`
      }

      if (newHourValue === '12' || (!isPm && Number(newHourValue) >= 13)) {
        newHourValue = '00'
      }

      if (newHourValue === '24' || (isPm && Number(newHourValue) >= 25)) {
        newHourValue = '12'
      }

      return `${newHourValue}${minuteValue}`
    }
    return ''
  }

  private getTimeByRemovedHourCharacter = (inputValue: string, position: number, isPm: boolean): string => {
    const beforeCursorCharacters = inputValue.substr(0, position)
    const afterCursorCharacters = inputValue.substr(position)
    const minuteValue = inputValue.substr(1,3)

    if (isPm) {
      return `${Number(`${beforeCursorCharacters}0${afterCursorCharacters}`.substr(0,2))+12}${minuteValue}`
    }
    return `${beforeCursorCharacters}0${minuteValue}`
  }

  private getTimeByRemovedMinuteCharacter = (inputValue: string, position: number, oldValue: string): string => {
    const beforeCursorCharacters = oldValue.substr(0, position)
    const afterCursorCharacters = inputValue.substr(position)
    return`${beforeCursorCharacters}0${afterCursorCharacters}`
  }

  private getTimeAndPositionByRemovedCharacter = (inputValue: string, position: number, oldValue: string, isPm: boolean) => {
    const result = {
      newPosition: position,
      newValue: oldValue
    }

    // When the cursor position is in the minute
    if (position === 3 || position === 4) {
      return {
        ...result,
        newValue: this.getTimeByRemovedMinuteCharacter(inputValue, position, oldValue)
      }
    }

    // When the cursor position is in the hour
    if (position === 0 || position === 1) {
      return {
        ...result,
        newValue: this.getTimeByRemovedHourCharacter(inputValue, position, isPm)
      }
    }

    return result
  }

  private getTimeAndPositionByAddedCharacter = (addedCharacter: string, inputValue: string, position: number, oldValue: string, isPm: boolean, isNumber: boolean, maxLength: number): {newValue: string, newPosition: number} => {
    const oldValueHourNumber = Number(oldValue.substr(0, 2))
    const {
      isTimeRange
    } = this.props

    const result = {
      newPosition: position,
      newValue: oldValue
    }

    // When the cursor position is out of range
    if (position > maxLength) {
      return {
        ...result,
        newPosition: maxLength
      }
    }

    // When the cursor position is in front of the colon and the input is number
    if ((position === 3) && isNumber) {
      return {
        newValue: this.getTimeByAddedCharacterBeforeColon(addedCharacter, inputValue, position, oldValue),
        newPosition: position + 1
      }
    }

    // When the cursor position is in front of am/ pm and the input is 'a' or 'p'
    if (isTimeRange && (position === 7 || position === 6) && (addedCharacter === 'a' || addedCharacter === 'p')) {
      return {
        newValue: this.getTimeByAddedAmPm(addedCharacter, oldValueHourNumber, oldValue, isPm),
        newPosition: position + 1
      }
    }

    if (isNumber) {
      // When the cursor position is in the minute
      if (position === 4 || position === 5) {
        result.newValue = this.getTimeByAddedMinuteCharacter(addedCharacter, inputValue, position, oldValue)
        if (position === 5) {
          result.newPosition = position + 1
        }
        return result
      }

      // When the cursor position is in the hour
      if (position === 2 || position === 1) {
        result.newValue = this.getTimeByNewAddedHourCharacter(addedCharacter, inputValue, position, oldValue, isPm)
        if (position === 2) {
          result.newPosition = position + 1
        }
        if (position === 1 && (!this.isNumber(addedCharacter) || Number(addedCharacter)>=2) && isTimeRange) {
          result.newPosition = position - 1
        }
        return result
      }
    }

    // if user typed NOT a number, then keep old value & position
    return {
      ...result,
      newPosition: position - 1
    }
  }

  private timeChange: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    const {
      handleChange,
      isTimeRange
    } = this.props

    const maxLength = isTimeRange? 8 : 5

    const oldValue = this.state.value
    const inputEl = event.targetsrc/domain/Inputs/index.ts
    const inputValue = inputEl.value
    const position = inputEl.selectionEnd
    const isType = isTimeRange? inputValue.length > this.formattedTime(oldValue).length : inputValue.length > oldValue.length
    const addedCharacter = isType ? inputValue[position - 1] : null
    const removedCharacter = isType ? null : oldValue[position]
    const beforeRemovedCharacter = isType ? null : inputValue[position-1]
    const isPm = endsWith(inputValue,'pm')
    const isNumber = this.isNumber(addedCharacter)

    this.setState({position, addedCharacter, beforeRemovedCharacter})

    let newValueAndPosition = {
      newPosition: position,
      newValue: oldValue
    }

    if (addedCharacter !== null) {
      newValueAndPosition = this.getTimeAndPositionByAddedCharacter(addedCharacter, inputValue, position, oldValue, isPm, isNumber, maxLength)
    }

    if (removedCharacter !== null && addedCharacter === null) {
      newValueAndPosition = this.getTimeAndPositionByRemovedCharacter(inputValue, position, oldValue, isPm)
    }

    const [validatedTime, validatedCursorPosition] = this.validateTimeAndCursor(
      newValueAndPosition.newValue ? newValueAndPosition.newValue : oldValue,
      oldValue,
      newValueAndPosition.newPosition
    )

    this.setState({value: `${validatedTime}`, cursorPosition: Number(validatedCursorPosition)}, () => {
      handleChange(`${validatedTime}`)
    })

    event.persist()

  }
}

export {
  TimeInput,
  ITimeInputProps
}
