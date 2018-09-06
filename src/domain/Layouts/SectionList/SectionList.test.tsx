import { mount } from 'enzyme'
import React from 'react'

import { SectionList } from './SectionList'
import { Button } from '../../Buttons/Button'

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
        <SectionList.TitledSection
          header='Titled Section'
          description='Titled Description'
          actionItems={[
            <Button type='primary' key={1}>Action 1</Button>,
            <Button type='primary' key={2}>Action 2</Button>
          ]}
        >
          section 3
        </SectionList.TitledSection>
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

  it('should render a section list with a titled section without props', () => {
    const wrapper = mount(
      <SectionList>
        <SectionList.TitledSection>
          section 1
        </SectionList.TitledSection>
      </SectionList>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
