import React from 'react'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable
} from 'react-beautiful-dnd'
import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'

interface IDraggableListProps<T> {
  /** The array of items */
  items: T[]
  /** Function to update the array of items when they have been re-arranged */
  setItems: (nodes: T[]) => void
  /** An array of ReactNode that should represent the array of items */
  children: React.ReactNode[]
  /** The data-component-context */
  componentContext?: string
}

interface IListItemProps {
  isDragging: boolean
  children: React.ReactNode
}

const StyledListItem = styled.div<IListItemProps>`
  border: 1px solid ${Variables.Color.n250};
  background-color: ${Variables.Color.n100};
  padding: ${Variables.Spacing.sMedium}px;
  border-radius: ${Variables.Style.borderRadius}px;
  box-shadow: ${Variables.BoxShadow.bsLv1Static};

  ${(props) => props.isDragging && css`
    box-shadow: ${Variables.BoxShadow.bsLv3Active};
    background-color: ${Variables.Color.n150};
    cursor: grabbing !important;
  `}
`

const StyledListArea = styled.div`
  display: grid;
  row-gap: ${Variables.Spacing.sXSmall}px;
`

function DraggableList<T> ({ items, setItems, children, componentContext }: IDraggableListProps<T>) {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }
    const { source, destination } = result

    const newItems = [...items]
    const [removed] = newItems.splice(source.index, 1)
    newItems.splice(destination.index, 0, removed)
    setItems(newItems)
  }

  return (
    <span
      data-component-type={Props.ComponentType.DraggableList}
      data-component-context={componentContext}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(droppableProvided) => (
            <div ref={droppableProvided.innerRef}>
              <StyledListArea>
                {children.map((child, index) => (
                  <Draggable
                    key={index}
                    draggableId={index.toString()}
                    index={index}
                  >
                    {(draggableProvided, snapshot) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        style={draggableProvided.draggableProps.style}
                      >
                        {child && (
                          <StyledListItem
                            isDragging={snapshot.isDragging}
                            data-component-type={Props.ComponentType.DraggableListRow}
                          >
                            {child}
                          </StyledListItem>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </StyledListArea>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </span>
  )
}

export {
  DraggableList
}
