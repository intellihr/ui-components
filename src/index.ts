/**
 * Import Foundation individually will cause conflict
 * with the global Foundation (i.e. lapis) if settings are different.
 *
 * We import Foundation and use it globally to void it
 */
import 'foundation-sites'

/** UI Components */
export { BaseAnchor, Anchor } from './Anchor'
export { Pill } from './Pill'
export { Avatar } from './Avatar'
export { Callout } from './Callout'
export { Comment } from './Comment'
export { DefaultsConsumer, DefaultsProvider } from './DefaultsContext'
export { StatusIndicator } from './StatusIndicator'
export { FontAwesomeIcon, IntelliIcon } from './Icon'
export { ActionLink, TextLink } from './Link'
export { RadarChart } from './RadarChart'
export { VerticalTimeline } from './VerticalTimeline'
export { VerticalTimelineEvent } from './VerticalTimelineEvent'
export { TimeBasedLineChart } from './TimeBasedLineChart'
export { Legend } from './Legend'
export { ReportHeader } from './ReportHeader'
export { ReportInfo, HighlightSection } from './ReportInfo'
export { FormattedText } from './FormattedText'
export { BaseButton, Button, LinkButton } from './Button'
export { Toast } from './Toast'
export { Spinner } from './Spinner'
export { Menu, MenuItem, SubMenu } from './Menu'
export { SmartList, ListRow, ListClickableColumn, ListColumn } from './SmartList'
export { TextInput, NumberInput, CheckboxInput } from './Input'
export { SelectInput } from './SelectInput'
export { Form } from './Form'
export { Navigation } from './Navigation'
export { Text } from './Text'
export { Heading } from './Heading'
export { InputLabel } from './InputLabel'
export { IndentedElement } from './IndentedElement'

/** Higher Order Components */
export { withAnchor } from './Anchor'

/** Helper Functions */
export { getColor } from './Color'
