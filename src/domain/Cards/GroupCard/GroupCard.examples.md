#### Expandable Group Card

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

initialState = { card1: false, card2: false, allCards: false };

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';
 
<div>
  <Button
    type='neutral'
    onClick={() => setState({ card1: !state.allCards, card2: !state.allCards, allCards: !state.allCards})}>
    {state.allCards ? 'Collapse All' : 'Expand All'}
  </Button>
  <GroupCard
    dropdownSections= {[
        {
          text: 'homepage',
          href: 'https://intellihr.github.io/ui-components/',
          stopPropagation: true
        },
        {
          text: 'Delete',
          onClick: (event) => { alert('Delete action for the card') },
          sectionType: 'alert',
          stopPropagation: true
        }
      ]}
    margins={{
              top:12,
              bottom: 4
            }}
    isExpanded= {state.card1}
    onCardToggle= {() => setState({ card1: !state.card1})}
    headingContent= {
      <GridLayout
        gutterPaddingX={Variables.Spacing.sSmall}
        gutterPaddingY={Variables.Spacing.sSmall}
        cells={[
          {
            size: 7,
            content: text
          },
          {
            size: 5,
            content: text
          }
        ]}
      />
    }
    bodyContents= {[
      {
        dropdownSections: [
                {
                  text: 'homepage',
                  href: 'https://intellihr.github.io/ui-components/',
                  stopPropagation: true
                },
                {
                  text: 'Delete',
                  onClick: (event) => { alert('Delete action for the card') },
                  sectionType: 'alert',
                  stopPropagation: true
                }
              ],
        mainContent: (
                        <GridLayout
                          gutterPaddingX={Variables.Spacing.sSmall}
                          gutterPaddingY={Variables.Spacing.sSmall}
                          cells={[
                            {
                              size: 7,
                              content: text
                            },
                            {
                              size: 5,
                              content: text
                            }
                          ]}
                        />
                    ),
        extraContent: (
                        <GridLayout
                          gutterPaddingX={Variables.Spacing.sSmall}
                          gutterPaddingY={Variables.Spacing.sSmall}
                          cells={[
                            {
                              size: 12,
                              content: text
                            },
                            {
                              size: 12,
                              content: text
                            }
                          ]}
                        />
                    )
      },
      {
        dropdownSections: [
                {
                  text: 'homepage',
                  href: 'https://intellihr.github.io/ui-components/',
                  stopPropagation: true
                },
                {
                  text: 'Delete',
                  onClick: (event) => { alert('Delete action for the card') },
                  sectionType: 'alert',
                  stopPropagation: true
                }
              ],
        mainContent: (
                        <GridLayout
                          gutterPaddingX={Variables.Spacing.sSmall}
                          gutterPaddingY={Variables.Spacing.sSmall}
                          cells={[
                            {
                              size: 7,
                              content: text
                            },
                            {
                              size: 5,
                              content: text
                            }
                          ]}
                        />
                    ),
        extraContent: (
                        <GridLayout
                          gutterPaddingX={Variables.Spacing.sSmall}
                          gutterPaddingY={Variables.Spacing.sSmall}
                          cells={[
                            {
                              size: 12,
                              content: text
                            },
                            {
                              size: 12,
                              content: text
                            }
                          ]}
                        />
                    )
      },
      {
        dropdownSections: [
                {
                  text: 'homepage',
                  href: 'https://intellihr.github.io/ui-components/',
                  stopPropagation: true
                },
                {
                  text: 'Delete',
                  onClick: (event) => { alert('Delete action for the card') },
                  sectionType: 'alert',
                  stopPropagation: true
                }
              ],
        mainContent: (
                        <GridLayout
                          gutterPaddingX={Variables.Spacing.sSmall}
                          gutterPaddingY={Variables.Spacing.sSmall}
                          cells={[
                            {
                              size: 7,
                              content: text
                            },
                            {
                              size: 5,
                              content: text
                            }
                          ]}
                        />
                    ),
        extraContent: (
                        <GridLayout
                          gutterPaddingX={Variables.Spacing.sSmall}
                          gutterPaddingY={Variables.Spacing.sSmall}
                          cells={[
                            {
                              size: 12,
                              content: text
                            },
                            {
                              size: 12,
                              content: text
                            }
                          ]}
                        />
                    )
      }
    ]}
  />
  <GroupCard
      isExpanded= {state.card2}
      onCardToggle= {() => setState({ card2: !state.card2})}
      headingContent= {
        <GridLayout
          gutterPaddingX={Variables.Spacing.sSmall}
          gutterPaddingY={Variables.Spacing.sSmall}
          cells={[
            {
              size: 7,
              content: text
            },
            {
              size: 5,
              content: text
            }
          ]}
        />
      }
      bodyContents= {[
        {
          mainContent: (
                          <GridLayout
                            gutterPaddingX={Variables.Spacing.sSmall}
                            gutterPaddingY={Variables.Spacing.sSmall}
                            cells={[
                              {
                                size: 7,
                                content: text
                              },
                              {
                                size: 5,
                                content: text
                              }
                            ]}
                          />
                      ),
          extraContent: (
                          <GridLayout
                            gutterPaddingX={Variables.Spacing.sSmall}
                            gutterPaddingY={Variables.Spacing.sSmall}
                            cells={[
                              {
                                size: 12,
                                content: text
                              },
                              {
                                size: 12,
                                content: text
                              }
                            ]}
                          />
                      )
        }
      ]}
    />
