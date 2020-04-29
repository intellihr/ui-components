import { IFontAwesomeIconButtonProps } from '../../../../domain/Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { TableRowVariant } from './colors'

enum ColumnAlignment {
  Left = 'left',
  Right = 'right'
}

enum ColumnSize {
  Auto = 'auto',
  Shrink = 'shrink'
}
enum ColumnSortDirection {
  Descending = 'descending',
  Ascending = 'ascending'
}

enum InteractionType {
  Hover = 'hover',
  Swipe = 'swipe'
}

enum TableCheckboxInputValue {
  True = 'true',
  False = 'false',
  PartialTrue = 'partialTrue'
}

interface ISelectedRows {
  [rowId: string]: boolean
}

interface IColumnSorts {
  [columnName: string]: ColumnSortDirection
}

interface IRowProps <T> {
  id: string
  isSelectable?: boolean
  isRemovable?: boolean
  tooltipText?: string
  progress?: number
  variant?: TableRowVariant
  data: T
  contentOverride?: (rowData: T) => JSX.Element[] | JSX.Element
  onClick?: (rowData: T) => void
  actions?: IFontAwesomeIconButtonProps[]
}

interface IColumnProps <T> {
  name: string
  title?: string
  size: ColumnSize
  headerSize?: ColumnSize
  content: (rowData: T) => JSX.Element
  alignment?: ColumnAlignment
  tooltipText?: (rowData: T) => string
}

export {
  ColumnAlignment,
  ColumnSize,
  ColumnSortDirection,
  InteractionType,
  TableCheckboxInputValue,
  ISelectedRows,
  IColumnSorts,
  IRowProps,
  IColumnProps
}
