import { Props } from '../../../common'
import { Column, SortingRule, TableProps } from 'react-table'

type AlignmentOption = Props.Position.Left | Props.Position.Center | Props.Position.Right
type PageSizeOption = 10 | 25 | 50 | 100

interface IDataTableColumn extends Column {
    /** Alignment for the header on the column */
    headerAlignment?: AlignmentOption

    /** Alignment for the content in the column */
    columnAlignment?: AlignmentOption
}

interface IDataTableState {
    /** Currently applied search filter */
    searchFilter: string | null
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

interface IDataTableProps extends IBaseDataTableProps {
    /** Whether the table can be sorted on its columns */
    sortable?: boolean
    /** Default sorting properties */
    defaultSorted?: SortingRule[]
    /** Whether the table should be paginated */
    showPagination?: boolean
    /** Default page size (only applicable if paginated) */
    defaultPageSize?: PageSizeOption
    /** Whether we should add a search filter - requires pagination  */
    showSearchFilter?: boolean
}

interface IAsyncDataTableProps extends IBaseDataTableProps {
    /** The total number of data entries */
    totalCount: number
    /**  The number of entries to be displayed at once */
    pageSize: number
    /**  Whether the component is waiting for data */
    loading: boolean
    /** The current page index to optionally control the component */
    page?: number
    /**
     * Callback to set new page data when the user navigates to
     * a new page
     * @param pageIndex The new page number the user has selected
     */
    onPageChange: (pageIndex: number) => void
    /** The component context */
    componentContext?: string
}

export {
    AlignmentOption,
    IDataTableColumn,
    IDataTableState,
    IDataTableProps,
    IAsyncDataTableProps
}