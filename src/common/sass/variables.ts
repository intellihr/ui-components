import {Props} from '..'

/**
 * The following variables are the core design variables for the entire design system
 *
 * When updating this file, ALWAYS update common/sass/variables.scss at the same time.
 * Note that only flat values should be exported from this file: maps and objects
 * cannot be exported from sass, and so cannot be kept the same between both files.
 */

// tslint:disable-next-line:no-namespace
namespace Variables {
  export enum Breakpoint {
    breakpointMin =        0,
    breakpointTablet =     640,
    breakpointDesktop =    1034,
    breakpointBigDesktop = 1440
  }

  export enum Color {
    // Neutral
    n100 = '#FFFFFF',
    n150 = '#FAFBFC',
    n200 = '#F5F7FA',
    n250 = '#EDF1F5',
    n300 = '#E1E6EB',
    n400 = '#C5CED6',
    n500 = '#8FA1B3',
    n600 = '#667380',
    n700 = '#424F5C',
    n800 = '#262D33',

    // Blue
    b100 = '#EDF4FF',
    b200 = '#CADDFC',
    b300 = '#739FE6',
    b400 = '#0F68FA',
    b500 = '#0053D9',
    b600 = '#00368C',

    // Cyan
    c100 = '#EDFCFF',
    c200 = '#C8F2FA',
    c300 = '#A2EBFA',
    c400 = '#61DAF2',
    c500 = '#4DACBF',
    c600 = '#32707D',

    // Green
    g100 = '#F1FFED',
    g200 = '#CBF2C2',
    g300 = '#9CE68A',
    g400 = '#65D747',
    g500 = '#4DA637',
    g600 = '#2F6622',

    // Indigo
    i100 = '#EFEDFF',
    i200 = '#CEC8FA',
    i300 = '#7362F5',
    i400 = '#432DF3',
    i500 = '#2512B3',
    i600 = '#0F0080',

    // Orange
    o100 = '#FFF9ED',
    o200 = '#FFEABF',
    o300 = '#FFD580',
    o400 = '#FFC145',
    o500 = '#BF8000',
    o600 = '#7F5500',

    // Red
    r100 = '#FFF1F0',
    r200 = '#FFD2CC',
    r300 = '#FF8A80',
    r400 = '#F25749',
    r500 = '#D41200',
    r600 = '#B30F00',

    // Yellow
    y100 = '#FFFDED',
    y200 = '#FFF7BF',
    y300 = '#FFEC73',
    y400 = '#FFE226',
    y500 = '#BFA91C',
    y600 = '#7F7012'
  }

  export enum FontSize {
    fzXSmall =          12,
    fzSmall =           14,
    fzBody =            16,
    fzHeading =         18,
    fzDisplay =         24,
    fzDisplayLarge =    36
  }

  export enum FontWeight {
    fwRegular =         400,
    fwMedium =          600
  }

  export enum LineHeight {
    lhXSmall =          18,
    lhSmall =           20,
    lhBody =            24,
    lhHeading =         24,
    lhDisplay =         28,
    lhDisplayLarge =    40
  }

  export enum Style {
    borderRadius = 4
  }

  export enum ZIndex {
    zIndexAbsoluteBottom =  -9999,
    zIndexDefault =         0,
    zIndexModal =           1000,
    zIndexDateInput =       2000,
    zIndexDropdownMenu =    3000,
    zIndexToaster =         4000,
    zIndexAbsoluteTop =     9999
  }

  export const fontSizeMap: { [i in Props.TypographyType]: FontSize } = {
    [Props.TypographyType.Body]: FontSize.fzBody,
    [Props.TypographyType.Display]: FontSize.fzDisplay,
    [Props.TypographyType.DisplayLarge]: FontSize.fzDisplayLarge,
    [Props.TypographyType.Heading]: FontSize.fzHeading,
    [Props.TypographyType.Small]: FontSize.fzSmall,
    [Props.TypographyType.XSmall]: FontSize.fzXSmall
  }
}

export {
  Variables
}
