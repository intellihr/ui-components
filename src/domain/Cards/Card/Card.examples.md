### Card

```jsx
import { Button } from '@Domain/Buttons';
import { Variables, Props } from '@Common';
import { AvatarEntity } from '@Domain/Avatars';
import { StatusIndicator } from '@Domain/Indicators';
import { GridLayout } from '@Domain/Layouts';
import { Brick, CurrencyText, Text } from '@Domain/Typographies';

initialState = { card1: false, card2: false, card3: false, allCards: false };

<>
  <Button
    type='neutral'
    onClick={() => setState({ card1: !state.allCards, card2: !state.allCards, card3: !state.allCards, allCards: !state.allCards})}>
    {state.allCards ? 'Collapse All' : 'Expand All'}
  </Button>

  <Card
    handleClick={() => alert('Card click handler called')}
    mainContent={
      <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
        <GridLayout.Cell size={{ desktop: 5, tablet: 5, min: 12 }}>
          <Text weight={Variables.FontWeight.fwSemiBold}>Fire Warden Certificate</Text>
        </GridLayout.Cell>

        <GridLayout.Cell size={{ desktop: 5, tablet: 3, min: 12 }}>
          <Text isInline={false} color={Variables.Color.n600}>Certification</Text>
        </GridLayout.Cell>

        <GridLayout.Cell size={{ desktop: 2, tablet: 4, min: 12 }}>
          <Button
            onClick={(event) => {
              event.stopPropagation()
              alert('Button click handler called')
            }}
          >
            Renew
          </Button>
        </GridLayout.Cell>
      </GridLayout>
    }
    margins={{
      top: Variables.Spacing.sSmall,
      bottom: Variables.Spacing.s2XSmall
    }}
  />

  <Card
    isExpanded={state.card1}
    onCardToggle={() => setState({ card1: !state.card1 })}
    handleClick={() => alert('Click handler called')}
    mainContent={
      <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
        <GridLayout.Cell size={{ desktop: 5, tablet: 5, min: 12 }}>
          <Text weight={Variables.FontWeight.fwSemiBold}>Fire Warden Certificate</Text>
        </GridLayout.Cell>

        <GridLayout.Cell size={{ desktop: 4, tablet: 3, min: 12 }}>
          <Text isInline={false} color={Variables.Color.n600}>Certification</Text>
        </GridLayout.Cell>

        <GridLayout.Cell size={{ desktop: 3, tablet: 4, min: 12 }}>
          <StatusIndicator
            text={12}
            color={Variables.Color.r300}
            textColor={Variables.Color.r300}
          />
        </GridLayout.Cell>
      </GridLayout>
    }
    margins={{
      bottom: Variables.Spacing.s2XSmall
    }}
  />

  <Card
    isExpanded={state.card2}
    onCardToggle={() => setState({ card2: !state.card2 })}
    dropdownSections= {[
      {
        text: 'Edit',
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
        verticalAlignment='middle'
        cells={[
          {
            size: 8,
            content: (
              <>
                <Text
                  isInline={false}
                  type={Props.TypographyType.Small}
                  color={Variables.Color.n600}
                >
                  Completed 28/02/2020
                </Text>
                <Text
                  weight={Variables.FontWeight.fwSemiBold}
                  isInline={false}
                >
                  ReactConf AU
                </Text>
                <Brick
                  typographyType={Props.TypographyType.XSmall}
                  color='primary'
                  isInline={false}
                >
                  Core Skills
                </Brick>
              </>
            )
          },
          {
            size: 2,
            content: '16 hrs'
          },
          {
            size: 2,
            content: (
              <CurrencyText
                value={1070.49}
                prefix='AUD'
                decimalPlace={2}
              />
            )
          }
        ]}
      />
    }
    extraContent={
      <div style={{ display: 'grid', width: '400px', gridTemplateColumns: '50% 50%' }}>
        <Text color={Variables.Color.n600} isInline={false}>
          Training Provider
        </Text>
        <Text isInline={false}>
          External
        </Text>
      </div>
    }
    margins={{
      bottom: Variables.Spacing.sSmall
    }}
  />

  <Card
    isExpanded={state.card3}
    onCardToggle={() => setState({ card3: !state.card3 })}
    href='#'
    dropdownSections= {[
      {
        text: 'Update',
        onClick: (event) => { alert('Update action for the card')},
        stopPropagation: true
      },
      {
        text: 'Delete',
        onClick: (event) => { alert('Delete action for the card')},
        sectionType: 'alert',
        stopPropagation: true
      }
    ]}
    mainContent= {
      <AvatarEntity
        initials={"AB"}
        primaryText={"Andrew Bogut"}
        primaryTextType={Props.TypographyType.Small}
        primaryWeight={Variables.FontWeight.fwSemiBold}
        secondaryText={'Product Designer'}
      />
    }
    extraContent= {
      <GridLayout
        gutterPaddingX={Variables.Spacing.sSmall}
        gutterPaddingY={Variables.Spacing.sSmall}
        cells={[
          {
            size: { desktop: 6, min: 12 },
            content: (
              <>
                <Text
                  type={Props.TypographyType.Small}
                  weight={Variables.FontWeight.fwSemiBold}
                  isInline={false}
                  isUpper
                  margins={{
                    top: Variables.Spacing.s2XSmall,
                    bottom: Variables.Spacing.s2XSmall,
                  }}
                >
                  Personal Details
                </Text>

                <div style={{ display: 'grid', width: '400px', gridTemplateColumns: '50% 50%' }}>
                  <Text color={Variables.Color.n600} isInline={false}>
                    Email
                  </Text>
                  <Text isInline={false}>
                    andrew.bogut@nba.com
                  </Text>

                  <Text color={Variables.Color.n600} isInline={false}>
                    Phone
                  </Text>
                  <Text isInline={false}>
                    0424365902
                  </Text>

                  <Text color={Variables.Color.n600} isInline={false} >
                    Gender
                  </Text>
                  <Text isInline={false}>
                    Male
                  </Text>
                </div>
              </>
            )
          },
          {
            size: { desktop: 6, min: 12 },
            content: (
              <>
                <Text
                  type={Props.TypographyType.Small}
                  weight={Variables.FontWeight.fwSemiBold}
                  isInline={false}
                  isUpper
                  margins={{
                    top: Variables.Spacing.s2XSmall,
                    bottom: Variables.Spacing.s2XSmall,
                  }}
                >
                  Job Details
                </Text>
                <div style={{ display: 'grid', width: '400px', gridTemplateColumns: '50% 50%' }}>
                  <Text color={Variables.Color.n600} isInline={false}>
                    Business Unit
                  </Text>
                  <Text isInline={false}>
                    Design
                  </Text>

                  <Text color={Variables.Color.n600} isInline={false}>
                    Location
                  </Text>
                  <Text isInline={false}>
                    Brisbane
                  </Text>

                  <Text color={Variables.Color.n600} isInline={false} >
                    Work Class
                  </Text>
                  <Text isInline={false}>
                    Part-Time
                  </Text>
                </div>
              </>
             )
          },
        ]}
      />
    }
  />
</>
```

