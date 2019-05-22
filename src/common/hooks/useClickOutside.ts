import { RefObject, useEffect, useRef, useState } from 'react'

function useClickOutside<T extends HTMLElement> (initial: boolean, toggleRef: RefObject<Element>) {
  const [opened, setOpened] = useState(initial)
  const ref = useRef<T>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClickOutside: EventListener = (event) => {
    // only if ref has been assigned to
    if (ref.current) {
      const clickedNode = event.target
      // to keep typescript happy
      if (clickedNode instanceof Node) {
        if (!ref.current.contains(clickedNode) && !(clickedNode === toggleRef.current)) {
          close()
        }
      }
    }
  }

  function close () {
    setOpened(false)
  }

  function toggleOpened () {
    setOpened(!opened)
  }

  return {
    ref,
    opened,
    toggleOpened
  }
}

export {
  useClickOutside
}
