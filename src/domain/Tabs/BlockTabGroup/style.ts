import styled, { css } from 'styled-components'

import { Props, Variables } from '../../../common'
import { styleForMargins } from '../../Spacers/services/margins'

interface ITabGroupContainerProps {
  margins?: Props.IMargins
  fitContent?: boolean
}

interface ITabListItemProps {
  active: boolean
}

interface ITabListItemButtonProps {
  active: boolean,
  tabSize?: 'small' | 'medium' | 'large'
  fitContent?: boolean
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
}

const TabGroupContainer = styled.div<ITabGroupContainerProps>`
  border: 1px solid ${Variables.Color.n400};
  border-radius: ${Variables.Style.borderRadius}px;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;

  ${({ margins }) => styleForMargins(margins)}

  ${({ fitContent }) => fitContent && css`
    display: table;
    width: auto;
  `}
`

const TabList = styled.ul`
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

  &:last-child {
    border-right: 0;
  }

  ${({ active }) => active && css`
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${Variables.Color.i400};
    }
  `}
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
  width: inherit;


  ${({ active }) => active
    ? css`
      background-color: ${Variables.Color.n100};
      color: ${Variables.Color.i400};
  ` : css`
      &:hover,
      &:focus {
        background-color: ${Variables.Color.n300};
        color: ${Variables.Color.n700};
      }
  `}

  ${stylesFortabSizes}

  ${({ fitContent }) => fitContent && css`
    padding: ${Variables.Spacing.sXSmall}px ${Variables.Spacing.sLarge}px;
  `}
`

export {
  TabGroupContainer,
  TabList,
  TabListItem,
  TabListItemButton
}
