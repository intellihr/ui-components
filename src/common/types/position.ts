enum Position {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Top = 'top',
  Bottom = 'bottom'
}

interface IPositionXY {
  xPos: Position.Left | Position.Right,
  yPos: Position.Top | Position.Bottom
}

export {
  Position,
  IPositionXY
}
