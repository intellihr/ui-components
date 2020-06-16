import React, { useCallback, useMemo, useState } from 'react'

import { Props, Variables } from '../../../common'
import { Button } from '../../Buttons/Button'
import { VerticalForm } from '../../Forms/VerticalForm'
import { SelectInput } from '../../Inputs/SelectInput'
import { IDropdownMenuToggleComponentProps } from '../../Popovers/DropdownMenu'
import { Text } from '../../Typographies/Text'
import { OperatorTextWrapper, StyledDropdownMenu } from './style'

interface IAddFilterDropdownMenuProps<FilterValue = string | number> {
  /** The message at the top of the filter dropdown, prompting the user to select a filter  */
  filterMessage?: string
  /** selectable filters for this filter dropdown */
  filters: Array<IAddFilterDropdownMenuFilter<FilterValue>>
  /** Callback when a filter is added */
  onFilterAdded: (selectedFilter: IAddedFilter<FilterValue>) => void
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
  selectOptions?: Array<ISelectOption<FilterValue>>
  /** A custom input component to use to select the filter. Overrides selectOptions */
  customInputComponent?: React.ComponentType<{ onChange: (value: FilterValue | null) => void, value: FilterValue | null}>
  /** @deprecated This is unused and has no effect */
  type?: 'SINGLE_SELECT' | 'NUMBER'
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
   * For custom input components, the label is 'custom'
   * as we don't want to break the interface
   */
  addedOption: ISelectOption<FilterValue>
}

interface IAddFilterDropdownMenuContentProps<FilterValue = string | number> {
  filterMessage?: string
  filters: Array<IAddFilterDropdownMenuFilter<FilterValue>>
  onFilterAdded: (selectedFilter: IAddedFilter<FilterValue>) => void
  closeMenu: () => void
}

function AddFilterDropdownMenu<FilterValue = string | number> ({
  filterMessage = 'Show all items where:',
  toggleComponent,
  componentContext,
  filters,
  onFilterAdded
}: IAddFilterDropdownMenuProps<FilterValue>) {
  return (
    <StyledDropdownMenu
      toggleComponent={toggleComponent}
      componentContext={componentContext}
    >
      {({ closeMenu }: { closeMenu: (() => void) }) => (
        <DropdownMenuContent<FilterValue>
          closeMenu={closeMenu}
          filterMessage={filterMessage}
          filters={filters}
          onFilterAdded={onFilterAdded}
        />
      )}
    </StyledDropdownMenu>
  )
}

function DropdownMenuContent<FilterValue = string | number> (
  {
    closeMenu,
    filterMessage,
    filters,
    onFilterAdded
  }: IAddFilterDropdownMenuContentProps<FilterValue>) {
  const [selectedFilterName, setSelectedFilterName] = useState<string | null>(null)
  const [filterValue, setFilterValue] = useState<FilterValue | null>(null)

  const filtersOptions = filters.map((filter) => (
    {
      label: filter.label,
      value: filter.fieldName
    }))

  const selectedFilter = filters.find((filter) => filter.fieldName === selectedFilterName)
  const onChange = useCallback((value) => setFilterValue(value), [setFilterValue])

  const filterValueComponent = useMemo(() => {
    if (selectedFilter) {
      if (selectedFilter.customInputComponent) {
        const CustomInputComponent = selectedFilter.customInputComponent
        return (
          <CustomInputComponent
            value={filterValue}
            onChange={setFilterValue}
          />
        )
      }

      if (selectedFilter.selectOptions) {
        return (
          <SelectInput
            name='filterDropdownValueInput'
            value={(filterValue ?? '') as string | number}
            options={selectedFilter.selectOptions as unknown as ISelectOption[]}
            placeholder='Select a value'
            isClearable={false}
            onChange={onChange}
          />
        )
      }
    }

    return null
  }, [selectedFilter, filterValue])

  const handleFilterSelectChange = useCallback((option) => setSelectedFilterName(option?.value), [setSelectedFilterName])

  const applyFilter = useCallback(
     () => {
      if (selectedFilter && filterValue) {

        const selectedFilterOption = selectedFilter.selectOptions?.find((option) => option.value === filterValue) ?? {
           value :filterValue,
           label: 'custom'
        }

        onFilterAdded({
          filter: selectedFilter,
          addedOption: selectedFilterOption!
        })
      }

      closeMenu()
      setSelectedFilterName(null)
      setFilterValue(null)
    }
  , [selectedFilter, filterValue, setSelectedFilterName, setFilterValue])

  return (
    <>
      <VerticalForm.Field
        inputName='filterDropdownFieldInput'
        label={filterMessage}
        margins={{ bottom: 0 }}
      >
        <SelectInput
          name='filterDropdownFieldInput'
          value={selectedFilterName ?? undefined}
          options={filtersOptions}
          placeholder='Select a filter'
          isClearable={false}
          handleChange={handleFilterSelectChange}
        />
      </VerticalForm.Field>
      {selectedFilter &&
      <>
        <OperatorTextWrapper>
          <Text
            isInline={false}
            color={Variables.Color.n700}
            type={Props.TypographyType.Small}
          >
            {selectedFilter.operator ?? 'is'}
          </Text>
        </OperatorTextWrapper>
        {filterValueComponent}
        <Button
          type='neutral'
          disabled={!(selectedFilter && filterValue)}
          onClick={applyFilter}
        >
          Add Filter
        </Button>
      </>
      }
    </>
  )
}

export {
  IAddFilterDropdownMenuFilter,
  AddFilterDropdownMenu,
  IAddedFilter
}
