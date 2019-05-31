import React, { ChangeEventHandler } from 'react'

import { Props } from '../../../common'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import { InputGroup } from '../../Inputs/InputGroup'
import { TextInput } from '../../Inputs/TextInput'
import { FilterDropdown, IFilterDropdownFilter, ISelectedFilter } from '../FilterDropdown/FilterDropdown'
import { FilterTag, IFilterTagDetail } from '../FilterTag/FilterTag'

export interface IFilterTagProps {
  /** table name of this filter controller */
  tableName: string
  /** filter selection of this filter controller */
  filters: IFilterDropdownFilter[]
  /** filter tags of this filter controller */
  tags: IFilterTagDetail[]
  /** search value of this filter controller */
  searchValue?: string
  /** Callback when a filter is added */
  onFilterAdded: (selectedFilter: ISelectedFilter) => void
  /** Callback when a tag is deleted */
  onTagDeleted: (selectedTag: IFilterTagDetail) => void
  /** Callback when input is added in search bar */
  onSearchUpdated: ChangeEventHandler<HTMLInputElement>
  /** Callback when input is cleared in search bar */
  onSearchCleared: (e: React.MouseEvent<HTMLButtonElement>) => void
  /** The margins around the component */
  margins?: Props.IMargins
}

export class FilterController extends React.PureComponent<IFilterTagProps> {
  public render (): JSX.Element | null {
    const {
      tableName,
      filters,
      onFilterAdded,
      tags,
      onTagDeleted,
      onSearchUpdated,
      onSearchCleared,
      searchValue
    } = this.props

    return (
      <>
        <InputGroup>
          <FilterDropdown
            tableName={tableName}
            toggleComponent={this.filterButton}
            filters={filters}
            onFilterAdded={onFilterAdded}
          />
          <TextInput
            icon={<FontAwesomeIcon type='search' />}
            name='filterControllerSearchInput'
            placeholder={`Search ${tableName}`}
            value={searchValue}
            groupPosition='right'
            handleChange={onSearchUpdated}
            handleClear={onSearchCleared}
          />
        </InputGroup>
        <FilterTag tags={tags} onTagDeleted={onTagDeleted} />
      </>
    )
  }

  private filterButton = ({ toggleMenu, toggleComponentRef, ariaProps }: any ) => {
    return (
      <InputGroup.Button
        onClick={toggleMenu}
        innerRef={toggleComponentRef}
        groupPosition='left'
        {...ariaProps}
      >
        Filter
      </InputGroup.Button>
    )
  }
}
