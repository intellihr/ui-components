import React from 'react'

import { Props, Variables } from '../../../common'
import { StyledInlineElement, StyledInlineGroup, StyledInlineGroupWrapper } from './style'

interface IInlineProps {
  /** Component context */
  componentContext?: string
  spacing?: Variables.Spacing
  align?: InlineAlign
}

enum InlineAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

const Inline: React.FC<IInlineProps> = ({
  componentContext,
  spacing = Variables.Spacing.sXSmall,
  align = InlineAlign.Left,
  children
}) => {
  const wrappedChildren = React.Children.map(
    children,
    (child) => child ? <StyledInlineElement spacing={spacing}>{child}</StyledInlineElement> : null
  )

  return (
    <StyledInlineGroupWrapper
      data-component-type={Props.ComponentType.Inline}
      data-component-context={componentContext}
      spacing={spacing}
    >
      <StyledInlineGroup
        spacing={spacing}
        align={align}
      >
        {wrappedChildren}
      </StyledInlineGroup>
    </StyledInlineGroupWrapper>
  )
}

export {
  Inline,
  IInlineProps,
  InlineAlign
}
