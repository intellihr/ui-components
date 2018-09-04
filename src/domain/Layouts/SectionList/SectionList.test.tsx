import { mount } from 'enzyme'
import React from 'react'

import { SectionList } from './SectionList'

describe('<SectionList />', () => {
  it('should render a sectionList', () => {
    const wrapper = mount(
      <SectionList>
        <SectionList.Section>
          section 1
        </SectionList.Section>
        <SectionList.AnnotatedSection
          header='Annotated Section'
          description='Annotated Description'
          linkText='Annotated Link'
          linkProps={{href: '#'}}
        >
          section 2
        </SectionList.AnnotatedSection>
      </SectionList>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render a section list with an annotated section without props', () => {
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
