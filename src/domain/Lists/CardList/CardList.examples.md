#### Card List with all the components

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
  <CardList
  onCardToggle={(card) => setState({ [card.name]: !state[card.name]})}
  cards={[
    {
      name:'card1',
      isExpanded: state.card1,
      actions:[
          {
            text: 'homepage',
            href: 'https://intellihr.github.io/ui-components/',
            stopPropagation: true
          },
          {
            text: 'Delete',
            onClick: (event) => { alert('Delete action for the card 1') },
            sectionType: 'alert',
            stopPropagation: true
          }
        ],
      collapseComponent: (
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
      expandComponent: (
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
      name:'card2',
      isExpanded: state.card2,
      actions:[
                {
                  text: 'google',
                  href: 'https://www.google.com.au',
                  stopPropagation: true
                },
                {
                  text: 'Delete',
                  onClick: (event) => { alert('Delete action for the card 2') },
                  sectionType: 'alert',
                  stopPropagation: true
                }
              ],
      collapseComponent: (
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
      expandComponent: (
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

#### Card List without some component

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

initialState = { card: false, card2: false, card3: false, allCards: false };

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec libero et libero molestie eleifend. Donec dignissim vel erat eu cursus.';
 
<div>
  <Button
    type='neutral'
    onClick={() => setState({ card1: !state.allCards, card2: !state.allCards, allCards: !state.allCards})}>
    {state.allCards ? 'Collapse All' : 'Expand All'}
  </Button>
  <CardList
  onCardToggle={(card) => setState({ [card.name]: !state[card.name]})}
  cards={[
    {
      name:'card1',
      isExpanded: state.card1,
      collapseComponent: <div><div>I have expand component only</div>{text}</div>,
      expandComponent: (
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
      name:'card2',
      isExpanded: state.card2,
      collapseComponent: <div><div>I don't have expand component and actions</div>{text}</div>,
    },
    {
      name:'card3',
      isExpanded: state.card3,
      actions:[
                {
                  text: 'google',
                  href: 'https://www.google.com.au',
                  stopPropagation: true
                },
                {
                  text: 'Delete',
                  onClick: (event) => { alert('Delete action for the card 2') },
                  sectionType: 'alert',
                  stopPropagation: true
                }
              ],
      collapseComponent: <div><div>I have actions only</div>{text}</div>,
    }
  ]}
  />
</div>
```
#### Card List skeleton

```jsx

<CardList
    showSkeleton
    cards={[]}
    />
```
