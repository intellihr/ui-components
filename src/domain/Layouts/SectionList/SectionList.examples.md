SectionLists are used when needing to stack a bunch grouped information on a page. It also contains some useful
sub-components that provide responsive styling between mobile and desktop.
```jsx
<SectionList>
  <SectionList.Section>
    <Text>
      This is a Section, it can be used to display data on the page with correct padding and will automatically
      display a border below itself if another section is below it in the section list and you are on desktop.
    </Text>
  </SectionList.Section>
  <SectionList.UnstyledSection>
    <Text>
      This is a unstyled Section, it can be used to display data on the page with correct padding.
    </Text>
  </SectionList.UnstyledSection>
  <SectionList.AnnotatedSection
    header='Annotated Section'
    description='This is an annotated section, which enables sections to have a description.'
    links={[
      {
        text: 'Action that can be taken',
        props: {
          href: '#'
        }
      },
      {
        text: 'Action that can be taken',
        props: {
          href: '#'
        }
      }
    ]}
  >
    <Text>
      As is the same with a Section, content can be passed into an Annotated Section which will then be displayed
      inside the section.
    </Text>
  </SectionList.AnnotatedSection>
  <SectionList.AnnotatedSection
    header='Annotated Section (Deprecated)'
    description='This is the deprecated annotated section, which enables sections to have a description and only one link.'
    linkText='The only link'
    linkProps={{href: '#'}}
  >
    <Text>
      As is the same with a Section, content can be passed into an Annotated Section which will then be displayed
      inside the section.
    </Text>
  </SectionList.AnnotatedSection>
  <SectionList.TitledSection
    header='Titled Section'
    description='This is a titled section, which enables sections to have a description and action item(s).'
    actionItems={[
        <ButtonGroup key={1}>
          <Button type='primary'>Action 1</Button>
          <Button type='primary'>Action 2</Button>
        </ButtonGroup>
      ]}
  >
    <Text>
      For action items, the user can pass in an array of elements to display, such as buttons. In mobile view,
      if the action items are set to full width, they will stack on top of each other.
    </Text>
  </SectionList.TitledSection>
</SectionList>
```
