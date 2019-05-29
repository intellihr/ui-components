import React from 'react'

import { Props, Variables } from '../../../common'
import { VerticalForm } from '../..//Forms/VerticalForm'
import { IDropdownMenuToggleComponentProps } from '../..//Popovers/DropdownMenu'
import { Button } from '../../Buttons/Button'
import { SelectInput } from '../../Inputs/SelectInput'
import { Text } from '../../Typographies/Text'
import { OperatorTextWrapper, StyledDropdownMenu } from './style'

export interface IFilterDropdownProps {
  /** table name the the filters applied to */
  tableName: string
  /** filter selection of this filter dropdown */
  filters: IFilterDropdownFilter[]
  /** Callback when a filter is added */
  handleFilter: (option: ISelectedFilter) => void
  /**
   * The parent component that opens the filter dropdown and positions it on the page.
   * The callback is given a toggle menu prop which can be used to toggle the menu as needed.
   */
  toggleComponent: (props: IDropdownMenuToggleComponentProps) => React.ReactElement<any>
}

interface IFilterDropdownFilter {
  type?: 'select'
  field: string
  selectOptions: string[]
}

export interface ISelectedFilter {
  field: string
  operator?: string
  value?: string
}

export interface IFilterDropdownState {
  selectedFilter: ISelectedFilter
}

export class FilterDropdown extends React.PureComponent<IFilterDropdownProps, IFilterDropdownState> {
  public state: IFilterDropdownState = {
    selectedFilter: {
      field: '',
      operator:  '',
      value: ''
    }
  }

  public render (): JSX.Element {
    const {
      toggleComponent
    } = this.props

    return (
      <StyledDropdownMenu
        toggleComponent={toggleComponent}
      >
        {({closeMenu}) => this.renderDropdown(closeMenu)}
      </StyledDropdownMenu>
    )
  }

  private renderDropdown = (closeMenu: () => void) => {
    const {
      tableName
    } = this.props

    return (
      <>
        <VerticalForm.Field
          inputName='filterDropdownFieldInput'
          label={`Show all ${tableName} where:`}
          showBottomMargin={false}
        >
          <SelectInput
            name='filterDropdownFieldInput'
            value={this.state.selectedFilter.field}
            options={this.fieldInputOptions}
            placeholder='Select a filter'
            handleChange={this.handleFieldChange}
            resetValue=''
          />
        </VerticalForm.Field>
        {this.filterOptionContent(closeMenu)}
      </>
    )
  }

  private get fieldInputOptions (): Array<{label: string, value: string}> | undefined {
    const {
      filters
    } = this.props

    if (filters) {
      return filters.map((filter: IFilterDropdownFilter) => (
        {
          label: filter.field,
          value: filter.field
        })
      )
    }
  }

  private handleFieldChange = (option: any) => {
    const {
      filters
    } = this.props

    const selectedFilter = filters.find((filter: IFilterDropdownFilter) => filter.field === option.value)

    if (selectedFilter) {
      let operator
      if (selectedFilter.type === 'select') {
        operator = 'is'
      }

      this.setState({ selectedFilter: { operator, field: selectedFilter.field } })
    }

    if (!option) {
      this.setState({selectedFilter: { ...this.state.selectedFilter, field: ''}})
    }

  }

  private filterOptionContent = (closeMenu: () => void): JSX.Element | null => {
    if (this.state.selectedFilter.field) {
      return (
        <>
          <OperatorTextWrapper>
            <Text
              isInline={false}
              color={Variables.Color.n700}
              type={Props.TypographyType.Small}
            >
              {this.state.selectedFilter.operator}
            </Text>
          </OperatorTextWrapper>
          <SelectInput
            name='filterDropdownValueInput'
            value={this.state.selectedFilter.value}
            options={this.valueInputOption}
            placeholder='Select a value'
            handleChange={this.handleValueChange}
          />
          <Button
            type='neutral'
            disabled={!(this.state.selectedFilter.field && this.state.selectedFilter.value)}
            onClick={this.applyFilter(this.state.selectedFilter, closeMenu)}
          >
            Add Filter
          </Button>
        </>
      )
    }

    return null
  }

  private get valueInputOption (): Array<{label: string, value: string}> | undefined {
    const {
      filters
    } = this.props

    const selectedFilter= filters.find((filter: IFilterDropdownFilter) => filter.field === this.state.selectedFilter.field)

    if (selectedFilter) {
      return selectedFilter.selectOptions.map((value: string) => (
        {
          label: value,
          value
        })
      )
    }
  }

  private handleValueChange = (option: any) => {
    this.setState({selectedFilter: { ...this.state.selectedFilter, value: option.value}})
  }

  private applyFilter = (selectedFilter: ISelectedFilter, closeMenu: () => void) => () => {
    const {
      handleFilter
    } = this.props

    handleFilter(selectedFilter)
    closeMenu()
  }
}
