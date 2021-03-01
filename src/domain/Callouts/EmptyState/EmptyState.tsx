import isNil from 'lodash/isNil'
import React from 'react'

import { Props } from '../../../common/types/props'
import { useTranslateFunction } from '../../Defaults/Defaults/Defaults'
import { StyledEmptyState, StyledImage, StyledPrimaryMessage, StyledSecondaryMessage } from './style'

export interface IEmptyStateProps {
  /** The message to be shown in the first line as a title/heading */
  primaryMessage?: string | null
  /** The message to be shown in the second line as a sub title */
  secondaryMessage?: string | null
  /** This will accept the button component */
  buttonComponent?: JSX.Element
  /** The image to render */
  image?: {
    url: string
    width?: number
  }
  /** The margins around the component */
  margins?: Props.IMargins
  /** The data-component-context */
  componentContext?: string
  /** Whether the background of the component is transparent */
  isBackgroundTransparent?: boolean
}

const defaultImageWidth = 400

export const EmptyState: React.FC<IEmptyStateProps>  = ({
  primaryMessage,
  secondaryMessage,
  componentContext,
  buttonComponent,
  margins,
  image,
  isBackgroundTransparent
}) => {
  const t = useTranslateFunction()

  const i18nPrimaryMessage = primaryMessage || t('emptyState.primaryMessage', {defaultValue: `Oops... We couldn't find anything for this section.`})
  const i18nSecondaryMessage = secondaryMessage || t('emptyState.secondaryMessage', {defaultValue: `Please speak to your system admin or add information.`})

  return (
    <StyledEmptyState
      data-component-type={Props.ComponentType.EmptyState}
      data-component-context={componentContext}
      margins={margins}
      isBackgroundTransparent={isBackgroundTransparent}
    >
      {
        primaryMessage !== null &&
        <StyledPrimaryMessage>
          {i18nPrimaryMessage}
        </StyledPrimaryMessage>
      }
      {
        secondaryMessage !== null &&
        <StyledSecondaryMessage>
          {i18nSecondaryMessage}
        </StyledSecondaryMessage>
      }
      {buttonComponent}
      {
        !isNil(image) && image.url !== '' &&
        <StyledImage
          src={image.url}
          width={image.width ? image.width : defaultImageWidth}
        />
      }
    </StyledEmptyState>
  )
}
