import React, { useState } from 'react'

import { Props, Variables } from '../../../common'
import { VerticalForm } from '../..//Forms/VerticalForm'
import { Button } from '../../Buttons/Button'
import { SelectInput } from '../../Inputs/SelectInput'
import { IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { Text } from '../../Typographies/Text'
import { OperatorTextWrapper, StyledDropdownMenu } from './style'

interface IAddFilterDropdownMenuProps {
  /** table name that the filters applied to */
  filterMessage?: string
  /** filter selection of this filter dropdown */
  filters: IAddFilterDropdownMenuFilter[]
  /** Callback when a filter is added */
  onFilterAdded: (selectedFilter: IAddedFilter) => void
  /**
   * The parent component that opens the filter dropdown and positions it on the page.
   * The callback is given a toggle menu prop which can be used to toggle the menu as needed.
   */
  toggleComponent: (props: IDropdownMenuToggleComponentProps) => React.ReactElement<any>
  /** The data-component-context */
  componentContext?: string
}

interface IAddFilterDropdownMenuFilter {
  type: 'SINGLE_SELECT' | 'NUMBER'
  fieldName: string
  label: string
  selectOptions: ISelectOption[]
}

interface ISelectOption {
  label: string
  value: string | number
}

interface IAddedFilter {
  filter: IAddFilterDropdownMenuFilter
  addedOption: ISelectOption
}

const AddFilterDropdownMenu: React.FC<IAddFilterDropdownMenuProps> = ({
  filterMessage = 'Show all items where:',
  toggleComponent,
  componentContext,
  filters,
  onFilterAdded
}) => {
  const [filterField, setFilterField] = useState('')
  const [filterValue, setFilterValue] = useState('')

  function getFieldInputOptions (): ISelectOption[] | undefined {
    if (filters) {
      return filters.map((filter: IAddFilterDropdownMenuFilter) => (
        {
          label: filter.label,
          value: filter.fieldName
        })
      )
    }
  }

  function handleFieldChange (option: any) {
    setFilterField(option.value)
  }

  function handleValueChange (option: any) {
    setFilterValue(option.value)
  }

  function valueInputOption (): Array<{ label: string, value: string | number | boolean }> | undefined {
    const selectedFilter = filters.find((filter: IAddFilterDropdownMenuFilter) => filter.fieldName === filterField)

    if (selectedFilter) {
      return selectedFilter.selectOptions
    }
  }

  function applyFilter (closeMenu: () => void) {
    return () => {
      const selectedFilter = filters.find((filter: IAddFilterDropdownMenuFilter) => filter.fieldName === filterField)

      if (selectedFilter && filterValue) {
        const selectedFilterOption = selectedFilter.selectOptions.find((option) => option.value === filterValue)

        onFilterAdded({
          filter: selectedFilter,
          addedOption: selectedFilterOption!
        })
      }
      closeMenu()
      setFilterField('')
      setFilterValue('')
    }
  }

  return (
    <StyledDropdownMenu
      toggleComponent={toggleComponent}
      componentContext={componentContext}
    >
      {({ closeMenu }: { closeMenu: (() => void) }) =>
        <>
          <VerticalForm.Field
            inputName='filterDropdownFieldInput'
            label={filterMessage}
            margins={{ bottom: 0 }}
          >
            <SelectInput
              name='filterDropdownFieldInput'
              value={filterField}
              options={getFieldInputOptions()}
              placeholder='Select a filter'
              isClearable={false}
              handleChange={handleFieldChange}
            />
          </VerticalForm.Field>
          {filterField &&
            <>
              <OperatorTextWrapper>
                <Text
                  isInline={false}
                  color={Variables.Color.n700}
                  type={Props.TypographyType.Small}
                >
                  is
                </Text>
              </OperatorTextWrapper>
              <SelectInput
                name='filterDropdownValueInput'
                value={filterValue}
                options={valueInputOption()}
                placeholder='Select a value'
                isClearable={false}
                handleChange={handleValueChange}
              />
              <Button
                type='neutral'
                disabled={!(filterField && filterValue)}
                onClick={applyFilter(closeMenu)}
              >
                Add Filter
              </Button>
            </>
          }
        </>}
    </StyledDropdownMenu>
  )
}

export {
  IAddFilterDropdownMenuFilter,
  AddFilterDropdownMenu,
  IAddedFilter
}
