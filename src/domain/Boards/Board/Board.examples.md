#### Board with basic tiles
   
```jsx
<Board
 label='Basic tiles'
>
 <Board.Tile
  size='large'
  onClick= {() => { alert('I am a large tile') }}
  isHoverable
 >
 </Board.Tile>
 
 <Board.Tile
  size='medium'
  onClick= {() => { alert('I am a medium tile') }}
  isHoverable
 >
 </Board.Tile>
 
 <Board.Tile
  size='medium'
  onClick= {() => { alert('I am a medium tile') }}
  isHoverable
 >
 </Board.Tile>
 
 <Board.Tile
  size='small'
  onClick= {() => { alert('I am a small tile') }}
  isHoverable
 >
 </Board.Tile>
 
 <Board.Tile
  size='small'
  onClick= {() => { alert('I am a small tile') }}
  isHoverable
 >
 </Board.Tile>
  
 <Board.Tile
  size='small'
  onClick= {() => { alert('I am a small tile') }}
  isHoverable
 >
 </Board.Tile>
</Board>
```

#### Board with tiles contents

```jsx
<Board
  label='Centered tile contents'
> 
  <Board.Tile
     size='large'
   >
     <Board.Tile.TileContent
       label='This is a large test tile'
     >
       I am the centered content
     </Board.Tile.TileContent>
  </Board.Tile>
  
  <Board.Tile
     size='medium'
  >
     <Board.Tile.TileContent
       label='This is a medium test tile'
     >
       I am the centered content
     </Board.Tile.TileContent>
  </Board.Tile>
  
  <Board.Tile
     size='small'
  >
     <Board.Tile.TileContent
       label='This is a small test tile'
     >
       I am the centered content
     </Board.Tile.TileContent>
  </Board.Tile>
</Board>
```

#### Board with tile content headings
   
```jsx
<Board
 label='Styled tile content headings'
>
 <Board.Tile
   size='large'
 >
   <Board.Tile.TileContent
     label='This is a large styled content tile'
     heading='heading'
     headingFigure='12'
     subheading='subheading'
     subheadingFigure='1'
   >
   </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
   size='medium'
 >
   <Board.Tile.TileContent
     label='This is a medium styled content tile'
     heading='long long long long long heading'
     headingFigure='5'
     isHeadingWarning
   >
    I have a warning heading only
    "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. There is a coolness, a calmness, when the sun does set."
   </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
   size='medium'
 >
   <Board.Tile.TileContent
     label='This is a medium styled content tile'
     subheading='long long long long long subheading'
     subheadingFigure='10'
     isSubheadingWarning
   >
   I have a warning heading only
   </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
   size='small'
 >
   <Board.Tile.TileContent
     label='This is a small styled content tile'
     heading='heading'
     headingFigure='1'
     subheading='subheading'
     subheadingFigure='10'
     isSubheadingWarning
   >
   </Board.Tile.TileContent>
 </Board.Tile>
</Board>
```

#### Board with tile content buttons
   
```jsx
<Board
 label='Styled tile content buttons'
>
 <Board.Tile
   size='large'
   isButton
 >
   <Board.Tile.TileContent
    icon='plus-square'
    buttonTitle='Large Tile button with a font awesome icon'
    buttonDescription='I am the tile description'
   >
    </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
   size='medium'
   isButton
 >
   <Board.Tile.TileContent
    isIntelliIcon
    icon='smile'
    buttonTitle='Medium Tile button with an IntelliIcon'
    buttonDescription='I am the tile description'
   >
   </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
    size='medium'
    isButton
    isAdmin
  >
    <Board.Tile.TileContent
     icon='comments'
     buttonTitle='Medium Tile button button button button button button button button button button'
     buttonDescription='I have a max content in 2 lines: the long long long long long long long long long long long long long long long long long long long long long long tile description'
    >
    </Board.Tile.TileContent>
  </Board.Tile>
 
 <Board.Tile
   size='small'
   isButton
 >
  <Board.Tile.TileContent
    isIntelliIcon
    icon='smile'
    buttonTitle='Small Tile button with an IntelliIcon'
    buttonDescription='The tile description will be hidden if it is out of 2 lines'
  >
  </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
   size='small'
   isButton
 >
  <Board.Tile.TileContent
    icon='exclamation-triangle'
    buttonTitle='small Tile button title text with a font awesome icon'
    buttonDescription='I am a small tile content.'
  >
  </Board.Tile.TileContent>
 </Board.Tile>
   
 <Board.Tile
    size='medium'
    isButton
    isAdmin
  >
   <Board.Tile.TileContent
     icon='plus-square'
     buttonTitle='small admin Tile button with a font awesome icon'
     buttonDescription=' be hidden if it is out of 2 lines'
   >
   </Board.Tile.TileContent>
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
     <Board.Tile.TileContent
     >
       I am the centered content
     </Board.Tile.TileContent>
  </Board.Tile>
  
  <Board.Tile
     size='medium'
     isHoverable
     hoverLabel='hover label'
  >
     <Board.Tile.TileContent
        label='This is a medium styled content tile'
        heading='heading'
        headingFigure='5'
        subheading='subheading'
        subheadingFigure='1'
     >
         <img src='https://i.imgur.com/ou4mYN4.jpg' />
         I am the content
        </Board.Tile.TileContent>
  </Board.Tile>
  
  <Board.Tile
     size='medium'
     isHoverable
     hoverLabel='I am a long long long long hover label!'
  >
     <Board.Tile.TileContent
       label='This is a medium test tile'
     >
       I am the centered content
     </Board.Tile.TileContent>
  </Board.Tile>
  
  <Board.Tile
     size='small'
     isHoverable
     hoverLabel='hover label'
  >
     <Board.Tile.TileContent
       label='This is a small test tile'
     >
       I am the centered content. 
     </Board.Tile.TileContent>
  </Board.Tile>
    
  
</Board>
```

