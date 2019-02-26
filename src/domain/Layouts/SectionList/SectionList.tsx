import React from 'react'

import { StyledSection, StyledSectionWrapper, StyledUnstyledSection } from './style'
import { AnnotatedSection } from './subcomponents/AnnotatedSection'
import { TitledSection } from './subcomponents/TitledSection'

export class SectionList extends React.Component {
  public static Section = StyledSection
  public static UnstyledSection = StyledUnstyledSection
  public static AnnotatedSection = AnnotatedSection
  public static TitledSection = TitledSection

  public render (): JSX.Element | null {
    const { children } = this.props
    return (
      <StyledSectionWrapper>
        {children}
      </StyledSectionWrapper>
    )
  }
}