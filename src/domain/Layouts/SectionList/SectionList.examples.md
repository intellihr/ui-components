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
  <SectionList.TitledSection
    header='Titled Section'
    description='This is a titled section, which enables sections to have a description and action item(s).'
    actionItems={[
        <Button type='primary'>Action 1</Button>,
        <Button type='primary'>Action 2</Button>
      ]}
  >
    <Text>
      As is the same with a Section, content can be passed into a Titled Section which will then be displayed
      inside the section. For the action items, the user can pass in any element (or set of nested elements)
      that they'd like.
    </Text>
  </SectionList.TitledSection>
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
</SectionList>
```
