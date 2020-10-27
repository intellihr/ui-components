import React from 'react'

import { Props, Variables } from '../../../../../common'
import { Margin } from '../../../../Spacers/Margin'
import { Text } from '../../../../Typographies/Text'

interface ISectionProps {
  /** Name to display */
  name: string
  /** Display an additional component to the right of the name */
  rightComponent?: JSX.Element | JSX.Element[] | string
  /** The data-component-context */
  componentContext?: string
}

const Section: React.FC<ISectionProps> = ({ name, componentContext, rightComponent, children }) => {
  return (
    <div
      data-component-type={Props.ComponentType.VerticalFormSection}
      data-component-context={componentContext}
    >
      <Margin margins={{ bottom: Variables.Spacing.sSmall }}>
        <Text
          type={Props.TypographyType.Heading}
          margins={rightComponent ? { right: Variables.Spacing.sXSmall } : undefined}
        >
          {name}
        </Text>
        {rightComponent}
      </Margin>
      {children}
    </div>
  )
}

export {
  Section,
  ISectionProps
}
