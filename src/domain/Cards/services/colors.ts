import { Variables } from '../../../common'
import { CardColors } from '../Card/Card'

interface IColorOption {
  border: Variables.Color
  background: Variables.Color
  hoverBackground: Variables.Color
  extraContentBackground: Variables.Color
  hoverButtonBackground: Variables.Color
}

type ColorOptions = {
  [K in CardColors]: IColorOption
}

const colorOptions: ColorOptions = {
  neutral: {
    border: Variables.Color.n250,
    background: Variables.Color.n100,
    hoverBackground: Variables.Color.n200,
    extraContentBackground: Variables.Color.n150,
    hoverButtonBackground: Variables.Color.n300
  },
  orange: {
    border: Variables.Color.n250,
    background: Variables.Color.o100,
    hoverBackground: Variables.Color.o200,
    extraContentBackground: Variables.Color.o100,
    hoverButtonBackground: Variables.Color.o300
  },
  red: {
    border: Variables.Color.n250,
    background: Variables.Color.r100,
    hoverBackground: Variables.Color.r200,
    extraContentBackground: Variables.Color.r100,
    hoverButtonBackground: Variables.Color.r300
  }
}

export {
  colorOptions
}
