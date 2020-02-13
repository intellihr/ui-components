import styled from 'styled-components'

import { Props } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const MarginEmptyState= styled.div<{margins?: Props.IMargins}>`
   ${(props: {margins?: Props.IMargins}) => styleForMargins(props.margins)}
`

export {
    MarginEmptyState
}
