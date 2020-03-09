import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

type TabSize = 'small' | 'medium' | 'large' | 'fit-content' | 'match-largest-tab'

interface ITabGroupContainerProps {
  margins?: Props.IMargins
  tabSize?: TabSize
}

interface ITabListItemProps {
  widestWidth: number
  tabSize?: TabSize
}

interface ITabListItemButtonProps {
  hasText?: boolean
  active: boolean
  tabSize?: TabSize
}

function stylesFortabSizes (props: ITabListItemButtonProps) {
  if (props.tabSize === 'small') {
    return css`
      font-size: ${Variables.FontSize.fzXSmall}px;
      line-height: ${Variables.LineHeight.lhXSmall}px;
      padding: 7px 0;
    `
  }

  if (props.tabSize === 'medium') {
    return css`
      font-size: ${Variables.FontSize.fzSmall}px;
      line-height: ${Variables.LineHeight.lhSmall}px;
    `
  }
  if (props.tabSize === 'large') {
    return css`
      font-size: ${Variables.FontSize.fzBody}px;
      line-height: ${Variables.LineHeight.lhDisplayLarge}px;
      padding: 16px 0;
    `
  }
  if (props.tabSize === 'match-largest-tab') {
    return css`
        padding: ${Variables.Spacing.sXSmall}px ${Variables.Spacing.sLarge}px;
        ${props.hasText && css`
          font-size: ${Variables.FontSize.fzBody}px;
          line-height: ${Variables.LineHeight.lhBody}px;
        `}
      `
  }
}

const TabGroupContainer = styled.div<ITabGroupContainerProps>`
  border: 1px solid ${Variables.Color.n400};
  border-radius: ${Variables.Style.borderRadius}px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;

  ${({ margins }) => styleForMargins(margins)}

  ${({ tabSize }) => {
    if (tabSize === 'match-largest-tab') {
      return css`
        display: table;
        width: auto;
      `
    }
  }}
`

const TabList = styled.ul`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  white-space: nowrap;
`

const TabListItem = styled.li<ITabListItemProps>`
  border-right: 1px solid ${Variables.Color.n400};
  display: inline-block;
  position: relative;
  width: 100%;

  &:last-of-type {
    border-right: 0;
  }

  ${({ tabSize }) => tabSize === 'match-largest-tab' && css`
     display: table;
  `}

  ${({ tabSize, widestWidth }) => tabSize === 'match-largest-tab' && css`
    width: ${widestWidth}px;
  `}

`

interface IHilightBarProps {
  width: number
  index: number
  widestWidth: number
  widthChanging: boolean
  previousTabIndex: number
}

const HighlightBar = styled.div.attrs<IHilightBarProps>(
  ({ index, widestWidth, widthChanging, width, previousTabIndex }) => {
    let durationExtension = 0.04 * Math.abs(index - previousTabIndex)
    durationExtension = durationExtension > 250 ? 250 : durationExtension
    const duration = 0.1 + durationExtension

    return {
      style: {
        left: `${index * widestWidth - 1}px`,
        transition: widthChanging ? 'none' : `left ${duration}s ease-in`,
        width: `${width}px`
      }
    }
  }
) <IHilightBarProps>`
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: ${Variables.Color.i400};
  position: absolute;
  left: 0;
  bottom: 0;
  transition: left .1s ease-in;
`

const TabListItemButton = styled.button<ITabListItemButtonProps>`
  background-color: ${Variables.Color.n200};
  border-radius: 0;
  color: ${Variables.Color.n500};
  cursor: pointer;
  display: block;
  font-size: ${Variables.FontSize.fzSmall}px;
  font-weight: ${Variables.FontWeight.fwSemiBold};
  outline: none;
  padding: 10px 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color .15s ease-in, color .15s ease-in;
  width: 100%;
  height: 100%;
  transition: .1s ease-in;

  ${({ active }) => active
    ? css`
      background-color: ${Variables.Color.n100};
      color: ${Variables.Color.i400};
      transition: .15s ease-out;
    `
    : css`
      &:hover,
      &:focus {
        background-color: ${Variables.Color.n300};
        color: ${Variables.Color.n700};
        transition: .15s ease-out;
      }
  `}

  ${stylesFortabSizes}
`

const StyledIconContainer = styled.span<{ margins: Props.IMargins }>`
  ${({ margins }) => styleForMargins(margins)}
`

export {
  TabGroupContainer,
  TabList,
  TabListItem,
  TabListItemButton,
  HighlightBar,
  StyledIconContainer
}
