import React from 'react'
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable
} from 'react-beautiful-dnd'

import { Props } from '../../../common'
import { StyledListArea, StyledListItem } from './style'

interface IDraggableListProps<T> {
  /** Droppable area id - this allows us to have more than one per page */
  droppableId: string
  /** useState hook to update the array of items when they have been re-arranged */
  setItems: React.Dispatch<React.SetStateAction<T[]>>
  /** An array of ReactElements that should represent the array of items */
  children: React.ReactElement[]
  /** The data-component-context */
  componentContext?: string
}

const DraggableList = <T extends {}> ({ droppableId, setItems, children, componentContext }: IDraggableListProps<T>) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }
    const { source, destination } = result

    setItems((previousItems) => {
      const newItems = [...previousItems]
      const [removed] = newItems.splice(source.index, 1)
      newItems.splice(destination.index, 0, removed)
      return newItems
    })
  }

  return (
    <span
      data-component-type={Props.ComponentType.DraggableList}
      data-component-context={componentContext}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={droppableId}>
          {(droppableProvided) => (
            <div ref={droppableProvided.innerRef}>
              <StyledListArea>
                {React.Children.map<React.ReactElement, React.ReactElement>(
                  children,
                  (child, index) => {
                    const key = child && child.key ? child.key : index

                    return (
                      <Draggable
                        key={key}
                        draggableId={key.toString()}
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
                    )
                  }
                )}
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
