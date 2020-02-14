import styled from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

const StyledEmptyState= styled.div<{margins?: Props.IMargins}>`
   ${(props: {margins?: Props.IMargins}) => styleForMargins(props.margins)}

    background-color: ${Variables.Color.n150};
    border-color: ${Variables.Color.n400};
    border-width: 0;
    flex-grow: 1;
    padding: 48px;
    text-align: center;

    >.ihr-primary-message {
    color: ${Variables.Color.n700};
    font-size: ${Variables.FontSize.fzHeading}px;
    font-weight: ${Variables.FontWeight.fwSemiBold};
    letter-spacing: -.02em;
    line-height: ${Variables.LineHeight.lhBody}px;
    margin-bottom: ${Variables.Spacing.sXSmall}px;
    }

    >.ihr-secondary-message {
    color: ${Variables.Color.n600};
    font-size: ${Variables.FontSize.fzBody}px;
    font-weight: ${Variables.FontWeight.fwNormal};
    letter-spacing: normal;
    line-height: ${Variables.LineHeight.lhBody}px;
    margin-bottom: ${Variables.Spacing.sMedium}px;
    }

    >.ihr-button-component {
    color: ${Variables.Color.n600};
    font-size: ${Variables.FontSize.fzBody}px;
    font-weight: ${Variables.FontWeight.fwNormal};
    letter-spacing: normal;
    line-height: ${Variables.LineHeight.lhHeading}px;
    margin: 10px 0 20px;

    span {
        background-color: ${Variables.Color.n300};
        border-color: transparent;
        border-radius: ${Variables.Style.borderRadius}px;
        color: ${Variables.Color.n700};
        font-size: ${Variables.FontSize.fzXSmall}px;
        font-weight: ${Variables.FontWeight.fwSemiBold};
        padding: .85em 1em;

        &:hover {
        background-color: ${Variables.Color.n400};
        color: ${Variables.Color.n700};
        }

        &:active {
        background-color: ${Variables.Color.n600};
        color: ${Variables.Color.n100};
        }

        &:focus {
        background-color: ${Variables.Color.n400};
        border-color: ${Variables.Color.n600};
        color: ${Variables.Color.n700};
        }
    }
    }

    >.ihr-image-component {
    margin-top: ${Variables.Spacing.sMedium}px;
    }
`

export {
    StyledEmptyState
}
