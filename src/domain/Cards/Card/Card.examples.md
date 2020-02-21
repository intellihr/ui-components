#### Simple card

```jsx
import { Button } from '@Domain/Buttons';

<Card
  margins={{bottom: 8}}
  mainContent= {<>I'm a card</>}
/>
```

#### Card with click-through

```jsx
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';
import { StatusIndicator } from '@Domain/Indicators';
import { Text } from '@Domain/Typographies';

<Card
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
          color={Variables.Color.r500}
          textColor={Variables.Color.r500}
        />
      </GridLayout.Cell>
    </GridLayout>
  }
/>
```

#### Card with actions

```jsx
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

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
          size: 6,
          content: text
        },
        {
          size: 6,
          content: text
        }
      ]}
    />
  }
/>
```

#### Card with expansion

```jsx
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

<Card
  mainContent= {
    <GridLayout
      gutterPaddingX={Variables.Spacing.sSmall}
      gutterPaddingY={Variables.Spacing.sSmall}
      cells={[
        {
          size: 6,
          content: text
        },
        {
          size: 6,
          content: text
        }
      ]}
    />
  }
  extraContent={
    <div>{text}</div>
  } 
/>
```

#### Card with actions and expansion

```jsx
import { GridLayout } from '@Domain/Layouts';
import { Variables, Props } from '@Common';
import { Brick, Text } from '@Domain/Typographies';

<Card
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
          content: <><strong>AUD</strong> 1,741.87</>
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
/>
```

#### Card with click-through and expansion

```jsx
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

<Card
  handleClick={() => alert('Click handler called')}
  mainContent= {
    <GridLayout
      gutterPaddingX={Variables.Spacing.sSmall}
      gutterPaddingY={Variables.Spacing.sSmall}
      cells={[
        {
          size: 6,
          content: text
        },
        {
          size: 6,
          content: text
        }
      ]}
    />
  }
  extraContent={
    <div>{text}</div>
  } 
/>
```

#### Card with click-through and actions

```jsx
import { GridLayout } from '@Domain/Layouts';
import { Variables } from '@Common';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

<Card
  handleClick={() => alert('Click handler called')}
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
          size: 6,
          content: text
        },
        {
          size: 6,
          content: text
        }
      ]}
    />
  }
/>
```

#### Card with click-through, actions and expansion

```jsx
import { GridLayout } from '@Domain/Layouts';
import { AvatarEntity } from '@Domain/Avatars';
import { Text } from '@Domain/Typographies';
import { Variables, Props } from '@Common';

  <Card
    margins={{ top:12, bottom: 4 }}
    handleClick={() => alert('Click handler called')}
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
