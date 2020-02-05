import React, { useCallback, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import { FontAwesomeIcon } from '../../Icons/FontAwesomeIcon'
import {
  StyledCollapsibleChildren,
  StyledCollapsibleController,
  StyledCollapsibleIcon
} from './style'

enum IToggleType {
  OPEN = 'open',
  CLOSE = 'close'
}

interface ICollapsible {
  /** If the collapsible starts open */
  isOpen?: boolean
  /** Called when the collapsible is toggled */
  onToggle?: (type: IToggleType) => void
  /** The trigger component */
  trigger?: JSX.Element
  /** Children components */
  children?: React.ReactNode
}

const Collapsible: React.FC<ICollapsible> = ({
  isOpen,
  onToggle,
  children,
  trigger
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const onKeyPress = useCallback((event: React.KeyboardEvent<HTMLElement>) => {
    const { key } = event
    if (key === ' ' || key === 'Enter') {
      event.preventDefault()
      if (onToggle) {
        onToggle(!isOpen ? IToggleType.OPEN : IToggleType.CLOSE)
      }
    }
  }, [isOpen])

  const onClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (onToggle) {
      onToggle(!isOpen ? IToggleType.OPEN : IToggleType.CLOSE)
    }
  }, [isOpen])

  return (
    <>
      <StyledCollapsibleController onClick={onClick} onKeyPress={onKeyPress}>
        {trigger}
        <StyledCollapsibleIcon>
          <FontAwesomeIcon icon={isOpen ? 'chevron-up' : 'chevron-down'} type='regular'/>
        </StyledCollapsibleIcon>
      </StyledCollapsibleController>
      <Transition in={isOpen} timeout={isOpen ? 250 : 0}>
        {(state) => (
          <StyledCollapsibleChildren height={ref.current ? ref.current.scrollHeight : 0} transitionState={state}>
            <div ref={ref}>
              {children}
            </div>
          </StyledCollapsibleChildren>
        )}
      </Transition>
    </>
  )
}

const MemoCollapsible = React.memo(Collapsible,(previousProps, nextProps) => {
  return previousProps.isOpen === nextProps.isOpen &&
    previousProps.trigger === nextProps.trigger &&
    previousProps.onToggle === nextProps.onToggle &&
    previousProps.children === nextProps.children
})

export {
  MemoCollapsible as Collapsible,
  IToggleType
}
