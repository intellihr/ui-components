import { Column, TableProps } from 'react-table'

import { Props } from '../../../common'

type AlignmentOption = Props.Position.Left | Props.Position.Center | Props.Position.Right

interface IDataTableColumn extends Column {
    /** Alignment for the header on the column */
    headerAlignment?: AlignmentOption

    /** Alignment for the content in the column */
    columnAlignment?: AlignmentOption
}

interface IBaseDataTableProps {
    /** Name for this table */
    tableId?: string
    /** List of all row data */
    data: any[]
    /** Column definitions for the table */
    columns: IDataTableColumn[]
    /** Show vertical delineation between columns  */
    showVerticalLines?: boolean
    /** Placeholder replacement for when there is no data  */
    noDataComponent?: JSX.Element

    /**
     * Overrides for react-table props which can be applied to this table.
     * Supports all options from https://www.npmjs.com/package/react-table.
     * Use this if you need to provide any custom alterations to how the table works.
     */
    reactTableOverrides?: Partial<TableProps>
}

export {
    AlignmentOption,
    IBaseDataTableProps,
    IDataTableColumn
}
