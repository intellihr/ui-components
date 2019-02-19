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
  onClick= {() => { alert('I am not hoverable!') }}
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
     heading='long long long long long heading'
     headingFigure='5'
     isHeadingWarning
   >
    I have a warning heading only
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
     isSubheadingWarning
   >
   I have a warning heading only
   </Board.Tile.FigureTileContent>
 </Board.Tile>
 
 <Board.Tile
   size='small'
 >
   <Board.Tile.FigureTileContent
     label='This is a small styled content tile'
     heading='heading'
     headingFigure='1'
     subheading='subheading'
     subheadingFigure='10'
     isSubheadingWarning
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
 >
   <Board.Tile.ButtonTileContent
    icon='plus-square'
    buttonTitle='Large Tile button with a font awesome icon'
    buttonDescription='I am the tile description'
   >
    </Board.Tile.ButtonTileContent>
 </Board.Tile>
 
 <Board.Tile
   size='medium'
   isButton
 >
   <Board.Tile.ButtonTileContent
    isIntelliIcon
    icon='smile'
    buttonTitle='Medium Tile button with an IntelliIcon'
    buttonDescription='I am the tile description'
   >
   </Board.Tile.ButtonTileContent>
 </Board.Tile>
 
 <Board.Tile
    size='medium'
    isButton
    isAdmin
  >
    <Board.Tile.ButtonTileContent
     icon='comments'
     buttonTitle='Medium Tile button button button button button button button button button button'
     buttonDescription='max 3 line: it will enlarge the height of entire tiles in same row.'
    >
    </Board.Tile.ButtonTileContent>
  </Board.Tile>
 
 <Board.Tile
   size='small'
   isButton
 >
  <Board.Tile.ButtonTileContent
    isIntelliIcon
    icon='smile'
    buttonTitle='Small Tile button with an IntelliIcon'
    buttonDescription='The tile description will be hidden if it is out of 2 lines'
  >
  </Board.Tile.ButtonTileContent>
 </Board.Tile>
 
 <Board.Tile
   size='small'
   isButton
 >
  <Board.Tile.ButtonTileContent
    icon='exclamation-triangle'
    buttonTitle='small Tile button title text with a font awesome icon'
    buttonDescription='I am a small tile content.'
  >
  </Board.Tile.ButtonTileContent>
 </Board.Tile>
   
 <Board.Tile
    size='medium'
    isButton
    isAdmin
  >
   <Board.Tile.ButtonTileContent
     icon='plus-square'
     buttonTitle='small admin Tile button with a font awesome icon'
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
     <Board.Tile.CenteredTileContent
     >
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
        hasHoverMargin
     >
         <img src='https://i.imgur.com/ou4mYN4.jpg' />
        </Board.Tile.FigureTileContent>
  </Board.Tile>
  
  <Board.Tile
     size='medium'
     isHoverable
     hoverLabel='I am a long long long long hover label!'
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

