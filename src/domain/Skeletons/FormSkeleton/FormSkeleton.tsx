import React from 'react'

import { Variables } from '../../../common'
import { GridLayout } from '../../Layouts/GridLayout'
import { BlockSkeleton } from '../BlockSkeleton'

interface IFormSkeletonProps {
  variant?: FormSkeletonVariant
  showButtonSkeleton?: boolean
}

enum FormSkeletonVariant {
  OneColumn = 'one_column',
  TwoColumn = 'two_column'
}

const FormSkeleton: React.FC<IFormSkeletonProps> & { Variant: typeof FormSkeletonVariant } = ({
  variant = FormSkeletonVariant.OneColumn,
  showButtonSkeleton = true }
) => {
  if (variant === FormSkeletonVariant.TwoColumn) {
    return (
      <>
        <GridLayout
          gutterMarginX={Variables.Spacing.s2XLarge}
          verticalAlignment={GridLayout.VerticalAlignment.Top}
        >
          <GridLayout.Cell size={{ min: 6 }}>
            <FormFieldSkeleton />
          </GridLayout.Cell>
          <GridLayout.Cell size={{ min: 6 }}>
            <FormFieldSkeleton />
          </GridLayout.Cell>
          <GridLayout.Cell size={{ min: 6 }}>
            <FormFieldSkeleton />
          </GridLayout.Cell>
          <GridLayout.Cell size={{ min: 6 }}>
            <FormFieldSkeleton />
          </GridLayout.Cell>
          <GridLayout.Cell size={{ min: 6 }}>
            <FormFieldSkeleton />
          </GridLayout.Cell>
          <GridLayout.Cell size={{ min: 6 }}>
            <FormFieldSkeleton />
          </GridLayout.Cell>
        </GridLayout>

        {showButtonSkeleton &&
        <BlockSkeleton
          width={120}
          height={40}
          margins={{top: Variables.Spacing.sXSmall}}
        />
        }
      </>
    )
  }

  return (
      <>
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        {showButtonSkeleton &&
          <BlockSkeleton
            width={120}
            height={40}
            margins={{top: Variables.Spacing.sXSmall}}
          />
        }
      </>
    )
}

FormSkeleton.Variant = FormSkeletonVariant

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
