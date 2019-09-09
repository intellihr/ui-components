import React from 'react'

import { Variables } from '../../../common'
import { BlockSkeleton } from '../BlockSkeleton'

const FormSkeleton: React.FC = () => {
    return (
      <>
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <BlockSkeleton
          width={120}
          height={40}
          margins={{ top: Variables.Spacing.sXSmall }}
        />
      </>
    )
}

const FormFieldSkeleton: React.FC = () => {
  return (
    <>
      <BlockSkeleton
        width={200}
        height={24}
        margins={{ bottom: Variables.Spacing.sXSmall }}
      />
      <BlockSkeleton
        height={40}
        margins={{ bottom: Variables.Spacing.sLarge }}
      />
    </>
  )
}

export {
  FormSkeleton,
  FormFieldSkeleton
}
