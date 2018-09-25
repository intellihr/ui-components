import React from 'react'
import { IOptionProps, OptionList } from './OptionList'
import { TextInput } from '../../Inputs/TextInput'
import { IGenericInputProps } from '../../Inputs/Input'

interface IFilteredOptionListProps {
  options: IOptionProps[]
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
      textInputProps
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
