#### Board with basic tiles

```jsx
<Board
 label='Basic tiles'
>
  <Board.Tile
    size='large'
    onClick= {() => { alert('I am a large tile') }}
  >
  </Board.Tile>

  <Board.Tile
    size='medium'
    onClick= {() => { alert('I am a medium tile') }}
  >
  </Board.Tile>

  <Board.Tile
    size='medium'
    onClick= {() => { alert('I am a medium tile') }}
  >
  </Board.Tile>

  <Board.Tile
    size='small'
    onClick= {() => { alert('I am a small tile') }}
  >
  </Board.Tile>

  <Board.Tile
    size='small'
    onClick= {() => { alert('I am a small tile') }}
  >
  </Board.Tile>

  <Board.Tile
    size='small'
    onClick= {() => { alert('I am a small tile') }}
  >
  </Board.Tile>
</Board>
```

#### Board with tiles that are not hoverable

```jsx
<Board
  label='Basic tiles'
>
  <Board.Tile
    size='large'
    isHoverable={false}
  >
  </Board.Tile>

  <Board.Tile
    size='medium'
    isHoverable={false}
  >
  </Board.Tile>

  <Board.Tile
    size='small'
    isHoverable={false}
  >
  </Board.Tile>
</Board>
```

#### Board with right component
   
```jsx
import { TextLink } from '@Domain/Links';

<Board
 label='Basic tiles'
 rightComponent={
  <TextLink
    onClick={(e)=> {
      e.preventDefault();
      alert('I am the right component')
    }}
    textType='small'
  >
    I am the message
  </TextLink>
 }
>
 <Board.Tile
  size='large'
  onClick= {() => { alert('I am a large tile') }}
 >
 </Board.Tile>
</Board>
```

#### Board with tiles with anchor href

```jsx
<Board
  label='Basic tiles'
>
  <Board.Tile
    size='large'
    anchorHref='#'
  >
  </Board.Tile>

  <Board.Tile
    size='medium'
    anchorHref='#'
  >
  </Board.Tile>

  <Board.Tile
    size='small'
    anchorHref='#'
  >
  </Board.Tile>
</Board>
```


#### Board with centered tile contents

```jsx
<Board
  label='Centered tile contents'
>
  <Board.Tile
    size='large'
   >
    <Board.Tile.CenteredTileContent
      label='This is a large test tile'
    >
      I am the centered content
    </Board.Tile.CenteredTileContent>
  </Board.Tile>

  <Board.Tile
    size='medium'
  >
    <Board.Tile.CenteredTileContent
      label='This is a medium test tile'
    >
      I am the centered content
    </Board.Tile.CenteredTileContent>
  </Board.Tile>

  <Board.Tile
    size='small'
  >
    <Board.Tile.CenteredTileContent
      label='This is a small test tile'
    >
      I am the centered content
    </Board.Tile.CenteredTileContent>
  </Board.Tile>
</Board>
```

#### Board with figure tile content

```jsx
<Board
 label='Styled tile content headings'
>
  <Board.Tile
    size='large'
  >
    <Board.Tile.FigureTileContent
      label='This is a large styled content tile'
      heading='heading'
      headingFigure='12'
      subheading='subheading'
      subheadingFigure='1'
    >
    </Board.Tile.FigureTileContent>
  </Board.Tile>

  <Board.Tile
  size='medium'
  >
    <Board.Tile.FigureTileContent
      label='This is a medium styled content tile'
      heading='alert! alert! alert! alert! alert!'
      headingFigure='5'
      headingStyle='alert'
    >
      I have a alert heading only
      "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set."
    </Board.Tile.FigureTileContent>
  </Board.Tile>

  <Board.Tile
    size='medium'
  >
    <Board.Tile.FigureTileContent
      label='This is a medium styled content tile'
      subheading='long long long long long subheading'
      subheadingFigure='10'
      subheadingStyle='alert'
    >
      I have a alert heading only
    </Board.Tile.FigureTileContent>
  </Board.Tile>

    <Board.Tile
      size='small'
    >
      <Board.Tile.FigureTileContent
        label='This is a small styled content tile'
        heading='warning!'
        headingFigure='1'
        headingStyle='warning'
        subheading='success!'
        subheadingFigure='10'
        subheadingStyle='success'
      >
    </Board.Tile.FigureTileContent>
  </Board.Tile>
</Board>
```

#### Board with button tile content

