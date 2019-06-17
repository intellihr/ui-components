import { Props } from '../../common'

interface ISkeletonProps {
  /** If true, will display the skeleton */
  showSkeleton: boolean,
  /** Additional class names for the parent container */
  className?: string
  /** The margins around the component */
  margins?: Props.IMargins
}

// Explanation in README.md
const workaround = {}

export {
  ISkeletonProps,
  workaround
}
