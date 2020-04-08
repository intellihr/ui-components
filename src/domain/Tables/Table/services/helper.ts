import { useEffect, useRef } from 'react'

const usePrevious = <T extends {}>(value: T): T => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current as T
}

const handleHovered = (value: boolean, setHasHovered: (value: boolean) => void) => () => setHasHovered(value)

export {
  usePrevious,
  handleHovered
}
