import Color from 'color'
import { kebabCase, mapKeys } from 'lodash'

function clamp (val: number) {
  return Math.min(100, Math.max(0, val))
}

const lightenAbsolute = (ratio: number) => (c: Color) => {
  const hsl: any = c.hsl()
  hsl.color[2] += ratio * 100
  hsl.color[2] = clamp(hsl.color[2])

  return hsl
}

const darkenAbsolute = (ratio: number) => (c: Color) => {
  const hsl: any = c.hsl()
  hsl.color[2] -= ratio * 100
  hsl.color[2] = clamp(hsl.color[2])

  return hsl
}

function buildFunctionalColour (colour: any) {
  const functionalColour: any = {}
  const requiredKeys = ['base', 'text', 'light', 'hover', 'active']
  const optionalKeyPairs = [
    ['hoverText', 'text', 1.0],
    ['hollowBase', 'base', 1.0],
    ['hollowText', 'base', 1.0],
    ['hollowHover', 'base', 0.1],
    ['hollowActive', 'base', 1.0],
    ['hollowActiveText', 'text', 1.0]
  ]

  requiredKeys.forEach(
    (key) => {
      functionalColour[key] = colour[key].toString()
    }
  )

  optionalKeyPairs.forEach(
    (pair: any) => {
      functionalColour[pair[0]] = colour[pair[0]]
        ? colour[pair[0]].toString()
        : colour[pair[1]].alpha(pair[2]).toString()
    }
  )

  return functionalColour
}


const w = {
  // Brand Colours
  intelliRoyalBlue: Color('#432DF3'),
  intelliGreen: Color('#04DBAC'),
  intelliYellow: Color('#FFDD37'),
  intelliRed: Color('#FF4D50'),
  intelliCyan: Color('#03DEEB'),
  intelliPurple: Color('#A35AFF'),
  intelliCharcoal: Color('#303035'),
  intelliGrey1: Color('#B3B3B5'),
  intelliGrey2: Color('#E4E4E5'),
  intelliBaseWhite: Color('#F5F7F9'),
  intelliOffWhite: Color('#F5F5F5'),

  // App Colours
  intelliAppBlue: Color('#0F68FA'),
  intelliDarkGrey: Color('#47525D'),
  intelliGreyBlue1: Color('#C3CCD0'),
  intelliGreyBlue2: Color('#DFE5E8'),
  intelliWhite: Color('#FFFFFF'),
  intelliRoyalBlueLight: Color('#EBE9FE'),
  intelliAppBlueLight: Color('#D7F2FF'),
  intelliGreenLight: Color('#E0FEF8'),
  intelliYellowLight: Color('#FFF9DA'),
  intelliRedLight: Color('#FFE6E6')
}

const systemColours = {
  modalOverlay: w.intelliCharcoal.fade(0.55),
  mainBackground: w.intelliWhite,
  mainBackgroundHover: w.intelliOffWhite,
  mainText: w.intelliDarkGrey,
  mainTextLight: lightenAbsolute(0.15)(w.intelliDarkGrey),
  sidebar: w.intelliBaseWhite,
  sidebarHover: w.intelliRoyalBlueLight,
  sidebarText: w.intelliDarkGrey,
  heading: w.intelliDarkGrey,
  subheading: lightenAbsolute(0.15)(w.intelliDarkGrey),

  buttonText: w.intelliDarkGrey,
  buttonTextAlt: w.intelliBaseWhite,

  linkText: w.intelliAppBlue,
  border: w.intelliGreyBlue1,
  borderLight: w.intelliGreyBlue2,

  foundationWhite: w.intelliWhite,
  foundationLightGrey: w.intelliGreyBlue2,
  foundationMidGrey: w.intelliGreyBlue1,
  foundationDarkGrey: w.intelliDarkGrey,
  foundationBlack: w.intelliCharcoal,

  badgeBackgroundDark: darkenAbsolute(0.15)(w.intelliGrey1),
  badgeBackgroundLight: w.intelliGrey2,

  // Qualification compliance colours
  complianceCurrent: w.intelliGreen,
  complianceExpiringSoon: darkenAbsolute(0.15)(w.intelliYellow),
  complianceFuture: lightenAbsolute(0.25)(w.intelliRed),
  complianceDraft: w.intelliGrey2,
  complianceAwaitingApproval: w.intelliYellow,
  complianceDeclined: darkenAbsolute(0.25)(w.intelliRed),
  complianceExpired: w.intelliRed,
  complianceNotActioned: w.intelliGrey2,
  complianceRevoked: darkenAbsolute(0.4)(w.intelliRed),

  // Org Chart
  currentEntityNodeBg: w.intelliRoyalBlueLight,
  currentEntityNodeBgHover: darkenAbsolute(0.03)(w.intelliRoyalBlueLight),
  currentEntityNodeTextHover: w.intelliRoyalBlue,

  entityNodeBg: w.intelliBaseWhite,
  entityNodeBgHover: darkenAbsolute(0.03)(w.intelliBaseWhite),

  searchedNodeBg: w.intelliAppBlueLight,
  searchedNodeBgHover: darkenAbsolute(0.03)(w.intelliAppBlueLight)
}

