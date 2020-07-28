import React, { ReactElement } from 'react'

import { Props, Variables } from '../../../common'
import { StyledInlineElement, StyledInlineGroup, StyledInlineGroupWrapper } from './style'
import { Item } from './Item'

interface IInlineProps {
  /** Component context */
  componentContext?: string
  spacing?: Variables.Spacing
  align?: Align
  collapse?: boolean
  margins?: Props.IMargins
}

enum Align {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

const Inline: React.FC<IInlineProps> & {Align: typeof Align, Item: typeof Item} = ({
  componentContext,
  spacing = Variables.Spacing.sXSmall,
  align = Align.Left,
  collapse= false,
  margins,
  children
}) => {
  const wrappedChildren = React.Children.map(
    children,
    (child: any) => {
      let childProps = {}

      if (child && child?.type && child?.type?.name === Item.name) {
        childProps = child?.props
      }

      return child ? <StyledInlineElement {...childProps} spacing={spacing}>{child}</StyledInlineElement> : null
    }
  )

  return (
    <StyledInlineGroupWrapper
      data-component-type={Props.ComponentType.Inline}
      data-component-context={componentContext}
      spacing={spacing}
      margins={margins}
    >
      <StyledInlineGroup
        spacing={spacing}
        align={align}
        collapse={collapse}
      >
        {wrappedChildren}
      </StyledInlineGroup>
    </StyledInlineGroupWrapper>
  )
}

Inline.Align = Align
Inline.Item = Item

export {
  Inline,
  IInlineProps,
  Align
}
