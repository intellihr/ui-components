import React from 'react'

import {Props} from '../../../common'
import { StyledSectionWrapper } from './style'
import { AnnotatedSection } from './subcomponents/AnnotatedSection'
import { Section } from './subcomponents/Section'
import { TitledSection } from './subcomponents/TitledSection'
import { UnstyledSection } from './subcomponents/UnstyledSection'

interface ISectionList {
  /** The data-component-context */
  componentContext?: string
}

export class SectionList extends React.PureComponent<ISectionList> {
  public static Section = Section
  public static UnstyledSection = UnstyledSection
  public static AnnotatedSection = AnnotatedSection
  public static TitledSection = TitledSection

  public render (): JSX.Element | null {
    const { children, componentContext } = this.props
    return (
      <StyledSectionWrapper
        data-component-type={Props.ComponentType.SectionList}
        data-component-context={componentContext}
      >
        {children}
      </StyledSectionWrapper>
    )
  }
}