```jsx
<Board
 label='Styled tile content buttons'
>
  <Board.Tile
    size='large'
    isButton
    anchorHref='#'
  >
    <Board.Tile.ButtonTileContent
      iconType='fa-plus-square'
      label='Large Tile button with a font awesome icon'
      buttonDescription='I am the tile description'
    >
    </Board.Tile.ButtonTileContent>
  </Board.Tile>

  <Board.Tile
    size='medium'
    isButton
  >
    <Board.Tile.ButtonTileContent
      iconType='intelli-icon-smile'
      label='Medium Tile button with an IntelliIcon'
      buttonDescription='I am the tile description'
    >
    </Board.Tile.ButtonTileContent>
  </Board.Tile>

  <Board.Tile
    size='medium'
    type='hollow'
    isButton
  >
    <Board.Tile.ButtonTileContent
      iconType='fa-comments'
      label='Medium Tile button button button button button button button button button button'
      buttonDescription='Button description has a maximum line count of 3. This means that long content will have text hidden if the content goes over 3 lines in length.'
    >
    </Board.Tile.ButtonTileContent>
  </Board.Tile>

  <Board.Tile
    size='small'
    isButton
  >
    <Board.Tile.ButtonTileContent
      iconType='intelli-icon-smile'
      label='Small Tile button with an IntelliIcon'
      buttonDescription='Button description has a maximum line count of 3. This means that long content will have text hidden if the content goes over 3 lines in length.'
    >
    </Board.Tile.ButtonTileContent>
  </Board.Tile>

  <Board.Tile
    size='small'
    isButton
  >
    <Board.Tile.ButtonTileContent
      iconType='fa-exclamation-triangle'
      label='small Tile button title text with a font awesome icon'
      buttonDescription='I am a small tile content.'
    >
    </Board.Tile.ButtonTileContent>
  </Board.Tile>

  <Board.Tile
    size='medium'
    type='hollow'
    isButton
  >
    <Board.Tile.ButtonTileContent
      iconType='fa-plus-square'
      label='small admin Tile button with a font awesome icon'
      buttonDescription=' admin content be hidden if it is out of 3 lines'
    >
    </Board.Tile.ButtonTileContent>
  </Board.Tile>
</Board>
```

#### Board with hover label

```jsx
<Board
  label='Centered tile contents'
>
  <Board.Tile
    size='large'
    isHoverable
    hoverLabel='hover label'
  >
    <Board.Tile.CenteredTileContent>
      I am the centered content
    </Board.Tile.CenteredTileContent>
  </Board.Tile>

  <Board.Tile
    size='medium'
    isHoverable
    hoverLabel='hover label'
  >
    <Board.Tile.FigureTileContent
      label='This is a medium styled content tile'
      heading='heading'
      headingFigure='5'
      subheading='subheading'
      subheadingFigure='1'
    >
      <img src='https://i.imgur.com/ou4mYN4.jpg' />
    </Board.Tile.FigureTileContent>
  </Board.Tile>

  <Board.Tile
    size='medium'
    isHoverable
    hoverLabel='truncated hover label should be one row only'
  >
    <Board.Tile.CenteredTileContent
      label='This is a medium test tile'
    >
      I am the centered content
    </Board.Tile.CenteredTileContent>
  </Board.Tile>

  <Board.Tile
    size='small'
    isHoverable
    hoverLabel='hover label'
  >
    <Board.Tile.CenteredTileContent
      label='This is a small test tile'
    >
      I am the centered content.
    </Board.Tile.CenteredTileContent>
  </Board.Tile>
</Board>
```


#### Tile of type Card

```jsx
  import {
    FontAwesomeIcon,
    IntelliIcon
  } from '@Domain/Icons';

  <Board
    label='A collection of cards'
  >
    <Board.Tile
      size='medium'
      type='card'
    >
      <Board.Tile.CenteredTileContent
        image='https://pbs.twimg.com/profile_images/921785062626127873/FbfY4sRz_400x400.jpg'
        heading='John Wick'
        subheading='The boogeyman'
        text="People keep asking if I'm back and I haven't really had an answer. But now, yeah, I'm thinkin' I'm back. So you can either hand over your son or you can die screaming alongside him!"
      />
    </Board.Tile>

    <Board.Tile
      size='medium'
      type='card'
    >
      <Board.Tile.CenteredTileContent
        image='https://consequenceofsound.files.wordpress.com/2018/05/liam-neeson-taken.jpg?quality=80&w=807'
        heading='Bryan Mills'
        subheading='Preventer'
        text="If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you."
      />
    </Board.Tile>

    <Board.Tile
      size='medium'
      type='card'
    >
      <Board.Tile.CenteredTileContent
        icon={<IntelliIcon type='smile' customSize={5} />}
        heading='Jeffrey'
        subheading='Harmless guy'
        text="Oh, it's a bit of this, a bit of that. It's called a Jeffrey."
      />
    </Board.Tile>
  </Board>
```
