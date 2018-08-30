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
  <SectionList.AnnotatedSection
    header='Annotated Section'
    description='This is an annotated section, which enables sections to have a description.'
    linkText='Action that can be taken'
    linkUrl='#'
  >
    <Text>
      As is the same with a Section, content can be passed into an Annotated Section which will then be displayed
      inside the section. 
    </Text>
  </SectionList.AnnotatedSection>
</SectionList>
```
