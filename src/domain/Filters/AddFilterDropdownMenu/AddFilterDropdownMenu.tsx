import React, { useState } from 'react'

import { Props, Variables } from '../../../common'
import { VerticalForm } from '../..//Forms/VerticalForm'
import { IDropdownMenuToggleComponentProps } from '../..//Popovers/DropdownMenu'
import { Button } from '../../Buttons/Button'
import { SelectInput } from '../../Inputs/SelectInput'
import { Text } from '../../Typographies/Text'
import { IFilterTagDetail } from '../FilterTag/FilterTag'
import { OperatorTextWrapper, StyledDropdownMenu } from './style'

export interface IAddFilterDropdownMenuProps {
  /** table name that the filters applied to */
  filterMessage: string
  /** filter selection of this filter dropdown */
  filters: IAddFilterDropdownMenuFilter[]
  /** Callback when a filter is added */
  onFilterAdded: (selectedFilter: IFilterTagDetail) => void
  /**
   * The parent component that opens the filter dropdown and positions it on the page.
   * The callback is given a toggle menu prop which can be used to toggle the menu as needed.
   */
  toggleComponent: (props: IDropdownMenuToggleComponentProps) => React.ReactElement<any>
  /** The data-component-context */
  componentContext?: string
  /** Margins around the component */
  margins?: Props.IMargins
}

export interface IAddFilterDropdownMenuFilter {
  type: 'SINGLE_SELECT' | 'NUMBER'
  fieldName: string
  selectOptions: Array<{
    label: string
    value: string | number | number
  }>
}

interface SelectOption {
  label: string
  value: string | number
}

export const AddFilterDropdownMenu: React.FC<IAddFilterDropdownMenuProps> = ({
  toggleComponent,
  componentContext,
  filterMessage,
  filters,
  onFilterAdded,
  margins
}) => {
  const [fieldName, setFieldName] = useState('')
  const [operator, setOperator] = useState('')
  const [value, setValue] = useState('')

  function getFieldInputOptions(): Array<SelectOption> | undefined {
    if (filters) {
      return filters.map((filter: IAddFilterDropdownMenuFilter) => (
        {
          label: filter.fieldName,
          value: filter.fieldName
        })
      )
    }
  }

  function handleFieldChange(option: any) {
    const selectedFilter = filters.find((filter: IAddFilterDropdownMenuFilter) => filter.fieldName === option.value)

    if (selectedFilter) {
      let operator
      if (selectedFilter.type === 'SINGLE_SELECT') {
        operator = 'is'

        setOperator(operator)
      }
    }

    setFieldName(option.value)
  }

  function handleValueChange(option: any) {
    setValue(option.value)
  }

  function valueInputOption(): Array<{ label: string, value: string | number | boolean }> | undefined {
    const selectedFilter = filters.find((filter: IAddFilterDropdownMenuFilter) => filter.fieldName === fieldName)

    if (selectedFilter) {
      return selectedFilter.selectOptions
    }
  }

  function applyFilter(closeMenu: () => void) {
    return () => {
      onFilterAdded({ fieldName, operator, value })
      closeMenu()
      setFieldName('')
      setOperator('')
      setValue('')
    }
  }

  return (
    <StyledDropdownMenu
      margins={margins}
      toggleComponent={toggleComponent}
      componentContext={componentContext}
    >
      {({ closeMenu }) =>
        <>
          <VerticalForm.Field
            inputName='filterDropdownFieldInput'
            label={filterMessage}
            showBottomMargin={false}
          >
            <SelectInput
              name='filterDropdownFieldInput'
              value={fieldName}
              options={getFieldInputOptions()}
              placeholder='Select a filter'
              handleChange={handleFieldChange}
            />
          </VerticalForm.Field>
          {fieldName &&
            <>
              <OperatorTextWrapper>
                <Text
                  isInline={false}
                  color={Variables.Color.n700}
                  type={Props.TypographyType.Small}
                >
                  {operator}
                </Text>
              </OperatorTextWrapper>
              <SelectInput
                name='filterDropdownValueInput'
                value={value}
                options={valueInputOption()}
                placeholder='Select a value'
                handleChange={handleValueChange}
              />
              <Button
                type='neutral'
                disabled={!(fieldName && value)}
                onClick={applyFilter(closeMenu)}
              >
                Add Filter
          </Button>
            </>
          }
        </>
      }
    </StyledDropdownMenu>
  )
}
