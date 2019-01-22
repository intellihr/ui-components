#### Basic Board

```jsx
<Board
    label='Basic board'
>
  <Board.Tile
      label='This is a non-compact test tile'
      isCompact={false}
    >
    <XYGrid
      gutterMarginX
    >
      <XYGrid.Cell size={{ min: 6 }}>
        <img src='https://i.imgur.com/ou4mYN4.jpg' />
      </XYGrid.Cell>
      <XYGrid.Cell size={{ min: 6 }}>
        This is a long text example. <br/>
        The tile would expand to fit the content <br/>
        "Not him old music think his found enjoy merry. Listening acuteness dependent at or an. Apartments thoroughly unsatiable terminated sex how themselves. She are ten hours wrong walls stand early. Domestic perceive on an ladyship extended received do. Why jennings our whatever his learning gay perceive. Is against no he without subject. Bed connection unreserved preference partiality not unaffected. Years merit trees so think in hoped we as. 
        Cottage out enabled was entered greatly prevent message. No procured unlocked an likewise. Dear but what she been over gay felt body. Six principles advantages and use entreaties decisively. Eat met has dwelling unpacked see whatever followed. Court in of leave again as am. Greater sixteen to forming colonel no on be. So an advice hardly barton. He be turned sudden engage manner spirit."
      </XYGrid.Cell>
    </XYGrid>
    </Board.Tile>
    
  <Board.Tile
    label='This is a test tile'
  >
  <XYGrid
    gutterMarginX
  >
    <XYGrid.Cell size={{ min: 8 }}>
      left
    </XYGrid.Cell>
    <XYGrid.Cell size={{ min: 4 }}>
      right
    </XYGrid.Cell>
  </XYGrid>
  </Board.Tile>
  
  <Board.Tile
      label='This is a test tile'
    >
    <XYGrid
      gutterMarginX
    >
      <XYGrid.Cell size={{ min: 5 }}>
        left
      </XYGrid.Cell>
      <XYGrid.Cell size={{ min: 5 }}>
        right
      </XYGrid.Cell>
    </XYGrid>
    </Board.Tile>
    
    <Board.Tile
        label='This is a test tile'
      >
      <XYGrid
        gutterMarginX
      >
        <XYGrid.Cell size={{ min: 4 }}>
          left
        </XYGrid.Cell>
        <XYGrid.Cell size={{ min: 8 }}>
          right
        </XYGrid.Cell>
      </XYGrid>
      </Board.Tile>
      
      <Board.Tile
          label='This is a test tile'
        >
        <XYGrid
          gutterMarginX
        >
          <XYGrid.Cell size={{ min: 8 }}>
            left
          </XYGrid.Cell>
          <XYGrid.Cell size={{ min: 4 }}>
            right
          </XYGrid.Cell>
        </XYGrid>
        </Board.Tile>
        
        
        <Board.Tile
            label='This is a test tile'
          >
          <XYGrid
            gutterMarginX
          >
            <XYGrid.Cell size={{ min: 8 }}>
              left
            </XYGrid.Cell>
            <XYGrid.Cell size={{ min: 4 }}>
              right
            </XYGrid.Cell>
          </XYGrid>
          </Board.Tile>
</Board>
```

