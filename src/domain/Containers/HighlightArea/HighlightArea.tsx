import React from 'react'

import { Props } from '../../../common'
import { StyledHighlightArea } from './style'

type Color = 'grey' | 'gray'

interface IHighlightAreaProps {
    /** Background color of the highlight area */
    color: Color
    /** Margins around the highlight area */
    margins?: Props.IMargins
    /** Children components */
    children: React.ReactNode
}

const HighlightArea: React.FC<IHighlightAreaProps> = ({ color, margins, children }) => {
    return (
        <StyledHighlightArea color={color} margins={margins}>
            {children}
        </StyledHighlightArea>
    )
}

export {
    Color,
    IHighlightAreaProps,
    HighlightArea
}
