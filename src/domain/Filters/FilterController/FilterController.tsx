import React, {ChangeEventHandler} from 'react'

import { FilterDropdown, IFilterDropdownFilter, ISelectedFilter } from '../FilterDropdown/FilterDropdown'
import { FilterTag, IFilterTagDetail } from '../FilterTag/FilterTag'
import { InputGroup } from '../../Inputs/InputGroup'
import { TextInput } from '../../Inputs/TextInput'
import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'

export interface IFilterTagProps {
  /** table name of this filter controller */
  tableName: string
  /** filter selection of this filter controller */
  filters: IFilterDropdownFilter[]
  /** filter tags of this filter controller */
  tags: IFilterTagDetail[]
  /** Callback when a filter is added */
  handleFilter: (selectedFilter: ISelectedFilter) => void
  /** Callback when a tag is deleted */
  handleTagDelete: (selectedTag: IFilterTagDetail) => void
  /** Callback when input is added in search bar */
  handleSearchChange: ChangeEventHandler<HTMLInputElement>
}

export class FilterController extends React.PureComponent<IFilterTagProps> {
  public render (): JSX.Element | null {
    const {
      tableName,
      filters,
      handleFilter,
      tags,
      handleTagDelete,
      handleSearchChange
    } = this.props

    return (
      <>
        <InputGroup>
          <FilterDropdown
            tableName='training'
            toggleComponent={this.filterButton}
            filters={filters}
            handleFilter={handleFilter}
          />
          <TextInput
            icon={<FontAwesomeIcon type='search' />}
            name='filterControllerSearchInput'
            placeholder={`Search ${tableName}`}
            groupPosition='right'
            handleChange={handleSearchChange}
          />
        </InputGroup>
        <FilterTag tags={tags} handleDelete={handleTagDelete}/>
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
