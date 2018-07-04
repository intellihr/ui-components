/**
 * Import Foundation individually will cause conflict
 * with the global Foundation (i.e. lapis) if settings are different.
 *
 * We import Foundation and use it globally to void it
 */
import 'foundation-sites'

/** UI Components */
export { BaseAnchor, Anchor } from './Anchor'
export { Avatar } from './Avatar'
export { BaseButton, Button, LinkButton } from './Button'
export { Callout } from './Callout'
export { Comment } from './Comment'
export { DataTable } from './DataTable'
export { DefaultsConsumer, DefaultsProvider } from './DefaultsContext'
export { DropdownMenu, DefaultDropdownButton } from './DropdownMenu'
export { Form } from './Form'
export { FormattedText } from './FormattedText'
export { Heading } from './Heading'
export { HorizontalTabs } from './HorizontalTabs'
export { FontAwesomeIcon, IntelliIcon } from './Icon'
export { InputLabel } from './InputLabel'
export { IndentedElement } from './IndentedElement'
export { TextInput, NumberInput, CheckboxInput } from './Input'
export { Legend } from './Legend'
export { ActionLink, TextLink } from './Link'
export { Menu, MenuItem, SubMenu } from './Menu'
export { Navigation } from './Navigation'
export { Person } from './Person'
export { Pill } from './Pill'
export { RadarChart } from './RadarChart'
export { ReportHeader } from './ReportHeader'
export { ReportInfo, HighlightSection } from './ReportInfo'
export { SelectInput } from './SelectInput'
export { SmartList, ListRow, ListClickableColumn, ListColumn } from './SmartList'
export { Spinner } from './Spinner'
export { StatusIndicator } from './StatusIndicator'
export { Toast } from './Toast'
export { Text } from './Text'
export { TimeBasedLineChart } from './TimeBasedLineChart'
export { VerticalTimeline } from './VerticalTimeline'
export { VerticalTimelineEvent } from './VerticalTimelineEvent'

/** Higher Order Components */
export { withAnchor } from './Anchor'

/** Helper Functions */
export { getColor } from './Color'
