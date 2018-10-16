import React from 'react'
import { toLower, map } from 'lodash'
import { Text } from '../../Typographies/Text'
import { Props } from '../../../common'

interface IValueFilter {
  kind: 'valueFilter'
  /** String paths within the data to filter over */
  paths: string[]
  /** Case sensitive filtering? */
  caseSensitive: boolean
  /** Value to filter the above paths by */
  filterValue?: string
}

// Support multiple filter types in future
type Filter = IValueFilter

type DataFetchCallback = (args: IFilteredListProps) => any[]

type RenderCallback = (args: IFilteredListProps | { row: any, filteredRows: any[], index: }) => JSX.Element | null | undefined

interface IFilteredListProps {
  /** Array of data to filter, or a promise callback for filter data */
  data: any[] | DataFetchCallback
  /** List of filters to apply to the data */
  filters: Filter[]
  /** Row rendering callback */
  row?: RenderCallback
  /** Body rendering callback  */
  body?: RenderCallback
}

interface IFilteredListState {
  /** Array of data after fetching */
  data: any[]
  /** Array of filtered data */
  filteredData: any[]
}

class FilteredList extends React.PureComponent<IFilteredListProps, IFilteredListState> {
  public state: IFilteredListState = {
    data: [],
    filteredData: []
  }

  public render (): JSX.Element {
    return (
      <>
        {this.rowComponents}
        {this.bodyComponent}
      </>
    )
  }

  private get rowComponents (): JSX.Element | null {
    const {
      row: rowCallback
    } = this.props
    const {
      filteredData
    } = this.state


    if (!rowCallback) {
      return null
    }



    return map(
      filteredData,
      (rowData, index) => this.props.row({ ...this.props, row: rowData, this.state.filteredData }))
  }


  public hideOption = (optionText: string, query?: string) => {
    if (query !== this.hiddenOptions.query) {
      this.hiddenOptions = {
        query: query || '',
        hidden: 0
      }
    }

    if (query && !toLower(optionText).includes(toLower(query))) {
      this.hiddenOptions.hidden++

      return true
    }

    return false
  }

  get options (): JSX.Element[] {
    const {
      options,
      query,
      selectedValue,
      truncatedText
    } = this.props

    return map(options, (option, idx) => {
      const {
        leftComponent,
        rightComponent,
        text,
        value
      } = option

      const callback = () => this.onClickCallback(option)

      return (
        <OptionListButton
          key={idx}
          onClick={callback}
          truncatedText={truncatedText}
          selected={value === selectedValue}
          hidden={this.hideOption(option.text, query)}
        >
          {leftComponent && <OptionListLeftComponent>{leftComponent}</OptionListLeftComponent>}
          {text}
          {rightComponent && <OptionListRightComponent>{rightComponent}</OptionListRightComponent>}
        </OptionListButton>
      )
    })
  }

  get content (): JSX.Element[] | JSX.Element {
    const {
      options
    } = this.props

    if (options.length === 0) {
      return (
        <StyledEmptyState>
          <Text type={Props.TypographyType.Small}>
            Sorry, We couldn't find any options
          </Text>
        </StyledEmptyState>
      )
    }

    const filteredOptions = this.options

    if (this.hiddenOptions.hidden === options.length) {
      return (
        <StyledEmptyState>
          <Text type={Props.TypographyType.Small}>
            Unfortunately, we couldn't find anything from your search
          </Text>
        </StyledEmptyState>
      )
    }

    return filteredOptions
  }

  private onClickCallback = (option: IOptionProps) => {
    const {
      handleClick
    } = this.props

    if (option.onClick) {
      return option.onClick(option)
    }

    return handleClick(option)
  }
}

export {
  OptionList,
  OptionClickCallback,
  IOptionListProps,
  IOptionProps
}
