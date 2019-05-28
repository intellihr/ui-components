import React from 'react'

interface IFilterOption {
  field: 'string'
  operator: 'string'
  value: 'string'
}

export interface IFilterTagProps {
  options: IFilterOption[]
  handleDelete: (option: IFilterOption) => void
}

export class FilterController extends React.PureComponent<IFilterTagProps> {
  public render (): JSX.Element | null {
    const {
      options,
      handleDelete
    } = this.props

    return (
      <div>
        Hello This is Vivian
      </div>
    )
  }
}
