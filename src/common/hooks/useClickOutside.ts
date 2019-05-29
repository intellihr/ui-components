import { useEffect, useRef, useState } from 'react'

function useClickOutside<T extends HTMLElement> (initial: boolean, toggleRef: React.RefObject<Element>) {
  const [opened, setOpened] = useState(initial)
  const ref = useRef<T>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleClickOutside: EventListener = (event) => {
    // Only if ref has been assigned to
    if (ref.current) {
      const clickedNode = event.target
      // To keep TypeScript happy
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
    toggleOpened,
    close
  }
}

export {
  useClickOutside
}
