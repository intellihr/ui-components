import React from 'react'

import { FontAwesomeIconButton, IFontAwesomeIconButtonProps } from '../../../../domain/Buttons/FontAwesomeIconButton/FontAwesomeIconButton'
import { StyledFontAwesomeIconButtonWrapper } from '../services/style'

const getActionsIconButtonGroup = (actions?: IFontAwesomeIconButtonProps[], name?: string) => {
  if (actions) {
    return (
      <div>
        {actions.map((actionProps, index) => (
          <StyledFontAwesomeIconButtonWrapper key={`actions-${name}-${index}`}>
            <FontAwesomeIconButton {...actionProps}/>
          </StyledFontAwesomeIconButtonWrapper>
        ))}
      </div>
    )
  }

  return null
}

export {
  getActionsIconButtonGroup
}
