import React from 'react'

import { Props, Variables } from '../../../common'
import { IDropdownMenuToggleComponentProps } from '../..//Popovers/DropdownMenu'
import { SelectInput } from '../../Inputs/SelectInput'
import { Text } from '../../Typographies/Text'
import { StyledDropdownMenu } from './style'
import { Button } from '../../Buttons/Button'

interface IFilterDropdownOption {
  type?: 'select'
  field: string
  value: string[]
}

export interface IFilterDropdownProps {
  options?: IFilterDropdownOption[]
  handleFilter: (option: ISelectedFilter) => void
  tableName: string
  toggleComponent: (props: IDropdownMenuToggleComponentProps) => React.ReactElement<any>
}

export interface ISelectedFilter {
  type?: 'select'
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
      type: undefined,
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

  private renderDropdown = (closeMenu: any) => {
    const {
      tableName
    } = this.props

    return (
      <>
        <Text
          color={Variables.Color.n700}
          type={Props.TypographyType.Small}
        >
          Show all {tableName} where:
        </Text>
        <SelectInput
          name='filterDropdownFieldInput'
          value={this.state.selectedFilter.field}
          options={this.fieldInputOption}
          placeholder='Select a filter'
          handleChange={this.handleFieldChange}
        />
        {this.filterOptionContent(closeMenu)}
      </>
    )
  }
  private handleFieldChange = (option: any) => {
    const {
      options
    } = this.props

    if (options) {
      const selectedOption = options.find((element: IFilterDropdownOption) => element.field === option.value)

      if (selectedOption) {
        let operator

        if (selectedOption.type === 'select') {
          operator = 'is'
        }

        const updatedFilterOption = {
          operator,
          field: selectedOption.field,
          value: ''
        }

        this.setState({ selectedFilter: updatedFilterOption})
      }
    }
  }

  private get fieldInputOption (): Array<{label: string, value: string}> | undefined {
    const {
      options
    } = this.props

    if (options) {
      return options.map((option: IFilterDropdownOption) => (
        {
          label: option.field,
          value: option.field
        })
      )
    }

    return undefined
  }

  private filterOptionContent = (closeMenu: any): JSX.Element | null => {
    if (this.state.selectedFilter.field) {
      return (
        <>
          <Text
            isInline={false}
            color={Variables.Color.n700}
            type={Props.TypographyType.Small}
          >
            {this.state.selectedFilter.operator}
          </Text>
          <SelectInput
            name='filterDropdownValueInput'
            value={this.state.selectedFilter.value}
            options={this.valueInputOption}
            placeholder='Select a value'
            handleChange={this.handleValueChange}
          />
          <Button
            type='neutral'
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
      options
    } = this.props

    if (options) {
      const selectedOption = options.find((element: IFilterDropdownOption) => element.field === this.state.selectedFilter.field)

      if (selectedOption) {
        return selectedOption.value.map((value: string) => (
          {
            label: value,
            value
          })
        )
      }
    }

    return undefined
  }

  private handleValueChange = (option: any) => {
    this.setState({selectedFilter: { ...this.state.selectedFilter, value: option.value}})
  }

  private applyFilter = (selectedFilter: ISelectedFilter, closeMenu: any) => () => {
    const {
      handleFilter
    } = this.props

    handleFilter(selectedFilter)
    closeMenu()
  }
}
