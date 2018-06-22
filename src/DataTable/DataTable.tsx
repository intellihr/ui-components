import React from 'react'
import ReactTable from 'react-table'

const style = require('./DataTable.scss')

export interface DataTableProps {
    data: Array<Object>
    columns: Array<Object>
  }

export class DataTable extends React.Component<DataTableProps> {

  public render (): JSX.Element {
    const {
      data,
      columns
    } = this.props

    return <ReactTable
      data={data}
      columns={columns}
    />
  }
}
