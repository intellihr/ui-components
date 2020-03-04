#### AvatarBoard

```jsx
  import { Props, Variables } from '@Common';
  import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';
  import { Brick, Text } from '@Domain/Typographies';
  import { BrickColor } from '@Domain/Typographies/Brick/style';
  import { UnstyledLink } from '@Domain/Links';
  import { EmptyState } from '@Domain/Callouts';

  <AvatarBoard emptyStateComponent={<EmptyState />}>
    <AvatarBoard.AvatarTile
      primaryText='LeBron James'
      secondaryText='Small Forward'
      imageUrl='https://img.bleacherreport.net/img/slides/photos/004/340/032/bcf2a3842774d474d7424be8dd78bf4e_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
      dropdownSections={[
        {
          text: 'Delete',
          onClick: () => alert('Delete')
        }
      ]}
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles Lakers
      </Text>
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles, California (9:49AM)
      </Text>
      <UnstyledLink
        href='#'
      >
        <Text
          isInline={false}
          isTruncated
          type={Props.TypographyType.XSmall}
          margins={{
            bottom: 4
          }}

        >
          lebron.james@losangeleslakers.co
        </Text>
      </UnstyledLink>
      <UnstyledLink
        href='#'
      >
        <Text
          isInline={false}
          isTruncated
          type={Props.TypographyType.XSmall}
          margins={{
            bottom: 4
          }}
        >
          +61 422 000 000
        </Text>
      </UnstyledLink>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Giannis Sina Ougko Antetokounmpo'
      secondaryText='Forward'
      imageUrl='https://i0.wp.com/sportytell.com/wp-content/uploads/2019/06/Giannis-Antetokounmpo-of-Milwaukee-Bucks%E2%80%94Biography-Facts.jpg?resize=680%2C350&ssl=1'
      href='#'
      statusColor={AvatarStatusDotColor.Orange}
      statusText='On Extended Leave'
      dropdownSections={[
        {
          text: 'Delete',
          onClick: () => alert('Delete')
        }
      ]}
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Milwaukee Bucks
      </Text>
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Milwaukee, Wisconsin (12:19PM)
      </Text>
      <UnstyledLink
        href='#'
      >
        <Text
          isInline={false}
          isTruncated
          type={Props.TypographyType.XSmall}
          margins={{
            bottom: 4
          }}

        >
          giannis.antetokounmpo@milwaukeebucks.com
        </Text>
      </UnstyledLink>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Kobe Bryant'
      secondaryText='Shooting Guard'
      imageUrl='https://www.abc.net.au/news/image/11902598-3x2-700x467.jpg'
      href='#'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles Lakers
      </Text>
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles, California (9:49AM)
      </Text>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Damian Lillard'
      initials='DL'
      secondaryText='Point Guard'
      href='#'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Portland Trail Blazers
      </Text>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Russell Westbrook'
      imageUrl='https://img.bleacherreport.net/img/images/photos/003/784/268/hi-res-47f5dd6bc7e4ea2d09037f468580e35a_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Houston Rockets
      </Text>
      <UnstyledLink
        href='#'
      >
        <Text
          isInline={false}
          isTruncated
          type={Props.TypographyType.XSmall}
          margins={{
            bottom: 4
          }}

        >
          russell.westbrook@houstonrockets.com
        </Text>
      </UnstyledLink>
      <UnstyledLink
        href='#'
      >
        <Text
          isInline={false}
          isTruncated
          type={Props.TypographyType.XSmall}
          margins={{
            bottom: 4
          }}

        >
          (07) 3333 0000
        </Text>
      </UnstyledLink>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Luka Doncic'
      secondaryText='Guard'
      secondaryRightElement={
        <Brick
          typographyType={Props.TypographyType.XSmall}
          margins={{
            left: Variables.Spacing.s2XSmall
          }}
          color={BrickColor.Dark}
        >
          + 1
        </Brick>
      }
      imageUrl='https://sportshub.cbsistatic.com/i/r/2020/01/22/3ab3d32e-6d54-4734-9776-119f06d6329c/thumbnail/1200x675/721d2787b03ed614542faef1999f4d44/luka-doncic-2.jpg'
      href='#'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Dallas Mavericks
      </Text>
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Dallas, Texas (9:49AM)
      </Text>
    </AvatarBoard.AvatarTile>
  </AvatarBoard>
```

#### AvatarBoard empty state

You must pass a component to render for when no children are provided.

```jsx
  import { EmptyState } from '@Domain/Callouts';

  <AvatarBoard
    emptyStateComponent={
      <EmptyState />
    }
  />
```

#### AvatarBoard.AvatarTile children

Any content can be passed as children to render in the bottom half of the tile on hover.

```jsx
  import { Props, Variables } from '@Common';
  import { Text } from '@Domain/Typographies';
  import { Button } from '@Domain/Buttons';
  import { EmptyState } from '@Domain/Callouts';

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  <AvatarBoard emptyStateComponent={<EmptyState />}>
    <AvatarBoard.AvatarTile
      primaryText='LeBron James'
      secondaryText='Small Forward'
      imageUrl='https://img.bleacherreport.net/img/slides/photos/004/340/032/bcf2a3842774d474d7424be8dd78bf4e_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
    >
      <div style={style}>
        <Text
          isInline={false}
          isTruncated
          type={Props.TypographyType.Small}
          margins={{
            bottom: Variables.Spacing.sSmall
          }}
        >
          You can put anything in here!
        </Text>
        <Button>
          Do Something
        </Button>
      </div>
    </AvatarBoard.AvatarTile>
  </AvatarBoard>
```

