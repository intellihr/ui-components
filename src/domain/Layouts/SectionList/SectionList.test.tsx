import { mount } from 'enzyme'
import React from 'react'

import { SectionList } from './SectionList'

describe('<PageLayout />', () => {
  it('should render a profile layout', () => {
    const wrapper = mount(
      <SectionList>
        <SectionList.Section>
          section 1
        </SectionList.Section>
        <SectionList.AnnotatedSection
          header='Annotated Section'
          description='Annotated Description'
          linkText='Annotated Link'
          linkUrl='#'
        >
          section 2
        </SectionList.AnnotatedSection>
      </SectionList>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render an annotated section without props', () => {
    const wrapper = mount(
      <SectionList>
        <SectionList.Section>
          section 1
        </SectionList.Section>
        <SectionList.AnnotatedSection>
          section 2
        </SectionList.AnnotatedSection>
      </SectionList>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
