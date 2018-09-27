import React from 'react'
import { IOptionListProps, OptionList } from './OptionList'
import { TextInput } from '../../Inputs'
import { IGenericInputProps } from '../../Inputs'

interface IFilteredOptionListProps extends IOptionListProps {
  textInputProps?: IGenericInputProps
}

interface IFilteredOptionListState {
  query: string
}

class FilteredOptionList extends React.PureComponent<IFilteredOptionListProps, IFilteredOptionListState> {
  public state: IFilteredOptionListState = {
    query: ''
  }

  public render (): JSX.Element {
    const {
      options,
      textInputProps,
      handleClick,
      selectedValue
    } = this.props

    return (
      <>
        <TextInput
          {...textInputProps}
          name='filteredOptionListInput'
          value={this.state.query}
          handleChange={this.updateQueryValue}
        />
        <OptionList
          selectedValue={selectedValue}
          handleClick={handleClick}
          options={options}
          query={this.state.query}
        />
      </>
    )
  }

  private updateQueryValue = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({query: e.target.value})
}

export {
  FilteredOptionList
}
