#### GroupCard

GroupCards work much the same as Cards, except that you have a headingContent that contains the parent, and then the bodyContents which takes an array of props to style Cards as children on expand. The extraContent on the child Cards is always displayed (where as on Cards it could be expanded or collapsed).

The parent can take a handleClick *or* href prop same as the Card can (refer to the Card page for more details).

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Props, Variables } from '@Common';
import { StatusIndicator } from '@Domain/Indicators';
import { Brick, CurrencyText, Text } from '@Domain/Typographies';
import { AvatarEntity } from '@Domain/Avatars';

initialState = { card1: false, card2: false, allCards: false };

<>
  <Button
    type='neutral'
    onClick={() => setState({ card1: !state.allCards, card2: !state.allCards, allCards: !state.allCards})}>
    {state.allCards ? 'Collapse All' : 'Expand All'}
  </Button>
  <GroupCard
    handleClick={() => alert('click handler called')}
    margins={{
      top:12,
      bottom: 4
    }}
    isExpanded={state.card1}
    onCardToggle={() => setState({ card1: !state.card1 })}
    dropdownSections={[
      {
        text: 'Delete',
        onClick: (event) => { alert('Delete action for the group card') },
        sectionType: 'alert',
        stopPropagation: true
      }
    ]}
    headingContent={
      <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
        <GridLayout.Cell size={{ desktop: 9, tablet: 8, min: 12 }}>
          <Text weight={Variables.FontWeight.fwSemiBold}>First Aid Officer</Text>
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
    bodyContents={[
      {
        mainContent: (
          <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
            <GridLayout.Cell size={{ desktop: 5, tablet: 5, min: 12 }}>
              <Text weight={Variables.FontWeight.fwSemiBold}>Fire Warden Certificate</Text>
            </GridLayout.Cell>

            <GridLayout.Cell size={{ desktop: 4, tablet: 3, min: 12 }}>
              <Text isInline={false} color={Variables.Color.n600}>Certification</Text>
            </GridLayout.Cell>

            <GridLayout.Cell size={{ desktop: 3, tablet: 4, min: 12 }}>
              <StatusIndicator
                text={8}
                color={Variables.Color.r300}
                textColor={Variables.Color.r300}
              />
            </GridLayout.Cell>
          </GridLayout>
        )
      },
      {
        mainContent: (
          <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
            <GridLayout.Cell size={{ desktop: 5, tablet: 5, min: 12 }}>
              <Text weight={Variables.FontWeight.fwSemiBold}>First Aid Certificate</Text>
            </GridLayout.Cell>

            <GridLayout.Cell size={{ desktop: 4, tablet: 3, min: 12 }}>
              <Text isInline={false} color={Variables.Color.n600}>Certification</Text>
            </GridLayout.Cell>

            <GridLayout.Cell size={{ desktop: 3, tablet: 4, min: 12 }}>
              <StatusIndicator
                text={4}
                color={Variables.Color.r300}
                textColor={Variables.Color.r300}
              />
            </GridLayout.Cell>
          </GridLayout>
        )
      }
    ]}
  />
  <GroupCard
    margins={{
      top:12,
      bottom: 4
    }}
    isExpanded={state.card2}
    onCardToggle={() => setState({ card2: !state.card2 })}
    headingContent={
      <GridLayout verticalAlignment={GridLayout.VerticalAlignment.Middle}>
        <GridLayout.Cell size={{ desktop: 6, tablet: 6, min: 12 }}>
          <AvatarEntity
            initials={"AB"}
            primaryText={"Andrew Bogut"}
            primaryTextType={Props.TypographyType.Small}
            primaryWeight={Variables.FontWeight.fwSemiBold}
            secondaryText={'Safety Officer'}
          />
        </GridLayout.Cell>

        <GridLayout.Cell size={{ desktop: 2, tablet: 2, min: 12 }}>
          <Text>2 sessions</Text>
        </GridLayout.Cell>

        <GridLayout.Cell size={{ desktop: 2, tablet: 2, min: 12 }}>
          <Text>11 hrs</Text>
        </GridLayout.Cell>

        <GridLayout.Cell size={{ desktop: 2, tablet: 2, min: 12 }}>
          <CurrencyText
            value={200}
            prefix='AUD'
            decimalPlace={2}
          />
        </GridLayout.Cell>
      </GridLayout>
    }
    bodyContents={[
      {
        dropdownSections: [
          {
            text: 'Edit',
            onClick: (event) => { alert('Edit action for the card') },
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
                      Completed 01/12/2019
                    </Text>
                    <Text
                      weight={Variables.FontWeight.fwSemiBold}
                      isInline={false}
                    >
                      WHS Minimising Risk
                    </Text>
                    <Brick
                      typographyType={Props.TypographyType.XSmall}
                      color='secondary'
                      isInline={false}
                    >
                      Core Skills
                    </Brick>
                  </>
                )
              },
              {
                size: 2,
                content: '6 hrs'
              },
              {
                size: 2,
                content: (
                  <CurrencyText
                    value={100}
                    prefix='AUD'
                    decimalPlace={2}
                  />
                )
              }
            ]}
          />
        ),
        extraContent: (
          <div style={{ display: 'grid', width: '400px', gridTemplateColumns: '50% 50%' }}>
            <Text type={Props.TypographyType.Small} color={Variables.Color.n600} isInline={false}>
              Training Provider
            </Text>
            <Text type={Props.TypographyType.Small} isInline={false}>
              Internal
            </Text>
          </div>
        )
      },
      {
        dropdownSections: [
          {
            text: 'Edit',
            onClick: (event) => { alert('Edit action for the card') },
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
                      Slips trips and falls
                    </Text>
                    <Brick
                      typographyType={Props.TypographyType.XSmall}
                      color='secondary'
                      isInline={false}
                    >
                      Core Skills
                    </Brick>
                  </>
                )
              },
              {
                size: 2,
                content: '5 hrs'
              },
              {
                size: 2,
                content: (
                  <CurrencyText
                    value={100}
                    prefix='AUD'
                    decimalPlace={2}
                  />
                )
              }
            ]}
          />
        ),
        extraContent: (
          <div style={{ display: 'grid', width: '400px', gridTemplateColumns: '50% 50%' }}>
            <Text type={Props.TypographyType.Small} color={Variables.Color.n600} isInline={false}>
              Training Provider
            </Text>
            <Text type={Props.TypographyType.Small} isInline={false}>
              External
            </Text>
          </div>
        )
      }
    ]}
  />
</>
```

#### GroupCard without body contents

While you can have a GroupCard without body contents (child Cards), you should be using the Card component instead.
```jsx
initialState = { cardWithoutBody: false };
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

<GroupCard
  isExpanded= {state.cardWithoutBody}
  onCardToggle= {() => setState({ cardWithoutBody: !state.cardWithoutBody})}
  headingContent="Why am I a GroupCard instead of a Card (╯°□°）╯︵ ┻━┻"
/>
```

#### GroupCard will manage its own state if *isExpanded* is not passed in

```jsx
import { Button } from '@Domain/Buttons';
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

<GroupCard
  margins={{
    top:12,
    bottom: 4
  }}
  headingContent="I'll manage my own state (✿◠‿◠)"
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
      mainContent: "(◕‿-)",
    }
  ]}
/>
```
