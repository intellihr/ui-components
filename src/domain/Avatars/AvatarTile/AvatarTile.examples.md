#### AvatarTile

```jsx
  import { Props, Variables } from '@Common';
  import { Text } from '@Domain/Typographies';
  import { UnstyledLink } from '@Domain/Links';

  const style = {
    backgroundColor: Variables.Color.n250,
    height: '620px',
    borderRadius: '4px',
    padding: '8px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  <div style={style}>
    <AvatarTile
      displayName='LeBron James'
      jobName='Small Forward'
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
    </AvatarTile>

    <AvatarTile
      displayName='Giannis Sina Ougko Antetokounmpo'
      jobName='Forward'
      imageUrl='https://i0.wp.com/sportytell.com/wp-content/uploads/2019/06/Giannis-Antetokounmpo-of-Milwaukee-Bucks%E2%80%94Biography-Facts.jpg?resize=680%2C350&ssl=1'
      href='#'
      statusColor='warning'
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
    </AvatarTile>

    <AvatarTile
      displayName='Kobe Bryant'
      jobName='Shooting Guard'
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
    </AvatarTile>

    <AvatarTile
      displayName='Damian Lillard'
      initials='DL'
      jobName='Point Guard'
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
    </AvatarTile>

    <AvatarTile
      displayName='Russell Westbrook'
      jobName='Point Guard'
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
    </AvatarTile>

    <AvatarTile
      displayName='Luka Doncic'
      jobName='Guard'
      numberOfJobs={2}
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
    </AvatarTile>
  </div>
```

#### AvatarTile children

Any content can be passed as children to render in the bottom half of the tile on hover.

```jsx
  import { Props, Variables } from '@Common';
  import { Text } from '@Domain/Typographies';
  import { Button } from '@Domain/Buttons';

  const style = {
    backgroundColor: Variables.Color.n250,
    borderRadius: '4px',
    padding: '16px'
  };

  const style2 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  <div style={style}>
    <AvatarTile
      displayName='LeBron James'
      jobName='Small Forward'
      imageUrl='https://img.bleacherreport.net/img/slides/photos/004/340/032/bcf2a3842774d474d7424be8dd78bf4e_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
    >
      <div style={style2}>
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
    </AvatarTile>
  </div>
```

#### AvatarTile with a Dropdown Menu

Provide the dropdownSections prop in order to render a Dropdown Menu on hover.

```jsx
  import { Props, Variables } from '@Common';
  import { Text } from '@Domain/Typographies';
  import { UnstyledLink } from '@Domain/Links';

  const style = {
    backgroundColor: Variables.Color.n250,
    borderRadius: '4px',
    padding: '16px'
  };

  <div style={style}>
    <AvatarTile
      displayName='LeBron James'
      jobName='Small Forward'
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
    </AvatarTile>
  </div>
```

#### AvatarTile showing the person has multiple jobs

If you provide the numberOfJobs prop and it's greater than 1, a Brick will display the additional jobs number next to the jobName. If the jobName is too long, it will be truncated to fit the Brick.

```jsx
  import { Props, Variables } from '@Common';
  import { Text } from '@Domain/Typographies';

  const style = {
    backgroundColor: Variables.Color.n250,
    borderRadius: '4px',
    padding: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  <div style={style}>
    <AvatarTile
      displayName='LeBron James'
      jobName='Small Forward'
      numberOfJobs={2}
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
    </AvatarTile>

    <AvatarTile
      displayName='Giannis Antetokounmpo'
      jobName='Coach for the Milwaukee Bucks'
      numberOfJobs={3}
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
    </AvatarTile>
  </div>
```

#### AvatarTile with a Status

If you provide a statusColor it will render a statusDot on the Avatar.

If you provide a statusColor **and** a statusText, it will display a banner on hover displaying the statusText.

```jsx
  import { Props, Variables } from '@Common';
  import { Text } from '@Domain/Typographies';

  const style = {
    backgroundColor: Variables.Color.n250,
    borderRadius: '4px',
    padding: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  };

  <div style={style}>
    <AvatarTile
      displayName='LeBron James'
      jobName='Small Forward'
      imageUrl='https://img.bleacherreport.net/img/slides/photos/004/340/032/bcf2a3842774d474d7424be8dd78bf4e_crop_exact.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top'
      href='#'
      statusColor='warning'
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
    </AvatarTile>

    <AvatarTile
      displayName='Giannis Sina Ougko Antetokounmpo'
      jobName='Forward'
      imageUrl='https://i0.wp.com/sportytell.com/wp-content/uploads/2019/06/Giannis-Antetokounmpo-of-Milwaukee-Bucks%E2%80%94Biography-Facts.jpg?resize=680%2C350&ssl=1'
      href='#'
      statusColor='neutral'
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
    </AvatarTile>

    <AvatarTile
      displayName='Kobe Bryant'
      jobName='Shooting Guard'
      imageUrl='https://www.abc.net.au/news/image/11902598-3x2-700x467.jpg'
      href='#'
      statusColor='highlight'
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
    </AvatarTile>
  </div>
```
