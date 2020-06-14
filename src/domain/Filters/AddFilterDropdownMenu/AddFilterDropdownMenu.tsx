import React, { useState, useMemo, useCallback } from 'react'

import { Props, Variables } from '../../../common'
import { VerticalForm } from '../..//Forms/VerticalForm'
import { Button } from '../../Buttons/Button'
import { SelectInput } from '../../Inputs/SelectInput'
import { IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { Text } from '../../Typographies/Text'
import { OperatorTextWrapper, StyledDropdownMenu } from './style'

interface IAddFilterDropdownMenuProps<FilterValue = string | number> {
  /** The message at the top of the filter dropdown, prompting the user to select a filter  */
  filterMessage?: string
  /** selectable filters for this filter dropdown */
  filters: IAddFilterDropdownMenuFilter<FilterValue>[]
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

interface IAddFilterDropdownMenuFilter<FilterValue = string | number> {
  /** Internal name of the filter, so it can be distinguished from other filters */
  fieldName: string
  /** Human readable name used to show the filter */
  label: string
  /** Text used to describe how the filter is applied. Defaults to 'is' */
  operator?: string
  /** List of select options to fill the select input for the filter with */
  selectOptions?: ISelectOption[]
  /** A custom input component to use to select the filter. Overrides selectOptions */
  customInputComponent?: React.ReactElement<{ onChange: (value: FilterValue) => void }>
}

interface ISelectOption<FilterValue = string | number> {
  label: string
  value: FilterValue
}

interface IAddedFilter<FilterValue = string | number> {
  /** The filter definition that was added */
  filter: IAddFilterDropdownMenuFilter<FilterValue>
  /**
   * The exact option within the filter that was added.
   * For custom input components, the label is 'custom' as
   */
  addedOption: ISelectOption<FilterValue>
}

function AddFilterDropdownMenu<FilterValue = string | number>({
  filterMessage = 'Show all items where:',
  toggleComponent,
  componentContext,
  filters,
  onFilterAdded
}: IAddFilterDropdownMenuProps<FilterValue>) {
  const [selectedFilterName, setSelectedFilterName] = useState<string | null>(null)
  const [filterValue, setFilterValue] = useState<FilterValue | null>(null)

  const filtersOptions = filters.map((filter) => (
    {
      label: filter.label,
      value: filter.fieldName
  }))

  const selectedFilter = filters.find((filter) => filter.fieldName === selectedFilterName)

  const filterValueComponent = useMemo(() => {
    if (selectedFilter) {
      if (selectedFilter.customInputComponent) {

      }

      if (selectedFilter.selectOptions) {
        return (
          <SelectInput
            name='filterDropdownValueInput'
            value={(filterValue ?? '') as string | number}
            options={selectedFilter.selectOptions}
            placeholder='Select a value'
            isClearable={false}
            onChange={setFilterValue}
          />
        )
      }
    }

    return null
  }, [selectedFilter])

  const applyFilter = useCallback(() => {
    if (selectedFilter && filterValue) {

    }
  })


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
