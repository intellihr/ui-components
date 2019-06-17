import React from 'react'

import { Variables } from '../../../common'
import { IGenericInputProps, TextInput } from '../../Inputs'
import { IOptionListProps, OptionList } from './OptionList'

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
      width,
      options,
      textInputProps,
      handleClick,
      selectedValue,
      maxHeight,
      truncatedText
    } = this.props

    return (
      <>
        <TextInput
          width={width}
          name='filteredOptionListInput'
          value={this.state.query}
          handleChange={this.updateQueryValue}
          margins={{ bottom: Variables.Spacing.sMedium }}
          {...textInputProps}
        />
        <OptionList
          truncatedText={truncatedText}
          selectedValue={selectedValue}
          handleClick={handleClick}
          options={options}
          query={this.state.query}
          maxHeight={maxHeight}
          width={width}
        />
      </>
    )
  }

  private updateQueryValue = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({query: e.target.value})
}

export {
  FilteredOptionList
}
