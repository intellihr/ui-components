import { isNil } from 'lodash'
import React from 'react'

import { Props } from '../../../common/types/props'
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
}

const defaultImageWith = 400

export const EmptyState: React.FC<IEmptyStateProps>  = ({
  primaryMessage = `Oops... We couldn't find anything for this section.`,
  secondaryMessage = `Please speak to your system admin or add information.`,
  componentContext,
  buttonComponent,
  margins,
  image
}) => {
  return (
    <StyledEmptyState
      data-component-type={Props.ComponentType.EmptyState}
      data-component-context={componentContext}
      margins={margins}
    >
      {
        !isNil(primaryMessage) &&
        <StyledPrimaryMessage>
          {primaryMessage}
        </StyledPrimaryMessage>
      }
      {
        !isNil(secondaryMessage) &&
        <StyledSecondaryMessage>
          {secondaryMessage}
        </StyledSecondaryMessage>
      }
      {buttonComponent}
      {
        !isNil(image) && image.url !== '' &&
        <StyledImage
          src={image.url}
          width={image.width ? image.width : defaultImageWith}
        />
      }
    </StyledEmptyState>
  )
}
