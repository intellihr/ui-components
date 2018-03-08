import Color from '../../../js/utils/ui/colour'
import { buildColourList } from '../../../js/utils/ui/colourListHelper'

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
  mainBackground: w.intelliWhite,
  mainBackgroundHover: w.intelliOffWhite,
  mainText: w.intelliDarkGrey,
  mainTextLight: w.intelliDarkGrey.lightenAbsolute(0.15),
  sidebar: w.intelliBaseWhite,
  sidebarHover: w.intelliRoyalBlueLight,
  sidebarText: w.intelliDarkGrey,
  heading: w.intelliDarkGrey,
  subheading: w.intelliDarkGrey.lightenAbsolute(0.15),

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

  badgeBackgroundLight: w.intelliGrey2,

  // Qualification compliance colours
  complianceCurrent: w.intelliGreen,
  complianceExpiringSoon: w.intelliYellow.darkenAbsolute(0.15),
  complianceFuture: w.intelliRed.lightenAbsolute(0.25),
  complianceDraft: w.intelliGrey2,
  complianceAwaitingApproval: w.intelliYellow,
  complianceDeclined: w.intelliRed.darkenAbsolute(0.25),
  complianceExpired: w.intelliRed,
  complianceNotActioned: w.intelliGrey2,
  complianceRevoked: w.intelliRed.darkenAbsolute(0.4),

  // Org Chart
  currentEntityNodeBg: w.intelliRoyalBlueLight,
  currentEntityNodeBgHover: w.intelliRoyalBlueLight.darkenAbsolute(0.03),
  currentEntityNodeTextHover: w.intelliRoyalBlue,

  entityNodeBg: w.intelliBaseWhite,
  entityNodeBgHover: w.intelliBaseWhite.darkenAbsolute(0.03),

  searchedNodeBg: w.intelliAppBlueLight,
  searchedNodeBgHover: w.intelliAppBlueLight.darkenAbsolute(0.03)
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
    hover: w.intelliRoyalBlue.darkenAbsolute(0.2),
    active: w.intelliRoyalBlue.darkenAbsolute(0.3)
  },
  secondary: {
    base: w.intelliAppBlue,
    text: w.intelliWhite,
    light: w.intelliAppBlueLight,
    hover: w.intelliAppBlue.darkenAbsolute(0.05),
    hoverText: w.intelliAppBlueLight,
    active: w.intelliAppBlue.darkenAbsolute(0.09)
  },
  success: {
    base: w.intelliGreen,
    text: w.intelliWhite,
    light: w.intelliGreenLight,
    hover: w.intelliGreen.darkenAbsolute(0.05),
    active: w.intelliGreen.darkenAbsolute(0.09)
  },
  warning: {
    base: w.intelliYellow,
    text: w.intelliDarkGrey,
    light: w.intelliYellowLight,
    hover: w.intelliYellow.darkenAbsolute(0.12),
    active: w.intelliYellow.darkenAbsolute(0.15),
    hollowActiveText: w.intelliWhite
  },
  alert: {
    base: w.intelliRed,
    text: w.intelliWhite,
    light: w.intelliRedLight,
    hover: w.intelliRed.darkenAbsolute(0.20),
    active: w.intelliRed.darkenAbsolute(0.26)
  },
  neutral: {
    base: w.intelliGreyBlue2,
    text: w.intelliDarkGrey,
    light: w.intelliBaseWhite,
    hover: w.intelliGreyBlue2.darkenAbsolute(0.05),
    active: w.intelliGreyBlue2.darkenAbsolute(0.09),
    hollowText: w.intelliDarkGrey,
    hollowHover: w.intelliGreyBlue2.alpha(0.3)
  },
  highlight: {
    base: w.intelliCyan,
    text: w.intelliWhite,
    light: Color('#D7F2FF').lightenAbsolute(0.05),
    hover: w.intelliCyan.darkenAbsolute(0.05),
    active: w.intelliCyan.darkenAbsolute(0.07)
  },
  dark: {
    base: w.intelliCharcoal,
    text: w.intelliWhite,
    light: Color('#303035').lightenAbsolute(0.05),
    hover: w.intelliCharcoal.lightenAbsolute(0.1),
    active: w.intelliCharcoal
  },
  light: {
    base: w.intelliWhite,
    text: w.intelliCharcoal,
    light: Color('#FFFFFF'),
    hover: w.intelliWhite.darkenAbsolute(0.1),
    active: w.intelliWhite.darkenAbsolute(0.2),
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

module.exports = buildColourList(systemColours, functionalColours, analyticsColours)
