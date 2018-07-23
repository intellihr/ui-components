const REM_IN_PX = 0.0625

const pxToRem = (px: number): number => {
  return px * REM_IN_PX
}

export {
  pxToRem
}
