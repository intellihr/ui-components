import React from 'react'
import { AnnotatedSection } from './subcomponents/AnnotatedSection'
import { StyledSection } from './style'

export class SectionList extends React.Component {
  public static Section = StyledSection
  public static AnnotatedSection = AnnotatedSection

  public render (): JSX.Element | null {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}
