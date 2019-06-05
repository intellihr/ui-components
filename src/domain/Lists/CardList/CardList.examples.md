#### Card List

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
  actions={[
    {
      text: 'Edit',
      onClick: (card) => { alert('Edit action') }
    },
    {
      text: 'Delete',
      onClick: (card) => { alert('Delete action') }
    }
  ]}
  cards={[
    {
      name:'card1',
      isExpanded: state.card1,
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