### Simple Card
```jsx
<Card mainContent="I'm a card (✿◠‿◠)" />
```

### Cards with Actions on Click

There are three different actions that can be performed by clicking on a card:
- Running a handle click function
- Navigating to a href
- Expanding the card

The expansion of the card can either be considered a primary action where clicking anywhere on the card header performs the expansion, *or* as a secondary action where the primary action is either a handleClick or a href. If the expansion is a secondary action, the dropdown chevron will have a dedicated click area on the right hand side of the card.

**Note:** You can only provide either the handleClick prop, *or* the href prop - not both.

#### Card with a click handler

If you provide a function to the handleClick prop, this will run when clicking on the main portion of the card.

Use this for scenarios such as wanting to open a modal on click.

```jsx
<Card
  handleClick={() => alert('Click handler called')}
  mainContent="I'm a card with a click handler (✿◠‿◠)"
/>
```

#### Card with a href

If you provide the href prop, this will be navigated to when clicking on the main portion of the card.

```jsx
<Card
  href='#'
  mainContent="I'm a card with a href (✿◠‿◠)"
/>
```

#### Card with a href and target

If you provide the target prop in addition to the href prop, this will be navigated to the specified target when clicking on the main portion of the card.

```jsx
<Card
  href='#'
  target='_blank'
  mainContent="I'm a card with a href and target (✿◠‿◠)"
/>
```

#### Card with expansion as a primary action

If you provide any content to the extraContent prop, it will make the card expandable on click to display the extra content.
```jsx
<Card
  mainContent="I'm a card that can expand!"
  extraContent="(◕‿-)"
/>
```

#### Card with expansion as a secondary action

```jsx
<Card
  handleClick={() => alert('Click handler called')}
  mainContent="Click on the main portion of the card to call the handleClick function, or click on the right section to expand!"
  extraContent="(◕‿-)"
/>
```

### Card with Dropdown Menu

Any variation of the card can take a dropdownSections prop to render a dropdown menu.

```jsx
<Card
  mainContent="I'm a card with actions! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
  dropdownSections= {[
    {
      text: 'Update',
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
/>
```

### Card with Color
```jsx
import { Variables } from '@Common';

<>
  <Card
    color='neutral'
    mainContent="I'm a neutral (default) card (✿◠‿◠)"
    extraContent="(◕‿-)"
    dropdownSections= {[
      {
        text: 'Delete',
        onClick: (event) => { alert('Delete action for the card') },
        sectionType: 'alert',
        stopPropagation: true
      }
    ]}
    margins={{
      bottom: Variables.Spacing.s2XSmall
    }}
  />
  <Card
    color='grey'
    mainContent="I'm a grey card (✿◠‿◠)"
    extraContent="(◕‿-)"
    dropdownSections= {[
      {
        text: 'Delete',
        onClick: (event) => { alert('Delete action for the card') },
        sectionType: 'alert',
        stopPropagation: true
      }
    ]}
    margins={{
      bottom: Variables.Spacing.s2XSmall
    }}
  />
  <Card
    color='orange'
    mainContent="I'm an orange card (✿◠‿◠)"
    extraContent="(◕‿-)"
    dropdownSections= {[
      {
        text: 'Delete',
        onClick: (event) => { alert('Delete action for the card') },
        sectionType: 'alert',
        stopPropagation: true
      }
    ]}
    margins={{
      bottom: Variables.Spacing.s2XSmall
    }}
  />
  <Card
    color='red'
    mainContent="I'm a red card (✿◠‿◠)"
    extraContent="(◕‿-)"
    dropdownSections= {[
      {
        text: 'Delete',
        onClick: (event) => { alert('Delete action for the card') },
        sectionType: 'alert',
        stopPropagation: true
      }
    ]}
  />
</>
```

### Card will manage its own state if *isExpanded* is not passed in.

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

<Card
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
  mainContent="I'll manage my own state (✿◠‿◠)"
  extraContent="(◕‿-)"
/>
```
