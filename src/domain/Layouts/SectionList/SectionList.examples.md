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
  <SectionList.UnStyledSection>
    <Text>
      This is a unstyled Section, it can be used to display data on the page with correct padding.
    </Text>
  </SectionList.UnStyledSection>
  <SectionList.AnnotatedSection
    header='Annotated Section'
    description='This is an annotated section, which enables sections to have a description.'
    linkText='Action that can be taken'
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
        <Button type='primary' key={1}>Action 1</Button>,
        <Button type='primary' key={2}>Action 2</Button>
      ]}
  >
    <Text>
      For action items, the user can pass in an array of elements to display, such as buttons. In mobile view,
      if the action items are set to full width, they will stack on top of each other.
    </Text>
  </SectionList.TitledSection>
</SectionList>
```
