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
 >
   <Board.Tile.TileContent
    iconHref='https://i.imgur.com/ou4mYN4.jpg'
    buttonTitle='Large Tile button'
    buttonDescription='I am the tile description'
   >
    </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
   size='medium'
 >
   <Board.Tile.TileContent
    iconHref='https://i.imgur.com/ou4mYN4.jpg'
    buttonTitle='Medium Tile button'
    buttonDescription='I am the tile description'
   >
   </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
    size='medium'
  >
    <Board.Tile.TileContent
     iconHref='https://i.imgur.com/ou4mYN4.jpg'
     buttonTitle='Medium Tile button button button button button button button button button button'
     buttonDescription='I have a max content in 3 lines: the long long long long long long long long long long long long long long long long long long long long long long tile description'
    >
    </Board.Tile.TileContent>
  </Board.Tile>
 
 <Board.Tile
   size='small'
 >
  <Board.Tile.TileContent
    iconHref='https://i.imgur.com/ou4mYN4.jpg'
    buttonTitle='Small Tile button title text has max in 2 lines'
    buttonDescription='The tile description will be hidden if it is out of 3 lines'
  >
  </Board.Tile.TileContent>
 </Board.Tile>
 
 <Board.Tile
     size='small'
   >
    <Board.Tile.TileContent
      buttonTitle='small Tile button title text with icon'
      buttonDescription='I am a small tile content button without icon. The tile description will be hidden if it is out of 3 lines'
    >
    </Board.Tile.TileContent>
   </Board.Tile>
   
 <Board.Tile
    size='small'
  >
   <Board.Tile.TileContent
     buttonTitle='small Tile button'
     buttonDescription='I am a small tile contentbutton without icon. The tile description will be hidden if it is out of 3 lines'
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
       iconHref='https://i.imgur.com/ou4mYN4.jpg'
       buttonTitle='Small Tile button title text has max in 2 lines'
       buttonDescription='The tile description will be hidden if it is out of 3 lines'
     >
     </Board.Tile.TileContent>
  </Board.Tile>
  
  <Board.Tile
     size='small'
     isHoverable
     hoverLabel='hover label'
  >
     <Board.Tile.TileContent
        buttonTitle='small Tile button'
        buttonDescription='I am a small tile content button without icon. The tile description will be hidden if it is out of 3 lines'
     >
     </Board.Tile.TileContent>
  </Board.Tile>
    
  
</Board>
```

