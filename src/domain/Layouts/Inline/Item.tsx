import React from 'react'

import { Props, Variables } from '../../../common'
import { StyledInlineElement, StyledInlineGroup, StyledInlineGroupWrapper } from './style'

interface IInlineItemProps {
  fill?: boolean
}

const Item: React.FC<IInlineItemProps> = ({children}) => {
  return <>{children}</>
}

export {
  Item
}
