import React, { useCallback, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import { FontAwesomeIcon } from '../../../Icons/FontAwesomeIcon'
import {
  CollapsibleChildrenWrapper,
  CollapsibleControllerWrapper,
  CollapsibleIconWrapper
} from './style'

interface ICollapsible {
  /** If the collapsible starts open */
  isOpen?: boolean
  /** Called when the collapsible is toggled */
  onToggle?: (type: 'open' | 'close') => void
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
  const [open, setOpen] = useState( isOpen || false)
  const ref = useRef<HTMLDivElement>(null)

  const onKeyPress = useCallback((event: React.KeyboardEvent<HTMLElement>) => {
    const { key } = event
    if (key === ' ' || key === 'Enter') {
      event.preventDefault()
      if (onToggle) {
        onToggle(!open ? 'open' : 'close')
      }
      setOpen(!open)
    }
  }, [open])

  const onClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (onToggle) {
      onToggle(!open ? 'open' : 'close')
    }
    setOpen(!open)
  }, [open])

  return (
    <>
      <CollapsibleControllerWrapper onClick={onClick} onKeyPress={onKeyPress} isOpen={open}>
        {trigger}
        <CollapsibleIconWrapper>
          <FontAwesomeIcon icon={open ? 'chevron-up' : 'chevron-down'} type='regular'/>
        </CollapsibleIconWrapper>
      </CollapsibleControllerWrapper>
      <Transition in={open} timeout={open ? 250 : 0}>
        {(state) => (
          <CollapsibleChildrenWrapper height={ref.current ? ref.current.scrollHeight : 0} transitionState={state}>
            <div ref={ref}>
              {children}
            </div>
          </CollapsibleChildrenWrapper>
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
  MemoCollapsible as Collapsible
}
