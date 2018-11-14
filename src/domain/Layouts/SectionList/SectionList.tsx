import React from 'react'
import { AnnotatedSection } from './subcomponents/AnnotatedSection'
import { TitledSection } from './subcomponents/TitledSection'
import { Section, StyledSection, UnStyledSection } from './style'

export class SectionList extends React.Component {
  public static Section = StyledSection
  public static UnStyledSection = UnStyledSection
  public static AnnotatedSection = AnnotatedSection
  public static TitledSection = TitledSection

  public render (): JSX.Element | null {
    const { children } = this.props
    return (
      <Section>
        {children}
      </Section>
    )
  }
}