/**
 * Required keys:
 *  - base
 *  - text
 *  - light
 *  - hover
 *  - active
 * Optional keys with defaults:
 *  - hoverText = text
 *  - hollowBase = base
 *  - hollowText = base
 *  - hollowHover = base.alpha(0.1)
 *  - hollowActive = base
 *  - hollowActiveText = text
 */
const functionalColours = {
  primary: {
    base: w.intelliRoyalBlue,
    text: w.intelliWhite,
    light: w.intelliRoyalBlueLight,
    hover: darkenAbsolute(0.2)(w.intelliRoyalBlue),
    active: darkenAbsolute(0.3)(w.intelliRoyalBlue)
  },
  secondary: {
    base: w.intelliAppBlue,
    text: w.intelliWhite,
    light: w.intelliAppBlueLight,
    hover: darkenAbsolute(0.05)(w.intelliAppBlue),
    hoverText: w.intelliAppBlueLight,
    active: darkenAbsolute(0.09)(w.intelliAppBlue)
  },
  success: {
    base: w.intelliGreen,
    text: w.intelliWhite,
    light: w.intelliGreenLight,
    hover: darkenAbsolute(0.05)(w.intelliGreen),
    active: darkenAbsolute(0.09)(w.intelliGreen)
  },
  warning: {
    base: w.intelliYellow,
    text: w.intelliDarkGrey,
    light: w.intelliYellowLight,
    hover: darkenAbsolute(0.12)(w.intelliYellow),
    active: darkenAbsolute(0.15)(w.intelliYellow),
    hollowActiveText: w.intelliWhite
  },
  alert: {
    base: w.intelliRed,
    text: w.intelliWhite,
    light: w.intelliRedLight,
    hover: darkenAbsolute(0.20)(w.intelliRed),
    active: darkenAbsolute(0.26)(w.intelliRed)
  },
  neutral: {
    base: w.intelliGreyBlue2,
    text: w.intelliDarkGrey,
    light: w.intelliBaseWhite,
    hover: darkenAbsolute(0.05)(w.intelliGreyBlue2),
    active: darkenAbsolute(0.09)(w.intelliGreyBlue2),
    hollowText: w.intelliDarkGrey,
    hollowHover: w.intelliGreyBlue2.alpha(0.3)
  },
  highlight: {
    base: w.intelliCyan,
    text: w.intelliWhite,
    light: lightenAbsolute(0.05)(Color('#D7F2FF')),
    hover: darkenAbsolute(0.05)(w.intelliCyan),
    active: darkenAbsolute(0.07)(w.intelliCyan)
  },
  dark: {
    base: w.intelliCharcoal,
    text: w.intelliWhite,
    light: lightenAbsolute(0.05)(Color('#303035')),
    hover: lightenAbsolute(0.1)(w.intelliCharcoal),
    active: w.intelliCharcoal
  },
  light: {
    base: w.intelliWhite,
    text: w.intelliCharcoal,
    light: Color('#FFFFFF'),
    hover: darkenAbsolute(0.1)(w.intelliWhite),
    active: darkenAbsolute(0.2)(w.intelliWhite),
    hollowHover: w.intelliWhite.alpha(0.18),
    hollowActive: w.intelliWhite.alpha(0.1),
    hollowActiveText: w.intelliWhite
  }
}

const analyticsColours = {
  blue1: Color('#01579B'),
  blue2: Color('#0F68FA'),
  blue3: Color('#03DEEB'),
  purple1: Color('#341D92'),
  purple2: Color('#5D2EE6'),
  purple3: Color('#A35AFF'),
  pink1: Color('#C24F81'),
  pink2: Color('#EC407A'),
  pink3: Color('#FFA6A7'),
  orange1: Color('#FF6E40'),
  orange2: Color('#FFC107'),
  orange3: Color('#FFE59F'),
  green1: Color('#089183'),
  green2: Color('#1DE9B6'),
  green3: Color('#99FFF3'),
  green4: Color('#04DBAC'),
  red1: Color('#FF4D50')
}

function buildColourList () {
  const colourList: any = {}
  const functionalExport: any = {}

  for (const key of Object.keys(systemColours) as Array<keyof typeof systemColours>) {
    colourList[key] = systemColours[key].toString()
  }

  for (const key of Object.keys(analyticsColours) as Array<keyof typeof analyticsColours>) {
    colourList[`analytics-${key}`] = analyticsColours[key].toString()
  }
  colourList['analytics-colours'] = analyticsColours

  for (const key of Object.keys(functionalColours) as Array<keyof typeof functionalColours>) {
    const functionalColour = buildFunctionalColour(functionalColours[key])

    for (const type of Object.keys(functionalColour)) {
      colourList[key + '-' + type] = functionalColour[type]
    }

    colourList[key] = functionalColour.base
    functionalExport[key] = functionalColour
  }

  colourList['functional-colours'] = functionalExport

  return mapKeys(colourList, (value, key) => {
    return kebabCase(key)
  })
}

export default buildColourList()
