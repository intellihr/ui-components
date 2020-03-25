import React, {useState} from 'react'

import {Props, Variables} from '../../../common'
import {GridLayout} from '../../Layouts/GridLayout'
import {Text} from '../../Typographies'
import {StyledTable} from './style'
import {TableCheckboxInput, TableCheckboxInputValue} from './subcomponents/TableCheckboxInput'

enum ColumnSize {
  Auto = 'auto',
  Shrink = 'shrink'
}
enum ColumnSortDirection {
  Up = 'up',
  Down = 'down'
}

enum ColumnAlignment {
  Left = 'left',
  Right = 'right'
}

enum RowVariant {
  Neutral = 'neutral',
  Red = 'red'
}

interface ITableProps {
  isMobile: boolean
  rows: IRowProps[]
  columns: IColumnProps[]
  onSelectionChanged: (data: unknown[]) => void
  /** Margins around the highlight area */
  margins?: Props.IMargins
  /** The component context */
  componentContext?: string
}

interface IRowProps {
  isSelectable?: boolean
  isRemovable?: boolean
  tooltipText?: string
  progress?: number
  variant?: RowVariant
  data: unknown
  contentOverride?: (data: unknown) => JSX.Element
}

interface IColumnProps {
  name: string
  title?: string
  size: ColumnSize
  headerSize?: ColumnSize
  content: (data: any[]) => JSX.Element
  sort?: ColumnSortDirection
  onSortChange: () => void
  alignment?: ColumnAlignment
}

const TableHeader: React.FC<{columns: IColumnProps[]}> = ({ columns}) => {
  const selectCheckbox = [{
    size: ColumnSize.Shrink,
    content: (
      <TableCheckboxInput
        name='selectAll'
        value={TableCheckboxInputValue.PartialTrue}
        onChange={(value) => console.log(value)}
      />
      )
  }]

  return (
    <GridLayout
      margins={{top: Variables.Spacing.sMedium, left: Variables.Spacing.sMedium, right: Variables.Spacing.sMedium, bottom: Variables.Spacing.sMedium}}
      verticalAlignment={GridLayout.VerticalAlignment.Middle}
      cells={selectCheckbox.concat(columns.map((column) => ({
        size: column.size,
        content: <Text weight={Variables.FontWeight.fwSemiBold}>{column.title}</Text>
      })))}
    />
  )
}

const Table: React.FC<ITableProps> = ({ rows, columns, onSelectionChanged, margins, componentContext}) => {
  const [selectedData, setSelectedData] = useState<IRowProps[]>([])
  return (
    <StyledTable margins={margins}>
      <TableHeader columns={columns}/>
    </StyledTable>
  )
}

export {
  Table
}
