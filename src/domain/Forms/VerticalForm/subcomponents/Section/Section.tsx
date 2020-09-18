import React from 'react'

import { Props, Variables } from '../../../../../common'
import { Text } from '../../../../Typographies/Text'
import { StyledSection } from './style'

interface ISectionProps {
  /** Name of the icon */
  name: string
  /** The data-component-context */
  componentContext?: string
}

const Section: React.FC<ISectionProps> = ({ name, componentContext, children }) => {
  return (
    <StyledSection
      data-component-type={Props.ComponentType.VerticalFormSection}
      data-component-context={componentContext}
    >
      <Text
        type={Props.TypographyType.Heading}
        margins={{ bottom: Variables.Spacing.sSmall }}
        isInline={false}
      >
        {name}
      </Text>
      {children}
    </StyledSection>
  )
}

export {
  Section,
  ISectionProps
}
