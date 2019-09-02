#### Expandable Card

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
  <Card
    margins={{
              top:12,
              bottom: 4
            }}
    isExpanded= {state.card1}
    onCardToggle= {() => setState({ card1: !state.card1})}
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
    mainContent= {
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
    extraContent= {
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
    }
  />
  <Card
      color='orange'
      isExpanded= {state.card2}
      onCardToggle= {() => setState({ card2: !state.card2})}
      dropdownSections= {[
          {
            text: 'google',
            href: 'https://www.google.com.au',
            stopPropagation: true
          },
          {
            text: 'Delete',
            onClick: (event) => { alert('Delete action for the card') },
            sectionType: 'alert',
            stopPropagation: true
          }
        ]}
      mainContent= {
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
      extraContent= {
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
      }
    />
</div>
```

#### Expanded Card without action

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

initialState = { cardWithOutAction: false };

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';

<Card
    isExpanded= {state.cardWithOutAction}
    onCardToggle= {() => setState({ cardWithOutAction: !state.cardWithOutAction})}
    mainContent= {
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
    extraContent= {
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
    }
  />
```

#### Card with actions

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';

<Card
    isExpanded= {state.cardWithOutExpand}
    dropdownSections= {[
              {
                text: 'google',
                href: 'https://www.google.com.au',
                stopPropagation: true
              },
              {
                text: 'Delete',
                onClick: (event) => { alert('Delete action for the card') },
                sectionType: 'alert',
                stopPropagation: true
              }
            ]}
    mainContent= {
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

#### Simple card

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';

<div>
  <Card
    margins={{bottom: 8}}
    mainContent= {
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
</div>
```

#### Card will manage its own state if *isExpanded* is not passed in.

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';

<Card
  margins={{
            top:12,
            bottom: 4
          }}
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
  mainContent= {
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
  extraContent= {
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
  }
/>
```