#### AvatarBoard.AvatarTile with a Dropdown Menu

Provide the dropdownSections prop in order to render a Dropdown Menu on hover.

```jsx
  import { Props } from '@Common';
  import { Text } from '@Domain/Typographies';
  import { UnstyledLink } from '@Domain/Links';
  import { EmptyState } from '@Domain/Callouts';

  <AvatarBoard emptyStateComponent={<EmptyState />}>
    <AvatarBoard.AvatarTile
      primaryText='LeBron James'
      secondaryText='Small Forward'
      imageUrl='https://img.bleacherreport.net/img/slides/photos/004/340/032/bcf2a3842774d474d7424be8dd78bf4e_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
      dropdownSections={[
        {
          text: 'Delete',
          onClick: () => alert('Delete')
        }
      ]}
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles Lakers
      </Text>
    </AvatarBoard.AvatarTile>
  </AvatarBoard>
```

#### AvatarBoard.AvatarTile with a secondary right element

You can provide an element to render inline beside the secondary text on the right hand side. The secondary text will truncate to accomodate it.

```jsx
  import { Props, Variables } from '@Common';
  import { Brick, Text } from '@Domain/Typographies';
  import { BrickColor } from '@Domain/Typographies/Brick/style';
  import { EmptyState } from '@Domain/Callouts';

  <AvatarBoard emptyStateComponent={<EmptyState />}>
    <AvatarBoard.AvatarTile
      primaryText='LeBron James'
      secondaryText='Small Forward'
      secondaryRightElement={
        <Brick
          typographyType={Props.TypographyType.XSmall}
          margins={{
            left: Variables.Spacing.s2XSmall
          }}
          color={BrickColor.Dark}
        >
          + 1
        </Brick>
      }
      imageUrl='https://img.bleacherreport.net/img/slides/photos/004/340/032/bcf2a3842774d474d7424be8dd78bf4e_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles Lakers
      </Text>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Giannis Antetokounmpo'
      secondaryText='Coach for the Milwaukee Bucks but only on Tuesdays'
      secondaryRightElement={
        <Brick
          typographyType={Props.TypographyType.XSmall}
          margins={{
            left: Variables.Spacing.s2XSmall
          }}
          color={BrickColor.Dark}
        >
          + 2
        </Brick>
      }
      imageUrl='https://i0.wp.com/sportytell.com/wp-content/uploads/2019/06/Giannis-Antetokounmpo-of-Milwaukee-Bucks%E2%80%94Biography-Facts.jpg?resize=680%2C350&ssl=1'
      href='#'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Milwaukee Bucks
      </Text>
    </AvatarBoard.AvatarTile>
  </AvatarBoard>
```

#### AvatarBoard.AvatarTile with a Status

If you provide a statusColor it will render a statusDot on the Avatar.

If you provide a statusColor **and** a statusText, it will display a banner on hover displaying the statusText.

```jsx
  import { Props } from '@Common';
  import { AvatarStatusDotColor } from '@Domain/Avatars/Avatar';
  import { Text } from '@Domain/Typographies';
  import { EmptyState } from '@Domain/Callouts';

  <AvatarBoard emptyStateComponent={<EmptyState />}>
    <AvatarBoard.AvatarTile
      primaryText='LeBron James'
      secondaryText='Small Forward'
      imageUrl='https://img.bleacherreport.net/img/slides/photos/004/340/032/bcf2a3842774d474d7424be8dd78bf4e_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
      statusColor={AvatarStatusDotColor.Orange}
      statusText='On Extended Leave'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles Lakers
      </Text>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Giannis Sina Ougko Antetokounmpo'
      secondaryText='Forward'
      imageUrl='https://i0.wp.com/sportytell.com/wp-content/uploads/2019/06/Giannis-Antetokounmpo-of-Milwaukee-Bucks%E2%80%94Biography-Facts.jpg?resize=680%2C350&ssl=1'
      href='#'
      statusColor={AvatarStatusDotColor.Neutral}
      statusText='Past Staff'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Milwaukee Bucks
      </Text>
    </AvatarBoard.AvatarTile>

    <AvatarBoard.AvatarTile
      primaryText='Kobe Bryant'
      secondaryText='Shooting Guard'
      imageUrl='https://www.abc.net.au/news/image/11902598-3x2-700x467.jpg'
      href='#'
      statusColor={AvatarStatusDotColor.Cyan}
      statusText='Upcoming Staff'
    >
      <Text
        isInline={false}
        isTruncated
        type={Props.TypographyType.XSmall}
        margins={{
          bottom: 4
        }}
      >
        Los Angeles Lakers
      </Text>
    </AvatarBoard.AvatarTile>
  </AvatarBoard>
```