</div>
```

#### Group Card without body contents
```jsx
initialState = { cardWithoutBody: false };
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';


<GroupCard
    isExpanded= {state.cardWithoutBody}
    onCardToggle= {() => setState({ cardWithoutBody: !state.cardWithoutBody})}
    headingContent= {
      <GridLayout
        gutterPaddingX={Variables.Spacing.sSmall}
        gutterPaddingY={Variables.Spacing.sSmall}
        cells={[
          {
            size: 7,
            content: text
          },
          {
            size: 5,
            content: text
          }
        ]}
      />
    }
  />
```

#### GroupCard will manage its own state if *isExpanded* is not passed in

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';
 
<GroupCard
  margins={{
            top:12,
            bottom: 4
          }}
  headingContent= {
    <GridLayout
      gutterPaddingX={Variables.Spacing.sSmall}
      gutterPaddingY={Variables.Spacing.sSmall}
      cells={[
        {
          size: 7,
          content: text
        },
        {
          size: 5,
          content: text
        }
      ]}
    />
  }
  bodyContents= {[
    {
      dropdownSections: [
              {
                text: 'homepage',
                href: 'https://intellihr.github.io/ui-components/',
                stopPropagation: true
              },
              {
                text: 'Delete',
                onClick: (event) => { alert('Delete action for the card') },
                sectionType: 'alert',
                stopPropagation: true
              }
            ],
      mainContent: (
                      <GridLayout
                        gutterPaddingX={Variables.Spacing.sSmall}
                        gutterPaddingY={Variables.Spacing.sSmall}
                        cells={[
                          {
                            size: 7,
                            content: text
                          },
                          {
                            size: 5,
                            content: text
                          }
                        ]}
                      />
                  ),
      extraContent: (
                      <GridLayout
                        gutterPaddingX={Variables.Spacing.sSmall}
                        gutterPaddingY={Variables.Spacing.sSmall}
                        cells={[
                          {
                            size: 12,
                            content: text
                          },
                          {
                            size: 12,
                            content: text
                          }
                        ]}
                      />
                  )
    },
    {
      dropdownSections: [
              {
                text: 'homepage',
                href: 'https://intellihr.github.io/ui-components/',
                stopPropagation: true
              },
              {
                text: 'Delete',
                onClick: (event) => { alert('Delete action for the card') },
                sectionType: 'alert',
                stopPropagation: true
              }
            ],
      mainContent: (
                      <GridLayout
                        gutterPaddingX={Variables.Spacing.sSmall}
                        gutterPaddingY={Variables.Spacing.sSmall}
                        cells={[
                          {
                            size: 7,
                            content: text
                          },
                          {
                            size: 5,
                            content: text
                          }
                        ]}
                      />
                  ),
      extraContent: (
                      <GridLayout
                        gutterPaddingX={Variables.Spacing.sSmall}
                        gutterPaddingY={Variables.Spacing.sSmall}
                        cells={[
                          {
                            size: 12,
                            content: text
                          },
                          {
                            size: 12,
                            content: text
                          }
                        ]}
                      />
                  )
    },
    {
      dropdownSections: [
              {
                text: 'homepage',
                href: 'https://intellihr.github.io/ui-components/',
                stopPropagation: true
              },
              {
                text: 'Delete',
                onClick: (event) => { alert('Delete action for the card') },
                sectionType: 'alert',
                stopPropagation: true
              }
            ],
      mainContent: (
                      <GridLayout
                        gutterPaddingX={Variables.Spacing.sSmall}
                        gutterPaddingY={Variables.Spacing.sSmall}
                        cells={[
                          {
                            size: 7,
                            content: text
                          },
                          {
                            size: 5,
                            content: text
                          }
                        ]}
                      />
                  ),
      extraContent: (
                      <GridLayout
                        gutterPaddingX={Variables.Spacing.sSmall}
                        gutterPaddingY={Variables.Spacing.sSmall}
                        cells={[
                          {
                            size: 12,
                            content: text
                          },
                          {
                            size: 12,
                            content: text
                          }
                        ]}
                      />
                  )
    }
  ]}
/>
```
