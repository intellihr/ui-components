import React, { useEffect, useState } from 'react'

import { Props, Variables } from '../../../../common'
import {
  StyledFontAwesomeIcon,
  StyledTableCheckboxInput,
  StyledTableCheckboxLabel
} from '../services/style'

enum TableCheckboxInputValue {
  True = 'true',
  False = 'false',
  PartialTrue = 'partialTrue'
}

interface ITableCheckboxInputProps {
  /** Name of the input */
  name: string
  /** Called when the input is changed */
  onChange?: (value: TableCheckboxInputValue) => void
  /** Value of the input */
  value?: TableCheckboxInputValue
  /** If true, sets input to disabled state */
  isDisabled?: boolean
  /** Add autofocus attribute to input */
  autoFocus?: boolean
  /** The component context */
  componentContext?: string
}

const getIcon = (value: TableCheckboxInputValue) => {
  switch (value) {
    case TableCheckboxInputValue.True:
      return <StyledFontAwesomeIcon icon='check' type='solid' size='xsmall' color={Variables.Color.i400}/>
    case TableCheckboxInputValue.PartialTrue:
      return <StyledFontAwesomeIcon icon='minus' type='solid' size='xsmall' color={Variables.Color.i400}/>
    case TableCheckboxInputValue.False:
    default:
      return null
  }
}

const TableCheckboxInput: React.FC<ITableCheckboxInputProps> = ({ name, onChange, value = TableCheckboxInputValue.False, isDisabled, autoFocus, componentContext}) => {
  const [currentValue, setCurrentValue] = useState<TableCheckboxInputValue>(value)
  useEffect(() => {
    if (onChange) {
      onChange(currentValue)
    }
  }, [currentValue])
  useEffect(() => {
    setCurrentValue(value)
  }, [value])
  const handleChange = () => {
    if (currentValue === TableCheckboxInputValue.False) {
      setCurrentValue(TableCheckboxInputValue.True)
    } else {
      setCurrentValue(TableCheckboxInputValue.False)
    }

  }

  return (
    <>
      <StyledTableCheckboxInput
        id={name}
        name={name}
        type='checkbox'
        labelValue={currentValue}
        value={currentValue === TableCheckboxInputValue.True ? 1 : 0}
        onChange={handleChange}
        disabled={isDisabled}
        autoFocus={autoFocus}
        data-component-type={Props.ComponentType.CheckboxInput}
        data-component-context={componentContext}
        checked={currentValue === TableCheckboxInputValue.True}
      />
      <StyledTableCheckboxLabel
        htmlFor={name}
        value={currentValue}
      >
        {getIcon(currentValue)}
      </StyledTableCheckboxLabel>
    </>
  )
}

export {
  TableCheckboxInput,
  TableCheckboxInputValue
}
