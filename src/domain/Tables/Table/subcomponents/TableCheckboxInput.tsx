import React, { useEffect, useState } from 'react'

import { Props, Variables } from '../../../../common'
import {
  StyledFontAwesomeIcon,
  StyledTableCheckboxInput,
  StyledTableCheckboxLabel
} from '../services/style'
import { TableCheckboxInputValue } from '../services/types'

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
  /** If true, show hover style when user hover on table row */
  hasStyledOnRowHovered?: boolean
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

const TableCheckboxInput: React.FC<ITableCheckboxInputProps> = ({
  name,
  onChange,
  value = TableCheckboxInputValue.False,
  isDisabled,
  autoFocus,
  componentContext,
  hasStyledOnRowHovered = true
}) => {
  const handleChange = () => {
    if (onChange) {
      onChange((value === TableCheckboxInputValue.True) ? TableCheckboxInputValue.False : TableCheckboxInputValue.True)
    }
  }

  return (
    <>
      <StyledTableCheckboxInput
        id={name}
        name={name}
        type='checkbox'
        labelValue={value}
        value={value === TableCheckboxInputValue.True ? 1 : 0}
        onChange={handleChange}
        disabled={isDisabled}
        autoFocus={autoFocus}
        data-component-type={Props.ComponentType.CheckboxInput}
        data-component-context={componentContext}
        checked={value === TableCheckboxInputValue.True}
      />
      <StyledTableCheckboxLabel
        htmlFor={name}
        value={value}
        hasStyledOnRowHovered={hasStyledOnRowHovered}
      >
        {getIcon(value)}
      </StyledTableCheckboxLabel>
    </>
  )
}

export {
  TableCheckboxInput,
  TableCheckboxInputValue
}
