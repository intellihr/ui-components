import React from 'react'

import { Props, Variables } from '../../../common'
import { VerticalForm } from '../..//Forms/VerticalForm'
import { IDropdownMenuToggleComponentProps } from '../..//Popovers/DropdownMenu'
import { Button } from '../../Buttons/Button'
import { SelectInput } from '../../Inputs/SelectInput'
import { Text } from '../../Typographies/Text'
import { IFilterTagDetail } from '../FilterTag/FilterTag'
import { OperatorTextWrapper, StyledDropdownMenu } from './style'

export interface IFilterDropdownProps {
  /** table name that the filters applied to */
  filterMessage: string
  /** filter selection of this filter dropdown */
  filters: IFilterDropdownFilter[]
  /** Callback when a filter is added */
  onFilterAdded: (selectedFilter: IFilterTagDetail) => void
  /**
   * The parent component that opens the filter dropdown and positions it on the page.
   * The callback is given a toggle menu prop which can be used to toggle the menu as needed.
   */
  toggleComponent: (props: IDropdownMenuToggleComponentProps) => React.ReactElement<any>
}

export interface IFilterDropdownFilter {
  type: 'SINGLE_SELECT' | 'NUMBER'
  fieldName: string
  selectOptions: Array<{
    label: string
    value: string | number | number
  }>
}

export interface IFilterDropdownState {
  fieldName: string
  operator: string
  value: string
}

export class FilterDropdown extends React.PureComponent<IFilterDropdownProps, IFilterDropdownState> {
  public static defaultProps: Partial<IFilterDropdownProps> = {
    filterMessage: 'Show all items where:'
  }

  public state: IFilterDropdownState = {
    fieldName: '',
    operator:  '',
    value: ''
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
      filterMessage
    } = this.props

    return (
      <>
        <VerticalForm.Field
          inputName='filterDropdownFieldInput'
          label={filterMessage}
          showBottomMargin={false}
        >
          <SelectInput
            name='filterDropdownFieldInput'
            value={this.state.fieldName}
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
          label: filter.fieldName,
          value: filter.fieldName
        })
      )
    }
  }

  private handleFieldChange = (option: any) => {
    const {
      filters
    } = this.props

    const selectedFilter = filters.find((filter: IFilterDropdownFilter) => filter.fieldName === option.value)

    if (selectedFilter) {
      let operator
      if (selectedFilter.type === 'SINGLE_SELECT') {
        operator = 'is'

        this.setState({ operator })
      }
    }

    this.setState({ fieldName: option.value })
  }

  private filterOptionContent = (closeMenu: () => void): JSX.Element | null => {
    if (this.state.fieldName) {
      return (
        <>
          <OperatorTextWrapper>
            <Text
              isInline={false}
              color={Variables.Color.n700}
              type={Props.TypographyType.Small}
            >
              {this.state.operator}
            </Text>
          </OperatorTextWrapper>
          <SelectInput
            name='filterDropdownValueInput'
            value={this.state.value}
            options={this.valueInputOption}
            placeholder='Select a value'
            handleChange={this.handleValueChange}
          />
          <Button
            type='neutral'
            disabled={!(this.state.fieldName && this.state.value)}
            onClick={this.applyFilter(closeMenu)}
          >
            Add Filter
          </Button>
        </>
      )
    }

    return null
  }

  private get valueInputOption (): Array<{label: string, value: string | number | boolean}> | undefined {
    const {
      filters
    } = this.props

    const selectedFilter = filters.find((filter: IFilterDropdownFilter) => filter.fieldName === this.state.fieldName)

    if (selectedFilter) {
      return selectedFilter.selectOptions
    }
  }

  private handleValueChange = (option: any) => {
    this.setState({ value: option.value })
  }

  private applyFilter = (closeMenu: () => void) => () => {
    const {
      onFilterAdded
    } = this.props

    onFilterAdded(this.state)
    closeMenu()
    this.setState({ fieldName: '', operator:  '', value: '' })
  }
}
